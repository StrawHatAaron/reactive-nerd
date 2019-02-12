import React from 'react';
import '../../../css/Pages/Portfolio/PortfolioSlider.css';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';

export default class PortfolioSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 1,
            src: [tCheckDeviceConnect, tCheckLogo, tCheckMixture],
            alt:['Phone Connecting to T-Check', 'T-Checks Logo', 'T-Check Mixture'],
        };

        this.currentSlide = this.currentSlide.bind(this);
    }

    componentDidMount(){
        setInterval(() => this.currentSlide(this.state.slideIndex+1), 5000);
    }

    currentSlide(n){
        let newSlide = n<0 ?  2 : Math.abs(n % 3);
        this.setState({slideIndex: newSlide });
    }

    render(){
        return(
                <div className="mySlides">
                    <div className="number-text">{this.state.slideIndex+1} / 3</div>
                    <div className="image-arrow-holder">
                        <button className="prev"  href="#" onClick={() => this.currentSlide(this.state.slideIndex - 1)}>&#10094;</button>
                        <img classNmae="sliding-image" src={this.state.src[this.state.slideIndex]} alt={this.state.alt[this.state.slideIndex]}/>
                        <button className="next"  href="#" onClick={() => this.currentSlide(this.state.slideIndex + 1)}>&#10095;</button>
                    </div>

                    <div className="bottom-slide-content">
                        During my time at tCheck I became a skilled skilled at working in a small team of developer in a
                        professional setting.
                    </div>

                </div>
        );
    }
}

