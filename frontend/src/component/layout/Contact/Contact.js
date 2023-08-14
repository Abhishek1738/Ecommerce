import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mast.abhishek.gupta@gmail.com">
        <Button>Contact: mast.abhishek.gupta@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
