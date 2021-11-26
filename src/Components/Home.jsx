import React from "react";
import GlobalState from "../Context/globalState";
import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movies from "./Movies";

import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const { value5 } = useContext(GlobalState);
  const [pageCount, setPageCount] = value5;

  return (
    isAuthenticated ? (
    <div>
      <Header />
      <div className="grid grid-cols-5">
        <Movies />
      </div>
      <div className="flex w-screen justify-between">
        <div
          className="btn"
          onClick={() => setPageCount(Math.max(1, pageCount - 1))}
        >
          Previous Page
        </div>
        <div
          className="btn"
          onClick={() => setPageCount(Math.min(10, pageCount + 1))}
        >
          Next Page
        </div>
      </div>
      <Footer />
    </div>
    ) : (
      <div className= "flex w-screen py-32">
      <div className="text-5xl mx-16 text-white">You are not logged in.</div>
      <div className="login-btn" onClick={loginWithRedirect}>
        Login
      </div>
    </div>
    )
  );
};

export default Home;
