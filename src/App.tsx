import Login from "./pages/login";
import Layout from "./pages/layout";
import './App.css'
import {Route, Routes} from "react-router-dom";


function App() {

  return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/*" element={<Layout />} ></Route>
        </Routes>
      </>
  )
}

export default App
