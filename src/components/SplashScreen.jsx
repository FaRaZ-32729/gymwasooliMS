import React, { useEffect } from "react";
import logo from "/assets/logo.png";

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#1E2939] flex items-center justify-center" >
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>
            <div className="relative  flex items-center justify-center z-50">

                <img src={logo} alt="Logo" className="w-40 md:w-60 animate-pulse" />
            </div>
        </section>
    );
};

export default SplashScreen;
