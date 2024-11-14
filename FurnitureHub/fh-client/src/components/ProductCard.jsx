import React from "react";

function ProductCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-80 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
        {/* Image and Discount Tag */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/300 "
            alt="L-Shaped Sofa"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-orange-500 text-xs font-bold text-white px-2 py-1 rounded-full">
            Save 47%
          </div>
        </div>
        
        {/* Product Information */}
        <div className="p-4">
          <p className="text-sm text-gray-400">L-Shape Sofas</p>
          <h3 className="text-lg font-semibold mb-2">L-Shaped Velvet Corner | Grey</h3>
          
          

          {/* Price */}
          <div className="flex items-center mb-2">
            <p className="text-2xl font-bold mr-2">26000</p>
            {/* <span className="text-gray-400 line-through">49000</span>
            <span className="text-gray-400 text-sm ml-1">/ Piece</span> */}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-center font-semibold hover:bg-orange-600">
              Add to cart
            </button>
            
          </div>

          {/* Delivery Time */}
          <p className="text-gray-400 text-sm mt-2">Delivered within 25-30 working days.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
