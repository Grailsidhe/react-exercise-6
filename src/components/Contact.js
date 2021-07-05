import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact" id={props.key}>
      <img className="avatar" src={props.avatar} alt="Avatar"></img>
        <div className="status">
          <p className="name">{props.name}</p>
          <div className={props.online ? "status-online" : "status-offline"}>
          </div>
          <div className="status-text">{props.online ? "online" : "offline"}
          </div>
        </div>
    </div>
  );
}

export default Contact;