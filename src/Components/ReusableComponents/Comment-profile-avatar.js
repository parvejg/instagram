import { CiHeart } from "react-icons/ci";
import "./Comment-profile-avatar.css";
import { ProfileAvatar } from "./Profile-avatar";
export const CommentProfileAvatar = ({
  commentText,
  Profileavatar,
  commentTime,
  like,
  reply,
}) => {
  return (
    <div className="commentProfile-main-avatar-wrapper">
      <div className="commentProfile-avatar">
        {Profileavatar}
        <small>{commentText}</small>
      </div>
      <div className="commentAvatar-bttm-btn-wrapper">
        <small className="commnet-time">{commentTime}</small>
        <small className="comment-like-btn">{like}</small>
        <small className="comment-reply-btn">{reply}</small>
        <small className="comment-heart-like-btn">
          <CiHeart />
        </small>
      </div>
    </div>
  );
};
