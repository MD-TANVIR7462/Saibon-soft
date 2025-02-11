"use client";

import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              SaibonSoft
            </h2>
            <p className="text-gray-400 mt-2">
              Building innovative software solutions to accelerate business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-blue-400">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400">Services</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400">Portfolio</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400">Contact</a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Chattogram Office</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> info@saibonsoft.com</p>
              <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> 01672-008293</p>
              <p className="flex items-center"><MapPin className="w-7 h-7 mr-2" /> #05, Central Shopping Complex, 3rd Floor, GEC, Chattogram</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Mymensingh Office</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> saibonsoftmymensingh@gmail.com</p>
              <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> 01885-518864</p>
              <p className="flex items-center"><MapPin className="w-8 h-8 mr-2" /> #169, Sirajl Islam Villa, T.N.T Road, Atharabari, Ishwarganj, Mymensingh</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SaibonSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
