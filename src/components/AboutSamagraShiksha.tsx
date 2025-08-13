


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
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Social Audit of Samagra Shiksha</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Social audit of Samagra Shiksha is India's flagship integrated scheme for school education, 
            covering the entire spectrum of elementary education, primary school, upper school, composite school and KGBV school. It aims to ensure 
            inclusive and equitable quality education aligned with the National Education Policy 2020.
          </p>
        </div>

      {/* Key Features */}
<div className="mb-16">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Objective of Social Audit */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">Objective of Social Audit (as per MoE Guidelines)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 text-lg leading-relaxed mb-6">
                The basic objective of Social Audit is to enhance public accountability in Samagra Shiksha with the requirements of the audit discipline. It is a fact-finding process, not a fault-finding process.
              </p>
              <div className="space-y-3 text-amber-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">1.</span>
                  <p>To ensure that the entitlements of a child as guaranteed under the RTE Act and funded through Samagra Shiksha are being provided in the school, in a timely and equitable manner.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">2.</span>
                  <p>To verify the timely issuance of authorization to spend to the School/SMC by appropriate Government under Single Nodal Account of Samagra Shiksha-SIS.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">3.</span>
                  <p>To check the status of infrastructure (Classroom, Furniture, Toilets, Drinking Water, and Electricity Facility etc.) in the school along with status of works initiated through the funds sanctioned.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">4.</span>
                  <p>To ensure a feeling of safety in schools for all students, especially girls.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">5.</span>
                  <p>To check the enrolment, retention and completion of schooling of students in the school.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">6.</span>
                  <p>To share and verify information placed under school report cards (generated under UDISE+).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">7.</span>
                  <p>To initiate and sustain an educational dialogue between all grass root level stakeholders—children, parents, SMCs, and Education Officials—to improve the school development.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">8.</span>
                  <p>To develop a participatory approach towards school development through community support.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">9.</span>
                  <p>To protect rights of Children with Special Needs (CWSN) and students from marginalized/vulnerable sections in school.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-amber-800 min-w-[24px]">10.</span>
                  <p>To support the execution of the School Development Plan (SDP) along with the execution of the School Safety Plan (SSP).</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-200 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Coverage Requirement (Periodicity of Audit)</h4>
                <p className="text-amber-700">
                  At least 20% of the schools of each category (Primary, Upper Primary, Composite, etc.) will be covered under social audit every year such that Social Audit of all Government schools will be conducted in a span of five years.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-lg leading-relaxed">
               To foster a transparent and participatory social audit system that strengthens community engagement and ensures quality education for all under Samagra Shiksha.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-lg leading-relaxed">
                To empower stakeholders through capacity building, conduct audits, and ensure continuous monitoring to achieve NEP 2020 goals through community-driven transparency.


              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSamagraShiksha;
