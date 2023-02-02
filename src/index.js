import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log('-----启动了',router)
console.log('----vueX',store)
// console.log(process.env,555555 );
console.log(222,process.env.VUE_APP_BASE_URL);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")