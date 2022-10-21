import styled from 'styled-components';
import Card from '@mui/material/Card';
import { Container } from '@mui/system';
import { Box } from '@mui/material';

const pokeUrlImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcrystal-cdn2.crystalcommerce.com%2Fphotos%2F6330565%2FsplashBanner_pokemon.jpg&f=1&nofb=1&ipt=cbfd04917bacb60858a708892a2e079e50a7718a95ba1f3fa3d403cf9ad4239a&ipo=images'

export const AppDiv = styled.div`
    overflow-Y: hidden;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #02160b;
`

export const FlipCardDiv = styled.div`
    background-color: transparent;
    display: 'flex';
    flex-direction: 'column';
    height: 300px;
    perspective: 1000px; 

    &:hover {
        & div {
            transform: rotateY(180deg);
        }
    }

    @media (max-width: 600px) {
        height: 400px;
  }
`

export const FlipCardInnerDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    transform-style: preserve-3d;
`

export const FlipCardFrontDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    color: black;
`

export const FlipCardBackDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

export const StyledCard = styled(Card)`
    height: 100%;
    display: flex; 
    flex-Direction: column;
    align-items: ${(props) => props.align? props.align : 'center' };
    justify-content: center;

`

export const StyledContainer = styled(Container)`
    padding: 20px 2px;
    height: 70vh;
    background-Color: ${(props) => props.bg? props.bg : '#02160b'};

`

export const StyledScrollableDiv = styled.div`
    overflow-Y: auto;
    height: 100%;
`
export const StyledHeroBox = styled(Box)`
    background-position: center;
    background-size: cover;
    background:  linear-gradient(to bottom, rgba(0, 128, 0, 0.1), rgba(117, 19, 93, 0.9)), url(${pokeUrlImage});
`
export const StyledTopBar = styled(Box)`
    background-color: #02160b;
    color: white;
    height: 30%;   

`