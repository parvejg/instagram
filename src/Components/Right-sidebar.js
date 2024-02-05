import { useEffect, useState } from "react";
import { FollowBtn } from "./Follow-Btn";
import { ProfileAvatar } from "./ReusableComponents/Profile-avatar";
import axios from "axios"
import "./Right-sidebar.css";
export const RightSidebar = () => {
  const [usersData, setUserData] = useState([])
  const userEndPoint = "/api/users"

  const headers = {
    headers: {
      authorization: localStorage.getItem("encodedToken")

    }
  }
  const getUsersHandler = async () => {

    const response = await axios.get(userEndPoint)
    if (response.status === 201 || response.status === 200) {
      return response.data
    }
  }
  useEffect(() => {
    (async () => {
      const data = await getUsersHandler()
      setUserData(data?.users)
    })()
  }, [])

  const followHandler = async (users)=>{
    const followEndPoint = `{/api/users/follow/${users._id}}`
      const response = await axios.post(followEndPoint,headers)
      if(response.status === 200 || response.status === 201){
        return response
      }
    }
  return (
    <div className="right-sidebar-main-wrapper" >

      <ProfileAvatar
        userName="parvej"
        name="MD Parvez"
        button={<FollowBtn btnName="Switch" />}
      />
      <div className="see-all-btn-wrapper">
        <small className="suggested-for-you-text">Suggested for you</small>
        <button className="see-all-btn">See All</button>
      </div>
      {
        usersData.map((users) => {
          return <div className="right-sidebar-users-wrapper" key={users._id}>
            <ProfileAvatar
              userName={users.username}
              name="follow you"
              button={<FollowBtn onClick={()=>followHandler(users)} btnName="Follow" />}
            />

          </div>


        })
      }

    </div>

  );
};
