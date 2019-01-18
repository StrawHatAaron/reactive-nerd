import React from 'react';
import '../../../css/Pages/Portfolio/TCheckPortfolio.css';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';

// let tCheckImg = [{src:tCheckDeviceConnect, alt:'Device Connecting to T-Check', caption:"caption text", containerName: "mySlides fade"},
//                     {src:tCheckLogo, alt:'T-Checks Logo', caption:"caption text", containerName: "mySlides fade"},
//                     {src:tCheckMixture, alt:'T-Check Mixture', caption:"caption text", containerName: "mySlides fade"}];

// let dot = [{dotSpan:"dot"},
//             {dotSpan:"dot"},
//             {dotSpan:"dot"}];

// let TCheckSlideShow = tCheckImg.map((img) => {
//     return(
//         <div className={img.containerName} >
//             <div className="numbertext">1 / 3</div>
//             <img src={img.src} alt={img.alt}/>
//             <div className="text">{img.caption}</div>
//         </div>
//     );
// });



export default class TCheckPortfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 1,
            src: [tCheckDeviceConnect, tCheckLogo, tCheckMixture],
            alt:['Device Connecting to T-Check', 'T-Checks Logo', 'T-Check Mixture'],
            caption: ['um', 'um', 'um'],
            dot: ['dot', 'dot', 'dot'],
            containerName: ['mySlides fade','mySlides fade','mySlides fade'],
        }

    }

    componentWillUpdate(){}

    componentDidMount(){}

    render(){
        return(
            <div class="tCheckPortfolio">
                <div class="slideshow-container">
                    <div className={this.state.mySlide} >
                        <div className="numbertext">1 / 3</div>
                        <img src={this.state.src[0]} alt={this.state.alt[0]}/>
                        <div className="text">{this.state.caption[0]}</div>
                    </div>
                    <div className="" >
                        <div className="numbertext">1 / 3</div>
                        <img src={this.state.src[1]} alt={this.state.alt[1]}/>
                        <div className="text">{this.state.caption[1]}</div>
                    </div>
                    <div className="" >
                        <div className="numbertext">1 / 3</div>
                        <img src={this.state.src[2]} alt={this.state.alt[2]}/>
                        <div className="text">{this.state.caption[2]}</div>
                    </div>

                    <a className="prev"  href="#" onClick={this.currentSlide(this.state.slideIndex-1)}>minus</a>
                    <a className="next"  href="#" onClick={this.currentSlide(this.state.slideIndex+1)}>plus</a>
                </div>
                <br/>
                <div class="slideshow-dot-spans">
                    <span className={this.state.dot[0].dotSpan} onClick={this.currentSlide(1)}/>
                    <span className={this.state.dot[1].dotSpan} onClick={this.currentSlide(2)}/>
                    <span className={this.state.dot[2].dotSpan} onClick={this.currentSlide(3)}/>
                </div>
            </div>
        );
    }
}

