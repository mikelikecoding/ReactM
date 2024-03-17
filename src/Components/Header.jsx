import React from "react";

const Header = (props) => {
    let me = 'michael'
  return <h1>Hello { me.toUpperCase() } {props.name}</h1>;
};

export default Header;
