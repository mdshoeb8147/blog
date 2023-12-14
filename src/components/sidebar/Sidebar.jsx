import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <div className="details">
          <img
            className="img"
            src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cum
            consequatur neque quia aperiam fuga aut fugit voluptates alias vero
            ipsum laboriosam, eveniet tempore ratione!
          </p>
        </div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons fa-brands fa-linkedin"></i>
          <i className="sidebarIcons fa-brands fa-facebook"></i>
          <i className="sidebarIcons fa-brands fa-github"></i>
          <i className="sidebarIcons fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
