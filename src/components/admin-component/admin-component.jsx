import React,{Component} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];
  class CustomizedLabel extends Component {
    render() {
        console.log(this.props);
      const {
        x, y, stroke, value,max,min
      } = this.props;
      if(max === value){
        return <text x={x} y={y-5} dy={-4} fill={stroke} fontSize={10} textAnchor="middle" position="top">Highest{value}</text>;
      }
      else{
        return <text x={x} y={y+5} dy={20} fill={stroke} fontSize={10} position="insideBottom" textAnchor="middle" >
        <tspan x={x} dy=".6em">Lowest</tspan>
        <tspan x={x} dy="1.2em">{value}</tspan>
        </text>;
      }
      
    }
  }
export default class AdminHome extends Component{
    constructor(props){
        super(props);
        this.state={
            data: data,
            max: Math.max(...data.map(o=>o.pv)),
            min: Math.min(...data.map(o=>o.pv)),
        }
    }
    componentDidMount(){
        console.log(this.state.max);
    }
    render(){
        return(
            <div style={{paddingTop: "100px", background:"white"}}>
               
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  dataKey="name" minTickGap={10}  padding={{ right: 40 }} textAnchor="end"  dy={+5} dx={5}/>
            <YAxis type="number" domain={[0, 'dataMax + 1000']}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} label={(params)=>{
                return params.value=== this.state.max ||  params.value=== this.state.min ?  <CustomizedLabel  {...params} max={this.state.max} min={this.state.min} /> : ""
            }}/>
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
          </div>
        );
    }
}   