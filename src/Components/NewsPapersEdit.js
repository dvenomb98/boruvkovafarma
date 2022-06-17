import React from 'react'
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";

function Newspapers({newsPapers}) {
    const [formData, setFormData] = React.useState({
        title:"",
        desc:"",
        img:"",
        url:""
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

            const docRef = doc(db, "zpravy", "zpravy")

            await updateDoc(docRef, {
                news: arrayUnion({title: formData.title, desc: formData.desc, img: formData.img, url: formData.url})
            })

            setFormData({
                title:"",
                desc:"",
                img:"",
                url:""
            })
            window.location.reload()
        }

        const itemRemove = async (name) => {
            const docRef = doc(db, "zpravy", "zpravy")
            await updateDoc(docRef, {
            news: arrayRemove({title: name.title, desc: name.desc, img: name.img, url: name.url})
            
        });window.location.reload()}


  return (
    <div className="container mx-auto px-5 pb-10">


    <p className="font-bold text-xl lg:basis-2/3 pb-5">Přidat novinku</p>
   
            <form onSubmit={addItem} className="flex flex-col w-full gap-5 pb-20 lg:grid lg:grid-cols-2">
                <input onChange={handleChange} name="title" value={formData.title} type="text" placeholder="Titulek" className="border p-1 px-2 rounded-sm"  />
                <input onChange={handleChange}  name="desc" value={formData.desc} type="text" placeholder="Popisek" className="border p-1 px-2 rounded-sm" />
                <input onChange={handleChange}  name="img" value={formData.img} type="text" placeholder="URL obrázku" className="border p-1 px-2 rounded-sm" />
                <input onChange={handleChange}  name="url" value={formData.url} type="text" placeholder="Odkaz na příspěvek" className="border p-1 px-2 rounded-sm" />
                <button className="bg-indigo-600 py-2 px-5 rounded-sm text-white uppercase tracking-wider lg:w-1/3">Přidat</button>
            </form>


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white bg-indigo-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Titulek
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Popisek
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Obrázek
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Odkaz
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Smazat</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {newsPapers?.news?.map(polozka => (
                    <tr key={polozka.title}  className="bg-white border-b hover:bg-gray-200">
                          <th scope="row" className="px-6 py-4 font-medium text-neutral-900  whitespace-nowrap">
                              {polozka.title}
                          </th>
                          <td className="px-6 py-4">
                              {polozka.desc.slice(0,8)}...
                          </td>
                        
                          <td className="px-6 py-4">
                             <a href={polozka.img} target="_blank" >
                              {polozka.img.slice(0,10)}...
                              </a>
                          </td>
                        
                          <td className="px-6 py-4">
                            <a href={polozka.url} target="_blank" >
                              {polozka.url.slice(0,10)}...
                            </a>
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

export default Newspapers