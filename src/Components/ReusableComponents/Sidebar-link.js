import "./Sidebar-link.css";
export const SidebarLink = ({ icon, linkName, href }) => {
  return (
    <a href={href} className="l-sidebar-links">
      {icon} {linkName}
    </a>
  );
};
