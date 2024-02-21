import PropTypes from "prop-types";

const StatusBar = ({ progress }) => {
  const changeColor = () => {
    if (progress === "in work") {
      return "bg-blue-600";
    } else if (progress === "in progress") {
      return "bg-red-600";
    } else if (progress === "completed") {
      return "bg-green-600";
    } else {
      return "bg-black";
    }
  };

  return <div className={`w-full h-px ${changeColor()} my-3`}></div>;
};

StatusBar.propTypes = {
  progress: PropTypes.string,
};
export default StatusBar;
