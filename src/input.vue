<template>
    <div class="reef-input">
        <input :value="value" type="text"/>
    </div>
</template>

<script>
    export default {
        name: "reef-input",
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
    $borderColor: #2C3E50;
    $borderColorHover: #33cc99;
    $borderColorFocus: #33cc99;
    $fontColor: #2C3E50;

    * {
        box-sizing: border-box;
    }

    .reef-input {
        font-size: $fontSize;

        & > input {
            display: inline-block;
            border: 1px solid $borderColor;
            height: $height;
            font-size: inherit;
            padding: 0 8px;
            color: $fontColor;
            border-radius: $borderRadius;
            outline: none;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.335, 1);

            &:hover {
                border-color: $borderColorHover;
            }

            &:focus {
                border-color: $borderColorFocus
            }
        }

    }
</style>