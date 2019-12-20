import React, { Component } from 'react';
import './resume-software.scss'
import Proficient from './resume';
export default class ResumeForm extends Component {
    constructor() {
        super();
        this.state = {
            isPreviewOn:true,
            resumePreview:false,
            old_index: "",
            changedValue:"",
            skillText:"",
            selectedWorkIndex: 0,
            selectedEduIndex: 0,
            selectedProjIndex: 0,
            candidateDetails: {
                imgData: "",
                basicInfo: {
                    name: "",
                    email: "",
                    contact_number: "",
                    address: "",
                    designation: "",
                    imgData:""
                },
                professionalSummary: "",
                workExperience: [
                    {
                        job_title: "",
                        company: "",
                        start_date: "",
                        end_date: "",
                        location: "",
                        role: [
                            {
                                role_points: ""
                            }
                        ]
                    }
                ],
                education: [{
                    degree: "",
                    institute_name: "",
                    start_date: "",
                    end_date: "",
                    location: ""
                }],
                skills: [],
                projects: [{
                    project_name: "",
                    project_year_start: "",
                    project_year_end: "",
                    project_desc: [{
                        desc_points:""
                    }]
                }],
                interests: []
            }
        }
    }
    handleImageUpload = (e, name, index) => {
        let _self = this;
        if (e.target.files[0]) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                _self.imgData(reader.result)
            }
            reader.readAsDataURL(file);
        }
          
    }
    imgData = (img) => {
        var candidateDetails = this.state.candidateDetails;
        // var basicInfo = candidateDetails.basicInfo;
        candidateDetails.imgData = img;
        this.setState({ candidateDetails })
    }
    handleInput = (e, name, obj, index) => {
        console.log(name,obj,index, e.target.value);
        let candidateDetails = this.state.candidateDetails;
        
        if (index > 0) {
            console.log("hi", candidateDetails[obj][index - 1]);
            candidateDetails[obj][index-1][name] = e.target.value;
        }
        else {
            console.log("hello");
            if (name) {
                candidateDetails[obj][name] = e.target.value;
            }
            else {
                candidateDetails[obj] = e.target.value;
            }
           
        }
        this.setState({candidateDetails})
    }
    handleRole = (type, workIndex) => {
        let candidateDetails = this.state.candidateDetails;
        if (type === "add") {
            candidateDetails.workExperience[workIndex].role.push({role_points:""})
        }
        else {
            candidateDetails.workExperience[workIndex].role.splice(workIndex,1);
        }
        this.setState({ candidateDetails })
    }
    handleWorkExp = (e) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.workExperience.push({ 
            job_title: "",
            company: "",
            start_date: "",
            end_date: "",
            location: "",
            role: [
                {
                    role_points: ""
                }
            ]
        })
        this.setState({ candidateDetails, selectedWorkIndex: this.state.selectedWorkIndex + 1 })
    }
    handleEdu = () => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.education.push({
            degree: "",
            institute_name: "",
            start_date: "",
            end_date: "",
            location: ""
        })
        this.setState({ candidateDetails, selectedEduIndex: this.state.selectedEduIndex + 1 })
    }
    handleWorkNavigation = (e, index) => {
        let candidateDetails = this.state.candidateDetails;
        this.setState({selectedWorkIndex:index})
    }
    handleEduNavigation = (e,index) => {
        this.setState({ selectedEduIndex: index })
    }
    removeEdu = (e, ei) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.education.splice(ei, 1);
        this.setState({ candidateDetails, selectedEduIndex: this.state.selectedEduIndex - 1})
    }
    removeWorkExp = (e,wi) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.workExperience.splice(wi, 1);
        this.setState({ candidateDetails, selectedWorkIndex: this.state.selectedWorkIndex-1})
    }
    handleRolePoints = (e,roleIndex) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.workExperience[this.state.selectedWorkIndex].role[roleIndex].role_points = e.target.value;
        this.setState({candidateDetails})
    }
    handleDescPoints = (e, roleIndex) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.projects[this.state.selectedProjIndex].project_desc[roleIndex].desc_points = e.target.value;
        this.setState({ candidateDetails })
    }
    handleAddSkills = () => {
        let candidateDetails = this.state.candidateDetails;
        let skillText = this.state.skillText;
        candidateDetails.skills.push(skillText);
        this.setState({
            candidateDetails, skillText:''
        })
    }
    handleAddInterests = () => {
        let candidateDetails = this.state.candidateDetails;
        let interestText = this.state.interestText;
        candidateDetails.interests.push(interestText);
        this.setState({
            candidateDetails, interestText: ''
        })
    }
    removeInterests = (e, si) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.interests.splice(si, 1);
        this.setState({ candidateDetails })
    }
    removeSkills = (e, si) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.skills.splice(si, 1);
        this.setState({ candidateDetails})
    }
    onDragEnd = (e, item) => {
        console.log("de",item);
        this.setState({ old_index : item })
        this.renderTabs(this.state.changedValue, this.state.old_index);
    }
    onDragOver = (e) => {
        e.preventDefault();
    }
    renderTabs(cvalue, old_index) {
        console.log("rt",cvalue,old_index);
        if (cvalue >= this.state.candidateDetails.length) {
            var k = cvalue - this.state.candidateDetails.length + 1;
            while (k--) {
                this.state.candidateDetails.push(undefined);
            }
        }
        // delete this.state.candidateDetails[old_index];
        // this.state.candidateDetails.splice(cvalue, 0, this.state.candidateDetails.splice(old_index, 1)[0]);
        // console.log(this.sectionObj);
    }
    drop = (cvalue) => {
        this.setState({ changedValue: cvalue });
    }
    handleProjectNavigation = (e,index) => {
        this.setState({ selectedProjIndex: index })
    }
    removeProject = (e,wi) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.projects.splice(wi, 1);
        this.setState({ candidateDetails, selectedProjIndex: this.state.selectedProjIndex - 1 })
    }
    handleDesc = (type, workIndex) => {
        let candidateDetails = this.state.candidateDetails;
        if (type === "add") {
            candidateDetails.projects[workIndex].project_desc.push({ desc_points: "" })
        }
        else {
            candidateDetails.projects[workIndex].project_desc.splice(workIndex, 1);
        }
        this.setState({ candidateDetails })
    }
    handleProjectExp = (e) => {
        let candidateDetails = this.state.candidateDetails;
        candidateDetails.projects.push({
            project_name: "",
            project_year_start: "",
            project_year_end: "",
            project_desc: [{
                desc_points: ""
            }]
        })
        this.setState({ candidateDetails, selectedProjIndex: this.state.selectedProjIndex + 1 })
    }
    render() {
        return (
            <div className="resume-form">
                <Proficient candidateDetails={this.state.candidateDetails} preview={this.state.isPreviewOn} />
                {this.state.isPreviewOn ?
                    <div className="wrap scrolled-div">
                        <div className="row">
                            <div className="col-xs-4 side-content">
                                {/* {Object.keys(this.state.candidateDetails).map((item, index) =>
                                <p draggable={true}
                                    id="dragtarget"
                                    className="dropTarget"
                                    onDragOver={this.onDragOver}
                                    onDragEnd={(e) => this.onDragEnd(e, item)}
                                    onDrop={() => this.drop(item)}>
                                    <input type="button" value={item} />
                                </p>
                            )} */}
                                <input type="button" onClick={() => this.setState({ isPreviewOn: false })} value="Generate PDF" />
                            
                            </div>
                            <div className="col-xs-8">
                                <div className="basic-info outline-border">
                                    <div className="content-padding">
                                        <h3>Basic Info</h3>
                                        <div className="row">
                                            <div className="col-xs-4">
                                                <p className="row">
                                                    <label className="col-xs-4">Image</label>
                                                    <input className="col-xs-5" type="file" accept="image/^" name="image" value={this.state.candidateDetails.basicInfo.imgData} onChange={(e) => this.handleImageUpload(e)} />
                                                </p>
                                            </div>
                                            <div className="col-xs-4">
                                                <p className="row">
                                                    <label className="col-xs-4">Name</label>
                                                    <input className="col-xs-5" type="text" name="name" value={this.state.candidateDetails.basicInfo.name} placeholder="Fill your full name" onChange={(e) => this.handleInput(e, "name", "basicInfo", "")} />
                                                </p>
                                                <p className="row">
                                                    <label className="col-xs-4">Email</label>
                                                    <input className="col-xs-5" type="text" name="email" value={this.state.candidateDetails.basicInfo.email} placeholder="Email Id" onChange={(e) => this.handleInput(e, "email", "basicInfo", "")} />
                                                </p>
                                                <p className="row">
                                                    <label className="col-xs-4">Contact Number</label>
                                                    <input className="col-xs-5" type="text" name="contact_number" value={this.state.candidateDetails.basicInfo.contact_number} placeholder="Contact Number" onChange={(e) => this.handleInput(e, "contact_number", "basicInfo", "")} />
                                                </p>
                                            </div>
                                            <div className="col-xs-4">
                                                <p className="row">
                                                    <label className="col-xs-4">Address</label>
                                                    <input className="col-xs-5" type="text" name="address" value={this.state.candidateDetails.basicInfo.address} placeholder="Short Address" onChange={(e) => this.handleInput(e, "address", "basicInfo", "")} />
                                                </p>
                                                <p className="row">
                                                    <label className="col-xs-4">Designation</label>
                                                    <input className="col-xs-5" type="text" name="designation" value={this.state.candidateDetails.basicInfo.designation} placeholder="Designation" onChange={(e) => this.handleInput(e, "designation", "basicInfo", "")} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="professional-summary outline-border">
                                    <div className="content-padding">
                                        <h3>Professional Summary</h3>
                                        <textarea className="professional-summary-text" name="Text1" cols="40" rows="5" value={this.state.candidateDetails.professionalSummary} onChange={(e) => this.handleInput(e, "", "professionalSummary", "")}></textarea>
                                    </div>  </div>
                                <div className="work-exp outline-border">
                                    <div className="content-padding">
                                        <h3>Work Experience</h3>
                                        <input type="button" onClick={this.handleWorkExp} value="Add Experience" />
                                        <div className="row">
                                            <div className="col-xs-3 l-inline-grid">
                                                {this.state.candidateDetails.workExperience.map((work, workIndex) =>
                                                    <p><input type="button" onClick={(e) => this.handleWorkNavigation(e, workIndex)} value={work.company ? work.company : "Experience" + workIndex} />
                                                        {workIndex > 0 ? <input type="button" className="control-buttons" onClick={(e) => this.removeWorkExp(e, workIndex)} value="-" /> : ""}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="col-xs-9">
                                                <div className="outline-border">
                                                    <div className="row ">
                                                        <div className="col-xs-6">
                                                            <p className="row">
                                                                <label className="col-xs-4">Designation</label>
                                                                <input className="col-xs-5" type="text" name="designation" value={this.state.candidateDetails.workExperience[this.state.selectedWorkIndex].job_title} placeholder="Designation" onChange={(e) => this.handleInput(e, "job_title", "workExperience", this.state.selectedWorkIndex + 1)} />
                                                            </p>
                                                            <p className="row">
                                                                <label className="col-xs-4">Company Name</label>
                                                                <input className="col-xs-5" type="text" name="company_name" value={this.state.candidateDetails.workExperience[this.state.selectedWorkIndex].company} placeholder="Company Name" onChange={(e) => this.handleInput(e, "company", "workExperience", this.state.selectedWorkIndex + 1)} />
                                                            </p>
                                                        </div>
                                                        <div className="col-xs-6">
                                                            <p className="row">
                                                                <label className="col-xs-4">Location</label>
                                                                <input className="col-xs-5" type="text" name="designation" value={this.state.candidateDetails.workExperience[this.state.selectedWorkIndex].location} placeholder="Location" onChange={(e) => this.handleInput(e, "location", "workExperience", this.state.selectedWorkIndex + 1)} />
                                                            </p>
                                                            <p className="row">
                                                                <label className="col-xs-4">Duration</label>
                                                                <input className="col-xs-2" type="text" name="designation" value={this.state.candidateDetails.workExperience[this.state.selectedWorkIndex].start_date} placeholder="Start Date" onChange={(e) => this.handleInput(e, "start_date", "workExperience", this.state.selectedWorkIndex + 1)} /><em>&nbsp;-&nbsp;</em>
                                                                <input className="col-xs-2" type="text" name="designation" value={this.state.candidateDetails.workExperience[this.state.selectedWorkIndex].end_date} placeholder="End Date" onChange={(e) => this.handleInput(e, "end_date", "workExperience", this.state.selectedWorkIndex + 1)} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h5>Achievements/Tasks</h5>
                                                    {this.state.candidateDetails.workExperience[this.state.selectedWorkIndex].role.map((role, roleIndex) =>
                                                        <div className="l-display-flex desc-summary-div">
                                                            <span>{roleIndex + 1}</span>
                                                            <textarea className="desc-summary-text" name="Text1" cols="40" rows="3" value={this.state.candidateDetails.workExperience[this.state.selectedWorkIndex].role[roleIndex].role_points} onChange={(e) => this.handleRolePoints(e, roleIndex)}></textarea>
                                                            <input type="button" className="control-buttons" onClick={() => this.handleRole("add", this.state.selectedWorkIndex)} value="+" />
                                                            {roleIndex > 0 ? <input type="button" className="control-buttons" onClick={() => this.handleRole("del", this.state.selectedWorkIndex)} value="-" /> : ""}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="education outline-border">
                                    <div className="content-padding">
                                        <h3>Education</h3>
                                        <input type="button" onClick={this.handleEdu} value="Add Experience" />
                                        <div className="row">
                                            <div className="col-xs-3">
                                                {this.state.candidateDetails.education.map((edu, eduIndex) =>
                                                    <p><input type="button" onClick={(e) => this.handleEduNavigation(e, eduIndex)} value={edu.institute_name ? edu.institute_name : "Education " + eduIndex} />
                                                        {eduIndex > 0 ? <input type="button" className="control-buttons" onClick={(e) => this.removeEdu(e, eduIndex)} value="X" /> : ""}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="col-xs-9">
                                                <div className="outline-border">
                                                    <div className="row">
                                                        <div className="col-xs-6">
                                                            <p className="row">
                                                                <label className="col-xs-4">Degree</label>
                                                                <input className="col-xs-5" type="text" name="degree" value={this.state.candidateDetails.education[this.state.selectedEduIndex].degree} placeholder="Degree" onChange={(e) => this.handleInput(e, "degree", "education", this.state.selectedEduIndex + 1)} />
                                                            </p>
                                                            <p className="row">
                                                                <label className="col-xs-4">Institute Name</label>
                                                                <input className="col-xs-5" type="text" name="institute_name" value={this.state.candidateDetails.education[this.state.selectedEduIndex].institute_name} placeholder="Institute Name" onChange={(e) => this.handleInput(e, "institute_name", "education", this.state.selectedEduIndex + 1)} />
                                                            </p>
                                                        </div>
                                                        <div className="col-xs-6">
                                                            <p className="row">
                                                                <label className="col-xs-4">Duration</label>
                                                                <input className="col-xs-2" type="text" name="start_date" value={this.state.candidateDetails.education[this.state.selectedEduIndex].start_date} placeholder="Start Date" onChange={(e) => this.handleInput(e, "start_date", "education", this.state.selectedEduIndex + 1)} />
                                                                <em>&nbsp;-&nbsp;</em>
                                                                <input className="col-xs-2" type="text" name="end_date" value={this.state.candidateDetails.education[this.state.selectedEduIndex].end_date} placeholder="End Date" onChange={(e) => this.handleInput(e, "end_date", "education", this.state.selectedEduIndex + 1)} />
                                                            </p>
                                                            <p className="row">
                                                                <label className="col-xs-4">Location</label>
                                                                <input className="col-xs-5" type="text" name="location" value={this.state.candidateDetails.education[this.state.selectedEduIndex].location} placeholder="Location" onChange={(e) => this.handleInput(e, "location", "education", this.state.selectedEduIndex + 1)} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {this.state.candidateDetails.skills ?
                                    <div className="skills outline-border">
                                        <div className="content-padding">
                                            <h3>Skills</h3>
                                            {this.state.candidateDetails.skills.map((skill, skillIndex) =>
                                                <>
                                                    <input type="text" onChange={this.handleSkills} value={skill} />
                                                    <input type="button" className="control-buttons" onClick={(e) => this.removeSkills(e, skillIndex)} value="X" />
                                                </>
                                            )}
                                            <input type="text" placeholder="add skill" value={this.state.skillText} onChange={(e) => this.setState({ skillText: e.target.value })} />
                                            <input type="button" className="control-buttons" onClick={this.handleAddSkills} value="+" />
                                        </div>
                                    </div>
                                    : ""}
                                <div className="proj-exp outline-border">
                                    <div className="content-padding">
                                        <h3>Projects</h3>
                                        <input type="button" onClick={this.handleProjectExp} value="Add Projects" />
                                        <div className="row">
                                            <div className="col-xs-3 l-inline-grid">
                                                {this.state.candidateDetails.projects.map((proj, projectIndex) =>
                                                    <p><input type="button" onClick={(e) => this.handleProjectNavigation(e, projectIndex)} value={proj.project_name ? proj.project_name : "Project " + projectIndex} />
                                                        {projectIndex > 0 ? <input type="button" className="control-buttons" onClick={(e) => this.removeProject(e, projectIndex)} value="X" /> : ""}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="col-xs-9">
                                                <div className="outline-border">
                                                    <div className="row ">
                                                        <div className="col-xs-6">
                                                            <p className="row">
                                                                <label className="col-xs-4">Project Name</label>
                                                                <input className="col-xs-5" type="text" name="project_name" value={this.state.candidateDetails.projects[this.state.selectedProjIndex].project_name} placeholder="Project Name" onChange={(e) => this.handleInput(e, "project_name", "projects", this.state.selectedProjIndex + 1)} />
                                                            </p>
                                                            <p className="row">
                                                                <label className="col-xs-4">Duration</label>
                                                                <input className="col-xs-2" type="text" name="project_year_start" value={this.state.candidateDetails.projects[this.state.selectedProjIndex].project_year_start} placeholder="Start Date" onChange={(e) => this.handleInput(e, "project_year_start", "projects", this.state.selectedProjIndex + 1)} /><em>&nbsp;-&nbsp;</em>
                                                                <input className="col-xs-2" type="text" name="project_year_end" value={this.state.candidateDetails.projects[this.state.selectedProjIndex].project_year_end} placeholder="End Date" onChange={(e) => this.handleInput(e, "project_year_end", "projects", this.state.selectedProjIndex + 1)} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {this.state.candidateDetails.projects[this.state.selectedProjIndex].project_desc.map((desc, descIndex) =>
                                                        <div className="l-display-flex desc-summary-div">
                                                            <span>{descIndex + 1}</span>
                                                            <textarea className="desc-summary-text" name="Text1" cols="40" rows="3" value={this.state.candidateDetails.projects[this.state.selectedProjIndex].project_desc[descIndex].desc_points} onChange={(e) => this.handleDescPoints(e, descIndex)}></textarea>
                                                            <input type="button" className="control-buttons" onClick={() => this.handleDesc("add", this.state.selectedProjIndex)} value="+" />
                                                            {descIndex > 0 ? <input type="button" className="control-buttons" onClick={() => this.handleDesc("del", this.state.selectedProjIndex)} value="X" /> : ""}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {this.state.candidateDetails.interests ?
                                    <div className="skills outline-border">
                                        <div className="content-padding">
                                            <h3>Interests</h3>
                                            {this.state.candidateDetails.interests.map((skill, skillIndex) =>
                                                <>
                                                    <input type="text" onChange={this.handleSkills} value={skill} />
                                                    <input type="button" className="control-buttons" onClick={(e) => this.removeInterests(e, skillIndex)} value="X" />
                                                </>
                                            )}
                                            <input type="text" placeholder="Interests" value={this.state.interestText} onChange={(e) => this.setState({ interestText: e.target.value })} />
                                            <input type="button" className="control-buttons" onClick={this.handleAddInterests} value="+" />
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                    </div>
                    : ""}
            </div>
        )
    }
}