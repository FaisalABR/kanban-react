import { GoPlus } from "react-icons/go";
import PropTypes from "prop-types";

const AddCard = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="w-full flex items-center gap-2 justify-center cursor-pointer text-sm text-navy rounded-md p-2 my-3 text-center border-[1px] border-dashed border-navy"
    >
      <GoPlus />
      Add Card
    </div>
  );
};

AddCard.propTypes = {
  handleClick: PropTypes.func,
};
export default AddCard;
