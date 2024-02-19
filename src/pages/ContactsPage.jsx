import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
import ContactItem from "../Components/ContactItem";
import { VITE_BACKEND_URL } from "../App";
import { useNavigate } from "react-router-dom";

const ContactsPage = () => {
  const navigate = useNavigate();
  const [Contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBackToHome = () => {
    navigate("/home");
  };

  const getContacts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${VITE_BACKEND_URL}/contact/get-contacts`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwtToken")}`,
          },
        }
      );
      console.log(response.data);
      setContacts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      <div>
        <Link
          to="/create-contact"
          className="inline-block m-4 shadow-md bg-yellow-700 text-white rounded-sm px-4 py-3 font-bold hover:bg-yellow-600 hover:cursor-pointer"
        >
          Create a User
        </Link>
        <button
          onClick={handleBackToHome}
          className="inline-block m-4 shadow-md bg-green-700 text-white rounded-sm px-4 py-3 font-bold hover:bg-green-600 hover:cursor-pointer"
        >
          Bact to Home
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {isLoading ? (
          "Loading...."
        ) : (
          <>
            {Contacts.length > 0 ? (
              <>
                {Contacts.map((eachContact, index) => {
                  return (
                    <div className="p-2" key={index}>
                      {
                        <ContactItem
                          key={index}
                          eachContact={eachContact}
                          getContacts={getContacts}
                        />
                      }
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="text-black font-bold">No Contacts Data Found</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
