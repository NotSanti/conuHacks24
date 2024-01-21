import Footer from "./Components/Footer.tsx"
import './App.css'
import {Map} from './Components/index.ts'
import Loading from './Components/Loading.tsx'


function App() {
  return (
    <>
      <Loading/>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
