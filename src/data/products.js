const asset = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`;

export const categoryFilters = [
  "All Products",
  "Electronic Components",
  "Development Boards",
  "Sensors & Modules",
  "Motors",
  "LEDs",
  "Resistors",
  "Displays",
  "Tools & Accessories",
];

export const homeCategories = [
  { name: "Electronic Components", image: asset("electronic-components-cf6OXzTo.jpg") },
  { name: "Development Boards", image: asset("development-boards-DMGZcgaH.jpg") },
  { name: "Sensors & Modules", image: asset("sensor-CoPHT--O.jpg") },
  { name: "Tools & Accessories", image: asset("tools-7b4Dd664.jpg") },
];

export const logo = asset("a2microtech-logo-B1L-XqzD.jpg");
