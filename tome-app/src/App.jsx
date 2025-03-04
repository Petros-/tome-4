import { useState } from 'react'
import './App.css'
import EmailForm from './auth/EmailForm'
import TopNav from './TopNav'
import Body from './Body'
import Container from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
    <Container />
    </>
  )
}

export default App
