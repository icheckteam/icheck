// This file is shared across the demos.
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssetIcon from '@material-ui/icons/WebAsset';
import { ROUTES } from '../../common/constants';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
export const menuListItems = (
  <div>
    <Link to={ROUTES.HOME}>
      <ListItem button>
        <ListItemIcon>
          <WalletIcon />
        </ListItemIcon>
        <ListItemText primary="Wallet" />
      </ListItem>
    </Link>
    <Link to={ROUTES.ASSETS}>
      <ListItem button>
        <ListItemIcon>
          <AssetIcon />
        </ListItemIcon>
        <ListItemText primary="Assets " />
      </ListItem>
    </Link>
    <Link to={ROUTES.IDENTITY}>
      <ListItem button>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Identities" />
      </ListItem>
    </Link>
  </div>
);

