import React from 'react'

function Newspapers({newsPapers}) {


  return (
    <div className="bg-slate-50">
        <div className="container mx-auto px-5 py-16">
        <h3 className="font-hand text-4xl lg:text-6xl">Novinky <span className="text-indigo-600">ze světa farmy</span></h3>

        <div className="flex flex-col gap-10 pt-20 lg:grid lg:grid-cols-2">
        {newsPapers?.news?.map(post => (
            <a key={post.title} href={post?.url} target="_blank">
                <div className=" group flex flex-col items-center bg-white rounded-md shadow-xl sm:flex-row cursor-pointer">

                    <div className="flex flex-col gap-5 p-5 basis-4/5 self-start">
                        
                        <h4 className="font-bold underline text-lg md:text-2xl">{post.title}</h4>
                        <p className="text-gray-500">{post.desc}</p>
    
                    </div>

                   

                    <div className="w-full h-full">
                        <img src={post.img} className="w-full h-full object-cover" />
                    </div>

                </div>
            </a>
        ))}
        
        
        </div>

        

        </div>
    </div>
    
  )
}

export default Newspapers