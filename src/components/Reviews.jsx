import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
    const reviews = [
        {
            name: "Ayesha Khan",
            role: "Gym Member",
            text: "Gym Wasooli has completely changed how I manage my fitness routine. The trainers are amazing, and I love how easy it is to track my progress through their system.",
        },
        {
            name: "Ali Raza",
            role: "Gym Owner",
            text: "Managing memberships and payments is now effortless. Gym Wasooli keeps everything organized, and the dashboard is incredibly user-friendly.",
        },
        {
            name: "Sara Ahmed",
            role: "Personal Trainer",
            text: "I can easily access client data, update schedules, and monitor attendance. Gym Wasooli truly makes gym management smarter and smoother!",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section className="relative text-white py-20 bg-[#1E2939] flex flex-col items-center justify-center text-center">
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            <h2 className="text-4xl font-bold text-[#ED563B] mb-10">What Our Users Say</h2>

            <div className="relative w-full max-w-3xl h-[250px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex flex-col items-center justify-center px-6"
                    >
                        <p className="text-lg italic mb-6">“{reviews[index].text}”</p>
                        <h3 className="text-xl font-semibold text-[#EB563A]/60">{reviews[index].name}</h3>
                        <p className="text-gray-500">{reviews[index].role}</p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-3 mt-6">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i ? "bg-[#ED563B]" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
