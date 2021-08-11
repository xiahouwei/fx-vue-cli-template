<template>
	<div>
		<h1 @click="onClick">{{ msg }}</h1>
		<helloWorld></helloWorld>
	</div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
	name: 'app',
	components: {
		helloWorld: HelloWorld
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js'
		}
	},
	created() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			const data = await this.getData()
			this.msg = data
		},
		getData () {
			return new Promise(resolve => {
				resolve('ok');
			})
		},
		onClick () {
			this.msg = 'clicked'
		}	
	}
}
</script>
<style lang="scss">
h1 {
	color: green;
}
</style>