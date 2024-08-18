
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componenets/Home'
import Internalrep from './componenets/Internalrep'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Report1 from './componenets/Report1'
import Report2 from './componenets/Report2'
import Report3 from './componenets/Report3'


function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/report' element={<Internalrep/>}/>
        <Route path='/1' element={<Report1/>}/>
        <Route path='/2' element={<Report2/>}/>
        <Route path='/3' element={<Report3/>}/>
      </Routes>
    <Footer/>  
    </>
  )
}

export default App
