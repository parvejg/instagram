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
export const BasicBtn = ({ btnName, onClick, disabled }) => {
  return (
    <button className="log-in-btn" disabled={disabled} onClick={onClick}>
      {btnName}
    </button>
  );
};
