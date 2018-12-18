import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import {Col, Row, Visible} from "react-grid-system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../css/Pages/Blog/Blog.css';

//whoa dude!

const blogPosts = [ {title:"Aaron's project", description:"a enviromental report about shoes", pic:"../../../img/dark-blue-fractal.jpg"},
                    {title:"Mikana's project", description:"a enviromental report about passenger pigeon", pic:"../../../img/dark-blue-fractal.jpg"},
                    {title:"Aaron's project", description:"a enviromental report about shoes", pic:"../../../img/dark-blue-fractal.jpg"},
                    {title:"Mikana's project", description:"a enviromental report about passenger pigeon", pic:"../../../img/dark-blue-fractal.jpg"}  ];

const blogsHolder = blogPosts.map((c) => {
   return(
       <div class="blog-content">
           <div>{c.title}</div>
           <a class="blog-comment">{c.description}</a>
           <br/>
           <img src={require("../../../img/dark-blue-fractal.jpg")} alt="something for the hard of sight" class="blog-pic-description"/>
       </div>
   );
});


export default class Blog extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div class="blog-holder">
                {blogsHolder}
                </div>
                <Footer/>
            </div>
        )
    }
}