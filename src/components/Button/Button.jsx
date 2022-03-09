import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonName } = props;
  return (
    <div>
      <button>{buttonName}</button>
    </div>
  );
};

export default Button;
