import { Link } from "react-router-dom";
import "./Sidebar-link.css";
export const SidebarLink = ({ icon, linkName,onClick, href, to }) => {
  return (
    <div className="left-sidebar-wrapper">
      <Link href={href} to={to} onClick={onClick} className="l-sidebar-links">
        <span className="left-sidebar-icon"> {icon}</span>{" "}
        <span className="left-sidebar-linkName"> {linkName}</span>
      </Link>
    </div>
  );
};
export const SidebarIconLink = ({ icon, href, to }) => {
  return (
    <div>
      <Link href={href} to={to} className="sidebar-icon">
        <span> {icon}</span>
      </Link>
    </div>
  );
};
