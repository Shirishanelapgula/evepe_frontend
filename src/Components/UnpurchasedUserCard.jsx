import React, { useState } from 'react';
import {toast} from "react-toastify";
import {VITE_BACKEND_URL} from "../App";
import axios from "axios"

const UnpurchasedUserCard = (props) => {

    const {user} = props
  
    const email = localStorage.getItem("userData")
    
  // Function to handle sending notification
  const handleSendNotification = async() => {
    try{
        
        const response = await axios.post(`${VITE_BACKEND_URL}/user/purchase-remainder`, {email})
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
    <div style={{width:"60%"}}className="h-20 bg-white rounded-lg shadow-lg p-4 flex items-center justify-between m-5">
      <div>
        <h2 className="text-xl font-bold">{user.username}</h2>
      </div>
      
      <button
        onClick={handleSendNotification}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send Notification
      </button>
    </div>
  );
};

export default UnpurchasedUserCard;
