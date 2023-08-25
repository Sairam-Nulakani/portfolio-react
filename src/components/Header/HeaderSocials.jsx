import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sairam-nulakani-54a287271/"
        target="_blank"
        className="social__icon"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Sairam-Nulakani"
        target="_blank"
        className="social__icon"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
