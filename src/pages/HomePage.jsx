import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1473689453/photo/businessman-with-evaluating-questionnaire-on-online-laptop-computer-assessment-survey-online.jpg?s=1024x1024&w=is&k=20&c=yY3ty0twQDqehzEmYM6ZHLmicoVtUZM6TIFdYekN_4E=')`,
      }}
    >
      <div className="absolute top-0 right-0 m-4">
        {/* User icon goes here */}
        <Link to="/user-profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="h-8 w-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21a8.5 8.5 0 0 0-7-12.8m0 0a8.5 8.5 0 1 0-4 16.3m11-2.3a8.5 8.5 0 0 0-15-7.7"
            ></path>
          </svg>
        </Link>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to the Dashboard!
        </h1>

        <div className="flex items-center justify-center">
          <Link to="/contacts">
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Get Contacts Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
