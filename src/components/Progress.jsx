import { BsThreeDots } from "react-icons/bs";
import KanbanCard from "./KanbanCard";
import AddCard from "./AddCard";
import DropComponent from "./DropComponent";
import StatusBar from "./StatusBar";
import PropTypes from "prop-types";

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

Progress.propTypes = {
  data: PropTypes.object,
};

export default Progress;