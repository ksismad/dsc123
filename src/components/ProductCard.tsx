import React from 'react';
import { Check, X } from 'lucide-react';
import { Feature } from '../data/products';
import { incrementBuyClickCount } from '../utils/visitCounter';

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: Feature[];
  isDGFT?: boolean;
  showBulkDiscount?: boolean;
  onBuyClick: (newCount: number) => void;
}

export default function ProductCard({ 
  title, 
  subtitle, 
  price, 
  features, 
  isDGFT,
  showBulkDiscount,
  onBuyClick
}: ProductCardProps) {
  const handleBuyNow = () => {
    const message = `Hello, I'm interested in purchasing ${title} - ${subtitle} for ${price}. Please provide details about bulk order discount of ₹100 per DSC for multiple certificates.`;
    const whatsappUrl = `https://wa.me/917388288022?text=${encodeURIComponent(message)}`;
    const newCount = incrementBuyClickCount();
    onBuyClick(newCount);
    window.open(whatsappUrl, '_blank');
  };

  const handleThreeYearQuote = () => {
    const message = `Hello, I'm interested in a 3-year quote for ${title} - ${subtitle}. Please provide pricing details.`;
    const whatsappUrl = `https://wa.me/917388288022?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6 space-y-4">
        <div className="text-center border-b pb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{price}</p>
          <p className="text-sm text-gray-500 mt-1">(2 Years)</p>
          {showBulkDiscount && (
            <p className="text-green-600 text-sm font-medium mt-2">
              Save ₹100/DSC on bulk orders
            </p>
          )}
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              {feature.included ? (
                <Check className="text-green-500 h-5 w-5" />
              ) : (
                <X className="text-red-500 h-5 w-5" />
              )}
              <span className="text-sm text-gray-700">{feature.name}</span>
            </li>
          ))}
        </ul>

        {isDGFT && (
          <div className="bg-green-100 p-3 rounded-lg">
            <p className="text-green-700 text-sm text-center">
              ✓ DGFT - Foreign Trade Country of Origin-Code
            </p>
          </div>
        )}

        <div className="space-y-2">
          <button
            onClick={handleBuyNow}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Buy Now
          </button>
          <button
            onClick={handleThreeYearQuote}
            className="w-full py-2 px-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-sm"
          >
            Get 3-Year Quote
          </button>
        </div>
      </div>
    </div>
  );
}