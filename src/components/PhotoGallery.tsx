import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Video, Newspaper, ExternalLink } from "lucide-react";

const PhotoGallery = () => {
  const galleryItems = [
    {
      title: "Social Audit Training Session",
      date: "July 2024",
      type: "Photo",
      description: "Capacity building program for XPTs and CSAs",
      image: "/placeholder.svg",
      category: "Training"
    },
    {
      title: "Public Hearing - Lucknow",
      date: "June 2024", 
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/placeholder.svg",
      category: "Public Hearing"
    },
    {
      title: "Field Visit Documentation",
      date: "May 2024",
      type: "Video",
      description: "On-site verification of educational programs",
      image: "/placeholder.svg",
      category: "Field Work"
    },
    {
      title: "Stakeholder Meeting",
      date: "April 2024",
      type: "Photo", 
      description: "Coordination meeting with education officials",
      image: "/placeholder.svg",
      category: "Meetings"
    },
    {
      title: "Award Ceremony",
      date: "March 2024",
      type: "Photo",
      description: "Recognition for excellence in social audit",
      image: "/placeholder.svg", 
      category: "Awards"
    },
    {
      title: "Community Engagement",
      date: "February 2024",
      type: "Video",
      description: "Involving parents and community members",
      image: "/placeholder.svg",
      category: "Community"
    }
  ];

  const mediaItems = [
    {
      title: "Times of India Coverage",
      date: "July 15, 2024",
      type: "News",
      description: "Social Audit Initiative Transforms Education Monitoring in UP",
      source: "Times of India",
      link: "#"
    },
    {
      title: "Hindustan Times Report", 
      date: "June 28, 2024",
      type: "News",
      description: "Integral University Leads Innovative Social Audit Program",
      source: "Hindustan Times",
      link: "#"
    },
    {
      title: "DD News Feature",
      date: "June 10, 2024", 
      type: "TV",
      description: "Documentary on Social Audit Implementation",
      source: "DD News",
      link: "#"
    },
    {
      title: "AIR Interview",
      date: "May 22, 2024",
      type: "Radio", 
      description: "Director speaks on Social Audit Impact",
      source: "All India Radio",
      link: "#"
    }
  ];

  const categoryColors = {
    "Training": "bg-blue-100 text-blue-800",
    "Public Hearing": "bg-green-100 text-green-800",
    "Field Work": "bg-purple-100 text-purple-800", 
    "Meetings": "bg-orange-100 text-orange-800",
    "Awards": "bg-yellow-100 text-yellow-800",
    "Community": "bg-red-100 text-red-800"
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Photo Gallery & Media Coverage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our visual documentation of social audit activities and media coverage 
            highlighting the impact of our transparency and accountability initiatives.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Photo Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {item.type === 'Video' ? (
                      <Badge className="bg-red-500 text-white">
                        <Video className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    ) : (
                      <Badge className="bg-blue-500 text-white">
                        <Camera className="h-3 w-3 mr-1" />
                        Photo
                      </Badge>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{item.date}</span>
                    <Badge className={categoryColors[item.category as keyof typeof categoryColors]}>
                      {item.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Media Coverage</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.source}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Newspaper className="h-5 w-5 text-gray-500" />
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Full Coverage
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;