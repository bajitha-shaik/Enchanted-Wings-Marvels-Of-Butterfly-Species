import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Ruler, AlertTriangle, Info } from 'lucide-react';
import { ClassificationResult as ClassificationResultType } from '../types/butterfly';

interface ClassificationResultProps {
  result: ClassificationResultType | null;
  isLoading: boolean;
}

const ClassificationResult: React.FC<ClassificationResultProps> = ({ result, isLoading }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Least Concern': return 'text-green-600 bg-green-100';
      case 'Near Threatened': return 'text-yellow-600 bg-yellow-100';
      case 'Vulnerable': return 'text-orange-600 bg-orange-100';
      case 'Endangered': return 'text-red-600 bg-red-100';
      case 'Critically Endangered': return 'text-red-800 bg-red-200';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-butterfly-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Analyzing Image...
          </h3>
          <p className="text-gray-600">
            Our AI is processing your butterfly image using advanced transfer learning techniques.
          </p>
        </div>
      </motion.div>
    );
  }

  if (!result) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <CheckCircle className="text-green-500" size={24} />
          <h3 className="text-2xl font-bold text-gray-800">Classification Complete</h3>
        </div>
        
        <div className="mb-4">
          <h4 className="text-3xl font-bold text-butterfly-600 mb-1">
            {result.species}
          </h4>
          <p className="text-lg text-gray-600 italic">
            {result.scientificName}
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-butterfly-50 rounded-lg p-4 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Confidence Score</p>
            <div className="text-3xl font-bold text-green-600">
              {Math.round(result.confidence * 100)}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${result.confidence * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="text-nature-600 mt-1" size={20} />
            <div>
              <h5 className="font-semibold text-gray-800">Habitat</h5>
              <p className="text-gray-600 text-sm">{result.habitat}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Ruler className="text-butterfly-600 mt-1" size={20} />
            <div>
              <h5 className="font-semibold text-gray-800">Wingspan</h5>
              <p className="text-gray-600 text-sm">{result.wingspan}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="text-orange-600 mt-1" size={20} />
            <div>
              <h5 className="font-semibold text-gray-800">Conservation Status</h5>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                {result.status}
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Info className="text-blue-600 mt-1" size={20} />
            <div>
              <h5 className="font-semibold text-gray-800">Reference Image</h5>
              <img
                src={result.imageUrl}
                alt={result.species}
                className="w-20 h-20 object-cover rounded-lg mt-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h5 className="font-semibold text-gray-800 mb-2">Description</h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          {result.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ClassificationResult;