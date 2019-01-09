import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import tCheckPortfolio from './tCheckPortfolio'

export default class Portfolio extends Component{
    render() {
        return (
            <div>
                <Header/>
                <tCheckPortfolio/>
                <Footer/>
            </div>
        );
    }
}
