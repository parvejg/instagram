import "./Landing-page.css";
import "./Avatar.css";
import "./Left-sidebar.css";

import { LeftSidebar } from "./Left-sidebar";
import { Avatar } from "./Avatar";
import { Contents } from "./Contents";
import { RightSidebar } from "./Right-sidebar";
import { SearchPage } from "./Search-Page";
import { ExplorePage } from "./Explore-page";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      {/* <LeftSidebar /> */}
      {/* <SearchPage /> */}
      <ExplorePage />
      {/* <Contents />
      <RightSidebar /> */}
    </div>
  );
};
