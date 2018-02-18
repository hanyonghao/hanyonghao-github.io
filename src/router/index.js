import Vue from 'vue';
import Router from 'vue-router';
import routes from './list';

Vue.use(Router);

let router = new Router({
	mode: 'history',
	routes
});

router.afterEach(() => {
	// 设置标题
	// store.commit('setTitle', route.meta.title);
});

export default router;