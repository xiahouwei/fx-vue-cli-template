import Vue from 'vue';
import App from './App.vue'
import './assets/style/common.scss';

new Vue({
  render: h => h(App)
}).$mount('#app')

console.log(process.env)