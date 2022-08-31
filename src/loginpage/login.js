import React from "react";
import { methodCall } from "../utils/request";
import { useContext, useEffect, useRef } from "react";
import authContext from "../utils/auth/authContext";

export default function Login() {
  
  // const login = async (user = 'dung.nguyen', pass = 'hello1') => {
  //   console.log('login');
  //   const data = await methodCall({
  //     method: "auth_login",
  //     params: ["dung.nguyen", "hello1"],
  //   });
  //   console.log('dung',data)
  // };
  const usernameRef = useRef();
  const PasswordRef = useRef();
  var param = []
  const { setAuthenticated,setToken,setUser } = useContext(authContext);
  useEffect(() => {}, [usernameRef, PasswordRef]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = new FormData(e.target)
    // console.log(Object.values(Object.fromEntries(user.entries())))
    param = Object.values(Object.fromEntries(user.entries()));
    // Login(param)
    console.log('user',user)
  }
  
  const Login = async (param) => {
    const data = await methodCall({
      method: "auth_login",
      params: param,
    });
    console.log(data)
    alert(data.message)
    if(data.success){
      setAuthenticated(true)
      setToken(data.result.token)
      setUser(data.result.user)
    }}
  return (
    <section class="h-screen">
      <div class="container px-6 py-12 h-2/3">
        <div class="flex justify-center items-center flex-wrap h-full w-2/3 g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
          
            <form>
              {/* <!-- Email input --> */}
              <div class="mb-6">
                <input
                  type="text"
                  refer={usernameRef}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="mb-6">
                <input
                  type="password"
                  refer={PasswordRef}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div class="flex justify-between items-center mb-6">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    checked
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>

              {/* <!-- Submit button --> */}
       
              <button
                onClick={()=>handleSubmit}
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Log in
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
}
