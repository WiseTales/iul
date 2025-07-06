
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Users, FileCheck, Megaphone, Shield, TrendingUp } from "lucide-react";

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

        {/* Key Outcomes */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Key Outcomes of Social Audit</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">For Schools</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                  <span className="text-gray-700">Improved infrastructure utilization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                  <span className="text-gray-700">Better teacher attendance and performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-blue-500"></Badge>
                  <span className="text-gray-700">Enhanced student learning outcomes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">For Community</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                  <span className="text-gray-700">Increased awareness of education rights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                  <span className="text-gray-700">Greater participation in school governance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-green-500"></Badge>
                  <span className="text-gray-700">Strengthened school-community partnership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialAuditInfo;
