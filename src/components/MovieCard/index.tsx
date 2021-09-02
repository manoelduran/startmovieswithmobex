import * as types from '../../declarations/types';
import { observer } from 'mobx-react-lite'
import { Container, Poster, Title } from './styles';

interface MovieCardProps {
  movie: types.Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Container>
      <Title>{movie.title}</Title>
      <Poster src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
    </Container>
  );
}

export default observer(MovieCard);