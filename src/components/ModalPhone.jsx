import { useState } from "react";
import Button, { SecondaryButton } from "./Button";
import PropTypes from "prop-types";
import { useKanban } from "../context/useKanban";
import { addProject } from "../context/kanbanAction";

const ModalPhone = ({ setOpenModal }) => {
  const { dispatch } = useKanban();
  const [inputProject, setInputProject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(inputProject));
    setInputProject("");
    setOpenModal(false);
  };
  return (
    <div className="fixed z-5 top-0 left-0 right-0 w-full h-[91vh] bg-black/20 md:hidden flex justify-center items-center">
      <div className="bg-white w-9/12 rounded-md p-2 shadow-sm">
        <form>
          <label>Project Name</label>
          <input
            type="text"
            placeholder="Add your project.."
            value={inputProject}
            className="bg-blue-100 w-full rounded-md px-2 py-1 outline-none my-2"
            onChange={(e) => setInputProject(e.target.value)}
            required
          />
          <div className="flex gap-2">
            <Button text="Submit" handleClick={handleSubmit} />
            <SecondaryButton
              text="Cancel"
              handleClick={() => setOpenModal(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

ModalPhone.propTypes = {
  setOpenModal: PropTypes.func,
};

export default ModalPhone;
