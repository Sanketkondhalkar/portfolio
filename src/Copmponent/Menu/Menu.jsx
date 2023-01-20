import React, { useContext, useEffect, useState } from "react";
import "../Menu/Menu.css";
import { Outlet, Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaCloudMoon } from "react-icons/fa";
import Store from "../../Store";
const data = [
  {
    icon: "fa-solid fa-house-chimney",
    data: "home",
    path: "/",
    flag: false
  },
  {
    icon: "fa-solid fa-user",
    data: "about",
    path: "/portfolio/about",
    flag: false
  },
  {
    icon: "fa-solid fa-briefcase",
    data: "portfolio",
    path: "/portfolio/portfolio",
    flag: false
  },
  {
    icon: "fa-solid fa-address-book",
    data:"contact",
    path: "/portfolio/contact",
    flag: false
  },
  {
    icon: "fa-solid fa-comments",
    data:"blog",
    path: "/portfolio/blog",
    flag: false
  },
];

const Menu = () => {
  
  const [userdata, setuserdata] = useState(data)
  const { flag, setflag } = useContext(Store);
  useEffect(() => {}, []);

  const flagchange = () => {
    localStorage.setItem("dark", false);
    setflag(!flag);
  };
  const hoverchange = (type) =>{
   const newdata = data.map((item)=>{
      if(item.data === type){
        return {...item, flag: true}
      }
      return item
    })

    setuserdata(newdata)
  }
  return (
    <div className="container">
      <div className="inner_container">
        <div className="toggal">
          <button
            className="demo buttondesign"
            onClick={flagchange}
            style={{ backgroundColor: flag ? "#2B2A2A" : "#EEEEEE" }}
          >
            {flag ? (
              <BsFillCloudSunFill
                color="white"
                size={27}
                style={{ color: flag ? "#ffffff" : "#666" }}
              />
            ) : (
              <FaCloudMoon
                color="white"
                size={27}
                style={{ color: flag ? "#ffffff" : "#666" }}
              />
            )}
          </button>
        </div>
        <div className="menu">
          {userdata.map((source, index) => {
            const {data}=source.data;
            return (
              <div className="home_menu" key={index}>
                <Link to={source.path}>
                  <button
                    className="btn_icon buttondesign"
                    id={flag ? "day" : "night"}
                    onClick={()=>hoverchange(source.data)}

                    style={{backgroundColor : source.flag ? "#FFB400":"#2B2A2A"}}
                  
                  >
                    <i
                      className={source.icon}
                      id="iconcolor"
                      style={{ color: flag ? "#ffffff" : "#666" }}
                    ></i>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
