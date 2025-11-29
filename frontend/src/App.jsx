import { useState } from 'react'
import './index.css'
import Test from './components/Test'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
