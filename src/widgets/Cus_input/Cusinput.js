import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the date picker styles
import Cusbtn from "../Cus_btn/Cusbtn";

function Cusinput({
  placeholder,
  checkInPlaceholder,
  checkOutPlaceholder,
  heading,
  cusheadingclass,
  adult,
  Children,
  dateout,
  datein
}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (startDate && date < startDate) {
      setStartDate(null);
    }
  };

  return (
    <div className="bg-white shadow-md shadow-black-500 xl:h-40 md:h-50 py-10 px-5">
      <div className="xl:grid xl:grid-cols-6 md:grid md:grid-cols-5 lg:gap-x-10 md:gap-x-5"> 
        <div className="">
          <h4 className={cusheadingclass}>{heading}</h4>
          <input
            type="text"
            placeholder={placeholder}
            className="h-12 shadow shadow-black-500 pl-5 rounded-md w-full"
          />
        </div>
        <div>
          {checkInPlaceholder && checkOutPlaceholder ? (
            <div className="grid relative">
              <label>{datein}</label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                placeholderText={checkInPlaceholder}
                className="h-12 shadow shadow-black-500 pl-5 rounded-md w-full"
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <img src="/img/Date.png" className="absolute top-9 right-0"></img>
            </div>
          ) : (
            <div>
              <DatePicker selected={startDate} onChange={setStartDate} />
            </div>
          )}
        </div>
        <div>
          {checkInPlaceholder && checkOutPlaceholder && (
            <div className="grid relative">
              <label>{dateout}</label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                placeholderText={checkOutPlaceholder}
                className="h-12 shadow shadow-black-500 pl-5 rounded-md w-full"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
              <img src="/img/Date.png" className="absolute top-9 right-0"></img>
            </div>
          )}
        </div>
        <div>
          <label>Adult</label>
          <input
            type="no"
            placeholder={adult}
            className="h-12 shadow shadow-black-500 pl-5 rounded-md w-full"
          ></input>
        </div>
        <div>
          <label>Children</label>
          <input
            type="no"
            placeholder={Children}
            className="h-12 shadow shadow-black-500 pl-5 rounded-md w-full"
          ></input>
        </div>
        <div className="xl:grid hidden">
          <Cusbtn buttonText="Book Now" customClasses='bg-[#2D77A2] h-30 text-white w-full h-16' onClick={()=>{}}></Cusbtn>
        </div>
      </div>
      <div className="text-center w-full xl:hidden">
        <Cusbtn buttonText="Book Now" customClasses='bg-[#2D77A2] h-12 text-white w-full mt-3' onClick={()=>{}}></Cusbtn>
      </div>
    </div>
  );
}

export default Cusinput;
