import React, { useContext } from "react";
import "../Progressbar/Progressbar.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {buildStyles} from "react-circular-progressbar";
import Store from "../../../Store";

const Progressbar = ({ item }) => {
  const{flag,setflag}=useContext(Store)
  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={item.percentage}
        text={`${item.percentage}%`}
        styles={buildStyles({
          textColor: flag ? "#ffffff":"#666",
          pathColor: "#ffb400",
          trailColor: flag ?  "#252525":"#EEEEEE",
          
        })}
      />
    </div>
  );
};

export default Progressbar;
