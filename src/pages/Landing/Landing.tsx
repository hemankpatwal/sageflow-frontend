import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex justify-center items-center overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-[1200px] h-[1200px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30"
        />
      </motion.div>

      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-blue-900"
        >
          SmartHealth
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex space-x-4"
        >
          <Link
            href="/signin"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            aria-label="Sign In"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
            aria-label="Sign Up"
          >
            Sign Up
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold text-blue-900 mb-6 bg-red-500">
          Revolutionizing Healthcare with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Analyze your health data smartly and get personalized insights.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/signup"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            aria-label="Get Started"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl z-10"
      >
        {[
          {
            title: 'Real-Time Analysis',
            description: 'Get instant insights into your health data with our advanced AI algorithms.',
          },
          {
            title: 'Personalized Reports',
            description: 'Receive tailored health recommendations based on your unique data.',
          },
          {
            title: 'Secure & Private',
            description: 'Your data is encrypted and stored securely, ensuring complete privacy.',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-24 text-center text-gray-600 z-10"
      >
        <p>© 2025 SmartHealth. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Landing;