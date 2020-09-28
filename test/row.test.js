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
        it('可以使用gutter', (done) => {
            let divElement = document.createElement('div');
            Vue.component('reef-row', Row);
            Vue.component('reef-col', Col);
            document.body.appendChild(divElement);
            divElement.innerHTML = `
                <reef-row gutter="22">
                    <reef-col></reef-col>
                    <reef-col></reef-col>
                </reef-row>    
            `;
            const vm = new Vue({
                el: divElement
            });

            setTimeout(() => {
                expect(window.getComputedStyle(vm.$el.querySelector('.row')).marginLeft).to.eq('-11px');
                expect(window.getComputedStyle(vm.$el.querySelector('.row')).marginRight).to.eq('-11px');
                expect(window.getComputedStyle(vm.$el.querySelectorAll('.col')[0]).paddingRight).to.eq('11px');
                expect(window.getComputedStyle(vm.$el.querySelectorAll('.col')[1]).paddingLeft).to.eq('11px');
                vm.$destroy()
                done();
            }, 0);

        });

    });

});
