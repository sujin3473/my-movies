<template>
	<div>
		<b-navbar type="dark" variant="warning">
			<b-navbar-brand tag="h1" to="/home">
				Movie Wishes
			</b-navbar-brand>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/myMovies">wish list</b-nav-item>
					<b-nav-item to="/searchMovie">search movie</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
