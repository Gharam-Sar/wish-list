import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  const resolvedPath = useResolvedPath("/Destination");
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const resolvedPath2 = useResolvedPath("/MyList");
  const isActive2 = useMatch({ path: resolvedPath2.pathname, end: true });
  const resolvedPath3 = useResolvedPath("/");
  const isActive3 = useMatch({ path: resolvedPath3.pathname, end: true });
  return (
    <nav className="nav">
      <span className="big-title">Vacation Destination</span>
      <ul>
        <Link title="Home Page" to="/">
          {isActive3 ? (
            <FaHome color="white" fontSize="25px" />
          ) : (
            <FaHome color="#f5c6c6" fontSize="25px" />
          )}
        </Link>
        <Link title="Destination" to="/Destination">
          {isActive ? (
            <FaStar color="white" fontSize="25px" />
          ) : (
            <FaStar color="#f5c6c6" fontSize="25px" />
          )}
        </Link>
        <Link title="Your Favourites" to="/MyList">
          {isActive2 ? (
            <FaHeart color="white" fontSize="25px" />
          ) : (
            <FaHeart color="#f5c6c6" fontSize="25px" />
          )}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
