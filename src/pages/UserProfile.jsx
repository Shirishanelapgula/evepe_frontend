import React, { useState ,useEffect} from 'react';
import {toast} from "react-toastify";
import {VITE_BACKEND_URL} from "../App"
import axios from "axios"

const UserProfile = () => {
  // Sample user data
  const [user, setUser] = useState({});
  

  useEffect(() => {
    // Simulating a data fetching process with a delay
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem("userData")
        // Simulating an API call
        const response = await axios.post(`${VITE_BACKEND_URL}/user/get-logged-in-user`,{email})

        // Simulating a delay of 1 second
        if(response.status === 200){
            console.log(response.data)
            setUser(response.data);
           

        }
      } catch (error) {
        console.error('Error fetching data:', error);
        s
      }
    };

    fetchUserData();
  }, []);



  // Function to update purchase status
  const handlePurchaseStatusUpdate = async() => {
    try{

        const response = await axios.post(`${VITE_BACKEND_URL}/user/update-purchase-page`, {email: user.email})
        console.log(response)
        
        if(response.status === 200){
          toast.success(response.data.message);
        }

    }catch(err){
        console.log(err)

        toast.error(err.response.data.message)

    }
  };

  // Function to update checkout status
  const handleCheckoutStatusUpdate = async() => {
    try{

        const response = await axios.post(`${VITE_BACKEND_URL}/user/update-checkout-page`, {email: user.email})
        console.log(response)
        
        if(response.status === 200){
          toast.success(response.data.message);
        }

    }catch(err){
        console.log(err)

        toast.error(err.response.data.message)

    }
  };



  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{user.username}</h2>
      <p className="text-gray-600 mb-4">{user.email}</p>

      <div className="flex space-x-4">
        <button
          onClick={handlePurchaseStatusUpdate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Purchase Status
        </button>

        <button
          onClick={handleCheckoutStatusUpdate}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Checkout Status
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
