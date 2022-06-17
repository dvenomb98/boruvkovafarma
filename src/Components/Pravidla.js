import React from 'react'
import pravidla from "../images/pravidla.jpg"

function Pravidla() {

    const rules = [
        "Řídíte se pokyny pracovníků borůvkové farmy.",
        "Borůvky se sbírají do vlastních nádob s minimálním odběrem 2kg / os.",
        "Vlastní nádobu si necháte zvážit u vstupu. Na nádobu Vám bude napsána odpovídající hmotnost.",
        "Obsluha samosběru Vám určí místo pro trhání borůvek.",
        "Sbíráte všechny zralé plody bez ohledu na velikost.",
        "Nepoškozujete porost borůvek a nevstupujete do okolních porostů, které nejsou určeny pro samosběr.",
        "Vstup dětem mladší 12 let a psům není povolen.",
        "V celém areálu borůvkové farmy a na všech polích platí zákaz kouření.",
        "Po ukončení trhání si necháte zvážit všechny nádoby s borůvkami.",
        "Obsluha na pokladně Vám sdělí vypočtený obnos.",
        "Platba možná pouze v hotovosti."
    ]




  return (
    <div className="bg-slate-100">
    <div id="pravidla" className="container mx-auto px-5 py-16">
      <h3 className="font-hand text-4xl lg:text-6xl">Pravidla <span className="text-indigo-600">samosběru</span></h3>
    <div className="lg:flex justify-between items-center lg:pt-10">
        <div>
        <ul className="flex flex-col gap-2 py-5">
        {rules.map(rule => (
            <li className="text-gray-500">• {rule}</li>
        ))}
            
        </ul>

        <p className="font-semibold">Děkujeme vřele za pochopení. Moc se na Vaši návštěvu těšíme. Borůvkám zdar!</p>
        </div>
        <img src={pravidla} alt="Fotka z léta" className="hidden lg:block w-1/3 shadow-xl shadow-black/30" />

    </div>
    </div>
    </div>
  )
}

export default Pravidla