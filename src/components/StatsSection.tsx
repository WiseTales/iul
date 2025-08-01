import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, School, FileText, CheckCircle } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      title: "Audits Completed",
      value: "2,847",
      change: "+12%",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Schools Covered",
      value: "6,436",
      change: "+8%",
      icon: School,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Districts Allotted",
      value: "14",
      change: "Complete",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Total Blocks",
      value: "192",
      change: "All covered",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Progress Tracking</h2>
          
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-full ${stat.bgColor}`}>
                    <IconComponent className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className={`text-xs ${stat.color} flex items-center gap-1 mt-1`}>
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Schools Covered Section */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5 text-blue-600" />
                Schools Covered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6,436</div>
                  <div className="text-sm text-gray-600">Total Schools Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">14</div>
                  <div className="text-sm text-gray-600">Allotted Districts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">192</div>
                  <div className="text-sm text-gray-600">Total Blocks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">1,287</div>
                  <div className="text-sm text-gray-600">Total Schools Allotted (20%)</div>
                </div>
              </div>
              <div className="text-center">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  onClick={() => {
                    // Create and download Excel file
                    const link = document.createElement('a');
                    link.href = '/api/download/schools-covered.xlsx';
                    link.download = 'schools-covered-data.xlsx';
                    link.click();
                  }}
                >
                  Download Schools Covered Data (Excel)
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* District Performance */}
        <div className="grid lg:grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Top Performing Districts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {districtProgress.map((district, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{district.name}</span>
                    <span className="text-sm text-gray-600">{district.audits} audits</span>
                  </div>
                  <Progress value={district.progress} className="h-2" />
                  <div className="text-right text-sm text-gray-500">
                    {district.progress}% complete
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
