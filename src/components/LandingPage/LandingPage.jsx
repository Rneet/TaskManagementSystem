import React from 'react';
import Hero from '../Hero/Hero'; // Import the Hero component
import Services from '../Services/Services'; // Import the Services component
import { motion } from 'framer-motion';
import BannerPng from '../../assets/banner.png'; // Adjust the import path for your banner image

const LandingPage = ({ onStart }) => {
  return (
    <div className="bg-white overflow-hidden relative"> {/* Set background to white */}
      {/* Hero Section with Navbar inside */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* New Banner Section */}
      <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
          {/* Banner Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="text-center md:text-left space-y-4 lg:max-w-[750px] text-black"> {/* Set text color to black */}
              <h1 className="text-3xl font-bold !leading-snug text-black mx-32 ">
              Manage your tasks efficiently with our Task Management System. Stay organized and boost your productivity.

              </h1>
              
              <button 
          onClick={onStart} 
          className="  mx-32 bg-blue-100 text-blue-500 font-semibold py-3 px-6 rounded-lg hover:bg-blue-300 transition-all duration-300">
          Get Started
        </button>
            </div>
          </motion.div>
          {/* Banner Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={BannerPng}
              alt=""
              className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
