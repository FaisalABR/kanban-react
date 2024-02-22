import { BsThreeDots, BsPersonAdd } from "react-icons/bs";
import Progress from "../components/Progress";
import { useKanban } from "../context/useKanban";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { moveBetween, reorderTask } from "../context/kanbanAction";

function ProjectPage() {
  const { projectId } = useParams();
  const { projects, progress, dispatch } = useKanban();
  const fetchProgress = projects[projectId].progress;
  // const onDragEnd = (result) => {
  //   //TODO
  //   const { destination, source, draggableId } = result;

  //   if (!destination) return;

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   )
  //     return;

  //   const start = progress.find((item) => item.id === source.droppableId);
  //   const finish = progress.find((item) => item.id === destination.droppableId);

  //   if (start === finish) {
  //     const newTasks = Array.from(start.card);
  //     const taskDraggable = newTasks.find((item) => item.id === draggableId);
  //     newTasks.splice(source.index, 1);
  //     newTasks.splice(destination.index, 0, taskDraggable);

  //     dispatch(reorderTask(newTasks, projectId, source.droppableId));
  //   }

  //   // Moving to another list
  //   const startTasks = Array.from(start.card);
  //   const taskDraggable = startTasks.find((item) => item.id === draggableId);
  //   startTasks.splice(source.index, 1);

  //   const finsihTasks = Array.from(finish.card);
  //   finsihTasks.splice(destination.index, 0, taskDraggable);

  //   dispatch(
  //     moveBetween(
  //       startTasks,
  //       finsihTasks,
  //       projectId,
  //       source.droppableId,
  //       destination.droppableId
  //     )
  //   );
  // };

  return (
    <div className="w-full relative md:ml-56 py-2 overflow-y-auto">
      {/* Top */}
      <div className="px-3">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg text-navy font-semibold">
            {projects[projectId].projectName}
          </h2>
          <div className="flex gap-3 items-center text-gray-400">
            <BsPersonAdd size={20} className="cursor-pointer" />
            <BsThreeDots size={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-gray-400/50 my-4"></div>
        {/*  Progress */}
        <DragDropContext onDragEnd>
          <div className="w-full flex gap-3 overflow-x-auto">
            {fetchProgress.map((item) => {
              const data = progress[item];
              return <Progress key={data.id} data={data} />;
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default ProjectPage;
