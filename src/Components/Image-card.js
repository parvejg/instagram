import "./Image-Card.css";
import { Avatar } from "./Avatar";
import { FollowBtn } from "./Follow-Btn";
import { FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
export const ImageCard = () => {
  return (
    <div className="image-card-main-wrapper">
      <div className="imgCard-avatar-wrapper">
        <Avatar
          size="medium"
          src="data:image/jpeg;base64,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"
        />
        <small className="userName">Parvej ch</small>
        <small className="cardImg-post-time-text">4w</small>
        <FollowBtn className="imgCard-follow-btn" />
        <div className="cardImg-toggle-btn-wrapper">
          <button className="imgCard-toggle-btn">...</button>
        </div>
      </div>

      <div className="image-card-wrapper">
        <img
          className="content-card-img"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="cardImg-bottom-btns-wrapper">
        <FaRegHeart className="like-btn" />
        <TbMessageCircle className="message-btn" />
        <BsSend className="share-btn" />
      </div>
      <small className="current-likes">8987 likes</small>
    </div>
  );
};
