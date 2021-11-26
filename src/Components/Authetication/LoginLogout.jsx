import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLogout = () => {

  const { isAuthenticated } = useAuth0();

  if(isAuthenticated) {
    return <Logout />;
  }
  else {
    return <Login />;
  }

};

export default LoginLogout;
