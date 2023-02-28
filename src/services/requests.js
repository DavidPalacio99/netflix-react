const API_KEY = "03ec53a33ed7c7287eaa36d4cd6e4601";
const page = "1";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&page=${page}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&page=${page}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&page=${page}&language=en-US`,
  fetchAll: `/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc`,
  fetchAll2: `/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&page=${page}&with_genres=28`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&page=${page}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&page=${page}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&page=${page}&with_genres=99`,
};

export const peticiones = (pagina, string) => {
  return {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&page=${pagina}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&page=${pagina}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&page=${pagina}&language=en-US`,
    fetchAll: `/discover/movie?api_key=${API_KEY}&page=${pagina}&sort_by=popularity.desc`,
    fetchAll2: `/discover/movie?api_key=${API_KEY}&page=${pagina}&sort_by=popularity.desc`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&page=${pagina}&with_genres=28`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&page=${pagina}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&page=${pagina}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&page=${pagina}&with_genres=99`,
    searchMovies: `/search/movie?api_key=${API_KEY}&query=${string}&page=${pagina}`,
  };
};

export default requests;
