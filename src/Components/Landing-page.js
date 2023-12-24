import "./Landing-page.css";
import "./Photo-Avatar.css";
import "./Left-sidebar.css";

import { LeftSidebar } from "./Left-sidebar";
import { PhotoAvatar } from "./Photo-Avatar";
import { Contents } from "./Contents";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <LeftSidebar />
      <Contents />
    </div>
  );
};
