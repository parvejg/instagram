import "./CreateNew-postPage.css";
import { TbPhotoVideo } from "react-icons/tb";
import axios from "axios"
import { useEffect, useState } from "react";
export const CreateNewPost = () => {
  const [post, setPost] = useState([])
  const [image, setImage] = useState([])
  const imageHandler = (e) => {
    const files = e.target.files
    if (files && files[0]) {
      setImage(URL.createObjectURL(files[0]))
    }

  }
  console.log(image);
  const postHandler = async () => {
    const headers = {
      headers: {
        authorization: localStorage.getItem("encodedToken"),
        "Content-Type": "multipart/form-data"

      }
    }
    const requestBody = JSON.stringify({
      postData: {image: image}
    })
    const postEndPoint = "/api/posts"
    const response = await axios.post(postEndPoint, headers,requestBody)
    if (response.status === 200 || response.status === 201) {
      console.log(response, "pppdsts");
      return response
    }
  }
  // useEffect(()=>{
  //   (async()=>{
  //     const postData = await postHandler()
  //     console.log("post-posts-data" , postData );
  //   })()
  // },[])
  return (
    <div className="createPost-page-main-wrapper">
      <h2>Create New Post</h2>
      <div className="create-post-page-wrapper">
        <TbPhotoVideo className="post-img-icon" />
        <h2>Drag photos and videos here</h2>
        <input className="select-from-computer-btn" onChange={(e) => imageHandler(e)} placeholder="Select from computer" type="file" >
        </input>
      </div>
      <button onClick={()=>postHandler()}>Create post</button>
    </div>
  );
};
