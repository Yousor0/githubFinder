import { FaGit, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ title = "Github Finder" }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-between items-center px-2">
        {/* Left side */}
        <div className="flex items-center">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>

        {/* Right side */}
        <div className="flex space-x-2">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
