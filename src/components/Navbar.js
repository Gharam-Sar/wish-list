import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  const resolvedPath = useResolvedPath("/");
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const resolvedPath2 = useResolvedPath("/MyList");
  const isActive2 = useMatch({ path: resolvedPath2.pathname, end: true });
  return (
    <nav className="nav">
      <div> </div>
      <span className="big-title">Wish List</span>
      <ul>
        <Link title="Home Page" to="/">
          {isActive ? (
            <FaStar color="white" fontSize="1.5em" />
          ) : (
            <FaRegStar color="white" fontSize="1.5em" />
          )}
        </Link>
        <Link title="Your Favourites" to="/MyList">
          {isActive2 ? (
            <FaHeart color="white" fontSize="1.5em" />
          ) : (
            <FaRegHeart color="white" fontSize="1.5em" />
          )}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
