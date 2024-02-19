import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const auth = Cookies.get("jwtToken");
  return auth && auth !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
