import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl' >Talwind test</h1>
       {/* card ka poora code hmm yaha directly bhi use kr skte hai
       card ka alag compnent bnate hai ...aur props component ko reusable bnata hai
       jb bhi hmm component bnate hai sbke paas acesss hota hai props ka 
       props object hota hai 
       jn bhi [[]] aye to ye default hota hai
         */}

     <Card  username="nisha" btntext="clickme"/>
     <Card username="anisha" btntext="againclickme"/>
    </>
  )
}

export default App
