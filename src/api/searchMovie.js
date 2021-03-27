import axios from 'axios';

const movieURL = '/v1/search/movie.json';
const ID_KEY = 'PaL4pOh2jfW3O90R8Txe';
const SECRET_KEY = 'PqIxcU6VBN';

function fetchMovies(value) {
	return axios.get(movieURL, {
		headers: {
			'X-Naver-Client-Id': ID_KEY,
			'X-Naver-Client-Secret': SECRET_KEY,
		},
		params: {
			query: value,
			display: 20,
		},
	});
}

export { fetchMovies };
