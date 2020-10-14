import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const UseTheNewAppState = () => {
  let dispatchedFromApp = useSelector((state) => state.coolStuffFromApp);

  return (
    <>

    <h1>{dispatchedFromApp.key1}</h1>

    </>
  )
}

export default UseTheNewAppState
