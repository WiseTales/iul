import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const TrainingSection = () => {
  return (
    <section id="training" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Capacity Building</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training program to build capacity of XPTs / CSAs / SAFTs based on 
            03 training modules, developed by NCERT, New Delhi.
          </p>
        </div>

        {/* Training Modules */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Training Modules</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Module No: 1", description: "Fundamentals of Social Audit", developed: "NCERT, New Delhi" },
              { title: "Module No: 2", description: "Implementation Guidelines", developed: "NCERT, New Delhi" },
              { title: "Module No: 3", description: "Reporting and Documentation", developed: "NCERT, New Delhi" }
            ].map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{module.title}</CardTitle>
                  <p className="text-gray-600 text-center">{module.description}</p>
                  <p className="text-sm text-blue-600 text-center font-medium">Developed by: {module.developed}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Module
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* University Materials */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Other Capacity Building Materials Developed by University
            </h4>
            <div className="grid md:grid-cols-4 gap-4">
              {['Resource Package 1', 'Resource Package 2', 'Resource Package 3', 'Resource Package 4'].map((pkg, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium">{pkg}</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
