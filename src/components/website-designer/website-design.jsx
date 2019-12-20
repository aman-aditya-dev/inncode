import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SideNavBar from '../common/side-navbar/side-navbar';
import ProjectQuotes from './project-quotes/project-quotes';
import Footer from '../common/footer/footer';
import {Row, Col} from 'react-bootstrap';
import PriceList from './priceListTable/priceListTable';
import WebIntro from './web-intro/webIntro';
import ServiceOffered from './services-offered/serviceOffered';
export default class WebsiteDesign extends Component{
    constructor(){
        super();
        this.state={
            name:''
        }
    }
    handleChange=(name)=>{
        console.log(name);
    }
    render(){
        return(
            <div>
                <Row>
                  <Col xs={0} sm={0} md={1} lg={1}>
                        <SideNavBar />
                    </Col>
                    <Col xs={0} sm={0} md={11} lg={11}>
                    <WebIntro />
                    <ServiceOffered />
                    <PriceList />
                    <ProjectQuotes />
                    <Footer />
                 </Col>
                 </Row>
            </div>
        );
    }
} 