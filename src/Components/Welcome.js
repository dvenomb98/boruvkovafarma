import React from 'react'
import blueberries from "../images/blueberries.png"

function Welcome() {
  return (
    <main className="bg-slate-50">
        <div className="container mx-auto px-5 py-16 flex flex-col items-center justify-center lg:flex-row">

          <div className="font-hand flex flex-col items-center">
            <h1 className="text-center text-4xl lg:text-6xl">Vítejte na naší farmě</h1>
            <h2 className="text-center text-2xl lg:text-3xl text-indigo-600 py-2">Borůvková farma Čejkovice </h2>
            <img src={blueberries} alt="borůvky" className="w-1/2 py-5" />
          </div>

          

          <p className=" text-gray-500 basis-2/3 pt-5 lg:pt-0"> Vítejte na našich stránkách rodinné borůvkové farmy, kterou najdete v malebné vesničce <span className="font-bold">Čejkovice u Českých Budějovic.</span> Pokud chcete zažít pohodu a klid a nasbírat si slaďoučké kanadské borůvky, nasaďte si klobouky, vezměte košíky a <span className="font-bold">přijeďte k nám na samosběr.</span> Borůvky si lze i jen tak koupit již nasbírané připravené v košících.</p>
          

        </div>
    </main>
  )
}

export default Welcome