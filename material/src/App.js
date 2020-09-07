import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import theme from './Common/Theme';
import PrivateRoute from './Layout/PrivateRoute';
import PublicRoute from './Layout/PublicRoute';
import ROUTES from './routes';
import { history } from './Utils';

function App() {
  const renderContent = ROUTES => {
    let result = null;
    if (ROUTES.length > 0) {
      result = ROUTES.map(route => {
        return route.isPravite ? (
          <PrivateRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
            layout={route.layout}
          />
        ) : (
          <PublicRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
            layout={route.layout}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {renderContent(ROUTES)}
      </ThemeProvider>
    </Router>
  );
}

export default App;
