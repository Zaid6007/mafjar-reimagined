import marineImg from "@/assets/products/marine-equipment.jpg";
import portImg from "@/assets/products/port-equipment.jpg";
import divingImg from "@/assets/products/diving-equipment.jpg";
import industrialImg from "@/assets/products/industrial-support.jpg";
import controlImg from "@/assets/products/control-systems.png";
import gasDetectorImg from "@/assets/products/GasDT01.jpg";

export type Category =
  | "Marine Equipment"
  | "Port Equipment"
  | "Diving Equipment"
  | "Industrial Support"
  | "Control Systems"
  | "Gas Detectors";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  inStock: boolean;
}

const img: Record<Category, string> = {
  "Marine Equipment": marineImg,
  "Port Equipment": portImg,
  "Diving Equipment": divingImg,
  "Industrial Support": industrialImg,
  "Control Systems": controlImg,
  "Gas Detectors": gasDetectorImg
};

export const PRODUCTS: Product[] = [
  {
    id: "marine-nav-001",
    name: "Marine Navigation System Pro",
    category: "Marine Equipment",
    price: 4850,
    image: img["Marine Equipment"],
    shortDescription: "Advanced GPS and radar systems for safe navigation",
    description:
      "Integrated GPS, radar, and electronic chart plotting suite engineered for commercial vessels operating in demanding maritime environments.",
    features: ["GPS Integration", "Weather Monitoring", "Collision Avoidance", "ECDIS Compatible"],
    specs: [
      { label: "Display", value: '12" Sunlight Readable' },
      { label: "Range", value: "Up to 96 NM" },
      { label: "Certification", value: "IMO / SOLAS" },
    ],
    inStock: true,
  },
  {
    id: "port-crane-001",
    name: "Heavy-Duty Port Cranes",
    category: "Port Equipment",
    price: 128000,
    image: img["Port Equipment"],
    shortDescription: "Heavy-duty cranes for efficient cargo handling",
    description:
      "Industrial port crane with remote operation, integrated safety systems, and high lift capacity suited to container terminal operations.",
    features: ["High Capacity", "Remote Control", "Safety Systems", "Anti-Sway Tech"],
    specs: [
      { label: "Lift Capacity", value: "65 Tonnes" },
      { label: "Boom Reach", value: "42 m" },
      { label: "Power", value: "Electric / Diesel" },
    ],
    inStock: true,
  },
  {
    id: "diving-gear-001",
    name: "Professional Diving Gear Kit",
    category: "Diving Equipment",
    price: 3250,
    image: img["Diving Equipment"],
    shortDescription: "Complete diving solutions for underwater operations",
    description:
      "Complete commercial diving kit including helmet, suit, regulator, and umbilical systems certified for deep water operations.",
    features: ["Deep Water Certified", "Emergency Systems", "Professional Grade", "Includes Helmet"],
    specs: [
      { label: "Depth Rating", value: "75 m" },
      { label: "Suit Material", value: "Vulcanized Rubber" },
      { label: "Standard", value: "IMCA D018" },
    ],
    inStock: true,
  },
  {
  id: "industrial-weld-001",
  name: "GAS DETECTORS",
  category: "Gas Detectors",
  price: 1280,
  image: img["Gas Detectors"],   // ✅ FIXED
  shortDescription: "High-performance gas detection equipment for marine applications",
  description:
    "The easy-to-wear, slim and compact GasAlertMicroClip provides affordable protection from atmospheric gas hazards. For standard operation with features, you can count on, opt for the GasAlertMicroClip XT. For extended battery life, especially in cold weather, choose the GasAlertMicroClip XL. Both offer visual compliance at a glance with the flashing, green IntelliFlash™. Easy one-button operation reduces training time and lets workers focus on the job at hand",
  features: ["Waterproof Design", "High Temperature", "Portable", "Inverter Powered"],
  specs: [
    { label: "Manufacturer", value: "HONEYWELL" },
    { label: "Model", value: "GasAlertMicroClip XT" },
    { label: "Weight", value: "8.4 kg" },
  ],
  inStock: true,
},
  {
    id: "marine-engine-001",
    name: "Marine Engine Spare Parts Set",
    category: "Marine Equipment",
    price: 2150,
    image: img["Marine Equipment"],
    shortDescription: "Genuine replacement parts for major engine brands",
    description:
      "OEM-grade spare parts kit covering pistons, gaskets, filters, and injectors for major marine engine manufacturers.",
    features: ["OEM Quality", "Quick Delivery", "Warranty Included", "Multi-Brand"],
    specs: [
      { label: "Compatibility", value: "MAN, Wärtsilä, Caterpillar" },
      { label: "Warranty", value: "12 months" },
      { label: "Origin", value: "Certified Manufacturer" },
    ],
    inStock: true,
  },
  {
    id: "port-container-001",
    name: "Container Handling System",
    category: "Port Equipment",
    price: 84500,
    image: img["Port Equipment"],
    shortDescription: "Automated systems for container terminal operations",
    description:
      "Automated container handling rig with low-maintenance design and high cycle efficiency for modern terminals.",
    features: ["Automated Operation", "High Efficiency", "Low Maintenance", "Smart Telemetry"],
    specs: [
      { label: "Throughput", value: "32 TEU/hr" },
      { label: "Power Source", value: "Electric" },
      { label: "Footprint", value: "Compact" },
    ],
    inStock: true,
  },
  {
    id: "control-panel-001",
    name: "Power & Control Panel",
    category: "Control Systems",
    price: 6700,
    image: img["Control Systems"],
    shortDescription: "Industrial power and control panels engineered for marine environments",
    description:
      "Custom-designed power and control panels for shipboard and port-side systems, engineered to international electrical standards.",
    features: ["Custom Designed", "Marine Grade", "IP66 Enclosure", "ELV Compatible"],
    specs: [
      { label: "Voltage", value: "440V / 3PH" },
      { label: "Enclosure", value: "Stainless Steel" },
      { label: "Certification", value: "IEC 61439" },
    ],
    inStock: true,
  },
  {
    id: "diving-umbilical-001",
    name: "Diving Umbilical & ROV Cable",
    category: "Diving Equipment",
    price: 1890,
    image: img["Diving Equipment"],
    shortDescription: "Heavy-duty umbilical cables for diving and ROV operations",
    description:
      "Reinforced umbilical cable bundle with gas, comms, and pneumo lines suited to commercial diving and ROV deployment.",
    features: ["Reinforced Jacket", "Multi-Line Bundle", "High Tensile", "Color Coded"],
    specs: [
      { label: "Length", value: "100 m" },
      { label: "Working Pressure", value: "300 bar" },
      { label: "Standard", value: "IMCA D023" },
    ],
    inStock: true,
  },
  {
    id: "industrial-ppe-001",
    name: "Industrial PPE & Workwear Kit",
    category: "Industrial Support",
    price: 320,
    image: img["Industrial Support"],
    shortDescription: "Complete protective equipment for marine industrial work",
    description:
      "Full PPE bundle: helmet, gloves, coveralls, safety boots, and eye protection certified for shipyard environments.",
    features: ["Full Body Coverage", "ANSI Certified", "Heat Resistant", "High Visibility"],
    specs: [
      { label: "Sizes", value: "S–XXL" },
      { label: "Standard", value: "EN ISO 20471" },
      { label: "Pieces", value: "7" },
    ],
    inStock: true,
  },
  {
    id: "marine-radio-001",
    name: "VHF Marine Radio",
    category: "Marine Equipment",
    price: 540,
    image: img["Marine Equipment"],
    shortDescription: "GMDSS-compliant VHF radio for ship-to-shore communication",
    description:
      "Fixed-mount VHF radio with DSC, weather alerts, and dual-watch monitoring engineered for commercial vessels.",
    features: ["DSC Class D", "Weather Alerts", "Dual Watch", "GMDSS Ready"],
    specs: [
      { label: "Power", value: "25 W" },
      { label: "Channels", value: "All Intl + Wx" },
      { label: "Standard", value: "GMDSS" },
    ],
    inStock: true,
  },
  {
    id: "port-mooring-001",
    name: "Mooring & Dock Accessory Kit",
    category: "Port Equipment",
    price: 4200,
    image: img["Port Equipment"],
    shortDescription: "Heavy-duty mooring lines, bollards, and dock fittings",
    description:
      "Comprehensive mooring kit including synthetic lines, fairleads, bollards, and chafe protection for commercial docks.",
    features: ["High Tensile", "UV Resistant", "Marine Grade", "Complete Set"],
    specs: [
      { label: "Line Strength", value: "120 T MBL" },
      { label: "Material", value: "HMPE" },
      { label: "Length", value: "220 m" },
    ],
    inStock: true,
  },
  {
    id: "control-elv-001",
    name: "ELV & Pump Control System",
    category: "Control Systems",
    price: 5400,
    image: img["Control Systems"],
    shortDescription: "Extra-low voltage and pump automation control system",
    description:
      "Integrated ELV and pump control package with PLC logic, HMI display, and remote monitoring for industrial water systems.",
    features: ["PLC Driven", "HMI Display", "Remote Monitoring", "Custom Logic"],
    specs: [
      { label: "Inputs", value: "32 DI / 16 AI" },
      { label: "Comms", value: "Modbus / Ethernet" },
      { label: "Enclosure", value: "IP65" },
    ],
    inStock: true,
  },
];

export const CATEGORIES: Category[] = [
  "Marine Equipment",
  "Port Equipment",
  "Diving Equipment",
  "Industrial Support",
  "Control Systems",
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);

export const searchProducts = (query: string, limit = 6): Product[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.features.some((f) => f.toLowerCase().includes(q))
  ).slice(0, limit);
};

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
