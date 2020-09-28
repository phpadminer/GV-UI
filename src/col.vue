<template>
    <div class="col" :class="spanStyle" :style="gutterStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "reef-col",
        props: {
            span: [String, Number],
            offset: [String, Number]
        },
        data() {
            return {
                gutter: 0
            };
        },
        computed: {
            spanStyle() {
                let {span, offset} = this;
                return [span && `col-span-${span}`, offset && `col-offset-${offset}`];
            },
            gutterStyle() {
                let {gutter} = this;
                return gutter && {
                    paddingLeft: `${gutter / 2}px`,
                    paddingRight: `${gutter / 2}px`,
                };
            }
        },


    };
</script>

<style scoped lang="scss">
    .col {
    }

    $col-prefix: 'col-span';
    @for $n from 1 through 24 {
        .#{$col-prefix}-#{$n} {
            width: ($n / 24) * 100%;
        }
    }

    $col-prefix: 'col-offset';
    @for $n from 1 through 24 {
        .#{$col-prefix}-#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }

</style>