import { CiLollipop } from "react-icons/ci";
import Nav from "../nav-footer/nav";
import Footer from "../nav-footer/footer";

 const Layout = ({ children }) => {

  return( 
    <div className="w-full max-w-[1440px]">
        <Nav />
        <div className="flex flex-col gap-12 bg-[#F2F5FF]">
            {children}
            </div>
            <Footer/>
    </div>
   ) 
};
export default Layout