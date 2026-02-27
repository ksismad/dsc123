import React from 'react';
import { MapPin, Clock, Headphones, Award, Users, Shield, Globe, Truck } from 'lucide-react';

const benefits = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600 mb-2" />,
    title: "Pan India Service",
    description: "Serving customers across all states with free delivery"
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600 mb-2" />,
    title: "Quick Processing",
    description: "Fast turnaround time for all DSC applications"
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600 mb-2" />,
    title: "24/7 Support",
    description: "Instant assistance via WhatsApp & phone in Hindi & English"
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600 mb-2" />,
    title: "Trusted Provider",
    description: "Years of experience in DSC solutions across India"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600 mb-2" />,
    title: "Business Network",
    description: "Serving entrepreneurs, companies & professionals nationwide"
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600 mb-2" />,
    title: "Verified Business",
    description: "Google-verified business with excellent customer reviews"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="mt-12 bg-gradient-to-br from-blue-50 to-white rounded-xl p-8">
      <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">Why Choose OFA for Digital Signature Certificates?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="flex justify-center">{benefit.icon}</div>
            <h4 className="font-semibold text-blue-700 mb-2">{benefit.title}</h4>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a
          href="https://g.page/r/Cd1IFJTvW_XIEB0/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Globe className="w-5 h-5" />
          <span>Check Our Customer Reviews</span>
        </a>
      </div>
    </section>
  );
}