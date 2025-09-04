import React from 'react';
import Button from '../../components/ui/Button';

const HomePage = () => {
  const products = [
    { id: 1, name: 'T-Shirt Keren', price: 'Rp 150.000', image: 'https://placehold.co/600x400/3498db/ffffff?text=Baju' },
    { id: 2, name: 'Sepatu Lari', price: 'Rp 750.000', image: 'https://placehold.co/600x400/2ecc71/ffffff?text=Sepatu' },
    { id: 3, name: 'Topi Baseball', price: 'Rp 120.000', image: 'https://placehold.co/600x400/e74c3c/ffffff?text=Topi' },
    { id: 4, name: 'Jam Tangan', price: 'Rp 1.200.000', image: 'https://placehold.co/600x400/f1c40f/ffffff?text=Jam' },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4">Koleksi Terbaru 2025</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Temukan gaya terbaikmu dengan produk-produk pilihan kami yang berkualitas tinggi.</p>
        <Button>Belanja Sekarang</Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Produk Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mt-1">{product.price}</p>
                <button className="mt-4 w-full bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors">
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;