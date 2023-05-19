import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Sidebar } from "../../Redux-Store/actions";
const SideBar = ({ children, Menus }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  return (
    <div className="flex">
      <div
        className={` ${open ? "w-52" : "w-16 "
          } bg-blue-800 p-3 left-0 top-0 min-h-screen pt-8 relative duration-300`}
      >
        <div className="fixed" >
          <div className={`duration-300 absolute cursor-pointer ${open ? '-right-10' : 'right-1'} top-0 w-7 text-white
            z-20 ${!open}`}
            onClick={() => {
              dispatch(Sidebar())
              setOpen(!open)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth={1.9} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

          </div>
          <ul className="pt-11">
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
