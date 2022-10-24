import React from 'react'
import { useStateContext } from '../ContextProvider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FlipCard from './FlipCard';
import { Link,  } from 'react-router-dom';

function CardList() {

    const { filteredList} = useStateContext();
    console.log(filteredList)
    filteredList.sort((a,b) => a.id - b.id)  

    function NotFound(){
        return (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant='h5' color={'white'}> No Pokemons Found </Typography>
          </div>
        )
      }
  return (
    <>
    {!filteredList.length ? <NotFound />
    :
    <Grid container spacing={4}>
    {filteredList.map((pokemon, i) => (
        <Grid item key={i} xs={6} sm={4} md={4}>
            <Link to={"/pokemon/"+pokemon.id}>
                <FlipCard content= {pokemon}/>
            </Link>
        </Grid>
    ))}
    </Grid> }
    </>
  )
}

export default CardList