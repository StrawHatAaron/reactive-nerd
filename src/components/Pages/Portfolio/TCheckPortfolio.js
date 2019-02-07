import React from 'react';
import '../../../css/Pages/Portfolio/TCheckPortfolio.css';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';

export default class TCheckPortfolio extends React.Component{
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
        if(n > this.state.src.length - 1) {
            this.setState({slideIndex: 0});
        } else if (n < 0) {
            this.setState({slideIndex: this.state.src.length - 1 });
        } else {
            this.setState({slideIndex: n});
        }
        console.log(this.state.slideIndex);
    }

    render(){
        return(
            <div class={this.props.title} id='sliding-container'>
                <div className="mySlides">
                    <div className="numbertext">{this.state.slideIndex+1} / 3</div>
                    <img src={this.state.src[this.state.slideIndex]} alt={this.state.alt[this.state.slideIndex]}/>
                    <div className="bottom-slide-content">
                        During my time at tCheck I became a skilled skilled at working in a small team of developer in a
                        professional setting.
                    </div>
                </div>
                <a className="prev"  href="#" onClick={() => this.currentSlide(this.state.slideIndex - 1)}>&#10094;</a>
                <a className="next"  href="#" onClick={() => this.currentSlide(this.state.slideIndex + 1)}>&#10095;</a>
            </div>
        );
    }
}

