import React from 'react'
import CFWL from './CFWL'
import { useContext } from "react";
import GlobalState from "../Context/globalState";

const Favourites = () => {
  const { value2 } = useContext(GlobalState);
  const favourites= value2[0];

  return (
    <CFWL props={favourites} />
  )
}

export default Favourites;
