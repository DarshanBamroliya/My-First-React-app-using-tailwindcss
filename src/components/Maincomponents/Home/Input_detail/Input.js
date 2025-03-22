import React, { useState } from "react";
import Cusbtn from "../../../../widgets/Cus_btn/Cusbtn";
import Hoteldetail from "./AddHoteldetail";
import Cardetail from '../Input_detail/AddCardetail';
import Shipdetail from "./Addshipdetail";
import Flightdetail from "./Addflightdetail";

function Input() {
  const [selectbtn, setSelectbtn] = useState("Hotel");

  const handleButtonClick = (selected) => {
    setSelectbtn(selected);
  };

  return (
    <div className="bcg-logobg bg-no-repeat xl:py-32 lg:py-24  bg bg-cover sm:px-3 md:px-10 px-2">
    <div className=" w-full h-full font-libre py-12">
      <div className="py-5 container mx-auto">
        <div className=" flex">
          <Cusbtn
            onClick={() => handleButtonClick("Hotel")}
            buttonText={"Hotel"}
            img={selectbtn === "Hotel" ? "/img/Hotel.svg" : "/img/Hotel-black.svg"}
            imgclass={"h-7"}
            customClasses={` h-14 w-32 flex items-center justify-evenly px-5 ${ selectbtn === "Hotel" ? "w-32 bg-[#1D96BC] text-white " : "" }`}
            btnclass={"h-5"}
          />
          <Cusbtn
            onClick={() => handleButtonClick("Flight")}
            buttonText={"Flight"}
            img={selectbtn === "Flight" ? "/img/plan.svg" : "/img/plan-black.svg"}
            imgclass={"h-9"}
            customClasses={`h-14 w-32 flex items-center justify-evenly px-5  ${ selectbtn === "Flight" ? "w-32 bg-[#1D96BC] text-white " : "" }`}
            btnclass={"h-5"}
          />
          <Cusbtn
            onClick={() => handleButtonClick("Car")}
            buttonText={"Car"}
            img={selectbtn === "Car" ? "/img/car.svg" : "/img/car-black.svg"}
            imgclass={"h-7"}
            customClasses={`h-14 w-32 flex items-center justify-evenly px-5  ${ selectbtn === "Car" ? "w-32 bg-[#1D96BC] text-white " : "" }`}
            btnclass={"h-5"}
          />
          <Cusbtn
            onClick={() => handleButtonClick("Ship")}
            buttonText={"Ship"}
            img={selectbtn === "Ship" ? "/img/ship.svg" : "/img/ship-black.svg"}
            imgclass={"h-7"}
            customClasses={`h-14 w-32 flex items-center justify-evenly px-5  ${ selectbtn === "Ship" ? "w-32 bg-[#1D96BC] text-white " : "" }`}
            btnclass={"h-5"}
          />
        </div>
        <div>
          {selectbtn === "Hotel" && <Hoteldetail />}
          {selectbtn === "Flight" && <Flightdetail />}
          {selectbtn === "Car" && <Cardetail />}
          {selectbtn === "Ship" && <Shipdetail />}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Input;
