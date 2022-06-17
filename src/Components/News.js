import React from 'react'
import news from "../images/news.jpg"

function News({newsArr}) {

  return (
<div id="aktuality"  className="bg-news bg-cover bg-center bg-scroll md:bg-fixed ">
      <div className="py-32 container mx-auto px-5 text-white text-center flex flex-col gap-10 md:flex-row-reverse md:justify-between md:items-center">

        
        <div className="md:text-right">
            <h3 className="font-hand text-4xl lg:text-6xl text-white ">Aktuality</h3>
            <h3 className="font-hand text-4xl lg:text-6xl text-indigo-300">borůvkové farmy</h3>
        </div>
        

        <div className="flex flex-col gap-5 md:text-left">
            <p className="text-xl font-semibold">Aktualizováno: <span className="font-normal">{newsArr?.date}</span></p>
            <p className="font-light">{newsArr?.text}</p> 
        </div>
        
        
      </div>

</div>
      
  

    
  )
}

export default News