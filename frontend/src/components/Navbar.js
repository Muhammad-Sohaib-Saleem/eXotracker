import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="primary-bg navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          <div className="fs-2 fw-semibold">
            e<span className="fs-1 fw-bold primary-text">X</span>otracker
          </div>
        </Link>
        <nav>
          {user && (
            <div>
              <span className="text-white">{user.Username}</span>
              <button
                className="btn primary-btn btn-lg text-white"
                onClick={handleClick}
              >
                Log out
              </button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login" className="btn btn-lg primary-btn text-white">
                Login
              </Link>
              <Link to="/signup" className="btn btn-lg primary-btn text-white">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
