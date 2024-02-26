import { useParams } from "react-router-dom";
import { useKanban } from "../context/useKanban";
import Priority from "../components/Priority";
import Date from "../components/Date";
import Subtask from "../components/Subtask";
import { DragDropContext } from "react-beautiful-dnd";
import DropComponent from "../components/DropComponent";
import { addSubtask, reorderSubTask } from "../context/kanbanAction";
import Type from "../components/Type";
import AddCard from "../components/AddCard";
import { useState } from "react";

const CardDetail = () => {
  const [openInput, setOpenInput] = useState(false);
  const [inputSubtask, setInputSubtask] = useState("");
  const { cardId } = useParams();
  const { getCard, subtasks, dispatch } = useKanban();
  const card = getCard(cardId);

  const onDragEnd = (result) => {
    //TODO
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const cardIds = card;
    const newSubtaskId = Array.from(cardIds.subtask);

    newSubtaskId.splice(source.index, 1);
    newSubtaskId.splice(destination.index, 0, draggableId);

    dispatch(reorderSubTask(newSubtaskId, source.droppableId));
  };

  const handleOpen = () => {
    setOpenInput(!openInput);
  };

  const handleAddSubtask = () => {
    dispatch(addSubtask(inputSubtask, cardId));
    setInputSubtask("");
    setOpenInput(false);
  };

  return (
    <div className="w-full py-3 px-10 md:ml-56">
      <h2 className="md:text-2xl text-xl text-navy font-semibold">
        {card.title}
      </h2>
      <div className="flex flex-col  gap-3 my-2">
        <div className="flex items-center gap-2 my-1">
          <span className="text-violet-kanban font-semibold">Due date: </span>
          <Date date={card.date} />
        </div>
        <div className="flex items-center gap-2 my-1">
          <span className="text-violet-kanban font-semibold">Priority: </span>
          <Priority priority={card.priority} />
        </div>
        <div className="flex items-center gap-2 my-1">
          <span className="text-violet-kanban font-semibold">Type: </span>
          <Type type={card.type} />
        </div>
      </div>

      <div className="flex flex-col my-5">
        <h3 className="text-violet-kanban font-semibold">Task description:</h3>
        <p className="text-navy">{card.description}</p>
      </div>
      <div className="flex flex-col my-5">
        <h3 className="text-violet-kanban font-semibold my-2">Sub task:</h3>

        <DragDropContext onDragEnd={onDragEnd}>
          <DropComponent droppableId={card.id}>
            {(provided) => {
              return (
                <div
                  className="p-1 border-[1px] border-gray-400 rounded-md "
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {card.subtask.map((item, i) => {
                    const sub = subtasks[item];
                    return (
                      <Subtask
                        key={sub.id}
                        id={sub.id}
                        content={sub.content}
                        isDone={sub.isDone}
                        index={i}
                      />
                    );
                  })}
                  {provided.placeholder}
                  {openInput ? (
                    <div className="w-6/12 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Search"
                        className="bg-blue-100 rounded-md p-1 outline-none"
                        value={inputSubtask}
                        onChange={(e) => setInputSubtask(e.target.value)}
                      />
                      <div className="flex items-center gap-1">
                        <button
                          type="submit"
                          className=" bg-violet-kanban rounded-md text-white font-semibold px-2"
                          onClick={handleAddSubtask}
                        >
                          Submit
                        </button>
                        <button
                          type="submit"
                          className=" bg-violet-kanban rounded-md text-white font-semibold px-2"
                          onClick={handleOpen}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <AddCard handleClick={handleOpen} />
                  )}
                </div>
              );
            }}
          </DropComponent>
        </DragDropContext>
      </div>
    </div>
  );
};

export default CardDetail;
