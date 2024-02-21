import PropTypes from "prop-types";

const Type = ({ type }) => {
  const changeColor = () => {
    if (type === "dev") {
      return "bg-orange-500";
    } else if (type === "planning") {
      return "bg-violet-500";
    } else if (type === "research") {
      return "bg-violet-kanban";
    } else if (type === "design") {
      return "bg-blue-500";
    } else {
      return "bg-pink-500";
    }
  };

  return (
    <span
      className={`${changeColor()} px-2 text-sm py-1 rounded-2xl font-semibold text-white-kanban capitalize`}
    >
      {type}
    </span>
  );
};

Type.propTypes = {
  type: PropTypes.string,
};

export default Type;
