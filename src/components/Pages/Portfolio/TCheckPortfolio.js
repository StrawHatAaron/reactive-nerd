import React, {Component} from 'react';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';
import '../../../css/Pages/Portfolio/TCheckPortfolio.css';








const tCheckImg = [{src:tCheckDeviceConnect, alt:'Device Connecting to T-Check', caption:"caption text"},
                    {src:tCheckLogo, alt:'T-Checks Logo', caption:"caption text"},
                    {src:tCheckMixture, alt:'T-Check Mixture', caption:"caption text"}];


const TCheckSlideShow = tCheckImg.map((img) => {
    return(
        <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={img.src} alt={img.alt}/>
            <div className="text">{img.caption}</div>
        </div>
    );
});

export default class TCheckPortfolio extends Component{
    render(){
        var slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            console.log("is this being called");
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
            console.log("hey there");
            console.log(slides.styles);
            // slides[slideIndex-1].style.display = "block";
            //dots[slideIndex-1].className += " active";
        }

        return(
            <div class="tCheckPortfolio">



                <div class="slideshow-container">

                    {TCheckSlideShow}

                    <a className="prev"  href="#" onClick={plusSlides(-1)}>click me please</a>
                    <a className="next" onClick={plusSlides(1)}>&#10095;</a>


                </div>

                <br/>


                {/*<div style="text-align:center">*/}
                    {/*<span className="dot" onClick="currentSlide(1)"></span>*/}
                    {/*<span className="dot" onClick="currentSlide(2)"></span>*/}
                    {/*<span className="dot" onClick="currentSlide(3)"></span>*/}
                {/*</div>*/}



            </div>
        );
    }
}

