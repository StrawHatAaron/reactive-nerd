import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './css/index.css';
import App from './App';
import Home     from './components/Pages/Home/Home';
import Services from './components/Pages/Services/Services';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact  from './components/Pages/Contact/Contact';
import Blog     from './components/Pages/Blog/Blog';
import Test from './components/Pages/Testing/Test';

import registerServiceWorker from './registerServiceWorker';


class Index extends Component {
  render() {
    return(
      <App/>
    );
  }
}


ReactDOM.render((
     <BrowserRouter basename={process.env.PUBLIC_URL}>
     <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/test" component={Test}/>
      </div>
     </BrowserRouter>
    ),
    document.getElementById('root')
);
registerServiceWorker();
