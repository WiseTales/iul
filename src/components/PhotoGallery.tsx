import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video } from "lucide-react";

const PhotoGallery = () => {
  const galleryItems = [
    {
      title: "Social Audit Training Session",
      date: "July 2024",
      type: "Photo",
      description: "Capacity building program for XPTs and CSAs",
      image: "/A.jpg",
      category: "Training"
    },
    {
      title: "Public Hearing - Lucknow",
      date: "June 2024",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B.jpg",
      category: "Public Hearing"
    },
    {
      title: "Field Visit Documentation",
      date: "May 2024",
      type: "Video",
      description: "On-site verification of educational programs",
      image: "/C.jpg",
      category: "Field Work"
    },
    {
      title: "Stakeholder Meeting",
      date: "April 2024",
      type: "Photo",
      description: "Coordination meeting with education officials",
      image: "/D.jpg",
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
      image: "/E.jpg",
      category: "Community"
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowImages = galleryItems.map(item => item.image);

  const openModal = () => {
    setCurrentSlide(0);
    setIsModalOpen(true);
  };

  const openGalleryModal = (index: number) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  // Media Coverage specific images (C.jpg, D.jpg, E.jpg)
  const mediaImages = ["/C.jpg", "/D.jpg", "/E.jpg"];
  const [mediaIndex, setMediaIndex] = useState(0);

  const nextMediaSlide = () => {
    setMediaIndex((prev) => (prev + 1) % mediaImages.length);
  };

  const prevMediaSlide = () => {
    setMediaIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length);
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
                    onClick={() => openGalleryModal(index)}
                    className="w-full h-48 object-contain bg-gray-100 cursor-pointer"
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
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevMediaSlide}
              className="text-gray-600 text-3xl hover:text-black"
              aria-label="Previous media"
            >
              ‹
            </button>
            <img
              src={mediaImages[mediaIndex]}
              alt={`Media ${mediaIndex + 1}`}
              className="w-full max-w-md rounded-lg shadow-lg transition duration-300"
            />
            <button
              onClick={nextMediaSlide}
              className="text-gray-600 text-3xl hover:text-black"
              aria-label="Next media"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slideshow Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <button onClick={closeModal} className="absolute top-4 right-6 text-white text-3xl">✕</button>
            <button onClick={prevSlide} className="absolute left-4 text-white text-5xl">‹</button>
            <div className="max-w-3xl px-4 text-center">
              <img
                src={slideshowImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="max-h-[80vh] mx-auto rounded"
              />
              <p className="text-white mt-4 text-lg">{galleryItems[currentSlide].title}</p>
            </div>
            <button onClick={nextSlide} className="absolute right-4 text-white text-5xl">›</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
