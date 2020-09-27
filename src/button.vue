<template>
    <button class="reef-button" :class="{[`btn-${type}`]:true,[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <reef-icon :fill="fill" :name="icon" v-if="icon && !loading"></reef-icon>
        <reef-icon :fill="fill" class="loading" name="loading" v-if="loading"></reef-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    // TODO 1.不同尺寸的按钮 size small middle large
    import Icon from "./icon";

    export default {
        name: "reef-button",
        props: {
            type: {
                type: String,
                default: 'normal'
            },
            icon: {
                type: String,
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    return ['left', 'right'].indexOf(value) > -1;
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        components: {
            "reef-icon": Icon
        },
        computed: {
            fill() {
                if (this.type && this.type.toLowerCase() !== 'normal') {
                    return 'white';
                }
            }
        }

    };
</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $TURQUOISE: #1ABC9C;
    $GREEN-SEA: #16A085;
    $EMERALD: #2ECC71;
    $NEPHRITIS: #27AE60;
    $PETER-RIVER: #3498DB;
    $BELIZE-HOLE: #2980B9;
    $AMETHYST: #9B59B6;
    $WISTERIA: #8E44AD;
    $WET-ASPHALT: #34495E;
    $MIDNIGHT-BLUE: #2C3E50;
    $SUN-FLOWER: #F1C40F;
    $ORANGE: #F39C12;
    $CARROT: #E67E22;
    $PUMPKIN: #D35400;
    $ALIZARIN: #E74C3C;
    $POMEGRANATE: #C0392B;
    $CLOUDS: #ECF0F1;
    $SILVER: #BDC3C7;
    $CONCRETE: #95A5A6;
    $ASBESTOS: #7F8C8D;
    $blue: #007bff;
    $indigo: #6610f2;
    $purple: #6f42c1;
    $pink: #e83e8c;
    $red: #dc3545;
    $orange: #fd7e14;
    $yellow: #ffc107;
    $green: #28a745;
    $teal: #20c997;
    $cyan: #17a2b8;
    $white: #fff;
    $gray: #6c757d;
    $gray-dark: #343a40;
    $primary: #007bff;
    $secondary: #6c757d;
    $success: #28a745;
    $info: #17a2b8;
    $warning: #ffc107;
    $danger: #dc3545;
    $light: #f8f9fa;
    $dark: #343a40;
    $button-bg-primary: #1ABC9C;
    $button-bg-warning: #F1C40F;
    $button-bg-danger: #E74C3C;
    $button-bg-success: #2ECC71;
    $button-bg-info: #3498db;
    $button-bg-default: #bdc3c7;
    $button-bg-normal: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $button-color: white;
    $button-color-normal: #2C3E50;
    $border-color-normal: #2C3E50;
    $border-color: transparent;
    $border-color-hover: #33cc99;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .reef-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0.5em 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        display: inline-flex;
        color: $button-color;
        justify-content: center;
        align-items: center;
        vertical-align: middle; //解决多个按钮内联的时候高度不一致bug
        &.btn-primary {
            background-color: $GREEN-SEA
        ;
        }
        &.btn-primary:hover {
            background-color: $button-bg-primary;
        }

        &.btn-warning {
            background-color: $ORANGE;
        }

        &.btn-warning:hover {
            background-color: $button-bg-warning;
        }

        &.btn-danger {
            background-color: $POMEGRANATE;
        }
        &.btn-danger:hover {
            background-color: $button-bg-danger;
        }

        &.btn-info {
            background-color: $BELIZE-HOLE;
        }
        &.btn-info:hover {
            background-color: $button-bg-info;
        }

        &.btn-default {
            background-color: $button-bg-default;
        }
        &.btn-default:hover{
            background-color: #cacfd2;
        }
        &.btn-success {
            background-color: $NEPHRITIS;
        }
        &.btn-success:hover {
            background-color: $button-bg-success;
        }

        &.btn-normal {
            background-color: $button-bg-normal;
            border-color: $button-color-normal;
            color: $button-color-normal
        }

        &:not(.btn-normal):hover {
            border-color: transparent;
            cursor: pointer;
        }
        &.btn-normal:hover {
            background-color: $light;
            cursor: pointer;

        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        &.icon-left {
            > .content {
                order: 2
            }

            > .icon {
                order: 1;
                margin-right: 0.3em;
                margin-left: 0;
            }
        }

        &.icon-right {
            > .content {
                order: 1
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.3em;
            }
        }

        .loading {
            animation: spin 1s infinite;
        }

    }

</style>