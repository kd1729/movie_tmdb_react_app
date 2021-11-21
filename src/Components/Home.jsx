import React from "react";
import GlobalState from "../Context/globalState";
import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movies from "./Movies";

const Home = () => {
  const { value5 } = useContext(GlobalState);
  const [pageCount, setPageCount] = value5;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-5">
        <Movies />
      </div>
      <div
        className="btn"
        onClick={() => setPageCount(Math.min(10, pageCount + 1))}
      >
        Next Page
      </div>
      <div
        className="btn"
        onClick={() => setPageCount(Math.max(1, pageCount - 1))}
      >
        Previous Page
      </div>
      <Footer />
    </div>
  );
};

export default Home;
