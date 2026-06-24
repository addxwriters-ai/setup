export interface Project {
  index: string
  name: string
  scale: string
  location: string
  media: string
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'National Petrochemical Plant',
    scale: '320,000 m² · Acid-Resistant Sintered Stone & Utility Floor Coatings',
    location: 'Karachi Industrial Zone, Sindh',
    media: '/assets/projects/petrochemical-plant.mp4',
  },
  {
    index: '02',
    name: 'International Airport Terminal',
    scale: '185,000 m² · Large-Format Porcelain Tile & High-Traffic Safety Systems',
    location: 'Islamabad, ICT',
    media: '/assets/projects/airport-terminal.mp4',
  },
  {
    index: '03',
    name: 'Commercial Dairy & Food Processing Facility',
    scale: '72,000 m² · Alkali-Resistant Sanitary Ware & Slip-Resistant Floors',
    location: 'Lahore, Punjab',
    media: '/assets/projects/dairy-facility.mp4',
  },
  {
    index: '04',
    name: 'Regional Pharmaceutical Laboratory',
    scale: '48,000 m² · Chemical-Resistant Surfaces & Clean-Room Natural Stone',
    location: 'Multan, Punjab',
    media: '/assets/projects/pharma-lab.mp4',
  },
]
