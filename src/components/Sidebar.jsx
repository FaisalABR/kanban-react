import { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { useKanban } from "../context/useKanban";
import { NavLink } from "react-router-dom";
import { addProject } from "../context/kanbanAction";

const Sidebar = () => {
  const { projects, dispatch } = useKanban();
  const getProject = Object.keys(projects);
  const [project, setProject] = useState(false);
  const [inputProject, setInputProject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(inputProject));
    setInputProject("");
    setProject(false);
  };

  return (
    <div className="h-dvh hidden md:flex fixed bg-white basis-48  justify-between z-50 overflow-y-auto">
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
              className="text-violet-kanban cursor-pointer hover:text-violet-500 transition-all"
              onClick={() => setProject(true)}
            />
          </div>
          <div className="flex flex-col my-4">
            {getProject.map((item) => {
              const data = projects[item];
              return (
                <NavLink
                  to={`/projects/${data.id}`}
                  key={data.id}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-sm font-semibold text-navy px-2 py-1 bg-blue-50 rounded-md"
                      : "block text-sm font-semibold text-navy px-2 py-1  rounded-md"
                  }
                >
                  {data.projectName}
                </NavLink>
              );
            })}
            {project && (
              <form onSubmit={handleSubmit} className="flex flex-col text-sm">
                <input
                  type="text"
                  placeholder="Add your project.."
                  value={inputProject}
                  className="bg-blue-100 rounded-md px-2 py-1 outline-none my-2"
                  onChange={(e) => setInputProject(e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="grow bg-violet-kanban rounded-md text-white font-semibold"
                  >
                    Submit
                  </button>
                  <button
                    className="grow rounded-md border-[1px] border-violet-kanban text-violet-kanban"
                    onClick={() => setProject(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-400/50 min-h-svh"></div>
    </div>
  );
};

export default Sidebar;
