import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        question: "What is GymWasooli Management System?",
        answer:
            "GymWasooli Management System is a smart platform designed to simplify daily gym operations — from managing memberships, payments, and staff to tracking attendance and generating performance reports — all in one place.",
    },
    {
        question: "How does GymWasooli help gym owners?",
        answer:
            "Gym owners can easily monitor member subscriptions, trainer schedules, payments, and gym performance through a single dashboard, reducing manual work and improving overall efficiency.",
    },
    {
        question: "Can trainers manage their clients using GymWasooli?",
        answer:
            "Yes. Trainers can manage client schedules, create personalized workout plans, track progress, and communicate directly with members for better results and engagement.",
    },
    {
        question: "Does GymWasooli support automated billing and payments?",
        answer:
            "Absolutely. GymWasooli automates invoicing, tracks payment history, and sends reminders for renewals or pending dues — making financial management simple and transparent.",
    },
    {
        question: "Can members access GymWasooli features online?",
        answer:
            "Yes. Members can log in to view their progress, check class schedules, renew memberships, and make secure online payments — anytime, anywhere.",
    },
    {
        question: "Is GymWasooli mobile-friendly?",
        answer:
            "Definitely! The system is fully responsive and optimized for mobile use, so owners, trainers, and members can manage their activities conveniently on the go.",
    },
    {
        question: "How secure is the GymWasooli Management System?",
        answer:
            "GymWasooli uses advanced encryption, secure authentication, and role-based access control to protect all gym, trainer, and member data with enterprise-grade security.",
    },
];


const FAQs = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="relative min-h-screen bg-[#1E2939] text-white py-24 px-6 overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            {/* Header Section */}
            <div className="relative text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-extrabold text-[#D94B2B] drop-shadow-[0_0_10px_rgba(217,75,43,0.6)]"
                >
                    Frequently Asked Questions
                </motion.h1>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
                    Got questions? We’ve got the answers. Explore below to learn more about
                    <span className="text-[#D94B2B] font-semibold"> GYMWasooli</span>.
                </p>
            </div>

            {/* FAQ Cards */}
            <div className="relative max-w-5xl mx-auto space-y-6 z-10">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`rounded-2xl shadow-lg border border-gray-700 bg-[#243447]/60 backdrop-blur-md overflow-hidden transition-all duration-500 ${active === index ? "border-[#D94B2B]" : "hover:border-[#D94B2B]/50"
                            }`}
                    >
                        <button
                            className="w-full flex items-center justify-between px-6 py-5 text-left"
                            onClick={() => setActive(active === index ? null : index)}
                        >
                            <div className="flex items-center gap-3">
                                <FaQuestionCircle
                                    className={`text-xl transition-all ${active === index ? "text-[#D94B2B]" : "text-gray-400"
                                        }`}
                                />
                                <span
                                    className={`font-semibold text-lg transition ${active === index ? "text-[#D94B2B]" : "text-white"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                            </div>
                            <FaChevronRight
                                className={`transition-transform duration-300 ${active === index
                                    ? "rotate-90 text-[#D94B2B]"
                                    : "text-gray-400"
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {active === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="px-6 pb-5 text-gray-300 leading-relaxed text-base border-t border-gray-700/60"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Footer Accent Line */}
            <div className="relative mt-24 h-[3px] bg-gradient-to-r from-transparent via-[#D94B2B] to-transparent opacity-70"></div>
        </section>
    );
};

export default FAQs;
