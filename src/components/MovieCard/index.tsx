import * as types from '../../declarations/types';
import { observer } from 'mobx-react-lite'
import { Flex, Text, Image } from "@chakra-ui/react";

interface MovieCardProps {
  movie: types.Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Flex
      w="100%"
      mt="24px"
      flexDirection="column"
      align="center"
      justify="center"
    >
      <Text
        fontSize="16px"
      >
        {movie.title}
        </Text>
      <Image mt="16px" borderRadius="32px"
       src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
    </Flex>
  );
}

export default observer(MovieCard);