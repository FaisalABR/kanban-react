import { useState } from "react";
import cx from "classnames";
import { BiCalendar } from "react-icons/bi";
import { Draggable } from "react-beautiful-dnd";
import Type from "./Type";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useKanban } from "../context/useKanban";
import { deleteCard } from "../context/kanbanAction";
import { SecondaryButton } from "./Button";

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
          className="w-full animate-card-out bg-white rounded-md shadow-md p-2 my-2 relative "
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
          {subtask.length === 0 ? <></> : <ProgressBar subtask={subtask} />}
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
              <SecondaryButton text="Details" />
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
