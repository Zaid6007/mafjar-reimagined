import marineImg from "@/assets/products/marine-equipment.jpg";
import portImg from "@/assets/products/port-equipment.jpg";
import divingImg from "@/assets/products/diving-equipment.jpg";
import industrialImg from "@/assets/products/industrial-support.jpg";
import industrialImg2 from "@/assets/products/BC.jpg";
import controlImg from "@/assets/products/control-systems.png";
import gasDetectorImg from "@/assets/products/GasDT01.jpg";
import gasDetector2Img from "@/assets/products/GS2.jpeg";
import gasDetector3Img from "@/assets/products/EEBD.jpg";
import gasDetector4Img from "@/assets/products/FGDS.jpg";
import marineImg2 from "@/assets/products/EPIRB.jpg";
import marineImg3 from "@/assets/products/Fixed VHF.jpg";
import marineImg4 from "@/assets/products/Fixed VHF 2.jpg";
import marineImg5 from "@/assets/products/FTB.jpg";
export type Category =
  | "Marine Equipment"
  | "Port Equipment"
  | "Diving Equipment"
  | "Industrial Support"
  | "Industrial Support2"
  | "Control Systems"
  | "Gas Detectors"
  | "Gas Detectors2"
  | "Gas Detectors3"
  | "Gas Detectors4"
  | "Marine Equipment2"
  | "Marine Equipment3"
  | "Marine Equipment4"
  | "Marine Equipment5";
export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  brochure?: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  inStock: boolean;
}

