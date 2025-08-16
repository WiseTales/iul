import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Users, FileCheck, Megaphone, Shield, TrendingUp, FileText, Download } from "lucide-react";

const SocialAuditInfo = () => {
  const benefits = [
    {
      title: "Ensures Safety",
      description: "Monitoring child safety measures and infrastructure",
      icon: Shield,
      color: "text-red-600"
    },
    {
      title: "Child Rights Protection",
      description: "Safeguarding fundamental rights of every child",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "RTE Act Compliance",
      description: "Ensuring adherence to Right to Education guidelines",
      icon: FileCheck,
      color: "text-green-600"
    },
    {
      title: "Improves Equity",
      description: "Promoting equal opportunities for all students",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const downloadItem = {
    title: "Guidelines for Social Audit of Samagra Shiksha",
    type: "PDF Document",
    size: "Official Guidelines",
    category: "Guidelines",
    icon: FileText,
    description: "Comprehensive guidelines for conducting social audits in educational institutions",
    downloadUrl: "https://drive.google.com/file/d/1GlrHrMf5mx2a-v7ot1DV4vQrZ-QYLQMb/view?usp=sharing"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* What is Social Audit */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What is a Social Audit?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A Social Audit is a community-led evaluation process that ensures transparency, 
              accountability, and participatory monitoring of educational program implementation.
            </p>
            
            {/* Download Box */}
            <div className="mb-12">
              <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <FileText className="h-10 w-10 text-orange-600 mt-1" />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          {downloadItem.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{downloadItem.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="bg-orange-100 px-2 py-1 rounded text-orange-700">
                            {downloadItem.category}
                          </span>
                          <span>{downloadItem.type}</span>
                          <span>{downloadItem.size}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={downloadItem.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">Open access to information about program implementation and resource utilization</p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">Engaging communities, parents, and stakeholders in monitoring processes</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader className="text-center">
                  <Megaphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-purple-800">Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700">Holding institutions accountable for quality education delivery</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Social Audit */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Social Audit?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <IconComponent className={`h-12 w-12 ${benefit.color} mx-auto mb-4`} />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
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

export default SocialAuditInfo;
