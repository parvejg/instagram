import "./Message.css";
import { LeftIconSidebar } from "./Left-sidebar";
import { FiEdit2 } from "react-icons/fi";
import { ProfileAvatar } from "./ReusableComponents/Profile-avatar";
export const MessagePage = () => {
  return (
    <div className="message-page-main-container">
      <div className="left-iconSidebar-wrapper">
        <LeftIconSidebar />
      </div>
      <div className="userName-and-links-main-wrapper">
        <div className="userName-wrapper">
          <h2>Parvezpg321</h2>
          <FiEdit2 className="edit-icon" />
        </div>
        <div className="message-links-wrapper">
          <a href="/" className="message-link">
            Primary
          </a>
          <a href="/" className="message-link">
            General
          </a>
          <a href="/" className="message-link">
            Request
          </a>
        </div>
        <div className="message-page-user-list-wrapper">
          <ProfileAvatar userName="Parvezpg321" name="Active 24 h ago" />
          <ProfileAvatar userName="Sakib" name="Active 20m ago" />
          <ProfileAvatar userName="Vaseem_baliyan" name="Active 21 h ago" />
          <ProfileAvatar userName="Rahul_657" name="Active 23 h ago" />
          <ProfileAvatar userName="Gotam_78" name="Active 20 h ago" />
          <ProfileAvatar userName="Sunil_baba_0" name="Active 2m ago" />
        </div>
      </div>
    </div>
  );
};
