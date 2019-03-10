import React, {Component} from 'react';
import '../../../css/Pages/Services/ThreeSkills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Row, Col, Visible } from 'react-grid-system';


const icons = [{pic:['java', 'js'], content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'},
              {pic:['apple', 'expeditedssl'], content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'},
              {pic:['app-store', 'github-alt'], content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'}]

const squredIcons = icons.map((c) => {
  return (
    <div class="div-design">
      <div class="fab-section">
        <Row>
          <span class='fab-span'><Col sm={4}><FontAwesomeIcon icon={['fab', c.pic[0] ]} size="4x"/></Col></span>
          <span class='fab-span'><Col sm={4}><FontAwesomeIcon icon={['fab', c.pic[1] ]} size="4x"/></Col></span>
        </Row>
      </div>
      <div class="mappedContent">
        <p>{c.content}</p>
      </div>
    </div>
  )
});


export default class ThreeSkills extends Component{
  render(){
    return(
      <div className="services">
        <h3> SERVICES </h3>
        <div class="squareContent">
          {squredIcons}
        </div>
      </div>
    );
  }
}
