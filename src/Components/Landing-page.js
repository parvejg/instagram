import "./Landing-page.css";
import "./Avatar.css";
import "./Left-sidebar.css";

import { LeftSidebar } from "./Left-sidebar";
import { Avatar } from "./Avatar";
import { Contents } from "./Contents";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <LeftSidebar />
      <Contents />
    </div>
  );
};
