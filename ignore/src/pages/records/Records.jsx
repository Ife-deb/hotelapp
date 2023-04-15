import React from "react";
import "./records.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import customerData from "../../json-db/customers.json";
import employeeData from "../../json-db/employees.json";
import reservationData from "../../json-db/reservations.json";
import roomData from "../../json-db/hotels.json";

const Records = () => {
  const location = useLocation();
  const recordType = location.state.recordsChoice; // "customer", "employee", "reservation", "hotel"

  const addRecordHandler = () => {
    //add record
    //take all the input fields from the right inputs, and make an object with the right record properties BASED ON THE VARIABLE recordType
    //and then pass it into the right database
  };

  const deleteRecordHandler = (id) => {
    //id is passed in, use recordType and id parameter to delete record from the right database by ID
  };

  return (
    <>
      <Navbar />
      <div className="recordsContainer">
        {recordType == "customer" && (
          <>
            <h1 className="recordHeader">Customer Records</h1>
            <div className="recordItem">
              <h2>Add Customer</h2>
              <div className="recordDescItem">
                <p>Customer ID</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Customer First Name</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Customer Last Name</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>SIN</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Address</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Registration Date</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <button className="recordAddButton" onClick={addRecordHandler}>
                  Add Record
                </button>
              </div>
            </div>
            {customerData.customers.map((customer, id) => {
              return (
                <div key={id} className="recordItem">
                  <div className="recordDescItem">
                    <p>Customer ID</p>
                    <p>{customer.id}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Customer First Name</p>
                    <p>{customer.first_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Customer Last Name</p>
                    <p>{customer.last_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>SIN</p>
                    <p>{customer.sin}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Address</p>
                    <p>{customer.address}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Registration Date</p>
                    <p>{customer.registration_date}</p>
                  </div>
                  <div className="recordDescItem">
                    <button
                      className="recordDeleteButton"
                      onClick={() => deleteRecordHandler(customer.id)}
                    >
                      Delete Record
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {recordType == "employee" && (
          <>
            <h1 className="recordHeader">Employee Records</h1>
            <div className="recordItem">
              <h2>Add Employee</h2>
              <div className="recordDescItem">
                <p>Employee ID</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Employee First Name</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Employee Last Name</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>SIN</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Address</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Role</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <button className="recordAddButton" onClick={addRecordHandler}>
                  Add Record
                </button>
              </div>
            </div>

            {employeeData.employees.map((employee, id) => {
              return (
                <div className="recordItem">
                  <div className="recordDescItem">
                    <p>Employee ID</p>
                    <p>{employee.id}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Employee First Name</p>
                    <p>{employee.first_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Employee Last Name</p>
                    <p>{employee.last_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>SIN</p>
                    <p>{employee.sin}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Address</p>
                    <p>{employee.address}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Role</p>
                    <p>{employee.role}</p>
                  </div>
                  <div className="recordDescItem">
                    <button
                      className="recordDeleteButton"
                      onClick={() => deleteRecordHandler(employee.id)}
                    >
                      Delete Record
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {recordType == "reservation" && (
          <>
            <h1 className="recordHeader">Reservation Records</h1>
            {reservationData.reservations.map((reservation, id) => {
              return (
                <div className="recordItem">
                  <div className="recordDescItem">
                    <p>Customer ID</p>
                    <p>{reservation.customer_id}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Customer First Name</p>
                    <p>{reservation.first_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Customer Last Name</p>
                    <p>{reservation.last_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>SIN</p>
                    <p>{reservation.sin}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Address</p>
                    <p>{reservation.address}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Hotel Chain Name</p>
                    <p>{reservation.chain_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Hotel Name</p>
                    <p>{reservation.hotel_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Room ID</p>
                    <p>{reservation.room_id}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Price</p>
                    <p>{reservation.price}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Adults</p>
                    <p>{reservation.adults}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Children</p>
                    <p>{reservation.children}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Rooms</p>
                    <p>{reservation.rooms}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Time Period</p>
                    <p>{reservation.time_period}</p>
                  </div>
                  <div className="recordDescItem">
                    <button
                      className="recordDeleteButton"
                      onClick={() => deleteRecordHandler(reservation.id)}
                    >
                      Delete Record
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {recordType == "hotel" && (
          <>
            <h1 className="recordHeader">Employee Records</h1>
            <div className="recordItem">
              <h2>Add Room</h2>
              <div className="recordDescItem">
                <p>Room ID</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Chain Name</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Hotel Rating</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Hotel Name</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Room Quantity</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Address</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Email</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Phone</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Price</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Description</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>View</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Photos</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>View</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Extendable</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Damages</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Amenities</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <p>Free Cancellation</p>
                <input type="text" className="recordInput" />
              </div>
              <div className="recordDescItem">
                <button className="recordAddButton" onClick={addRecordHandler}>
                  Add Record
                </button>
              </div>
            </div>
            {roomData.hotels.map((room, id) => {
              return (
                <div className="recordItem" key={id}>
                  <div className="recordDescItem">
                    <p>Room ID</p>
                    <p>{room.id}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Chain Name</p>
                    <p>{room.chain_name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Hotel Rating</p>
                    <p>{room.rating}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Hotel Name</p>
                    <p>{room.name}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Room Quantity</p>
                    <p>{room.room_quantity}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Address</p>
                    <p>{room.address}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Email</p>
                    <p>{room.email}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Phone</p>
                    <p>{room.phone}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Price</p>
                    <p>{room.price}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>View</p>
                    <p>{room.view}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Extendable</p>
                    <p>{room.extendable}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Damages</p>
                    <p>{room.damages}</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Amenities</p>
                    <p>({room.amenities.split(" ").length})</p>
                  </div>
                  <div className="recordDescItem">
                    <p>Free Cancellation</p>
                    <p>{room.free_cancellation}</p>
                  </div>
                  <div className="recordDescItem">
                    <button
                      className="recordDeleteButton"
                      onClick={() => deleteRecordHandler(room.id)}
                    >
                      Delete Record
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <MailList />
      <Footer />
    </>
  );
};

export default Records;
