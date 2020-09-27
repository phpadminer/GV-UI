<template>
    <div class="reef-input">
        <span class="input-label" v-if="label">{{label}}</span>
        <input :disabled="disabled" :readOnly="readOnly" :class="{[`input-${type}`]:true}" :value="value" type="text"/>
        <reef-icon :name="iconType" :class="iconTypeFill"></reef-icon><span class="input-validator-info " :class="{[`input-validator-info-${type}`]:true}">{{validatorInfo}}</span>
    </div>
</template>

<script>
    import Icon from "./icon";
    export default {
        name: "reef-input",
        props: {
            type: {
                type: String,
                default: "normal",
                validator(value) {
                    return ['normal', 'error', 'warning', 'success'].indexOf(value) > -1;
                }
            },
            value: {
                type: String
            },
            label:{
                type:String
            },
            disabled:Boolean,
            readOnly:Boolean,
            validatorInfo:String
        },
        computed:{
            iconType(){
                if(['warning','success','error'].indexOf(this.type)>-1){
                    return this.type
                }else{
                    return 'info'
                }
            },
            iconTypeFill(){
                if(['warning','success','error'].indexOf(this.type)>-1){
                    return `input-validator-icon-${this.type}`
                }else{
                    return `input-validator-icon-info`
                }
            }
        },
        components:{
            "reef-icon":Icon
        }
    };
</script>

<style lang="scss" scoped>
    $height: 32px;
    $fontSize: 14px;
    $borderRadius: 4px;
    $borderColor: #2C3E50;
    $borderColorHover: #33cc99;
    $borderColorFocus: #33cc99;
    $fontColor: #2C3E50;

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

    * {
        box-sizing: border-box;
    }

    .reef-input {
        font-size: $fontSize;
        color:$fontColor;
        display: inline-flex;
        align-items: center;
        margin: 1em 0 ;

        & > input {
            border: 1px solid $borderColor;
            height: $height;
            font-size: inherit;
            padding: 1em;
            color: $fontColor;
            border-radius: $borderRadius;
            outline: none;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.335, 1);
            &:hover {
                border:1px solid $borderColorHover;
            }

            &:focus {
                border:2px solid $borderColorHover;
            }
            &[disabled]{
                background-color:$CLOUDS ;
                border-color: transparent !important;
                color:white;
                cursor: not-allowed;
            }
            &[readonly]{
                color:$fontColor;
                cursor: not-allowed;
            }
            &.input-normal:hover {
                border-color: $WET-ASPHALT;
            }
            &.input-normal {
                border-color: $MIDNIGHT-BLUE;
            }
            &.input-error {
                border-color: $ALIZARIN;
            }
            &.input-error:hover {
                border-color: $POMEGRANATE;
            }
            &.input-warning {
                border-color: $SUN-FLOWER;
            }
            &.input-warning:hover {
                border-color: $ORANGE;
            }
            &.input-success {
                border-color: $EMERALD;
            }
            &.input-success:hover {
                border-color: $NEPHRITIS;
            }

        }
        & > span.input-label{
            margin-right: 0.5em;
        }
        & > span.input-validator-info{
            margin-left: 0.5em;
            &.input-validator-info-error{
               color: $POMEGRANATE;
            }
            &.input-validator-info-success{
                color: $EMERALD;
            }
            &.input-validator-info-warning{
                color: $SUN-FLOWER;
            }
            &.input-validator-info-normal{
                color: $PETER-RIVER;
            }

        }
        &>svg{
            margin-left:0.5em ;
            &.input-validator-icon-info{
                fill: $PETER-RIVER
            }
            &.input-validator-icon-error{
                fill: $POMEGRANATE;
            }
            &.input-validator-icon-success{
                fill: $EMERALD;
            }
            &.input-validator-icon-warning{
                fill: $SUN-FLOWER;
            }
        }


    }
</style>