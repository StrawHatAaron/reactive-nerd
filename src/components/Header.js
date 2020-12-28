import React, { Component } from 'react';
import FractalParralax from './FractalParralax';

export default class Header extends Component{

    render(){

    return(
      <header>
          <FractalParralax 
            title="Stylish Portfolio" 
            content="A Miller And Montagnino Inspiration" 
            button="See More"/>
      </header>
    )
  }
}
