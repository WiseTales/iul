import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const WhosWho = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const teamMembers = [
    {
      name: "Prof. Syed Waseem Akhtar",
      position: "Founder and Chancellor",
      organization: "Integral University",
      image: "/1.JPG",
      profile: "Leading the vision of quality education and social responsibility in higher education.",
      email: "chancellor@iul.ac.in",
    },
    {
      name: "Dr. Syed Nadeem Akhtar",
      position: "Pro-Chancellor",
      organization: "Integral University",
      image: "/2.webp",
      profile: "Patronizing academic administration and research development programs.",
      email: "prochancellor@iul.ac.in",
    },
    {
      name: "Prof. Javed Musarrat",
      position: "Vice-Chancellor",
      organization: "Integral University",
      image: "/3.jpg",
      profile: "Overseeing academic excellence and institutional development initiatives.",
      email: "vc@iul.ac.in",
    },
    {
      name: "Prof. Mohammad Haris Siddiqui",
      position: "Registrar",
      organization: "Centre for Social Audit",
      image: "/4.jpeg",
      profile: "Managing and overseeing various administrative activities of the project.",
      email: "registrar@iul.ac.in",
    },
    {
      name: "Prof. Hafiz Mohd Arif",
      position: "Head, Department of Languages",
      organization: "Integral University",
      image: "/5.jpg",
      profile: "Supervising and monitoring social audit activities.",
      email: "headeng@iul.ac.in",
    },
    {
      name: "Dr. Aareena Naznine",
      position: "Assistant Professor",
      organization: "Integral University",
      image: "/61.png",
      profile: "Supervising and monitoring social audit activities.",
      email: "aareenaz@iul.ac.in",
    },
    {
      name: "Dr. Vanya Srivastava",
      position: "Assistant Professor",
      organization: "Integral University",
      image: "/62.png",
      profile: "Coordinating audit activities and capacity building programs across districts.",
      email: "vanya@iul.ac.in",
    },
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    e.currentTarget.style.display = "none";
    const fallback = document.getElementById(`fallback-${index}`);
    if (fallback) fallback.style.display = "flex";
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
                <div
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 relative cursor-pointer"
                  onClick={() => setSelectedImage(member.image)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`absolute inset-0 m-auto w-16 h-16 object-cover rounded-full transition-transform duration-300 hover:scale-110 ${
                      member.name === "Prof. Syed Waseem Akhtar" ? "translate-y-2" : ""
                    }`}
                    onError={(e) => handleImageError(e, index)}
                  />
                  <div
                    id={`fallback-${index}`}
                    className="hidden absolute inset-0 items-center justify-center text-gray-700 font-bold text-sm"
                  >
                    {getInitials(member.name)}
                  </div>
                </div>

                <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                <div className="space-y-1">
                  <p className="text-blue-600 font-semibold">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.organization}</p>
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

        {/* Image Zoom Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 m-2 text-white text-3xl font-bold"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Zoomed profile"
                className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhosWho;
