import { IoHomeOutline } from "react-icons/io5";
import { TiClipboard } from "react-icons/ti";
import { GoPlus } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useKanban } from "../context/useKanban";
import { useState } from "react";
import ModalPhone from "./ModalPhone";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { projects } = useKanban();
  const getProject = Object.keys(projects);
  return (
    <div className="fixed md:hidden dark:bg-[#212121] dark:border-t-2 dark:border-violet-kanban bottom-0 bg-blue-50 h-[60px] w-full flex items-center justify-around">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-violet-kanban" : "text-gray-500"
        }
      >
        <div className="flex flex-col items-center">
          <IoHomeOutline size={25} />
          <span className="text-xs font-semibold">Home</span>
        </div>
      </NavLink>
      <div className="flex z-10 text-white -top-7 absolute w-[60px] h-[60px] rounded-full bg-violet-kanban shadow-md shadow-violet-kanban justify-center items-center">
        <GoPlus size={25} onClick={() => setOpenModal(!openModal)} />
      </div>
      <button onClick={() => setOpen(!open)}>
        <div className="flex flex-col items-center">
          <TiClipboard size={25} />
          <span className="text-xs font-semibold">Projects</span>
        </div>
      </button>
      {open && (
        <div className="w-6/12 z-20 h-52 rounded-md shadow-lg bg-blue-50 absolute right-5 -top-52 p-2 overflow-y-scroll">
          {getProject.map((item) => {
            const data = projects[item];
            return (
              <NavLink
                to={`/projects/${data.id}`}
                key={data.id}
                className="block text-sm font-semibold text-navy dark:text-white py-1 bg-blue-50 dark:bg-gray-700 rounded-md"
                onClick={() => setOpen(false)}
              >
                {data.projectName}
              </NavLink>
            );
          })}
        </div>
      )}
      {openModal && <ModalPhone setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Navbar;
