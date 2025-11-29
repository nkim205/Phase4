import { useState } from 'react'
import './index.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      <Home></Home>
    </div>
  )
}

export default App
