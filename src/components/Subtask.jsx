import { MdDragIndicator } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import PropTypes from "prop-types";
import { useState } from "react";
import cx from "classnames";
import { Draggable } from "react-beautiful-dnd";

const Subtask = ({ id, content, isDone, index }) => {
  const [check, setCheck] = useState(false);
  console.log(check);

  const contentClass = cx({
    "line-through text-gray-400": isDone === check,
  });
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="w-6/12 flex gap-2 justify-between items-center px-2 py-1 rounded-md border-2 border-gray-200 my-2"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center gap-3 ">
            <div {...provided.dragHandleProps}>
              <MdDragIndicator size={25} />
            </div>
            <p className={contentClass}>{content}</p>
          </div>
          <div className="flex items-center gap-3">
            <GoTrash size={20} className="text-red-400" />
            <input
              type="checkbox"
              checked={isDone === check}
              value={check}
              onChange={(e) => setCheck(!e.target.value)}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

Subtask.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  isDone: PropTypes.bool,
  index: PropTypes.number,
};

export default Subtask;
