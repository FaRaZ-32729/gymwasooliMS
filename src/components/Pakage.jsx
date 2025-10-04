import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import pakage from "/assets/pakage.jpg";

const Pakage = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {
            name: "Basic Plan",
            monthly: 2000,
            yearly: 20000,
            features: [
                "Access to all gym equipment",
                "Locker facility",
                "1 Free Fitness Consultation",
                "Access during standard hours",
            ],
            color: "#ED563B",
        },
        {
            name: "Pro Plan",
            monthly: 4000,
            yearly: 40000,
            features: [
                "All Basic features",
                "Personal Trainer Support",
                "Unlimited group classes",
                "24/7 Gym Access",
                "Free Diet Plan",
            ],
            color: "#D94B2B",
            popular: true, // middle card
        },
        {
            name: "Elite Plan",
            monthly: 7000,
            yearly: 70000,
            features: [
                "All Pro features",
                "Customized workout programs",
                "VIP changing rooms",
                "1-on-1 Online Coaching",
                "Priority booking for classes",
            ],
            color: "#C23E20",
        },
    ];

    return (
        <section
            className="relative text-white py-20 px-6 text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${pakage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0f141a]/70"></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold mb-6"
                >
                    Choose Your <span className="text-[#ED563B]">GymWasooli Plan</span>
                </motion.h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                    Get the best out of your fitness journey with our flexible packages.
                    Whether you’re starting out or a seasoned athlete, GymWasooli has the
                    perfect plan for you.
                </p>

                {/* Toggle Switch */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center items-center mb-12 gap-4"
                >
                    <span
                        className={`text-sm ${!isYearly ? "text-[#ED563B]" : "text-gray-400"
                            }`}
                    >
                        Monthly
                    </span>
                    <div
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-16 h-8 bg-gray-600 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300"
                    >
                        <motion.div
                            layout
                            className={`w-6 h-6 bg-[#ED563B] rounded-full shadow-lg transform transition-transform ${isYearly ? "translate-x-8" : "translate-x-0"
                                }`}
                        ></motion.div>
                    </div>
                    <span
                        className={`text-sm ${isYearly ? "text-[#ED563B]" : "text-gray-400"
                            }`}
                    >
                        Yearly
                    </span>
                </motion.div>

                {/* Packages Grid */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto items-end">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative bg-transparent backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-[#ED563B] transition-all duration-300 w-[280px] ${pkg.popular ? "md:-mt-10 md:scale-110 z-10" : ""
                                }`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-1 right-2 bg-[#4A5565] text-white text-xs font-bold py-1 px-3 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            {/* Header */}
                            <div
                                className="py-5 text-center font-bold text-xl"
                                style={{ backgroundColor: pkg.color }}
                            >
                                {pkg.name}
                            </div>

                            {/* Body */}
                            <div className="p-6">
                                <h3 className="text-3xl font-extrabold mb-4 text-[#ED563B]">
                                    Rs {isYearly ? pkg.yearly : pkg.monthly}
                                    <span className="text-sm text-gray-400">
                                        /{isYearly ? "year" : "month"}
                                    </span>
                                </h3>

                                <ul className="text-gray-300 text-left space-y-3 mb-8 text-sm">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <FaCheckCircle className="text-[#ED563B]" /> {feature}
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className={`w-full py-2.5 ${pkg.popular
                                        ? "bg-[#ED563B] hover:bg-[#D94B2B]"
                                        : "bg-gray-700 hover:bg-[#ED563B]"
                                        } text-white font-semibold rounded-lg transition-all duration-300 text-sm`}
                                >
                                    Join Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pakage;
