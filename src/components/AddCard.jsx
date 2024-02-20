import { GoPlus } from "react-icons/go";

const AddCard = () => {
  return (
    <div className="w-full flex items-center gap-2 justify-center cursor-pointer text-sm text-navy rounded-md p-2 my-3 text-center border-[1px] border-dashed border-navy">
      <GoPlus />
      Add Card
    </div>
  );
};

export default AddCard;
