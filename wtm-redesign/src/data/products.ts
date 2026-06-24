export interface Product {
  index: string
  title: string
  context: string
  href: string
  video: string
}

// Each video path is a placeholder for upcoming Higgsfield product-wise loops.
// `href` left as empty route stubs ready for back-end deployment.
export const products: Product[] = [
  {
    index: '01',
    title: 'Floor & Wall Tiles',
    context: 'Large-format porcelain, slip-resistant technical surfaces.',
    href: '',
    video: '/assets/products/tiles.mp4',
  },
  {
    index: '02',
    title: 'Sanitary Ware',
    context: 'Precision-engineered commercial and residential fixtures.',
    href: '',
    video: '/assets/products/sanitary.mp4',
  },
  {
    index: '03',
    title: 'Engineered Stone',
    context: 'High-density, acid-resistant sintered stone slabs.',
    href: '',
    video: '/assets/products/engineered-stone.mp4',
  },
  {
    index: '04',
    title: 'Industrial Floor & Wall System',
    context: 'Heavy-duty utility coatings and structural containment.',
    href: '',
    video: '/assets/products/industrial-systems.mp4',
  },
  {
    index: '05',
    title: 'Natural Stones',
    context: 'Premium architectural marble, granite, and structural facades.',
    href: '',
    video: '/assets/products/natural-stones.mp4',
  },
  {
    index: '06',
    title: 'Ores & Minerals',
    context: 'Strategic industrial metal sourcing, antimony, and metallurgy supply chains.',
    href: '',
    video: '/assets/products/ores-minerals.mp4',
  },
]
