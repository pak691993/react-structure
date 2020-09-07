import React from 'react';
import { Route } from 'react-router-dom';
import { PublicLayout } from './PublicLayout';

export const PublicRoute = ({
  component: Component,
  // layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <PublicLayout>
          {/* <Layout> */}
          <Component {...props} />
          {/* </Layout> */}
        </PublicLayout>
      )}
    ></Route>
  );
};
