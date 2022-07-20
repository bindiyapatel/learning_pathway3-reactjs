import React from "react";

const Button = (props) => {
  const { label, className, onClick } = props;

  return (
    <button type="button" className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
