import "./Follow-Btn.css";
export const FollowBtn = ({ btnName, onClick }) => {
  return <button className="imgCard-follow-btn" onClick={onClick}>{btnName}</button>;
};
