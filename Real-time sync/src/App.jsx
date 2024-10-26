import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Content from './Content'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App
