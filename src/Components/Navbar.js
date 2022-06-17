import React from 'react'
import blueberries from "../images/blueberries.png"
import {MenuIcon} from "@heroicons/react/outline"
import {Link} from "react-router-dom"

function Navbar() {

  const [isOpened, setIsOpened] = React.useState(false)

  return (
      <div className="bg-white">
        <div className="container mx-auto px-5 py-10 flex items-center justify-between z-50 sticky top-0 sm:relative">
            <div className="flex flex-row items-center justify-center">
                <Link to="/">
                  <img src={blueberries} alt="boruvky" className="w-20" />
                </Link>
                <h1 className="font-hand text-2xl">Borůvková farma Čejkovice</h1>
            </div>

            <MenuIcon onClick={() => setIsOpened(prevState => !prevState)} className="lg:hidden w-6 cursor-pointer" />

            <nav className="hidden lg:block">
              <ul className="flex gap-5 lg:gap-10" >
                <Link to ="/"><li className=" cursor-pointer">Hlavní stránka</li></Link>
                 <Link to ="/novinky"><li className=" cursor-pointer">Novinky</li></Link>
                <Link to="/oteviracidoba"><li className=" cursor-pointer">Samosběr</li></Link>
                <Link to ="/cenik"><li className=" cursor-pointer">Ceník</li></Link>
                <Link to ="/fotografie"><li className=" cursor-pointer">Fotografie</li></Link>
                <Link to ="/kontakt"><li className=" cursor-pointer">Kontakt</li></Link>
              </ul>
            </nav>


            <nav className={`${isOpened ? "translate-x-0" : "translate-x-full"} fixed top-0 lg:hidden h-full right-0 w-1/2 bg-indigo-100 z-50`}>
            <ul className="flex flex-col mt-32 uppercase gap-10 items-start ml-7">
                <Link onClick={() => setIsOpened(prevState => !prevState)} to ="/"><li className=" cursor-pointer hover:opacity-80">Hlavní stránka</li></Link>
                <Link onClick={() => setIsOpened(prevState => !prevState)}  to="/novinky"><li className=" cursor-pointer hover:opacity-80">Novinky</li></Link>
                <Link onClick={() => setIsOpened(prevState => !prevState)}  to="/oteviracidoba"><li className=" cursor-pointer hover:opacity-80">Samosběr</li></Link>
                <Link onClick={() => setIsOpened(prevState => !prevState)} to ="/cenik"><li className=" cursor-pointer hover:opacity-80">Ceník</li></Link>
                <Link onClick={() => setIsOpened(prevState => !prevState)} to ="/fotografie"><li className=" cursor-pointer hover:opacity-80">Fotografie</li></Link>
                <Link onClick={() => setIsOpened(prevState => !prevState)} to ="/kontakt"><li className=" cursor-pointer hover:opacity-80">Kontakt</li></Link>
            </ul>
            <button onClick={() => setIsOpened(prevState => !prevState)} className="absolute top-2 left-5 text-xl p-2">X</button>
            </nav>
        </div>
    
      </div>
  )
}

export default Navbar