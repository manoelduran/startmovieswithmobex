import React from "react";
import { observer } from 'mobx-react-lite'
import { Flex, Text } from "@chakra-ui/react";


const Header: React.FC = () => {
  return (
    <Flex
      w="100%"
      h="60px"
      top="0"
      align="center"
      justify="center"
      position="relative"
    >
      <Text
          fontWeight="bold"
          fontSize="32px"
      >
        StartMovies
      </Text>
    </Flex>
  );
}

export default observer(Header)