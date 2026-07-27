export const ALIEXPRESS_AFFILIATE_BASE =
  "https://www.anrdoezrs.net/click-101842349-17280042";

export const affiliateUrl = (_query: string) => ALIEXPRESS_AFFILIATE_BASE;

export const categories = [
  { name: "Interior", slug: "interior", icon: "▰", description: "Comfort, storage & organization" },
  { name: "Electronics", slug: "electronics", icon: "◉", description: "Dash cams, chargers & displays" },
  { name: "Detailing", slug: "detailing", icon: "✦", description: "Cleaning, care & protection" },
  { name: "Road Safety", slug: "road-safety", icon: "◇", description: "Emergency & visibility gear" },
  { name: "Exterior", slug: "exterior", icon: "◆", description: "Protection & practical add-ons" },
  { name: "Tools", slug: "tools", icon: "⬢", description: "Diagnostics & maintenance helpers" },
];

export const topPicks = [
  { name: "Compact 4K Dash Camera", category: "Electronics", label: "Best all-around", rating: "4.8", image: "/images/product-dashcam.png", query: "4k dash camera wifi gps", summary: "A discreet camera format with the core features most daily drivers need.", features: ["Wide-angle recording", "Parking-monitor options", "App-ready models available"] },
  { name: "Wireless Charging Phone Mount", category: "Interior tech", label: "Daily essential", rating: "4.7", image: "/images/product-phone-mount.png", query: "wireless car charger phone mount", summary: "Keeps navigation visible while reducing loose charging cables.", features: ["One-hand mounting", "Vent or dashboard styles", "Adjustable viewing angle"] },
  { name: "Portable Digital Tire Inflator", category: "Road safety", label: "Great value", rating: "4.8", image: "/images/product-inflator.png", query: "portable digital tire inflator car", summary: "Compact backup air for tire top-ups and roadside emergencies.", features: ["Preset pressure shutoff", "Digital pressure display", "Rechargeable options"] },
  { name: "OBD2 Bluetooth Scanner", category: "Tools", label: "DIY favorite", rating: "4.6", image: "/images/product-obd2.png", query: "obd2 bluetooth scanner car diagnostic", summary: "A simple way to read common warning codes before visiting a shop.", features: ["Works with popular apps", "Compact plug-in design", "Live data on select models"] },
];

export const featuredGuides = [
  { slug: "best-dash-cams", kicker: "Electronics", title: "Dash cam features that matter—and those that don’t", readTime: "7 min" },
  { slug: "emergency-car-kit", kicker: "Road safety", title: "Build a practical emergency car kit without overpacking", readTime: "6 min" },
  { slug: "car-organization", kicker: "Interior", title: "Simple car organizers for a cleaner daily commute", readTime: "5 min" },
];
