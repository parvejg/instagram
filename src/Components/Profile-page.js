import { Avatar } from "./Avatar";
import { LeftSidebar } from "./Left-sidebar";
import "./Profile-page.css";
export const ProfilePage = () => {
  return (
    <div className="profile-page-main-wrapper">
      <div className="profile-page-left-sidebar-page-wrapper">
        <LeftSidebar />
      </div>
      <div className="profile-page-wrapper">
        <div className="profileAvatar-wrapper">
          <img
            className="profile-img"
            size="large"
            src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="profile-page-name-bio-userName-wrapper">
          <h3 className="profile-page-userName">Parvezpg321</h3>
          <button className="profile-page-btn">Edit profile</button>
          <button className="profile-page-btn">View archive</button>
          <button className="profile-page-btn">Ad tools</button>
        </div>
      </div>
    </div>
  );
};
