<template>
<div>
	<img src="@/assets/logo.png">

    <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
</div>
</template>

<script>
export default {
	data () {
		return {
			msg: 'Welcome to Your Vue.js'
		}
	}
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
