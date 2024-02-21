import PropTypes from "prop-types";
import cx from "classnames";

const Type = ({ type }) => {
  const typeClass = cx({
    "px-2 text-sm py-1 rounded-2xl font-semibold text-white-kanban capitalize": true,
    "bg-orange-500": type === "dev",
    "bg-violet-500": type === "planning",
    "bg-violet-kanban": type === "research",
    "bg-blue-500": type === "design",
    "bg-pink-500": type === "content",
  });

  return <span className={typeClass}>{type}</span>;
};

Type.propTypes = {
  type: PropTypes.string,
};

export default Type;
