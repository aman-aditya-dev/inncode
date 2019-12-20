import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './resume-software.scss';
export default class Proficient extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // candidateDetails: this.props.candidateDetails
        }
    }
    printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                this.setState({imgData})
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', -2.3, 0);
                pdf.save("resume.pdf");
            })
    }
    
 
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            // if (document.getElementById('divToPrint')) {
                const input = document.getElementById('divToPrint');
                // input.parentElement.style.width = '10000px';
                // input.style.display = 'inline-block';
                // input.style.top = 0
                // input.scrollIntoView();
    //             var data = input.className;
    // input.className += " html2canvasreset";
                html2canvas(input)
                    .then((canvas) => {
                        const imgData = canvas.toDataURL('image/png');
                        this.setState({ imgData })
                    })
                    // html2canvas((input), {
                    //     onrendered: function(canvas) {
                    //         var imgData = canvas.toDataURL("image/png");
                    //         console.log(imgData);
                    //         this.setState({ imgData })
                    //     }
                    // });
            }
        // }
    }

    render() {
        // const candidateDetails = this.props.candidateDetails;
        return (
            <div style={{position:"relative"}}>  
                {this.props.preview ? <img className="img-preview" src={this.state.imgData} width="28%" /> : ""}
                {!this.props.preview ?
                    <div >
                        <button className="button-print" onClick={this.printDocument}>Print</button>
                    </div> : ""}
                <div id="divToPrint" className={this.props.preview ? "is-hidden" : ""}>
            <div className="proficient">
                    <div className="basic-info header "> 
                        <div className="row">
                        <div className="col-xs-8">
                            <h3 className="light-heading-big">{this.props.candidateDetails.basicInfo.name}</h3>
                            <h4 className="blue-shade-heading-medium">{this.props.candidateDetails.basicInfo.designation}</h4>
                            <p className="light-para">
                                {this.props.candidateDetails.professionalSummary}
                            </p>
                        </div>
                        <div className="col-xs-4 l-float-right">
                            <img src={this.props.candidateDetails.imgData} width="100px" />
                        </div>
                        </div>
                    </div>
                    <div className="sub-header">
                        <span>{this.props.candidateDetails.basicInfo.email} </span>|
                        <span> {this.props.candidateDetails.basicInfo.contact_number} </span>|
                        <span> {this.props.candidateDetails.basicInfo.address}</span>
                    </div>
                <div className="content-div">
                    <div>
                        <div className="work_exp">
                            <h3 className="underlined-title">
                                Work Experience
                            </h3>
                            {this.props.candidateDetails.workExperience.map((item, index) =>
                                <> 
                                    <h3 className="bold-title">
                                        {item.job_title}
                                    </h3>
                                    <h3 className="semi-bold-title">
                                        {item.company}
                                    </h3>
                                    <span className="light-font-italic">
                                        {item.start_date} -
                                    </span>
                                    <span className="light-font-italic">
                                        &nbsp;{item.end_date}
                                    </span>
                                    <span className="light-font-italic l-float-right">
                                        {item.location}
                                    </span>
                                    <h5 className="light-font-italic">
                                        Achievements/Tasks
                                    </h5>
                                    <ul>
                                    {item.role.map((subItem, indexes) =>
                                        <li>
                                            {subItem.role_points}
                                       </li>
                                        )}
                                    </ul>
                                </>
                                )}
                        </div> 
                        <div className="education">
                                <h3 className="underlined-title">
                                Education
                                </h3>
                            {this.props.candidateDetails.education.map((edu, index) =>
                                <>
                                    <h3 className="bold-title">{edu.degree}</h3>
                                    <h4 className="semi-bold-title">{edu.institute_name}</h4>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <span className="light-font-italic">{edu.start_date}{edu.start_date ? " - " : ""}</span>
                                            <span className="light-font-italic">{edu.end_date}</span>
                                        </div>
                                        <div className="col-xs-6">
                                            <span className="light-font-italic l-float-right">{edu.location}</span>
                                       </div>
                                        
                                   </div>
                                </>
                                )}
                        </div> 

                    </div>
                        <div className="skills">
                            <h3 className="underlined-title">Skills</h3>
                            {this.props.candidateDetails.skills.map((skill, index) =>
                                <span className="skill-background">{skill}</span>)}
                        </div>
                        <div className="projects">
                            <h3 className="underlined-title">
                                Projects
                            </h3>
                            {this.props.candidateDetails.projects.map((pro, index) =>
                                <>
                                <h4 className="semi-bold-title">{pro.project_name}({pro.project_year_start} - {pro.project_year_end})</h4>
                                    
                                    <ul>{
                                        pro.project_desc.map((des, indexes) =>
                                            <li>
                                                {des.desc_points}
                                            </li>
                                    
                                    )
                                    }
                                    </ul>
                                    </>
                                )}
                                
                            </div>
                            <div className="interests">
                                <h3 className="underlined-title">interests</h3>
                               
                                {this.props.candidateDetails.interests.map((int, indexes) =>
                                    <span className="skill-background">
                                        {int}
                                    </span>)}
                            
                            </div>
                </div> 
               
                    </div>  
                        </div>
                  
                    
            </div>
        );
    }
}