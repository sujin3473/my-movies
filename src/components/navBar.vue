<template>
	<nav>
		<v-app-bar app prominent dark color="deep-purple lighten-2">
			<v-app-bar-title class="text-uppercase grey--text">
				My Movies
			</v-app-bar-title>
			<router-link to="/">
				<v-icon>home</v-icon>
			</router-link>
			| <router-link to="/myMovies">my Movies</router-link> |
			<router-link to="/searchMovie">search movie</router-link>
		</v-app-bar>
	</nav>
</template>

<script>
export default {};
</script>

<style></style>
