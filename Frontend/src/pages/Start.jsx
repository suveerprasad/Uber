import React from 'react'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="relative">
        <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
      </div>
      <div className="flex-1 flex items-center justify-center bg-white py-5 px-10">
        <div>
          <h2 className="text-3xl font-bold mb-5">Get Started with Uber</h2>
          <Link to ='/login' className="flex items-center justify-center w-full font-bold bg-black text-white py-3">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
