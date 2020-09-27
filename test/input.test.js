import Vue from 'vue';
import Input from '../src/input';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在', () => {
        expect(Input).to.be.exist;
    });
    describe('测试属性', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        it('可以设置value', () => {
            vm = new Constructor({
                propsData: {
                    value: "normal"
                }
            });
            vm.$mount();
            let inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.eq("normal");
        });
        it('可以设置label', () => {
            vm = new Constructor({
                propsData: {
                    label: "用户名"
                }
            });
            vm.$mount();
            let inputElement = vm.$el.querySelector('.input-label');
            expect(inputElement.innerText).to.eq("用户名");
        });
        it('可以设置type', () => {
            vm = new Constructor({
                propsData: {
                    type: "success"
                }
            });
            vm.$mount();
            let inputElement = vm.$el.querySelector('input');
            expect(inputElement.getAttribute('class')).to.eq("input-success");
        });
        it('可以设置disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            });
            vm.$mount();
            let inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.true;
        });
        it('可以设置read-only', () => {
            vm = new Constructor({
                propsData: {
                    "readOnly": true
                }
            });
            vm.$mount();
            let inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.be.true;
        });

        afterEach(() => {
            vm.$destroy();
        });
    });
    describe('测试事件', () => {
        // it("测试button点击事件.", () => {
        //     const Constructor = Vue.extend(Button);
        //     const vm = new Constructor({});
        //     vm.$mount();
        //     let callback = sinon.fake();
        //     vm.$on('click', callback);
        //     vm.$el.click();
        //     expect(callback).to.have.been.called;
        //
        // });
    });

});
