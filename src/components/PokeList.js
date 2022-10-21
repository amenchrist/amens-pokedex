import React  from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useStateContext } from '../ContextProvider';
import Scroll from './Scroll';
import FlipCard from './FlipCard';
import { StyledContainer } from './styledComponents';

export default function PokeList({content}) {

  const { filteredList} = useStateContext()

  function NotFound(){
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant='h5' color={'white'}> No Pokemons Found </Typography>
      </div>
    )
  }

  return (
    <StyledContainer maxWidth="md">
      <Scroll >
          {!filteredList.length ? <NotFound />
            :
            <Grid container spacing={4}>
            {filteredList.map((pokemon, i) => (
              <Grid item key={i} xs={6} sm={4} md={4}>
                <FlipCard content={pokemon}/>
              </Grid>
            ))}
          </Grid> }      
      </Scroll>
    </StyledContainer>
  );
}