import { makeAutoObservable, autorun } from "mobx";
import * as types from '../declarations/types';
import api from "../services/API";

export class Store {
    constructor() {
        makeAutoObservable(this);
        autorun(() => {
            if (this.search.includes("A")) {
                console.log("Escolheu a letra A");
                this.chooseA = this.chooseA + 1;
            } else if(this.search === "D"){ 
                console.log("Escolheu a letra D")
                this.chooseD = this.chooseD + 1;
            } else if (this.search === "F") {  
                console.log("Escolheu a letra F")
                this.chooseF = this.chooseF + 1;
            } 
        })
    };
    public movies: types.Movie[] = [];
    public  loading: boolean = false;
    public  search: string = '';
    
    public setSearch(search: string) {
        this.search = search;
    };
    public setMovies(movies: types.Movie[]) {
        this.movies = movies;
    };

    public  setLoading(loading: boolean) {
        this.loading = loading;
    };

    public  fetchMovies = async () => {
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
	public chooseF = 0;
    public chooseA = 0;
    public chooseD = 0;
};