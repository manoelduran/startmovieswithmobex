import React from 'react';
import { Flex, Text, Grid } from "@chakra-ui/react";
import { useLocalObservable, observer } from 'mobx-react-lite';
import { Store } from './store';
import * as types from '../declarations/types';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import MovieCard from '../components/MovieCard';



const Home: React.FC = () => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(() => {
    return store.dispose
  }, [store.searchDisposer]);
  React.useEffect(() => {
    return store.searchDisposeSearch
  }, [store.searchDisposeSearch]);
  return (
    <Flex
      direction="column"
      align="center"
      wrap="wrap"
    >
      <Header />
      <SearchBox value={store.search} onChange={(search: string) => store.setSearch(search)} />
      <Flex
        mt="32px"
        w="100%"
        align="flex-end"
        justify="flex-end"
      >
        <Text
          mr="32px"
          fontSize="20px"
        >
          Você pesquisou {store.chooseA} por Batman
        </Text>
      </Flex>
      <Flex
        mt="20px"
        direction="column"
        align="center"
        justify="center"
      >
        {
          store.loading
            ? <Text
              fontSize="32px"
            >
              loading...
            </Text>
            : (
              <>
                <Text
                  mt="10px"
                  fontSize="32px"
                >
                  Top 4 em ordem alfabética
                </Text>
                <Grid
                  mt="15px"
                  templateColumns="repeat(3,1fr)"
                  gridGap="30px"
                >
                  {store.OrderMovies.map((movie: types.Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </Grid>
                <Text
                  mt="10px"
                  fontSize="32px"
                >
                  Movies
                </Text>
                <Grid
                  mt="15px"
                  templateColumns="repeat(3,1fr)"
                  gridGap="30px"
                >
                  {store.movies.map((movie: types.Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </Grid>
              </>
            )
        }
      </Flex>
    </Flex>
  )
}
export default observer(Home);
