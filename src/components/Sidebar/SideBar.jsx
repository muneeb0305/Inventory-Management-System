import { useState } from "react";
import logo from '../../assets/logo.png'
import control from '../../assets/control.png'
import { NavLink } from 'react-router-dom';
const SideBar = ({ children, Menus }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-blue-900 p-5 min-h-screen pt-8 relative duration-300`}
      >
        <div>
          <img
            src={control} alt=""
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center justify-center">
          <img
            src={logo} alt=""
            className={`cursor-pointer duration-500 w-40  ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
          <ul className="pt-6 ">
            {Menus.map((Menu, index) => (
              <NavLink to={Menu.path} key={index}  >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer  hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}`}
                >
                  <p className="text-white text-lg">{Menu.icon}</p>
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <div className=" flex-1">
        <main className='min-h-screen'>{children}</main>
      </div>
    </div>
  );
};
export default SideBar;
