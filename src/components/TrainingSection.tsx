import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const TrainingSection = () => {
  const trainingModules = [
    {
      title: "Module No: 1",
      description: "Fundamentals of Social Audit",
      developed: "NCERT, New Delhi",
      openUrl: "https://docs.google.com/spreadsheets/d/1JDRTuq2v2xnv4DqdT34x3RX2gO5mY3IF/edit?usp=sharing&ouid=117567334419080675185&rtpof=true&sd=true",
      downloadUrl: "https://docs.google.com/spreadsheets/d/1JDRTuq2v2xnv4DqdT34x3RX2gO5mY3IF/export?format=pdf"
    },
    {
      title: "Module No: 2",
      description: "Implementation Guidelines",
      developed: "NCERT, New Delhi",
      openUrl: "", // add link here
      downloadUrl: "" // add download link here
    },
    {
      title: "Module No: 3",
      description: "Reporting and Documentation",
      developed: "NCERT, New Delhi",
      openUrl: "", // add link here
      downloadUrl: "" // add download link here
    }
  ];

  const resourcePackages = [
    { name: "Resource Package 1", openUrl: "", downloadUrl: "" }, // placeholder
    { name: "Resource Package 2", openUrl: "", downloadUrl: "" },
    { name: "Resource Package 3", openUrl: "", downloadUrl: "" },
    { name: "Resource Package 4", openUrl: "", downloadUrl: "" }
  ];

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
            {trainingModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{module.title}</CardTitle>
                  <p className="text-gray-600 text-center">{module.description}</p>
                  <p className="text-sm text-blue-600 text-center font-medium">Developed by: {module.developed}</p>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {module.openUrl && (
                      <a
                        href={module.openUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Open Module
                        </Button>
                      </a>
                    )}
                    {module.downloadUrl && (
                      <a
                        href={module.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                        download
                      >
                        <Button className="w-full flex items-center justify-center" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </a>
                    )}
                    {!module.openUrl && !module.downloadUrl && (
                      <div className="text-center text-sm text-gray-500 w-full">
                        Link placeholder — add URL in code.
                      </div>
                    )}
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
              {resourcePackages.map((pkg, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4 flex flex-col items-center gap-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <p className="font-medium">{pkg.name}</p>
                    <div className="flex w-full gap-2">
                      {pkg.openUrl ? (
                        <a
                          href={pkg.openUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button size="sm" className="w-full flex items-center justify-center">
                            Open
                          </Button>
                        </a>
                      ) : (
                        <div className="flex-1">
                          <Button size="sm" variant="outline" disabled className="w-full">
                            Open
                          </Button>
                        </div>
                      )}
                      {pkg.downloadUrl ? (
                        <a
                          href={pkg.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          download
                        >
                          <Button size="sm" className="w-full flex items-center justify-center">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </a>
                      ) : (
                        <div className="flex-1">
                          <Button size="sm" variant="outline" disabled className="w-full flex items-center justify-center">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      )}
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
