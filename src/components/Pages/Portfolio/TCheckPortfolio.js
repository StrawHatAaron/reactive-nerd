import React, {Component} from 'react';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';
import '../../../css/Pages/Portfolio/TCheckPortfolio.css';




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}




const tCheckImg = [{src:tCheckDeviceConnect, alt:'Device Connecting to T-Check'},
                    {src:tCheckLogo, alt:'T-Checks Logo'},
                    {src:tCheckMixture, alt:'T-Check Mixture'}];


const TCheckSlideShow = tCheckImg.map((img) => {
    return(
        <img src={img.src} alt={img.alt}/>
    );
});

export default class TCheckPortfolio extends Component{
    render(){
        return(
            <div class="tCheckPortfolio">


                <div class="slideshow-container">




                    <div class="mySlides fade">
                        <div class="numbertext">1 / 3</div>
                        <img src={tCheckLogo} alt="ummmm what the helll dude"/>
                        <div class="text">Caption Text</div>
                    </div>



                    {/*<div className="mySlides fade">*/}
                        {/*<div className="numbertext">2 / 3</div>*/}
                        {/*<img src="img2.jpg" style="width:100%"/>*/}
                        {/*<div className="text">Caption Two</div>*/}
                    {/*</div>*/}
                    {/*<div className="mySlides fade">*/}
                        {/*<div className="numbertext">3 / 3</div>*/}
                        {/*<img src="img3.jpg" style="width:100%"/>*/}
                        {/*<div className="text">Caption Three</div>*/}
                    {/*</div>*/}


                    {/*<a className="prev" onClick="plusSlides(-1)">&#10094;</a>*/}
                    {/*<a className="next" onClick="plusSlides(1)">&#10095;</a>*/}


                </div>

                {/*<br/>*/}


                {/*<div style="text-align:center">*/}
                    {/*<span className="dot" onClick="currentSlide(1)"></span>*/}
                    {/*<span className="dot" onClick="currentSlide(2)"></span>*/}
                    {/*<span className="dot" onClick="currentSlide(3)"></span>*/}
                {/*</div>*/}



            </div>
        );
    }
}

