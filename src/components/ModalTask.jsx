import { useState } from "react";
import { addCard } from "../context/kanbanAction";
import { useKanban } from "../context/useKanban";
import PropTypes from "prop-types";
import Button, { SecondaryButton } from "./Button";

const ModalTask = ({ setOpenModal, progressId }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    priority: "low",
    type: "design",
  });
  const { dispatch } = useKanban();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(progressId, task));
    setTask({
      title: "",
      description: "",
      date: "",
      priority: "",
      type: "",
    });
    setOpenModal(false);
  };

  return (
    <div className="md:ml-56 z-40 fixed top-0 left-0 right-0 bottom-0 h-full bg-black/50 flex justify-center items-center">
      <div className="md:w-6/12 w-11/12 bg-white dark:bg-[#212121] dark:shadow-sm dark:shadow-white rounded-md px-4 py-2 ">
        <h2 className="text-2xl font-bold text-navy dark:text-violet-kanban my-2">
          Add Task
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            <label htmlFor="title" className="text-violet-kanban font-semibold">
              Title
            </label>
            <input
              type="text"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              name="title"
              placeholder="Add your title task..."
              className="w-full dark:bg-gray-700 dark:text-white rounded-md border-2 mt-2 p-1 outline-1 outline-violet-kanban"
              required
            />
          </div>
          <div className="flex flex-col my-2">
            <label
              htmlFor="Description"
              className="text-violet-kanban font-semibold"
            >
              Description
            </label>
            <textarea
              name="description"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              placeholder="Add your description task..."
              className="w-full dark:bg-gray-700 dark:text-white max-h-[150px] min-h-[80px] rounded-md border-2 mt-2 p-1 outline-1 outline-violet-kanban"
              required
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="date" className="text-violet-kanban font-semibold">
              Date
            </label>
            <input
              type="date"
              value={task.date}
              onChange={(e) => setTask({ ...task, date: e.target.value })}
              name="date"
              placeholder="Add your date task..."
              className="w-full dark:bg-gray-700 dark:text-white rounded-md border-2 mt-2 p-1 outline-1 outline-violet-kanban"
              required
            />
          </div>
          <div className="flex flex-col my-2">
            <label
              htmlFor="priority"
              className="text-violet-kanban font-semibold"
            >
              Priority
            </label>
            <select
              className="w-full dark:bg-gray-700 dark:text-white rounded-md border-2 mt-2 p-1 outline-1 outline-violet-kanban"
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              required
            >
              <option value="low" className="font-semibold text-gray-500">
                Low
              </option>
              <option value="mid" className="font-semibold text-lime-500">
                Mid
              </option>
              <option value="high" className="font-semibold text-red-500">
                High
              </option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="type" className="text-violet-kanban font-semibold">
              Type
            </label>
            <select
              defaultValue={task.type}
              className="w-full dark:bg-gray-700 dark:text-white rounded-md border-2 mt-2 p-1 outline-1 outline-violet-kanban"
              onChange={(e) => setTask({ ...task, type: e.target.value })}
              required
            >
              <option value="design" className="font-semibold text-gray-500">
                Design
              </option>
              <option value="research" className="font-semibold text-lime-500">
                Research
              </option>
              <option value="dev" className="font-semibold text-red-500">
                Dev
              </option>
              <option value="content" className="font-semibold text-red-500">
                Content
              </option>
              <option value="planning" className="font-semibold text-red-500">
                Planning
              </option>
            </select>
          </div>
          <div className="flex gap-3">
            <Button text="Submit" handleClick={handleSubmit} />
            <SecondaryButton
              text="Cancel"
              handleClick={() => setOpenModal(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

ModalTask.propTypes = {
  setOpenModal: PropTypes.func,
  projectId: PropTypes.string,
  progressId: PropTypes.string,
};

export default ModalTask;
