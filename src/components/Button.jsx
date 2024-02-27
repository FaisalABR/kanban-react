import PropTypes from "prop-types";

export const SecondaryButton = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-sm rounded-md border-[1px] border-violet-kanban text-violet-kanban px-1"
    >
      {text}
    </button>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className=" bg-violet-kanban rounded-md text-white font-semibold px-2"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

SecondaryButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
