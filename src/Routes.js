import React from 'react'
import { Route } from "react-router-dom";
import { App } from './components/app/App';
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

export const Routes = () => {
  return(
    <App>
      <div>
        <Route path={ROUTES.HOME} exact component={HomeContainer} />
        <Route path={ROUTES.ASSETS} component={AssetsContainer} />
        <Route path={ROUTES.CREATE_ASSET} component={CreateAssetContainer} />
        <Route path={ROUTES.INVOICES} component={InvoicesContainer} />
        <Route path={ROUTES.SHIPPING} component={ShippingContainer} />
        <Route path={ROUTES.WARRANTY} component={WarrantyContainer} />
        <Route path={ROUTES.MARKET} component={MarketContainer} />
        <Route path={ROUTES.WALLET} component={WalletContainer} />
        <Route path={ROUTES.IDENTITY} component={IdentityContainer} />
      </div>
    </App>
  )
}

export default Routes