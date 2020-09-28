import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import GroupButton from "./group-button";
import Input from "./input";
import Row from "./row";
import Col from "./col";

Vue.component('reef-button', Button);
Vue.component('reef-icon', Icon);
Vue.component('reef-group-button', GroupButton);
Vue.component('reef-input', Input);
Vue.component('reef-row', Row);
Vue.component('reef-col', Col);
new Vue({
    el: "#app",
    data() {
        return {
            loading: true,
            message:'normal'
        };
    },

});

