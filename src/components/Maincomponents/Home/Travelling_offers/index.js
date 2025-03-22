import React from "react";
import CusHeading from "../../../../widgets/Cus_heding/CusHeading";

function Travelingoffer() {
  const Travelingditail = [
    {
      img: "/img/Hotel.png",
      describe: "Different Coutries",
    },
    {
      img: "/img/Bus.png",
      describe: "Bus Tours",
    },
    {
      img: "/img/salad-1.png",
      describe: "Food Tours",
    },
    {
      img: "/img/Summer.png",
      describe: "Summer Rest",
    },
    {
      img: "/img/Ship.png",
      describe: "Ship Cruises",
    },
    {
      img: "/img/Mountains.png",
      describe: "Mountains Tours",
    },
  ];
  return ( 
    <div className="sm:my-20 relative font-Inter"> 
      <div className="bcg-Travel bg-no-repeat bg-center bg-contain sm:py-32 py-24"></div>
      <div className="absolute lg:bottom-[28rem] sm:bottom-[27rem] w-full flex flex-row justify-between items-end">
        <img
          src="/img/bath-tube.png"
          className="h-full pb-5 max-[768px]:w-1/5 max-[640px]:hidden"
        />
        <img src="/img/tree.png" className="h-full lg:w-64 sm:w-1/4 max-[640px]:hidden" />
      </div>
      <div className="container mx-auto sm:px-3 md:px-5 px-2">
        <CusHeading
          heading={"Inventore Veritatis"}
          txt={"Select Offers For Traveling"}
          cusclass={"text-center mt-[-100px]"}
        />
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-x-3 gap-y-3 w-full sm:mt-28 mt-20 justify-items-center
        ">
          {Travelingditail.map((item, index) => (
            <div key={index} className="flex flex-col justify-between  items-center">
              <img src={item.img} className="h-full  w-14 mb-2 max-[335px]:w-12"/>
              <p className="text-lg w-full font-medium max-[335px]:text-base"> {item.describe}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Travelingoffer;
