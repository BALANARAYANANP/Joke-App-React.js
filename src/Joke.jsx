import React, { useState } from 'react'
import "./joke.css"

export const Joke = () => {
  const [joke,setJoke] = useState("Tell a Joke")
  const [jans,setJans] = useState("")
    async function jokes(){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    console.log(data);
    setJans(data.setup)
    setJoke(data.punchline)
  }
  return (
    <div className='ms'>
      <h3>{jans}</h3>
      <h3 id="ss">{joke}</h3>
    <button onClick={jokes}>Submit</button></div>
  )
};

