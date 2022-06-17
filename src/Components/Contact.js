import React from "react"
import facebook from "../images/svg/facebook.svg"
import instagram from "../images/svg/instagram.svg"
import QRCode from "react-qr-code";


function Contact() {
  return (
    <div className='bg-slate-50'>
      <div className='container mx-auto px-5 py-16'>
         <h3 className="font-hand text-4xl lg:text-6xl pb-10">Kontaktní <span className="text-indigo-600"> údaje</span></h3>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-5 text-gray-500 ">
              <div>
                  <h4 className="text-xl lg:text-2xl text-neutral-800 font-bold">Radek Kvasnička</h4>
                  <p><span className="font-bold">Tel.:</span> 739 076 354</p>
                  <p><span className="font-bold">Email:</span>
                    <a href="mailto:modruvky@gmail.com"> modruvky@gmail.com</a>
                </p> 
              </div>

              <div>
                  <h4 className="text-xl lg:text-2xl text-neutral-800 font-bold">Adresa farmy</h4>
                  <p><span className="font-bold">Adresa:</span> Čejkovice 92, Hluboká nad Vltavou 373 41</p>
                  <p><span className="font-bold">Souřadnice:</span> 49°01'01.88''N, 14°23'02.00''E</p> 
              </div>

                <div>
                  <h4 className="text-xl lg:text-2xl text-neutral-800  font-bold">Identifikační údaje</h4>
                  <p><span className="font-bold">IČ: </span> 07339046</p>
                  <p><span className="font-bold">DIČ: </span> CZ07339046</p> 
                  <p>BoFaČ s.r.o., Čejkovice 92 Hluboká nad Vltavou 373 41</p>

                  <p className="pt-5"><span className="font-bold">IČ: </span> 17093872</p>
                  <p><span className="font-bold">DIČ: </span> CZ17093872</p> 
                  <p>Modrůvky s.r.o., Čejkovice 92 Hluboká nad Vltavou 373 41</p>
                  <p></p>
              </div>

              <a href="#" className="text-white bg-indigo-600 p-3 rounded-md cursor-pointer text-center hover:opacity-90 md:w-2/4">ODKAZ NA MAPY</a>

          </div>

          <div className="text-gray-500 flex flex-col gap-5 basis-1/2">
            <QRCode value={"SPD*1.0*ACC:CZ4008000000002146216073*AM:0.00*CC:CZK*MSG:DAR-Podpora Borůvkové farmy*RN:RADEK KVASNIČKA*"} />
            <p className="text-neutral-800 "><span className="underline">Bankovní účet</span>: Česká spořitelna 2146216073/080</p>
            <p className="text-3xl font-hand font-bold text-indigo-600 ">Podpořte nás!</p>
            <p>Žijete v souladu s přírodou? Není Vám ekologie a ochrana zvířat a přírody lhostejná? Nám také ne. Máme vize. Rádi bychom na naší Borůvkové farmě nechali zřídit pár věcí, které by dávaly smysl. Které by pomohly volně žijícím zvířatům k lepším podmínkám pro život na polích. Chceme, aby to na Borůvkové farmě a v jejím okolí žilo. Jsme pro různorodost, pro pestrou biologickou diverzitu!</p>
            <ul className="list-inside list-disc font-bold">
              <li>Umístění čmelínů pro čmeláky a divoké včely</li>
              <li>Postavení budek pro poštolky a sýčky.</li>
              <li>Tvorba gabionových útočišť z kamenů pro ještěrky a užovky</li>
              <li>Rozmístění pítek pro hmyz a ptactvo</li>
              <li>A mnoho dalších ..</li>
            </ul>
            <p className="text-indigo-600 ">Pokud Vám dává alespoň jedna věc smysl a rádi byste nás podpořili, budeme rádi za jakoukoliv částku. Děkujeme.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
