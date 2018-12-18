import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import '../css/FractalParralax.css';
//for the commit
export default class FractalParralax extends Component {
  render() {
    return (
        <div class='parallax-section'>
          <Parallax
            blur={0}
            bgImage={require('../img/dark-blue-fractal.jpg')}
            strength={600}
          >
            <h1 class='parallax-h1'> {this.props.title} </h1>
            <p class='parallax-p'> A Free Bootstrap Theme by Start Bootstrap</p>
            <p class='parallax-div-button'>
                <a class='parallax-button' href="#button">{this.props.button}</a>
            </p>

          </Parallax>
        </div>
    );
  }
};
