import type { Office } from "@/lib/types";

export const offices: Office[] = [
  {
    name: "Head Office — Lephalale",
    type: "head",
    slug: "lephalale",
    address: "06 Geelhaak Street, Onverwacht",
    city: "Lephalale",
    province: "Limpopo",
    postalCode: "0557",
    blurb:
      "From our Lephalale head office in Onverwacht, Bonram serves the Waterberg energy corridor — including the Medupi and Matimba power stations and the Grootegeluk mine — with construction, facilities management, plant hire, logistics and sanitation.",
  },
  {
    name: "Centurion Branch",
    type: "branch",
    slug: "centurion",
    address: "6716 Spekvreter Street",
    city: "Centurion",
    province: "Gauteng",
    postalCode: "0157",
    blurb:
      "Our Centurion branch puts Bonram within reach of Gauteng's government departments and corporate head offices, delivering facilities management, logistics, events management and safety solutions across Pretoria and greater Tshwane.",
  },
  {
    name: "Secunda Branch",
    type: "branch",
    slug: "secunda",
    address: "9785 Lekavelane Street, Embalenhle",
    city: "Secunda",
    province: "Mpumalanga",
    postalCode: "2285",
    blurb:
      "Operating from Secunda in Mpumalanga, Bonram supports the Sasol petrochemical complex and surrounding mines with dangerous-goods transport, industrial cleaning, plant hire and safety equipment.",
  },
  {
    name: "East London Branch",
    type: "branch",
    slug: "east-london",
    address: "23 Westbourne Road, Amalinda",
    city: "East London",
    province: "Eastern Cape",
    postalCode: "5247",
    blurb:
      "Our East London branch serves the Eastern Cape's industrial, port and government sectors with construction, logistics, facilities management and equipment hire.",
  },
  {
    name: "Durban Branch",
    type: "branch",
    slug: "durban",
    address: "06 Alkenaar Road, Glenmore",
    city: "Durban",
    province: "KwaZulu-Natal",
    postalCode: "2336",
    blurb:
      "From Durban, Bonram leverages South Africa's busiest port for import/export clearing, cross-border logistics, dangerous-goods transport and facilities management across KwaZulu-Natal.",
  },
];

export function getOfficeBySlug(slug: string): Office | undefined {
  return offices.find((o) => o.slug === slug);
}
