import React, {Component} from 'react';
import './iot.scss';
import axios from 'axios';
export default class IOT extends Component{
     constructor(){
    super();
    this.state={
        checked: false,
        fanOn: false,
        lightOn: false
    }
}
componentWillMount(){
    axios.all([
        axios.get('http://188.166.206.43/daf3e1c00f0a4f0fafb37a82c3686037/get/D0'),
        axios.get('http://188.166.206.43/daf3e1c00f0a4f0fafb37a82c3686037/get/D4')
    ]).then(axios.spread((response1, response2) => {
      this.setState({lightOn: (parseInt(response1.data)=== 1 ? false: true),fanOn : (parseInt(response2.data)=== 1 ? false: true)}) 
       localStorage.setItem("fanOn", (parseInt(response1.data)=== 1 ? false: true));
       localStorage.setItem("lightOn",(parseInt(response1.data)=== 1 ? false: true));
    }))
    // this.setState({fanOn: localStorage.getItem("fanOn"), lightOn: localStorage.getItem("lightOn")})
}
handleLight=()=>{
   if(localStorage.getItem("lightOn") === "true"){
       axios.get('http://188.166.206.43/daf3e1c00f0a4f0fafb37a82c3686037/update/D0?value=1')
       localStorage.setItem("lightOn", false);
   }
   else{
       axios.get('http://188.166.206.43/daf3e1c00f0a4f0fafb37a82c3686037/update/D0?value=0')
       localStorage.setItem("lightOn", true);
   }
   this.setState({lightOn: !this.state.lightOn})
}
handleFan=()=>{
   if(localStorage.getItem("fanOn") === "true"){
       axios.get('http://188.166.206.43/daf3e1c00f0a4f0fafb37a82c3686037/update/D4?value=1')
           localStorage.setItem("fanOn", false);
   }
   else{
       axios.get('http://188.166.206.43/daf3e1c00f0a4f0fafb37a82c3686037/update/D4?value=0')  
       localStorage.setItem("fanOn", true);
      
   }
   this.setState({fanOn: !this.state.fanOn})
}

render(){
   return(
       <div style={{backgroundColor:"#000000"}}>
       <div style={{backgroundColor:"#000000"}}>
       <img  src={require("../assets/fan-on.gif")} width="100" height="180" onClick={this.handleLight}/>
          <p>Light</p>
          {!this.state.lightOn ?
          <img  src={require("../assets/pic_bulboff.gif")} width="100" height="180" onClick={this.handleLight}/>
          :
          <img  src={require("../assets/pic_bulbon.gif")} width="100" height="180" onClick={this.handleLight}/>
          }
{/* <Switch
   checked={this.state.checked}
   onChange={this.handleChange}
   width={120}
   uncheckedIcon={
   <div
       style={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       height: "100%",
       fontSize: 15,
       color: "orange",
       paddingRight: 2
       }}
   >
       Off
   </div>
   }
   checkedIcon={
   <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
       <circle r={3} cx={5} cy={5} />
   </svg>
   }
   className="react-switch"
   id="icon-switch"
/> */}
       </div>
       <div onClick={this.handleFan}>
        <div className={"ceiling-container " + (this.state.fanOn  ? 'is-animation' : '')}>
        <div className="ceiling-fan horizontal left"></div>
        <div className="ceiling-fan horizontal right"></div>  
        <div className="ceiling-fan vertical rotated top"></div>
        <div className="ceiling-fan vertical rotated bottom"></div>
       </div>
       </div>
       </div>
       
   );
}
}