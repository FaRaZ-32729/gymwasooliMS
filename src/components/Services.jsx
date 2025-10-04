import React from "react";
import {
    FaShieldAlt,
    FaLock,
    FaDatabase,
    FaUserShield,
    FaMobileAlt,
    FaBell,
    FaCreditCard,
    FaChartBar,
} from "react-icons/fa";
import bgImage from "/assets/time.jpg"; // you can replace with a relevant background

const Classes = () => {
    return (
        <section className="relative py-20 bg-[#1E2939]">
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            <div className="relative max-w-6xl mx-auto px-6 text-white">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Section — Security Highlights */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#D94B2B] mb-6">
                            Secure, Reliable & Built for Trust
                        </h2>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            The <span className="text-[#D94B2B] font-semibold">Gym Wasooli Management System</span> ensures top-notch data security and privacy for every gym and member. Your business information, transactions, and user data are always protected with enterprise-grade measures.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <FaShieldAlt className="text-[#D94B2B] text-xl" />
                                <span>End-to-end encrypted user and payment data</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaLock className="text-[#D94B2B] text-xl" />
                                <span>Role-based access control for admins, trainers, and members</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaDatabase className="text-[#D94B2B] text-xl" />
                                <span>Cloud-secured storage with automatic daily backups</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaUserShield className="text-[#D94B2B] text-xl" />
                                <span>Protected authentication system with real-time monitoring</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section — Services */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#D94B2B] mb-6">
                            Our Services
                        </h2>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            Designed for gym owners, staff, and members — <span className="text-[#D94B2B] font-semibold">Gym Wasooli</span> offers all-in-one features that make management simple, secure, and efficient.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <FaMobileAlt className="text-[#D94B2B] text-xl" />
                                <span>Mobile-friendly dashboard for on-the-go management</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaBell className="text-[#D94B2B] text-xl" />
                                <span>Automated alerts for renewals, dues, and attendance</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCreditCard className="text-[#D94B2B] text-xl" />
                                <span>Online payment tracking and invoice generation</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaChartBar className="text-[#D94B2B] text-xl" />
                                <span>Analytics and reports to track performance and revenue</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Classes;
