import React, {Component} from 'react';
import '../../../css/toolBar/sideDrawer/SideDrawer.css';
import ToolBarButtons from './../ToolBarButtons'

export default class SideDrawer extends Component {
  render(){
    return(
      <nav className="side-drawer">
        <ul>
          {ToolBarButtons}
        </ul>
      </nav>
    )
  }

}
