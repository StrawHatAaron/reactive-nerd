import React from 'react';
import '../../../css/Pages/Portfolio/PortfolioSlider.css';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';
import scifContract from '../../../img/scif/contract.jpg';
import scifLogo from '../../../img/scif/logo.jpg';
import scifStable from '../../../img/scif/stable.png';
import mhsoacInvolved from '../../../img/mhsoac/get-involved.jpg';
import mhsoacLogo from '../../../img/mhsoac/logo.jpg';
import mhsoacProp from '../../../img/mhsoac/prop-63.jpg';


export default class PortfolioSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sliderType: 0,
            slideIndex: 0,
            src: [[tCheckDeviceConnect, tCheckLogo, tCheckMixture],
                [scifContract, scifLogo, scifStable],
                [mhsoacInvolved, mhsoacLogo, mhsoacProp]],
            alt:[['Phone Connecting to T-Check', 'T-Checks Logo', 'T-Check Mixture'],
                ['State Fund Contract', 'State Fund Logo', 'State Fund Stable Picture'],
                ['Mental Health Involved Picture', 'Mental Health Logo', 'Mental Health is part of prop 63']],
        };
        this.currentSlide = this.currentSlide.bind(this);
    }

    componentWillMount(){
        setInterval(() => this.currentSlide(this.state.slideIndex+1), 5000);
        if(this.props.title == "State Fund") {this.state.sliderType = 1}
        else if (this.props.title == "MHSOAC") {this.state.sliderType = 2;}
    }

    currentSlide(n){
        let slideCount = 3;
        let newSlide = n<0 ?  (slideCount - 1) : Math.abs(n % slideCount);
        this.setState({slideIndex: newSlide});
    }

    render(){
        return(
                <div className="mySlides">
                    <div className="number-text">{this.state.slideIndex+1} / 3</div>
                    <div className="image-arrow-holder">
                        <button className="prev"
                                href="#"
                                onClick={() => this.currentSlide(this.state.slideIndex - 1)}>&#10094;
                        </button>
                        <img className="sliding-image"
                             src={this.state.src[this.state.sliderType][this.state.slideIndex]}
                             alt={this.state.alt[this.state.sliderType][this.state.slideIndex]}
                        />
                        <button className="next"
                                href="#"
                                onClick={() => this.currentSlide(this.state.slideIndex + 1)}>&#10095;
                        </button>
                    </div>

                    <div className="portfolio-title-container" >
                        <a className="portfolio-title"
                           href={this.props.link}>{this.props.title}&#x29c9;</a>
                    </div>

                    <div className="bottom-slide-content" >
                        {this.props.content}
                    </div>
                </div>
        );
    }
}

