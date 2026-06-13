import type { Accreditation } from "@/lib/types";

export const accreditations: Accreditation[] = [
  {
    slug: "nhbrc",
    name: "NHBRC",
    regNo: "4000004592",
    description:
      "National Home Builders Registration Council. Accreditation confirms compliance with housing construction standards and protects clients in residential and commercial building projects.",
    relevantServices: ["building-construction"],
  },
  {
    slug: "cidb",
    name: "CIDB",
    regNo: "CSR 10014817 | GBPE1 · MEPE1 · CE1",
    description:
      "Construction Industry Development Board. Required for all government construction tenders. Our grades cover general building, mechanical engineering, and civil engineering works.",
    relevantServices: ["building-construction", "plant-tool-hire"],
  },
  {
    slug: "psira",
    name: "PSIRA",
    regNo: "4845472",
    description:
      "Private Security Industry Regulatory Authority. Compliance ensures our safety solutions and security-related services meet South African regulatory requirements.",
    relevantServices: ["safety-solutions"],
  },
  {
    slug: "qcto",
    name: "QCTO",
    regNo: "Verification Client",
    description:
      "Quality Council for Trades and Occupations. Confirms our commitment to skills development, training standards, and workforce qualifications across all service divisions.",
    relevantServices: ["building-construction", "facilities-management", "safety-solutions"],
  },
  {
    slug: "beeca",
    name: "BEECA Cleaning Association",
    regNo: undefined,
    description:
      "Built Environment and Emerging Contractors Association — Cleaning sector. Membership certifies compliance with professional cleaning industry standards and best practices.",
    relevantServices: ["facilities-management"],
  },
  {
    slug: "saiosh",
    name: "SAIOSH",
    regNo: undefined,
    description:
      "South African Institute of Occupational Safety and Health. Affirms our commitment to workplace health and safety management across construction, facilities, and plant hire operations.",
    relevantServices: ["building-construction", "facilities-management", "safety-solutions"],
  },
  {
    slug: "sars-customs",
    name: "SARS Imports & Exports",
    regNo: undefined,
    description:
      "South African Revenue Service Customs registration. Authorises Bonram to conduct international trade, cross-border logistics, and dangerous goods transportation legally.",
    relevantServices: ["logistics-transport"],
  },
  {
    slug: "averda",
    name: "AVERDA",
    regNo: undefined,
    description:
      "Leading waste management standards body. Our alignment with AVERDA protocols ensures responsible waste collection, transportation, and disposal to registered, compliant sites.",
    relevantServices: ["facilities-management", "sanitation-waste"],
  },
  {
    slug: "ledet",
    name: "LEDET",
    regNo: undefined,
    description:
      "Limpopo Department of Economic Development, Environment and Tourism. Compliance confirms our environmental management practices meet provincial regulatory requirements for waste and sanitation.",
    relevantServices: ["sanitation-waste"],
  },
  {
    slug: "amps-africa",
    name: "AMPS-Africa",
    regNo: undefined,
    description:
      "Association of Mobile and Portable Sanitation. Accreditation validates our mobile and portable sanitation solutions, ensuring compliance with industry standards for hygiene and sanitation services.",
    relevantServices: ["sanitation-waste"],
  },
  {
    slug: "vasa",
    name: "VASA",
    regNo: undefined,
    description:
      "Vending Association of South Africa. Membership supports our facilities management division in providing compliant vending, water dispenser, and hygiene solutions to clients.",
    relevantServices: ["facilities-management"],
  },
];
