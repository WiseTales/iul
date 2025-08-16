import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Download, Filter, MapPin, TrendingUp, AlertCircle, Users, GraduationCap, FileCheck, Megaphone } from "lucide-react";

const Dashboard = () => {
 const districtData = [
  { name: "Ambedkar Nagar", audits: 0, completed: 450, issues: 0, resolved: 0, alloted: 450 },
  { name: "Amethi", audits: 0, completed: 380, issues: 0, resolved: 0, alloted: 380 },
  { name: "Ayodhya", audits: 0, completed: 520, issues: 0, resolved: 0, alloted: 520 },
  { name: "Bahraich", audits: 0, completed: 620, issues: 0, resolved: 0, alloted: 620 },
  { name: "Balrampur", audits: 0, completed: 340, issues: 0, resolved: 0, alloted: 340 },
  { name: "Barabanki", audits: 0, completed: 480, issues: 0, resolved: 0, alloted: 480 },
  { name: "Bareilly", audits: 0, completed: 750, issues: 0, resolved: 0, alloted: 750 },
  { name: "Gonda", audits: 0, completed: 590, issues: 0, resolved: 0, alloted: 590 },
  { name: "Lakhimpur Kheri", audits: 0, completed: 680, issues: 0, resolved: 0, alloted: 680 },
  { name: "Raebareli", audits: 0, completed: 420, issues: 0, resolved: 0, alloted: 420 },
  { name: "Shahjahanpur", audits: 0, completed: 560, issues: 0, resolved: 0, alloted: 560 },
  { name: "Shravasti", audits: 0, completed: 290, issues: 0, resolved: 0, alloted: 290 },
  { name: "Sitapur", audits: 0, completed: 640, issues: 0, resolved: 0, alloted: 640 },
  { name: "Sultanpur", audits: 0, completed: 406, issues: 0, resolved: 0, alloted: 406 }
];


  // Calculate percentage for each district
  const districtDataWithPercentage = districtData.map(district => ({
    ...district,
    percentage: district.alloted > 0 ? Math.round((district.completed / district.alloted) * 100) : 0
  }));

  const handleDownloadExcel = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/api/download/${filename}`;
    link.download = filename;
    link.click();
  };
  return (
    <section id="dashboard" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Live Dashboard</h2>
          <p className="text-xl text-gray-600 mb-8">Real-time monitoring and analytics for social audit activities</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter by District
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Block View
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Social Audits Completed</p>
                  <p className="text-3xl font-bold">0</p>
                  <p className="text-sm text-blue-200">0% completion rate</p>
                </div>
                <BarChart3 className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Public Hearing (In Progress)/p>
                  <p className="text-3xl font-bold">0</p>
                  <p className="text-sm text-green-200">0% of audits</p>
                </div>
                <TrendingUp className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">MTs/CSAs/SAFTs Trained</p>
                  <p className="text-3xl font-bold">0</p>
                  <p className="text-sm text-orange-200">Across all districts</p>
                </div>
                <AlertCircle className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Districts Covered</p>
                  <p className="text-3xl font-bold">14</p>
                  <p className="text-sm text-purple-200">Complete coverage</p>
                </div>
                <MapPin className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Four New Main Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Identification of Resource Persons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Identification of Resource Persons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-900">Master Trainers</p>
                    <p className="text-sm text-blue-700">2 per district</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">28</div>
                    <div className="text-xs text-blue-500">Identified</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium text-purple-900">SAFT Members</p>
                    <p className="text-sm text-purple-700">6 per school</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">38,616</div>
                    <div className="text-xs text-purple-500">Members</div>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>

          {/* Training / Capacity Building */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-green-600" />
                Training / Capacity Building
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">Master Trainers Trained</p>
                  <p className="text-sm text-green-700 mb-2">Training on the module of NCERT</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600">150 / 150</span>
                    <Badge className="bg-green-600 text-white">100% trained</Badge>
                  </div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-900">SAFT Training</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600">SAFT Members Trained</span>
                    <Badge variant="outline" className="text-purple-600">{'{saft_trained_pct}'}%</Badge>
                  </div>
                </div>
              </div>
             
            </CardContent>
          </Card>

          {/* Social Audit Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-orange-600" />
                Social Audit Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Total Allocated Schools</span>
                  <span className="text-lg font-bold text-orange-600">6,436</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Overall Completion</span>
                  <span className="text-lg font-bold text-green-600">100%</span>
                </div>
              </div>
              
              {/* Table with 4 columns */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-2 font-medium">District</th>
                      <th className="text-center p-2 font-medium">Alloted</th>
                      <th className="text-center p-2 font-medium">Completed</th>
                      <th className="text-center p-2 font-medium">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districtDataWithPercentage.map((district, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{district.name}</td>
                        <td className="text-center p-2">{district.alloted}</td>
                        <td className="text-center p-2">{district.completed}</td>
                        <td className="text-center p-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            district.percentage === 0 
                              ? 'bg-red-100 text-red-800' 
                              : district.percentage < 50 
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                          }`}>
                            {district.percentage}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              
            </CardContent>
          </Card>

          {/* Public Hearings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-red-600" />
                Public Hearings (In Progress)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-medium text-red-900">Block Level</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-red-700">Total Blocks: 192</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">0%</div>
                      <div className="text-xs text-red-500">Hearings Conducted</div>
                    </div>
                  </div> 
                </div>
            
                </div>
              </div>
            
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
