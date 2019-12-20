import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/landingPageActions';
import {bindActionCreators} from 'redux';
import CarouselBanner from './carousel/carousel';
import AboutUs from './aboutus/aboutus';
import ServicesHome from './services-home/services';
import SideNavBar from '../common/side-navbar/side-navbar';
import {Row, Col} from 'react-bootstrap';
import ServicesProvide from './services-provide/services-provide';
import ContactUS from './contact-us/contact-us';
import Footer from '../common/footer/footer';
import ServicesCards from './services-cards/services-cards';
class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state={
            loaded: false
        }
    }
    componentDidMount(){
        this.setState({loaded: true})
    }
    incrementValue=(e)=>{
        this.props.actions.incrementInAction(e.target.value);
    }
    render(){
        return(
            
            <div>
                {this.state.loaded ? 
                <Row>
                    <Col xs={0} sm={0} md={1} lg={1}>
                        <SideNavBar />
                    </Col>
                    <Col xs={12} sm={12} md={11} lg={11} >
                        <CarouselBanner />
                        <AboutUs /> 
                        <ServicesHome />
                        <ServicesProvide />
                        <ServicesCards />
                        <ContactUS />
                        <Footer />
                    </Col>
                </Row>
                    :""}
            </div>
           
        );
    }
}
function mapStateToProps(state) {
    return {
        landingPage: state.landingPageReducers
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage);


