import "./Landing-page.css";
import "./Avatar.css";
import "./Left-sidebar.css";

import { LeftIconSidebar, LeftSidebar } from "./Left-sidebar";
import { Avatar } from "./Avatar";
import { Contents } from "./Contents";
import { RightSidebar } from "./Right-sidebar";
import { SearchPage } from "./Search-Page";
import { ExplorePage } from "./Explore-page";
import { ExploreImageCard } from "./ExploreImg-card";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      {/* <LeftSidebar /> */}
      {/* <LeftIconSidebar /> */}
      <SearchPage />
      {/* <ExplorePage /> */}
      {/* <LeftIconSidebar /> */}
      {/* <Contents /> */}
      {/* <RightSidebar /> */}
      {/* <ExploreImageCard /> */}
    </div>
  );
};
