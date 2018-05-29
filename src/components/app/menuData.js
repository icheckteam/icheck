// This file is shared across the demos.
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssetIcon from '@material-ui/icons/WebAsset';
import MarketIcon from '@material-ui/icons/StoreMallDirectory';
import ShippingIcon from '@material-ui/icons/LocalShipping';
import InvoiceIcon from '@material-ui/icons/InsertDriveFile';
import IdentityIcon from '@material-ui/icons/PermIdentity';
import { ROUTES } from '../../common/constants';

export const menuListItems = (
  <div>
    <Link to={ROUTES.HOME}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to={ROUTES.WALLET}>
      <ListItem button>
        <ListItemIcon>
          <WalletIcon />
        </ListItemIcon>
        <ListItemText primary="Wallet" />
      </ListItem>
    </Link>
    <Link to={ROUTES.IDENTITY}>
      <ListItem button>
        <ListItemIcon>
          <IdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Identity" />
      </ListItem>
    </Link>
    <Link to={ROUTES.ASSETS}>
      <ListItem button>
        <ListItemIcon>
          <AssetIcon />
        </ListItemIcon>
        <ListItemText primary="Asset" />
      </ListItem>
    </Link>
    <Link to={ROUTES.MARKET}>
      <ListItem button>
        <ListItemIcon>
          <MarketIcon />
        </ListItemIcon>
        <ListItemText primary="Market" />
      </ListItem>
    </Link>
    <Link to={ROUTES.SHIPPING}>
      <ListItem button>
        <ListItemIcon>
          <ShippingIcon />
        </ListItemIcon>
        <ListItemText primary="Shipping" />
      </ListItem>
    </Link>
    <Link to={ROUTES.INVOICES}>
      <ListItem button>
        <ListItemIcon>
          <InvoiceIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
      </ListItem>
    </Link>
  </div>
);

