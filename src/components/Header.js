import React from "react";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f646.png"
          width="32"
          height="32"
          alt=""
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f646.png"
          width="32"
          height="32"
          alt=""
        />
      </div>
    );
  }
}

export default Header;
