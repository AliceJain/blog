import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar"> 
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="/images/AboutMe.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          voluptatibus illum quisquam harum atque odio?
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">LIFE</li>
        <li className="sidebarListItem">MUSIC</li>
        <li className="sidebarListItem">STYLE</li>
        <li className="sidebarListItem">SPORT</li>
        <li className="sidebarListItem"> TECH</li>
        <li className="sidebarListItem">CINEMA</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>
      </div>
    </div>
  );
}

