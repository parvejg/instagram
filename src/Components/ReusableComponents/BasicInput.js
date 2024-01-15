import react from "react";
import "./ReusableComponents.css";
export const BasicInput = ({ placeholder, type, onChange }) => {
  return (
    <input
      className="basicInput"
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};
export const BasicBtn = ({ btnName, onClick }) => {
  return (
    <button className="log-in-btn" onClick={onClick}>
      {btnName}
    </button>
  );
};
