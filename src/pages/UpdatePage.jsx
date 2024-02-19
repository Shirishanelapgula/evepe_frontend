import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { VITE_BACKEND_URL } from "../App";

const UpdateContact = () => {
  let { id } = useParams();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    company: "",
    address: "",
    department: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getUser = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/contact/get-one-contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwtToken")}`,
          },
        }
      );
      setUserData({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        designation: response.data.designation,
        company: response.data.company,
        address: response.data.address,
        department: response.data.department,
        phone: response.data.phone,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${VITE_BACKEND_URL}/contact/update-contact/${id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwtToken")}`,
          },
        }
      );
      toast.success("Updated the Details successfully");
      navigate("/contacts");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Update a User
      </h2>
      <form onSubmit={updateUser}>
        <div className="space-y-2">
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={userData.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <label>Designation</label>
            <input
              type="text"
              value={userData.designation}
              onChange={(e) =>
                setUserData({ ...userData, designation: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Designation"
            />
          </div>
          <div>
            <label>Company Name</label>
            <input
              type="text"
              value={userData.company}
              onChange={(e) =>
                setUserData({ ...userData, company: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Company Name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              value={userData.address}
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Address"
            />
          </div>
          <div>
            <label>Department</label>
            <input
              type="text"
              value={userData.department}
              onChange={(e) =>
                setUserData({ ...userData, department: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Department"
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Phone Number"
            />
          </div>
          <div>
            {!isLoading && (
              <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateContact;
