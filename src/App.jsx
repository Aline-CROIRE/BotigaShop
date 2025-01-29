import Navbar from './components/Navbar';
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import Shop from './components/Shop';
import Vendors from './components/Vendors';
import Blog from './components/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
    
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/vendor" element={<Vendors/>} />
        <Route path="/blog" element={<Blog/>} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


 