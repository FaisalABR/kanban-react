import { useState } from "react";
import cx from "classnames";
import { BiCalendar } from "react-icons/bi";
import { Draggable } from "react-beautiful-dnd";
import Type from "./Type";
import Priority from "./Priority";
import PropTypes from "prop-types";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useKanban } from "../context/useKanban";
import { deleteCard } from "../context/kanbanAction";

const KanbanCard = ({ data, index, progressId }) => {
  const { title, description, date, priority, type, subtask, id } = data;
  const { dispatch } = useKanban();
  const [openDots, setOpenDots] = useState(false);

  const dotsClass = cx({
    "text-navy cursor-pointer transition-all p-1": true,
    "bg-blue-100 rounded-full": openDots === true,
  });

  const handleDelete = () => {
    dispatch(deleteCard(progressId, id, index));
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="w-full bg-white rounded-md shadow-md p-2 my-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center justify-between relative">
            <Type type={type} />
            <div className={dotsClass} onClick={() => setOpenDots(!openDots)}>
              <BsThreeDots />
            </div>
            {openDots && (
              <div className="absolute w-5/12 flex items-start flex-col bg-white shadow-md right-0 top-7 p-2 rounded-md z-40">
                <span className="w-full text-sm text-navy cursor-pointer hover:bg-blue-100 p-1 rounded-sm">
                  Edit
                </span>
                <span
                  className="w-full text-sm text-navy cursor-pointer hover:bg-blue-100 p-1 rounded-sm"
                  onClick={handleDelete}
                >
                  Delete
                </span>
              </div>
            )}
          </div>
          <h4 className="font-semibold my-2 text-navy ">{title}</h4>
          <p className="text-sm text-gray-400 my-3">{description}</p>
          {/* Progress */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center text-navy ">
              <p className="text-sm">Progress</p>
              <span className="text-sm">4/{subtask.length}</span>
            </div>
            <div className="my-2 relative">
              <div className="w-full h-2 bg-gray-400/50 rounded-md"></div>
              <div className="w-4/12 transition-all h-2 bg-red-500 rounded-md absolute top-0"></div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2">
              <span className="flex text-sm items-center gap-1 text-gray-400 capitalize">
                <BiCalendar size={20} />
                {date}
              </span>
              <Priority priority={priority} />
            </div>
            <Link to={`/cards/${id}`}>
              <button className="text-sm rounded-md border-[1px] border-violet-kanban text-violet-kanban px-1">
                Details
              </button>
            </Link>
          </div>
        </div>
      )}
    </Draggable>
  );
};

KanbanCard.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  progressId: PropTypes.string,
};

export default KanbanCard;
