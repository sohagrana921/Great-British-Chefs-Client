import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle, handleGithubSignIn } =
    useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithub = () => {
    handleGithubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="mx-auto w-1/3 mt-4 mb-8">
        <h1 className="text-center text-2xl font-bold my-4">Please Login</h1>
        <p className="text-error">{error}</p>
      </div>
      <div className="mx-auto w-1/3">
        <form onSubmit={handleLogin}>
          <div>
            <p className="my-1 font-semibold">Email</p>
            <input
              className="md:w-96 rounded-lg bg-slate-50"
              placeholder="Enter Your Email"
              type="email"
              name="email"
            />
          </div>
          <div>
            <p className="my-1 font-semibold">Password</p>
            <input
              className="md:w-96 rounded-lg bg-slate-50"
              placeholder="Enter Your Password"
              type="password"
              name="password"
            />
          </div>
          <Button className="mt-6 w-full" type="submit">
            Submit
          </Button>
        </form>
        <p>
          <small>
            New to Great British Chef?
            <Link className="text-blue-700 font-bold" to="/register">
              Register
            </Link>
          </small>
        </p>
      </div>
      <div className="border-blue-700 border-solid border rounded pt-2 pb-4 mt-4 mb-20 w-2/5 mx-auto">
        <p className="text-center my-2 text-lg font-semibold text-blue-700">
          Or Login With
        </p>
        <div className="d-flex justify-center">
          <div className="flex justify-center items-center gap-2">
            <div>
              <Button
                onClick={handleGoogleLogIn}
                outline={true}
                gradientDuoTone="redToYellow"
              >
                <span className="text-blue-500 flex items-center">
                  <FaGoogle className="mr-2 h-3 w-3 "></FaGoogle>
                  Login with Google
                </span>
              </Button>
            </div>
            <div>
              <Button
                onClick={handleGithub}
                outline={true}
                gradientDuoTone="redToYellow"
              >
                <span className="text-blue-500 flex items-center">
                  <FaGithub className="mr-2 h-3 w-3 "></FaGithub>
                  Login with Github
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
