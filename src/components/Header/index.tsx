import React from "react";
import {observer} from 'mobx-react-lite'
import { Container, Text } from './styles';

const Header: React.FC = () =>{
  return (
    <Container>
      <Text>StartMovies</Text>
    </Container>
  );
}

export default observer(Header) 