import Home from "./pages/home/Home";
import TopBar  from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  //Get user info with Context
  const { user } = useContext(Context);
  return (
    <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route> 
          <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
          <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
          <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route> 
        </Routes>
      </Router>
  );
}

export default App;