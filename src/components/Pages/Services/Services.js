import React, {Component} from 'react';

import ThreeSkills from './ThreeSkills';
import Header from '../../Header';
import Footer from '../../Footer';


export default class Services extends Component{
  render(){
    return(
      <div>
        <Header/>
        <ThreeSkills/>
        <Footer/>
      </div>
    )
  }
}
