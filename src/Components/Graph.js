import React, { useEffect, useState } from "react";
import "./Graph.css";
import { Users } from "../Data";
import { Bar } from "react-chartjs-2";
import { chart as chartJS } from "chart.js/auto";
import TextField from '@mui/material/TextField';
const Graph = () => {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState("0");

  useEffect(() => {
   if(search !='')
   { Users.filter((val, index) => {
      if (val.Name?.toLowerCase().includes(search?.toLowerCase()))
        {setIndex(index);}
        // else setUserName("User doesnot exist");
    });}
    console.log(search,index);
  }, [search]);
 

  let chartData = {
    Warmth: Users[+(index)].Warmth,
    Reasoning: Users[+(index)].Reasoning,
    Dominance: Users[+(index)].Dominance,
    LiveBarss: Users[+(index)].LiveBarss,
    Sensitivity: Users[+(index)].Sensitivity,
    Vigilance: Users[+(index)].Vigilance,
    Abstractedness: Users[+(index)].Abstractedness,
    Privateness: Users[+(index)].Privateness,
    Apprehension: Users[+(index)].Apprehension,
    Perfectionism: Users[+(index)].Perfectionism,
    Tension: Users[+(index)].Tension,
  };
  const data = {

    datasets: [
      {
        label:Users[+(index)].Name,
        data: chartData,
        backgroundColor:["red","blue",'green',"yellow","rgb(59, 0, 0)","rgb(59, 150, 0)","rgb(59, 150, 86)","rgb(110, 150, 86)","rgb(185, 150, 86)","rgb(185, 227, 86)","rgb(185, 71, 117)"],
        borderColor:['black'],
        borderWidth:2
      },
    ],
  };
  return (
    <>
    <div className="header">
    <h1> Dashboard</h1>
      <TextField
      style={{width:"50%"}}
      variant="outlined"
        label="Search for filter..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    
      <div className="graphContainer"  >
      <div>
      <Bar data={data} />
        </div>  
      </div>
    </>
  );
};

export default Graph;
