import React, {Component} from 'react';
import './serviceOffered.scss';
import SvgGSD from '../svgIcons/svgGSD';
export default class ServiceOffered extends Component{
    constructor(){
        super();
        this.state={
            serviceOffered:[
                {
                    title:"GRAPHIC DESIGN SERVICES",
                    icon:<SvgGSD />,
                    desc:"Pictures speak louder than words and thus, we create graphics that define businesses’ services in the best possible way."
                },
                {
                    title:"RESPONSIVE WEB DESIGN",
                    desc:"Our professionals have the capability of featuring websites over desktop, smartphones and tablets alike with responsive web design services"
                },
                {
                    title:"WEB PORTAL DESIGN",
                    desc:"The type and kind of designs for a web portal differ with the kind of business it has. We include all the essentials while providing the services."
                },
                {
                    title:"DYNAMIC WEBSITE DESIGN",
                    desc:"Blending innovation in the right portion is all that defines our dynamic web design services."
                },
                {
                    title:"CUSTOM WEBSITE DESIGN",
                    desc:"Under the services, the aim is to customized the web design as per the requirement of the clients in the most creative way."
                },
                {
                    title:"TEMPLATE DESIGN",
                    desc:"Through our template design services, we concentrate on the details that have been specified by the clients."
                },
                {
                    title:"STATIC WEBSITE DESIGN",
                    desc:"Our static web design services endeavor to showcase your business as well as service online that won’t require frequent updates."
                },  
                {
                    title:"CORPORATE WEBSITE DESIGN",
                    desc:"Our corporate clients have some specific requirements to be fulfilled that we accomplish with our corporate website design solutions."
                },
                {
                    title:"CUSTOMIZED TEMPLATE DESIGN",
                    desc:"We customize the designs over the templates prior to developing one to suit specifically the business requirements."
                }
            ]
        }
    }
    render(){
        return(
            <div className="serviceOffered">
                <h1 className="lHeading">We Offer A Wide Variety Of Website Design Services, Including</h1>
                <div>
                    {this.state.serviceOffered.map((desc, index)=>
                        <div key={index} className="descTile" >
                            {desc.icon}
                            <h2>{desc.title}</h2>
                            <h3>{desc.desc}</h3>
                        </div>)}
                </div>
            </div>
        );
    }
}