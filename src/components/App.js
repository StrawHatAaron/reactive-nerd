import React, { Component } from 'react';
import '../css/App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'


import Toolbar from './toolBar/Toolbar';
import Backdrop from './toolBar/sideDrawer/Backdrop';
import SideDrawer from './toolBar/sideDrawer/SideDrawer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faUserNinja, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faUserNinja, faEnvelope, faComment)

//hmmm why is site not up
class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

const styles = StyleSheet
export default App;
//forgot to build for live deploy
