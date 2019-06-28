import React from 'react';
import Home from './components/home';
import Mycart from './components/mycart';
import Navbar from './components/navbar';
import Detail from './components/detail';
import NotFound from './components/notfound';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store = { store }>
      <BrowserRouter >
        <div>
          <Navbar />
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/mycart" component={Mycart} />
              <Route path="/detail/:id" component={Detail} />
              <Route default component={NotFound}/>
          </Switch>
          </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
