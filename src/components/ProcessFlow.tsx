import React from 'react'; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Users, FileText, Eye } from "lucide-react";

const ProcessFlow = () => {
  const steps = [
    {
      title: "Pre-Social Audit Phase",
      description: "Identification, Mapping, Capacity Building, and Planning",
      icon: FileText,
      color: "bg-blue-500",
      tasks: [
        "Identification of MTs/CSAs/SAFTs",
        "➡ Number of Master Trainers: 28 for 14 Districts", 
        "➡ 2 MTs for each District", 
        "➡ Number of CSAs (Cluster Social Auditors): 645 for 14 Districts",
        "➡ 1 CSA for 10 - 13 Schools of each District",
        "➡ SAFTs (Social Audit Facilitators Trainers) No. of SAFT (Approximate 38616) for 14 Districts",
        "➡ 6 SAFTs per School",
        " " ,
        
        "Manpower engaged",
        "➡ 38889 (approx)",
        
        
      ]
    },
    {
      title: "Social Audit Phase",
      description: "Systematic audit of educational programs and schemes",
      icon: Eye,
      color: "bg-green-500",
      tasks: ["Document verification", "Field visits", "Stakeholder interviews", "Data collection"]
    },
    {
      title: "Post-Social Audit Phase",
      description: "Public hearing, corrective action, reporting, and completion of project",
      icon: FileText,
      color: "bg-orange-500",
      tasks: ["Public hearing", "Report compilation", "Published documentation", "Completion of Project"]
    },
  ];

  const roles = [
    {
      level: "School Level",
      responsibilities: ["Headmasters coordination", "SMC (School Management Committee) participation", "Data provision"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      level: "Block Level",
      responsibilities: ["BRC staff coordination", "Block compilation", "Resource support"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      level: "District Level",
      responsibilities: ["BSA oversight", "District compilation", "Policy implementation"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      level: "State Level",
      responsibilities: ["State compilation", "Policy guidance", "Quality assurance"],
      color: "bg-red-100 text-red-800"
    },
    {
      level: "SAU/Institute",
      responsibilities: [
        "Identification of Social Audit team - MTs, CSAs and SAFT",
        "Capacity building of team",
        "Conduct Social Audit and public hearing",
        "Report writing"
      ],
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Audit Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A systematic approach to ensure transparency and accountability in educational program implementation
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Social Audit Process Flow</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center mb-4">{step.description}</p>
                      <div className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <Badge key={taskIndex} variant="secondary" className="text-xs">
                            {task}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow for flow indication */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                      <ArrowDown className="h-6 w-6 text-gray-400 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Roles and Responsibilities */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Roles & Responsibilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    {role.level}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {role.responsibilities.map((responsibility, respIndex) => (
                      <Badge key={respIndex} className={role.color}>
                        {responsibility}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
