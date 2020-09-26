import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import GroupButton from "./group-button";
import Input from "./input";

Vue.component('gv-button', Button);
Vue.component('gv-icon', Icon);
Vue.component('gv-group-button', GroupButton);
Vue.component('gv-input', Input);
new Vue({
    el: "#app",
    data() {
        return {
            loading: true,
        };
    }
});

