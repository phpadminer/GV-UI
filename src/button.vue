<template>
    <button class="reef-button" :class="{[`icon-${type}`]:true,[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <reef-icon :fill="fill" :name="icon" v-if="icon && !loading"></reef-icon>
        <reef-icon :fill="fill" class="loading" name="loading" v-if="loading"></reef-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
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
        computed:{
            fill(){
                if(this.type && this.type.toLowerCase() !== 'normal'){
                    return 'white'
                }
            }
        }

    };
</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
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
        padding: 0.5rem 1rem;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        display: inline-flex;
        color: $button-color;
        justify-content: center;
        align-items: center;
        vertical-align: middle; //解决多个按钮内联的时候高度不一致bug
        &.icon-primary {
            background-color: $button-bg-primary;
        }

        &.icon-warning {
            background-color: $button-bg-warning;
        }

        &.icon-danger {
            background-color: $button-bg-danger;
        }

        &.icon-info {
            background-color: $button-bg-info;
        }

        &.icon-default {
            background-color: $button-bg-default;
        }

        &.icon-success {
            background-color: $button-bg-success;
        }

        &.icon-normal {
            background-color: $button-bg-normal;
            border-color: $border-color-normal;
            color: $button-color-normal
        }

        &:hover {
            border-color: $border-color-hover;
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