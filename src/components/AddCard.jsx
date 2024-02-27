import { GoPlus } from "react-icons/go";
import PropTypes from "prop-types";

const AddCard = ({ handleClick, title }) => {
  return (
    <div
      onClick={handleClick}
      className="w-full flex items-center gap-2 justify-center cursor-pointer text-sm text-navy rounded-md p-2 my-3 text-center border-[1px] border-dashed border-navy"
    >
      <GoPlus />
      {title}
    </div>
  );
};

AddCard.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};
export default AddCard;
