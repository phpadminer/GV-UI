<template>
    <div class="row" :style="gutterStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "reef-row",
        props: {
            gutter: [String, Number]
        },

        computed: {
            gutterStyle() {
                let {gutter} = this;
                return gutter && {
                    marginLeft: `-${gutter / 2}px`,
                    marginRight: `-${gutter / 2}px`,
                };
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
    }
</style>