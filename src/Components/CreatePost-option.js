import "./CreatePost-option.css";
import { SidebarLink } from "./ReusableComponents/Sidebar-link";
export const CreateBtnSidebar = () => {
  return (
    <div className="createBtn-Sidebar-wrapper">
      <SidebarLink linkName="Post" />
      <SidebarLink linkName="Live video" />
    </div>
  );
};
