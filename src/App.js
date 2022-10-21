
import PokeList from "./components/PokeList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from "./components/HeroSection";
import { AppDiv } from "./components/styledComponents";

const theme = createTheme();

function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AppDiv>
      <HeroSection />
      <PokeList />
      </AppDiv>
      </ThemeProvider>
  );
}

export default App;
