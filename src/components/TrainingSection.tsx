import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const TrainingSection = () => {
  const trainingModules = [
    {
      title: "Social Audit & Team of Social Audit data",
      description: "Schools, Audit Steps, and Manpower for Each District",
      developed: "Prepared by Social Audit Team",
      openUrl: "https://docs.google.com/spreadsheets/d/1JDRTuq2v2xnv4DqdT34x3RX2gO5mY3IF/edit?usp=sharing&ouid=117567334419080675185&rtpof=true&sd=true",
      downloadUrl: "https://docs.google.com/spreadsheets/d/1JDRTuq2v2xnv4DqdT34x3RX2gO5mY3IF/export?format=pdf"
    },
    {
      title: "Official Circular – Social Audit of Schools (July 2025)",
      description: "Directive for conducting Social Audit in 14 districts, including planning, manpower, and timelines.",
      developed: "Issued by Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
      openUrl: "https://drive.google.com/file/d/10j9s0CPFQFOpv1MW3VvF69K6-6K8f8TH/view?usp=sharing", // add link here
      downloadUrl: "https://drive.google.com/uc?export=download&id=10j9s0CPFQFOpv1MW3VvF69K6-6K8f8TH" // add download link here
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
    { name: "Resource Video 1", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Resource Video 2", videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U" },
  { name: "Resource Video 3", videoUrl: "https://www.youtube.com/embed/abc123xyz" },
  { name: "Resource Video 4", videoUrl: "" } // no link -> will show placeholder
  ];

  return (
    <section id="training" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Capacity Building</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training program to build capacity of MTs / CSAs / SAFTs based on 
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

          {/* Official circulars and letters */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Official circulars and letters</h3>
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
    Other Resource Materials Developed by University
  </h4>
  <div className="grid md:grid-cols-4 gap-4">
    {resourcePackages.map((pkg, index) => (
      <Card key={index} className="text-center">
        <CardContent className="p-4 flex flex-col items-center gap-3">
          <p className="font-medium">{pkg.name}</p>
          {pkg.videoUrl ? (
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={pkg.videoUrl}
                title={pkg.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-40 flex items-center justify-center text-gray-500 text-sm border rounded">
              Video link not available
            </div>
          )}
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
