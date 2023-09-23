import React, { createContext, useState } from 'react'

export let context = createContext(0)

export default function ContextProvider(props)
{
  const [inputvalue, setSerch] = useState("")

  let [Count, setCount] = useState(0)

  function increaseCount()
  {
    setCount(Count + 1)
    alert("Add to favourites!!");

  }
  function decreaseCount()
  {
    setCount(Count - 1)
    alert("Remove to favourites!!");
  }

  return <context.Provider value={{ Count, increaseCount, decreaseCount, inputvalue, setSerch }}>
    {props.children}
  </context.Provider>
}
