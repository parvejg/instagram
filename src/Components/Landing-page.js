import "./Landing-page.css";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { InstagramTextImage } from "./ReusableComponents/InstagramText-img";
import { FcFilmReel } from "react-icons/fc";
import { MdExplore } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-left-sidebar-wrapper">
        <div>
          <InstagramTextImage className="sidebar-text-img" />
        </div>
        <a href="#" className="r-sidebar-links">
          <AiFillHome className="sidebar-icon" /> Home
        </a>
        <a href="#" className="r-sidebar-links">
          <IoSearch className="sidebar-icon" />
          Search
        </a>
        <a href="#" className="r-sidebar-links">
          <MdExplore className="sidebar-icon" /> Explore
        </a>
        <a href="#" className="r-sidebar-links">
          <FcFilmReel className="sidebar-icon" /> Reels
        </a>
        <a href="#" className="r-sidebar-links">
          <AiOutlineMessage className="sidebar-icon" /> Messages
        </a>
        <a href="#" className="r-sidebar-links">
          <IoIosHeartEmpty className="sidebar-icon" /> Notifications
        </a>
        <a href="#" className="r-sidebar-links">
          <CiCirclePlus className="sidebar-icon" /> Create
        </a>
        <a href="#" className="r-sidebar-links">
          Profile
        </a>
      </div>
      <div className="landing-page-content-wrapper"></div>
      <div className="landing-page-right-sidebar-wrapper"></div>
    </div>
  );
};
