import React, { Component } from 'react';
import './css/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faUserNinja, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faUserNinja, faEnvelope, faComment);//, faHome, faServiceStack, faBlog, faFileContract, faDraftingCompass);//need to update font awesome

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>

      </div>
    );
  }
}

// const styles = StyleSheet
export default App;

