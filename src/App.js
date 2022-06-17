import React from "react"
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Welcome from "./Components/Welcome"
import About from "./Components/About"
import Socials from "./Components/Socials"
import { AuthContextProvider } from "./context/AuthContext"
import Opening from "./Components/Opening"
import ProtectedRoute from "./Components/ProtectedRoute"
import Login from "./Components/Login"
import Admin from "./Components/Admin"

import { collection, getDoc, getDocs, doc } from "firebase/firestore"
import { db } from "./firebase"
import OpeningEdit from "./Components/OpeningEdit"
import NewsEdit from "./Components/NewsEdit"
import News from "./Components/News"
import Cenik from "./Components/Cenik"
import CenikEdit from "./Components/CenikEdit"
import Fotografie from "./Components/Fotografie"
import Pravidla from "./Components/Pravidla"
import Newspapers from "./Components/Newspapers"
import NewsPapersEdit from "./Components/NewsPapersEdit"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Faq from "./Components/Faq"

function App() {
  const [timeSchedule, setTimeSchedule] = React.useState([])
  const [newsArr, setNewsArr] = React.useState({})
  const [cenik, setCenik] = React.useState([])
  const [newsPapers, setNewsPapers] = React.useState([])

  React.useEffect(() => {
    const CollectionRef = collection(db, "oteviracidoba")

    const getTime = async () => {
      const data = await getDocs(CollectionRef)
      setTimeSchedule(data.docs.map((doc) => ({ ...doc.data() })))
    }
    getTime()
  }, [])

  React.useState(() => {
    const getNews = async () => {
      const docRef = doc(db, "novinky", "novinky")
      const docSnap = await getDoc(docRef)
      setNewsArr(docSnap.data())
    }
    getNews()
  }, [])

  React.useState(() => {
    const getCenik = async () => {
      const docRef = doc(db, "cenik", "cenik")
      const docSnap = await getDoc(docRef)
      setCenik(docSnap.data())
    }
    getCenik()
  }, [])

  React.useState(() => {
    const getNewspapers = async () => {
      const docRef = doc(db, "zpravy", "zpravy")
      const docSnap = await getDoc(docRef)
      setNewsPapers(docSnap.data())
    }
    getNewspapers()
  }, [])

  return (
    <div className='text-base  md:text-lg text-neutral-800 font-basic'>
      <AuthContextProvider>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
                <Header />
                <Welcome />
                <News newsArr={newsArr} />
                <About />
                <Socials />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path='/oteviracidoba'
            element={
              <>
                <Navbar />
                  <Opening timeSchedule={timeSchedule} />
                  <Pravidla />
                  <Faq />
                <Footer />

              </>
            }
          ></Route>

          <Route
            path='/cenik'
            element={
              <>
                <Navbar />
                <Cenik cenik={cenik} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path='/fotografie'
            element={
              <>
                <Navbar />
                <Fotografie />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path='/novinky'
            element={
              <>
                <Navbar />
                <Newspapers newsPapers={newsPapers} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path='/admin/oteviracidoba'
            element={
              <ProtectedRoute>
                <Admin />
                <OpeningEdit timeSchedule={timeSchedule} />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path='/admin/aktuality'
            element={
              <ProtectedRoute>
                <Admin />
                <News newsArr={newsArr} />
                <NewsEdit />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path='/admin/novinky'
            element={
              <ProtectedRoute>
                <Admin />
                <NewsPapersEdit newsPapers={newsPapers} />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path='/admin/cenik'
            element={
              <ProtectedRoute>
                <Admin />
                <CenikEdit cenik={cenik} />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path='/login'
            element={
              <>
                <Login />
              </>
            }
          ></Route>

          <Route
            path='/kontakt'
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
