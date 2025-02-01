
import './App.css';
import Layout from './components/Layout';

import Home from './components/Home'

import Shop from './components/Shop';
import Vendors from './components/Vendors';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/vendor" element={<Vendors />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Registration />} />
   </Routes>
</BrowserRouter>
  );
}
export default App;

 
