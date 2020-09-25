<template>
    <svg class="icon" v-if="name">
        <use :xlink:href="`#gv-i-${name}`"></use>
    </svg>
</template>
<script>
    export default {
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