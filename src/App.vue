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
		fetchData() {
			this.getData().then((data) => {
				this.msg = data;
			})
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>