import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Upload, FileText, MapPin, Building } from "lucide-react";

const PostSAReports = () => {
  // District data from the provided screenshot (block count and total schools)
  const districts = [
    { name: "Ambedkar Nagar", blocks: 10, totalSchools: 1590 },
    { name: "Amethi", blocks: 13, totalSchools: 1587 },
    { name: "Bahraich", blocks: 15, totalSchools: 2818 },
    { name: "Balrampur", blocks: 10, totalSchools: 1826 },
    { name: "Barabanki", blocks: 16, totalSchools: 2651 },
    { name: "Bareilly", blocks: 16, totalSchools: 2501 },
    { name: "Ayodhya", blocks: 12, totalSchools: 1800 },
    { name: "Gonda", blocks: 17, totalSchools: 2629 },
    { name: "Lakhimpur Kheri", blocks: 16, totalSchools: 3122 },
    { name: "Raebareli", blocks: 18, totalSchools: 2320 },
    { name: "Shahjahanpur", blocks: 16, totalSchools: 2734 },
    { name: "Shravasti", blocks: 5, totalSchools: 989 },
    { name: "Sitapur", blocks: 20, totalSchools: 3531 },
    { name: "Sultanpur", blocks: 14, totalSchools: 2080 }
  ];

  const reportCategories = [
    {
      title: "District-wise Reports",
      icon: MapPin,
      color: "bg-green-500",
      reports: districts.map((d) => ({
        name: `${d.name} District`,
       
        schools: d.totalSchools
      }))
    }
  ];

  const compiledReports = [
    {
      title: "Compiled Report of 14 Districts",
      period: "2025",
      districts: 14,
      type: "Comprehensive"
    }
  ];

  const handleDownloadExcel = (filename: string) => {
  const link = document.createElement('a');
  link.href = "https://drive.google.com/file/d/1Tw_JY4Kb0a-F7HsKbqZsstGhxBvhCh2g/view?usp=sharing";
  link.target = "_blank"; // opens in new tab
  link.rel = "noopener noreferrer"; 
  link.click();
};

  return (
    <section id="reports" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Post Social Audit Reports</h2>
          
        </div>

        {/* Report Categories */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
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
                  <div className="space-y-3 max-h-[500px] overflow-y-auto">
                    {category.reports.map((report, reportIndex) => (
                      <div key={reportIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{report.name}</p>
                          <p className="text-sm text-gray-600">{report.date}</p>
                          <p className="text-xs text-gray-500">
                            {report.schools} schools
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Compiled Reports (14 Districts)</h3>
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


      </div>
    </section>
  );
};

export default PostSAReports;
