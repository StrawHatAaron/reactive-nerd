import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Row, Col} from 'react-grid-system';
import '../../../css/Pages/Contact/Contact.css';
import Header from '../../Header'
import Footer from '../../Footer';
import Sunglasses from './Sunglasses';

export default class Contact extends Component{
  render(){
    return(
      <body class="contact-body">
        <Header/>
          <Row>
            <Col sm={6}>
              <div class="inputWithIcon">
                <input type="text" placeholder="Name"/>
                <i><FontAwesomeIcon icon="user-ninja"/></i>
              </div>
              <div class="inputWithIcon">
                <input type="text" placeholder="Email"/>
                <i><FontAwesomeIcon icon="envelope"/></i>
              </div>
              <div class="inputWithIcon">
                <input type="text" placeholder="Comment"/>
                <i><FontAwesomeIcon icon="comment"/></i>
              </div>
            </Col>
            <Col sm={6}>
              <Sunglasses/>
            </Col>
          </Row>
        <Footer/>
      </body>
    );
  }
}
