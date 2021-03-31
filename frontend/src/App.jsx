import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import Router from './Router';
import {Home, Signup} from './components/index'


function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
        {/* <Switch>
          <Route exact path="(/)?" component={Home} />
          <Route path="/signup" component={Signup} />
        </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
