import "./Sidebar-link.css";
export const SidebarLink = ({ icon, linkName, href }) => {
  return (
    <div className="left-sidebar-wrapper">
      <a href={href} className="l-sidebar-links">
        <span> {icon}</span> <span> {linkName}</span>
      </a>
    </div>
  );
};
