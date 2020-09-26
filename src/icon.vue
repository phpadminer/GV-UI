<template>
    <svg class="icon" v-if="name" :fill="fill">
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
        }
    }
</script>
<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
    }
</style>