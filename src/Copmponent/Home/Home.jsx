import React, { useContext } from "react";
import Store from "../../Store";
import "../Home/Home.css";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  const { flag, setflag } = useContext(Store);
  return (
    <>
      <div
        className="home_container "
        style={{ backgroundColor: flag ? "#111111" : "#ffffff" }}
      >
        <div className="home_bg">
          <div className="home_main">
            <div className="left">
              <div className="photo  "></div>
            </div>
            <div className="right  ">
              <div className="right_name">
                <p className="name"> I'M SANKET KONDHALKAR</p>
                <p
                  className="designation"
                  style={{ color: flag ? "#ffffff" : "#666" }}
                >
                  REACT JS DEVELOPER
                </p>
                <div className="description_box">
                  <p
                    className="description"
                    style={{ color: flag ? "#ffffff" : "#666" }}
                  >
                    A passionate programmer, eager to learn new technologies and
                    have keen interest to work in an environment where I can
                    utilize my skills for the growth of the organization as well
                    as my career. Looking forward to explore various fields of
                    programming to widen my horizon of knowledge by working on
                    challenging problems with a team.
                  </p>
                </div>
                <div className="more_About">
                <a href="https://drive.google.com/file/d/1R-IYEJ0Awg89axpH8SE0rVeOUncIqxAl/view" download> <button
                    className="hoverdemo hoverbutton"
                    style={{
                      backgroundColor: flag ? "#111111" : "#ffffff",
                      color: flag ? "#ffffff" : "#666",
                    }}
                  >
                    DOWNLOAD RESUME{" "}
                    <i className="fa-solid fa-download download "></i>
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
