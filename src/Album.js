import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const theme = createTheme();

export default function Album() {

  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const [pokedex, setPokedex ] = useState(() => {
    const localData = localStorage.getItem('pokedex');
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex))
  }, [pokedex])

  useEffect(() => {
    let pokemons = [...pokedex];
    if(pokedex.length < 151){
      for(let i=pokedex.length+1; i<=151; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(result => result.json()).then(pokemon => {
          const { id, name, height, weight, types, abilities } = pokemon
          const pok = {
            id,
            name: capitalize(name),
            imageUrl : pokemon.sprites.other['official-artwork']['front_default'],
            height,
            weight,
            types: types.map(index => capitalize(index.type.name)).join(", "),
            abilities: abilities.map(index => capitalize(index.ability.name)).join(", ")
          }
          pokemons.push(pok)
          
          setPokedex(pokemons)
        })
      }    
    }
    
  },[pokedex])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md" align="center">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              AMEN'S POKEMON INDEX
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A pokemon index like you've never seen before
            </Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Search" variant="outlined" />
            </Box>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {pokedex.map((pokemon, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={pokemon.imageUrl}
                    alt={pokemon.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {pokemon.name}
                    </Typography>
                    <Typography>Number: {pokemon.id}</Typography>
                    <Typography>Types: {pokemon.types}</Typography>
                    <Typography>Weight: {pokemon.weight/10}kg</Typography>
                    <Typography>Height: {pokemon.height*10}cm</Typography>
                    <Typography>Abilities: {pokemon.abilities}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}