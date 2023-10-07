import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import { Login } from "./pages/AuthPages/Login/Login"
import { Register } from "./pages/AuthPages/Register/Register"


const App = () => {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>  
        </Routes>
      </div>
    </>
  )
}

export default App
