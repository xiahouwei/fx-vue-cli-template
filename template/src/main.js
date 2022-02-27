import Vue from 'vue';
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}
{{#fxService}}
import fxService from './service'
{{/fxService}}
{{#fxLogger}}
import fxLogger from './fxLogger'
{{/fxLogger}}
{{#i18n}}
import initLang from './lang'
{{/i18n}}
import './assets/style/common.scss';

fxService(Vue)
fxLogger(Vue)

const i18n = initLang(Vue)

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')