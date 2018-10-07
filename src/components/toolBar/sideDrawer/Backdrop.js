import React from 'react';
import '../../../css/toolBar/sideDrawer/Backdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} >
      <p> this is where the content is displayed! </p>
    </div>
);

export default backdrop;
