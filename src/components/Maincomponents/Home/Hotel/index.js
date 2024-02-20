import React from "react";
import CusHeading from "../../../../widgets/Cus_heding/CusHeading";
import Cusimg from "../../../../widgets/Cus_img/Cusimg";

function PopularHotel() {
  const hoteldetail = [
    {
      img: "/img/Frame1.png",
      describe: "Enjoy The Beauty Place In Switzerland",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
      location: "Badrutt's Palace, Switzerland.",
    },
    {
      img: "/img/Frame2.png",
      describe: "Enjoy The Beauty Place In Switzerland",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
      location: "Badrutt's Palace, Switzerland.",
    },
    {
      img: "/img/Frame3.png",
      describe: "Enjoy The Beauty Place In Switzerland",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
      location: "Badrutt's Palace, Switzerland.",
    },
    {
      img: "/img/Frame4.png",
      describe: "Enjoy The Beauty Place In Switzerland",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
      location: "Badrutt's Palace, Switzerland.",
    },
  ];
  return (
    <div className="bg-[#F5F5F5] sm:my-20 my-14 md:py-20 sm:py-14 py-10 sm:px-3 md:px-5 px-2 font-Inter">
      <CusHeading
        heading={"Popular Hotel"}
        txt={"Most Popular Hotel"}
        cusclass={"text-center"}
      />
      <div className="grid min-[992px]:grid-cols-4 grid-cols-2 gap-5 max-[405px]:grid-cols-1">
        {hoteldetail.map((item, index) => (
          <div key={index} className="shadow-lg md:pb-5 pb-2 rounded-lg ">
            <Cusimg
              type="package"
              img={item.img}
              description={item.describe}
              showmap={true}
              location={item.location}
              rating={item.rating}
              reviews={item.reviews}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularHotel;
