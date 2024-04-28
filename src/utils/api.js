import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWQ0NDc0MDQxY2FkOTJiODAwY2VjZjlmMjMyYTY0YSIsInN1YiI6IjY2MGJhMTIwOWM5N2JkMDE2M2EzYTcxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vC-8qlxW6ymRsFlVc9TiXCrmo9gWUJS--pg4djrC9M";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};