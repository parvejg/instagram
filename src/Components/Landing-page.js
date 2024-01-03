import "./Landing-page.css";
import "./Avatar.css";
import "./Left-sidebar.css";
import { RightSidebar } from "./Right-sidebar";
import { LeftIconSidebar, LeftSidebar } from "./Left-sidebar";
import { Contents } from "./Contents";
export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <LeftIconSidebar />
      <LeftSidebar />
      <Contents />
      <RightSidebar />
    </div>
  );
};
