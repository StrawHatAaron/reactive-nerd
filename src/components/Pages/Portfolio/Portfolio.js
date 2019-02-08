import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import TCheckPortfolio from './TCheckPortfolio'
import '../../../css/Pages/Portfolio/Portfolio.css';

export default class Portfolio extends Component{
    render() {
        return (
            <div>
                <Header/>
                <div className="large-animation-slider" id="sliding-container">
                    <TCheckPortfolio/>
                    <TCheckPortfolio/>
                    <TCheckPortfolio/>
                    <TCheckPortfolio/>
                    <TCheckPortfolio/>
                    <TCheckPortfolio/>
                    <TCheckPortfolio/>
                </div>
                <Footer/>
            </div>
        );
    }
}
