import { MdDragIndicator } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import PropTypes from "prop-types";
import cx from "classnames";
import { Draggable } from "react-beautiful-dnd";
import { useKanban } from "../context/useKanban";
import { completeSubtask, deleteSubtask } from "../context/kanbanAction";
import { useParams } from "react-router-dom";
import Button, { SecondaryButton } from "./Button";

const Subtask = ({ id, content, isDone, index }) => {
  const { dispatch } = useKanban();
  const { cardId } = useParams();
  const contentClass = cx({
    "line-through text-gray-400 dark:text-yellow-100": isDone === true,
  });

  const handleDone = () => {
    const condition = !isDone;
    dispatch(completeSubtask(id, condition));
  };

  const handleDelete = () => {
    dispatch(deleteSubtask(cardId, id, index));
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="w-full flex gap-2 justify-between  items-center px-2 py-1 rounded-md border-2 border-gray-200 my-2"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center gap-3 ">
            <div {...provided.dragHandleProps}>
              <MdDragIndicator size={25} className="dark:text-white" />
            </div>
            <p className={contentClass}>{content}</p>
          </div>
          <div className="flex items-center gap-3">
            <GoTrash
              size={20}
              className="text-red-400"
              onClick={handleDelete}
            />
            {isDone ? (
              <SecondaryButton text="Undone" handleClick={handleDone} />
            ) : (
              <Button text="Done" handleClick={handleDone} />
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
