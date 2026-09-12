import { House } from 'lucide-react';


export const items = [
  { label: "All Properties", value: "All Properties", icon: <House /> },
  { label: "Apartment", value: "Apartment",  icon: <House /> },
  { label: "Land", value: "Land", icon: <House /> },
  { label: "Office", value: "Office", icon: <House /> },
]


export const houses = [
  {
    id: 1,
    title: "Modern House in Kabul",
    propertyType: "House",
    status: "Buy",
    currency: "USD",
    price: 150000,
    bedrooms: 3,
    location: "Kabul",
    createdAt: "2026-09-10",
  },
  {
    id: 2,
    title: "Luxury Apartment in Kabul",
    propertyType: "Apartment",
    status: "Rent",
    currency: "USD",
    price: 1200,
    bedrooms: 2,
    location: "Kabul",
    createdAt: "2026-09-09",
  },
  {
    id: 3,
    title: "Family House",
    propertyType: "House",
    status: "Buy",
    currency: "AFN",
    price: 8500000,
    bedrooms: 4,
    location: "Herat",
    createdAt: "2026-09-08",
  },
  {
    id: 4,
    title: "Commercial Shop",
    propertyType: "Commercial",
    status: "Rent",
    currency: "AFN",
    price: 50000,
    bedrooms: 0,
    location: "Kabul",
    createdAt: "2026-09-07",
  },
  {
    id: 5,
    title: "Large Villa",
    propertyType: "House",
    status: "Mortgage",
    currency: "USD",
    price: 280000,
    bedrooms: 5,
    location: "Kabul",
    createdAt: "2026-09-06",
  },
  {
    id: 6,
    title: "Small Apartment",
    propertyType: "Apartment",
    status: "Buy",
    currency: "USD",
    price: 75000,
    bedrooms: 1,
    location: "Mazar",
    createdAt: "2026-09-05",
  },
];