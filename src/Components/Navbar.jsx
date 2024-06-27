import { Link, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import logo from "../assets/images/Distrofy banner w tr.png";
import { FiSend } from "react-icons/fi";
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
          className="font-poppins text-white lg:font-thin lg:text-xl text-lg hover:font-bold"
          to="/"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins text-white lg:font-thin lg:text-xl text-lg hover:font-bold"
          to="/community"
        >
          Featured Artists
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins text-white lg:font-thin lg:text-xl text-lg hover:font-bold"
          to="/blogs"
        >
          Contacts
        </Link>
      </li>
    </div>
  );

  return (
    <div className="w-full">
      <div
        className={`navbar absolute top-0 left-0 w-full bg-transparent z-50  mx-auto`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-auto bg-gray-800 dark:bg-gray-800 text-black dark:text-white"
            >
              {navLink}
            </ul>
          </div>
          <img
            className="object-cover lg:w-60  lg:p-6 md:w-40 w-28"
            src={logo}
            alt=""
          />
          {/* <h1 className="text-white font-extrabold text-3xl ml-4">Distrofy</h1> */}
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-auto"
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
              <button
                className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 bg-white 
        text-black font-medium
        lg:mr-5
        lg:px-6
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-[#1E67C6]
    `}
              >
                <span>Login</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
