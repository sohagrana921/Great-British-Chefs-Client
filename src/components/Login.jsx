import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

const Login = () => {
  return (
    <div className="mx-auto w-1/3 mt-4 mb-10">
      <h1 className="text-center text-2xl font-semibold my-4">
        Please Register
      </h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter Your Name"
            required={true}
            shadow={true}
          />
        </div>
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
        <div>
          <div className="mb-2 block">
            <Label value="Photo URL" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter Your Photo URL"
            required={true}
            shadow={true}
          />
        </div>

        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Login;
