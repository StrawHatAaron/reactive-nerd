import React, {Component} from 'react';
import { Document, Page } from 'react-pdf'
import Header from '../../Header'
import Footer from '../../Footer';

const portfolioItems = ['tCheck', 'MHSOAC', 'SCIF', 'SmartFoodCooker','Empire West'];

const tCheckPdfs = ['tCheck-device-connect.pdf',
                    '../../../img/tCheck/tCheck-Home.pdf',
                    '../../../img/tCheck/tCheck-mixture.pdf'];

const tCheckSlideShow = tCheckPdfs.map((pdf) => {
    return(

        <Document file={tCheckPdfs} />

    )
});

//very pleased. changed the buildpack and ran updates and everything still works

export default class Portfolio extends Component{
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Header/>
                    <Document
                        file='./tCheck-device-connect.pdf'
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                <Footer/>
            </div>
        );
    }
}
