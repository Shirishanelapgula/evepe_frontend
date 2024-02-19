import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../App";

const ContactItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { eachContact, getContacts } = props;
  const deleteContact = async (id) => {
    const result = await Swal.fire({
      title: "Do you really want to delete the product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3885d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${VITE_BACKEND_URL}/contact/delete-contact/${id}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwtToken")}`,
          },
        });
        toast.success("Deleted the product successfully");
        getContacts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <div className="px-4 pt-2 pb-4">
        <h2 className="text font-semibold">
          {" "}
          FirstName : {eachContact.firstName}
        </h2>
        <div className="test-sm font-semibold">
          LastName: {eachContact.lastName}{" "}
        </div>
        <div className="text-sm font-semibold">
          Designation: {eachContact.designation}
        </div>
        <div className="text-sm font-semibold">
          Company: {eachContact.company}
        </div>
        <div className="text-sm font-semibold">Email: {eachContact.email}</div>
        <div className="text-sm font-semibold">
          Address: {eachContact.address}
        </div>
        <div className="text-sm font-semibold">
          Department: {eachContact.department}
        </div>
        <div className="text-sm font-semibold">Phone: {eachContact.phone}</div>
        <div className="mt-3 flex gap-4">
          <Link
            to={`/update-contact/${eachContact._id}`}
            className="inline-block w-full text-center shadow-md text-sm bg-blue-700 text-white rounded 0-sm px-4 py-1 font-bold hover:bg-blue-600 hover:cursor-pointer"
          >
            Update
          </Link>
          <button
            onClick={() => deleteContact(eachContact._id)}
            className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded 0-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
