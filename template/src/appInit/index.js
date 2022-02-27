import initUi from './src/ui.js'
import initUitls from './src/utils.js'
import initAppLogger from './src/appLogger.js'
import initLang from './/src/lang.js'


export const appMount = function (Vue, router, store, App) {
	const i18n = initLang(Vue)
	const vue = new Vue({
		i18n,
		router,
		store,
		render: h => h(App)
	})
	vue.$mount('#app')
	return vue
}
export default (vue) => {
	initUi(vue)
	initUitls(vue)
	initAppLogger(vue)
}
