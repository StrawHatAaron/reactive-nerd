import React, {Component} from 'react';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';
import '../../../css/Pages/Portfolio/tCheckPortfolio.css';

const tCheckPdfs = [tCheckDeviceConnect,
    tCheckLogo,
    tCheckMixture];


const tCheckSlideShow = tCheckPdfs.map((pdf) => {
    return(
        <img src={pdf} alt="t-Check logo"></img>
    );
});

//image not showing!!!!
export default class tCheckPortfolio extends Component{
    render(){
        return(
            <div class="tCheckPortfolio">
                {tCheckSlideShow}
            </div>
        );
    }
}