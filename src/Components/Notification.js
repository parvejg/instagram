import { LeftIconSidebar } from "./Left-sidebar";
import "./Notification.css";

export const NotificationPage = () => {
  return (
    <div className="notification-page-main-wrapper">
      <div className="notification-page-leftIcon-sidebar-wrapper">
        <LeftIconSidebar />
      </div>
      <div className="notification-page-wrapper">
        <div className="notification-page">
          <h1>Notifications</h1>
          <p>New</p>
        </div>
      </div>
    </div>
  );
};
