import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";

const DropComponent = ({ children, ...props }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
};

DropComponent.propTypes = {
  children: PropTypes.any,
};

export default DropComponent;
