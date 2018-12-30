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
          <Row class="contact-content">
            <Col sm={6}>
              <div class="inputWithIcon">
                <input type="text" placeholder="Name"/>
                <i class="contact-icon"><FontAwesomeIcon icon="user-ninja"/></i>
              </div>
              <div class="inputWithIcon">
                <input type="text" placeholder="Email"/>
                <i class="contact-icon"><FontAwesomeIcon icon="envelope"/></i>
              </div>
              <div class="inputWithIcon">
                <textarea class="big-textbox" type="text" placeholder="Comment"/>
                <i class="contact-icon"><FontAwesomeIcon icon="comment"/></i>
              </div>
              <div>
                <button class="submit-button">Send Message</button>
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
