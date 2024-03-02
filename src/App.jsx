import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './components/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth id="signup" />}></Route>
        <Route path='/login' element={<Auth />}></Route>
      </Routes>

    </>
  )
}

export default App
