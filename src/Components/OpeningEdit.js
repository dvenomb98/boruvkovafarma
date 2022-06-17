import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { db } from '../firebase';
import { doc, setDoc, runTransaction, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import React from 'react'

function OpeningEdit({timeSchedule}) {

    const [formData, setFormData] = React.useState({
        cas:"",
        den:"",
        datum:"",
        mesic:""
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

    

    const addTimes = async (event) => {
            event.preventDefault()

            const docRef = doc(db, "oteviracidoba", formData.mesic)

            await updateDoc(docRef, {
                doba: arrayUnion({cas: formData.cas, datum: formData.datum, den: formData.den, mesic: formData.mesic})
            })
            setFormData({
                cas:"",
                den:"",
                datum:"",
                mesic:""
            })
            window.location.reload()
        }

    const removeTimes = async (name) => {
        const docRef = doc(db, "oteviracidoba", name.mesic)
        await updateDoc(docRef, {
        doba: arrayRemove({"cas": name.cas, "datum": name.datum, "den": name.den, "mesic": name.mesic})
        
    });window.location.reload()}

  return (
    <div className="">
        <div className="container mx-auto px-5 pb-10">

            

            <p className="font-bold text-xl lg:basis-2/3 pb-5">Přidat otevírací dobu</p>
   
            <form onSubmit={addTimes} className="flex flex-col w-full gap-5 pb-20 lg:grid lg:grid-cols-2">
                <input onChange={handleChange} name="den" value={formData.den} type="text" placeholder="Kdy..?" className="border p-1 px-2 rounded-sm"  />
                <input onChange={handleChange}  name="datum" value={formData.datum} type="text" placeholder="Datum" className="border p-1 px-2 rounded-sm" />
                <input onChange={handleChange} name="cas" value={formData.cas} type="text" placeholder="Čas" className="border p-1 px-2 rounded-sm" />
                <select 
                className="border p-1 px-2 rounded-sm"
                name="mesic"
                onChange={handleChange}
                value={formData.mesic}
                >
                <option value="">Vybrat měsíc</option>
                <option value="cervenec">Červenec</option>
                <option value="srpen">Srpen</option>
                <option value="zari">Září</option>
                </select>
                <button className="bg-indigo-600 py-2 px-5 rounded-sm text-white uppercase tracking-wider lg:w-1/3">Přidat</button>
            </form>
        
            

            <div className="flex flex-col gap-5">

            <div className="flex flex-row justify-between">
                <h4 className="text-3xl font-bold">Červenec</h4>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white bg-indigo-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Kdy?
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Datum
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Čas
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Smazat</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {timeSchedule[0]?.doba?.map(times => (
                    <tr key={times.datum} className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-neutral-900  whitespace-nowrap">
                            {times.den}
                        </th>
                        <td className="px-6 py-4">
                            {times.datum}
                        </td>
                        <td className="px-6 py-4">
                            {times.cas}
                        </td>

                        <td className="px-6 py-4 text-right">
                            <p onClick={() => removeTimes(times) } className="cursor-pointer font-medium text-indigo-600 hover:underline">Smazat</p>
                        </td>
                    </tr>
                ))}
                    </tbody>
                </table>
            </div>
            </div>

            <div className="flex flex-col gap-5 py-5">

            <div className="flex flex-row justify-between">
                <h4 className="text-3xl font-bold">Srpen</h4>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white bg-indigo-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Kdy?
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Datum
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Čas
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Smazat</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {timeSchedule[1]?.doba?.map(times => (
                    <tr key={times.datum} className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-neutral-900  whitespace-nowrap">
                            {times.den}
                        </th>
                        <td className="px-6 py-4">
                            {times.datum}
                        </td>
                        <td className="px-6 py-4">
                            {times.cas}
                        </td>

                        <td className="px-6 py-4 text-right">
                        <p onClick={() => removeTimes(times) } className="cursor-pointer font-medium text-indigo-600 hover:underline">Smazat</p>
                        </td>
                    </tr>
                ))}
                    </tbody>
                </table>
            </div>

           
            </div>

            <div className="flex flex-col gap-5">

            <div className="flex flex-row justify-between">
                <h4 className="text-3xl font-bold">Září</h4>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white bg-indigo-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Kdy?
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Datum
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Čas
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Smazat</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {timeSchedule[2]?.doba?.map(times => (
                    <tr key={times.datum} className="bg-white border-b hover:bg-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-neutral-900  whitespace-nowrap">
                            {times.den}
                        </th>
                        <td className="px-6 py-4">
                            {times.datum}
                        </td>
                        <td className="px-6 py-4">
                            {times.cas}
                        </td>

                        <td className="px-6 py-4 text-right">
                        <p onClick={() => removeTimes(times) } className="cursor-pointer font-medium text-indigo-600 hover:underline">Smazat</p>
                        </td>
                    </tr>
                ))}
                    </tbody>
                </table>
            </div>
            </div>

     

        </div>
    </div>
  )
}

export default OpeningEdit