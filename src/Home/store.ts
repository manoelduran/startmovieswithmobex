import { makeAutoObservable } from "mobx";
import * as types from '../declarations/types';
import api from "../services/API";

export class Store {
    constructor() {
        makeAutoObservable(this);
    };
    public movies: types.Movie[] = [];
    public loading: boolean = false;
    public search: string = '';
    public setSearch(search: string) {
        this.search = search;
    };
    public setMovies(movies: types.Movie[]) {
        this.movies = movies;
    };

    public setLoading(loading: boolean) {
        this.loading = loading;
    };

    public fetchMovies = async () => {
        if (this.loading) {
            return;
        };
        this.setLoading(true);

            try {
                const movies = await api.getMovies(this.search);
                this.setMovies(movies);
            } catch (e) {
                console.error(e);
            } finally {
                this.setLoading(false);
            };
    };
};