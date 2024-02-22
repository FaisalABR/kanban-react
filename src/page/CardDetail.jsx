import { useParams } from "react-router-dom";

const CardDetail = () => {
  const { cardId } = useParams();
  return (
    <div className="w-full py-2 md:ml-56">
      <h1>Hallo this is card detail</h1>
      {cardId}
    </div>
  );
};

export default CardDetail;
