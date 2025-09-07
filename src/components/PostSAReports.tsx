import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Image as ImageIcon } from "lucide-react";

const PostSAReports = () => {
  // District data from the provided screenshot (block count and total schools)
  const districts = [
    { name: "Ambedkar Nagar", blocks: 10, totalSchools: 1590 },
    { name: "Amethi", blocks: 13, totalSchools: 1587 },
    { name: "Bahraich", blocks: 15, totalSchools: 2818 },
    { name: "Balrampur", blocks: 10, totalSchools: 1826 },
    { name: "Barabanki", blocks: 16, totalSchools: 2651 },
    { name: "Bareilly", blocks: 16, totalSchools: 2501 },
    { name: "Ayodhya", blocks: 12, totalSchools: 1800 },
    { name: "Gonda", blocks: 17, totalSchools: 2629 },
    { name: "Lakhimpur Kheri", blocks: 16, totalSchools: 3122 },
    { name: "Raebareli", blocks: 18, totalSchools: 2320 },
    { name: "Shahjahanpur", blocks: 16, totalSchools: 2734 },
    { name: "Shravasti", blocks: 5, totalSchools: 989 },
    { name: "Sitapur", blocks: 20, totalSchools: 3531 },
    { name: "Sultanpur", blocks: 14, totalSchools: 2080 }
  ];

  const reportCategories = [
    {
      title: "District-wise Reports",
      icon: MapPin,
      color: "bg-green-500",
      reports: districts.map((d) => ({
        name: `${d.name} District`,
        schools: d.totalSchools,
        link:
          d.name === "Raebareli"
            ? "https://drive.google.com/file/d/1Tw_JY4Kb0a-F7HsKbqZsstGhxBvhCh2g/view?usp=sharing"
            : "" // placeholders for other districts
      }))
    }
  ];

  const handleDownloadExcel = (url: string, filename?: string) => {
    const link = document.createElement('a');
    link.href = url;
    if (filename) link.download = filename;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  const resourcePackages = [
    { name: "Resource Video 1", videoUrl: "https://drive.google.com/file/d/1COA7txEg12uVyoiou-Fz7AJzq4eKov6V/preview" },
    { name: "Resource Video 2", videoUrl: "https://drive.google.com/file/d/1agcwsIqKPs9V_UHOVkmjKfDxqukzVIK3/preview" },
    { name: "Resource Video 3", videoUrl: "https://www.youtube.com/embed/abc123xyz" },
    { name: "Resource Video 4", videoUrl: "" } 
  ];

  return (
    <>
      {/* Existing Reports Section */}
      <section id="reports" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Post Social Audit Reports</h2>
          </div>

          {/* Report Categories */}
          <div className="grid lg:grid-cols-1 gap-8 mb-16">
            {reportCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {category.reports.map((report, reportIndex) => (
                        <div key={reportIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{report.name}</p>
                            <p className="text-xs text-gray-500">
                              {report.schools} schools
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              report.link
                                ? handleDownloadExcel(report.link)
                                : alert("Report link not available yet.")
                            }
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View All {category.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Public Hearing Plan & Implementation Section */}
      <section id="public-hearing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Public Hearing Plan & Implementation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Public Hearing Plan - District Wise",
                link: "https://drive.google.com/file/d/1gdvLbxOHR4HEPmdpYFNamCm0LrI-bbsb/view?usp=sharing",
              },
              { name: "Official circulars and letters - Public Hearing", link: "https://drive.google.com/file/d/1pplt-gbYAaY3QSne25K1lu9VBFjjg-1l/view?usp=sharing" },
              { name: "Monitoring Report", link: "" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-center">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button
                    onClick={() =>
                      item.link
                        ? handleDownloadExcel(item.link)
                        : alert("Link not available yet.")
                    }
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section id="images" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "./PH1.jpeg", alt: "Image 1" },
              { src: "./PH2.jpeg", alt: "Image 2" },
              { src: "./PH3.jpeg", alt: "Image 3" },
              { src: "./PH4.jpeg", alt: "Image 4" },
            ].map((img, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center h-64">
                {img.src ? (
                  <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
                ) : (
                  <div className="flex flex-col items-center text-gray-400">
                    <ImageIcon className="h-10 w-10 mb-2" />
                    <p>Image placeholder</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Materials Section (moved here) */}
      <section id="university-materials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
           Videos Gallery
          </h4>
          <div className="grid md:grid-cols-4 gap-4">
            {resourcePackages.map((pkg, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  <p className="font-medium">{pkg.name}</p>
                  {pkg.videoUrl ? (
                    <div className="w-full aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={pkg.videoUrl}
                        title={pkg.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="w-full h-40 flex items-center justify-center text-gray-500 text-sm border rounded">
                    Will be uploaded soon
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSAReports;
