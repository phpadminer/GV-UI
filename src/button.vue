<template>
    <button class="gv-button" :class="{'icon-default':true,[`icon-${iconPosition}`]:true}">
        <svg class="icon" v-if="icon">
            <use :xlink:href="`#gv-i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {
                type: String,
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    return ['left', 'right'].indexOf(value) > -1;
                }
            }
        }
    };
</script>
<style lang="scss">
    .icon {
        width: 1em;
        height: 1em;
    }

    .gv-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        &.icon-default, &.icon-left {
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

    }

</style>