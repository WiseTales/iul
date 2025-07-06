
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Download, Play, FileText } from "lucide-react";

const TrainingSection = () => {
  const trainingModules = [
    {
      title: "Social Audit Fundamentals",
      duration: "4 hours",
      participants: "All Stakeholders",
      topics: ["Concept of Social Audit", "Legal Framework", "Community Participation"],
      status: "Available"
    },
    {
      title: "School Monitoring Techniques",
      duration: "6 hours",
      participants: "Audit Teams",
      topics: ["Evidence Collection", "Interview Techniques", "Documentation"],
      status: "Available"
    },
    {
      title: "Report Writing & Analysis",
      duration: "3 hours",
      participants: "CRCs & BRCs",
      topics: ["Data Analysis", "Report Structure", "Recommendation Writing"],
      status: "Available"
    },
    {
      title: "Public Hearing Facilitation",
      duration: "5 hours",
      participants: "Community Leaders",
      topics: ["Meeting Facilitation", "Grievance Handling", "Action Planning"],
      status: "Available"
    }
  ];

  const resources = [
    {
      title: "Social Audit Handbook",
      type: "PDF Guide",
      size: "2.3 MB",
      icon: FileText
    },
    {
      title: "Training Video Series",
      type: "Video Collection",
      size: "45 minutes",
      icon: Play
    },
    {
      title: "Audit Checklist Templates",
      type: "Excel Templates",
      size: "125 KB",
      icon: Download
    }
  ];

  return (
    <section id="training" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Training & Capacity Building</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs to build capacity of social auditors, 
            community members, and education officials across all levels.
          </p>
        </div>

        {/* Training Modules */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Training Modules</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {module.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {module.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {module.participants}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Start Training
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Statistics */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-blue-800">Training Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">2,847</div>
                  <div className="text-sm text-blue-700">People Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">156</div>
                  <div className="text-sm text-blue-700">Training Sessions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">75</div>
                  <div className="text-sm text-blue-700">Districts Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-blue-700">Satisfaction Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Training Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <div className="text-sm text-gray-600">
                      <Badge variant="outline">{resource.type}</Badge>
                      <span className="ml-2">{resource.size}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
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

export default TrainingSection;
