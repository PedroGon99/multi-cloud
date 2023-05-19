import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://seeklogo.com/images/U/universidade-do-algarve-logo-002D349DA5-seeklogo.com.gif"
          alt=""
        />
        <p>
        Este blog foi realizado no âmbito da Unidade Curricular de Desenvolvimento de Aplicações para a Web, por: Joana Marques, Diogo Raposo e Lucas Vila Nova.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}