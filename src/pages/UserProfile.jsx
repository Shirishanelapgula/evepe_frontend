import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";
import axios from "axios";

const UserProfile = () => {
  // Sample user data
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating a data fetching process with a delay
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem("userData");

        // Simulating an API call
        const response = await axios.post(
          `${VITE_BACKEND_URL}/user/logged-in-user`,
          { email }
        );

        // Simulating a delay of 1 second
        if (response.status === 200) {
          console.log(response.data);
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleOnLogout = () => {
    localStorage.removeItem("userData");
    Cookies.remove("jwtToken");
    navigate("/login");
    toast.success("Logged Out Success");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <p className="text-gray-600 mb-4">{user.email}</p>

      <div className="flex space-x-4">
        <button
          onClick={handleOnLogout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
