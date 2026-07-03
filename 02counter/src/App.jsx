import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let[counter ,nishacounter]=useState(15)
//  let counter=15;
 const addValue=()=>{
  console.log("clicked" , counter)
 
  nishacounter(counter+1)
 }

  return (
   <>
   <h1>chai aur react </h1>
   <h2>counter value: {counter}</h2>
   <button onClick={addValue}>Add value{counter}</button>
   <br/>
   <button>remove value {counter}</button>
   </>
  )
}
//agar hmm counter ki value poore ui par change karna chahte hai to js se har elemnet ko select
//krke krna hoga but react se nhi...hmm hook (method) ka use rke kar skte hai

export default App
