import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Copyright from '@material-ui/icons/Copyright';
import './footer.scss';
import { SocialIcon } from 'react-social-icons';
export default class Footer extends Component{
    render(){
        return(
            <div className="footer-main">
                <div className="leftHalf">
                <h3 className="lHeading">Join the Dream Team.</h3>
                <p className="address">K2-01, RingRoad , Telco Colony, Jamshedpur-831004</p> <br />
            </div>
            <div className="rightHalf">
                <SocialIcon network="twitter" bgColor="#e34234" style={{marginRight: "6px"}} onClick={()=>window.location="#/resume"}/>
                <SocialIcon network="facebook" bgColor="#e34234" style={{marginRight: "6px"}}/>
                <SocialIcon network="instagram" bgColor="#e34234" style={{marginRight: "6px"}}/>
                <SocialIcon network="linkedin" bgColor="#e34234" style={{marginRight: "6px"}}/>
                <SocialIcon network="tumblr" bgColor="#e34234" style={{marginRight: "6px"}}/>
            </div>
            </div>
        );
    }
}