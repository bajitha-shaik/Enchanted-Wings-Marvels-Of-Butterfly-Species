import React from 'react';
import { motion } from 'framer-motion';
import { Binary as Binoculars, BookOpen, Users, TrendingUp, Camera, Globe } from 'lucide-react';
import { ConservationScenario } from '../types/butterfly';

const ConservationInfo: React.FC = () => {
  const scenarios: ConservationScenario[] = [
    {
      id: '1',
      title: 'Biodiversity Monitoring',
      description: 'Field researchers and conservationists use our system to quickly identify butterfly species in diverse habitats, supporting real-time species inventory and population studies.',
      icon: 'binoculars',
      applications: [
        'Real-time species identification in the field',
        'Population monitoring and tracking',
        'Habitat assessment and management',
        'Data-driven conservation strategies'
      ]
    },
    {
      id: '2',
      title: 'Ecological Research',
      description: 'Automated classification systems support long-term ecological studies, enabling researchers to track butterfly behavior, migration patterns, and environmental responses.',
      icon: 'trending-up',
      applications: [
        'Migration pattern analysis',
        'Habitat preference studies',
        'Climate change impact assessment',
        'Behavioral pattern recognition'
      ]
    },
    {
      id: '3',
      title: 'Citizen Science & Education',
      description: 'Interactive tools engage enthusiasts and students in butterfly identification, promoting environmental awareness and citizen participation in scientific research.',
      icon: 'users',
      applications: [
        'Mobile butterfly identification apps',
        'Educational outreach programs',
        'Community-based monitoring',
        'Environmental awareness campaigns'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'binoculars': return Binoculars;
      case 'trending-up': return TrendingUp;
      case 'users': return Users;
      default: return BookOpen;
    }
  };

  return (
    <section id="conservation" className="py-20 px-4 bg-gradient-to-br from-nature-50 to-butterfly-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Conservation Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered butterfly classification system supports critical conservation efforts 
            and educational initiatives across multiple scenarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {scenarios.map((scenario, index) => {
            const IconComponent = getIcon(scenario.icon);
            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-nature-400 to-nature-600 rounded-full flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {scenario.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {scenario.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                    Key Applications
                  </h4>
                  <ul className="space-y-2">
                    {scenario.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-nature-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Impact Through Technology
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                By applying transfer learning to butterfly image classification, our project advances 
                scientific research and conservation efforts while enhancing public engagement and 
                educational outreach in biodiversity conservation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-butterfly-600 mb-2">75+</div>
                  <p className="text-gray-600 text-sm">Species Identified</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nature-600 mb-2">94%</div>
                  <p className="text-gray-600 text-sm">Accuracy Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-butterfly-600 mb-2">6.5K+</div>
                  <p className="text-gray-600 text-sm">Training Images</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nature-600 mb-2">3</div>
                  <p className="text-gray-600 text-sm">Use Case Scenarios</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-butterfly-400 to-butterfly-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Advanced AI Technology</h4>
                  <p className="text-gray-600 text-sm">
                    Utilizing state-of-the-art transfer learning techniques for accurate species identification.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-nature-400 to-nature-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Global Conservation Impact</h4>
                  <p className="text-gray-600 text-sm">
                    Supporting worldwide conservation efforts through accessible technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-butterfly-400 to-butterfly-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Educational Outreach</h4>
                  <p className="text-gray-600 text-sm">
                    Promoting environmental awareness and citizen science participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConservationInfo;