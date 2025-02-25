import { useState, useEffect } from "react";
import { FiUserCheck, FiShoppingBag, FiPackage, FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0 });
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("https://botigashop-api.onrender.com/api/admin/stats", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
            <FiUserCheck className="text-4xl text-blue-500" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Users</h2>
              <p className="text-gray-600">{stats.users}</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
            <FiShoppingBag className="text-4xl text-green-500" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Products</h2>
              <p className="text-gray-600">{stats.products}</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
            <FiPackage className="text-4xl text-yellow-500" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Orders</h2>
              <p className="text-gray-600">{stats.orders}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <Link to="/admin/products" className="p-4 bg-blue-500 text-white rounded-lg text-center">Manage Products</Link>
            <Link to="/admin/orders" className="p-4 bg-green-500 text-white rounded-lg text-center">Manage Orders</Link>
            <Link to="/admin/users" className="p-4 bg-yellow-500 text-white rounded-lg text-center">Manage Users</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;