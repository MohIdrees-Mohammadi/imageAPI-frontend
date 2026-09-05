import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Star,
  Search,
  Lock,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: "verified",
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every property undergoes thorough quality checks and expert verification.",
    badge: "100% Verified",
  },
  {
    id: "sellers",
    icon: Star,
    title: "Trusted Sellers",
    description:
      "Work with trusted builders and agents who meet our standards.",
    badge: "500+ Sellers",
  },
  {
    id: "search",
    icon: Search,
    title: "Smart Search",
    description: "Find the right property with our advanced filtering system.",
    badge: "Advanced",
    linkText: "Advanced",
  },
  {
    id: "secure",
    icon: Lock,
    title: "Secure Transactions",
    description:
      "Encrypted communications and verified payment processes.",
    badge: "SSL Secure",
  },
  {
    id: "support",
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our support team is always ready to answer your questions.",
    badge: "Always Online",
  },
  {
    id: "experts",
    icon: Users,
    title: "Expert Consultants",
    description:
      "A team of experienced consultants with years of market expertise.",
    badge: "50+ Experts",
  },
];

export default function WhyAshyaana() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm text-indigo-600 tracking-wide">
          Why Ashyaana
        </span>
        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-2 mb-4">
          Trusted Marketplace for{" "}
          <span className="text-indigo-600">Luxury Real Estate</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          We combine advanced technology with human expertise to make every
          transaction smooth, secure, and successful.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card
              key={feature.id}
              className="group relative border-transparent shadow-none bg-transparent hover:bg-slate-200/70 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer rounded-xl p-2"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                <div>
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100/50 text-indigo-600 flex items-center justify-center mb-4 transition-colors group-hover:bg-indigo-100">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-serif font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Link / Badge */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600">
                  <span>{feature.badge}</span>
                  {feature.linkText && (
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}