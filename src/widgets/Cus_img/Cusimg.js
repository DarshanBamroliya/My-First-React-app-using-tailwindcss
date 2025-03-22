import React from 'react';
import Cusbtn from "../../widgets/Cus_btn/Cusbtn";

function Cusimg({ type, src, label, text, country, img, description, rating, reviews, price, showcountry, showtext, showmap, location }) {
    return (
        <div className="relative">
            {type === "featuredtours" && (
                <>
                    <img src={src} alt={text} className="w-full h-full" />
                    <div className="absolute bg-white right-2 xl:right-12 lg:right-5 md:right-6 sm:right-4 top-2 md:top-5 lg:top-5 sm:h-7 h-5 lg:h-9 lg:w-32 sm:w-24 w-16 md:w-28 text-[#00799F] flex justify-center items-center font-bold xl:text-lg md:text-base sm:text-sm text-[10px] rounded-sm shadow-md shadow-black-500 max-[425px]:text-sm max-[425px]:right-7 max-[425px]:top-7 max-[425px]:text-10 max-[425px]:h-8 max-[425px]:w-28 font-Inter">{label}</div>
                    <div className="absolute font-Inter text-white text-left xl:bottom-7 lg:bottom-5 md:bottom-4 bottom-3  lg:left-10 md:left-7 left-3 max-[425px]:leading-none max-[425px]:left-7 max-[425px]:bottom-7 w-[84%]">
                        <span className="lg:text-2xl md:text-xl font-bold sm:text-sm text-[10px]  max-[425px]:text-2xl font-Franklin">{text}</span>
                        <p className="lg:text-lg md:text-base sm:text-xs text-[8px] max-[530px]:mt-[-5px] max-[425px]:text-xl sm:mt-[-2px] lg:w-[66%] w-[86%]">Starting From $1500</p>
                    </div>
                </>
            )}
            {type === "package" && (
                <>
                    <img className='w-full h-full max-[405px]:h-5/6' src={img} alt={country} />
                    <div className="absolute text-white text-left xl:bottom-28 lg:bottom-36 bottom-[100px] max-[553px]:bottom-[7.5rem] max-[421px]:bottom-[8rem] left-5 w-[70%]">
                    {showcountry ? (
                        <span className="lg:text-2xl font-bold md:text-xl">{country}</span>):(<></>)}
                    {showtext ?  (  
                        <p className="md:text-sm w-[86%]">{text}</p>):(<></>)}
                    </div>
                    <h5 className="text-[#0583AA] font-bold w-2/3 mx-2 max-[553px]:text-xs max-[405px]:text-lg max-[405px]:w-11/12 my-2">{description}</h5>
                    {showmap ? ( <div className='flex items-center mx-2 sm:mb-3 mb-2'>
                        <img src='/img/maps-icon.svg'/> 
                        <span className='text-[#959595] text-xs ml-1'>{location}</span>
                    </div>):(<></>)}
                    <div className="flex mt-1 justify-between items-center mx-2 max-[553px]:flex-col max-[553px]:leading-9 max-[405px]:flex-row">
                        <div className="flex items-center ">
                            <div className="bg-white shadow-md shadow-black-500 rounded-md flex px-2 py-1">
                                <img src="/img/Staricon.svg" className="mx-1" />
                                <span className="text-[#2749FF] text-xs font-bold">{rating}</span>
                            </div>
                            <span className="text-xs mx-3">({reviews} Reviews)</span>
                        </div>
                        <Cusbtn btnclass={'text-white bg-[#6348F9] py-1 px-3 text-sm rounded-md'} onClick={()=>{}} buttonText={`$${price}`} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Cusimg;
