import React from 'react';
import hero from '/assets/banner.png'; // Assuming the banner image path

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen bg-black bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 flex items-center justify-center w-full h-full text-center">
                <div className="text-white px-6">
                    {/* Animated Heading */}
                    <h1 className="text-5xl font-extrabold text-[#ED563B] shadow-lg drop-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
                        Manage Smarter, Train Better
                    </h1>

                    {/* Animated Paragraph */}
                    <p className="mt-4 text-xl max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                        <span className="text-[#ED563B] font-semibold">GymWasooli Management System</span> helps you simplify gym operations —
                        from member tracking and trainer scheduling to billing and performance insights.
                        Power your fitness business with smart automation and effortless control.
                    </p>

                    {/* Call to Action Button */}
                    <div className="mt-8">
                        <button className="bg-[#ED563B] hover:bg-[#D94B2B] text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
