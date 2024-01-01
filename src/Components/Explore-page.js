import "./Explore-page.css";
import { LeftSidebar } from "./Left-sidebar";
import { ExplorePageImg } from "./ReusableComponents/Images";
export const ExplorePage = () => {
  return (
    <div className="explore-page-main-wrapper">
      <div className="explore-page-left-sidebar-wrapper">
        <LeftSidebar />
      </div>
      <div className="explore-page-img-wrapper">
        <ExplorePageImg className="explore-page-imgs" />
        <ExplorePageImg className="explore-page-imgs" />
        <ExplorePageImg className="explore-page-imgs" />
        <ExplorePageImg className="explore-page-imgs" />
      </div>
    </div>
  );
};
