import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-butterfly-400 to-butterfly-600 rounded-full flex items-center justify-center animate-flutter">
                <span className="text-white text-xl">🦋</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Enchanted Wings</h3>
                <p className="text-gray-400 text-sm">AI Butterfly Classification</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing butterfly conservation through AI-powered species identification 
              and educational technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>AI Species Classification</li>
              <li>75+ Butterfly Species</li>
              <li>Transfer Learning Technology</li>
              <li>Conservation Applications</li>
              <li>Educational Resources</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Applications</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Biodiversity Monitoring</li>
              <li>Ecological Research</li>
              <li>Citizen Science</li>
              <li>Environmental Education</li>
              <li>Conservation Planning</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
                <span className="text-sm">View Source Code</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
                <span className="text-sm">Research Paper</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">Contact Team</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>for butterfly conservation</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 Enchanted Wings. Advancing biodiversity through technology.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;