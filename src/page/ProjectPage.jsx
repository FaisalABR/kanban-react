import { BsPersonAdd } from "react-icons/bs";
import Progress from "../components/Progress";
import { useKanban } from "../context/useKanban";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { moveBetween, reorderTask } from "../context/kanbanAction";
import { BiTrashAlt } from "react-icons/bi";
import ModalDelete from "../components/ModalDelete";
import { useState } from "react";
import Layout from "../components/Layout";

function ProjectPage() {
  const [openModal, setOpenModal] = useState(false);
  const { projectId } = useParams();
  const { projects, progress, dispatch } = useKanban();
  const fetchProgress = projects[projectId].progress;
  const onDragEnd = (result) => {
    //TODO
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = progress[source.droppableId];
    const finish = progress[destination.droppableId];

    if (start === finish) {
      const newTasks = Array.from(start.card);
      const taskDraggable = newTasks.find((item) => item === draggableId);

      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, taskDraggable);

      dispatch(reorderTask(newTasks, source.droppableId));
    } else {
      // Moving to another list
      const startTasks = Array.from(start.card);
      const taskDraggable = startTasks.find((item) => item === draggableId);
      startTasks.splice(source.index, 1);

      const finsihTasks = Array.from(finish.card);
      finsihTasks.splice(destination.index, 0, taskDraggable);

      dispatch(
        moveBetween(
          startTasks,
          finsihTasks,
          source.droppableId,
          destination.droppableId
        )
      );
    }
  };

  return (
    <Layout>
      <div className="md:basis-10/12  md:ml-56  py-2 overflow-y-auto">
        {/* Top */}
        <div className="px-3">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-lg md:text-xl lg:text-2xl text-navy font-semibold">
              {projects[projectId].projectName}
            </h2>
            <div className="flex gap-3 items-center text-gray-400">
              <BsPersonAdd size={20} className="cursor-pointer" />
              <BiTrashAlt
                size={20}
                className="cursor-pointer transition-all hover:text-red-400"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
          <div className="h-[0.5px] w-full bg-gray-400/50 my-4"></div>
          {/*  Progress */}
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="w-full flex gap-3 overflow-x-auto">
              {fetchProgress.map((item) => {
                const data = progress[item];
                return <Progress key={data.id} data={data} />;
              })}
            </div>
          </DragDropContext>
        </div>
        {openModal && (
          <ModalDelete
            projectName={projects[projectId].projectName}
            projectId={projectId}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </Layout>
  );
}

export default ProjectPage;
