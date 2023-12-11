import { CiLollipop } from "react-icons/ci";
import Nav from "../nav-footer/nav";
import Footer from "../nav-footer/footer";

 const Layout = ({ children }) => {

  return( 
    <div className="w-full max-w-[1440px]">
        <Nav />
        <div className="">
            {children}
            </div>
            <Footer/>
    </div>
   ) 
};
export default Layout