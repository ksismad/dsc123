import React from 'react';
import { Shield, Clock, BadgeCheck, Headphones, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* SEO Meta Title and Description */}
      <div className="hidden">
        <h1>OFA Business Solutions - Your Trusted Digital Signature Certificate Provider in India</h1>
        <p>Leading DSC provider offering Class 3 Digital Signature Certificates for GST, MCA, Income Tax, e-Tendering, EPFO, DGFT & IRCTC. Fast processing, lowest price guarantee, and pan-India service.</p>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Your Trusted Partner for Digital Signature Certificates (DSC) – Secure, Fast & Affordable
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          At OFA Business Solutions, we provide government-approved Digital Signature Certificates (DSC) for individuals, businesses, and organizations. Our mission is to offer a fast, secure, and hassle-free way to obtain Class 3 DSC for GST, MCA, Income Tax, e-Tendering, EPFO, DGFT, and IRCTC e-Ticketing.
        </p>
      </section>

      {/* Why Choose Us Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Why Choose OFA Business Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Authorized & Trusted Provider</h3>
            <p className="text-gray-600">Legally compliant Digital Signature Certificates with full security assurance.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Clock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Processing & Instant Approval</h3>
            <p className="text-gray-600">Quick verification and same-day DSC issuance for urgent requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BadgeCheck className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Lowest Price Guarantee</h3>
            <p className="text-gray-600">Competitive pricing with no hidden charges or additional fees.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">100% Secure & Reliable</h3>
            <p className="text-gray-600">Fully compliant with government and industry security standards.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Headphones className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Customer Support</h3>
            <p className="text-gray-600">Expert guidance and support throughout the DSC process.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pan India Service</h3>
            <p className="text-gray-600">Serving customers across all states with free delivery.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-8 rounded-2xl mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            We strive to make the digital signature process simple and accessible by providing secure, verified, and easy-to-use solutions for businesses and individuals. Our commitment to excellence and customer satisfaction drives us to deliver the best DSC services in India.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Your DSC Today!</h2>
        <p className="text-xl text-gray-600 mb-8">
          Apply online with OFA Business Solutions and get your Digital Signature Certificate quickly and securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/917388288022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Contact Us on WhatsApp
          </a>
          <a
            href="tel:+917388288022"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
          >
            Call Us: +91-7388288022
          </a>
        </div>
      </section>
    </main>
  );
}