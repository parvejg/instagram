import { FollowBtn } from "./Follow-Btn";
import { ProfileAvatar } from "./ReusableComponents/Profile-avatar";
import "./Right-sidebar.css";
export const RightSidebar = () => {
  return (
    <div className="right-sidebar-main-wrapper">
      <ProfileAvatar
        userName="parvez321pg"
        name="MD Parvez"
        button={<FollowBtn btnName="Switch" />}
      />
      <div className="see-all-btn-wrapper">
        <small className="suggested-for-you-text">Suggested for you</small>
        <button className="see-all-btn">See All</button>
      </div>
      <div className="right-sidebar-users-wrapper">
        <ProfileAvatar
          userName="Aashu"
          name="follow you"
          button={<FollowBtn btnName="Follow" />}
        />
        <ProfileAvatar
          userName="Rahul_Choudhary"
          name="follow you"
          button={<FollowBtn btnName="Follow" />}
        />
        <ProfileAvatar
          userName="Mohit_sharma"
          name="follow you"
          button={<FollowBtn btnName="Follow" />}
        />
        <ProfileAvatar
          userName="Guddu"
          name="New to Instagram"
          button={<FollowBtn btnName="Follow" />}
        />
        <ProfileAvatar
          userName="Rohit"
          name="New to Instagram"
          button={<FollowBtn btnName="Follow" />}
        />
        <ProfileAvatar
          userName="Ubaid_pathan"
          name="New to Instagram"
          button={<FollowBtn btnName="Follow" />}
        />
      </div>
    </div>
  );
};
