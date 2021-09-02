import React from 'react';
import { Container, Input } from './styles';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({value, onChange}) => {
const [displayValue, setDisplayValue] = useState(value)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDisplayValue(event.target.value)
        onChange(event.target.value);
  };
  console.log(onChange)
    return (
      <Container>
        <Input
          value={displayValue}
          placeholder="Escolha seu filme"
          type="text"
          onChange={handleSearch}
        />
      </Container>
    );
  };
  export default observer(SearchBox);