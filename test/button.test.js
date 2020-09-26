import Vue from 'vue';
import chai from 'chai';
import Button from '../src/button';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok;
    });
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: "correct"
            }
        });
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        expect(useElement.getAttribute("xlink:href")).to.eq("#gv-i-correct");
        vm.$destroy();
    });
});
