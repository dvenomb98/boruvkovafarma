import React from 'react'
import facebook from "../images/svg/facebook.svg"
import instagram from "../images/svg/instagram.svg"

function Socials() {
  return (
    <div className="bg-slate-50">
        <div className="container mx-auto px-5 py-16 flex flex-col gap-10 items-center lg:flex-row">
        
        <div className="flex flex-col gap-10 justify-center lg:flex-col">
            <h3 className="font-hand text-center text-4xl lg:text-6xl">Sledujte nás <span className="text-indigo-600">na sociálních sitích!</span></h3>
            <div className="flex gap-10 flex-row justify-center">
                 <a target="_blank" href="https://www.facebook.com/Borůvková- farma-Čejkovice-102015742194998/">
                    <img src={facebook} className="w-10" alt="instagram" />
                  </a>
                <a target="_blank" href="https://www.instagram.com/boruvkovafarma_cejkovice/?hl=cs">
                    <img src={instagram} className="w-10" alt="instagram" />
                </a>
            </div>
        </div>

        
        <p className="text-gray-500 lg:basis-2/3" >Působíme i na sociálních sítích, kam se snažíme přidávat aktuality o samosběru, otevírací době a samozřejmě také i zajímavosti o borůvkách, které Vás možná překvapí. A pokud jste vášniví pekaři, můžete se inspirovat našimi recepty z kanadských borůvek, které se skvěle hodí k nedělní kávě.</p>
        
        

       
        
        
        </div>
    
    
    </div>
  )
}

export default Socials