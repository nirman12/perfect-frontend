import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RejectModel from './components/Reject'
import AcceptModel from './components/Accept'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RejectModel/>
      <AcceptModel/>
      <Main/>
    </div>
  )
}

export default App
