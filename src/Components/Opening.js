import React from 'react'
import letak from "../images/letak.jpg"
import {Link} from "react-scroll"

function Opening({timeSchedule}) {
  return (
   <div className="bg-slate-50">
      <div className="container mx-auto px-5 py-16">
        <h3 className="font-hand text-4xl lg:text-6xl">Otevírací doba</h3>
        <p className="text-red-600 pt-5">Změna otevírací doby podle počasí vyhrazena!</p>
        <Link  to="pravidla" spy={true} smooth={true} offset={50} duration={500}>
          <p className="text-gray-500 underline cursor-pointer hover:text-neutral-900 inline">Pravidla samosběru</p>
         </Link>
         <Link className="p-10"  to="faq" spy={true} smooth={true} offset={50} duration={500}>
          <p className="text-gray-500 underline cursor-pointer hover:text-neutral-900 inline">Často kladené otázky</p>
         </Link>

        <div className="md:flex md:flex-row md:justify-between md:items-center pt-5">
          <div className="md:w-1/2 md:text-lg">
            <div className="pt-10">
              <h4 className="text-3xl border-b pb-1">Červenec</h4>
              {timeSchedule[0]?.doba?.map(times => (
                <div key={times.datum} className="flex flex-row justify-between gap-10 pt-5 text-gray-500">
                  <p className="font-bold">{times.den}</p>
                  <p>{times.datum}</p>
                  <p>{times.cas}</p>
                </div>
              ))}
            </div>

            <div className="pt-10">
            <h4 className="text-3xl pb-1 border-b">Srpen</h4>
            {timeSchedule[1]?.doba?.map(times => (
              <div key={times.datum} className="flex flex-row justify-between gap-10 pt-5 text-gray-500">
                <p className="font-bold">{times.den}</p>
                <p>{times.datum}</p>
                <p>{times.cas}</p>
              </div>
            ))}
          </div>

          <div className="pt-10">
          <h4 className="text-3xl pb-1 border-b">Září</h4>
          {timeSchedule[2]?.doba?.map(times => (
            <div key={times.datum} className="flex flex-row justify-between gap-10 pt-5 text-gray-500">
              <p className="font-bold">{times.den}</p>
              <p>{times.datum}</p>
              <p>{times.cas}</p>
            </div>
          ))}
        </div>

          </div>

          <img src={letak} alt="letak" className="md:w-1/3 mt-10 md:mt-0 shadow-xl" />
        </div>
      </div>
   </div>
  )
}

export default Opening