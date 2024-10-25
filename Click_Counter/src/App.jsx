import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`Số lần nhấp hiện tại: ${count}`);
  }, [count])

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Bạn đã nhấp {count} lần</p>
      <button onClick={handleClick}>Nhấp vào tôi!</button>
    </div>
  )
}

export default App