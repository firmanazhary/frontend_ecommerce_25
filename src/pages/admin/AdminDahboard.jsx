import React from 'react';
import ShoppingCartIcon from '../../components/icons/ShoppingCartIcon';
import UserIcon from '../../components/icons/UserIcon';

const AdminDashboard = () => {
  const StatCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
        {icon}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Penjualan" value="Rp 120.5M" icon={<ShoppingCartIcon />} />
        <StatCard title="Pesanan Baru" value="32" icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        } />
        <StatCard title="Pengguna Baru" value="15" icon={<UserIcon />} />
        <StatCard title="Total Produk" value="250" icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>
        }/>
      </div>
    </div>
  );
};

export default AdminDashboard;