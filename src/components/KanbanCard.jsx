import { BiCalendar } from "react-icons/bi";
import { Draggable } from "react-beautiful-dnd";
import Type from "./Type";
import Priority from "./Priority";
import PropTypes from "prop-types";

const KanbanCard = ({ data, index }) => {
  const { title, description, date, priority, type, id } = data;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="w-full bg-white rounded-md shadow-md p-2 my-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>
  );
};

KanbanCard.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default KanbanCard;
