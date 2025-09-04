import React, { useState } from "react";
// Impor fungsi login dari service yang baru kita buat
import { login } from "../../api/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Panggil fungsi login yang sesungguhnya!
      const data = await login(email, password);

      console.log("Login Success!", data);

      // Sesuai permintaanmu: Cek role user
      // (Asumsi API mengembalikan data user dengan properti 'role')
      if (data.user && data.user.role === 'admin') {
        // Jika admin, arahkan ke dashboard
        window.location.href = '/dashboard';
      } else {
        // Jika customer, arahkan ke halaman utama atau profile
        window.location.href = '/'; 
      }

    } catch (error) {
      // Tangkap error dari API (misal: password salah, email tidak ditemukan)
      // 'error.errors' atau 'error.message' tergantung response API-mu
      setErrors(error.errors || { message: error.message || "Email atau password salah." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Kamu bisa pakai Head dari "react-helmet-async" sebagai pengganti */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <img src="/assets/images/logo.png" className="w-16 mx-auto" alt="Logo" />
            <h4 className="text-2xl font-bold mt-2">
              <strong className="text-gray-800">Prass</strong>
              <span className="text-green-500"> STORE</span>
            </h4>
          </div>
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-green-500">
            <div className="p-6 sm:p-8">
              <div className="text-center">
                <h6 className="font-bold text-lg text-gray-700">LOGIN ACCOUNT</h6>
                <hr className="my-4" />
              </div>

              {/* Tampilkan error umum di sini */}
              {errors.message && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                  {errors.message}
                </div>
              )}

              <form onSubmit={loginHandler}>
                <div className="mb-4">
                  <label className="block mb-1 font-medium text-gray-600">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa fa-envelope text-gray-400"></i>
                    </div>
                    <input
                      type="email"
                      className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-green-300'}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
                </div>

                <div className="mb-6">
                  <label className="block mb-1 font-medium text-gray-600">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa fa-lock text-gray-400"></i>
                    </div>
                    <input
                      type="password"
                      className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-green-300'}`}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>
                   {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>}
                </div>

                <button
                  className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:bg-green-300"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'LOGGING IN...' : 'LOGIN'}
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-600">
            Need an account?{' '}
            <a href="/register" className="font-medium text-green-500 hover:text-green-600">
              Register!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}