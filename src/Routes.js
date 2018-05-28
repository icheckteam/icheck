import React from 'react'
import { Route } from "react-router-dom";
import { App } from './components/app/App';
import HomeContainer from './containers/HomeContainer';
import { ROUTES } from './common/constants';

export const Routes = () => {
  return(
    <App>
      <Route path={ROUTES.HOME} component={HomeContainer} />
    </App>
  )
}

export default Routes