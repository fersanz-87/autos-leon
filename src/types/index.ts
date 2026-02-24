export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: "manual" | "automatic";
  fuelType: "gasoline" | "diesel" | "hybrid" | "electric";
  images: string[];
  featured: boolean;
  badge?: "featured" | "good-price" | "new-arrival";
  color: string;
  doors: number;
  engine: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  vehiclePurchased: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  vehicleOfInterest: string;
  message: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface NavLink {
  label: string;
  href: string;
}
