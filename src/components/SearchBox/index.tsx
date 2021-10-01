import React from 'react';
import { Flex, Input } from "@chakra-ui/react";
import { observer } from 'mobx-react-lite'
import { useState } from 'react';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {

  const [displayValue, setDisplayValue] = useState(value)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value)
    setTimeout(() => {
      setTimeout(() => onChange(event.target.value), 2000)
    }, 2000)
  };
  return (
    <Flex
      align="center"
      justify="center"
      mt="24px"
    >
      <Input fontSize="25px" align="center"
        justify="center"
        value={displayValue}
        placeholder="Escolha seu filme"
        type="text"
        onChange={handleSearch}
      />
    </Flex>
  );
};
export default observer(SearchBox);