import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import GroupButton from "./group-button";
import chai from 'chai';
import spies from 'chai-spies';

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
chai.use(spies);
const expect = chai.expect;
const spy = chai.spy(() => {
});
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
            loading: true,
            iconPosition: "right"
        }
    });
    vm.$mount();
    vm.$on('click', spy);
    const button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();
}