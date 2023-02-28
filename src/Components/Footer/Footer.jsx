import React from "react";
import "./footer.css";
import { BsGithub, BsCodeSlash } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={`${"footer"} `}>
      <a href="https://github.com/DavidPalacio99" target={"_blanck"}>
        <BsGithub className={"icons"} />
      </a>
      <h3>Developed by David Palacio</h3>
      <a href="https://github.com/DavidPalacio99/Chess" target={"_blanck"}>
        <BsCodeSlash className={"icons"} />
      </a>
    </div>
  );
};

export default Footer;
