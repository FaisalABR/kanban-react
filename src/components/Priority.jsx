import PropTypes from "prop-types";

const Priority = ({ priority }) => {
  const changeColor = () => {
    if (priority === "low") {
      return "bg-gray-50 text-gray-500 ";
    } else if (priority === "mid") {
      return "bg-lime-50 text-lime-500 ";
    } else {
      return "bg-red-50 text-red-500 ";
    }
  };

  return (
    <span
      className={`px-2 text-sm rounded-lg ${changeColor()} font-semibold  capitalize`}
    >
      {priority}
    </span>
  );
};

Priority.propTypes = {
  priority: PropTypes.string,
};

export default Priority;
