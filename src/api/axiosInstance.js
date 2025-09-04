import axios from 'axios';

// Buat instance Axios dengan konfigurasi default
const axiosInstance = axios.create({
  // Arahkan ke base URL API backend kamu
  baseURL: 'http://127.0.0.1:8000/api', 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

// Ini penting! Kita akan cek apakah ada token di localStorage.
// Jika ada, kita akan otomatis menambahkannya ke header setiap request.
const token = localStorage.getItem('authToken');
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosInstance;