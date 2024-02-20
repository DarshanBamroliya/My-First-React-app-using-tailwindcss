import React from "react";
import CusHeading from "../../../../widgets/Cus_heding/CusHeading";
import Cusimg from "../../../../widgets/Cus_img/Cusimg";

function Package() {
  const packagedata = [
    {
      img: "/img/UnitedStates.png",
      country: "United States",
      text: "4 Day’s 3 Night",
      description: "Enjoy The Beauty Place In United States",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
    },
    {
      img: "/img/Japan.png",
      country: "United States",
      text: "4 Day’s 3 Night",
      description: "Enjoy The Beauty Place In United States",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
    },
    {
      img: "/img/Sweden.png",
      country: "United States",
      text: "4 Day’s 3 Night",
      description: "Enjoy The Beauty Place In United States",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
    },
    {
      img: "/img/maldivs.png",
      country: "United States",
      text: "4 Day’s 3 Night",
      description: "Enjoy The Beauty Place In United States",
      rating: "4.2",
      reviews: "2500",
      price: "1400",
    },
  ];

  return (
    <div className="font-Inter relative">
      <div className="bg-[#F9F9F9] w-full lg:pb-52 sm:pb-32 pb-10 sm:px-3 md:px-10 px-2">
        <img src="/img/star.png" className="relative bottom-16" alt="star" />
        <div className="container mx-auto">
          <CusHeading
            cusclass="text-center relative bottom-[125px] h-0"
            heading="Popular Package"
            txt="Checkout Our Packages"
          />
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 items-center sm:my-10 max-[405px]:grid-cols-1">
            {packagedata.map((item, index) => (
              <div key={index}>
                <Cusimg
                  img={item.img}
                  showcountry={true}
                  country={item.country}
                  showtext={true}
                  text={item.text} 
                  type="package"
                  description={item.description}
                  rating={item.rating}
                  reviews={item.reviews}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
