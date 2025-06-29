import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Camera, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Enchanted{' '}
              <span className="bg-gradient-to-r from-butterfly-500 to-nature-500 bg-clip-text text-transparent">
                Wings
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the marvels of butterfly species through AI-powered classification. 
              Using advanced transfer learning, we help identify and conserve these magnificent creatures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Brain className="text-butterfly-600" size={20} />
              <span className="text-gray-700 font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Camera className="text-nature-600" size={20} />
              <span className="text-gray-700 font-medium">75 Species</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Sparkles className="text-butterfly-600" size={20} />
              <span className="text-gray-700 font-medium">Conservation Focus</span>
            </div>
          </motion.div>

          <motion.a
            href="#classify"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-butterfly-500 to-butterfly-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-butterfly-600 hover:to-butterfly-700 transition-all duration-300 shadow-lg hover:shadow-xl animate-glow"
          >
            <Camera size={24} />
            <span>Start Classifying</span>
            <ArrowDown size={20} className="animate-bounce" />
          </motion.a>
        </div>

        {/* Floating Butterfly Elements */}
        <div className="relative">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 text-6xl opacity-20 animate-flutter"
          >
            🦋
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 right-20 text-4xl opacity-30 animate-flutter"
          >
            🦋
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 left-1/4 text-5xl opacity-25 animate-flutter"
          >
            🦋
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;