import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home/Home";
import Notice from "./component/pages/Notice/notice";
import Darta from "./component/pages/Darta/darta";
import Register from "./component/Authentication/register"
import Login from "./component/Authentication/login.jsx"
import About from "./component/pages/about/about.jsx";
import Adarta from "./Admindashboard/darta.jsx";
import Adepartment from "./Admindashboard/department.jsx";
import Astorage from "./Admindashboard/storage.jsx";
import Udarta from "./userdashboard/darta.jsx";
import Notification from "./userdashboard/Notification.jsx";
import Umain from "./userdashboard/main.jsx";

function App() {
  return (
    

    
    <div className="flex flex-col justify-center items-center bg-white ">
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route exact path="notice" element={<Notice />} />
            <Route exact path="darta" element={<Darta />} />
            <Route exact path="usermain" element={<Umain />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="adarta" element={<Adarta />} />
            <Route exact path="adepartment" element={<Adepartment/>} />
            <Route exact path="astorage" element={<Astorage />} />
            <Route exact path="udarta" element={<Udarta />} />
            <Route exact path="" element={<Notification />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
