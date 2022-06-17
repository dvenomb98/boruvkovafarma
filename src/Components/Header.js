import React from 'react'
import samosber from "../images/header-1.jpg"
import objednavka from "../images/header-2.jpg"
import aktuality from "../images/header-3.jpg"
import {Link} from "react-router-dom"




function Header() {
  return (
    <header className="">
        <div className=" container mx-auto px-5 grid grid-cols-2 grid-rows-3 justify-center itemy-center gap-2 lg:gap-5 sm:grid sm:grid-cols-3 sm:grid-rows-2 lg:h-[30rem] ">

          <Link to ="/novinky" className="relative w-full h-full hover:opacity-90 cursor-pointer row-span-2 col-span-2">
            <img src={samosber} className="object-center object-cover w-full h-full" alt="samosber" />
            <h2 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            uppercase text-white italic text-xl sm:text-3xl lg:text-4xl tracking-wider">novinky</h2>
            
          </Link>

          <Link to="/oteviracidoba" className="relative w-full h-full hover:opacity-90 cursor-pointer ">
            <img src={aktuality} className="object-center object-cover w-full h-full " alt="samosber" />
            <h2 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            uppercase text-white italic text-xl  sm:text-3xl lg:text-4xl tracking-wider">Samosběr</h2>
            
          </Link>
          
          <Link to="/cenik" className="relative w-full h-full hover:opacity-90 cursor-pointer">
            <img src={objednavka} className="object-center object-cover w-full h-full " alt="samosber" />
            <h2 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            uppercase text-white italic text-xl sm:text-3xl lg:text-4xl tracking-wider">Ceník</h2>
            
          </Link>
        </div>
    
    </header>
  )
}

export default Header