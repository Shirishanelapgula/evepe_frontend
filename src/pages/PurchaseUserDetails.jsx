import React, { useState, useEffect } from 'react';
import { VITE_BACKEND_URL } from '../App';
import axios from "axios"
import UnpurchasedUserCard from '../Components/UnpurchasedUserCard'; // Import the UserCard component

const PurchaseUserDetails = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  


  useEffect(() => {
    // Simulating a data fetching process with a delay
    const fetchData = async () => {
      try {
        // Simulating an API call
        const response = await axios.get(`${VITE_BACKEND_URL}/user/visited-checkout-page-users`);
        if(response.status === 200){

            setUsers(response.data);
            setLoading(false);

        }

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Update data when the 'days' state changes

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Unpurchased Course Users List</h1>

      {/* Display loading message while data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Conditionally render cards based on the length of the user data array */}
      {users.length > 0 ? (
        users.map((user) => <UnpurchasedUserCard key={user._id} user={user} />)
      ) : (
        !loading && <p>No users found.</p>
      )}
    </div>
  );
};

export default PurchaseUserDetails;

