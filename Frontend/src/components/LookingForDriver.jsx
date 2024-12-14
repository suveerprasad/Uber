import React from 'react'
import carimage from "../assets/car.jpg";

const LookingForDriver = (props) => {
    return (
        <div>
            <h5
                onClick={() => props.setVehicleFound(false)}
                className="p-1 w-full text-center absolute top-0"
            >
                <i className="align-center text-3xl ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>

            <div className="flex gap-2 justify-between flex-col items-center">

                <img className="h-20" src={carimage} />

                <div className="w-full mt-5">

                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">19-2/6</h3>
                            <p className="text-base-mt-1 text-gray-600">Uttarahalli, Bengaluru</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">19-2/6</h3>
                            <p className="text-base-mt-1 text-gray-600">Uttarahalli, Bengaluru</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">19-2/6</h3>
                            <p className="text-base-mt-1 text-gray-600">Cash</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LookingForDriver