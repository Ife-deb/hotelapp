import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import {
   faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {

  const location = useLocation();
  const room = location.state.room;
  const date = location.state.date;
  const options = location.state.options;
  const status = location.state.status;

  const navigate = useNavigate();
  const handleSearch = () => {
    if (status == "employee") {
      navigate("/employee-reserve", { state: { room, date, options, status } });
    } else {
      navigate("/customer-reserve", { state: { room, date, options, status } });
    }
  };

  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow" onClick={handleSearch}>Reserve or Book Now!</button>
          <h1 className="hotelTitle">{room.name}</h1>
          <span className="hotelDistance">
            {room.chain_name}
          </span>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{room.address}</span>
          </div>
          <span className="hotelPriceHighlight">
            {room.email} - {room.phone}
          </span>
          <div className="hotelImages">
            {room.photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">About this listing</h1>
              <p className="hotelDesc">
                {room.description}
              </p>
              <p className="hotelDesc">
                View type: {room.view}
              </p>
              <p className="hotelDesc">
                Area: {room.area} sq feet
              </p>
              <p className="hotelDesc">
                Ability to add more beds: {room.extendable ? "Yes" : "No"}
              </p>
              <p className="hotelDesc">
                Damages: {room.damages}
              </p>
              <p className="hotelDesc">
                Amenities: {room.amenities}
              </p>
              <p className="hotelDesc">
                Free Cancellation: {room.free_cancellation ? "Yes" : "No"}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>
                <b>${room.price}</b> / Night
              </h2>
              <h3>
                <b>{room.room_quantity}</b> Rooms Available
              </h3>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
