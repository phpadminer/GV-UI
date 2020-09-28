import Vue from 'vue';
import Row from '../src/row';
import Col from '../src/col';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok;
    });
    describe('测试属性', () => {
        let divElement = document.createElement('div');
        document.body.appendChild(divElement);
        let vm
        it('可以使用gutter', (done) => {
            Vue.component('reef-row', Row);
            Vue.component('reef-col', Col);
            divElement.innerHTML = `
                <reef-row gutter="22">
                    <reef-col></reef-col>
                    <reef-col></reef-col>
                </reef-row>    
            `;
            vm = new Vue({
                el: divElement
            });

            setTimeout(() => {
                expect(window.getComputedStyle(vm.$el.querySelector('.row')).marginLeft).to.eq('-11px');
                expect(window.getComputedStyle(vm.$el.querySelector('.row')).marginRight).to.eq('-11px');
                expect(window.getComputedStyle(vm.$el.querySelectorAll('.col')[0]).paddingRight).to.eq('11px');
                expect(window.getComputedStyle(vm.$el.querySelectorAll('.col')[1]).paddingLeft).to.eq('11px');
                vm.$destroy();
                done();
            }, 0);

        });
        it('如果没有设置align属性，则只有一个row类名',()=>{
            const Constructor =  Vue.extend(Row);
            vm = new Constructor({
                propsData:{
                }
            });
            vm.$mount(divElement);
            expect(vm.$el.classList.length).to.eq(1);
        });
        it('设置align属性，如果是right，那么应该会有一个align-right类名',()=>{
            const Constructor =  Vue.extend(Row);
            vm = new Constructor({
                propsData:{
                    align:"right"
                }
            });
            vm.$mount(divElement);
            expect(vm.$el.classList.contains('align-right')).to.be.true;
        });
        afterEach(()=>{
            vm.$destroy();

        })

    });

});
