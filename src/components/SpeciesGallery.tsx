import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Ruler } from 'lucide-react';
import { ButterflySpecies } from '../types/butterfly';

const SpeciesGallery: React.FC = () => {
  const featuredSpecies: ButterflySpecies[] = [
    {
      id: '1',
      name: 'Monarch Butterfly',
      scientificName: 'Danaus plexippus',
      imageUrl: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Famous for their incredible migration journey spanning thousands of miles across North America.',
      habitat: 'Open fields, meadows, gardens',
      wingspan: '8.9-10.2 cm',
      status: 'Vulnerable',
      region: 'North America'
    },
    {
      id: '2',
      name: 'Blue Morpho',
      scientificName: 'Morpho peleides',
      imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Known for their brilliant iridescent blue wings that shimmer in the sunlight.',
      habitat: 'Tropical rainforests',
      wingspan: '12-20 cm',
      status: 'Least Concern',
      region: 'Central & South America'
    },
    {
      id: '3',
      name: 'Swallowtail',
      scientificName: 'Papilio machaon',
      imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large, colorful butterflies with distinctive tail-like extensions on their hindwings.',
      habitat: 'Gardens, fields, meadows',
      wingspan: '6.5-11 cm',
      status: 'Least Concern',
      region: 'Worldwide'
    },
    {
      id: '4',
      name: 'Painted Lady',
      scientificName: 'Vanessa cardui',
      imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'One of the most widespread butterflies, found on every continent except Antarctica.',
      habitat: 'Various habitats worldwide',
      wingspan: '5-9 cm',
      status: 'Least Concern',
      region: 'Worldwide'
    },
    {
      id: '5',
      name: 'Zebra Longwing',
      scientificName: 'Heliconius charithonia',
      imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State butterfly of Florida, known for their distinctive black and white striped pattern.',
      habitat: 'Tropical and subtropical forests',
      wingspan: '7.2-10 cm',
      status: 'Least Concern',
      region: 'Southern United States to South America'
    },
    {
      id: '6',
      name: 'Glasswing Butterfly',
      scientificName: 'Greta oto',
      imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Remarkable for their transparent wings, making them nearly invisible in flight.',
      habitat: 'Rainforests',
      wingspan: '5.6-6.1 cm',
      status: 'Least Concern',
      region: 'Central America'
    }
  ];

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

  return (
    <section id="species" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Butterfly Species
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of the magnificent butterfly species our AI can identify. 
            Each species tells a unique story of adaptation and beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSpecies.map((species, index) => (
            <motion.div
              key={species.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="species-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={species.imageUrl}
                  alt={species.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(species.status)}`}>
                    {species.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {species.name}
                  </h3>
                  <p className="text-gray-600 italic text-sm">
                    {species.scientificName}
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {species.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{species.region}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Ruler size={16} />
                    <span>Wingspan: {species.wingspan}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-butterfly-500 to-butterfly-600 text-white py-2 px-4 rounded-lg hover:from-butterfly-600 hover:to-butterfly-700 transition-all duration-200">
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Our AI model can identify 75+ butterfly species with over 94% accuracy
          </p>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Transfer Learning Technology
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our classification system uses advanced transfer learning techniques, leveraging pre-trained 
              convolutional neural networks to achieve high accuracy with efficient training. This approach 
              allows us to identify butterfly species quickly and accurately, supporting conservation efforts 
              and educational initiatives worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeciesGallery;