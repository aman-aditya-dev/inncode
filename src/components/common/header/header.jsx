import React, {Component} from 'react';
import  './header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Email';
import Hamburger from '../hamburger/hamburger-menu';
class Header extends Component{
    render(){
        return(
            <div className="slimHeader">
                <AppBar position="static" className="app-bar-background">
                <Hamburger />
                    <Toolbar style={{fontSize:"14px"}}>
                        <span className="sHeading">
                                Have any question?
                        </span>
                        <PhoneIcon style={{fontSize:"14px", marginLeft:"15px"}}/>
                        <span style={{fontSize:"14px", marginLeft:"5px"}}> (91) 8210988275 </span>
                        <MessageIcon style={{fontSize:"14px", marginLeft:"15px"}}/>
                        <span style={{fontSize:"14px", marginLeft:"5px"}}> info@inncodesolutions.com </span>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default Header;