<template>
    <button class="gv-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <gv-icon :name="icon" v-if="icon && !loading"></gv-icon>
        <gv-icon class="loading" name="loading" v-if="loading"></gv-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from "./icon"
    export default {
        name:"gv-button",
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
            },
            loading:{
                type:Boolean,
                default:false
            }
        },
        components:{
            "gv-icon":Icon
        },

    };
</script>
<style lang="scss">

    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
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
        vertical-align: middle;//解决多个按钮内联的时候高度不一致bug
        &:hover {border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        &.icon-left {
            > .content {order: 2}
            > .icon {order: 1;margin-right: 0.3em;margin-left: 0;}
        }
        &.icon-right {
            > .content {order: 1}
            > .icon {order: 2;margin-right: 0;margin-left: 0.3em;}
        }
        .loading{
            animation: spin 1s infinite;
        }

    }

</style>