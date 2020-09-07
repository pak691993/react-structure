import React from 'react';
// import { PublicLayout, PrivateLayout } from './Layouts';

const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('./Pages/LoginPage/LoginPage'));

const NotFoundPage = React.lazy(() =>
  import('./Pages/NotFoundPage/NotFoundPage')
);

const routes = [
  {
    path: '/',
    exact: true,
    // layout: PublicLayout,
    component: HomePage,
  },
  {
    path: '/login',
    exact: true,
    // layout: PublicLayout,
    component: LoginPage,
  },
  {
    path: '/admin',
    exact: true,
    // layout: PrivateLayout,
    component: HomePage,
    isPrivate: true,
  },
  {
    path: '/admin/menu1',
    exact: true,
    // layout: PrivateLayout,
    component: HomePage,
    isPrivate: true,
  },
  {
    path: '/admin/menu2',
    exact: true,
    // layout: PrivateLayout,
    component: HomePage,
    isPrivate: true,
  },
  {
    path: '',
    // layout: PublicLayout,
    component: NotFoundPage,
  },
];

export default routes;
