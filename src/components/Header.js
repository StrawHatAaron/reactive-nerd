import React, { Component } from 'react';
import FractalParralax from './FractalParralax';
import Toolbar from "./toolBar/Toolbar";
import SideDrawer from "./toolBar/sideDrawer/SideDrawer";
import Backdrop from "./toolBar/sideDrawer/Backdrop";


export default class Header extends Component{
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
      <div>/*want to change this to header*/
          {/*<App/>*/}
          {/*<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />*/}
          {/*<SideDrawer show={this.state.sideDrawerOpen} />*/}
          {/*{backdrop}*/}
          <h1>hello</h1>
          <Toolbar/>

          <FractalParralax title="Stylish Portfolio" content="A Miller And Montagnino Inspiration" button="See More"/>

      </div>
    )
  }
}
