import React from 'react'
import CFWL from './CFWL'
import { useContext } from "react";
import GlobalState from "../Context/globalState";

const Completed = () => {
  const { value4 } = useContext(GlobalState);
  const completed= value4[0];

  return (
    <CFWL props={completed} />
  )
}

export default Completed
