import { IReactionDisposer, makeAutoObservable, reaction } from "mobx";
import { useEffect, useState } from "react";
import * as types from "../declarations/types";
import api from "../services/API";


const useComputed = (callback: (value: number) => number, value: number) => {
    const [computedValue, setComputedValue] = useState(() => callback(value));

    useEffect(() => {
        setComputedValue(callback(value));
    }, [value, callback]);

    return computedValue;
}

export class Store {
  public searchDisposer: IReactionDisposer;

  // observable + setFunction -> useState
  // computed -> useState + useEffect
  // reaction -> useEffect

  constructor() {
    makeAutoObservable(this);

    this.searchDisposer = reaction(
      () => this.search,
      () => this.fetchMovies(),
    );
  }

  public movies: types.Movie[] = [];
  public loading: boolean = false;
  public search: string = "";

  public setSearch(search: string) {
    this.search = search;
  }

  public setMovies(movies: types.Movie[]) {
    this.movies = movies;
  }

  public setLoading(loading: boolean) {
    this.loading = loading;
  }

  public fetchMovies = async () => {
    if (this.loading) {
      return;
    }

    this.setLoading(true);

    try {
      const movies = await api.getMovies(this.search);
      this.setMovies(movies);
    } catch (e) {
      console.error(e);
    } finally {
      this.setLoading(false);
    }
  };

  public get top5Movies() {
    return this.movies
      .slice()
      .sort((l, r) => l.popularity - r.popularity)
      .slice(0, 4);
  }

  public dispose() {
    this.searchDisposer?.();
  }
}
