<template>
    <svg class="icon" v-if="name" :style="iconFill" >
        <use :xlink:href="`#reef-i-${name}`"></use>
    </svg>
</template>
<script>
    import "./svg"
    export default {
        name:"reef-icon",
        props:{
            name:{
                type:String,
            },
            fill:{
                type:String,
            }
        },
        computed:{
            iconFill(){
                console.log(this.fill);
                if(this.fill) {
                    return {
                        fill:this.fill,
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
    }
</style>