<template>
    <div class="gv-input">
        <input :value="value" type="text"/>
    </div>
</template>

<script>
    export default {
        name: "gv-input",
        props: {
            value: {
                type: String
            }
        }
    };
</script>

<style lang="scss">
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--button-bg: white;*/
    /*--button-active-bg: #eee;*/
    /*--border-radius: 4px;*/
    /*--color: #999;*/
    /*--border-color: #999;*/
    /*--border-color-hover: #666;*/
    $height: 32px;
    $fontSize: 14px;
    $borderRadius: 4px;
    $borderColor: #999;
    $borderColorHover:#666;

    * {
        box-sizing: border-box;
    }

    .gv-input {
        font-size: $fontSize;
        & > input {
            height: $height;
            font-size: inherit;
            padding: 0 8px;
            border-width: 1px;
            border-color: $borderColor;
            border-radius: $borderRadius;
            &:hover{
                border-color: $borderColorHover;
            }
            &:focus{
                border-color:rgba(0,40,100,0.3)
            }
        }

    }
</style>