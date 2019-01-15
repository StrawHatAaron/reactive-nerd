import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import TCheckPortfolio from './TCheckPortfolio'

export default class Portfolio extends Component{
    render() {
        return (
            <div>
                <Header/>
                <TCheckPortfolio/>
                <Footer/>
            </div>
        );
    }
}
