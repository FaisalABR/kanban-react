import { BiCalendar } from "react-icons/bi";

const Priority = ({ priority }) => {
  if (priority === "low") {
    return (
      <span className="px-2 text-sm rounded-lg bg-gray-50 font-semibold text-gray-500 capitalize">
        {priority}
      </span>
    );
  } else if (priority === "mid") {
    return (
      <span className="px-2 text-sm rounded-lg bg-lime-50 font-semibold text-lime-500 capitalize">
        {priority}
      </span>
    );
  } else {
    return (
      <span className="px-2 text-sm rounded-lg bg-red-50 font-semibold text-red-500 capitalize">
        {priority}
      </span>
    );
  }
};

const Type = ({ type }) => {
  if (type === "dev") {
    return (
      <span className="bg-orange-500 px-2 text-sm py-1 rounded-2xl font-semibold text-white-kanban capitalize">
        {type}
      </span>
    );
  } else if (type === "planning") {
    return (
      <span className="bg-violet-500 px-2 text-sm py-1 rounded-2xl font-semibold text-white-kanban capitalize">
        {type}
      </span>
    );
  } else if (type === "research") {
    return (
      <span className="bg-violet-kanban px-2 text-sm py-1 rounded-2xl font-semibold text-white-kanban capitalize">
        {type}
      </span>
    );
  } else if (type === "design") {
    return (
      <span className="bg-blue-500 px-2 text-sm py-1 rounded-2xl font-semibold text-white-kanban capitalize">
        {type}
      </span>
    );
  } else {
    return (
      <span className="bg-pink-500 px-2 text-sm py-1 rounded-2xl font-semibold text-white-kanban capitalize">
        {type}
      </span>
    );
  }
};

const KanbanCard = ({ data }) => {
  const { title, description, date, priority, type } = data;
  return (
    <div className="w-full bg-white rounded-md shadow-md p-2 my-2">
      <Type type={type} />
      <h4 className="font-semibold my-2 text-navy ">{title}</h4>
      <p className="text-sm text-gray-400 my-3">{description}</p>
      {/* Progress */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center text-navy ">
          <p className="text-sm">Progress</p>
          <span className="text-sm">4/10</span>
        </div>
        <div className="my-2 relative">
          <div className="w-full h-2 bg-gray-400/50 rounded-md"></div>
          <div className="w-4/12 transition-all h-2 bg-red-500 rounded-md absolute top-0"></div>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center gap-3 my-3">
        <span className="flex text-sm items-center gap-1 text-gray-400 capitalize">
          <BiCalendar size={20} />
          {date}
        </span>
        <Priority priority={priority} />
      </div>
    </div>
  );
};

export default KanbanCard;
