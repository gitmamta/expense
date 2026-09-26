import {Outlet} from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Layout() {
  return(
    <>
  
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  
  </>
  )
}
