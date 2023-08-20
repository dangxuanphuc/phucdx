import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import NewYear from '../pages/NewYear';
import NotFound from '../pages/NotFound'

const routePath = {
  newYear: '/happy-new-year/',
  notFound: ''
}

const route = [
  {
    path: routePath.newYear,
    exact: true,
    component: () => <NewYear/>
  },
  {
    path: routePath.notFound,
    exact: false,
    component: () => <NotFound/>
  }
];

export const AppRoute = () => (
  <Switch>
    {
      route.map((routeData, index) => (
        <Route
          key={index}
          path={routeData.path}
          exact={routeData.exact}
          component={routeData.component}
        />
      ))
    }
  </Switch>
);
