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
    name: 'Gwadar Port Logistics Terminal',
    scale: '420,000 m² · Heavy Industrial',
    location: 'Gwadar, Balochistan',
    media: '/assets/projects/gwadar-terminal.mp4',
  },
  {
    index: '02',
    name: 'Karachi Steel Processing Complex',
    scale: '180,000 m² · Metallurgy',
    location: 'Karachi, Sindh',
    media: '/assets/projects/karachi-steel.mp4',
  },
  {
    index: '03',
    name: 'Islamabad Federal Civic Tower',
    scale: '96,000 m² · Commercial Facade',
    location: 'Islamabad, ICT',
    media: '/assets/projects/islamabad-tower.mp4',
  },
  {
    index: '04',
    name: 'Lahore Ring Infrastructure Grid',
    scale: '64 km · Structural Surfaces',
    location: 'Lahore, Punjab',
    media: '/assets/projects/lahore-grid.mp4',
  },
]
