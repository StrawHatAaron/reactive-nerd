import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';

const portfolioItems = ['tCheck', 'MHSOAC', 'SCIF', 'SmartFoodCooker','Empire West'];

const tCheckPdfs = ['tCheck-device-connect.pdf'];
                    // '../../../img/tCheck/tCheck-Home.pdf',
                    // '../../../img/tCheck/tCheck-mixture.pdf'];

const tCheckSlideShow = tCheckPdfs.map((pdf) => {
    return(

         <embed src={pdf} type="application/pdf" width="144px" height="86px"/>

    )
});

export default class Portfolio extends Component{
    render(){
        return(
            <div>
                <Header/>
                <embed src="./tCheck-device-connect.pdf" type="application/pdf" width="144px" height="86px"/>
                <Footer/>
            </div>
        )
    }
}