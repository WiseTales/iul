import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Download, Filter, MapPin, TrendingUp, AlertCircle, Users, GraduationCap, FileCheck, Megaphone } from "lucide-react";

const Dashboard = () => {
  const districtData = [
    { name: "Ambedkar Nagar", audits: 212, completed: 88, issues: 14, resolved: 12 },
    { name: "Amethi", audits: 198, completed: 84, issues: 16, resolved: 13 },
    { name: "Ayodhya", audits: 230, completed: 92, issues: 10, resolved: 9 },
    { name: "Bahraich", audits: 175, completed: 79, issues: 20, resolved: 17 },
    { name: "Balrampur", audits: 160, completed: 81, issues: 18, resolved: 15 },
    { name: "Barabanki", audits: 205, completed: 90, issues: 11, resolved: 10 },
    { name: "Bareilly", audits: 240, completed: 94, issues: 9, resolved: 8 },
    { name: "Gonda", audits: 183, completed: 85, issues: 15, resolved: 13 },
    { name: "Lakhimpur Kheri", audits: 170, completed: 80, issues: 17, resolved: 14 },
    { name: "Raebareli", audits: 190, completed: 89, issues: 12, resolved: 11 },
    { name: "Shahjahanpur", audits: 215, completed: 91, issues: 10, resolved: 9 },
    { name: "Shravasti", audits: 155, completed: 76, issues: 21, resolved: 18 },
    { name: "Sitapur", audits: 225, completed: 93, issues: 8, resolved: 8 },
    { name: "Sultanpur", audits: 180, completed: 82, issues: 19, resolved: 16 }
  ];

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
                  <p className="text-blue-100">MOE Social Audits Completed</p>
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
                  <p className="text-green-100">Public Hearings Completed</p>
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
                  <p className="text-orange-100">XPTs/CSAs/SAFTs Trained</p>
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
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-900">CSA (Cluster Social Auditors)</p>
                    <p className="text-sm text-green-700">1 per 10 schools</p>
                    <p className="text-xs text-green-600">*Note: Reconcile with block-level logic if needed</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">644</div>
                    <div className="text-xs text-green-500">CSAs</div>
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
              <Button 
                className="w-full mt-4" 
                onClick={() => handleDownloadExcel('resource-persons.xlsx')}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resource Persons Data (Excel)
              </Button>
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
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">CSA Training</p>
                  <p className="text-sm text-blue-700 mb-2">*Note: Clarify source - 6436 vs 610 discrepancy</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600">CSAs Trained: 610 / 644 (approximate)</span>
                    <Badge variant="outline" className="text-blue-600">94.7%</Badge>
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
              <Button 
                className="w-full mt-4" 
                onClick={() => handleDownloadExcel('training-status.xlsx')}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Training Status (Excel)
              </Button>
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
                  <span className="text-lg font-bold text-green-600">{'{overall_pct}'}%</span>
                </div>
              </div>
              <div className="space-y-2">
                {districtData.map((district, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">{district.name}</span>
                    <span className="text-sm text-gray-600">{district.completed}%</span>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full mt-4" 
                onClick={() => handleDownloadExcel('social-audit-progress.xlsx')}
              >
                <Download className="h-4 w-4 mr-2" />
                Download District-wise Progress (Excel)
              </Button>
            </CardContent>
          </Card>

          {/* Public Hearings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-red-600" />
                Public Hearings Conducted at CSA Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-medium text-red-900">Block Level</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-red-700">Total Blocks: 192</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">{'{block_level_hearings}'}</div>
                      <div className="text-xs text-red-500">Hearings Conducted</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium text-orange-900">CSA Level</p>
                  <p className="text-sm text-orange-700 mb-2">*CSA count reconciliation needed: 644 vs 384</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-orange-700">CSA-wise Public Hearings</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-600">{'{variable}'}</div>
                      <div className="text-xs text-orange-500">Average per CSA</div>
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                className="w-full mt-4" 
                onClick={() => handleDownloadExcel('public-hearings.xlsx')}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Public Hearings Data (Excel)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
