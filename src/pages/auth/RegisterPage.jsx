//import hook react
import React, { useState } from "react";
// Impor fungsi register dari service
import { register } from "../../api/authService";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    // Siapkan data sesuai kebutuhan API
    const userData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    try {
      // Panggil fungsi register yang sesungguhnya!
      const data = await register(userData);

      console.log("Registration Success!", data);
      setSuccessMessage("Registrasi berhasil! Anda akan diarahkan ke halaman login.");

      // Setelah beberapa detik, arahkan ke halaman login
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000); // Tunggu 2 detik

    } catch (error) {
      // Tangkap error validasi dari API
      setErrors(error.errors || { message: "Registrasi gagal, silakan coba lagi." });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      {/* Kamu bisa pakai Head dari "react-helmet-async" sebagai pengganti */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-2xl px-4">
          <div className="text-center mb-8">
            <img src="data:image/png;base64,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" className="w-16 mx-auto" alt="Logo" />
            <h4 className="text-2xl font-bold mt-2">
              <strong className="text-gray-800">Prass</strong> 
              <span className="text-green-500"> STORE</span>
            </h4>
          </div>
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-green-500">
            <div className="p-6 sm:p-8">
              <div className="text-center">
                <h6 className="font-bold text-lg text-gray-700">REGISTER ACCOUNT</h6>
                <hr className="my-4" />
              </div>
              <form onSubmit={registerHandler}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fa fa-user text-gray-400"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Email Address</label>
                    <div className="relative">
                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fa fa-envelope text-gray-400"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fa fa-lock text-gray-400"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>

                  {/* Password Confirmation */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-600">Password Confirmation</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i className="fa fa-lock text-gray-400"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        placeholder="Password Confirmation"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="w-full mt-6 bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out disabled:bg-green-300"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'MENDAFTAR...' : 'REGISTER'}
                </button>

                {/* --- INI BAGIAN PESAN SUKSESNYA --- */}
                {successMessage && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
                    {successMessage}
                  </div>
                )}
                
                {/* --- INI UNTUK ERROR UMUM DARI API --- */}
                {errors.general && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
                    {errors.general}
                  </div>
                )}

              </form>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-600">
            Have an account?{' '}
            <a href="/login" className="font-medium text-green-500 hover:text-green-600">
              Login!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}