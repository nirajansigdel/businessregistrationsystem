import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./component/layout/layout";
import Home from "./component/pages/Home/Home";
import Notice from "./component/pages/Notice/notice";
import Darta from "./component/pages/Darta/darta";
import Register from "./component/Authentication/register"
import Login from "./component/Authentication/login.jsx"
import About from "./component/pages/about/about.jsx";

function App() {
  return (
    

    
    <div className="flex flex-col justify-center items-center bg-white ">
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route exact path="notice" element={<Notice />} />
            <Route exact path="darta" element={<Darta />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
