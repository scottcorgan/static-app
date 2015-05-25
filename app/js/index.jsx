import React, {render} from 'react';
import Router, {Route, DefaultRoute, RouteHandler} from 'react-router';

import App from './app';
import Home from './components/home';
import Contact from './components/contact';

let routes = (
  <Route name='App' handler={App} path='/'>
    <DefaultRoute handler={Home} name="home" />
    <Route handler={Contact} name='contact' />
  </Route>
);

window.addEventListener('DOMContentLoaded', () => {

  Router.run(
    routes,
    Router.HistoryLocation,
    (Handler) => render(<Handler/>, document.body)
  );
});
