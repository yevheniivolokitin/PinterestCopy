import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   const isAuth = false;
   const authStyles = {
      false: { display: "none" },
      true: { display: "flex" },
   };
   const styleToApply = isAuth ? authStyles.true : authStyles.false;
   const activeStyles = {
      color: "white",
   };
   return (
      <div className="flex py-4 justify-between items-center w-10/12">
         <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-sm text-white rounded-sm">
            e
         </span>

         <ul className="flex gap-8" style={styleToApply}>
            <li>
               <NavLink
                  to={"/"}
                  href="/"
                  className="text-lg text-gray-400 hover:text-white"
                  style={({ isActive }) =>
                     isActive ? activeStyles : undefined
                  }
               >
                  Главная
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={"/new"}
                  href="/"
                  className="text-lg text-gray-400 hover:text-white"
                  style={({ isActive }) =>
                     isActive ? activeStyles : undefined
                  }
               >
                  Новый пост
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={"/posts"}
                  href="/"
                  className="text-lg text-gray-400 hover:text-white"
                  style={({ isActive }) =>
                     isActive ? activeStyles : undefined
                  }
               >
                  Посты
               </NavLink>
            </li>
         </ul>
         <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
            {isAuth ? <button>Выйти</button> : <Link to={"/login"}>Войти</Link>}
         </div>
      </div>
   );
};

export default Navbar;
