import React, {Component} from 'react';

import FractalParralax from './FractalParralax';
import ThreeSkills from './ThreeSkills';
import Footer from '../../Footer';
import App from '../../App'

export default class Services extends Component{
  render(){
    return(
      <div>
        <App/>
        <FractalParralax title="Stylish Portfolio" button="Find Out More"/>
        <ThreeSkills/>
        <Footer/>
      </div>
    );
  }
}
