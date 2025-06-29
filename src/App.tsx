import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageUpload from './components/ImageUpload';
import ClassificationResult from './components/ClassificationResult';
import SpeciesGallery from './components/SpeciesGallery';
import ConservationInfo from './components/ConservationInfo';
import Footer from './components/Footer';
import { ClassificationResult as ClassificationResultType } from './types/butterfly';

function App() {
  const [classificationResult, setClassificationResult] = useState<ClassificationResultType | null>(null);
  const [isClassifying, setIsClassifying] = useState(false);

  const handleImageUpload = async (file: File) => {
    setIsClassifying(true);
    
    // Simulate AI classification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock classification result
    const mockResult: ClassificationResultType = {
      species: "Monarch Butterfly",
      scientificName: "Danaus plexippus",
      confidence: 0.94,
      description: "The Monarch butterfly is one of the most recognizable butterflies in North America, famous for its incredible migration journey spanning thousands of miles.",
      habitat: "Open fields, meadows, gardens, and roadsides",
      wingspan: "8.9-10.2 cm",
      status: "Vulnerable",
      imageUrl: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800"
    };
    
    setClassificationResult(mockResult);
    setIsClassifying(false);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main>
        <Hero />
        
        <section id="classify" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Identify Your Butterfly
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Upload an image of a butterfly and let our AI-powered classification system 
                identify the species using advanced transfer learning techniques.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <ImageUpload 
                onImageUpload={handleImageUpload}
                isClassifying={isClassifying}
              />
              
              {(classificationResult || isClassifying) && (
                <ClassificationResult 
                  result={classificationResult}
                  isLoading={isClassifying}
                />
              )}
            </div>
          </div>
        </section>

        <SpeciesGallery />
        <ConservationInfo />
      </main>

      <Footer />
    </div>
  );
}

export default App;