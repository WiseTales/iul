
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Bell, FileText } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SA</span>
              </div>
              <div>
                <h3 className="font-bold">Social Audit Portal</h3>
                <p className="text-sm text-gray-400">Samagra Shiksha, UP</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Centre for Social Audit of Samagra Shiksha, hosted at Integral University, Lucknow
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Samagra Shiksha
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Audit Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('dashboard')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('training')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Training Materials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('resources')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Audit Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Training Modules</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Report Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Policy Documents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">headeng@iul.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">Helpdesk: 8400011153</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-orange-400" />
                <span className="text-gray-400">Support Portal</span>
              </div>
            </div>
            
            <div className="mt-4">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            <p>&copy; 2025 Centre for Social Audit of Samagra Shiksha. All rights reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
