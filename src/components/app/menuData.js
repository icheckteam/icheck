// This file is shared across the demos.
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import { ROUTES } from '../../common/constants';

export const menuListItems = (
  <div>
    <Link to={ROUTES.HOME}>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
  </div>
);