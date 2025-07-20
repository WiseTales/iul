import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone } from "lucide-react";

const WhosWho = () => {
  const teamMembers = [
    {
      name: "Prof. Syed Waseem Akhtar",
      position: "Founder and Chancellor",
      organization: "Integral University",
      image: "/placeholder.svg",
      profile: "Leading the vision of quality education and social responsibility in higher education.",
      email: "chancellor@iul.ac.in",
    
    },
    {
      name: "Dr. Syed Nadeem Akhtar",
      position: "Pro-Chancellor",
      organization: "Integral University",
      image: "/placeholder.svg", 
      profile: "Patronizing academic administration and research development programs.",
      email: "prochancellor@iul.ac.in",
    },
    {
      name: "Prof. Javed Musarrat",
      position: "Vice-Chancellor",
      organization: "Integral University", 
      image: "/placeholder.svg",
      profile: "Overseeing academic excellence and institutional development initiatives.",
      email: "vc@iul.ac.in",
      
    },
    
    {
      name: "Prof. Mohammad Haris Siddiqui",
      position: "Registrar",
      organization: "Centre for Social Audit",
      image: "/placeholder.svg",
      profile: "Leading the Centre for Social Audit of Samagra Shiksha with expertise in educational governance.",
      email: "director.csa@integraluniversity.ac.in",
      phone: "+91-9876543210",
      level: "Management"
    },
    {
      name: "Dr. Mohd. Aslam",
      position: "Assistant Director",
      organization: "Centre for Social Audit",
      image: "/placeholder.svg",
      profile: "Coordinating audit activities and capacity building programs across districts.",
      email: "aslam@integraluniversity.ac.in",
      phone: "+91-9876543211",
      level: "Management"
    },
    {
      name: "Mr. Shahid Ali",
      position: "Coordinator",
      organization: "Centre for Social Audit",
      image: "/placeholder.svg",
      profile: "Managing field operations and stakeholder coordination for social audit implementation.",
      email: "shahid@integraluniversity.ac.in",
      phone: "+91-9876543212",
      level: "Coordination"
    }
  ];

  const levelColors = {
    "Leadership": "bg-blue-100 text-blue-800",
    "Management": "bg-green-100 text-green-800", 
    "Coordination": "bg-purple-100 text-purple-800"
  };

  return (
    <section id="whos-who" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who's Who</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team leading the Centre for Social Audit of Samagra Shiksha, 
            from Chancellor to Coordinator, committed to ensuring transparency and accountability in education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                <div className="space-y-2">
                  <p className="text-blue-600 font-semibold">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.organization}</p>
                  <Badge className={levelColors[member.level as keyof typeof levelColors]}>
                    {member.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.profile}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{member.email}</span>
                  </div>
                  {member.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{member.phone}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhosWho;
