import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './css/index.css';
import App from './components/App';
import Services from './components/Pages/Services/Services'
import Contact from './components/Pages/Contact/Contact'

import registerServiceWorker from './registerServiceWorker';


class  Index extends Component {
  render() {
    return(
      <App/>
    );
  }
}


ReactDOM.render((
     <BrowserRouter basename={process.env.PUBLIC_URL}>
     <div>
          <Route exact path="/" component={Services}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/contact" component={Contact}/>
      </div>
     </BrowserRouter>
     ),
     document.getElementById('root')
);
registerServiceWorker();
