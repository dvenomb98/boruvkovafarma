import React from 'react'
import letak from "../images/letak.jpg"

function Cenik({cenik}) {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-5 py-16">
        <h3 className="font-hand text-4xl lg:text-6xl">Ceník</h3>
        <div className="md:flex md:flex-row md:justify-between md:items-center gap-10">
          <div className="md:w-2/3 lg:w-1/2 md:text-lg">
            <div className="pt-10">
              <h4 className="text-3xl border-b pb-1">Ceník</h4>
              {cenik?.polozky?.map(polozka => (
                <div key={polozka.nazev} className="flex flex-row justify-between gap-10 pt-5 text-gray-500">
                  <p className="font-bold">{polozka.nazev}</p>
                  <p>{polozka.cena}</p>
                 
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

export default Cenik