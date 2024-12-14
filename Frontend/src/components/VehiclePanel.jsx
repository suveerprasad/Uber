import React from 'react'
import 'remixicon/fonts/remixicon.css';
import image from "../assets/img.png";
import carimage from "../assets/car.jpg";
import carnew from "../assets/img1.png"
import moto from "../assets/moto.png"
import auto from "../assets/auto.png"
const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => props.setVehiclePanel(false)} className="p-1 w-full text-center absolute top-0"><i className="align-center text-3xl ri-arrow-down-wide-line"></i></h5>

            <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

            <div onClick={() => props.setConfirmRidePanel(true)} className="flex border-2 active:border-black mb-2 rounded-xl w-fullitems-center justify-between p-3">
                <img className="h-12" src={carimage} />
                <div className=" w-1/2">
                    <h4 className="font-medium text-lg">Uber Go<span><i className="ri-user-3-fill"></i></span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className="text-2xl font-semibold">$123</h2>
            </div>

            <div onClick={() => props.setConfirmRidePanel(true)} className="flex border-2 active:border-black mb-2 rounded-xl w-fullitems-center justify-between p-3">
                <img className="h-12" src={carnew} />
                <div className=" w-1/2">
                    <h4 className="font-medium text-lg">Uber XL<span><i className="ri-user-3-fill"></i></span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className="text-2xl font-semibold">$123</h2>
            </div>

            <div onClick={() => props.setConfirmRidePanel(true)} className="flex border-2 active:border-black mb-2 rounded-xl w-fullitems-center justify-between p-3">
                <img className="h-20" src={auto} />
                <div className=" w-1/2">
                    <h4 className="font-medium text-lg">Uber Auto<span><i className="ri-user-3-fill"></i></span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className="text-2xl font-semibold">$123</h2>
            </div>
        </div>
    )
}

export default VehiclePanel