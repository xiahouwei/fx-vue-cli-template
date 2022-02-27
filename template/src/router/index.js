import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConifig from './routerConfig'
import app from '@/main.js'
import MENU_LIST_CONFIG from '@/config/menu_list_config'
import { loginErrorRefresh } from '@/js/service/index.js'

Vue.use(VueRouter)
const getParamsConfigPaths = function () {
	return MENU_LIST_CONFIG.reduce((pre, cur) => {
		if (cur.child) {
			pre.push(...cur.child.map(item => item.path))
		}
		return pre
	}, [])
}
const paramsConfigPaths = getParamsConfigPaths()
const router = new VueRouter({
	base: process.env.BASE_URL,
	routes: routerConifig
})
router.afterEach((to, from) => {
	if (to.path === '/login') {
		loginErrorRefresh()
	} else {
		if (paramsConfigPaths.includes(to.name)) {
			app.vue.$store.dispatch('systemGetParamsConfig')
		}
		const { authModuleList } = to.meta
		if (authModuleList) {
			getModuleAuth(authModuleList)
		}
	}
})
function getModuleAuth (moduleName) {
	return app.vue.$store.dispatch('syncDetailsAuth', { moduleName })
}
export default router
