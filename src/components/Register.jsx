import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="mx-auto w-1/3 mt-4 mb-10">
      <h1 className="text-center text-2xl font-bold my-4">Please Register</h1>
      <div>
        <form onSubmit={handleRegister}>
          <div>
            <p className="text-xl">Name</p>
            <input placeholder="Enter Your Name" type="text" name="name" />
          </div>
          <div>
            <p>Email</p>
            <input placeholder="Enter Your Email" type="email" name="email" />
          </div>
          <div>
            <p>Password</p>
            <input
              placeholder="Enter Your Password"
              type="password"
              name="password"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>

        <p>
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </p>
        <p className="text-error"></p>
      </div>
    </div>
  );
};

export default Register;
