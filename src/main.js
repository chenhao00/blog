// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import VueParticles from 'vue-particles'
import App from './App';
import router from './router';
import common from './lib/common';
import filters from './lib/filters';

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.use(common);
Vue.use(infiniteScroll);
Vue.use(VueParticles);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
