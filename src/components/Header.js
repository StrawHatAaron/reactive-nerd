import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import FractalParralax from './FractalParralax';

export default class Sunglasses extends Component{
  render(){
    return(
      <div>
        <App/>
        <FractalParralax title="Stylish Portfolio" button="Find Out More"/>
      </div>
    )
  }
}
