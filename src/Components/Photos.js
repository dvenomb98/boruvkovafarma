import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon, PhoneOutgoingIcon} from "@heroicons/react/outline"

function Photos({photos}) {


  return (

    <div className="py-10">
        {photos?.map(photo => (
        <div key={photo.nazev} className="py-5">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl lg:text-4xl">{photo.nazev}</h4>
            </div>

            <div className="flex flex-row gap-5 overflow-x-scroll scroll-smooth py-5 scrollbar-hide md:grid md:grid-cols-3 md:grid-rows-auto lg:grid-cols-5 lg:grid-rows-1">
            {photo?.fotky.map(fotka =>(
                
                <div key={fotka} className="min-w-[16em] min-h-[16em] max-w-[16em] max-h-[16em] overflow-hidden md:min-w-full md:min-h-full md:max-w-full md:max-h-full">
                    <img src={fotka} alt="" className="w-full h-full object-cover" />
                </div>
                
                
            ))}
            </div>
        </div>
        ))}
    </div>
  )
}

export default Photos