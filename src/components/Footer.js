import React, {Component} from 'react';
import '../css/Footer.css'
import { Container, Row, Col, Visible } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default class Footer extends Component{
  render(){
    return(
      <footer>
        <Container>
          <Row>
            <Col sm={4}>
              <div class="footer-1">
                <h4>To talk to a nerd:</h4>
                <h4>Call: <a href="tel:6149059948">(614)905-9948</a></h4>
                <h4>Email: <a href="mailto:aaronmiller822028@gmail.com">it's super long</a></h4>
              </div>
            </Col>
            <Col sm={4}>
              <Visible xl lg md>
                <h4 class="footer-section">© 2018 Reactive Nerd</h4>
              </Visible>
              <Visible sm xs>
                <h4>© 2018 Reactive-Nerd</h4>
              </Visible>
            </Col>
            <Col sm={4}>
              <Visible xl lg md>
                <FontAwesomeIcon icon="facebook"/>
                <h4 class="footer-section">ummmmmmm somthing witty.</h4>
                <FontAwesomeIcon icon={['fab', 'facebook' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'twitter' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'snapchat' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'instagram' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'github' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'linkedin' ]} size="2x"/>
              </Visible>
              <Visible sm xs>
                <h4>ummmmmmm somthing witty.</h4>
                <FontAwesomeIcon icon={['fab', 'facebook' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'twitter' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'snapchat' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'instagram' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'github' ]} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'linkedin' ]} size="2x"/>
              </Visible>

            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
//whoops forgot to deploy
