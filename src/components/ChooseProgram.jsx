import React from "react";
import {
    FaLock,
    FaCreditCard,
    FaCalendarCheck,
    FaUsersCog,
    FaChartLine,
    FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ChooseProgram = () => {
    const services = [
        {
            title: "24/7 Access Control",
            description:
                "Manage member access anytime with smart entry tracking and secure control features.",
            icon: <FaLock className="text-6xl mb-4 text-[#D94B2B]" />,
        },
        {
            title: "Integrated Billing System",
            description:
                "Automate invoices, payments, and renewals with real-time billing reports and payment tracking.",
            icon: <FaCreditCard className="text-6xl mb-4 text-[#D94B2B]" />,
        },
        {
            title: "Online Booking",
            description:
                "Let your members book classes, sessions, or trainers online through the GymWasooli portal.",
            icon: <FaCalendarCheck className="text-6xl mb-4 text-[#D94B2B]" />,
        },
        {
            title: "Member Management",
            description:
                "Track active members, subscriptions, attendance, and more from one easy dashboard.",
            icon: <FaUsersCog className="text-6xl mb-4 text-[#D94B2B]" />,
        },
        {
            title: "Reports & Analytics",
            description:
                "Get detailed insights into member activity, income, and performance to make smarter decisions.",
            icon: <FaChartLine className="text-6xl mb-4 text-[#D94B2B]" />,
        },
        {
            title: "Mobile App Integration",
            description:
                "Provide members and trainers with instant access through our fully integrated mobile solution.",
            icon: <FaMobileAlt className="text-6xl mb-4 text-[#D94B2B]" />,
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="relative w-full h-auto py-16 bg-[#1E2939] text-white px-6 overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            {/* Heading */}
            <motion.h2
                className="text-4xl font-extrabold mb-6 text-center text-[#D94B2B] z-10 relative"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                Why Choose GymWasooli?
            </motion.h2>

            {/* Paragraph */}
            <motion.p
                className="text-lg text-center max-w-2xl mb-12 z-10 mx-auto text-gray-300 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                GymWasooli offers all-in-one gym management features — helping you manage members,
                payments, schedules, and analytics effortlessly so you can focus on growing your gym.
            </motion.p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0px 0px 15px #D94B2B",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center bg-transparent border border-[#D94B2B]/30 p-6 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        {service.icon}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            {service.title}
                        </h3>
                        <p className="text-center text-lg text-gray-400">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ChooseProgram;
