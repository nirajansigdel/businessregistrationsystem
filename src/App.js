import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Frontend/Visiterdashboard/pages/Home/Home.jsx";
import Notice from "./Frontend/Visiterdashboard/pages/Notice/notice.jsx";
import Notification from "./Frontend/userdashboard/Notification.jsx";
import Udarta from "./Frontend/userdashboard/darta.jsx";
import NoPages from "./Frontend/Visiterdashboard/pages/nopages.jsx";
import Adarta from "./Frontend/AdminDashboard/pages/darta.jsx";
import Adepartment from "./Frontend/AdminDashboard/pages/department.jsx";
import Astorage from "./Frontend/AdminDashboard/pages/storage.jsx";
import Register from "./Frontend/Visiterdashboard/component/Authentication/register.jsx";
import About from "./Frontend/Visiterdashboard/pages/about/about.jsx";
import Login from "./Frontend/Visiterdashboard/component/Authentication/Login.jsx";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-white ">
      <BrowserRouter>
        <Routes>
          <Route exact path="register" element={<Register />} />
          <Route index element={<Home />} />
          <Route exact path="notice" element={<Notice />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="admin" element={<Adarta />} />
          <Route exact path="adepartment" element={<Adepartment />} />
          <Route exact path="astorage" element={<Astorage />} />
          <Route exact path="unotification" element={<Notification />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="user" element={<Udarta />} />
          <Route exact path="login" element={<Login/>} />
          <Route path="*" element={<NoPages />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
