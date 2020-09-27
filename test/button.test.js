import Vue from 'vue';
import Button from '../src/button';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok;
    });
    describe('测试属性', () => {
        const Constructor = Vue.extend(Button);
        let vm;
        it('可以设置icon.', () => {
            vm = new Constructor({
                propsData: {
                    icon: "correct"
                }
            });
            vm.$mount();
            let useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute("xlink:href")).to.eq("#reef-i-correct");
        });
        it('设置loading为true时,没有设置其他图标时,显示一个loading.', () => {
            vm = new Constructor({
                propsData: {
                    loading: true,
                }
            });
            vm.$mount();
            let useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute("xlink:href")).to.eq("#reef-i-loading");
        });
        it('设置loading为true时,如果有图标那么只会显示一个loading.', () => {
            vm = new Constructor({
                propsData: {
                    loading: true,
                    icon: "correct"
                }
            });
            vm.$mount();
            let useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute("xlink:href")).to.eq("#reef-i-loading");
        });
        it('iconPosition时默认为left.', () => {
            // 必须将button挂载在一个元素下面 不然order会为空
            const divElement = document.createElement('div');
            document.body.appendChild(divElement);
            vm = new Constructor({
                propsData: {
                    icon: "correct",
                }
            });
            vm.$mount(divElement);
            let svgElement = vm.$el.querySelector('svg');
            expect(getComputedStyle(svgElement).order).to.eq("1");
        });
        it('iconPosition为right时,图标在右侧.', () => {
            // 必须将button挂载在一个元素下面 不然order会为空
            const divElement = document.createElement('div');
            document.body.appendChild(divElement);
            vm = new Constructor({
                propsData: {
                    icon: "correct",
                    iconPosition:"right"
                }
            });
            vm.$mount(divElement);
            let svgElement = vm.$el.querySelector('svg');
            expect(getComputedStyle(svgElement).order).to.eq("2");
        });
        it('type为primary时,背景色为#16A085,字体颜色为white.', () => {
            // 必须将button挂载在一个元素下面 不然order会为空
            const divElement = document.createElement('div');
            document.body.appendChild(divElement);
            vm = new Constructor({
                propsData: {
                    type: "primary",
                }
            });
            vm.$mount(divElement);
            let btnElement = vm.$el;
            expect(getComputedStyle(btnElement).backgroundColor).to.eq("rgb(22, 160, 133)");
            expect(getComputedStyle(btnElement).color).to.eq("rgb(255, 255, 255)");
        });
        it('disabled为true时,cursor为no-allowed.', () => {
            // 必须将button挂载在一个元素下面 不然order会为空
            const divElement = document.createElement('div');
            document.body.appendChild(divElement);
            vm = new Constructor({
                propsData: {
                    disabled: true,
                }
            });
            vm.$mount(divElement);
            let btnElement = vm.$el;
            expect(getComputedStyle(btnElement).cursor).to.eq("not-allowed");
        });
        afterEach(() => {
            vm.$destroy();
        });
    });
    describe('测试事件', () => {
        it("测试button点击事件.", () => {
            const Constructor = Vue.extend(Button);
            const vm = new Constructor({});
            vm.$mount();
            let callback = sinon.fake();
            vm.$on('click', callback);
            vm.$el.click();
            expect(callback).to.have.been.called;

        });
    });

});
