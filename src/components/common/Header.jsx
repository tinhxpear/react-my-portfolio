import { Link } from "react-router-dom";
import { navlink } from "../../assets/dummyData";

import logo from "/images/logo.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((link, index) => (
              <Link to={link.url} key={index}>
                {link.text}
              </Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <MenuIcon className="icon"></MenuIcon>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
