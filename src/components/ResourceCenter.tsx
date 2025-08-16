import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Video, BookOpen, HelpCircle, ExternalLink } from "lucide-react";

const ResourceCenter = () => {
  const resources = [
    // ... your existing resources (unchanged)
  ];

  // ✅ Fix: define planSections (empty for now, since not provided)
  const planSections = [];

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Social audit implementation plan</h2>
        </div>

        {/* Available Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">District-wise social audit plan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <div className="text-sm text-gray-600">
                      <span>{resource.type}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.size}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownload(resource.downloadUrl)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(resource.downloadUrl)}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Plan Sections */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Plan Documents</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {planSections.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                      <Badge variant="outline" className="text-xs">
                        {plan.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{plan.title}</CardTitle>
                    <div className="text-sm text-gray-600">
                      <span>{plan.type}</span>
                      <span className="mx-2">•</span>
                      <span>{plan.size}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownload(plan.downloadUrl)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(plan.downloadUrl)}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
