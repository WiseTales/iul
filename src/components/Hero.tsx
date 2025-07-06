import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Image */}
   
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Institution Badges */}
         

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Centre for Social Audit of{' '}
            <span className="text-yellow-300">Samagra Shiksha</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through transparent and participatory monitoring 
            of educational programs across Uttar Pradesh
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">75</div>
              <div className="text-sm text-blue-200">Districts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">1.5M+</div>
              <div className="text-sm text-blue-200">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">15K+</div>
              <div className="text-sm text-blue-200">Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">2.5K+</div>
              <div className="text-sm text-blue-200">Audits</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              onClick={() => scrollToSection('dashboard')}
            >
              Start Social Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
              onClick={() => scrollToSection('training')}
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="mt-16 animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6 mx-auto text-blue-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
