import { Avatar } from "./Avatar";
import "./ExploreImg-card.css";
import { FollowBtn } from "./Follow-Btn";
import { ExplorePageImg } from "./ReusableComponents/Images";
import { ProfileAvatar } from "./ReusableComponents/Profile-avatar";
export const ExploreImageCard = () => {
  return (
    <div className="exploreimg-card-wrapper">
      <img
        className="explore-page-imgCard"
        src="data:image/jpeg;base64,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"
      />
      <div className="explore-page-avatar-main-wrapper">
        <div className="explore-imgCard-content-wrapper">
          <ProfileAvatar
            button="Follow"
            name="md parvej"
            userName="parvejpg321"
          />
          <div className="more-option-btn-wrapper">
            <button className="more-option-btn">---</button>
          </div>
          <div className="explore-comments-container">
            <ProfileAvatar name="md parvej" userName="parvejpg321" />
          </div>
        </div>
      </div>
    </div>
  );
};
