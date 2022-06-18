import React from 'react'

function Faq() {

    const questions = [
        {
            question: "Jak se vybavit na samosběr?",
            answer: "Samosběr většinou probíhá od dopoledních hodin. Brány otevíráme v 9:00, kdy občas ještě bývá mokro, a proto je dobré si na sebe vzít holinky. Pokud se na samosběr chystáte v odpoledních parných hodinách, doporučujeme vybavit se pokrývkou hlavy. Slunko bývá neúprosné."
        },
        {
            question: "Od kdy do kdy trvá sezóna?",
            answer: "Zrání borůvek začíná od začátku července do září, jelikož v průběhu sezóny dozrává postupně 5 odrůd kanadských borůvek, které se pyšní každá svou jedinečnou chutí."
        },
        {
             question: "A že nejsou kanadské borůvky to samé jako ty z lesa?",
            answer: "Nejsou. Jsou to jiné druhy tohoto úžasného ovoce a oba mají své specifické vlastnosti. Na vzrostlém keři kanadské borůvky můžete ale s přehledem sklidit i kolem 7 kg ovoce, u větších keřů klidně i více. Oproti lesním borůvkám můžete plody kanadských borůvek skladovat i měsíc v lednici a stále budou čerstvé. Lze borůvky i zamrazit do zásoby. Co se týká chuti, no to musíte posoudit sami. Věříme ale, že si chuť našich borůvek zamilujete stejně tak jako my."  
        }
    ]





  return (
    <div id="faq" className="container mx-auto px-5 py-16">
         <h3 className="font-hand text-4xl lg:text-6xl pb-10">Často <span className="text-indigo-600">kladené otázky</span></h3>
    {questions.map((quest,index) => (
        <div key={index}>
            <h5 className="font-bold text-lg lg:text-xl">{quest.question}</h5>
            <p className="text-gray-500 py-5">{quest.answer}</p>
         
         </div>

    ))}
         
    </div>
  )
}

export default Faq