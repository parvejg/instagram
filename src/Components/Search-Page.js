import { IoCloseCircleOutline } from "react-icons/io5";
import { LeftIconSidebar } from "./Left-sidebar";
import "./Search-page.css";
export const SearchPage = () => {
  return (
    <div className="search-page-wrapper">
      <div className="search-page-left-icon-sidebar-wrapper">
        <LeftIconSidebar />
      </div>
      <div>
        <h2 className="search-page-heading">Search</h2>
        <div className="search-input-wrapper">
          <input placeholder="Search..." className="search-page-input" />
          <IoCloseCircleOutline className="close-input-btn" />
        </div>
        <div className="search-list-wrapper">No react searches</div>
      </div>
    </div>
  );
};
