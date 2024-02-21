import PropTypes from "prop-types";
import cx from "classnames";

const Priority = ({ priority }) => {
  const priorityClass = cx({
    "px-2 text-sm rounded-lg font-semibold  capitalize": true,
    "bg-gray-50 text-gray-500 ": priority === "low",
    "bg-lime-50 text-lime-500 ": priority === "mid",
    "bg-red-50 text-red-500 ": priority === "high",
  });

  return <span className={priorityClass}>{priority}</span>;
};

Priority.propTypes = {
  priority: PropTypes.string,
};

export default Priority;
