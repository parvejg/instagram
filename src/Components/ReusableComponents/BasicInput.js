import react from "react";
import "./ReusableComponents.css";
export const BasicInput = ({ placeholder, type }) => {
  return <input className="basicInput" placeholder={placeholder} type={type} />;
};
export const BasicBtn = ({ btnName }) => {
  return <button className="log-in-btn">{btnName}</button>;
};
