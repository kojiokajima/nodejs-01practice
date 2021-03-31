import React from 'react'
import {BrowserRouter} from 'react-router-dom';
// import logo from './logo.svg';
import Router from './Router';

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
