import { useState } from 'react'
import './index.css'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test></Test>
    </>
  )
}

export default App
