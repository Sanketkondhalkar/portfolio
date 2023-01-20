import React, { useContext, useState } from "react";
import "../Portfolio/Portfolio.css";
import { BsGithub } from "react-icons/bs";
import { data } from "./data";
import Store from "../../Store";

const Portfolio = () => {
  const { flag, setflag } = useContext(Store);
  const [active, setactive] = useState({
    All: true,
    Graphics: false,
    Website: false,
  });
  const [projectdata, setprojectdata] = useState(data);

  const filterdata = (type) => {
    if (type == "Website" || type == "Graphics") {
      var segregate = data.filter((item) => {
        return item.type === type;
      });
      setprojectdata(segregate);
    } else {
      setprojectdata(data);
    }
    setactive({ [type]: true });
  };
  return (
    <div
      className="portfolio_Container"
      style={{ backgroundColor: flag ? "#111111" : "#ffffff" }}
    >
      <div className="title_container">
        <h1 className="title" style={{ color: flag ? "#ffffff" : "#666" }}>
          MY <span className="titlecolor">PORTFOLIO</span>
        </h1>
      </div>
      <div className="container_type">
        <ul>
          <li
            onClick={() => {
              filterdata("All");
            }}
            style={{ color: active.All ? "red" : "orange" }}
            className={flag ? "night" : "day"}
          >
            ALL
          </li>
          <li
            onClick={() => {
              filterdata("Graphics");
            }}
            style={{ color: active.Graphics ? "red" : "orange" }}
            className={flag ? "night" : "day"}
          >
            GRAPHICS DESIGN
          </li>
          <li
            onClick={() => {
              filterdata("Website");
            }}
            className={flag ? "night" : "day"}
            style={{ color: active.Website ? "red" : "orange" }}
          >
            WEBSITE
          </li>
        </ul>
      </div>
      <div className="project">
        {projectdata.map((item) => {
          return (
            <div className="demo slide-in-elliptic-top-fwd" key={item.id}>
              <div className="card">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div
                  className="cardbody"
                  style={{ backgroundColor: flag ? "#252525" : "#f5f8fc" }}
                >
                  <p
                    className="headingog"
                    style={{ color: flag ? "#ffffff" : "#666" }}
                  >
                    {item.name}
                  </p>
                  <div className="center">
                    <p
                      className="category"
                      style={{ color: flag ? "#ffffff" : "#666" }}
                    >
                      {item.category}
                    </p>
                    <div>
                    {
                      item?.Languages?.map((source)=>{
                        // console.log(source)
                        return(
                          <>
                          <p className="duration" style={{color: "rgb(255, 255, 255)", backgroundColor: "rgb(102, 102, 102)"}}>{source}</p>
                          </>
                        )
                      })
                    }
                    </div>
                    
                    

                   
                    {/*<div className="button button1">
                      <BsGithub size={20} className="git" color="BLACK" />
                      GITHUB
                    </div>
                     */}
                    <a href={item.github}>
                      <button
                        className="hoverdemo hoverbutton"
                        style={{
                          backgroundColor: flag ? "#252525" : "#f5f8fc",
                          color: flag ? "#ffffff" : "#666",
                        }}
                      >
                        View Code{" "}
                        <BsGithub size={20} className="git" color="BLACK" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
