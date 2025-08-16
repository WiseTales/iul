import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Video, BookOpen, HelpCircle, ExternalLink } from "lucide-react";

const ResourceCenter = () => {
  const resources = [
    {
      title: "Guidelines for Social Audit of Samagra Shiksha",
      type: "PDF Document",
      size: "Official Guidelines",
      category: "Guidelines",
      icon: FileText,
      description: "Comprehensive guidelines for conducting social audits in educational institutions",
      downloadUrl: "https://drive.google.com/file/d/1GlrHrMf5mx2a-v7ot1DV4vQrZ-QYLQMb/view?usp=sharing"
    },
    {
      title: "Shahjahanpur Social Audit Plan",
      type: "Document Template",
      size: "Template",
      category: "Templates",
      icon: FileText,
      description: "Standardized template for social audit reporting",
      downloadUrl: "https://drive.google.com/file/d/10m-CrdRvekzjPRcz1FsdOtq8kD_nCDEv/view?usp=sharing"
    },
    {
      title: "Lakhimpur Kheri Social Audit Plan ",
      type: "PDF Document",
      size: "Framework",
      category: "Guidelines",
      icon: FileText,
      description: "Comprehensive checklist framework for systematic auditing",
      downloadUrl: "https://drive.google.com/file/d/1HzsDqIAY1a8ROwNCkNOe1EXIwGUQJbBk/view?usp=sharing"
    },
    {
      title: "Ayodhya Social  Audit plan ",
      type: "Training Material",
      size: "Manual",
      category: "Training",
      icon: BookOpen,
      description: "Complete training manual for audit team members",
      downloadUrl: "https://drive.google.com/file/d/1JZHf5Jlww_NLF4O7sJeNVxIRRjYf2jOz/view?usp=sharing"
    },
    {
      title: "Bareilly Social Audit plan ",
      type: "PDF Guide",
      size: "Guide",
      category: "Policy",
      icon: FileText,
      description: "Guidelines for financial compliance in educational audits",
      downloadUrl: "https://drive.google.com/file/d/1Lmor23d89wXhYu9-0ab0s4JiHk6YadO8/view?usp=sharing"
    },
    {
      title: "Shrawsti Social Audit plan ",
      type: "Form Templates",
      size: "Forms",
      category: "Templates",
      icon: FileText,
      description: "Standardized forms for data collection during audits",
      downloadUrl: "https://drive.google.com/file/d/1OuzHSURDs61cAWdrxqb6aUjiXbfFW0H0/view?usp=sharing"
    },
    {
      title: "Ambedkar Nagar Social Audit Plan ",
      type: "Assessment Tool",
      size: "Framework",
      category: "Guidelines",
      icon: FileText,
      description: "Framework for assessing quality in educational programs",
      downloadUrl: "https://drive.google.com/file/d/1PFY6iMhMVVN8iBnQzD7B_hjfGapyxuJ4/view?usp=sharing"
    },
    {   
      title: "Gonda Social Audit Plan ",
      type: "Engagement Manual",
      size: "Guide",
      category: "Training",
      icon: BookOpen,
      description: "Guidelines for effective stakeholder engagement",
      downloadUrl: "https://drive.google.com/file/d/1RoTJQ9sX2Zvqt7YxBHXZc2xvD3AuwgcM/view?usp=sharing"
    },
    {
      title: "Sultanpur Social Audit Plan ",
      type: "Reference Manual",
      size: "Manual",
      category: "Guidelines",
      icon: FileText,
      description: "Key performance indicators for educational programs",
      downloadUrl: "https://drive.google.com/file/d/1TM_qeOuf2m3yoKMVkogce8EgwDIUKMwP/view?usp=sharing"
    },
    {
      title: "Balrampur Social Audit Plan ",
      type: "Toolkit",
      size: "Resource Kit",
      category: "Training",
      icon: BookOpen,
      description: "Tools and techniques for community participation",
      downloadUrl: "https://drive.google.com/file/d/1V-qypU-vL4jYbo6DitlaWdmUwTdaA8Sn/view?usp=sharing"
    },
    {
      title: "Bahraich Social Audit plan ",
      type: "Standards Document",
      size: "Standards",
      category: "Policy",
      icon: FileText,
      description: "Standards and protocols for maintaining audit records",
      downloadUrl: "https://drive.google.com/file/d/1ctmzSFnjHl-qGVBK_D4ijhJL3yUeo7JP/view?usp=sharing"
    },
    {
      title: "Raebareli Social Audit Plan ",
      type: "Methodology Guide",
      size: "Methods",
      category: "Guidelines",
      icon: FileText,
      description: "Methods for assessing impact of educational programs",
      downloadUrl: "https://drive.google.com/file/d/1j_kwlvpk79CLUfTsgGDkS33h4mOWMund/view?usp=sharing"
    },
    {
      title: "Sitapur  Social Audit Plan",
      type: "Protocol Document",
      size: "Protocols",
      category: "Policy",
      icon: FileText,
      description: "Protocols for ensuring transparency in audit processes",
      downloadUrl: "https://drive.google.com/file/d/1nrrxTfDDRcujn6rgWua5M2bwEUCxVyla/view?usp=sharing"
    },
    {
      title: "Amethi Social Audit plan",
      type: "Reporting Guide",
      size: "Guidelines",
      category: "Guidelines",
      icon: FileText,
      description: "Comprehensive guidelines for audit report preparation",
      downloadUrl: "https://drive.google.com/file/d/1skW8fsYc7RB34MV51-aAqgLThNHbbM0p/view?usp=sharing"
    },
    {
      title: "Barabanki Social Audit Plan ",
      type: "Best Practices",
      size: "Compendium",
      category: "Training",
      icon: BookOpen,
      description: "Collection of best practices in social audit implementation",
      downloadUrl: "https://drive.google.com/file/d/1yP5BzdGzsp2igClue8p3IFbVEGi2cuHr/view?usp=sharing"
    }
  ];

  const planSections = [
    {
      title: "Training Plan",
      type: "PDF Document",
      size: "Official Plan",
      category: "Training",
      icon: BookOpen,
      description: "Comprehensive training plan for audit team members and stakeholders",
      downloadUrl: "#"
    },
    {
      title: "Social Audit Plan",
      type: "PDF Document",
      size: "Official Plan",
      category: "Audit",
      icon: FileText,
      description: "Detailed social audit implementation plan and methodology",
      downloadUrl: "#"
    },
    {
      title: "Public Hearing Plan (In Progress",
      type: "PDF Document",
      size: "Official Plan",
      category: "Hearing",
      icon: FileText,
      description: "Guidelines and procedures for conducting public hearings",
      downloadUrl: "#"
    }
  ];

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Resource Center</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive resources, guidelines, templates, and training materials 
            for effective social audit implementation.
          </p>
        </div>

        {/* Available Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Available Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <div className="text-sm text-gray-600">
                      <span>{resource.type}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.size}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownload(resource.downloadUrl)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(resource.downloadUrl)}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Plan Sections */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Plan Documents</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {planSections.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                      <Badge variant="outline" className="text-xs">
                        {plan.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{plan.title}</CardTitle>
                    <div className="text-sm text-gray-600">
                      <span>{plan.type}</span>
                      <span className="mx-2">•</span>
                      <span>{plan.size}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownload(plan.downloadUrl)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(plan.downloadUrl)}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
