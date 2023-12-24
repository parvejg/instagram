import "./Landing-page.css";
import { InstagramTextImage } from "./ReusableComponents/InstagramText-img";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-left-sidebar-wrapper">
        <div>
          <InstagramTextImage className="sidebar-text-img" />
        </div>
        <a href="#" className="r-sidebar-links">
          Home
        </a>
        <a href="#" className="r-sidebar-links">
          Search
        </a>
        <a href="#" className="r-sidebar-links">
          Explore
        </a>
        <a href="#" className="r-sidebar-links">
          Reels
        </a>
        <a href="#" className="r-sidebar-links">
          Messages
        </a>
        <a href="#" className="r-sidebar-links">
          Notifications
        </a>
        <a href="#" className="r-sidebar-links">
          Create
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
