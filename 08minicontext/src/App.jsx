import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <>
    <UserContextProvider>
      <h1> React with context Api</h1>
      <Login/>
      <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
