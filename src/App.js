import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Competitions from './Pages/Competitions/Competitions';
import Team from './Pages/Team/Team'
import Page404 from './Pages/Page404/Page404';
import Competition from './Pages/Competition/Competition'
import Navigation from './Components/Navigation/Navigation';

import {CssBaseline, Paper} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#1976b2',
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Container maxWidth="lg">
          <Paper square elevation={6}>
            <Navigation/>
            <Switch>
              <Route path={'/'} exact>
                <Competitions />
              </Route>
              <Route path={'/matches/:id'}>
                <Competition />
              </Route>
              <Route path={'/team/:id'}>
                <Team />
              </Route>
              <Route>
                <Page404 />
              </Route>
            </Switch>
          </Paper>
        </Container>
      </ThemeProvider>  
    </BrowserRouter> 
  );
}

export default App;
