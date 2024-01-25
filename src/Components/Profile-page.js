import { CiCirclePlus } from "react-icons/ci";
import { LeftSidebar } from "./Left-sidebar";
import "./Profile-page.css";
import { BasicBtn } from "./ReusableComponents/BasicBtn";
export const ProfilePage = () => {
  return (
    <div className="profile-page-main-wrapper">
      <div className="profile-page-left-sidebar-page-wrapper">
        <LeftSidebar />
      </div>
      <div className="profileAvatar-wrapper">
        <img
          className="profile-img"
          size="large"
          src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
          <div className="profile-page-plus-icon-wrapper">
          <a href="/" className="plus-icon">
            <CiCirclePlus />
          </a>
        </div>
      </div>
      <div>
        <div className="profile-page-wrapper">
          <div className="profile-page-name-userName-wrapper">
            <h3 className="profile-page-userName">Parvezpg321</h3>
            <BasicBtn className="profile-page-btn" btnName="Edit profile" />
            <BasicBtn className="profile-page-btn" btnName="View archive" />
            <BasicBtn className="profile-page-btn" btnName="Ad tools" />
          </div>
          <div className="profile-post-followers-following-counting-wrapper">
            <BasicBtn className="post-btn" btnName="2 post" />
            <BasicBtn className="followers-btn" btnName="60 followers" />
            <BasicBtn className="following-btn" btnName="66 following" />
          </div>
          <div className="profile-bio-wrapper">
            <b>Md parvez</b>
            <span>Editor</span>
            <p>BCA Student at DAV College | Learning frontend developed.</p>
          </div>
        </div>
       
      </div>
    
    </div>
  );
};
