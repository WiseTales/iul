import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Video, BookOpen, HelpCircle, ExternalLink } from "lucide-react";

const ResourceCenter = () => {
  const resources = [
    {
      title: "Training Plan",
      type: "PDF Document",
      size: "Official Plan",
      category: "Training",
      icon: BookOpen,
      description: "Comprehensive training plan for audit team members and stakeholders",
      downloadUrl: "#"
    },
    {
      title: "Social Audit Plan",
      type: "PDF Document",
      size: "Official Plan",
      category: "Audit",
      icon: FileText,
      description: "Detailed social audit implementation plan and methodology",
      downloadUrl: "#"
    },
    {
      title: "Public Hearing Plan",
      type: "PDF Document",
      size: "Official Plan",
      category: "Hearing",
      icon: FileText,
      description: "Guidelines and procedures for conducting public hearings",
      downloadUrl: "#"
    }
  ];

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Resource Center</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive resources, guidelines, templates, and training materials 
            for effective social audit implementation.
          </p>
        </div>

        {/* Available Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Available Resources</h3>
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
      </div>
    </section>
  );
};

export default ResourceCenter;
