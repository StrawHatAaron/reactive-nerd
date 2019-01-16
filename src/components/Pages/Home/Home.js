import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import Example from './Example';

export default class Home extends Component{
    render(){
        return(
        <div>
            <Header/>
            <Example/>
            <Footer/>
        </div>
        )
    }
}