import React from 'react'
import MenuDrawer from './MenuDrawer';
import PropTypes from 'prop-types';
import './app.css'

export const App = (props) => {
  return(
    <div>
      <MenuDrawer>
        {props.children}
      </MenuDrawer>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App
