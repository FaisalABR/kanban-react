import PropTypes from "prop-types";
import cx from "classnames";
import { useKanban } from "../context/useKanban";

const ProgressBar = ({ subtask }) => {
  const { subtasks } = useKanban();
  const totalSub = subtask.length;
  const totalDoneSub =
    subtask.length > 0
      ? subtask.filter((item) => subtasks[item].isDone === true).length
      : 0;
  const widthProgress = (totalDoneSub / totalSub) * 100;

  const progressClass = cx({
    "transition-all h-2 rounded-md absolute top-0": true,
    "bg-red-500": widthProgress > 0 && widthProgress <= 40,
    "bg-yellow-500": widthProgress > 40 && widthProgress <= 70,
    "bg-green-500": widthProgress > 70 && widthProgress <= 100,
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center text-navy ">
        <p className="text-sm dark:text-violet-kanban">Progress</p>
        <span className="text-sm dark:text-violet-kanban">
          {totalDoneSub}/{totalSub}
        </span>
      </div>
      <div className="my-2 relative">
        <div className="w-full h-2 bg-gray-400/50 rounded-md"></div>
        <div
          className={progressClass}
          style={{
            width: `${widthProgress}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  totalSub: PropTypes.number,
  subtask: PropTypes.array,
};

export default ProgressBar;
