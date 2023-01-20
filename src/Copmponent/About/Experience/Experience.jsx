import React, { useContext } from "react";
import Store from "../../../Store";
import "../Experience/Experience.css";

const Experience = () => {
  const {flag,setflag}=useContext(Store)
  const experience = [
    {
      title: "SSC",
      name: "MATOSHREE VIDYA MANDIR DEONAR",
      duration: "Jul 2014 - May 2015",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perspiciatis magnam assumenda doloribus quaerat reprehenderit rem nihil. Laborum reiciendis aspernatur nihil vero corporis temporibus nemo, ipsam voluptatum, deleniti officia expedita.",
    },
    {
      title: "HSC",
      name: "N.G AACHARYA & DK MARATHE COLLEAGE CHEMBUR",
      duration: "Jul 2016 - May 2017",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perspiciatis magnam assumenda doloribus quaerat reprehenderit rem nihil. Laborum reiciendis aspernatur nihil vero corporis temporibus nemo, ipsam voluptatum, deleniti officia expedita.",
    },
    {
      title: "ENGINEERING DEGREE (B.TECH CSE)",
      name: "ITM VOCATIONAL UNIVERSITY ,VADODARA",
      duration: "Aug 2017 - Mar 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perspiciatis magnam assumenda doloribus quaerat reprehenderit rem nihil. Laborum reiciendis aspernatur nihil vero corporis temporibus nemo, ipsam voluptatum, deleniti officia expedita.",
    },
    {
      title: "INTERNSHIP (FRONTEND DEVELOPER)",
      name: "PEACEINFOTECH SERVICES PVT LTD , bhandup",
      duration: "Jul 2021 - Dec 2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perspiciatis magnam assumenda doloribus quaerat reprehenderit rem nihil. Laborum reiciendis aspernatur nihil vero corporis temporibus nemo, ipsam voluptatum, deleniti officia expedita.",
    },
    {
      title: "REACT JS DEVELOPER",
      name: "SEGMETRIQ ANALYTICS ",
      duration: "JuN 2022 - present",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio perspiciatis magnam assumenda doloribus quaerat reprehenderit rem nihil. Laborum reiciendis aspernatur nihil vero corporis temporibus nemo, ipsam voluptatum, deleniti officia expedita.",
    },
  ];
  return (
    <div className="Experience_container" style={{backgroundColor:flag ? "#111111":"#ffffff"}}>
      <h1 style={{color:flag ? "#ffffff":"#666"}}>EXPERIENCE & EDUCATION</h1>
      <div className="experience_div">
        {experience.map((item) => {
          return (
            <div className="experience_data slide-in-elliptic-top-fwd">
              <div className="experiece_container" style={{borderLeft:flag?"1px solid #666":"1px solid #EEEEEE"}}>
                <button className="experience_icon icon_data">
                  <i className="fa-solid fa-briefcase" style={{color:flag ? "#ffffff":"#666",fontSize:"20px"}}></i>
                </button>
                <div className="data">
                  <p className="duration" style={{color:flag ? "#ffffff":"#666" ,backgroundColor:flag ? "#666":"#EEEEEE"}}>{item.duration}</p>
                  <p className="Experience_title"style={{color:flag ? "#ffffff":"#666"}}>
                    {item.title} -{" "}
                    <span className="branch" style={{color:flag ? "#ffffff":"#666"}}>
                      {item.name}
                    </span>
                  </p>
                  {/* <p className="duration">Computer Engineer</p> */}
                  <p style={{color:flag ? "#ffffff":"#666"}}>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
