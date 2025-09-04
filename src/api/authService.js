import axiosInstance from './axiosInstance';

/**
 * Fungsi untuk mengirim data login ke API
 */
export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });

    // API kamu mengembalikan 'access_token', jadi kita ambil itu
    const token = response.data.access_token;

    if (token) {
      // 1. Simpan token di localStorage browser
      localStorage.setItem('authToken', token);
      
      // 2. Set header Authorization untuk request selanjutnya secara otomatis
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    // Kembalikan semua data dari response (termasuk user info, dll)
    return response.data;

  } catch (error) {
    if (error.response) {
      // Kasus 1: Server merespon dengan status error (4xx, 5xx)
      console.error("API Error:", error.response.data);
      throw error.response.data; // Lempar error spesifik dari API
    } else if (error.request) {
      // Kasus 2: Request terkirim tapi tidak ada respon (server mati/jaringan)
      console.error("Network Error:", error.request);
      throw new Error("Tidak bisa terhubung ke server. Pastikan server berjalan dan cek koneksi internet Anda.");
    } else {
      // Kasus 3: Error lain saat setup request
      console.error("Error:", error.message);
      throw new Error("Terjadi kesalahan. Silakan coba lagi.");
    }
  }
};

/**
 * Fungsi untuk mengirim data registrasi ke API
 */
export const register = async (userData) => {
  // userData adalah objek berisi: name, email, password, password_confirmation
  try {
    const response = await axiosInstance.post('/register', userData);
    return response.data;
  } catch (error) {
     // --- PERBAIKAN DI SINI JUGA ---
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw error.response.data;
    } else if (error.request) {
      console.error("Network Error:", error.request);
      throw new Error("Tidak bisa terhubung ke server. Pastikan server berjalan.");
    } else {
      console.error("Error:", error.message);
      throw new Error("Terjadi kesalahan saat registrasi.");
    }
  }
};