import React from 'react'
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";

function CenikEdit({cenik}) {

    const [formData, setFormData] = React.useState({
        nazev:"",
        cena:""
    })


    function handleChange(event) {
        const {name, value, type} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: value
                    }
                })
               
            }
    
    const addItem = async (event) => {
            event.preventDefault()

            const docRef = doc(db, "cenik", "cenik")

            await updateDoc(docRef, {
                polozky: arrayUnion({cena: formData.cena, nazev: formData.nazev})
            })

            setFormData({
                nazev:"",
                cena:""
            })
            window.location.reload()
        }

        const itemRemove = async (name) => {
            const docRef = doc(db, "cenik", "cenik")
            await updateDoc(docRef, {
            polozky: arrayRemove({cena: name.cena, nazev: name.nazev})
            
        });window.location.reload()}


  return (
    <div className="container mx-auto px-5 pb-10">


    <p className="font-bold text-xl lg:basis-2/3 pb-5">Přidat položku   </p>
   
            <form onSubmit={addItem} className="flex flex-col w-full gap-5 pb-20 lg:grid lg:grid-cols-2">
                <input onChange={handleChange} name="nazev" value={formData.nazev} type="text" placeholder="Název" className="border p-1 px-2 rounded-sm"  />
                <input onChange={handleChange}  name="cena" value={formData.cena} type="text" placeholder="Cena / Množství" className="border p-1 px-2 rounded-sm" />
                <button className="bg-indigo-600 py-2 px-5 rounded-sm text-white uppercase tracking-wider lg:w-1/3">Přidat</button>
            </form>


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white bg-indigo-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Název
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cena / Množství
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Smazat</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {cenik?.polozky?.map(polozka => (
                    <tr key={polozka.nazev}  className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-neutral-900  whitespace-nowrap">
                            {polozka.nazev}
                        </th>
                        <td className="px-6 py-4">
                            {polozka.cena}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <p onClick={() => itemRemove(polozka)} className="font-medium text-indigo-600 hover:underline cursor-pointer">Smazat</p>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>
  )
}

export default CenikEdit