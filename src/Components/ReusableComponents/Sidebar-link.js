import { Link } from "react-router-dom";
import "./Sidebar-link.css";
export const SidebarLink = ({ icon, linkName, href, to }) => {
  return (
    <div className="left-sidebar-wrapper">
      <Link href={href} to={to} className="l-sidebar-links">
        <span className="left-sidebar-icon"> {icon}</span>{" "}
        <span className="left-sidebar-linkName"> {linkName}</span>
      </Link>
    </div>
  );
};
export const SidebarIconLink = ({ icon, href }) => {
  return (
    <div>
      <a href={href} className="sidebar-icon">
        <span> {icon}</span>
      </a>
    </div>
  );
};
