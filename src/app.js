import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
Vue.component('gv-button', Button);
Vue.component('gv-icon', Icon);
new Vue({
    el: "#app",
    data(){
        return{
            loading:true,
        }
    }
});