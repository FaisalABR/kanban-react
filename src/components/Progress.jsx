import { BsThreeDots } from "react-icons/bs";
import KanbanCard from "./KanbanCard";
import AddCard from "./AddCard";

import DropComponent from "./DropComponent";

const StatusBar = ({ progress }) => {
  if (progress === "in work") {
    return <div className="w-full h-px bg-blue-600 my-3"></div>;
  } else if (progress === "in progress") {
    return <div className="w-full h-px bg-red-600 my-3"></div>;
  } else if (progress === "completed") {
    return <div className="w-full h-px bg-green-600 my-3"></div>;
  } else {
    return <div className="w-full h-px bg-black my-3"></div>;
  }
};

const Progress = ({ data }) => {
  const { status, card, id } = data;
  return (
    <div className="w-[250px] ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="uppercase text-navy font-semibold">{status}</h3>
          <span className="block text-gray-400 px-3 border-2 rounded-xl">
            {card.length}
          </span>
        </div>
        <BsThreeDots size={20} className="text-gray-400" />
      </div>
      <StatusBar progress={status} />

      <DropComponent droppableId={id}>
        {(provided) => {
          return (
            <div
              className="w-full rounded-md bg-blue-50  p-2"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {card.map((item, i) => (
                <KanbanCard key={item.id} data={item} index={i} />
              ))}
              {provided.placeholder}
              <AddCard />
            </div>
          );
        }}
      </DropComponent>
    </div>
  );
};

export default Progress;
