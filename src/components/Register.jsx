import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;
    setError("");
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    } else if (!(name && email && password && confirm && photo)) {
      setError("Please Fill all the input field");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/login");
        toast.success("User Successfully Created");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="mx-auto w-1/3 mt-4 mb-10">
      <h1 className="text-center text-2xl font-bold my-4">Please Register</h1>
      <p className="text-error">{error}</p>
      <div className="mx-auto ">
        <form onSubmit={handleRegister}>
          <div>
            <p className="my-1 font-semibold">Name</p>
            <input
              className="md:w-96 rounded-lg bg-slate-50"
              placeholder="Enter Your Name"
              type="text"
              name="name"
            />
          </div>
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
          <div>
            <p className="my-1 font-semibold">Confirm Password</p>
            <input
              className="md:w-96 rounded-lg bg-slate-50"
              placeholder="Confirm Password"
              type="password"
              name="confirm"
            />
          </div>
          <div>
            <p className="my-1 font-semibold">Photo URL</p>
            <input
              className="md:w-96 rounded-lg bg-slate-50"
              placeholder="Photo url"
              type="text"
              name="photo"
            />
          </div>

          <Button className="mt-6 w-full" type="submit">
            Submit
          </Button>
          <Toaster />
        </form>

        <p>
          <small>
            Already have an account?
            <Link className="text-blue-700 font-bold" to="/login">
              Login
            </Link>
          </small>
        </p>
        <p className="text-error"></p>
      </div>
    </div>
  );
};

export default Register;
