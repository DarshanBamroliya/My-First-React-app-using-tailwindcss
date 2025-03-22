import React from 'react';

function CusHeading({ heading, txt, cusclass }) {
  return (
    <div className={cusclass}>
      <h1 className='text-[#00799F] font-bold md:text-3xl sm:mb-2 md:mb-5'>{heading}</h1>
      <p className='font-bold md:text-4xl md:mb-20 sm:mb-10 mb-4 text-lg'>{txt}</p>
    </div>
  );
}

export default CusHeading;
