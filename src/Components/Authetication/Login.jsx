import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <>
    <button
      className="uppercase h-12 mt-3 text-white w-full rounded bg-red-700 hover:bg-red-800"
      onClick={() => loginWithRedirect()}
    >
      {console.log("Login Component")}
      Register
    </button>
    </>
  );
};

export default Login;
