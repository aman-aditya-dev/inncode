import React, {Component} from 'react';
import { Glyphicon} from 'react-bootstrap';
import './services-provide.scss';
import Fade from 'react-reveal/Fade';
export default class ServicesProvide extends Component{
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
            <div className="ServicesProvide">
            <Fade right cascade when={this.state.show}>
                <div className="service-points">
                        <div  style={{textAlign:"left", paddingLeft:"20%"}} >
                                <p><span><Glyphicon glyph="tasks" /></span>Strategy Blueprints</p>
                                <p><span><Glyphicon glyph="user" /></span>Buyer Personas</p>
                                <p><span><Glyphicon glyph="pencil" /></span>Wireframing & Prototyping</p>
                                <p><span><Glyphicon glyph="blackboard" /></span>Responsive Design</p>
                                <p><span><Glyphicon glyph="modal-window" /></span>Usability Testing</p>
                                <p><span><Glyphicon glyph="send" /></span>Interactive Experiences</p>
                                <p><span><Glyphicon glyph="copy" /></span>Copywriting</p>
                                <p><span><Glyphicon glyph="list-alt" /></span>Business Integration</p>
                        </div>
                      
                </div>
                </Fade>
                <div className="services-desc">
                        <h3 className="desc-title">
                        HOW WE’LL BUILD YOU A PROFITABLE WEBSITE
                        </h3>
                        <Fade left cascade when={this.state.show}>
                                <div className="desc-para">
                                        <p>
                                                What makes a website profitable 
                                        </p>
                                        <p>
                                                <strong>It’s easy to use.</strong> A site that is uncluttered and logically arranged.
                                        </p>
                                        <p>
                                                <strong>Custom Designed as per your Business.</strong> A site that gives customers the right tools.
                                        </p>
                                        <p>
                                                <strong>It looks Good.</strong> The end user loves the view and spends more time as it is pleasant to eyes as well.
                                        </p>
                                        <p>
                                                <strong>New Functionalities</strong> With the growth of your business you would probably need your websites to add new Functionalities. We build keeping that in mind
                                        </p>
                                        <p>
                                                <strong>It’s secure.</strong>Your business can be very well protected from cyber-crime if the right security measures are taken.
                                        </p>
                                </div>
                        </Fade>
                </div>
            </div>
        );
    }
}