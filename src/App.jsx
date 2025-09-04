import React, { useState, useEffect } from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/customer/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AdminDashboard from './pages/admin/AdminDahboard';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('homepage');

  useEffect(() => {
    if (user?.role === 'admin') {
      setPage('dashboard');
    } else if (user?.role === 'customer') {
      setPage('homepage');
    }
  }, [user]);

  const handleLogin = (userData) => {
    console.log("User logged in:", userData);
    setUser(userData);
  };

  const handleRegister = (userData) => {
    console.log("User registered and logged in:", userData);
    setUser(userData);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setUser(null);
    setPage('login');
  };
    
  const renderPage = () => {
    switch (page) {
      case 'login':
        return <LoginPage onLogin={handleLogin} navigateTo={setPage} />;
      case 'register':
        return <RegisterPage onRegister={handleRegister} navigateTo={setPage} />;
      case 'homepage':
        return <HomePage />;
      case 'dashboard':
        if (user?.role === 'admin') {
          return <AdminDashboard />;
        }
        handleLogout(); // Jika bukan admin, otomatis logout dan redirect ke login
        return null; // Return null sementara redirect terjadi
      default:
        return <HomePage />;
    }
  };
  
  // Tampilkan layout hanya jika user sudah login atau sedang di homepage
  const showLayout = (user || page === 'homepage') && page !== 'login' && page !== 'register';

  return (
    <>
      {showLayout && <Navbar user={user} onLogout={handleLogout} navigateTo={setPage} />}
      <main>
        {renderPage()}
      </main>
      {showLayout && <Footer />}
    </>
  );
}

export default App;