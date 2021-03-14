import axios from 'axios';

const movieURL = 'https://openapi.naver.com/v1/search/movie.json';

const search = axios.create({
	baseURL: movieURL,
	headers: {
		'X-Naver-Client-Id': 'PaL4pOh2jfW3O90R8Txe',
		'X-Naver-Client-Secret': 'PqIxcU6VBN',
	},
});

export default {
	search,
};
