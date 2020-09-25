import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import GroupButton from "./group-button";
import chai from 'chai';

Vue.component('gv-button', Button);
Vue.component('gv-icon', Icon);
Vue.component('gv-group-button', GroupButton);
new Vue({
    el: "#app",
    data() {
        return {
            loading: true,
        };
    }
});
const expect = chai.expect;
// 单元测试
// 测试图标
{
    // const Constructor = Vue.extend(Button);
    // const vm = new Constructor({
    //     propsData: {
    //         icon: "correct"
    //     }
    // });
    // vm.$mount('#test');
    // let useElement = vm.$el.querySelector('use');
    // let href = useElement.getAttribute("xlink:href");
    // expect(href).to.eq("#gv-i-correct");
}
// 测试loading
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: "correct",
//             loading:true
//         }
//     });
//     vm.$mount('#test');
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute("xlink:href");
//     expect(href).to.eq("#gv-i-loading");
// }
// 测试iconPosition
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: "correct",
//             loading:true,
//             iconPosition:"right"
//         }
//     });
//     vm.$mount('#test');
//     let svgElement = vm.$el.querySelector('svg');
//     let {order} = window.getComputedStyle(svgElement);
//     expect(order).to.eq("2");
// }
// 测试click
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: "correct",
            loading:true,
            iconPosition:"right"
        }
    });
    vm.$mount('#test');
    vm.$on('click',function(){
        console.log(11);
    })
}