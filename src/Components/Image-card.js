import "./Image-Card.css";
import { Avatar } from "./Avatar";
import { FollowBtn } from "./Follow-Btn";
import { FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
export const ImageCard = ({props}) => {
const {username,likes,image,createdAt,content,comments} = props;
  return (
    <div className="image-card-main-wrapper">
      <div className="imgCard-avatar-wrapper">
        <Avatar
          size="medium"
          src={image}
        />
        <small className="userName">{username}</small>
        <small className="cardImg-post-time-text">{createdAt}</small>
        <FollowBtn btnName="Follow" />
        <div className="cardImg-toggle-btn-wrapper">
          <button className="imgCard-toggle-btn">...</button>
        </div>
      </div>

      <div className="image-card-wrapper">
        <img
          className="content-card-img"
          alt="card-img"
          src={image}
        />
      </div>
      <div className="cardImg-bottom-btns-wrapper">
        <FaRegHeart className="like-btn" />
        <TbMessageCircle className="message-btn" />
        <BsSend className="share-btn" />
        <div className="save-btn-wrapper">
          <LuBookmark className="save-btn" />
        </div>
      </div>
      <small className="current-likes">{likes?.likeCount} likes</small>
      <small className="card-img-discription">
       {content}
      </small>
      <button className="view-comments-btn"> View all comment {comments?.length}</button>
      <input placeholder="Add a comment...." className="comment-input" />
    </div>
  );
};
