// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import Layout from '@/components/layout';
import Loading from '@/components/loading';

Vue.config.productionTip = false;

Vue.component('loading', Loading);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { Layout },
	template: '<layout/>'
});