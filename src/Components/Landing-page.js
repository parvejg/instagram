import "./Landing-page.css";
import { InstagramTextImage } from "./ReusableComponents/InstagramText-img";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-left-sidebar-wrapper">
        <InstagramTextImage className="sidebar-text-img" />
      </div>
      <div className="landing-page-content-wrapper"></div>
      <div className="landing-page-right-sidebar-wrapper"></div>
    </div>
  );
};
