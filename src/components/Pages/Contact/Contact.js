import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../css/Pages/Contact/Contact.css';
import App from '../../App'
import Footer from '../../Footer';



export default class Contact extends Component{
  render(){
    return(
      <html>
      <App/>
        <body class="contact-body">
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
          <Footer/>
        </body>
      </html>

    );
  }
}
