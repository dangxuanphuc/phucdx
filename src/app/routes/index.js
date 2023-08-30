import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewYear from '../pages/NewYear';
import Main from '../pages/Main';
import Iwd from '../pages/Iwd';
import BirthDay from '../pages/BirthDay';
import PageList from '../pages/PageList';
import NotFound from '../pages/NotFound';

const routePath = {
  main: '/',
  newYear: '/happy-new-year/',
  iwd: '/happy-international-womens-day/',
  birthday: '/happy-birthday/',
  pageList: '/page-list/',
  notFound: '',
};

const route = [
  {
    path: routePath.main,
    exact: true,
    component: () => <Main />,
  },
  {
    path: routePath.newYear,
    exact: true,
    component: () => <NewYear />,
  },
  {
    path: routePath.iwd,
    exact: true,
    component: () => <Iwd />,
  },
  {
    path: routePath.birthday,
    exact: true,
    component: () => <BirthDay />,
  },
  {
    path: routePath.pageList,
    exact: true,
    component: () => <PageList />,
  },
  {
    path: routePath.notFound,
    exact: false,
    component: () => <NotFound />,
  },
];

export const AppRoute = () => (
  <Switch>
    {route.map((routeData, index) => (
      <Route
        key={index}
        path={routeData.path}
        exact={routeData.exact}
        component={routeData.component}
      />
    ))}
  </Switch>
);
