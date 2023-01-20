import React, { useContext } from "react";
import Store from "../../Store";
import "../About/About.css";
import Experience from "./Experience/Experience";
import Separator from "./Separator/Separator";
import Skill from "./Skill/Skill";

const data = [
  {
    Title: "First Name",
    value: "Sanket",
  },
  {
    Title: "Last Name",
    value: "Kondhalkar",
  },
  {
    Title: "Age",
    value: "24 Years",
  },
  {
    Title: "Nationality",
    value: "Indian",
  },
  {
    Title: "Freelance",
    value: "Available",
  },
  {
    Title: "Address",
    value: "Mumbai ,Maharashtra -4000 43.",
  },
  {
    Title: "Phone",
    value: "+91 8779 59 4925",
  },
  {
    Title: "Email",
    value: "sanketkondhalkar100@gmail.com",
  },
  {
    Title: "Github",
    value: "https://github.com/Sanketkondhalkar/",
  },
  {
    Title: "Langages",
    value: " English,Hindi,Marathi",
  },
];
const jobdata = [
  {
    count: "1",
    firstdata: "Year's of ",
    lastdata: "Experience",
  },
  {
    count: "10",
    firstdata: "Happy ",
    lastdata: "Customers",
  },
  {
    count: "5",
    firstdata: "Completed",
    lastdata: "Project",
  },
  {
    count: "15",
    firstdata: "Certificate ",
    lastdata: "Won",
  },
];
const About = () => {
  const { flag, setflag } = useContext(Store);
  return (
    <div
      className="About_Container"
      style={{ backgroundColor: flag ? "#111111" : "#ffffff" }}
    >
      <div className="title_container">
        <h1 className="title" style={{ color: flag ? "#ffffff" : "#666" }}>
          About <span className="titlecolor">Me</span>
        </h1>
      </div>
      <div className="box">
        <div className="left_box">
          <p
            className="box_heading"
            style={{ color: flag ? "#ffffff" : "#666" }}
          >
            {" "}
            PERSONAL INFORMATION
          </p>
          <div className="info_collect">
            {data.map((item) => {
              return (
                <div className="left_info scale-in-center">
                  <span
                    className="title_map"
                    style={{ color: flag ? "#ffffff" : "#666" }}
                  >
                    {item.Title} :{" "}
                  </span>{" "}
                  <b>
                    <span
                      className="value_map"
                      style={{ color: flag ? "#ffffff" : "#666" }}
                    >
                      {item.value}
                    </span>
                  </b>
                </div>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1R-IYEJ0Awg89axpH8SE0rVeOUncIqxAl/view"
              download
            >
              <button
                className="hoverdemo  vibrate-3"
                style={{
                  backgroundColor: flag ? "#111111" : "#ffffff",
                  color: flag ? "#ffffff" : "#666",
                }}
              >
                DOWNLOAD RESUME{" "}
                <i className="fa-solid fa-download download "></i>
              </button>
            </a>
            {/* <div className="right info">kondhalkar</div> */}
          </div>
        </div>
        <div className="right_box">
          {jobdata.map((item) => {
            return (
              <div className="boxes flip-in-hor-bottom">
                <div className="counting">
                  {item.count} <span className="plus">+</span>
                </div>
                <div className="info">
                  <div
                    className="arrow"
                    style={{
                      borderBottom: flag
                        ? "1px solid #ffffff"
                        : "1px solid  #666",
                    }}
                  ></div>
                  <div className="info_box">
                    <p
                      className="infotext"
                      style={{ color: flag ? "#ffffff" : "#666" }}
                    >
                      {item.firstdata}
                    </p>
                    <p
                      className="infotext"
                      style={{ color: flag ? "#ffffff" : "#666" }}
                    >
                      {item.lastdata}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Separator />
      <Skill />
      <Separator />
      <Experience />
    </div>
  );
};

export default About;
