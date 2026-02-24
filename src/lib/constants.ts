import type {
  Vehicle,
  Testimonial,
  ProcessStep,
  Benefit,
  BusinessInfo,
  NavLink,
} from "@/types";

/* ─── Navigation ─── */
export const NAV_LINKS: NavLink[] = [
  { label: "Inventario", href: "#inventario" },
  { label: "¿Por qué nosotros?", href: "#por-que" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

/* ─── Business Information ─── */
export const BUSINESS_INFO: BusinessInfo = {
  name: "AutosLeón",
  address: "Blvd. Adolfo López Mateos 1234, Col. Centro",
  city: "León",
  state: "Guanajuato",
  phone: "+52 477 123 4567",
  whatsapp: "524771234567",
  email: "ventas@autosleon.mx",
  hours: {
    weekdays: "Lunes a Viernes: 9:00 AM – 7:00 PM",
    saturday: "Sábados: 9:00 AM – 3:00 PM",
    sunday: "Domingos: Cerrado",
  },
  socialMedia: {
    facebook: "https://facebook.com/autosleon",
    instagram: "https://instagram.com/autosleon",
    tiktok: "https://tiktok.com/@autosleon",
  },
  coordinates: {
    lat: 21.1250,
    lng: -101.6859,
  },
};

/* ─── Featured Vehicles ─── */
export const VEHICLES: Vehicle[] = [
  {
    id: "nissan-versa-2022",
    brand: "Nissan",
    model: "Versa",
    year: 2022,
    price: 289000,
    mileage: 35000,
    transmission: "automatic",
    fuelType: "gasoline",
    images: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=600&fit=crop",
    ],
    featured: true,
    badge: "good-price",
    color: "Blanco",
    doors: 4,
    engine: "1.6L 4 cilindros",
  },
  {
    id: "vw-jetta-2021",
    brand: "Volkswagen",
    model: "Jetta",
    year: 2021,
    price: 349000,
    mileage: 42000,
    transmission: "automatic",
    fuelType: "gasoline",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    featured: true,
    badge: "featured",
    color: "Gris",
    doors: 4,
    engine: "1.4L TSI Turbo",
  },
  {
    id: "toyota-corolla-2020",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 325000,
    mileage: 55000,
    transmission: "automatic",
    fuelType: "gasoline",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
    ],
    featured: true,
    badge: "featured",
    color: "Plata",
    doors: 4,
    engine: "1.8L 4 cilindros",
  },
  {
    id: "mazda-3-2023",
    brand: "Mazda",
    model: "3",
    year: 2023,
    price: 419000,
    mileage: 18000,
    transmission: "automatic",
    fuelType: "gasoline",
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
    ],
    featured: true,
    badge: "new-arrival",
    color: "Rojo",
    doors: 4,
    engine: "2.5L Skyactiv-G",
  },
  {
    id: "honda-crv-2021",
    brand: "Honda",
    model: "CR-V",
    year: 2021,
    price: 489000,
    mileage: 38000,
    transmission: "automatic",
    fuelType: "gasoline",
    images: [
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800&h=600&fit=crop",
    ],
    featured: true,
    badge: "featured",
    color: "Negro",
    doors: 4,
    engine: "1.5L Turbo VTEC",
  },
  {
    id: "chevrolet-onix-2022",
    brand: "Chevrolet",
    model: "Onix",
    year: 2022,
    price: 269000,
    mileage: 28000,
    transmission: "manual",
    fuelType: "gasoline",
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop",
    ],
    featured: true,
    badge: "good-price",
    color: "Azul",
    doors: 4,
    engine: "1.0L Turbo 3 cilindros",
  },
];

/* ─── Testimonials ─── */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Carlos M.",
    rating: 5,
    comment:
      "Excelente servicio, encontré mi auto ideal en la primera visita. Todo el proceso fue transparente.",
    vehiclePurchased: "Toyota Corolla 2020",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "testimonial-2",
    name: "María G.",
    rating: 5,
    comment:
      "Los recomiendo ampliamente. Me ayudaron con el financiamiento y los trámites fueron rapidísimos.",
    vehiclePurchased: "Nissan Versa 2022",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "testimonial-3",
    name: "Roberto S.",
    rating: 4,
    comment:
      "Muy profesionales. El auto estaba en perfectas condiciones tal como lo describieron.",
    vehiclePurchased: "Volkswagen Jetta 2021",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "testimonial-4",
    name: "Ana L.",
    rating: 5,
    comment:
      "Segunda vez que compro aquí. La garantía me da mucha confianza.",
    vehiclePurchased: "Mazda 3 2023",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "testimonial-5",
    name: "Diego R.",
    rating: 5,
    comment:
      "Buscaba una SUV para la familia y encontré justo lo que necesitaba. El asesor fue muy paciente y honesto.",
    vehiclePurchased: "Honda CR-V 2021",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

/* ─── Benefits / Why Us ─── */
export const BENEFITS: Benefit[] = [
  {
    id: "inspection",
    title: "Inspección de 150 puntos",
    description:
      "Cada auto pasa una revisión mecánica exhaustiva antes de llegar a nuestro lote.",
    icon: "search",
  },
  {
    id: "warranty",
    title: "Garantía de 6 meses",
    description:
      "Cobertura en motor y transmisión para que manejes con total tranquilidad.",
    icon: "shield",
  },
  {
    id: "financing",
    title: "Financiamiento flexible",
    description:
      "Planes desde 12 hasta 48 meses con las mejores tasas del mercado.",
    icon: "banknotes",
  },
  {
    id: "paperwork",
    title: "Trámites incluidos",
    description:
      "Nos encargamos del cambio de propietario y toda la documentación.",
    icon: "clipboard",
  },
];

/* ─── Purchase Process Steps ─── */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Elige tu auto",
    description: "Explora nuestro inventario en línea y encuentra tu favorito.",
    icon: "car",
  },
  {
    id: 2,
    title: "Agenda tu cita",
    description: "Visítanos para ver el auto en persona sin compromiso.",
    icon: "calendar",
  },
  {
    id: 3,
    title: "Prueba de manejo",
    description: "Condúcelo y enamórate. Sin presiones, a tu ritmo.",
    icon: "key",
  },
  {
    id: 4,
    title: "¡Es tuyo!",
    description: "Tramitamos todo, tú solo disfruta tu nuevo auto.",
    icon: "check",
  },
];

/* ─── Stats for Hero ─── */
export const HERO_STATS = [
  { value: 200, suffix: "+", label: "Autos disponibles" },
  { value: 500, suffix: "+", label: "Clientes satisfechos" },
  { value: 5, suffix: " años", label: "De experiencia" },
] as const;
