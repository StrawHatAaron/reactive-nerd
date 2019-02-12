import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import PortfolioSlider from './PortfolioSlider'
import '../../../css/Pages/Portfolio/Portfolio.css';

export default class Portfolio extends Component{
    render() {
        return (
            <div>
                <Header/>
                <div className="large-animation-slider" id="sliding-container">
                    <PortfolioSlider/>
                    <PortfolioSlider/>
                    <PortfolioSlider/>
                    <PortfolioSlider/>
                </div>
                <Footer/>
            </div>
        );
    }
}
