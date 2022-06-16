import React from "react";
import "./styles.css";
export const Button = ({ text, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="button button2" onClick={onClick}>
      {text}
    </button>
  );
};
