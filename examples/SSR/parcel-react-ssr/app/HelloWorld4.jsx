import { Helmet } from 'react-helmet';
import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

export default function HelloWorld() {
  return <div>
    <Helmet defaultTitle="Hello World!">
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
        Title
        </Typography>
      </Toolbar>
    </AppBar>
  </div>;
}
