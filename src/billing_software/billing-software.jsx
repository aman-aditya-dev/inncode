import React, { Component } from 'react';
import './billing-software.scss';
import logo from '../assets/logo.jpg'
class BillingSoftware extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            companyDetails: this.props.companyDetails
        }
    }
    render() {
        const details = this.state.companyDetails;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="comp-details">
                            <h3 className="comp-name underline">{details.companyName}.</h3>
                            <p>{details.companyAddressLine1}</p>
                            <p>{details.companyAddressLine2}</p>
                        </div>
                        <h3 className="minWagesAct">(As per Minimum Wages Act)</h3>
                    </div>
                    <div className="col-xs-6">
                        <div className ="logo" ><img src={logo} width="60%" /></div>
                        
                    </div>
                   
                </div>
                <h2 className="salary-month-heading"> SALARY SLIP FOR THE MONTH OF <span className="underline">{details.salaryMonth}</span></h2>
                <h3 className="rule-24">FORM IV [Rule 26 (2) ]</h3>
                <div className="outline-border desc-outline">
                    <div className="row">
                    {this.state.companyDetails.empDetailsList.map((det, index) =>
                            <div className="col-xs-6">
                                <span key={index} className={"l-display-flex l-margin-large"}>
                                    <h3>{det.label} </h3>
                                    <span>:</span>
                                    <span>{det.value}</span>
                                </span>
                            </div> 
                        )}
                    </div>
                </div>
                <div className="lowerDiv">
                    <div className="lowerDivMainContent outline-border" >
                        <span className="l-display-flex outline-border row" ><h3 style={{ marginLeft: "1%" }}>Leave Detail </h3>
                            <div className="col-xs-6" style={{marginLeft:"4%"}}> <span> Anniversar</span>
                            <p style={{marginTop:"0"}}>0.00/0.0</p></div>
                           
                            <span> Late</span>
                        </span>
                        <div className="earning-heading-div row">
                            <div className="col-xs-6 side-border ">
                                <div className="row">
                                    <span className="col-xs-6 desc-head">
                                    <strong>Earning</strong> 
                                </span>
                                    <span className="col-xs-3 ">
                                    <strong>Actual</strong>
                                </span>
                                    <span className="col-xs-3 ">
                                    <strong>Earnings</strong>
                                    </span>
                                </div>
                            </div>  
                            <div className="col-xs-6">
                                <div className="row">
                                    <span className="col-xs-6 desc-head">
                                        <strong>Deduction</strong>
                                    </span>
                                    <span className="col-xs-3 ">
                                    <strong>Actual</strong>
                                </span>
                                    <span className="col-xs-3 ">
                                    <strong>Deduction</strong>
                                    </span>
                                    </div>
                            </div>
                        </div>
                        <div className="row outline-border content-div">
                            <div className="col-xs-6 earning-content side-border    ">
                                <p className="row desc-para" style={{ marginTop: "10px" }}>
                                    <span className="col-xs-6">Basic Salary:</span>
                                    <span className="col-xs-3">{details.basicSalaryActual}</span>
                                    <span className="col-xs-3">{details.basicSalaryEarnings}</span>
                                </p>
                                <p className="row desc-para">
                                    <span className="col-xs-6">HRA: </span>
                                    <span className="col-xs-3">{details.hraActual}</span>
                                    <span className="col-xs-3">{details.hraEarnings}</span>
                                </p>
                                <p className="row desc-para"><span className="col-xs-6">CONVEYANCE ALLOWANCE: </span>
                                    <span className="col-xs-3">{details.conveyanceAllowanceActual}</span>
                                    <span className="col-xs-3">{details.conveyanceAllowanceEarnings}</span>
                                </p>
                                <p className="row desc-para"><span className="col-xs-6">ATTENDANCE ALLOWANCE:</span>
                                    <span className="col-xs-3">{details.attendanceAllowanceActual}</span>
                                    <span className="col-xs-3">{details.attendanceAllowanceEarnings}</span>
                                </p>
                                <p className="row desc-para"><span className="col-xs-6">EFFICIENCY ALLOWANCE:</span>
                                    <span className="col-xs-3">{details.efficiencyActual}</span>
                                    <span className="col-xs-3">{details.efficiencyEarnings}</span>
                                </p>
                                <p className="row desc-para" style={{marginBottom:"10px"}}><span className="col-xs-6">CITY COMPENSAT ALLOWANCE:</span>
                                    <span className="col-xs-3">{details.cityCompensatAllowanceActual}</span>
                                    <span className="col-xs-3">{details.cityCompensatAllowanceEarnings}</span>
                                </p>
                            </div>
                            <div className="col-xs-6 deduction-content">
                                <p className="row desc-para" style={{ marginTop: "10px" }}><span className="col-xs-6">PF</span>
                                    <span className="col-xs-3">{details.pfPercentage}</span>
                                    <span className="col-xs-3">{details.pfValue}</span>
                                </p>
                                <p className="row desc-para"><span className="col-xs-6">ESIC</span>
                                    <span className="col-xs-3">{details.esicPercentage}</span>
                                    <span className="col-xs-3">{details.esicvalue}</span>
                                </p>
                                <p className="row desc-para"><span className="col-xs-6">Advance Amount</span>
                                    <span className="col-xs-3"></span>
                                    <span className="col-xs-3">{details.advanceAmount}</span>
                                </p>
                                <p className="row desc-para"><span className="col-xs-6">Prof. Tax</span>
                                    <span className="col-xs-3"></span>
                                    <span className="col-xs-3">{details.profTax}</span>
                                </p>
                            </div>
                        </div>
                        <div className="earning-heading-div row">
                            <div className="col-xs-6 side-border bottom-border">
                                <div className="row">
                                    <span className="col-xs-9 desc-head">
                                        <strong>Total Earning:</strong>
                                    </span>
                                    <span className="col-xs-3 desc-head">
                                       {details.totalEarnings}
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 bottom-border">
                                <div className="row">
                                    <span className="col-xs-9 desc-head">
                                        <strong>Total Deduction:</strong>
                                    </span>
                                    <span className="col-xs-3 desc-head">
                                        {details.totalDeduction}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="earning-heading-div row">
                            <div className="col-xs-6 ">
                                <div className="row">
                                    <span className="col-xs-9 desc-head">
                                        <strong>Net Payment:</strong>
                                    </span>
                                    <span className="col-xs-3 desc-head">
                                        {details.netPayment}
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 np-in-words">
                                        <strong>In Words:  </strong> 
                                        {details.netPaymentInWords}
                            </div>
                            <p className="no-attest">This is a system generated pay Slip hence does not require any attestation.</p>
                        </div>
                    </div>
                </div>
                
            




                {/* <table>
                    <thead>
                        <th>

                        </th></span>
                    </thead>
                </table> */}
            </div>
        );
    }
}
export default BillingSoftware;