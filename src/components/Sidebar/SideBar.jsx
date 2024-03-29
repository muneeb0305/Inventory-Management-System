import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Sidebar } from "../../features/App/AppSlice";
const SideBar = ({ children, Menus }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const [selectedMenu, setSelectedMenu] = useState(Menus[0]);
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  const toggle = useSelector(state=> state.appState.darkMode)

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-44" : "w-16 "
          } ${toggle?'bg-dark10':'bg-blue-800 '} p-3 left-0 top-0 min-h-screen pt-8 relative duration-300`}
      >
        <div className="fixed" >
          <div className={`duration-300 absolute cursor-pointer ${open ? '-right-5' : 'right-1'} top-0 w-7 ${toggle?'text-dark7 ':'text-white'}
            z-20 ${!open}`}
            onClick={() => {
              dispatch(Sidebar())
              setOpen(!open)
            }}>
            {open ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            }

          </div>
          <ul className="pt-11">
            {Menus.map((Menu, index) => (
              <NavLink to={Menu.path} key={index} onClick={() => handleMenuClick(Menu)}>
                <li
                  className={`flex rounded-md p-2 cursor-pointer ${toggle?'hover:bg-dark1  text-dark7':'hover:bg-light-white text-white'}  text-sm items-center gap-x-4 
                  ${Menu.gap ? 'mt-9' : 'mt-2'} ${Menu === selectedMenu ? toggle?'bg-dark1 text-dark7':"bg-light-white" : ''}`}
                >
                  <p className={`${toggle?'text-dark7 ':'text-white'}  text-lg`}>{Menu.icon}</p>
                  <span className={`${!open && "hidden"} origin-left duration-300`} >
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
