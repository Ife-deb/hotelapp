import React, { useState } from "react";
import "./reserve.css";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Reserve = () => {
  const location = useLocation();
  const room = location.state.room;
  const date = location.state.date;
  const options = location.state.options;
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [address, setAddress] = useState("Address");
  const [sin, setSin] = useState("SIN / Social Insurance Number");
  const [cardName, setCardName] = useState("Cardholder Name");
  const [accountNumber, setAccountNumber] = useState("Account Number");
  const [cvv, setCvv] = useState("CVV");

  const handleReserve = () => {
    const reservation = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      sin: sin,
      cardName: cardName,
      accountNumber: accountNumber,
      cvv: cvv,
    };

    console.log(reservation);
    //Add customer to Customer database AND add reservation to Reservation DB using (room) prop and inputs from bellow

    alert("Room Reserved!");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="reserveContainer">
        <div className="reserveBox">
          <h1 className="reserveHeader">You are booking:</h1>
          <div className="reserveDescription">
            {room.name} - Room {room.id} - ${room.price*options.room} / Night
          </div>
          <div className="reserveDescription">
            { options.room}   
            {options.room > 1 ? " Rooms" : " Room"} {"- "} 
            { options.adult} 
            {options.adult > 1 ? " Adults" : " Adult"} {"- "} 
            { options.children} 
            {options.children < 1 || options.children > 1
              ? " Children"
              : " Child"}
          </div>
          <div className="reserveDescription">
            {date[0].startDate.toString().split(" ").slice(0, 3, " ").join(" ")} - {date[0].endDate.toString().split(" ").slice(0, 3, " ").join(" ")}
          </div>
          <div className="reserve-ln">
            <input
              type="text"
              className="firstName"
              placeholder={firstName}
              onChange={(e) => setFirstName(e)}
            />
            <input
              type="text"
              className="lastName"
              placeholder={lastName}
              onChange={(e) => setLastName(e)}
            />
          </div>
          <div className="reserve-ln">
            <input
              type="text"
              className="address"
              placeholder={address}
              onChange={(e) => setAddress(e)}
            />
            <input
              type="text"
              className="sin"
              placeholder={sin}
              onChange={(e) => setSin(e)}
            />
          </div>
          <div className="reserve-ln">
            <h2 className="paymentHeader">Payment</h2>
            <div className="reserve-ln">
              <input
                type="text"
                className="cardName"
                placeholder={cardName}
                onChange={(e) => setCardName(e)}
              />
              <input
                type="text"
                className="cardNumber"
                placeholder={accountNumber}
                onChange={(e) => setAccountNumber(e)}
              />
              <input
                type="text"
                className="cvv"
                placeholder={cvv}
                onChange={(e) => setCvv(e)}
              />
            </div>
          </div>
          <button className="reserveBtn" onClick={handleReserve}>
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};

export default Reserve;
