import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  const resolvedPath = useResolvedPath("/");
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const resolvedPath2 = useResolvedPath("/MyList");
  const isActive2 = useMatch({ path: resolvedPath2.pathname, end: true });

  return (
    <nav className="nav">
      <span className="big-title">Vacation Destination</span>
      <ul>
        <NavLink title="Home Page" to="/">
          <FaHome color={isActive ? "white" : "#b8b7d1"} fontSize="25px" />
        </NavLink>
        <NavLink title="Your Favourites" to="/MyList">
          <FaHeart color={isActive2 ? "white" : "#b8b7d1"} fontSize="25px" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
