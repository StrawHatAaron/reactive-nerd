import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import Example from './Example';
import CenterMode from './CenterMode';

export default class Home extends Component{
    render(){
        return(
        <div>
            <Header/>
            <CenterMode/>
            {/*<Example/>*/}
            <Footer/>
        </div>
        )
    }
}