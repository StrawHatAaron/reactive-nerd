import React, {Component} from 'react';

import reactLogo from '../../../logo.svg';
import '../../../css/Pages/Contact/Sunglasses.css';



export default class Sunglasses extends Component{
  render(){
    return(

      <div class="glasses">
      <img src={reactLogo} class="react-logo" className="App-logo" alt="React logo" />
          <div class="g-top "></div>
          <div class="g-left glass"></div>
          <div class="g-right glass"></div>
      </div>

    )
  }
}
