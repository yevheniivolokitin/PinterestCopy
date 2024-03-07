import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
   return (
      <div className="w-screen h-screen flex justify-center ">
         <form
            onSubmit={(e) => e.preventDefault()}
            className="w-1/4 h-60 flex justify-center mt-36 items-center flex-col gap-4"
         >
            <h1 className="text-lg text-white text-center">Авторизация</h1>
            <label htmlFor="" className="text-xl text-gray-400">
               Username:
               <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-8 mt-1 text-black rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
               />
            </label>
            <label htmlFor="" className="text-xl text-gray-400">
               Password:
               <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-8 mt-1 text-black rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
               />
            </label>

            <div>
               <button className=" bg-gray-600 text-xs text-white rounded-lg px-4 py-2 text-center w-20">
                  Войти
               </button>
               <Link
                  to={"/register"}
                  className="text-xs text-white rounded-sm px-4 py-2 text-center w-20"
               >
                  Регистрация
               </Link>
            </div>
         </form>
      </div>
   );
};

export default LoginPage;
