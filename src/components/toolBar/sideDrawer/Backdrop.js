import React from 'react';
import '../../../css/toolBar/sideDrawer/Backdrop.css';

export const NavConstants = ['Home', 'Services', 'Blog', 'Portfolio', 'Contact'];


//would like to know why this ruins it
const BackDropButtons = NavConstants.map((section) => {
    return (
        <ul class="unordered-toolbar-buttons">
            <a class="backdrop-toolbar-buttons" href={section}>{section}</a>
            <hr/>
        </ul>
    )
});


//class => css
//className => react
const backdrop = props => (
    <div class="backdrop-toolbar-body" className="backdrop" onClick={props.click} >
        <h1>hello</h1>
    </div>
);

export default backdrop;
