import React from 'react';
import '../../../css/Pages/Portfolio/TCheckPortfolio.css';



export default class TCheckPortfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {slideIndex: 1}
    }

    //Show the chosen slide
    currentSlide = (n) => {
        console.log(this.state);
        this.state.slideIndex = n;
        //console.log(this.state);
        this.showSlides();
    };

    //Previous Slide
    minusSlides = () =>  {
        console.log(this.state.slideIndex);
        this.state.slideIndex -= 1;
        //console.log(this.state);
        this.showSlides();
    };

    // Next Slide
    plusSlides = () => {
        console.log(this.state);
        this.state.slideIndex += 1;
        this.showSlides();
    };

     showSlides = () => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (this.state.slideIndex > 3) {this.state.slideIndex = 1}
        if (this.state.slideIndex < 1) {this.state.slideIndex = 3}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        //console.log("hey state");
        //console.log(TCheckSlideShow[this.state.slideIndex-1].props.className);

         // TCheckSlideShow[this.state.slideIndex-1].props.className = "block";

         // TCheckSlideShow[this.state.slideIndex-1].setAttribute(TCheckSlideShow.props.className="block")

        //dots[this.state.slideIndex-1].className += " active";
    };


    render(){
        return(
            <div class="tCheckPortfolio">
                <div class="slideshow-container">
                    {TCheckSlideShow}
                    <a className="prev"  href="#" onClick={this.minusSlides}>click me please</a>
                    <a className="next"  href="#" onClick={this.plusSlides}>&#10095;</a>
                </div>
                <br/>
                <div class="slideshow-dot-spans">
                    <span className="dot" onClick={this.currentSlide(1)}/>
                    <span className="dot" onClick={this.currentSlide(2)}/>
                    <span className="dot" onClick={this.currentSlide(3)}/>
                </div>
            </div>
        );
    }
}

