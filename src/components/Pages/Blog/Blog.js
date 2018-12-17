import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import {Col, Row, Visible} from "react-grid-system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../css/Pages/Blog/Blog.css';


const blogPosts = [ {title:"Aaron's project", description:"a enviromental report about shoes"},
                    {title:"Mikana's project", description:"a enviromental report about passenger pigeon"},
                    {title:"Aaron's project", description:"a enviromental report about shoes"},
                    {title:"Mikana's project", description:"a enviromental report about passenger pigeon"}  ];

const blogsHolder = blogPosts.map((c) => {
   return(
       <div class="blogContent">
           <div>{c.title}</div>
           <a class="blogComment">{c.description}</a>
       </div>
   );
});


export default class Blog extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div class="um">
                {blogsHolder}
                </div>
                <Footer/>
            </div>
        )
    }
}