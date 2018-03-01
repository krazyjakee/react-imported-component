// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React from 'react';
import importedComponent from 'react-imported-component';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import HelloWorld from './HelloWorld';

const HelloWorld2 = importedComponent(() => import('./HelloWorld2'));
const HelloWorld4 = importedComponent(() => import('./HelloWorld4'));

export default function App() {
  return (
    <div>
      <Helmet defaultTitle="Hello World!">
        <meta charSet="utf-8" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/codeSplit" component={HelloWorld2} />
        <Route exact path="/materialUi" component={HelloWorld4} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
