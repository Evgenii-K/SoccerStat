import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Competitions from './Pages/Competitions/Competitions';
import Team from './Pages/Team/Team'
import Page404 from './Pages/Page404/Page404';
import Competition from './Pages/Competition/Competition'
import Navigation from './Components/Navigation/Navigation';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="md">
        <Navigation/>
        <div className="row">
          <div className="col">
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
          </div>
        </div>
      </Container>
    </BrowserRouter>    
  );
}

export default App;
