import "./CreateNew-postPage.css";
import { TbPhotoVideo } from "react-icons/tb";
export const CreateNewPost = () => {
  return (
    <div className="createPost-page-main-wrapper">
      <h2>Create New Post</h2>
      <div className="create-post-page-wrapper">
        <TbPhotoVideo className="post-img-icon" />
        <h2>Drag photos and videos here</h2>
        <button className="select-from-computer-btn ">
          Select from computer
        </button>
      </div>
    </div>
  );
};
