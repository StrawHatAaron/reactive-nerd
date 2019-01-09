import React from 'react';
import '../../css/toolBar/Toolbar.css';
import DrawerToggleButton from './sideDrawer/DrawerToggleButton';
import ToolBarButtons from './ToolBarButtons'

//umfdkfdsdffd
const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Reactive Nerd</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
              {ToolBarButtons}
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
