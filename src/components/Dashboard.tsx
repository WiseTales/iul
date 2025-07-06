
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Download, Filter, MapPin, TrendingUp, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const districtData = [
    { name: "Lucknow", audits: 245, completed: 95, issues: 12, resolved: 10 },
    { name: "Kanpur", audits: 198, completed: 87, issues: 18, resolved: 15 },
    { name: "Agra", audits: 156, completed: 78, issues: 22, resolved: 18 },
    { name: "Varanasi", audits: 134, completed: 92, issues: 8, resolved: 8 },
    { name: "Allahabad", audits: 123, completed: 83, issues: 15, resolved: 12 }
  ];

  const topPerformers = [
    { name: "Lucknow", score: 95 },
    { name: "Varanasi", score: 92 },
    { name: "Kanpur", score: 87 },
    { name: "Allahabad", score: 83 },
    { name: "Agra", score: 78 }
  ];

  const recentIssues = [
    { school: "GPS Aliganj", issue: "Infrastructure maintenance needed", priority: "High", status: "In Progress" },
    { school: "UPS Gomti Nagar", issue: "Teacher attendance low", priority: "Medium", status: "Resolved" },
    { school: "GPS Hazratganj", issue: "Mid-day meal quality", priority: "High", status: "New" },
    { school: "UPS Indira Nagar", issue: "Library books shortage", priority: "Low", status: "Resolved" }
  ];

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
                  <p className="text-blue-100">Total Audits</p>
                  <p className="text-3xl font-bold">2,847</p>
                </div>
                <BarChart3 className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Completed</p>
                  <p className="text-3xl font-bold">2,456</p>
                </div>
                <TrendingUp className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Issues Raised</p>
                  <p className="text-3xl font-bold">456</p>
                </div>
                <AlertCircle className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Resolution Rate</p>
                  <p className="text-3xl font-bold">87%</p>
                </div>
                <BarChart3 className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* District Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                District-wise Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {districtData.map((district, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{district.name}</span>
                      <span className="text-sm text-gray-600">{district.audits} audits</span>
                    </div>
                    <Progress value={district.completed} className="h-2" />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{district.completed}% complete</span>
                      <span>{district.resolved}/{district.issues} issues resolved</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Top Performing Districts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <span className="font-medium">{performer.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{performer.score}%</div>
                      <div className="text-xs text-gray-500">Completion Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Issues */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Recent Issues & Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentIssues.map((issue, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{issue.school}</div>
                    <div className="text-gray-600">{issue.issue}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant={issue.priority === 'High' ? 'destructive' : issue.priority === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {issue.priority}
                    </Badge>
                    <Badge 
                      variant={issue.status === 'Resolved' ? 'secondary' : issue.status === 'In Progress' ? 'default' : 'outline'}
                      className="text-xs"
                    >
                      {issue.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
