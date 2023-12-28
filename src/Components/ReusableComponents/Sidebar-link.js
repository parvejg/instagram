import "./Sidebar-link.css";
export const SidebarLink = ({ icon, linkName, href }) => {
  return (
    <div className="left-sidebar-wrapper">
      <a href={href} className="l-sidebar-links">
        <span className="left-sidebar-icon"> {icon}</span>{" "}
        <span className="left-sidebar-linkName"> {linkName}</span>
      </a>
    </div>
  );
};
