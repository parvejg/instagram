import "./Left-sidebar.css";
import { IoSearch } from "react-icons/io5";
import { InstagramTextImage } from "./ReusableComponents/InstagramText-img";
import { FcFilmReel } from "react-icons/fc";
import { MdExplore } from "react-icons/md";
import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { PhotoAvatar } from "./Photo-Avatar";
export const LeftSidebar = () => {
  return (
    <div className="landing-page-left-sidebar-wrapper">
      <div>
        <InstagramTextImage className="sidebar-text-img" />
      </div>
      <a href="#" className="l-sidebar-links">
        <AiFillHome className="sidebar-icon" /> Home
      </a>
      <a href="#" className="l-sidebar-links">
        <IoSearch className="sidebar-icon" />
        Search
      </a>
      <a href="#" className="l-sidebar-links">
        <MdExplore className="sidebar-icon" /> Explore
      </a>
      <a href="#" className="l-sidebar-links">
        <FcFilmReel className="sidebar-icon" /> Reels
      </a>
      <a href="#" className="l-sidebar-links">
        <AiOutlineMessage className="sidebar-icon" /> Messages
      </a>
      <a href="#" className="l-sidebar-links">
        <IoIosHeartEmpty className="sidebar-icon" /> Notifications
      </a>
      <a href="#" className="l-sidebar-links">
        <CiCirclePlus className="sidebar-icon" /> Create
      </a>
      <a href="#" className="l-sidebar-links sidebar-icon-profile">
        <PhotoAvatar className="photo-avatar-img" /> Profile
      </a>
    </div>
  );
};
