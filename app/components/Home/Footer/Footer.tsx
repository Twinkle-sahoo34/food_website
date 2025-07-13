import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-16 pb-16 text-white">
      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <MdDeliveryDining className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">Foodie</h1>
          </div>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            facere quae iusto! Quo provident quidem non in earum molestiae at?
          </p>
          <div className="mt-6 flex space-x-3">
            <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center bg-sky-400 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 transition">
              <FaYoutube />
            </a>
            <a href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center bg-purple-500 rounded-full hover:bg-purple-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Company</h2>
          <a href="#" className="block text-gray-300 hover:text-white transition">About Us</a>
          <a href="#" className="block text-gray-300 hover:text-white transition">News & Press</a>
          <a href="#" className="block text-gray-300 hover:text-white transition">Our Customers</a>
          <a href="#" className="block text-gray-300 hover:text-white transition">Leadership</a>
          <a href="#" className="block text-gray-300 hover:text-white transition">Careers</a>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Resources</h2>
          <a href="#" className="block text-gray-300 hover:text-white transition">Blog</a>
          <a href="#" className="block text-gray-300 hover:text-white transition">Webinar & Events</a>
          <a href="#" className="block text-gray-300 hover:text-white transition">Podcast</a>
          <a href="#" className="block text-gray-300 hover:text-white transition">E-book & Guides</a>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
          </div>
          <div>
            <h3 className="text-sm">Mobile</h3>
            <p className="text-yellow-300 font-semibold mt-1">+189342134923</p>
          </div>
          <div>
            <h3 className="text-sm">Email</h3>
            <p className="text-yellow-300 font-semibold mt-1">example@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-8 px-4 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="text-center md:text-left">
          © 2025 Beddev. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span>Social :</span>
          <a href="#" className="hover:text-white"><FaFacebook /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaDribbble /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
