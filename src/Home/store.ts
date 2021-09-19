import { makeAutoObservable, IReactionDisposer, reaction } from "mobx";
import * as types from '../declarations/types';
import api from "../services/API";

export class Store {
    public searchDisposer: IReactionDisposer;
    constructor() {
        makeAutoObservable(this);
        this.searchDisposer = reaction(
            () => this.search,
            () => this.fetchMovies(),
        );
        this.searchDisposer = reaction(
            () => this.isSearch,
            isSearch => {
                if (isSearch) {
                    console.log("BOA ESCOLHA MEU BOM!");
                    this.chooseA = this.chooseA + 1;
                }
            }
        );
    };
    public chooseA = 0;
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
    public dispose() {
        this.searchDisposer?.();
    }
    public get top5Movies() {
        return this.movies
            .slice()
            .sort((l, r) => l.popularity - r.popularity)
            .slice(0, 4);
    }
    public get OrderMovies() {
        return this.top5Movies.slice().sort((a, b) => {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        })
    }
    public get adult() {
        return this.movies.filter((movie: types.Movie) => movie.adult)
    }

    public get isSearch() {
        return this.search.includes("Batman")
    }
};