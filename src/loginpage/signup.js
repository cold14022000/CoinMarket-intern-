import React from "react";
<<<<<<< Updated upstream

export default function SignupPage() {
    return(
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
=======
import { methodCall } from "../utils/request";
import { useContext, useEffect, useRef } from "react";
import authContext from "../utils/auth/authContext";
import Input from "./Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

export default function SignupPage() {
  const usernameRef = useRef();
  const PasswordRef = useRef();
  const nameRef = useRef();
  var param = [];
  const { setAuthenticated, setToken, setUser } = useContext(authContext);

  useEffect(() => {}, [nameRef, usernameRef, PasswordRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = new FormData(e.target);
    // console.log(Object.values(Object.fromEntries(user.entries())))
    param = Object.values(Object.fromEntries(user.entries()));
    Register(param);
  };

  const Register = async (param) => {
    const data = await methodCall({
      method: "auth_register",
      params: param,
    });
    console.log(data);
    alert(data.message);
    if (data.success) {
      navigate("/login");
    }
  };
  const navigate = useNavigate();

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      
      <form onSubmit={handleSubmit}
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <Input
            name="name"
            refer={nameRef}
            placeholder="Full Name"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
          />
          <Input
            name="username"
            refer={usernameRef}
            placeholder="Username   "
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
          />
          <Input
            name="password"
            refer={PasswordRef}
            placeholder="Password..."
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green text-blue shadow-md  hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </form>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <a
            class="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}
