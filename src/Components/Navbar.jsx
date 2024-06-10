import { Link, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
// import logo from "../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLink = (
    <div className="lg:flex lg:justify-center lg:items-center">
      <li>
        <Link
          className="font-poppins text-white font-thin text-xl hover:font-bold"
          to="/"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins text-white font-thin text-xl hover:font-bold"
          to="/community"
        >
          Featured Artists
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins text-white font-thin text-xl hover:font-bold"
          to="/blogs"
        >
         Contacts
        </Link>
      </li>
    </div>
  );

  return (
    <div className="w-full">
      <div className={`navbar absolute top-0 left-0 w-full bg-transparent z-50  mx-auto`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          {/* <img className="h-full object-cover" src={logo} alt="" /> */}
          <h1 className="text-white font-extrabold text-3xl ml-4">Distributor</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-info btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-auto"
              >
                <li>
                  <button className="btn btn-sm text-white btn-ghost pointer-events-none">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm text-white btn-ghost pointer-events-none">
                    {user?.email}
                  </button>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-white btn btn-ghost btn-sm"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-sm text-white btn-ghost"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-6 py-2 font-medium btn btn-neutral text-white mr-4">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
