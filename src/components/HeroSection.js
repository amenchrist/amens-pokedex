import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useStateContext } from '../ContextProvider';
import { StyledHeroBox, StyledTopBar } from './styledComponents';

function HeroSection() {
    
    const { setFilteredList, pokedex} = useStateContext()
    function handleSearch(searchTerm) {
        setFilteredList(pokedex.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }


  return (
    <>
    <StyledHeroBox>
      <StyledTopBar >
      <Container  align="center">
        
          <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              pr:2
            }}
          >
            AMEN'S    
          </Typography>
          <img src='../android-chrome-512x512.png' alt='logo' width={20} />
          <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              pl:2
            }}
          >
               POKEDEX
          </Typography>
          </Container>
      </StyledTopBar>
   
          <Container maxWidth="md" align="center">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 4, minWidth: '50%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField 
                id="outlined-basic" 
                label="Search Pokemon" 
                variant="filled" 
                onChange={(e)=> handleSearch(e.target.value)} 
                style={{borderRadius: '5px', backgroundColor: 'white'}}
                />
            </Box>
          </Container>
        </StyledHeroBox>
    </>
  )
}

export default HeroSection