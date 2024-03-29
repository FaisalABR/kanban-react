import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import KanbanCard from "./KanbanCard";
import AddCard from "./AddCard";
import DropComponent from "./DropComponent";
import StatusBar from "./StatusBar";
import PropTypes from "prop-types";

import ModalTask from "./ModalTask";
import { useKanban } from "../context/useKanban";

const Progress = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const { cards } = useKanban();
  const { status, card, id } = data;

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div className="w-[250px] ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="uppercase text-navy font-semibold dark:text-violet-kanban">
            {status}
          </h3>
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
              className="w-full rounded-md bg-blue-50 dark:bg-gray-800  p-2 "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {card.map((item, i) => {
                const data = cards[item];
                return (
                  <KanbanCard
                    key={data.id}
                    data={data}
                    progressId={id}
                    index={i}
                  />
                );
              })}
              {provided.placeholder}
              <AddCard handleClick={handleOpen} title="Add Card" />
            </div>
          );
        }}
      </DropComponent>
      {openModal && <ModalTask setOpenModal={setOpenModal} progressId={id} />}
    </div>
  );
};

Progress.propTypes = {
  data: PropTypes.object,
};

export default Progress;
