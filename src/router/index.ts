import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'hash', // 设置为hash模式

    routes: [
        {
            path: '/',
            redirect: '/page1',
        },
        {
            path: '/page1',
            component: () => import(/* webpackChunkName: "page1" */ '../page/page1.vue'),
        },
        {
            path: '/page2',
            component:r => require.ensure([], () => r(require('../page/page2.vue')), 'page2') ,//这种方式懒加载可以
            // component: () => import(/* webpackChunkName: "page2" */ '../page/page2.vue')//这种方式懒加载不生效
        }
    ]
});


export default router;
