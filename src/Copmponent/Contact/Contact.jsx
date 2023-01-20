import React, { useContext } from "react";
import Store from "../../Store";
import "../Contact/Contact.css";
const contactdata = [
  {
    icon: "fa-solid fa-map",
    name: "ADDRESS POINT",
    value: "Ganesh chwal , Jyotilring nagar , Mankhurd , Mumbai - 400043",
  },
  {
    icon: "fa-solid fa-envelope",
    name: "MAIL ME",
    value: "snaketkondhalkar100@gmail.com",
  },
  {
    icon: "fa-solid fa-square-phone",
    name: "CALL ME",
    value: "+ 91 8779 59 4925",
  },
];
const icondata = [
  {
    name: "fa-brands fa-linkedin-in",
    demo: "0px",
  },
  {
    name: "fa-brands fa-github",
  },
  {
    name: "fa-brands fa-facebook",
  },
  {
    name: "fa-brands fa-instagram",
  },
];
const Contact = () => {
  const { flag, setflag } = useContext(Store);
  return (
    <div
      className="Contact_Container"
      style={{ backgroundColor: flag ? "#111111" : "#ffffff" }}
    >
      <div className="title_container">
        <h1 className="title" style={{ color: flag ? "#ffffff" : "#666" }}>
          GET IN <span className="titlecolor">TOUCH</span>
        </h1>
        {/* <span className="title-bg">contact</span> */}
      </div>
      <div className="contact_div slide-in-elliptic-top-fwd">
        <div className="contact_left">
          <h1 className="title" style={{ color: flag ? "#ffffff" : "#666" }}>
            DON'T BE SHY !
          </h1>
          <p style={{ color: flag ? "#ffffff" : "#666" }}>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          {contactdata.map((item,index) => {
            return (
              <div className="asideicon" key={index}>
                <div className="icon">
                  <i className={item.icon}></i>
                </div>
                <div className="info">
                  <p
                    className="address"
                    style={{ color: flag ? "#ffffff" : "#666" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="street"
                    style={{ color: flag ? "#ffffff" : "#666" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="icons">
            {icondata.map((item,index) => {
              return (
                <button
                 key= {index}
                  className="brand"
                  style={{
                    marginLeft: item.demo,
                    backgroundColor: flag ? "#2B2A2A" : "#EEEEEE",
                  }}
                >
                  <i
                    className={item.name}
                    style={{ color: flag ? "#ffffff" : "#666" }}
                  ></i>
                </button>
              );
            })}
            {/* style={{backgroundColor:flag? "#2B2A2A":"#EEEEEE" }} */}
          </div>
        </div>
        <div className="contact_right slide-in-elliptic-top-fwd">
          <div className="contact_input">
            <div className="inputbox">
              <div className="left">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  style={{
                    backgroundColor: flag ? "#111111" : "#ffffff",
                    border: flag ? "1px solid #ddd" : "1px solid #111",
                  }}
                />
              </div>
              <div className="right">
                <input
                  type="text"
                  name="email"
                  placeholder="YOUR MAIL"
                  style={{
                    backgroundColor: flag ? "#111111" : "#ffffff",
                    border: flag ? "1px solid #ddd" : "1px solid #111",
                  }}
                />
              </div>
            </div>
            <div className="inputbox2">
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                style={{
                  backgroundColor: flag ? "#111111" : "#ffffff",
                  border: flag ? "1px solid #ddd" : "1px solid #111",
                }}
              />
            </div>
            <div className="textareabox">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                rows="10"
                style={{
                  backgroundColor: flag ? "#111111" : "#ffffff",
                  border: flag ? "1px solid #ddd" : "1px solid #111",
                }}
              ></textarea>
            </div>

            <button
              className="hoverdemo hoverbutton"
              style={{ backgroundColor: flag ? "#111111" : "#ffffff" }}
            >
              SEND MESSAGE{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
