import React from 'react';
import ShoppingCartIcon from '../../components/icons/ShoppingCartIcon';

const Navbar = ({ user, onLogout, navigateTo }) => {
  const isGuest = !user;
  const isCustomer = user?.role === 'customer';
  const isAdmin = user?.role === 'admin';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigateTo(isAdmin ? 'dashboard' : 'homepage')}>
            TokoKita
          </div>
          <div className="flex items-center space-x-6">
            {isCustomer && (
              <>
                <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Produk</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <ShoppingCartIcon />
                </a>
              </>
            )}
             {isAdmin && (
              <a href="#" className="text-gray-600 hover:text-blue-600">Manajemen Produk</a>
            )}
            
            {isGuest ? (
              <div className="space-x-2">
                <button onClick={() => navigateTo('login')} className="text-gray-600 hover:text-blue-600 font-semibold">Login</button>
                <button onClick={() => navigateTo('register')} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">Register</button>
              </div>
            ) : (
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Halo, {user.name}</span>
                    <button onClick={onLogout} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition">
                        Logout
                    </button>
                </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;