import React from 'react'
import {  StyledContainer } from './styledComponents';
import {  CardMedia, Grid, Typography } from '@mui/material';
import { useStateContext } from '../ContextProvider';
import { useParams } from 'react-router-dom';

function Details() {
    const { pokedex } = useStateContext();


    let { id } = useParams();

    let pokemon = pokedex.find(pok => parseInt(pok.id) === parseInt(id))
 


  return (
    <StyledContainer bg='white' maxWidth="md">
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              
              color: 'inherit',
              textDecoration: 'none',
              pr:2
            }}
          >
            HOME   
          </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
        <Grid item xs={12} sm={6} md={6}>

            <CardMedia component="img" image={pokemon.imageUrl} alt={pokemon.name} style={{maxWidth: '300px'}} />
        </Grid>
            <div style={{display: 'flex', flexDirection: 'column',  justifyContent: 'flex-end'}}>
                <Typography gutterBottom variant="h4" component="h3">
                    {pokemon.name}
                </Typography>
                <Typography >Number: {pokemon.id}</Typography>
                <Typography >Types: {pokemon.types}</Typography>
                <Typography >Weight: {pokemon.weight/10}kg</Typography>
                <Typography >Height: {pokemon.height*10}cm</Typography>
                <Typography >Abilities: {pokemon.abilities}</Typography>
            </div>
            
            
            
        </div>
    </StyledContainer>
  )
}

export default Details