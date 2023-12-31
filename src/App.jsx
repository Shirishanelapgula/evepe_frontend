import {Routes,Route,Link} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL



const App =()=> {
  return (
   <div>
   <div>
    <Routes>
      <Route index element={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
    </Routes>
  </div>
  <ToastContainer/>
  </div>
  )
}

export default App
