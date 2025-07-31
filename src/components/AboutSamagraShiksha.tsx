import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Computer, Heart, GraduationCap, Scale } from "lucide-react";

const AboutSamagraShiksha = () => {
  const components = [
    {
      title: "Early Childhood Care and Education (ECCE)",
      description: "Comprehensive development for children aged 3-6 years",
      icon: Heart,
      color: "bg-pink-500"
    },
    {
      title: "Foundational Literacy and Numeracy (FLN)",
      description: "Building strong foundation in reading, writing, and mathematics",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      title: "Digital Initiatives",
      description: "Technology integration for enhanced learning experiences",
      icon: Computer,
      color: "bg-green-500"
    },
    {
      title: "Inclusive Education",
      description: "Ensuring education access for children with special needs",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "Teacher Training",
      description: "Continuous professional development for educators",
      icon: GraduationCap,
      color: "bg-orange-500"
    },
    {
      title: "Gender Equity",
      description: "Promoting equal opportunities for all students",
      icon: Scale,
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            NEP 2020 Aligned
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Social Audit of Samagra Shiksha</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Samagra Shiksha is India's flagship integrated scheme for school education, 
            covering the entire spectrum from pre-school to class 12. It aims to ensure 
            inclusive and equitable quality education aligned with the National Education Policy 2020.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-8 text-center col-span-full">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                As per the Ministry of Education Guidelines, Social Audit ensures transparency, accountability, 
                and community participation in the implementation of educational programs under Samagra Shiksha.
              </p>
            </div>
            {components.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${component.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{component.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Objectives & Coverage */}
        <div className="mb-16 grid lg:grid-cols-2 gap-8">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Objective of Social Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                The basic objective of Social Audit is to enhance public accountability in Samagra Shiksha with the requirements of the audit discipline. It is a fact-finding process, not a fault-finding process.
              </p>
              <p className="text-gray-700 mb-2 font-medium">The objectives of Social Audit can be put down in the following manner:</p>
              <ol className="list-decimal list-inside text-gray-700" style={{ listStyleType: "lower-roman" }}>
                <li className="mb-1">
                  To ensure that the entitlements of a child as guaranteed under the RTE Act and funded through Samagra Shiksha are being provided in the school, in a timely and equitable manner.
                </li>
                <li className="mb-1">
                  To verify the timely issuance of authorization to spend to the School/SMC by appropriate Government under Single Nodal Account of Samagra Shiksha-SIS.
                </li>
                <li className="mb-1">
                  To check the status of infrastructure (Classroom, Furniture, Toilets, Drinking Water, and Electricity Facility etc.) in the school along with status of works initiated through the funds sanctioned.
                </li>
                <li className="mb-1">
                  To ensure a feeling of safety in schools for all students, specially girls.
                </li>
                <li className="mb-1">
                  To check the enrolment, retention and completion of schooling of students in the school.
                </li>
                <li className="mb-1">
                  To share and verify information placed under school report cards (generated under UDISE+).
                </li>
                <li className="mb-1">
                  To initiate and sustain an educational dialogue between all grass root level stakeholders—children, parents, SMCs, and Education Officials—to improve the school development.
                </li>
                <li className="mb-1">
                  To develop a participatory approach towards school development through community support.
                </li>
                <li className="mb-1">
                  To protect rights of Children with Special Needs (CWSN) and students from marginalized/vulnerable sections in school.
                </li>
                <li className="mb-1">
                  To support the execution of the School Development Plan (SDP) along with the execution of the School Safety Plan (SSP).
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Coverage Requirement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                At least 20% of the schools of each category (Primary, Upper Primary, Composite, etc.) will be covered under social audit every year such that Social Audit of all Government schools will be conducted in a span of five years.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-lg leading-relaxed">
                To establish a transparent, accountable, and participatory system of social audit 
                that ensures effective implementation of Samagra Shiksha programs, promoting 
                quality education for all children while strengthening community engagement 
                and democratic governance in education.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-lg leading-relaxed">
                To build capacity of stakeholders, conduct systematic social audits, 
                facilitate public hearings, and ensure continuous monitoring of educational 
                programs to achieve the goals of NEP 2020 and strengthen the education system 
                through community participation and transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSamagraShiksha;
