import React from "react";

const Header = ({ channel }) => {
  return (
    <header>
      <h2># {channel}</h2>
      <span>
        <a href="/" className="button btn-green">Go back to Homepage</a>
      </span>
    </header>
  );
};

export default Header;
