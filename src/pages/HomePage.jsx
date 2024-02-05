import React from 'react';
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="absolute top-0 right-0 m-4">
        {/* User icon goes here */}
        <Link to="/user-profile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21a8.5 8.5 0 0 0-7-12.8m0 0a8.5 8.5 0 1 0-4 16.3m11-2.3a8.5 8.5 0 0 0-15-7.7"></path>
          </svg>
        </Link>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/inactive-users">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Get Inactive Users
          </button>
          </Link>
          <Link to="/purchase-pending-users">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Get Unpurchased Users
          </button>
          </Link>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?s=1024x1024&w=is&k=20&c=DDQn_dYm4qaOcMBuelgjfGM6xjvHZdHQ_Y08BhvsqaU=" // Replace with your actual image URL
          alt="Random Kitten"
          className="rounded-lg shadow-lg w-100 h-80 object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HomePage;