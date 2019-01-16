import React from 'react';
import tCheckDeviceConnect from '../../../img/tCheck/tCheck-device-connect.png';
import tCheckMixture from '../../../img/tCheck/tCheck-mixture.png';
import tCheckLogo from '../../../img/tCheck/tCheck-logo.png';

const tCheckImg = [{src:tCheckDeviceConnect, alt:'Device Connecting to T-Check', caption:"caption text"},
                    {src:tCheckLogo, alt:'T-Checks Logo', caption:"caption text"},
                    {src:tCheckMixture, alt:'T-Check Mixture', caption:"caption text"}];

export default class TCheckSlideShow extends React.Component{

}


    tCheckImg.map((img) => {
    return(
        <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={img.src} alt={img.alt}/>
            <div className="text">{img.caption}</div>
        </div>
    );
    });

