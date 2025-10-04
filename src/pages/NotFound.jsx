import React from "react";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <section className="relative bg-[#1F2939] ">

            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>
            <div className="flex flex-col items-center justify-center h-screen text-center px-4">

                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Oops! Page not found
                </h2>
                <p className="text-white mb-6">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                {/* <Link
                    to="/"
                    className="px-6 py-2 bg-[#ED563B] text-white rounded-lg shadow hover:bg-transparent hover:text-[#2ECE90] transition"
                >
                    Go Back Home
                </Link> */}
            </div>
        </section>
    );
};

export default NotFound;
