import React from 'react'
import MenuDrawer from './MenuDrawer';
import PropTypes from 'prop-types';
import './app.css'
import NotificationContainer from '../NotificationContainer';

export const App = (props) => {
  return(
    <MenuDrawer>
      <div>
        <NotificationContainer/>
        {props.children}
      </div>
    </MenuDrawer>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App
