import React from 'react'
import MenuDrawer from './MenuDrawer';
import PropTypes from 'prop-types';
import './app.css'

export const App = (props) => {
  return(
    <MenuDrawer>
      {props.children}
    </MenuDrawer>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App
