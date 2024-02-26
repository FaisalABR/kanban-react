import { MdDragIndicator } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import PropTypes from "prop-types";
import cx from "classnames";
import { Draggable } from "react-beautiful-dnd";
import { useKanban } from "../context/useKanban";
import { completeSubtask } from "../context/kanbanAction";

const Subtask = ({ id, content, isDone, index }) => {
  const { dispatch } = useKanban();
  const contentClass = cx({
    "line-through text-gray-400": isDone === true,
  });

  const handleDone = () => {
    const condition = !isDone;
    dispatch(completeSubtask(id, condition));
  };

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
            {isDone ? (
              <button
                type="submit"
                className=" bg-violet-kanban rounded-md text-white font-semibold px-2"
                onClick={handleDone}
              >
                Undone
              </button>
            ) : (
              <button
                type="submit"
                className=" bg-violet-kanban rounded-md text-white font-semibold px-2"
                onClick={handleDone}
              >
                Done
              </button>
            )}
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
