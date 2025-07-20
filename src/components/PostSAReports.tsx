import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, MapPin, Building, School } from "lucide-react";

const PostSAReports = () => {
  const reportCategories = [
    {
      title: "Block-wise SA Reports",
      icon: Building,
      color: "bg-blue-500",
      reports: [
        { name: "Lucknow Block 1", date: "2024-07-06", schools: 45 },
        { name: "Kanpur Block 2", date: "2024-07-05", schools: 38 },
        { name: "Agra Block 3", date: "2024-07-04", schools: 52 }
      ]
    },
    {
      title: "District-wise Reports",
      icon: MapPin,
      color: "bg-green-500",
      reports: [
        { name: "Lucknow District", date: "2024-07-06", schools: 245 },
        { name: "Kanpur District", date: "2024-07-05", schools: 198 },
        { name: "Agra District", date: "2024-07-04", schools: 156 }
      ]
    },
    {
      title: "School-wise Reports",
      icon: School,
      color: "bg-purple-500",
      reports: [
        { name: "GPS Aliganj", date: "2024-07-06", audits: 3 },
        { name: "UPS Gomti Nagar", date: "2024-07-05", audits: 2 },
        { name: "GPS Hazratganj", date: "2024-07-04", audits: 4 }
      ]
    }
  ];

  const compiledReports = [
    { title: "Compiled Report - All Districts", period: "2024", districts: 14, type: "Comprehensive" },
    { title: "Quarterly Compilation Q1", period: "Apr-Jun 2024", districts: 14, type: "Quarterly" },
    { title: "Annual Compilation 2023-24", period: "Full Year", districts: 14, type: "Annual" }
  ];

  return (
    <section id="reports" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Post SA Reports</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive social audit reports organized by administrative levels 
            with options for downloading school-wise, block-wise, and district-wise reports.
          </p>
        </div>

        {/* Report Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {reportCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.reports.map((report, reportIndex) => (
                      <div key={reportIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{report.name}</p>
                          <p className="text-sm text-gray-600">{report.date}</p>
                          <p className="text-xs text-gray-500">
                            {report.schools ? `${report.schools} schools` : `${report.audits} audits`}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    View All {category.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compiled Reports */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Compiled Reports</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {compiledReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    {report.title}
                  </CardTitle>
                  <div className="text-sm text-gray-600">{report.period}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Districts:</span>
                      <span className="font-medium">{report.districts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <Badge variant="outline">{report.type}</Badge>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Options */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Download Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Button className="h-16 flex-col gap-2 bg-blue-600 hover:bg-blue-700">
              <School className="h-6 w-6" />
              School-wise Reports
            </Button>
            <Button className="h-16 flex-col gap-2 bg-green-600 hover:bg-green-700">
              <Building className="h-6 w-6" />
              Block-wise Reports
            </Button>
            <Button className="h-16 flex-col gap-2 bg-purple-600 hover:bg-purple-700">
              <MapPin className="h-6 w-6" />
              District-wise Reports
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSAReports;