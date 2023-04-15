import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import data from "../../json-db/hotels.json";

const List = () => {
  const location = useLocation();
  const status = location.state.status;
  const [chain, setChain] = useState();
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [adult, setAdult] = useState(options.adult);
  const [children, setChildren] = useState(options.children);
  const [room, setRoom] = useState(options.room);
  const [surfaceArea, setSurfaceArea] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [hotels, setHotels] = useState(data.hotels);

  const handleSearch = () => {
    setOptions({
      room: room,
      adult: adult,
      children: children,
    });

    var tempHotels = [];
    for (var h of data.hotels) {
      if (h.price <= maxPrice && h.area >= surfaceArea) {
        if (!chain) {
          tempHotels.push(h);
          return
        } else if (h.chain_name == chain) {
          tempHotels.push(h);
        }
      }
    }
    setHotels(tempHotels);
  };

  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Hotel Chain</label>
              <input placeholder={chain} type="text" onChange={(e) => setChain(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Surface Area <small>square feet</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={surfaceArea}
                    onChange={(e) => setSurfaceArea(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={maxPrice}
                    onChange={(e) => {
                      setMaxPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={adult}
                    onChange={(e) => {
                      setAdult(e.target.value);
                    }}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={children}
                    onChange={(e) => {
                      setChildren(e.target.value);
                    }}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={room}
                    onChange={(e) => {
                      setRoom(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {hotels &&
              hotels.map((hotel, i) => {
                return (
                  <SearchItem
                    key={i}
                    item={hotel}
                    date={date}
                    options={options}
                    status={status}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
