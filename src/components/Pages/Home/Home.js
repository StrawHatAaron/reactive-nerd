import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import Example from './Example';
import CenterMode from './CenterMode';
import '../../../css/Pages/Home/Home.css';

export default class Home extends Component{
    render(){
        return(
        <div>
            <Header/>


            <h1 className="mom"> Hey MOM(Managing Operation Magician) we don't have alot of time due to finals but we wanted to give you a funny gift we love you sooooooooooo much and will show it better after finals. Your way cooler than this website to btw</h1>
            <h2 className="mom">love Aaron and Mikana</h2>




            <CenterMode/>

            {/*<Example/>*/}
            <Footer/>
        </div>
        )
    }
}