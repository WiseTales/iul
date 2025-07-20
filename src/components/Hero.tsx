import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative text-black overflow-hidden pt-24 pb-12 bg-gradient-to-b from-blue-50 via-white to-yellow-50"
    >
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.65,22.44,103.3,35.26,162,35.26,86,0,172-34.85,258-34.85S516,80,600,80s172-34.85,258-34.85S1030,80,1116,80c58.7,0,114.35-12.82,162-35.26V0Z"
            fill="#e0f2fe"
          />
        </svg>
      </div>

      {/* Image Container */}
      <div className="flex justify-center items-center px-4 z-10 relative">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 max-w-5xl w-full">
          <img
            src="/bg.jpg"
            alt="Samagra Shiksha Background"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Buttons and Stats */}
      <div className="mt-10 flex flex-col items-center px-4 z-10 relative">
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 shadow-md transition"
            onClick={() => scrollToSection("dashboard")}
          >
            Start Social Audit
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-700 text-blue-800 hover:bg-blue-100 hover:text-blue-900 px-6 py-2 transition"
            onClick={() => scrollToSection("training")}
          >
            <Play className="h-5 w-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 max-w-3xl mx-auto text-center">
          {[
            { label: "Districts", value: "14" },
            { label: "Students", value: "779" },
            { label: "Schools", value: "6K+" },
            { label: "Audits", value: "2.5K+" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-yellow-600">{stat.value}</div>
              <div className="text-sm text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* NEP 2020 Badge */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            NEP 2020 Aligned
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="animate-bounce mt-2 cursor-pointer" onClick={() => scrollToSection("about")}>
          <ArrowDown className="h-5 w-5 mx-auto text-blue-700" />
        </div>
      </div>

      {/* Decorative Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.65,22.44,103.3,35.26,162,35.26,86,0,172-34.85,258-34.85S516,80,600,80s172-34.85,258-34.85S1030,80,1116,80c58.7,0,114.35-12.82,162-35.26V0Z"
            fill="#fefce8"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
