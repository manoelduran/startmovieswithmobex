import { makeAutoObservable, IReactionDisposer, reaction, autorun } from "mobx";
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
        autorun(() => {    
            if (this.search.includes("A")) {
                console.log("Escolheu a letra A");
                this.chooseA = this.chooseA + 1;
            } else if(this.search.includes("D")){ 
                console.log("Escolheu a letra D")
                this.chooseD = this.chooseD + 1;
            } else if (this.search.includes("F")) {  
                console.log("Escolheu a letra F")
                this.chooseF = this.chooseF + 1;
            }   
        })
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
    public dispose() {
        this.searchDisposer?.();
    }
    public get top5Movies() {
        return this.movies
        .slice()
        .sort((l, r) => l.popularity - r.popularity)
        .slice(0, 4);
      }
      public get adult(){
          return this.movies.filter((movie: types.Movie) => movie.adult !== true)
      }
    public chooseF = 0;
    public chooseA = 0;
    public chooseD = 0;

};