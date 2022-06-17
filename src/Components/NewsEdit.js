import React from 'react'
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';

function NewsEdit() {

  const [formData, setFormData] = React.useState({
    text: ""
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


  const today = new Date()
  let day = ("0" + today.getDate()).slice(-2); 
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let date = month + '/' + day + '/' + today.getFullYear();   

  const addNews = async (event) => {
    event.preventDefault()

    const newsRef = doc(db, "novinky", "novinky")

    await setDoc((newsRef), {
      text: formData.text,
      date: date
    })

    setFormData({text:""})

    window.location.reload()

  }



  return (
    <div className="container mx-auto px-5 py-10">

    <p className="font-bold text-xl lg:basis-2/3 pb-5">Aktualizovat</p>

    <form onSubmit={addNews}  className="flex flex-col w-full gap-5">
                <textarea rows="6" onChange={handleChange}  name="text" value={formData.text} type="text" placeholder="Text" className="border p-1 px-2 rounded-sm" />
                <button className="bg-indigo-600 py-2 px-5 rounded-sm text-white uppercase tracking-wider lg:w-1/4">Aktualizovat</button>
    </form>
        
    
    
    
    </div>
  )
}

export default NewsEdit