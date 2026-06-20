import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>🏠 Home</li>
        <li>📌 Pinned</li>
        <li>⭐ Favorites</li>
        <li>📂 Archive</li>
        <li>🗑 Trash</li>
      </ul>
    </div>
  );
};

export default Sidebar;