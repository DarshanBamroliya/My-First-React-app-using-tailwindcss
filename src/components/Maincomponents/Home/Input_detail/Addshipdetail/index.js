import React from 'react'
import Cusinput from "../../../../../widgets/Cus_input/Cusinput";

function Shipdetail() {
  return (
    <div className="">
      <div>
        <Cusinput 
          heading="Your Destination"
          placeholder="Taiwan"
          cusinputclass="h-12 shadow shadow-black-500 pl-5"
          checkInPlaceholder="Select"
          checkOutPlaceholder="Select"
          datein="Departure Date"
          dateout="Return Date"
          adult="03"
          Children="02"
        />
      </div>
    </div>
  )
}

export default Shipdetail