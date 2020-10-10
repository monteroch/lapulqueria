import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Blog, Boutique, Contact, Events, Home } from './components/index';
import Pulques from './components/pulques/pulques.component';
 
import theme from './theme';

function App() {
  return (
    <div style={{height: "100vh"}}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/pulques" component={Pulques}/>
            <Route exact path="/boutique" component={Boutique}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/blog" component={Blog}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
