export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  icon: string;
  accreditations: string[];
  featuredClients: string[];
  image: string;
  imageExt: string;
}

export interface Client {
  name: string;
  slug: string;
  logoPath?: string;
  domain?: string;
  sectors: ("government" | "energy" | "mining" | "corporate" | "ngo")[];
  projects?: string[];
}

export interface Accreditation {
  slug: string;
  name: string;
  regNo?: string;
  description: string;
  relevantServices: string[];
}

export interface Office {
  name: string;
  type: "head" | "branch";
  address: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  background: string[];
}
