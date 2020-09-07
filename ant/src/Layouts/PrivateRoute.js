import React from 'react';
import { getCookie } from '../Utils/Helpers';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_URL, TOKEN_KEY } from '../GlobalConstants';
import { PrivateLayout } from './PrivateLayout';

export const PrivateRoute = ({
  component: Component,
  // layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={
        props => (
          // getCookie(TOKEN_KEY) ? (
          <PrivateLayout>
            {/* <Layout> */}
              <Component {...props} />
            {/* </Layout> */}
          </PrivateLayout>
        )
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: LOGIN_URL,
        //     }}
        //   />
        // )
      }
    />
  );
};
