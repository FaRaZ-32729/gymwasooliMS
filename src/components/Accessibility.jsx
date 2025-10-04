import React from "react";
import accessImg from "/assets/manage.png";
import bgImage from "/assets/dashboard.jpg";

const Accessibility = () => {
    return (
        <section
            className="py-20 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-[#271612]/60"></div>

            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center text-white">
                {/* Left Image */}
                <div className="flex justify-center">
                    <img
                        src={accessImg}
                        alt="Gym Access Anywhere"
                        className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-white/20"
                    />
                </div>

                {/* Right Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D94B2B]">
                        Freedom from Anywhere
                    </h2>
                    <p className="text-gray-200 leading-relaxed mb-4">
                        With the{" "}
                        <span className="text-[#D94B2B] font-semibold">
                            Gym Wasooli Management System
                        </span>
                        , you’re never tied to a desk. The mobile-friendly dashboard
                        empowers you to manage your gym operations — anytime, anywhere.
                    </p>
                    <p className="text-gray-200 leading-relaxed mb-4">
                        Track payments, monitor attendance, and access performance insights
                        directly from your device. Whether you’re in the gym or on the go,
                        Gym Wasooli keeps you connected, efficient, and in control.
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                        Stay productive from anywhere — approve memberships, review reports,
                        or manage due payments with ease. Gym Wasooli brings complete control
                        to your fingertips.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Accessibility;
