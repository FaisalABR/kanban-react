import PropTypes from "prop-types";
import cx from "classnames";

const ProgressBar = ({ totalDoneSub, totalSub, widthProgress }) => {
  const progressClass = cx({
    "transition-all h-2 rounded-md absolute top-0": true,
    "bg-red-500": widthProgress > 0 && widthProgress <= 40,
    "bg-yellow-500": widthProgress > 40 && widthProgress <= 0,
    "bg-green-500": widthProgress === 100,
  });
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center text-navy ">
        <p className="text-sm">Progress</p>
        <span className="text-sm">
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
  totalDoneSub: PropTypes.number,
  totalSub: PropTypes.number,
  widthProgress: PropTypes.number,
};

export default ProgressBar;
