import React from 'react';
//trying to find this array
// import NavConstants from '../Constants/NavConstants';

export const NavConstants = ['Home', 'Services', 'Blog', 'Portfolio', 'Contact'];

const ToolBarButtons = NavConstants.map((section) => {
  return (
    <li>
      <a class="desktop-toolbar-buttons" href={section}> {section} </a>
    </li>
  )
});




export default ToolBarButtons;

