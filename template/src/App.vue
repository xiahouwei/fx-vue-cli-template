<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
	name: 'app',
	components: {
		HelloWorld
	}
}
</script>
<style lang="scss">
h1 {
	color: green;
}
</style>