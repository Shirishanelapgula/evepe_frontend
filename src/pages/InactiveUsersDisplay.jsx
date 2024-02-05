import React, { useState, useEffect } from 'react';
import { VITE_BACKEND_URL } from '../App';
import axios from "axios"
import InactiveUserCard from '../Components/InactiveUserCard'; // Import the UserCard component

const InactiveUsersDisplay = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [days, setDays] = useState(0);


  useEffect(() => {
  const fetchData = async () => {
    try {
      // Simulating an API call
      const response = await axios.get(`${VITE_BACKEND_URL}/user/inactive-users/${days}`);
   
      if(response.status == 200){
        setUsers(response.data);
        setLoading(false);
      }


    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
    // Simulating a data fetching process with a dela

    fetchData();
  }, [days]); // Update data when the 'days' state changes

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Inactive Users List</h1>

      {/* Input field to capture the number of days */}
      <label className="mb-4">
        Days:
        <input
          type="number"
          value={days}
          onChange={handleDaysChange}
          className="ml-2 p-2 border rounded"
        />
      </label>

      {/* Display loading message while data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Conditionally render cards based on the length of the user data array */}
      {users.length > 0 ? (
        users.map((user) => <InactiveUserCard key={user._id} user={user} />)
      ) : (
        !loading && <p>No users found.</p>
      )}
    </div>
  );
};

export default InactiveUsersDisplay;

