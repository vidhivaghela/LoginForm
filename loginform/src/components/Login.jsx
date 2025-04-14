import React from "react";
import bg from "@/assets/bg.png";
import logo from "@/assets/logo.jpeg"

export const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-white flex-x=col items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
          <div >
            <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:out-none focus:ring-0 focus:text-white focus:border-blue peer" placeholder="" />
            <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
          </div>
          <div>
            <input type="password" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:out-none focus:ring-0 focus:text-white focus:border-blue peer" placeholder="" />
            <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
