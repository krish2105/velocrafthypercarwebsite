export interface CarModel {
  id: string;
  name: string;
  category: string;
  horsepower: number;
  topSpeed: number; // km/h
  acceleration: number; // 0-100 km/h in seconds
  price: string;
  image: string;
  description: string;
}

export const cars: CarModel[] = [
  {
    id: 'vanta-r',
    name: 'Velocraft Vanta R',
    category: 'Track-Focused Hypercar',
    horsepower: 1480,
    topSpeed: 412,
    acceleration: 1.9,
    price: '$2,400,000',
    image: '/assets/car-renders/hero-car.jpg',
    description: 'Born from carbon, calibrated for velocity. The Vanta R redefines the boundaries of physical performance.'
  },
  {
    id: 'aether-x',
    name: 'Velocraft Aether X',
    category: 'Grand Touring',
    horsepower: 1200,
    topSpeed: 380,
    acceleration: 2.3,
    price: '$1,850,000',
    image: '/assets/car-renders/velocraft-aether-x-render.png',
    description: 'Sculpted by air. Powered by silence. The Aether X provides an unparalleled luxury grand touring experience.'
  },
  {
    id: 'solara-gt',
    name: 'Velocraft Solara GT',
    category: 'Electric Supercar',
    horsepower: 950,
    topSpeed: 350,
    acceleration: 2.7,
    price: '$1,200,000',
    image: '/assets/car-renders/velocraft-solara-gt-render.png',
    description: 'Every surface exists for speed. The Solara GT brings hypercar tech to the everyday driver.'
  }
];

export const features = [
  {
    title: 'Quad-Motor Electric Drive',
    description: 'Independent torque delivery to each wheel, unlocking impossible cornering physics.',
    icon: 'Cpu' // We'll map this to a lucide-react icon
  },
  {
    title: 'Active Aero System',
    description: 'Dynamic wing and underbody flaps adjust in milliseconds to maximize downforce and minimize drag.',
    icon: 'Wind'
  },
  {
    title: 'Carbon Monocoque',
    description: 'Aerospace-grade carbon fiber tub provides exceptional rigidity while maintaining ultra-low weight.',
    icon: 'Layers'
  },
  {
    title: 'Track-Calibrated Suspension',
    description: 'Push-rod suspension geometry derived from Le Mans prototypes.',
    icon: 'Activity'
  },
  {
    title: 'AI Torque Vectoring',
    description: 'Continuous predictive calculation adjusting power output up to 1000 times per second.',
    icon: 'Zap'
  },
  {
    title: 'Thermal Battery Architecture',
    description: 'Immersion cooling ensures consistent peak power delivery without derating on track days.',
    icon: 'ThermometerSun'
  }
];

export const specsData = [
  { label: 'Power', value: '1,480 HP' },
  { label: 'Torque', value: '1,750 Nm' },
  { label: 'Battery', value: '120 kWh Solid State' },
  { label: 'Drag Coefficient', value: '0.21 Cd' },
  { label: 'Downforce', value: '1,200 kg @ 300km/h' },
  { label: 'Charging Time', value: '12 mins (10-80%)' },
  { label: 'Range', value: '720 km' },
  { label: 'Weight', value: '1,650 kg' },
  { label: 'Braking (100-0)', value: '28 meters' },
  { label: 'Track Mode', value: 'Active / AI Assisted' }
];

export const colors = [
  { id: 'obsidian', name: 'Obsidian Black', hex: '#050505' },
  { id: 'silver', name: 'Liquid Silver', hex: '#d7d9dc' },
  { id: 'crimson', name: 'Racing Crimson', hex: '#ef4444' },
  { id: 'blue', name: 'Electric Blue', hex: '#38bdf8' },
  { id: 'pearl', name: 'Pearl White', hex: '#f8f9fa' }
];
