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
        it('可以设置validatorInfo', () => {
            vm = new Constructor({
                propsData: {
                    "validatorInfo": 'error'
                }
            });
            vm.$mount();
            let spanElement = vm.$el.querySelector('.input-validator-info');
            let svgElement = vm.$el.querySelector('svg');
            expect(spanElement).to.be.exist;
            expect(svgElement).to.be.exist;
        });
        afterEach(() => {
            vm.$destroy();
        });
    });
    describe('测试事件', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        it("测试input/input/focus/blur事件.", () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({});
                vm.$mount();
                let callback = sinon.fake();
                let event = new Event(eventName);
                let inputElement = vm.$el.querySelector('input');
                vm.$on(eventName, callback);
                Object.defineProperty(event, 'target', {
                    value: {
                        value: 'test',
                    }
                });
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('test');
            });
        });
        afterEach(() => {
            vm.$destroy();
        });
    });

});
