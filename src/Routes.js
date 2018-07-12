import React from 'react'
import { Route } from "react-router-dom";
import { App } from './containers/app/App';
import { ROUTES } from './common/constants';

import HomeContainer from './containers/HomeContainer';
import AssetsContainer from './containers/AssetsContainer';
import CreateAssetContainer from './containers/CreateAssetContainer';
import InvoicesContainer from './containers/InvoicesContainer';
import ShippingContainer from './containers/ShippingContainer';
import WarrantyContainer from './containers/WarrantyContainer';
import MarketContainer from './containers/MarketContainer';
import WalletContainer from './containers/WalletContainer';
import IdentityContainer from './containers/IdentityContainer';
import AssetDetailsContainer from './containers/AssetDetailsContainer';
import HistoryUpdateContainer from './containers/HistoryUpdateContainer';
import LoginContainer from './containers/LoginContainer';
import NewKeyContainer from './containers/NewKeyContainer';
import ImportKeyContainer from './containers/ImportKeyContainer';
export const Routes = () => {
  return(
    <div>
      <App>
        <div>
          <Route path={ROUTES.HOME} exact component={HomeContainer} />
          <Route path={ROUTES.CREATE_ASSET} component={CreateAssetContainer} />
          <Route path={ROUTES.INVOICES} component={InvoicesContainer} />
          <Route path={ROUTES.SHIPPING} component={ShippingContainer} />
          <Route path={ROUTES.WARRANTY} component={WarrantyContainer} />
          <Route path={ROUTES.MARKET} component={MarketContainer} />
          <Route path={ROUTES.WALLET} component={WalletContainer} />
          <Route path={ROUTES.IDENTITY} component={IdentityContainer} />
          <Route path={ROUTES.ASSETS} exact component={AssetsContainer} />
          <Route path="/assets/:id"  exact component={AssetDetailsContainer} />
          <Route path="/assets/:id/history/:name" component={HistoryUpdateContainer} />
          <Route path="/login" component={LoginContainer} />
        </div>
      </App>
      <Route path="/register" component={NewKeyContainer} />
      <Route path="/import-key" component={ImportKeyContainer} />
    </div>
  )
}

export default Routes