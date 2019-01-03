import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import '../css/FractalParralax.css';
import SunGlasses from "./Pages/Contact/Sunglasses";
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
            <p class='parallax-p'> {this.props.content} </p>

            <a>
                <div class='parallax-div-button' href="#button">

                    <p class='parallax-button-text'>{this.props.button}</p>
                    <SunGlasses/>
                </div>
            </a>

          </Parallax>
        </div>
    );
  }
};
