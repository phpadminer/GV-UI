import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import GroupButton from "./group-button";
import Input from "./input";

Vue.component('reef-button', Button);
Vue.component('reef-icon', Icon);
Vue.component('reef-group-button', GroupButton);
Vue.component('reef-input', Input);
new Vue({
    el: "#app",
    data() {
        return {
            loading: true,
            message:'normal'
        };
    },
    methods:{
        on_input(e){
            console.log(e);
        }
    }
});

