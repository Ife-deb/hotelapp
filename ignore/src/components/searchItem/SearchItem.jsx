import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = (props) => {
  const room = props.item;
  const date = props.date;
  const options = props.options;
  const status = props.status;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/hotels/room", { state: { room, date, options, status } });
  };

  return (
    <div className="searchItem">
      <img
        src={room.photos[1].src}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{room.name}</h1>
        <h2 className="siSubTitle">{room.chain_name}</h2>
        <span className="siView">{room.view}</span>
        <span className="siSubtitle">{room.description}</span>
        <span className="siFeatures">{room.amenities}</span>
        <span className="siCancelOp">
          Free cancellation: {room.free_cancellation}{" "}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <button>{room.rating}/5 Rating</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${room.price} / Night</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handleClick} className="siCheckButton">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
