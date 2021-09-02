import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1.5rem;
`;

export const Input = styled.input`
font-size: 25px;
background: #fff url("/search.png") no-repeat 97% 50%;
display: flex;
align-items: center;
justify-content: center;

::placeholder {
        color: #1f2226;
       padding: 0.5rem;
   }
`;