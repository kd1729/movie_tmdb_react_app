import React from 'react'
import CFWL from './CFWL'
import { useContext } from "react";
import GlobalState from "../Context/globalState";

const WatchLater = () => {
  const { value3 } = useContext(GlobalState);
  const watchlist= value3[0];

  return (
    <CFWL props={watchlist} />
  )
}

export default WatchLater
