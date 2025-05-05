import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbarr from './components/Navbarr';
import Registration from './pages/Registration';
import {Routes, Route} from 'react-router-dom';
import List from './pages/List';
import { ToastContainer} from 'react-toastify';
import UpdateRegistration from './pages/UpdateRegistration';

function App() {
  

  return (
    <>
      <Navbarr/>
      <Routes>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/registration/:id' element={<UpdateRegistration/>}/>
      </Routes>
      <ToastContainer/>
      
      </>
  )
}

export default App
