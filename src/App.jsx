import {Routes,Route,Link} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import UserProfile from "./pages/UserProfile"
import InactiveUsersDisplay from "./pages/InactiveUsersDisplay"
import PurchaseUserDetails from "./pages/PurchaseUserDetails"

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
      <Route path="/user-profile" element={<UserProfile/>}></Route>
      <Route path="/inactive-users" element={<InactiveUsersDisplay/>}></Route>
      <Route path="/purchase-pending-users" element={<PurchaseUserDetails/>}></Route>
    </Routes>
  </div>
  <ToastContainer/>
  </div>
  )
}

export default App
