<template>
    <svg class="icon" v-if="name">
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
            }
        }
    }
</script>
<style>
    .icon {
        width: 1em;
        height: 1em;
    }
</style>