import React from "react";
import Cusimg from "../../../../widgets/Cus_img/Cusimg"
import CusHeading from "../../../../widgets/Cus_heding/CusHeading";

function FeaturedTours() {
    return (
        <div className='bg-map bg-no-repeat bg-cover mb-32 mt-5 md:py-10 sm:px-3 md:px-10 px-2'>
            <div className="container mx-auto">
                <div className=' font-Franklin'>
                    <CusHeading
                        cusclass="text-center"
                        heading={"Featured Tours"}
                        txt={"Beautiful Places Around The World"}
                    />
                </div>
                <div className="grid grid-cols-3 max-[425px]:grid-cols-1">
                    <Cusimg type="featuredtours" src="/img/map2.png" label="3 Packages" text="Spain" />
                    <div>
                        <Cusimg type="featuredtours" src="/img/map3.png" label="3 Packages" text="Spain" />
                        <Cusimg type="featuredtours" src="/img/map1.png" label="3 Packages" text="Spain" />
                    </div>
                    <Cusimg type="featuredtours" src="/img/map4.png" label="3 Packages" text="Spain" />
                </div>
            </div>
        </div>
    );
}

export default FeaturedTours;
