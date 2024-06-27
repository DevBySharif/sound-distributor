import loginLogo from "../images/DistrofyLogoBlackLogin.png";
import useAuth from "../../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn } = useAuth();
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginError("");

    signIn(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className="lg:flex h-screen bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 lg:flex-wrap">
      {/* Left column container */}
      <div className="px-4 md:px-0 lg:w-6/12 flex items-center justify-center">
        <div className="md:mx-6 md:p-12 w-full">
          {/* Logo */}
          <div className="text-center">
            <img className="mx-auto w-48" src={loginLogo} alt="logo" />
            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
              We are The Lotus Team
            </h4>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg w-full max-w-md p-8">
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-neutral-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-neutral-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    Login
                  </button>
                </div>
                {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right column container with background and description */}
      <div
        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
        style={{
          background:
            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
        }}
      >
        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
          <h4 className="mb-6 text-xl font-semibold">
            We are more than just a company
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
