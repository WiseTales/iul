import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video } from "lucide-react";

const PhotoGallery = () => {
  const galleryItems = [
    {
      title: "Social Audit Training Session",
    
      type: "Photo",
      description: "Field Visit",
      image: "/A.jpg",
      category: "Training"
    },

     {
      title: "title here - Lucknow",
      date: "June 2024",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B5.jpg",
      category: "Public Hearing"
    },

     {
      title: "title here- Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B6.jpg",
      category: "Public Hearing"
    },
     {
      title: "title here - Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B7.jpg",
      category: "Public Hearing"
    },
     {
      title: "title here - Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B8.jpg",
      category: "Public Hearing"
    },
     {
      title: "title here - Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B9.jpg",
      category: "Public Hearing"
    },
     {
      title: "title - Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B10.jpg",
      category: "Public Hearing"
    },
    {
      title: "title - Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B.jpg",
      category: "Public Hearing"
    },
    {
      title: "Field Visit Documentation",
      date: "May 2025",
      type: "Video",
      description: "On-site verification of educational programs",
      image: "/B1.jpg",
      category: "Field Work"
    },
    {
      title: "Stakeholder Meeting",
      date: "April 2025",
      type: "Photo",
      description: "Coordination meeting with education officials",
      image: "/B2.jpg",
      category: "Meetings"
    },
    {
      title: "Award Ceremony",
      date: "March 2025",
      type: "Photo",
      description: "Recognition for excellence in social audit",
      image: "/B3.jpg",
      category: "Awards"
    },
 {
      title: "Public Hearing - Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B11.jpg",
      category: "Public Hearing"
    },
 {
      title: "Public Hearing - Lucknow",
      date: "June 2025",
      type: "Photo",
      description: "Community participation in social audit process",
      image: "/B12.jpg",
      category: "Public Hearing"
    },
    {
      title: "Community Engagement",
      date: "February 2025",
      type: "Video",
      description: "Involving parents and community members",
      image: "/B4.jpg",
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
  const mediaImages = ["/C.jpg", "/C1.jpg", "/C2.jpg", "/C3.jpg", "/C4.jpg", "/E.jpg", "/F.jpg", "/D.jpg"];
  const [mediaIndex, setMediaIndex] = useState(0);

  const nextMediaSlide = () => {
    setMediaIndex((prev) => (prev + 1) % mediaImages.length);
  };

  const prevMediaSlide = () => {
    setMediaIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length);
  };

  const newsLinks = [
    "https://www.newsganj.com/yogi-government-is-training-csa-in-all-the-districts-of-the-state/",
    "https://theprint.in/india/up-govt-launches-training-programme-to-ensure-transparency-in-education-scheme-implementation/2591069/",
    "https://www.shauryatimes.com/news/183113",
    "https://swadeshtoday.com/yogi-government-is-training-csa-in-all-districts-of-the-state/",
    "https://www.etvbharat.com/hi/!state/social-audit-conducted-check-transparency-quality-26-thousand-720-basic-schools-state-action-plan-will-be-prepared-uttar-pradesh-news-ups25011300727",
    "https://deshbandhump.com/%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A4%A6%E0%A5%80%E0%A4%AF-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B2%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AA/"
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Photo Gallery & Media Coverage</h2>
          
          {/* Big images - yogi1.jpg and yogi2.jpg */}
          <div className="flex justify-center gap-6 mb-6">
            <img
              src="/yogi1.jpg"
              alt="Yogi 1"
              className="w-80 h-60 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/yogi2.jpg"
              alt="Yogi 2"
              className="w-80 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Smaller images - sandeep1.jpg and sandeep2.jpg */}
          <div className="flex justify-center gap-6 mb-8">
            <img
              src="/sandeep1.jpg"
              alt="Sandeep 1"
              className="w-60 h-40 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/sandeep2.jpg"
              alt="Sandeep 2"
              className="w-60 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* News Links */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Media Coverage Links:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {newsLinks.map((link, index) => (
                <div key={index} className="break-all">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    {index + 1}. {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              aria-label="Previous media"
            >
              ‹ Previous
            </button>
            <img
              src={mediaImages[mediaIndex]}
              alt={`Media ${mediaIndex + 1}`}
              className="w-full max-w-md rounded-lg shadow-lg transition duration-300"
            />
            <button
              onClick={nextMediaSlide}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              aria-label="Next media"
            >
              Next ›
            </button>
          </div>
        </div>

        {/* Slideshow Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <button onClick={closeModal} className="absolute top-4 right-6 text-white text-3xl">✕</button>

            <button
              onClick={prevSlide}
              className="absolute left-4 flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white font-semibold px-4 py-2 rounded-lg text-lg transition"
            >
              ‹ Previous
            </button>

            <div className="max-w-3xl px-4 text-center">
              <img
                src={slideshowImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="max-h-[80vh] mx-auto rounded"
              />
              <p className="text-white mt-4 text-lg">{galleryItems[currentSlide].title}</p>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white font-semibold px-4 py-2 rounded-lg text-lg transition"
            >
              Next ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
