import React from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';
import { Store } from './store';
import { Container, MapDiv } from '../styles/styles';
import * as types from '../declarations/types';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import MovieCard from '../components/MovieCard';



const Home: React.FC = () => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(() => {
    return store.dispose;
  }, [store.dispose]);

  return (
    <Container>
      <Header />
      <SearchBox value={store.search} onChange={(search: string) => store.setSearch(search)} />
      <h1> Você pesquisou {store.chooseA} vezes com a letra A </h1>
      <h1> Você pesquisou {store.chooseF} vezes com a letra F </h1>
  <h1> Você pesquisou {store.chooseD} vezes com a letra D </h1>
      <MapDiv>
        {
          store.loading
            ? <p>loading</p>
            : (
              <>
              Adult
              {store.adult.map((movie: types.Movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
              Movies
              {store.movies.map((movie: types.Movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </>
            )
        }
      </MapDiv>
    </Container>
  )
}
export default observer(Home);
