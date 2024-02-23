import { BiCalendar } from "react-icons/bi";
import PropTypes from "prop-types";

const Date = ({ date }) => {
  return (
    <span className="flex text-sm items-center gap-1 text-gray-400 capitalize">
      <BiCalendar size={20} />
      {date}
    </span>
  );
};

Date.propTypes = {
  date: PropTypes.string,
};

export default Date;
