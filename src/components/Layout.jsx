import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./footer"

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default Layout;
