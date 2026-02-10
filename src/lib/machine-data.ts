export interface Machine {
  id: string;
  name: string;
  category: "CNC" | "Hydraulic" | "Robotic" | "Material Handling";
  price: number;
  image: string;
  specs: Record<string, string>;
  description: string;
}
export const CATEGORIES = ["CNC", "Hydraulic", "Robotic", "Material Handling"] as const;
export const MACHINES: Machine[] = [
  {
    id: "m1",
    name: "Kinetix X1-Precision CNC",
    category: "CNC",
    price: 125000,
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=800",
    description: "High-speed 5-axis vertical machining center for aerospace components.",
    specs: { "Spindle": "18,000 RPM", "Travel": "1000x600x600mm", "Tooling": "ATC 30" }
  },
  {
    id: "m2",
    name: "Hydro-Max 500T Press",
    category: "Hydraulic",
    price: 85000,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty hydraulic press with precision digital stroke control.",
    specs: { "Force": "500 Tons", "Stroke": "400mm", "Bed Size": "1200x1200mm" }
  },
  {
    id: "m3",
    name: "Titan-Arm R7 Welding Bot",
    category: "Robotic",
    price: 45000,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800",
    description: "Collaborative welding robot with integrated AI vision systems.",
    specs: { "Reach": "2100mm", "Payload": "20kg", "Accuracy": "0.05mm" }
  },
  {
    id: "m4",
    name: "Lift-Master Forklift Pro",
    category: "Material Handling",
    price: 32000,
    image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800",
    description: "Electric high-reach forklift optimized for narrow aisles.",
    specs: { "Capacity": "2.5 Tons", "Lift Height": "6000mm", "Power": "48V Electric" }
  },
  {
    id: "m5",
    name: "Vantage L2 Laser Cutter",
    category: "CNC",
    price: 198000,
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    description: "Industrial fiber laser cutting system for thick gauge steel.",
    specs: { "Power": "6kW Fiber", "Table": "3000x1500mm", "Max Cut": "25mm Steel" }
  },
  {
    id: "m6",
    name: "Syncro-Flow Conveyor System",
    category: "Material Handling",
    price: 12000,
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=800",
    description: "Modular automated sortation conveyor with smart sensors.",
    specs: { "Width": "800mm", "Speed": "2.5m/s", "Max Load": "50kg/m" }
  },
  {
    id: "m7",
    name: "Forge-Tech Induction Oven",
    category: "Hydraulic",
    price: 67000,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    description: "Precision induction heating furnace for industrial forging.",
    specs: { "Temp": "1300°C", "Power": "150kW", "Cycle": "20s Rapid Heat" }
  },
  {
    id: "m8",
    name: "Cyber-Pick Sorting Cell",
    category: "Robotic",
    price: 89000,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    description: "Pick-and-place robotic cell with high-speed delta arms.",
    specs: { "Cycle": "120 Picks/Min", "Vision": "3D LiDAR", "Work Area": "1200mm Circle" }
  }
];