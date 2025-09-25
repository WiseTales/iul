import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, ChevronDown, ChevronUp, Image } from "lucide-react";

const PostSAReports = () => {
  const [openDistrict, setOpenDistrict] = useState<string | null>(null);

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

  const districtData = [
    {
      name: "Ambedkar Nagar",
     blocks: [
  { name: "Akbarpur", image: "Akbarpur.jpeg" },
  { name: "Baskhari", image: "Baskhari.jpeg" },
  { name: "Bhiti", image: "Bhiti.jpeg" },
  { name: "Bhiyaon", image: "Bhiyaon.jpeg" },
  { name: "Jahageerganj", image: "Jahageerganj.jpeg" },
  { name: "Jalalpur", image: "Jalalpur.jpeg" },
  { name: "Katehari", image: "Katehari.jpeg" },
  { name: "Ramnagar", image: "Ramnagar.jpeg" },
  { name: "Tanda", image: "Tanda.jpeg" },
],

    },
    {
      name: "Amethi",
      blocks: [
        { name: "Bahadurpur", image: "" },
        { name: "Gauriganj", image: "" },
        { name: "Jagdishpur", image: "" },
        { name: "Jamo", image: "" },
        { name: "Musafirkhana", image: "" },
        { name: "Sangrampur", image: "" },
        { name: "Shahgarh", image: "" },
        { name: "Singhpur", image: "" },
        { name: "Tiloi", image: "" },
      ],
    },
    {
      name: "Ayodhya",
      blocks: [
        { name: "Amaniganj", image: "" },
        { name: "Bikapur", image: "" },
        { name: "Haringtonganj", image: "" },
        { name: "Masodha", image: "" },
        { name: "Mawai", image: "" },
        { name: "Maya Bazar", image: "" },
        { name: "Milkipur", image: "" },
        { name: "Pura Bazar", image: "" },
        { name: "Rudauli", image: "" },
        { name: "Sadar Town", image: "" },
        { name: "Sohawal", image: "" },
        { name: "Tarun", image: "" },
      ],
    },
    {
      name: "Bahraich",
      blocks: [{ name: "Tejwapur", image: "" }],
    },
    {
      name: "Balrampur",
      blocks: [
        { name: "Gaindas Bujurg", image: "" },
        { name: "Gainsari", image: "" },
        { name: "Gilula", image: "" },
        { name: "Harriya Satgharwa", image: "" },
        { name: "Pachpedva", image: "" },
        { name: "Shreedattganj", image: "" },
        { name: "Tulsipur", image: "" },
        { name: "Utraula", image: "" },
      ],
    },
    {
      name: "Barabanki",
      blocks: [
        { name: "Bani Kodar", image: "" },
        { name: "Hadirgarh", image: "" },
        { name: "Harakh", image: "" },
        { name: "Masoli", image: "" },
        { name: "Nindura", image: "" },
        { name: "Pure Dalai", image: "" },
        { name: "Ramnagar", image: "" },
        { name: "Siddhore", image: "" },
        { name: "Sirauli Gauspur", image: "" },
        { name: "Suratganj", image: "" },
        { name: "Trivediganj", image: "" },
      ],
    },
    {
      name: "Bareilly",
      blocks: [
        { name: "Alampur Jafra", image: "" },
        { name: "Baheri", image: "" },
        { name: "Bareilly City", image: "" },
        { name: "Bhuta", image: "" },
        { name: "Fadpura", image: "" },
        { name: "Faridpur", image: "" },
        { name: "Fathganj", image: "" },
        { name: "Kyara", image: "" },
        { name: "Nawabganj", image: "" },
        { name: "Richha Damkhoa", image: "" },
        { name: "Vithri Chainpur", image: "" },
      ],
    },
    {
      name: "Gonda",
      blocks: [
        { name: "Babhanjot", image: "" },
        { name: "Balsar", image: "" },
        { name: "Chapiya", image: "" },
        { name: "Haldhar mau", image: "" },
        { name: "Itiyathok", image: "" },
        { name: "Jhanjhari", image: "" },
        { name: "Katra Bazar", image: "" },
        { name: "Mankapur", image: "" },
        { name: "Mujehana", image: "" },
        { name: "Nawabganj", image: "" },
        { name: "Pandri kripal", image: "" },
        { name: "Rupaidih", image: "" },
        { name: "Wazeerganj", image: "" },
      ],
    },
    {
      name: "Kheri",
      blocks: [
        { name: "Bijua", image: "" },
        { name: "Dhaurahra", image: "" },
        { name: "Isha Nagar", image: "" },
        { name: "Lakhimpur", image: "" },
        { name: "Mituli", image: "" },
        { name: "Mohmmdi", image: "" },
        { name: "Nakaha", image: "" },
        { name: "Pasgawan", image: "" },
        { name: "Phool Bahed", image: "" },
        { name: "Ramiya Behed", image: "" },
      ],
    },
    {
      name: "Raebareli",
      blocks: [
        { name: "Deeh", image: "" },
        { name: "Deen Shah Gaura", image: "" },
        { name: "Jagatpur", image: "" },
        { name: "Khiron", image: "" },
        { name: "Lalganj", image: "" },
        { name: "Rahi", image: "" },
        { name: "Rohniya", image: "" },
        { name: "Sareni", image: "" },
        { name: "Shivgarh", image: "" },
        { name: "Unchahar", image: "" },
      ],
    },
    {
      name: "Shahjahanpur",
      blocks: [
        { name: "Dadraul", image: "" },
        { name: "Jalalabad", image: "" },
        { name: "Kalan", image: "" },
      ],
    },
    {
      name: "Shrawasti",
      blocks: [
        { name: "Hariharpur Rani", image: "" },
        { name: "Ikauna", image: "" },
        { name: "Jamunha", image: "" },
        { name: "Sirsiya", image: "" },
      ],
    },
    {
      name: "Sitapur",
      blocks: [
        { name: "Aliya", image: "" },
        { name: "Biswan", image: "" },
        { name: "Hargaon", image: "" },
        { name: "Kasmanda", image: "" },
        { name: "Laharpur", image: "" },
        { name: "Mahchretha", image: "" },
        { name: "Mahmoodabad", image: "" },
        { name: "Maholi", image: "" },
        { name: "N.K Sitapur", image: "" },
        { name: "Paliya", image: "" },
        { name: "Persandi", image: "" },
        { name: "Rampur Mathura", image: "" },
        { name: "Reusa", image: "" },
        { name: "Sakran", image: "" },
        { name: "Sindhuli", image: "" },
      ],
    },
    {
      name: "Sultanpur",
      blocks: [
        { name: "Akhandnagar", image: "" },
        { name: "Baldirai", image: "" },
        { name: "Bhadaiyan", image: "" },
        { name: "Dhanpatganj", image: "" },
        { name: "Dostpur", image: "" },
        { name: "Dubeypur", image: "" },
        { name: "Jaisinghpur", image: "" },
        { name: "Kadipur", image: "" },
        { name: "Karaudi Kalan", image: "" },
        { name: "Kurebhar", image: "" },
        { name: "Kurwar", image: "" },
        { name: "Lambhua", image: "" },
        { name: "Motigarpur", image: "" },
        { name: "Pratappur Kamaicha", image: "" },
      ],
    },
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
    { name: "Resource Video 3", videoUrl: "https://drive.google.com/file/d/1Omm0ghvkeln4ei8IyEEVPIawRBXS-p09/preview" },
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

      {/* Images Section - Now District & Block Gallery */}
      <section id="images" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            District & Block Gallery
          </h2>

          <div className="space-y-6">
            {districtData.map((district, idx) => (
              <Card key={idx}>
                <CardHeader
                  onClick={() =>
                    setOpenDistrict(
                      openDistrict === district.name ? null : district.name
                    )
                  }
                  className="cursor-pointer flex justify-between items-center"
                >
                  <CardTitle>{district.name}</CardTitle>
                  {openDistrict === district.name ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </CardHeader>
                {openDistrict === district.name && (
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {district.blocks.map((block, bIdx) => (
                        <div
                          key={bIdx}
                          className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
                        >
                          <p className="font-medium mb-2">{block.name}</p>
                          {block.image ? (
                            <img
                              src={block.image}
                              alt={block.name}
                              className="object-cover w-full h-40 rounded"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center text-gray-400 w-full h-40 border rounded">
                              <Image className="h-8 w-8 mb-2" />
                              <p>Add image in data</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
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
