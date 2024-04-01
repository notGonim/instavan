import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
<div className=" bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-center bg-cover min-h-screen text-white py-48 px-24 flex flex-col  items-start  " style={{backgroundImage: 'url("./images/home-hero.png")'}}>
    <h1 className="py-4 font-bold text-2xl leading-7">You got the travel plans, we got the travel vans.</h1>

    <p className='py-4 leading-6'>
      Add adventure to your life by joining the #InstaVan movement. Rent the
      perfect van to make your perfect road trip.
    </p>
    <Link to="/vans" className="inline-block text-center text-white bg-orange-500 border-none w-full mt-6 py-2 px-4 font-bold rounded cursor-pointer transition-transform hover:transform hover:translate-x-1 hover:translate-y-1 ">Find your van</Link>
  </div>
  )
}
