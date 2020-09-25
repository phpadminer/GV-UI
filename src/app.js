import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import GroupButton from "./group-button";
Vue.component('gv-button', Button);
Vue.component('gv-icon', Icon);
Vue.component('gv-group-button', GroupButton);
new Vue({
    el: "#app",
    data(){
        return{
            loading:true,
        }
    }
});