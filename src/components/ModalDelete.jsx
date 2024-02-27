import { deleteProject } from "../context/kanbanAction";
import { useKanban } from "../context/useKanban";
import Button, { SecondaryButton } from "./Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ModalDelete = ({ projectName, projectId, setOpenModal }) => {
  const { dispatch } = useKanban();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteProject(projectId));
    navigate("/");
  };
  return (
    <div className="md:ml-56 z-40 fixed top-0 left-0 right-0 bottom-0 h-full bg-black/50 flex justify-center items-center">
      <div className="w-5/12 rounded-md shadow-md bg-slate-50 flex flex-col items-center p-2">
        <p className="text-lg text-navy ">
          Are you sure want to{" "}
          <span className="font-semibold text-red-500">delete</span> &quot;
          {projectName}&quot; project?
        </p>
        <div className="flex gap-3 items-center my-2">
          <Button text="Yes" handleClick={handleDelete} />
          <SecondaryButton text="No" handleClick={() => setOpenModal(false)} />
        </div>
      </div>
    </div>
  );
};

ModalDelete.propTypes = {
  projectName: PropTypes.string,
  projectId: PropTypes.string,
  setOpenModal: PropTypes.func,
};
export default ModalDelete;
