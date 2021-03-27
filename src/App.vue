<template>
	<div class="app">
		<nav-bar />
		<router-view />
	</div>
</template>

<script>
import NavBar from '@/components/navBar.vue';

export default {
	name: 'App',
	components: {
		NavBar,
	},
};
</script>

<style>
@import './css/common.css';
</style>
