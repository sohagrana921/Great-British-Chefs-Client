import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div>
      <div className="mx-auto w-1/3 mt-4 mb-8">
        <h1 className="text-center text-2xl font-bold my-4">Please Login</h1>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="Enter Your Email"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              placeholder="Enter Your Password"
              required={true}
              shadow={true}
            />
          </div>

          <Button type="submit">Login</Button>
          <p className="text-secondary">
            Don't Have an Account?{" "}
            <span className="text-blue-600">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </form>
      </div>
      <div className="border-blue-700 border-solid border rounded pt-2 pb-4 mt-4 mb-20 w-2/5 mx-auto">
        <p className="text-center my-2 text-lg font-semibold text-blue-700">
          Or Login With
        </p>
        <div className="d-flex justify-center">
          <div className="flex justify-center items-center gap-2">
            <div>
              <Button outline={true} gradientDuoTone="redToYellow">
                <span className="text-blue-500 flex items-center">
                  <FaGoogle className="mr-2 h-3 w-3 "></FaGoogle>
                  Login with Google
                </span>
              </Button>
            </div>
            <div>
              <Button outline={true} gradientDuoTone="redToYellow">
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
