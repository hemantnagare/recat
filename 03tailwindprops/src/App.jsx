import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './compounts/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name: "hemant",
    age: 22,
    city: "pune"
  }
  return (
    <>
       <h1 className='bg-green-400 text-red ronded-xl'>Hi Tailwind</h1>
       <Card username="chaiaurcode" />
       <Card username="hemant" />   
 </>
  )
}

export default App
