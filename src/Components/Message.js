import "./Message.css";
import { LeftIconSidebar } from "./Left-sidebar";
import { FiEdit2 } from "react-icons/fi";
export const MessagePage = () => {
  return (
    <div className="message-page-main-container">
      <div className="left-iconSidebar-wrapper">
        <LeftIconSidebar />
      </div>
      <div>
        <div className="userName-wrapper">
          <h2>Parvezpg321</h2>
          <FiEdit2 className="edit-icon" />
        </div>
        <div className="message-links-wrapper">
          <a href="/">Primary</a>
          <a href="/">General</a>
          <a href="/">Request</a>
        </div>
      </div>
    </div>
  );
};
