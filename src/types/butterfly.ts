export interface ClassificationResult {
  species: string;
  scientificName: string;
  confidence: number;
  description: string;
  habitat: string;
  wingspan: string;
  status: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered';
  imageUrl: string;
}

export interface ButterflySpecies {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  description: string;
  habitat: string;
  wingspan: string;
  status: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered';
  region: string;
}

export interface ConservationScenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  applications: string[];
}