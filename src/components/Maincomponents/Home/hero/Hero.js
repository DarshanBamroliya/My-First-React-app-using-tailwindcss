import React from 'react';
import Cusbtn from '../../../../widgets/Cus_btn/Cusbtn';

function Hero() {
  return (
    <div className='container mx-auto sm:px-3 md:px-10 px-2'>
      <div className='grid sm:grid-cols-2 items-center'>
        <div className='gap-6 order-last sm:order-first'>
          <div className='font-libre xl:w-3/4 w-4/4'>
            <h2 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-snug md:leading-tight'>Explore the Beauty of the Beautiful World</h2>
            <p className='text-[#7D7D7D] font-Inter mt-5'>Conveniently customize proactive web service for leverage without continually aggregate frictionless wellies Richard and very customize continually.</p>
            <div className='mt-5'>
              <Cusbtn link={'#'} buttonText={'Get Exploration'} customClasses={'bg-[#0C8ABC] text-white h-12 w-40'} onClick={()=>{}}/>
              <Cusbtn link={'#'} buttonText={'Read More'} customClasses={'mx-3 shadow shadow-black-500 h-12 w-32'} onClick={()=>{}}/>
            </div>
          </div>
        </div>
        <div className='gap-6 order-first sm:order-last w-full'>
          <img src='/img/hero-main.png' className='lg:w-10/12 w-full h-full' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
