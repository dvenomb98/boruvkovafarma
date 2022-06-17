import React from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase';
import Photos from './Photos';
import rekord from "../images/rekord.jpg"

function Fotografie() {

  const [photos, setPhotos] = React.useState([])
 

    React.useState(() => {

        const CollectionRef = collection(db, "images")

        const getPhotos = async () => {
          const data = await getDocs(CollectionRef)
          setPhotos(data.docs.map((doc) => ({...doc.data()})))
        }
        getPhotos()
    
      },[])

  return (
    <div className="bg-slate-50">


        <div className="container mx-auto px-5 py-16">
          <h3 className="font-hand text-4xl lg:text-6xl">Fotografie <span className="text-indigo-600">Farmy</span></h3>

          <div className="pt-10 flex flex-col gap-5">
            <h4 className="text-2xl lg:text-4xl">Rekordní borůvka</h4>
            <div className="flex flex-col gap-5">
              <p className="text-gray-500">Každou letní sezónu si pro zvědavost vážíme ty největší giganty, které se nám dostaly pod ruku. Rekordní borůvkou se tak stala obryně o váze 9,8 g. Letošní sezónu se budeme snažit najít opět tu největší z největších a uvidíme, zda bude předešlá borůvka překonána. Že nevěříte, že tolik? Přijďte se přesvědčit na vlastní oči.
              </p>
              <img src={rekord} alt="rekordní borůvka" className="md:w-1/4" />
            </div>
        
        
        
          </div>

          <Photos
          photos={photos}
          />
        
        
        </div>
    </div>



  )
}
export default Fotografie