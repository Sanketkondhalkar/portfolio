import React, { useContext } from "react";
import "../Skill/Skill.css";
import Progressbar from "../Progressbar/Progressbar";
import Store from "../../../Store";

const Skill = () => {
  const{flag,setflag}=useContext(Store)
  const skillset = [
    {
      coding: "HTML",
      percentage: "100",
    },
    {
      coding: "CSS",
      percentage: "80",
    },
    {
      coding: "JAVASCRIPT",
      percentage: "80",
    },
    {
      coding: "BOOTSTRAP",
      percentage: "100",
    },
    {
      coding: "TAILWIND",
      percentage: "95",
    },
    {
      coding: "SASS",
      percentage: "80",
    },
    {
      coding: "REACT JS",
      percentage: "90",
    },
    {
      coding: "REDUX",
      percentage: "75",
    },
  ];
  
  return (
    <div className="skill_container" style={{backgroundColor:flag ? "#111111":"#ffffff"}}>
      <h1 style={{color:flag ? "#ffffff":"#666"}}>MY SKILLS</h1>
      <div className="skilldata_div">
        {skillset.map((item) => {
          return (
            <div className="skillsetdata slide-in-blurred-top">
             <div className="progresstatus">
             <Progressbar item={item} />
             </div>
             <h1 className="coding" style={{color:flag ? "#ffffff":"#666"}}>{item.coding}</h1>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Skill;
