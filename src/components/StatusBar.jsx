import PropTypes from "prop-types";
import cx from "classnames";

const StatusBar = ({ progress }) => {
  const statusClass = cx({
    "w-full h-px my-3": true,
    "bg-blue-600": progress === "in work",
    "bg-red-600": progress === "in progress",
    "bg-green-600": progress === "completed",
    "bg-black": progress === "todo",
  });

  return <div className={statusClass}></div>;
};

StatusBar.propTypes = {
  progress: PropTypes.string,
};
export default StatusBar;
