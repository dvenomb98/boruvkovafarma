import React from 'react'
import {Link} from "react-router-dom"
import facebook from "../images/svg/facebook.svg"
import instagram from "../images/svg/instagram.svg"
import QRCode from 'react-qr-code'

function Footer() {
  return (
        <footer className="bg-neutral-800 text-white">
        <div className="container mx-auto px-5 py-16 flex flex-col gap-16 md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:items-start gap-10">
                <ul className="flex flex-col items-center gap-5 md:items-start">
                    <Link to ="/"><li className=" cursor-pointer hover:text-indigo-400">Hlavní stránka</li></Link>
                    <Link to ="/novinky"><li className=" cursor-pointer hover:text-indigo-400">Novinky</li></Link>
                    <Link to="/oteviracidoba"><li className=" cursor-pointer hover:text-indigo-400">Samosběr</li></Link>
                    <Link to ="/cenik"><li className=" cursor-pointer hover:text-indigo-400">Ceník</li></Link>
                    <Link to ="/fotografie"><li className=" cursor-pointer hover:text-indigo-400">Fotografie</li></Link>
                    <Link to ="/kontakt"><li className=" cursor-pointer hover:text-indigo-400">Kontakt</li></Link>
                </ul> 
                <div>
                    <div className="flex flex-row items-center gap-10">
                        <a target="_blank" href="https://www.instagram.com/boruvkovafarma_cejkovice/?hl=cs">
                            <img src={instagram} className="w-10" alt="instagram" />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/Borůvková- farma-Čejkovice-102015742194998/">
                            <img src={facebook} className="w-10" alt="instagram" />
                        </a>
                
                    </div>
                </div> 
            </div>
            
            <div className="text-white flex flex-col gap-16 items font-light md:flex-row md:justify-between">
            
                <div>
                    <p className="text-3xl font-hand font-bold">Podpořte nás!</p>
                    <p className="py-5"><span className="underline">Bankovní účet</span>: Česká spořitelna 2146216073/080</p>
                    <QRCode value={"SPD*1.0*ACC:CZ4008000000002146216073*AM:0.00*CC:CZK*MSG:DAR-Podpora Borůvkové farmy*RN:RADEK KVASNIČKA*"} />
               </div>
            <div className="flex flex-col gap-5 ">
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold pb-5">Radek Kvasnička</h4>
                  <p><span className="font-bold">Tel.:</span> 739 076 354</p>
                  <p><span className="font-bold">Email:</span>
                  <a href="mailto:modruvky@gmail.com"> modruvky@gmail.com</a>
                  </p> 
                </div>

                <div>
                    <h4 className="text-xl lg:text-2xl font-bold pb-5">Adresa farmy</h4>
                    <p><span className="font-bold">Adresa:</span> Čejkovice 92, Hluboká nad Vltavou 373 41</p>
                    <p><span className="font-bold">Souřadnice:</span> 49°01'01.88''N, 14°23'02.00''E</p> 
                </div>
            </div>
            </div>

            
            <p className=" text-center md:hidden">© 2022 - Daniel Bílek</p>
            
        </div>
            <p className=" text-center hidden md:block pb-16">© 2022 - Daniel Bílek</p>
    </footer>
  )
}

export default Footer