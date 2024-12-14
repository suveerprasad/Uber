import React from 'react';

const LocationSearchPanel = (props) => {
    const locations = [
        "22B, Near Raghavendra Temple, Uttarahalli, Bengaluru, Karnataka 560075",
        "19, Nagarbhavi Layout, Bengaluru, Karnataka 560075",
        "No. 1, 2nd Cross Rd, Bengaluru, Karnataka 560075"
    ];

    return (
        <section>
            {
                locations.map((location, index) => (
                    <div onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                     }}
                        key={index}
                        className='flex gap-4 border-2 p-3 rounded-xl border-gray-300 active:border-black items-center my-2 justify-start'
                    >
                        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium'>{location}</h4>
                    </div>
                ))
            }
        </section>
    );
}

export default LocationSearchPanel;
