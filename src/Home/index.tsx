import { useEffect } from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';
import { Store } from './store';
import * as types from '../declarations/types';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import MovieCard from '../components/MovieCard';



const Home: React.FC = () => {
  const store = useLocalObservable(() => new Store());
  useEffect(() => {
    store.fetchMovies();
  }, [store.search]);
  return (
    <div>
      <Header />
      <SearchBox value={store.search}  onChange={(search: string) => store.setSearch(search)} />
      {
        store.loading
          ? <p>loading</p>
          : (
            store.movies.map((movie: types.Movie) => (
              <MovieCard movie={movie}/>
            ))
          )
      }
    </div>
  )
}
export default observer(Home);
