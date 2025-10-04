import React from "react";
import image from "/assets/join.png";

const Member = () => {
    return (
        <section
            className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-5 md:inset-25 bg-gray-800 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Manage Your Gym Smarter
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Join <span className="text-[#ED563B] font-semibold">Gym Wasooli Management System </span>
                    today and simplify everything from member registrations to payments and reports.
                    Stay in control, save time, and grow your fitness business effortlessly.
                </p>
                <button className="px-8 py-3 bg-[#ED563B] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-[#ED563B] transition duration-300">
                    Become a Member
                </button>
            </div>
        </section>
    );
};

export default Member;
