import Login from "./pages/login";
import Layout from "./pages/layout";
import './App.less'
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/login/Auth";


function App() {

  return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/*" element={<Auth><Layout /></Auth>} ></Route>
        </Routes>
      </>
  )
}

export default App