const img: Record<Category, string> = {
  "Marine Equipment": marineImg,
  "Marine Equipment2": marineImg2,
  "Port Equipment": portImg,
  "Diving Equipment": divingImg,
  "Industrial Support": industrialImg,
  "Industrial Support2": industrialImg2,
  "Control Systems": controlImg,
  "Gas Detectors": gasDetectorImg,
  "Gas Detectors2": gasDetector2Img,
  "Gas Detectors3": gasDetector3Img,
  "Gas Detectors4": gasDetector4Img,
  "Marine Equipment3": marineImg3,
  "Marine Equipment4": marineImg4,
  "Marine Equipment5": marineImg5,
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
  image: img["Gas Detectors"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/GasAlertMaxXTIIDatasheet65700EN_0.pdf",

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
  id: "industrial-weld-002",
  name: "GAS DETECTORS 02",
  category: "Gas Detectors",
  price: 180,
  image: img["Gas Detectors2"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/BW-Clip-Datasheet.pdf",

  shortDescription: "High-performance gas detection equipment for marine applications",

  description:
    "The BW Clip Series of single-gas detectors provides up to three years maintenance-free operation: Just turn on the device and it runs continuously — no need for calibration, sensor replacement, battery replacement or battery charging. That means great reliability and no downtime. Plus, with the two-year version for H2S or CO, ",

  features: ["Waterproof Design", "High Temperature", "Portable", "Inverter Powered"],

  specs: [
    { label: "Manufacturer", value: "HONEYWELL" },
    { label: "Model", value: "BW CLIP" },
    { label: "Weight", value: "1 kg" },
  ],

  inStock: true,
},
{
  id: "industrial-weld-003",
  name: "Emergency Escape Breathing Devices ",
  category: "Gas Detectors",
  price: 400,
  image: img["Gas Detectors3"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/eebd-emergency-escape-breathing-devices.pdf",

  shortDescription: "High-performance gas detection equipment for marine applications",

  description:
    "TLight, compact and easy to use, our Emergency Escape Breathing Devices (EEBD) are perfectly adapted to confined spaces, marine, industrial and Oil & Gas applications. They are available with a duration from 10 to 20 minutes",

  features: ["Waterproof Design", "High Temperature", "Portable", "Inverter Powered"],

  specs: [
    { label: "Manufacturer", value: "HONEYWELL" },
    { label: "Model", value: "BIO-S-CAPE" },
    { label: "Weight", value: "1 kg" },
  ],

  inStock: true,
},
{
  id: "industrial-weld-004",
  name: "FIXED GAS DETECTION SYSTEM ",
  category: "Gas Detectors",
  price: 400,
  image: img["Gas Detectors4"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/centr-PL4-dp2770-rev2.pdf",

  shortDescription: "High-performance gas detection equipment for marine applications",

  description:
    "The PL4+ gas control unit represents the best technology for the detection of flammable, toxic or Oxygen compounds in small systems. The PL4+ has 4 analog 4-20 mA inputs that can be extended to 8 by using the 4-input expansion board PL4/ESP, easy to plug in the control unit.",

  features: ["", ""],

  specs: [
    { label: "Manufacturer", value: "SENSITRON" },
    { label: "Model", value: "PL4+" },
    { label: "Weight", value: "4 kg" },
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
  id: "marine-engine-002",
  name: "EPIRB ",
  category: "Marine Equipment",
  price: 300,
  image: img["Marine Equipment2"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/neb-2000.pdf",

  shortDescription: "High-performance gas detection equipment for marine applications",

  description:
    "NSR's new generation of AIS EPIRB. Meet the latest IMO regulation  IMO MSC.471 (101). Built in GNSS receiver and AIS transmitter. Creative design for easy operation. Special lanyard for hands-free carry. Automatic power cut when test completed. Multiple protection to avoid false alerts. Lower power consumption for longer working hours. Automatic release device activated underwater 4 meters. Easily coding/reading user data with infrared communication technology. 406MHz transmission together with 121MHz.homing & AIS transmitter. RS type approved"
  ,features: ["", ""],

  specs: [
    { label: "Manufacturer", value: "NSR" },
    { label: "Model", value: "NEB 2000" },
    { label: "Weight", value: "1 kg" },
  ],

  inStock: true,
},
 {
  id: "marine-engine-003",
  name: "Fixed VHF ",
  category: "Marine Equipment",
  price: 600,
  image: img["Marine Equipment3"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/sailor_6248_vhf.pdf",

  shortDescription: "High-performance gas detection equipment for marine applications",

  description:
    "With competitive value, introduced to ensure availability to all professional vessels, the new generation SAILOR 6210 VHF still retain the same premium, rugged feel of previous generations, but with improvements across the board. Designed with ease-of-use in mind, the SAILOR 6210 VHF belong at the helm of any vessel crewed by professionals."
  ,features: ["", ""],

  specs: [
    { label: "Manufacturer", value: "COBHAM" },
    { label: "Model", value: "SAILOR 6248" },
    { label: "Weight", value: "3 kg" },
  ],

  inStock: true,
},
 {
  id: "marine-engine-004",
  name: "Fixed VHF2",
  category: "Marine Equipment",
  price: 500,
  image: img["Marine Equipment4"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/sailor_6210_6215_vhf_dsc_class_d_lo.pdf",

  shortDescription: "High-performance gas detection equipment for marine applications",

  description:
    "With competitive value, introduced to ensure availability to all professional vessels, the new generation SAILOR 6210 VHF still retain the same premium, rugged feel of previous generations, but with improvements across the board. Designed with ease-of-use in mind, the SAILOR 6210 VHF belong at the helm of any vessel crewed by professionals."
  ,features: ["", ""],

  specs: [
    { label: "Manufacturer", value: "COBHAM" },
    { label: "Model", value: "SAILOR 6210" },
    { label: "Weight", value: "3 kg" },
  ],

  inStock: true,
},
{
  id: "marine-engine-005",
  name: "Fleet Broadband",
  category: "Marine Equipment",
  price: 900,
  image: img["Marine Equipment5"],
  brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/3-SAILOR-500-FleetBroadband-Product-Sheet.pdf",

  shortDescription: "High-performance gas detection equipment for marine applications",

  description:
    "The COBHAM SAILOR 500 Fleet Broadband is designed for vessels and platforms with demanding requirements for connectivity. It meets the critical needs for voice and data communication of maritime and offshore professionals globally but despite its power, is a compact, lightweight solution. It provides extensive functionality including full access to bandwidth-hungry IP applications, broadband internet/intranet, e-mail, secure VPN and nine simultaneous voice lines."
  ,features: ["", ""],

  specs: [
    { label: "Manufacturer", value: "COBHAM" },
    { label: "Model", value: "FBB 500" },
    { label: "Weight", value: "1 kg" },
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
    id: "industrial-ppe-002",
    name: "BATTERY CHARGER",
    category: "Industrial Support",
    price: 440,
    image: img["Industrial Support2"],
    brochure: "https://www.mastersystems.com/wp-content/uploads/2024/08/Datasheet-Skylla-Charger-EN.pdf",
    shortDescription: "Complete protective equipment for marine industrial work",
    description:
      "Suitable for AC and DC supply (AC-DC and DC-DC operation) Except for the 3-phase input models, the chargers also accept a DC supply. Controlled charging Every TG Charger has a microprocessor, which accurately controls the charging in three steps. The charging process takes place in accordance with the IUoUo characteristic and charges more rapidly than other processes. Available as 24V/30A, 24V/50A, 24V/80A, 24V/100A as Skylla chargers",
    features: ["Full Body Coverage", "ANSI Certified", "Heat Resistant", "High Visibility"],
    specs: [
      { label: "Manufacturer", value: "VICTRON ENERGY" },
      { label: "Model", value: "SKYLLA TG" },
      { label: "Weight", value: "20 kg" },
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
  "Gas Detectors",
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
  new Intl.NumberFormat("en-US", { style: "currency", currency: "QAR", maximumFractionDigits: 0 }).format(n);
