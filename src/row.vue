<template>
    <div class="row" :style="gutterStyle" :class="alignClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "reef-row",
        props: {
            gutter: [String, Number],
            align:{
             type:String,
             validator(align){
                 return align && ['left','center','right'].includes(align)
             }
            }
        },

        computed: {
            gutterStyle() {
                let {gutter} = this;
                return gutter && {
                    marginLeft: `-${gutter / 2}px`,
                    marginRight: `-${gutter / 2}px`,
                };
            },
            alignClass(){
                let {align} = this;
                return align?[`align-${align}`]:[]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter;
            });
        }
    };
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        &.align-right{
            justify-content: flex-end;
        }
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
    }
</style>