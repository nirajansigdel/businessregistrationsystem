import { Route, Routes } from "react-router-dom";
import Home from "./Frontend/Visiterdashboard/pages/Home/Home.jsx";
import Notice from "./Frontend/Visiterdashboard/pages/Notice/notice.jsx";
import Notification from "./Frontend/userdashboard/Notification.jsx";
import Udarta from "./Frontend/userdashboard/darta.jsx";
import NoPages from "./Frontend/Visiterdashboard/pages/nopages.jsx";
import Adarta from "./Frontend/AdminDashboard/pages/darta.jsx";
import Astorage from "./Frontend/AdminDashboard/pages/storage.jsx";
import Register from "./Frontend/Visiterdashboard/component/Authentication/register.jsx";
import About from "./Frontend/Visiterdashboard/pages/about/about.jsx";
import Login from "./Frontend/Visiterdashboard/component/Authentication/Login.jsx";
import AddWalletUser from "./Frontend/Wallet/index.jsx";
import ProgressTimeline from "./Frontend/Tracker/index.jsx";
import DownloadReport from "./Frontend/Report/index.jsx";
import Profile from "./Frontend/Profile/index.jsx";

function App() {
  return (
    <>
      {/* <button onClick={() => navigate("/admin")}>admin</button>
    <button onClick={() => navigate("/astorage")}>astorage</button> */}
      <div className="flex flex-col justify-center items-center bg-white ">
        <Routes>
          <Route exact path="register" element={<Register />} />
          <Route index element={<Home />} />
          <Route exact path="notice" element={<Notice />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="admin" element={<Adarta />} />
          <Route exact path="admin/report" element={<DownloadReport />} />

          <Route exact path="astorage" element={<Astorage />} />
          <Route exact path="unotification" element={<Notification />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="profile" element={<Profile />} />
          <Route path="*" element={<NoPages />} />

          <Route exact path="user" element={<Udarta />} />
          <Route path="user/wallet" element={<AddWalletUser />} />
          <Route
            exact
            path="/user/form-tracker"
            element={<ProgressTimeline />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
