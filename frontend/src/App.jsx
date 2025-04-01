import './App.css'
import NavBar from "./Components/NavBar";
import {Routes, Route} from 'react-router';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Proyects from "./pages/Proyects";
import Footer from "./Components/Footer";

function App() {

  return (
    <container>
      <div className='min-h-screen flex flex-col bg-gray-50'>
        <NavBar/>
          <div div className="pt-40">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/' element={<About/>}/>
              <Route path='/' element={<Contact/>}/>
              <Route path='/' element={<Proyects/>}/>
              <Route path='/' element={<Services/>}/>
            </Routes>
          </div>
        <Footer/>
      </div>
    </container>
  )
}

export default App
