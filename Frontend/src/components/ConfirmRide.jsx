import React from 'react'

const ConfirmRide = () => {
  return (
    <div> 
        <h5 onClick={() => props.setVehiclePanel(false)} className="p-1 w-full text-center absolute top-0"><i className="align-center text-3xl ri-arrow-down-wide-line"></i></h5>
    </div>
  )
}

export default ConfirmRide