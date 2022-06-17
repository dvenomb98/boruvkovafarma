import { ArchiveIcon, CashIcon, LibraryIcon, LogoutIcon, PencilIcon } from '@heroicons/react/outline'
import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { UserAuth } from '../context/AuthContext';


function Admin() {

    const { logout } = UserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
          await logout();
          navigate('/');
        } catch (e) {
          console.log(e.message);
        }
      };
  return (
    <div className="">
        <div className="container mx-auto px-5 py-16">

        <h3 className="font-hand text-center text-4xl lg:text-6xl">Admin panel</h3>

        <div className="flex flex-col w-full gap-5 md:grid md:grid-cols-2 mt-10">
            <Link to="/admin/oteviracidoba" className="bg-gray-200 cursor-pointer rounded-md p-3 flex flex-row gap-5 md:w-full">
                <PencilIcon className="w-5" />
                <p>Změna otevírácí doby</p>
            </Link>
            <Link to="/admin/aktuality" className="bg-gray-200 cursor-pointer  rounded-md p-3 flex flex-row gap-5 md:w-full">
                <LibraryIcon className="w-5" />
                <p>Aktuality</p>
            </Link>
            <Link to="/admin/novinky" className="bg-gray-200 cursor-pointer  rounded-md p-3 flex flex-row gap-5 md:w-full">
              <ArchiveIcon className="w-5" />
              <p>Novinky</p>
             </Link>
            <Link to="/admin/cenik" className="bg-gray-200 cursor-pointer  rounded-md p-3 flex flex-row gap-5 md:w-full">
              <CashIcon className="w-5" />
              <p>Ceník</p>
            </Link>
            <div  onClick={() => handleLogout()} className="bg-gray-200 cursor-pointer  rounded-md p-3 flex flex-row gap-5 md:w-full">
                <LogoutIcon className="w-5" />
                <p>Odhlásit se</p>
            </div>
        
        
        
        </div>

        </div>
    </div>
  )
}

export default Admin