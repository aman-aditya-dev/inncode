import React, { Component } from 'react';
import BillingSoftware from './billing-software';
export default class BillingSoftwareForm extends Component{
    constructor() {
        super();
        this.state = {
            companyDetailsFlag: true,
            empDetailsFlag: false,
            earningsFlag: false,
            generatePdf: false,
            companyDetails: {
                companyName: "",
                companyAddressLine1: "",
                companyAddressLine2: "",
                salaryMonth: "",
                empDetailsList: [
                 { "label": "Emp Code", "value": "" },
                    { "label": "PF No", "value": "" },
                    { "label": "Name", "value": "" },
                    { "label": "ESIC No", "value": "" },
                  { "label": "City", "value": "" },
                   { "label": "UAN No", "value": "" },
                    { "label": "Designation", "value": "" },
                    { "label": "Present Days", "value": "" },
                    { "label": "Department", "value": "" },
                  { "label": "Absent Days", "value": "" },
                  { "label": "D.O.J", "value": "" },
                    { "label": "Weekoff Days", "value": "" },
                    { "label": "D.O.B ", "value": "" },
                    { "label": "Paid leave", "value": "" },
                    { "label": "Bank Name", "value": "" },
                    { "label": "Unpaid leave", "value": "" },
                    { "label": "Bank Ac. No", "value": "" },
                    { "label": "Late Days", "value": "" },
                    { "label": "Bank RTGS", "value": "" },
                    { "label": "Holiday Days", "value": "" },
                   { "label": "PAN No.", "value": "" },
                   { "label": "Total Paid Days", "value": "" },
                    { "label": "", "value": "" },
                  { "label": "Total Days", "value": "" }

                ],
                basicSalaryActual: "",
                basicSalaryEarnings: "",
                hraActual: "",
                hraEarnings: "",
                conveyanceAllowanceActual: "",
                conveyanceAllowanceEarnings: "",
                attendanceAllowanceActual: "",
                attendanceAllowanceEarnings: "",
                efficiencyActual: "",
                efficiencyEarnings: "",
                cityCompensatAllowanceActual: "",
                cityCompensatAllowanceEarnings: "",
                pfPercentage: "",
                pfValue: "",
                esicPercentage: "",
                esicvalue: "",
                advanceAmount: "",
                profTax: "",
                totalEarnings: "",
                totalDeduction: "",
                netPayment: "",
                netPaymentInWords: ""

            }
        
        }
    }
    handleInput = (e, name, index) => {
        let companyDetails = this.state.companyDetails;
        if (index || index === 0) {
            companyDetails.empDetailsList[index].value = e.target.value;
        }   
        else {
            companyDetails[name] = e.target.value
        }
        if (companyDetails.hraEarnings && companyDetails.basicSalaryEarnings && companyDetails.conveyanceAllowanceEarnings && companyDetails.attendanceAllowanceEarnings && companyDetails.efficiencyEarnings && companyDetails.cityCompensatAllowanceEarnings) {
            companyDetails.totalEarnings = parseInt(companyDetails.hraEarnings) + parseInt(companyDetails.basicSalaryEarnings) + parseInt(companyDetails.conveyanceAllowanceEarnings) + parseInt(companyDetails.attendanceAllowanceEarnings) + parseInt(companyDetails.efficiencyEarnings) + parseInt(companyDetails.cityCompensatAllowanceEarnings);
        }
        if (companyDetails.pfValue && companyDetails.esicvalue && companyDetails.advanceAmount && companyDetails.profTax) {
            companyDetails.totalDeduction = parseInt(companyDetails.pfValue) + parseInt(companyDetails.esicvalue) + parseInt(companyDetails.advanceAmount) + parseInt(companyDetails.profTax);
        }
        let np = companyDetails.totalEarnings - companyDetails.totalDeduction;
        companyDetails.netPayment = companyDetails.totalEarnings - companyDetails.totalDeduction;
        companyDetails.totalEarnings = this.generateCommaSeperated(companyDetails.totalEarnings);
        companyDetails.totalDeduction = this.generateCommaSeperated(companyDetails.totalDeduction);
        companyDetails.netPayment = this.generateCommaSeperated(companyDetails.netPayment);
        if (np) { companyDetails.netPaymentInWords = this.netpayment_in_words(np); }
        if (companyDetails.pfPercentage) {
            companyDetails.pfValue = (companyDetails.pfPercentage.replace(/%/g, "") / 100) * companyDetails.basicSalaryEarnings;
        }
        this.setState({
            companyDetails
        })  
    }
    generateCommaSeperated = (x) => {
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }
     netpayment_in_words=(price)=> {
    var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
        dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
        tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
        handle_tens = function (dgt, prevDgt) {
            return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt])
        },
        handle_utlc = function (dgt, nxtDgt, denom) {
            return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
        };

    var str = "",
        digitIdx = 0,
        digit = 0,
        nxtDigit = 0,
        words = [];
    if (price += "", isNaN(parseInt(price))) str = "";
    else if (parseInt(price) > 0 && price.length <= 10) {
        for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
            case 0:
                words.push(handle_utlc(digit, nxtDigit, ""));
                break;
            case 1:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 2:
                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
                break;
            case 3:
                words.push(handle_utlc(digit, nxtDigit, "Thousand"));
                break;
            case 4:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 5:
                words.push(handle_utlc(digit, nxtDigit, "Lakh"));
                break;
            case 6:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 7:
                words.push(handle_utlc(digit, nxtDigit, "Crore"));
                break;
            case 8:
                words.push(handle_tens(digit, price[digitIdx + 1]));
                break;
            case 9:
                words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "")
        }
        str = words.reverse().join("")
    } else str = "";
    return str

}
    generatePdf = () => {
        let companyDetails = this.state.companyDetails;
        companyDetails.totalEarnings = companyDetails.hraEarnings + companyDetails.basicSalaryEarnings + companyDetails.conveyanceAllowanceEarnings + companyDetails.attendanceAllowanceEarnings + companyDetails.efficiencyEarnings + companyDetails.cityCompensatAllowanceEarnings;
        this.setState({ companyDetails})
    }
    render() {
        return (
            <div className="main-bill-sw" style={{backgroundColor:"white",textAlign:"left"}}>
                {!this.state.generatePdf ? 
            <div className="form-main-container container outline-border">
                <h3>Fill the form to get your Pay Slip</h3>
                {this.state.companyDetailsFlag ?
                    <div>
                    <h4>
                        Company Details:
                </h4>
                    <p className="row">
                        <label className="col-xs-4">Company Name</label>
                            <input className="col-xs-5" type="text" name="companyName" value={this.state.companyDetails.companyName} placeholder="companyName" onChange={(e) => this.handleInput(e, "companyName","")} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Company Address 1</label>
                            <input className="col-xs-5" type="text" name="companyAddressLine1" value={this.state.companyDetails.companyAddressLine1} placeholder="companyAddressLine1" onChange={(e) => this.handleInput(e, "companyAddressLine1","")} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Company Address 2</label>
                            <input className="col-xs-5" type="text" name="companyAddressLine2" value={this.state.companyDetails.companyAddressLine2} placeholder="companyAddressLine2" onChange={(e) => this.handleInput(e, "companyAddressLine2","")} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Salary Month</label>
                            <input className="col-xs-5" type="text" name="salaryMonth" value={this.state.companyDetails.salaryMonth} placeholder="salaryMonth" onChange={(e) => this.handleInput(e, "salaryMonth","")} />
                    </p>
                        <input type="button" onClick={(e) => this.setState({ companyDetailsFlag: false, empDetailsFlag: true, earningsFlag: false })} value="Next"/>
                        </div>
                    : ""}
                {this.state.empDetailsFlag ?
                    <div>
                        <h4>
                            Employee Details:
                </h4>
                    <p className="row">
                        <label className="col-xs-4">Employee Code</label>
                            <input className="col-xs-5" type="text" name="empCode" value={this.state.companyDetails.empDetailsList[0].value} placeholder="empCode" onChange={(e) => this.handleInput(e,"empCode",0)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Name</label>
                        <input className="col-xs-5" type="text" name="name" value={this.state.companyDetails.empDetailsList[2].value} placeholder="Name" onChange={(e)=>this.handleInput(e,"name",2)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">City</label>
                        <input className="col-xs-5" type="text" name="city" value={this.state.companyDetails.empDetailsList[4].value} placeholder="City" onChange={(e)=>this.handleInput(e,"city",4)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Designation</label>
                        <input className="col-xs-5" type="text" name="salaryMonth" value={this.state.companyDetails.empDetailsList[6].value} placeholder="Designation" onChange={(e)=>this.handleInput(e,"salaryMonth",6)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Department</label>
                        <input className="col-xs-5" type="text" name="department" value={this.state.companyDetails.empDetailsList[8].value} placeholder="Department" onChange={(e)=>this.handleInput(e,"department",8)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Date Of Joining</label>
                        <input className="col-xs-5" type="text" name="doj" value={this.state.companyDetails.empDetailsList[10].value} placeholder="DOJ" onChange={(e)=>this.handleInput(e,"doj",10)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Date Of Birth</label>
                        <input className="col-xs-5" type="text" name="dob" value={this.state.companyDetails.empDetailsList[12].value} placeholder="DOB" onChange={(e)=>this.handleInput(e,"dob",12)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Bank Name</label>
                        <input className="col-xs-5" type="text" name="bank_name" value={this.state.companyDetails.empDetailsList[14].value} placeholder="Bank Name" onChange={(e)=>this.handleInput(e,"bank_name",14)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Bank Account Number</label>
                        <input className="col-xs-5" type="text" name="bank_ac_no" value={this.state.companyDetails.empDetailsList[16].value} placeholder="Account Number" onChange={(e)=>this.handleInput(e,"ac_no",16)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Bank RTGS</label>
                        <input className="col-xs-5" type="text" name="bank_rtgs" value={this.state.companyDetails.empDetailsList[18].value} placeholder="BANK RTGS" onChange={(e)=>this.handleInput(e,"bank_rtgs",18)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">PAN No.</label>
                        <input className="col-xs-5" type="text" name="pan" value={this.state.companyDetails.empDetailsList[20].value} placeholder="PAN" onChange={(e)=>this.handleInput(e,"pan",20)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">PF No.</label>
                        <input className="col-xs-5" type="text" name="pf_no" value={this.state.companyDetails.empDetailsList[1].value} placeholder="PF No." onChange={(e)=>this.handleInput(e,"pf_no",1)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">ESIC No.</label>
                            <input className="col-xs-5" type="text" name="esic_no" value={this.state.companyDetails.empDetailsList[3].value} placeholder="ESIC No." onChange={(e)=>this.handleInput(e,"esic_no",3)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">UAN No.</label>
                            <input className="col-xs-5" type="text" name="uan_no" value={this.state.companyDetails.empDetailsList[5].value} placeholder="UAN No." onChange={(e)=>this.handleInput(e,"uan_no",5)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Present Days</label>
                            <input className="col-xs-5" type="text" name="present_days" value={this.state.companyDetails.empDetailsList[7].value} placeholder="Present Days" onChange={(e)=>this.handleInput(e,"present_days",7)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Absent Days</label>
                            <input className="col-xs-5" type="text" name="absent_days" value={this.state.companyDetails.empDetailsList[9].value} placeholder="Absent Days" onChange={(e)=>this.handleInput(e,"absent_days",9)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">WeekOff Days</label>
                            <input className="col-xs-5" type="text" name="weekoff_days" value={this.state.companyDetails.empDetailsList[11].value} placeholder="Week Off Days" onChange={(e) => this.handleInput(e, "weekoff_days",11)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Paid Leave</label>
                            <input className="col-xs-5" type="text" name="paid_leave" value={this.state.companyDetails.empDetailsList[13].value} placeholder="Paid Leave" onChange={(e) => this.handleInput(e, "paid_leave",13)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Unpaid Leave</label>
                            <input className="col-xs-5" type="text" name="unpaid_leave" value={this.state.companyDetails.empDetailsList[15].value} placeholder="Unpaid Leave" onChange={(e) => this.handleInput(e, "unpaid_leave",15)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Late Days</label>
                            <input className="col-xs-5" type="text" name="late_days" value={this.state.companyDetails.empDetailsList[17].value} placeholder="Late Days" onChange={(e) => this.handleInput(e, "late_days",17)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Holiday Day</label>
                            <input className="col-xs-5" type="text" name="holiday_days" value={this.state.companyDetails.empDetailsList[19].value} placeholder="Holiday Day" onChange={(e) => this.handleInput(e, "holiday_days",19)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Total Paid Day</label>
                            <input className="col-xs-5" type="text" name="total_paid_day" value={this.state.companyDetails.empDetailsList[21].value} placeholder="Total Paid Day" onChange={(e) => this.handleInput(e, "total_paid_day",21)} />
                    </p>
                    <p className="row">
                        <label className="col-xs-4">Total Days</label>
                            <input className="col-xs-5" type="text" name="total_days" value={this.state.companyDetails.empDetailsList[23].value} placeholder="Total Days" onChange={(e) => this.handleInput(e, "total_days",23)} />
                        </p>
                        <input type="button" onClick={(e) => this.setState({ companyDetailsFlag: false, empDetailsFlag: false, earningsFlag: true })} value="Next"/>
                        <input type="button" onClick={(e) => this.setState({ companyDetailsFlag: true, empDetailsFlag: false, earningsFlag: false })}  value= "Back"/>
                </div>
                    : ""}
                {this.state.earningsFlag ? 
                    <div>
                         <p className="row">
                            <label className="col-xs-4">Basic Salary Actual</label>
                            <input className="col-xs-5" type="text" name="basicSalaryActual" value={this.state.companyDetails.basicSalaryActual} placeholder="Total Days" onChange={(e) => this.handleInput(e, "basicSalaryActual","")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">basicSalaryEarnings</label>
                            <input className="col-xs-5" type="text" name="basicSalaryEarnings" value={this.state.companyDetails.basicSalaryEarnings} placeholder="Basic Salary Earnings" onChange={(e) => this.handleInput(e, "basicSalaryEarnings", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">hraActual</label>
                            <input className="col-xs-5" type="text" name="hraActual" value={this.state.companyDetails.hraActual} placeholder="Hra Actual" onChange={(e) => this.handleInput(e, "hraActual", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">Hra Earnings</label>
                            <input className="col-xs-5" type="text" name="hraEarnings" value={this.state.companyDetails.hraEarnings} placeholder="Hra Earnings" onChange={(e) => this.handleInput(e, "hraEarnings", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">Conveyance Allowance Actual</label>
                            <input className="col-xs-5" type="text" name="conveyanceAllowanceActual" value={this.state.companyDetails.conveyanceAllowanceActual} placeholder="Conveyance Allowance Actual" onChange={(e) => this.handleInput(e, "conveyanceAllowanceActual", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">conveyanceAllowanceEarnings</label>
                            <input className="col-xs-5" type="text" name="conveyanceAllowanceEarnings" value={this.state.companyDetails.conveyanceAllowanceEarnings} placeholder="conveyanceAllowanceEarnings" onChange={(e) => this.handleInput(e, "conveyanceAllowanceEarnings", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">attendanceAllowanceActual</label>
                            <input className="col-xs-5" type="text" name="attendanceAllowanceActual" value={this.state.companyDetails.attendanceAllowanceActual} placeholder="attendanceAllowanceActual" onChange={(e) => this.handleInput(e, "attendanceAllowanceActual", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">attendanceAllowanceEarnings</label>
                            <input className="col-xs-5" type="text" name="attendanceAllowanceEarnings" value={this.state.companyDetails.attendanceAllowanceEarnings} placeholder="attendanceAllowanceEarnings" onChange={(e) => this.handleInput(e, "attendanceAllowanceEarnings", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">efficiencyActual</label>
                            <input className="col-xs-5" type="text" name="efficiencyActual" value={this.state.companyDetails.efficiencyActual} placeholder="efficiencyActual" onChange={(e) => this.handleInput(e, "efficiencyActual", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">efficiencyEarnings</label>
                            <input className="col-xs-5" type="text" name="efficiencyEarnings" value={this.state.companyDetails.efficiencyEarnings} placeholder="efficiencyEarnings" onChange={(e) => this.handleInput(e, "efficiencyEarnings", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">cityCompensatAllowanceActual</label>
                            <input className="col-xs-5" type="text" name="cityCompensatAllowanceActual" value={this.state.companyDetails.cityCompensatAllowanceActual} placeholder="cityCompensatAllowanceActual" onChange={(e) => this.handleInput(e, "cityCompensatAllowanceActual", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">cityCompensatAllowanceEarnings</label>
                            <input className="col-xs-5" type="text" name="cityCompensatAllowanceEarnings" value={this.state.companyDetails.cityCompensatAllowanceEarnings} placeholder="cityCompensatAllowanceEarnings" onChange={(e) => this.handleInput(e, "cityCompensatAllowanceEarnings", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">pfPercentage</label>
                            <input className="col-xs-5" type="text" name="pfPercentage" value={this.state.companyDetails.pfPercentage} placeholder="pfPercentage" onChange={(e) => this.handleInput(e, "pfPercentage", "")} />
                        </p>
                      <p className="row">
                            <label className="col-xs-4">pfValue</label>
                            <input className="col-xs-5" type="text" name="pfValue" value={this.state.companyDetails.pfValue} placeholder="pfValue" onChange={(e) => this.handleInput(e, "pfValue", "")} disabled />
                        </p> 
                        <p className="row">
                            <label className="col-xs-4">esicPercentage</label>
                            <input className="col-xs-5" type="text" name="esicPercentage" value={this.state.companyDetails.esicPercentage} placeholder="esicPercentage" onChange={(e) => this.handleInput(e, "esicPercentage", "")} />
                        </p>
                        <p className="row">
                            <label className="col-xs-4">esicvalue</label>
                            <input className="col-xs-5" type="text" name="esicvalue" value={this.state.companyDetails.esicvalue} placeholder="esicvalue" onChange={(e) => this.handleInput(e, "esicvalue", "")} />
                        </p>

                       < p className="row">
                            <label className="col-xs-4">advanceAmount</label>
                            <input className="col-xs-5" type="text" name="advanceAmount" value={this.state.companyDetails.advanceAmount} placeholder="advanceAmount" onChange={(e) => this.handleInput(e, "advanceAmount", "")} />
                        </p>
                    <p className="row">
                            <label className="col-xs-4">profTax</label>
                            <input className="col-xs-5" type="text" name="profTax" value={this.state.companyDetails.profTax} placeholder="profTax" onChange={(e) => this.handleInput(e, "profTax", "")} />
                    </p>
                    <p className="row">
                            <label className="col-xs-4">totalEarnings</label>
                            <input className="col-xs-5" type="text" name="totalEarnings" value={this.state.companyDetails.totalEarnings} placeholder="totalEarnings" onChange={(e) => this.handleInput(e, "totalEarnings", "")} disabled/>
                    </p> 
       <p className="row">
                            <label className="col-xs-4">totalDeduction</label>
                            <input className="col-xs-5" type="text" name="totalDeduction" value={this.state.companyDetails.totalDeduction} placeholder="totalDeduction" onChange={(e) => this.handleInput(e, "totalDeduction", "")} disabled />
                    </p> 
                 <p className="row">
                            <label className="col-xs-4">netPayment</label>
                            <input className="col-xs-5" type="text" name="netPayment" value={this.state.companyDetails.netPayment} placeholder="netPayment" onChange={(e) => this.handleInput(e, "netPayment", "")} disabled/>
                    </p> 
                  <p className="row">
                            <label className="col-xs-4">netPaymentInWords</label>
                            <input className="col-xs-5" type="text" name="" value={this.state.companyDetails.netPaymentInWords} placeholder="netPaymentInWords" onChange={(e) => this.handleInput(e, "netPaymentInWords", "")} disabled />
                    </p>
                        <input type="button" onClick={(e) => this.setState({ companyDetailsFlag: false, empDetailsFlag: false, earningsFlag: false , generatePdf: true})} value="Generate Pay Slip" />
                        <input type="button" onClick={(e) => this.setState({ companyDetailsFlag: false, empDetailsFlag: true, earningsFlag: false })} value="Back" />
                    </div>
                
                        : ""}
                    </div>
                :""}
                {this.state.generatePdf ?
                
            <BillingSoftware companyDetails={this.state.companyDetails}/>:""
            }
                
            </div>
        );
    }
}