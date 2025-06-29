import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera, Image as ImageIcon, X } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  isClassifying: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, isClassifying }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Upload Butterfly Image
        </h3>

        {uploadedImage ? (
          <div className="relative">
            <img
              src={uploadedImage}
              alt="Uploaded butterfly"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              disabled={isClassifying}
            >
              <X size={16} />
            </button>
            {isClassifying && (
              <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="font-medium">Analyzing butterfly...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`upload-area rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
              dragActive ? 'border-butterfly-500 bg-butterfly-50' : ''
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-butterfly-400 to-butterfly-600 rounded-full flex items-center justify-center">
                  <Upload className="text-white" size={32} />
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Drop your butterfly image here
                </h4>
                <p className="text-gray-600 mb-4">
                  or click to browse from your device
                </p>
                <p className="text-sm text-gray-500">
                  Supports JPG, PNG, WebP up to 10MB
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Camera size={20} />
                  <span className="text-sm">Camera</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <ImageIcon size={20} />
                  <span className="text-sm">Gallery</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Our AI model can identify 75+ butterfly species with high accuracy
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageUpload;