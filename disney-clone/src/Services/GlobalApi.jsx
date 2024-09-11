import axios from "axios";
// Fazendo ser possível acessar a api de qualquer lugar no código com a variavel getTradingVideos
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='36b5f0c3c5f88f4f64d074f37ad3eac2'

//https://api.themoviedb.org/3/trending/all/day?api_key=36b5f0c3c5f88f4f64d074f37ad3eac2
const getTrendingVideos= axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key);

export default{
    getTrendingVideos
}