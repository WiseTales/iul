import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Computer, Heart, GraduationCap, Scale, ClipboardText, ShieldCheck, Building, UserCheck, Conversation, People, SafetyCertificate } from "lucide-react";

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

  const socialAuditObjectives = [
    {
      title: "Basic Objective",
      description: "The basic objective of Social Audit is to enhance public accountability in Samagra Shiksha with the requirements of the audit discipline. It is a fact-finding process, not a fault-finding process.",
      icon: ClipboardText,
      color: "bg-indigo-500"
    },
    {
      title: "i. Entitlements under RTE",
      description: "To ensure that the entitlements of a child as guaranteed under the RTE Act and funded through Samagra Shiksha are being provided in the school, in a timely and equitable manner.",
      icon: Building,
      color: "bg-sky-500"
    },
    {
      title: "ii. Authorization to Spend",
      description: "To verify the timely issuance of authorization to spend to the School/SMC by appropriate Government under Single Nodal Account of Samagra Shiksha-SIS.",
      icon: ShieldCheck,
      color: "bg-cyan-500"
    },
    {
      title: "iii. Infrastructure Status",
      description: "To check the status of infrastructure (Classroom, Furniture, Toilets, Drinking Water, and Electricity Facility etc.) in the school along with status of works initiated through the funds sanctioned.",
      icon: Building,
      color: "bg-green-600"
    },
    {
      title: "iv. Safety in Schools",
      description: "To ensure a feeling of safety in schools for all students, specially girls.",
      icon: SafetyCertificate,
      color: "bg-red-500"
    },
    {
      title: "v. Enrollment & Retention",
      description: "To check the enrolment, retention and completion of schooling of students in the school.",
      icon: UserCheck,
      color: "bg-yellow-500"
    },
    {
      title: "vi. School Report Cards",
      description: "To share and verify information placed under school report cards (generated under UDISE+).",
      icon: ClipboardText,
      color: "bg-purple-400"
    },
    {
      title: "vii. Educational Dialogue",
      description: "To initiate and sustain an educational dialogue between all grass root level stakeholders—children, parents, SMCs, and Education Officials—to improve the school development.",
      icon: Conversation,
      color: "bg-fuchsia-500"
    },
    {
      title: "viii. Participatory Development",
      description: "To develop a participatory approach towards school development through community support.",
      icon: People,
      color: "bg-teal-600"
    },
    {
      title: "ix. Rights Protection",
      description: "To protect rights of Children with Special Needs (CWSN) and students from marginalized/vulnerable sections in school.",
      icon: Users,
      color: "bg-emerald-500"
    },
    {
      title: "x. Support SDP & SSP",
      description: "To support the execution of the School Development Plan (SDP) along with the execution of the School Safety Plan (SSP).",
      icon: GraduationCap,
      color: "bg-blue-600"
    },
    {
      title: "Coverage Requirement (Periodicity of Audit)",
      description: "At least 20% of the schools of each category (Primary, Upper Primary, Composite, etc.) will be covered under social audit every year such that Social Audit of all Government schools will be conducted in a span of five years.",
      icon: Users,
      color: "bg-gray-500"
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

        {/* Social Audit Objectives */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-gray-800">Objective of Social Audit</h3>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              As defined in the Ministry of Education guidelines, the following are the exact objectives and coverage requirement for Social Audit under Samagra Shiksha. 
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialAuditObjectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <Card key={idx} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-14 h-14 ${obj.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-base font-semibold">{obj.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">{obj.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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
