import React, {Component} from 'react';
import {UserCard} from 'react-ui-cards';
import support from '../../../assets/support.jpg';
import rwd from '../../../assets/rwd.jpg';
import {Row, Col} from 'react-bootstrap';
import './services.scss';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
export default class ServicesHome extends Component{
    constructor(props){
        super(props);
        this.state={
            show: null
        }
    }
    componentDidMount(){
        document.addEventListener('scroll', this.load);
        // $('#services').waypoint(function() {
        //     alert('The element has appeared on the screen.');
        //  })
     
    }
    load=()=>{
        this.setState({
            show: true
        })
    }
    componentWillUnmount(){
        this.setState({
            show: false
        })
    }
    render(){
        return(
           
            <div id ="services">
            <Row >
            <Fade left cascade when={this.state.show}>
                <Col xs={12} md={6} lg={3}>
                <UserCard
                cardClass='float'
                href={'/#/webdesign'}
                header={support}
                avatar={support}
                name='Web Development'
                positionName='Our Website Development comes with intuitive and creative design thought.Click for visually stunning design.'
                />
                </Col>
                <Col xs={12} md={6} lg={3}>
                <UserCard
                cardClass='float'
                href={'/#/carousel'}
                header={rwd}
                avatar={rwd}
                name='Job Support and Training'
                positionName='We provide Job Support and training to professionals to'
                />
                </Col>
                </Fade>
                <Fade right cascade when={this.state.show}>
                <Col xs={12} md={6} lg={3}>
                <UserCard
                cardClass='float'
                href={'/#/carousel'}
                header={support}
                avatar={support}
                name='Job Support and Training'
                positionName='We provide Job Support and training to professionals to'
                />
                </Col>
                <Col xs={12} md={6} lg={3}>
                <UserCard
                cardClass='float'
                href={'/#/carousel'}
                header={support}
                avatar={support}
                name='Job Support and Training'
                positionName='We provide Job Support and training to professionals to'
                />
                </Col>
                </Fade>
            </Row>
            </div>
            
        );
    }
}