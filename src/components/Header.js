import React, { Component } from 'react';
import FractalParralax from './FractalParralax';
import Toolbar from "./toolBar/Toolbar";
import SideDrawer from "./toolBar/sideDrawer/SideDrawer";
import Backdrop from "./toolBar/sideDrawer/Backdrop";
import SunGlasses from "./Pages/Contact/Sunglasses";

export default class Sunglasses extends Component{
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

    render(){

      let backdrop;
      if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
      }

    return(
      <div>
          {/*<App/>*/}
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <FractalParralax title="Stylish Portfolio" content="A Miller And Montagnino Inspiration" button="See More"/>

      </div>
    )
  }
}
