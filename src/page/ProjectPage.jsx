import { BsThreeDots, BsPersonAdd } from "react-icons/bs";
import Progress from "../components/Progress";
import { useKanban } from "../context/useKanban";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

function ProjectPage() {
  const { id } = useParams();
  const { getProject } = useKanban();
  const { progress } = getProject(Number(id));

  const onDragEnd = () => {
    //TODO
  };

  return (
    <div className="w-full py-2">
      <div className="flex">
        <Sidebar />
        {/* Top */}
        <div className="px-3">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-lg text-navy font-semibold">
              Mobile App Projects
            </h2>
            <div className="flex gap-3 items-center text-gray-400">
              <BsPersonAdd size={20} className="cursor-pointer" />
              <BsThreeDots size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="h-[0.5px] w-full bg-gray-400/50 my-4"></div>
          {/*  Progress */}
          <div className="max-w-full flex gap-3 overflow-x-auto">
            <DragDropContext onDragEnd={onDragEnd}>
              {progress.map((item) => (
                <Progress key={item.id} data={item} />
              ))}
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
