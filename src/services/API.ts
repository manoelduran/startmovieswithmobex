import axios from 'axios';
import * as types from '../declarations/types';

class API {
    private base;
    constructor() {
        this.base = axios.create({
            baseURL: 'https://api.themoviedb.org/3',
        });
    }
    public async getMovies(search: string): Promise<types.Movie[]> {
        const result = await this.base.get(`/search/movie?api_key=b93819156d04da85373fbb94a6d67acb&query=${search}`);
        return result.data.results;
    }
}

const api = new API();

export default api;