import React from 'react';
import PrivateLayout from './Layout/PrivateLayout';
import PublicLayout from './Layout/PublicLayout';

const HomePage = React.lazy(() => import('./Pages/Home/HomePage'));
const NotFoundPage = React.lazy(() => import('./Pages/NotFound/NotFoundPage'));
const LoginPage = React.lazy(() => import('./Pages/Login/LoginPage'));


const ROUTES = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    isPravite: true,
    layout: PublicLayout
  },
  {
    path: '/admin',
    exact: true,
    component: HomePage,
    isPravite: true,
    layout: PrivateLayout
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    layout: PublicLayout
  },
  {
    path: '/admin/menu1',
    exact: true,
    component: HomePage,
    isPravite: true,
    layout: PrivateLayout
  },
  {
    path: '/admin/menu2',
    exact: true,
    component: HomePage,
    isPravite: true,
    layout: PrivateLayout
  },

  {
    path: '',
    component: NotFoundPage,
    layout: PublicLayout,
  },
]
export default ROUTES