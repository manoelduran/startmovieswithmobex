import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
`;
export const ReactionDiv = styled.div`
margin-top: 2rem;
width: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-end;
h1{
    margin-right: 2rem;
    font-size: 1rem;
}
`;
export const MapDiv = styled.div`
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const MapDivTop10 = styled.div`
display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-bottom: 2rem;
`;


