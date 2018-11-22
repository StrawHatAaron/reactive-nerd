import React, {Component} from 'react';
import Header from '../../Header'
import Footer from '../../Footer';
import {Col, Row, Visible} from "react-grid-system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../css/Pages/Blog/Blog.css';


const icons = [{pic:['java', 'js'], content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'},
    {pic:['apple', 'expeditedssl'], content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'},
    {pic:['app-store', 'github-alt'], content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'}]

const blogContent = icons.map((c) => {
    return (
             <div>
                 <a>should probably get a database going by now.</a>
             </div>
    )
});


export default class Blog extends Component{
    render(){
        return(
            <div>
                <Header/>
                <blogContent/>
                <Footer/>
            </div>
        )
    }
}