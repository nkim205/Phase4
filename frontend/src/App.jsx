import { useState } from 'react'
import './index.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-fit w-screen min-h-fit h-screen'>
      <Home></Home>
    </div>
  )
}

export default App
