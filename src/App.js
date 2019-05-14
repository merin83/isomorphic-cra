import React from 'react';
import { Route, Switch } from 'react-router';

const App = ({ routes, initialData }) => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={props =>
              React.createElement(route.component, {
                ...props,
                routes: route.routes,
                initialData: initialData ? initialData[index] : null,
              })
            }
          />
        );
      })}
    </Switch>
  );
};

export default App;
