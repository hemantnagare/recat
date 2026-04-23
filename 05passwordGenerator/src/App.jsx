import { useCallback, useState,useEffect, use } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  // ✅ Copy function
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
  }


  useEffect(() => {passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">

        <h1 className="text-3xl font-bold text-center text-white mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex items-center bg-white/20 rounded-lg overflow-hidden mb-4 backdrop-blur-md">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-200 outline-none"
            placeholder="Your Password"
          />
          <button
            onClick={copyPassword}
            className="bg-yellow-400 px-4 py-2 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="text-white text-sm">
            Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer mt-2 accent-yellow-400"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between mb-6 text-white text-sm">

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-yellow-400"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed(prev => !prev)}
              className="accent-yellow-400"
            />
            Symbols
          </label>

        </div>
      </div>
    </div>
  </>
)
}

export default App