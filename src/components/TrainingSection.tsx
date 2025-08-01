import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";

const TrainingSection = () => {
  const [moduleLinks, setModuleLinks] = useState([
    "https://docs.google.com/spreadsheets/d/1JDRTuq2v2xnv4DqdT34x3RX2gO5mY3IF/edit?usp=sharing&ouid=117567334419080675185&rtpof=true&sd=true", // Module 1 prepopulated
    "", // Module 2
    ""  // Module 3
  ]);

  const [resourceLinks, setResourceLinks] = useState([
    "", // Resource Package 1
    "", // Resource Package 2
    "", // Resource Package 3
    ""  // Resource Package 4
  ]);

  const handleModuleLinkChange = (index: number, value: string) => {
    setModuleLinks((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const handleResourceLinkChange = (index: number, value: string) => {
    setResourceLinks((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const openLink = (url: string) => {
    if (!url) return;
    window.open(url, "_blank");
  };

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
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Paste module link here"
                      className="w-full border rounded px-3 py-2 text-sm"
                      value={moduleLinks[index]}
                      onChange={(e) => handleModuleLinkChange(index, e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button
                        className="flex-1"
                        onClick={() => openLink(moduleLinks[index])}
                        disabled={!moduleLinks[index]}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {moduleLinks[index] ? "Open Module" : "Add link to enable"}
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => openLink(moduleLinks[index])}
                        disabled={!moduleLinks[index]}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {moduleLinks[index] ? "Download / View" : "Disabled"}
                      </Button>
                    </div>
                  </div>
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
                    <input
                      type="text"
                      placeholder="Paste resource link here"
                      className="w-full border rounded px-2 py-1 my-2 text-sm"
                      value={resourceLinks[index]}
                      onChange={(e) => handleResourceLinkChange(index, e.target.value)}
                    />
                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1"
                        onClick={() => openLink(resourceLinks[index])}
                        disabled={!resourceLinks[index]}
                      >
                        <Download className="h-3 w-3" />
                        {resourceLinks[index] ? "Open" : "Add link"}
                      </Button>
                    </div>
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
