import { BsPlusSquareFill } from "react-icons/bs";
import { useKanban } from "../context/useKanban";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { state } = useKanban();

  return (
    <div className=" basis-48 flex justify-between">
      <div className="flex flex-col px-2 py-3">
        {/* Head */}
        <div className="flex gap-2 items-center">
          <div className="size-16 bg-violet-kanban rounded-md"></div>
          <div className="text-left">
            <p className="font-semibold text-navy">Faisal</p>
            <p className="font-normal text-gray-400 text-sm">Workspace</p>
          </div>
        </div>
        {/* Search */}
        <div className=" my-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-blue-100 rounded-md p-1 outline-none"
          />
        </div>
        {/* Projects */}
        <div className="my-3">
          <div className="flex justify-between items-center">
            <p className="text-violet-kanban">Projects</p>
            <BsPlusSquareFill
              size={25}
              className="text-violet-kanban cursor-pointer"
            />
          </div>
          <div className="flex flex-col my-2">
            {state.map((item) => (
              <NavLink
                to={`/projects/${item.id}`}
                key={item.id}
                className={({ isActive }) =>
                  isActive
                    ? "block text-sm font-semibold text-navy px-2 py-1 bg-blue-50 rounded-md"
                    : "block text-sm font-semibold text-navy px-2 py-1  rounded-md"
                }
              >
                {item.projectName}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-400/50 h-full"></div>
    </div>
  );
};

export default Sidebar;
