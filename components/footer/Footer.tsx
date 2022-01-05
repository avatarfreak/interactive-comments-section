import React from "react";

interface Props {}

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="text-center mt-8 text-[11px] tracking-wider">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-clr-pri-100"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          href="https://github.com/avatarfreak"
          target="_blank"
          rel="noreferrer"
          className="text-clr-pri-200"
        >
          {" "}
          avatarfreak{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
