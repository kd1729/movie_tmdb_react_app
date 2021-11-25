import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <>
    <button
      class="uppercase h-12 mt-3 text-white w-full rounded bg-red-700 hover:bg-red-800"
      onClick={() => loginWithRedirect()}
    >
      Register
    </button>
    <Logout />
    </>
  );
};

export default Login;
