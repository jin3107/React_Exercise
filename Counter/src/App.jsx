import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <p>Bộ đếm: {count}</p>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
    </>
  )
}

export default App
