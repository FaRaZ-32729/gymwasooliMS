import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "/assets/logo.png"; // replace with your actual logo path

const Footer = () => {
    return (
        <footer className="relative bg-[#1E2939] text-gray-300 py-10 px-6 overflow-hidden">
            {/* Gradient Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo + Heading Section */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3 mb-3">
                        <img
                            src={logo}
                            alt="GymWasooli Logo"
                            className="w-20 h-auto object-contain"
                        />
                        <h2 className="text-2xl font-bold text-white tracking-wide">
                            Gym<span className="text-[#ED563B]">Wasooli</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-[#ED563B] font-semibold"> Management System </span>
                        simplifies gym operations with smart tools for member management, trainer scheduling,
                        billing, and performance tracking — empowering gyms to run efficiently and grow seamlessly.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Trainers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Reports
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-[#ED563B] transition-colors" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-[#ED563B] transition-colors" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-[#ED563B] transition-colors" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-[#ED563B] transition-colors" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} GymWasooli. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
