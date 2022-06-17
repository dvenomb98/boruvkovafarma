import React from 'react'
import imageFirst from "../images/About-1.jpg"
import imageSecond from "../images/About-2.jpg"



function About() {
  return (
    <div className="">
        <div className="container mx-auto px-5 py-16 flex flex-col gap-5 sm:flex sm:flex-row justify-center items-center">
            <div>
            <h3 className="text-center sm:text-left font-hand text-4xl lg:text-6xl">O <span className="text-indigo-600">nás...</span></h3>
              <p className="text-gray-500 lg:basis-2/3 pt-5">Borůvková farma je mladičká a činí rozlohu 3 hektary. Máme zde vysazeno téměř <span className="font-bold">9500 ks rostlin na 3 polích.</span> Potrpíme si především na způsobu pěstování borůvek, který je šetrný k přírodě, tak abychom nenarušovali welfare volně žijících zvířat a pečovali o rostliny s láskou a respektem.</p>
            </div>
            <img src={imageFirst} alt="" className="sm:w-1/4 hidden sm:block shadow-lg" />
            <img src={imageSecond} alt="" className="sm:w-1/4 shadow-lg" />
           
        </div>
    
    </div>
  )
}

export default About