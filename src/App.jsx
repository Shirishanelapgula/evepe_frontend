import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import ContactsPage from "./pages/ContactsPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import CreateContact from "./pages/CreateContact";
import UpdateContact from "./pages/UpdatePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route index element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/contacts" element={<ContactsPage />}></Route>
            <Route path="/user-profile" element={<UserProfile />}></Route>
            <Route path="/create-contact" element={<CreateContact />}></Route>
            <Route
              path="/update-contact/:id"
              element={<UpdateContact />}
            ></Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
