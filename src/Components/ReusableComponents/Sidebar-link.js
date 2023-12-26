import "./Sidebar-link.css";
export const SidebarLink = ({ icon, linkName, href }) => {
  return (
    <div className="left-sidebar-wrapper">
      <a href={href} className="l-sidebar-links">
        {icon} {linkName}
      </a>
    </div>
  );
};
