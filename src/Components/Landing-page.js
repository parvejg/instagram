import "./Landing-page.css";
import "./Photo-Avatar.css";
import "./Left-sidebar.css";

import { LeftSidebar } from "./Left-sidebar";
import { PhotoAvatar } from "./Photo-Avatar";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <LeftSidebar />
      {/* <PhotoAvatar className="content-page-avatar" /> */}
    </div>
  );
};
