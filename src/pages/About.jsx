import React from "react";
import { motion } from "framer-motion";
import {
    FaCogs,
    FaChartLine,
    FaUsersCog,
    FaLock,
    FaMobileAlt,
    FaCloud,
} from "react-icons/fa";
import aboutImg from "/assets/time.jpg";
import missionImg from "/assets/time.jpg";
import trainer1 from "/assets/team.jpg";
import trainer2 from "/assets/team2.jpg";
import trainer3 from "/assets/team1.jpg";

const About = () => {
    const stats = [
        { number: "500+", label: "Gyms Using Our System" },
        { number: "5K+", label: "Active Members Managed" },
        { number: "99.9%", label: "Data Security Guarantee" },
        { number: "24/7", label: "Cloud Access Support" },
    ];

    const features = [
        {
            icon: FaUsersCog,
            title: "Smart Member Management",
            desc: "Easily manage memberships, attendance, and renewals with automated notifications and digital records.",
        },
        {
            icon: FaChartLine,
            title: "Insightful Analytics",
            desc: "Get detailed reports on gym performance, revenue, trainer activity, and member engagement.",
        },
        {
            icon: FaLock,
            title: "Secure Access Control",
            desc: "Ensure privacy with role-based permissions for admins, trainers, and members.",
        },
        {
            icon: FaCloud,
            title: "Cloud-Based Data",
            desc: "Access your entire gym management system anytime, anywhere — with automatic backups.",
        },
        {
            icon: FaMobileAlt,
            title: "Mobile-Friendly Platform",
            desc: "Run your business from any device — mobile, tablet, or desktop — with full system compatibility.",
        },
        {
            icon: FaCogs,
            title: "Automated Operations",
            desc: "From billing to attendance, automate routine tasks and focus on growing your fitness community.",
        },
    ];

    const team = [
        { name: "Ahmed Khan", role: "System Architect", img: trainer1 },
        { name: "Fatima Ali", role: "Product Manager", img: trainer2 },
        { name: "Usman Tariq", role: "Lead Developer", img: trainer3 },
    ];

    return (
        <section className="relative bg-[#0f141a] text-white overflow-hidden">

            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center py-32 px-6"
                style={{ backgroundImage: `url(${aboutImg})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold mb-6 text-[#D94B2B]"
                    >
                        About <span className="text-white">GymWasooli</span>
                    </motion.h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        GymWasooli is a comprehensive Gym Management System built to streamline gym operations.
                        From member registration to billing and performance tracking — everything is managed efficiently
                        through one intuitive platform.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center bg-[#151b23]">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <h2 className="text-5xl font-extrabold text-[#D94B2B]">{s.number}</h2>
                        <p className="text-gray-400 mt-2 font-semibold">{s.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Features / Philosophy */}
            <div className="py-20 px-6 bg-[#1E2939] text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-10"
                >
                    Why Choose <span className="text-[#D94B2B]">GymWasooli?</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-[#243447] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
                        >
                            <item.icon className="text-5xl text-[#D94B2B] mb-4 mx-auto" />
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-0">
                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-cover bg-center text-white p-12 flex flex-col justify-center"
                    style={{ backgroundImage: `url(${missionImg})` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-[#D94B2B] mb-4">Our Mission</h3>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            To empower fitness centers with innovative technology that simplifies management,
                            enhances member experience, and drives business growth.
                        </p>
                    </div>
                </motion.div>

                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#151b23] text-white p-12 flex flex-col justify-center"
                >
                    <h3 className="text-3xl font-bold text-[#D94B2B] mb-4">Our Vision</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        To revolutionize gym management in Pakistan and beyond by offering smart, automated,
                        and secure solutions for every fitness business.
                    </p>
                </motion.div>
            </div>

            {/* Team Section */}
            <div className="py-20 px-6 bg-[#1E2939]">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-14"
                >
                    Meet the <span className="text-[#D94B2B]">GymWasooli Team</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-[#243447] rounded-3xl overflow-hidden shadow-xl group"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-72 object-cover group-hover:opacity-80 transition"
                            />
                            <div className="absolute bottom-0 bg-black/70 w-full p-4 text-center">
                                <h3 className="font-bold text-lg text-[#D94B2B]">{member.name}</h3>
                                <p className="text-gray-300 text-sm">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
