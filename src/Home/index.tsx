import React from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';
import { Store } from './store';
import { Container, MapDiv, MapDivTop10, ReactionDiv } from '../styles/styles';
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
      <ReactionDiv>
        <h1> Você pesquisou {store.chooseA} por Batman</h1>
      </ReactionDiv>
      <MapDiv>
        {
          store.loading
            ? <p>loading...</p>
            : (
              <>

                <h1>Top 10 em ordem alfabética</h1>
                <MapDivTop10>
                  {store.OrderMovies.map((movie: types.Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </MapDivTop10>
                <h1>Movies</h1>
                <MapDivTop10>
                  {store.movies.map((movie: types.Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </MapDivTop10>
              </>
            )
        }
      </MapDiv>
    </Container>
  )
}
export default observer(Home);
