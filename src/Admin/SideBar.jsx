import { useState } from "react";
// import logo from '../assets/company_logo.png'
import control from '../components/assets/control.png'
import { NavLink } from 'react-router-dom';
import { BuildingStorefrontIcon, ChartBarIcon, ClipboardDocumentIcon, HomeIcon } from "@heroicons/react/24/solid";
const SideBar = ({children}) => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", icon:<HomeIcon className="w-6 h-6"/>, path:'/' },
    { title: "Order Details", icon: <ClipboardDocumentIcon className="w-6 h-6"/>, path:'/Order_Details' },
    { title: "Sale Details", icon: <ChartBarIcon className="w-6 h-6"/>, path:'/Sale_Details' },
    { title: "Inventory", icon: <BuildingStorefrontIcon className="w-6 h-6"/>, path:'/Inventory' },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-900 p-5 min-h-screen pt-8 relative duration-300`}
      >
        <div>
          
        
        <img
          src={control} alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* <div className="flex gap-x-4 items-center">
          <img
            src={logo} alt=""
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div> */}
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
