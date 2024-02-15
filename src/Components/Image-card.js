import "./Image-Card.css";
import { Avatar } from "./Avatar";
import { FollowBtn } from "./Follow-Btn";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios"
import { TbMessageCircle } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./UseContex";


export const ImageCard = ({ props }) => {
  const { username, likes, image, createdAt, content, comments, setPosts, _id } = props;
  const context = useContext(AppContext)
  const { dispatch } = context;
  const [isPostLiked, SetIsPostLiked] = useState(false)
  const headers = {
    headers: {
      authorization: localStorage.getItem("encodedToken")

    }
  }
  const requestBody = {}
  const likeEndPoint = `/api/posts/like/${_id}`
  // call like EndPoint 
  const likeHandler = async (_id) => {
    const response = await axios.post(likeEndPoint, requestBody, headers)
    if (response.status === 201 || response.status === 200) {
      SetIsPostLiked(true)
      dispatch({ type: "likeData", payload: response.data })
      console.log("likedata", response);
      return response
    }
  }
  const createdAtTime = new Date(createdAt)
  const date1 = createdAtTime.getDay()
  // call dislike EndPoint 

  const dislikeHandler = async (_id) => {
    const dislikeEndPoint = `/api/posts/dislike/${_id}`
    const response = await axios.post(dislikeEndPoint, requestBody, headers)
    if (response.status === 200 || response.status === 201) {
      SetIsPostLiked(false)
      console.log("dislikeData", response.data);
      return response.data
    }

  }
  // call bookMark EndPoint 
  const bookMarkHandler = async (_id) => {
    const bookMarkEndPoint = `/api/users/bookmark/${_id}`
    const response = await axios.post(bookMarkEndPoint, requestBody, headers)
    console.log("bookMarkData", response);
    return response.data
  }
  // call remove bookMark EndPoint

  const removeBookMarkHandler = async (_id) => {
    const removeBookMarkEndPoint = `/api/users/remove-bookmark/${_id}`
    const response = await axios.post(removeBookMarkEndPoint, requestBody, headers)
    if (response.status === 200 || response.status === 201) {
      console.log("remove bookMark data", response);
      return response
    }

  }

  return (
    <div className="image-card-main-wrapper">
      <div className="imgCard-avatar-wrapper">
        <Avatar
          size="medium"
          src={image}
        />
        <small className="userName">{username}</small>
        <small className="cardImg-post-time-text">{date1}</small>
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
        {isPostLiked ? (
          <button className="dislike-btn-wrapper" onClick={() => dislikeHandler(_id)}> <FaRegHeart className="like-btn" /></button>

        ) :
          (
            <button className="like-btn-wrapper" onClick={() => likeHandler(_id)}>
              <FaRegHeart className= "disLike-btn" />
            </button>
          )
        }


        <TbMessageCircle className="message-btn" />
        <BsSend className="share-btn" />
        <div className="save-btn-wrapper">
          <button onClick={() => removeBookMarkHandler(_id)}>
            <LuBookmark className="save-btn" />
          </button>
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
