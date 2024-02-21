import { BsThreeDots, BsPersonAdd } from "react-icons/bs";
import Progress from "../components/Progress";
import { useKanban } from "../context/useKanban";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderTask } from "../context/kanbanAction";

function ProjectPage() {
  const { projectId } = useParams();
  const { dispatch, getProject } = useKanban();
  const { projectName, progress } = getProject(projectId);

  const onDragEnd = (result) => {
    //TODO
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const progressDrop = progress.find(
      (item) => item.id === source.droppableId
    );
    const newTasks = Array.from(progressDrop.card);
    const taskDraggable = newTasks.find((item) => item.id === draggableId);
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, taskDraggable);

    dispatch(reorderTask(newTasks, projectId, source.droppableId));
  };

  return (
    <div className="w-full ml-56 py-2 overflow-y-auto">
      {/* Top */}
      <div className="px-3">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg text-navy font-semibold">{projectName}</h2>
          <div className="flex gap-3 items-center text-gray-400">
            <BsPersonAdd size={20} className="cursor-pointer" />
            <BsThreeDots size={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-gray-400/50 my-4"></div>
        {/*  Progress */}
        <div className="w-full flex gap-3 overflow-x-scroll">
          <DragDropContext onDragEnd={onDragEnd}>
            {progress.map((item) => (
              <Progress key={item.id} data={item} />
            ))}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
