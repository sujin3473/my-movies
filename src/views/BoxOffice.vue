<template>
	<div class="contents">
		<h1 class="page-header">Box Office</h1>
		<div class="yesterday">As of {{ $store.state.yesterday }}</div>
		<div class="boxOffice">
			<loading-spinner v-if="isLoading"></loading-spinner>
			<ul v-else>
				<li v-for="boxOfficeItem in boxOfficeItems" :key="boxOfficeItem.rnum">
					<span class="movieRank">{{ boxOfficeItem.rank }}위</span>
					{{ boxOfficeItem.movieNm }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchBoxOffice } from '@/api/searchMovie';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
	components: {
		LoadingSpinner,
	},
	data: () => ({
		boxOfficeItems: [],
		isLoading: false,
	}),
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchBoxOffice();
			this.isLoading = false;
			this.boxOfficeItems = data.boxOfficeResult.dailyBoxOfficeList;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
