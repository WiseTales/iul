import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const TrainingSection = () => {
  const allModules = [ 

  {
  title: "All Letters and Circulars – Social Audit of Schools",
  description: "Directive for conducting Social Audit in 14 districts, including planning, manpower, and timelines.",
  developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
  openUrl: "https://drive.google.com/file/d/1x1I9_RHGlh4lcGg-JKzRMnaYlezi6kgM/view?usp=sharing",
  downloadUrl: "https://drive.google.com/uc?export=download&id=1x1I9_RHGlh4lcGg-JKzRMnaYlezi6kgM"
},



    {
  title: "Data of Social Audit team",
  description: "Schools, Audit Steps, and Manpower for Each District.",
  
  openUrl: "https://drive.google.com/file/d/1SlFYciFon1HyNj6IUe6WX_aiV-i4pA5f/view?usp=sharing", 
  downloadUrl: "https://drive.google.com/uc?export=download&id=1SlFYciFon1HyNj6IUe6WX_aiV-i4pA5f"
},

    {
  title: "Official Circulars and Letters– Social Audit of Schools",
 
  developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
  openUrl: "https://drive.google.com/file/d/1uQZ82jIYd2jA1s3lvO2ZjqAjOLW5MmZD/view?usp=sharing",
  downloadUrl: "https://drive.google.com/uc?export=download&id=1uQZ82jIYd2jA1s3lvO2ZjqAjOLW5MmZD"
},

    
  {
    title: "Block Level Training Plan of SAFT for Gonda",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/10LJ5adywBLsfS9O82FD-9i46BPtUm0ts/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=10LJ5adywBLsfS9O82FD-9i46BPtUm0ts"
  },
  {
    title: "Block Level Training Plan of SAFT for Sultanpur",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/11BemiHEDqhA1ZfL31JOc3Efw0mq-fSZp/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=11BemiHEDqhA1ZfL31JOc3Efw0mq-fSZp"
  },
 
  {
    title: "Block Level Training Plan of SAFT for ",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1B7elTFWHEFxA1KTRCpbuEeL2XWzrIcfL/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1B7elTFWHEFxA1KTRCpbuEeL2XWzrIcfL"
  },
  {
    title: "Block Level Training Plan of SAFT for Bareilly",
    
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1Cf4GB6zydsm18nglHNsqbQTRU8zvYW49/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1Cf4GB6zydsm18nglHNsqbQTRU8zvYW49"
  },
  {
    title: "District Level Training Plan for CSA Training",
    
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1GBLFp_W9Uw4HAPzNRrvZJFBl03j_Ofjp/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1GBLFp_W9Uw4HAPzNRrvZJFBl03j_Ofjp"
  },
  {
    title: "Block Level Training Plan of SAFT for Bahraich",
  
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1Gl3D0Vrj94zyqQO6ZMRmxAXYx_GOMHxa/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1Gl3D0Vrj94zyqQO6ZMRmxAXYx_GOMHxa"
  },
  {
    title: "Block Level Training Plan of SAFT for Shahjahanpur",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1GxeV140mzktsEZqrRjzhfSSEMOvkHrRM/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1GxeV140mzktsEZqrRjzhfSSEMOvkHrRM"
  },
  {
    title: "Block Level Training Plan of SAFT for Shrawasti",

    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1I54IAnXJ3jKGXWFGbGG3ipaUyAtaWAPl/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1I54IAnXJ3jKGXWFGbGG3ipaUyAtaWAPl"
  },
  {
    title: "Block Level Training Plan of SAFT for Rae Bareli",
    
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1L8SiIhh5rmvoqKMW9aSap6IOjDWQX4uj/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1L8SiIhh5rmvoqKMW9aSap6IOjDWQX4uj"
  },
  {
    title: "Block Level Training Plan of SAFT for Ayodhya",
    description: "Directive for conducting Social Audit in 14 districts, including planning, manpower, and timelines.",
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1LRyzQ7-aZNkN9_oBgIUeAGn7Qe01asCy/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1LRyzQ7-aZNkN9_oBgIUeAGn7Qe01asCy"
  },
  {
    title: "Official Circulars – Social Audit of Schools",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1OjPKqsKmHqTm2Pyvuie6qV-pGp_vojsP/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1OjPKqsKmHqTm2Pyvuie6qV-pGp_vojsP"
  },
  {
    title: "Letter",
    description: "Directive for conducting Social Audit in 14 districts, including planning, manpower, and timelines.",
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1P716LVipBBipcrSWvSWmiK6zwsFf_Z6W/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1P716LVipBBipcrSWvSWmiK6zwsFf_Z6W"
  },
  {
    title: "Ambedkar Nagar Audit Plan",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://docs.google.com/spreadsheets/d/1RJsOjA1_gU6C3oL8ZVdTPayAO8qnqJNm/edit?usp=sharing&ouid=117567334419080675185&rtpof=true&sd=true", 
    downloadUrl: "https://docs.google.com/spreadsheets/d/1RJsOjA1_gU6C3oL8ZVdTPayAO8qnqJNm/export?format=xlsx"
  },
  {
    title: "Block Level Training Plan of SAFT for Lakhimpur Kheri",
    
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1TGq-g53cO0GDUe9Wf08mm7tKRE79QRyT/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1TGq-g53cO0GDUe9Wf08mm7tKRE79QRyT"
  },
  {
    title: "Block Level Training Plan of SAFT for Barabanki",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1W3QGGv2vBv79KPmYgScL6cxUkVhPJ-en/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1W3QGGv2vBv79KPmYgScL6cxUkVhPJ-en"
  },
  {
    title: "Block Level Training Plan of SAFT for Sitapur",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1ZhQTzpkqM2Ffd9jTD5l-3quoX2_PSFVv/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1ZhQTzpkqM2Ffd9jTD5l-3quoX2_PSFVv"
  },
  {
    title: "Bareilly Audit Plan",
    
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://docs.google.com/spreadsheets/d/1ep42DG9BOLfXV8L8LBrLGr5-u2PpwaAa/edit?usp=sharing&ouid=117567334419080675185&rtpof=true&sd=true", 
    downloadUrl: "https://docs.google.com/spreadsheets/d/1ep42DG9BOLfXV8L8LBrLGr5-u2PpwaAa/export?format=xlsx"
  },
  {
    title: "Block Level Training Plan of SAFT for Ambedkar Nagar",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1h-D_zzsD87nJ8WMwh_NTaAtX2i8RwCTP/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1h-D_zzsD87nJ8WMwh_NTaAtX2i8RwCTP"
  },
  {
    title: "Letter - BSA Bahraich",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1l4Ud1Mtfw4w8eczYdutqLgLNpe8kP2kp/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1l4Ud1Mtfw4w8eczYdutqLgLNpe8kP2kp"
  },
  {
    title: "Block Level Training Plan of SAFT for Balrampur",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1tSz6GPxwpPAKCqf72kwOu9Jg_A-iOKAd/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1tSz6GPxwpPAKCqf72kwOu9Jg_A-iOKAd"
  },
  {
    title: "Rae Bareli Audit Plan",
    
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://docs.google.com/spreadsheets/d/1xxA19j2hwOVQAhj3Lu_sljkl4cpu0ffF/edit?usp=sharing&ouid=117567334419080675185&rtpof=true&sd=true", 
    downloadUrl: "https://docs.google.com/spreadsheets/d/1xxA19j2hwOVQAhj3Lu_sljkl4cpu0ffF/export?format=xlsx"
  },
  {
    title: "Block Level Training Plan of SAFT for Amethi",
    
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://drive.google.com/file/d/1ypoCxU0VbidIuMEB1CDveXuIeR7B4zvd/view?usp=sharing", 
    downloadUrl: "https://drive.google.com/uc?export=download&id=1ypoCxU0VbidIuMEB1CDveXuIeR7B4zvd"
  },
  {
    title: "Lakhimpurkheri Audit Plan",
   
    developed: "Integral University, Lucknow – Social Audit Project, Samagra Shiksha",
    openUrl: "https://docs.google.com/spreadsheets/d/1zMi65dsnfjlxilSifo7VwZOT13kPvtvY/edit?usp=sharing&ouid=117567334419080675185&rtpof=true&sd=true", 
    downloadUrl: "https://docs.google.com/spreadsheets/d/1zMi65dsnfjlxilSifo7VwZOT13kPvtvY/export?format=xlsx"
  }


    
   
    // Add new entries here
    
   
  ];



  return (
    <section id="training" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Capacity Building</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training program to build capacity of MTs / CSAs / SAFTs based on 
            03 training modules, developed by NCERT, New Delhi.
          </p>
        </div>

        {/* Official Circulars and Letters (merged) */}
        <div className="mb-16">
        
          <div className="grid md:grid-cols-3 gap-6">
            {allModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{module.title}</CardTitle>
                  <p className="text-gray-600 text-center">{module.description}</p>
                 
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {module.openUrl && (
                      <a href={module.openUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Open 
                        </Button>
                      </a>
                    )}
                    {module.downloadUrl && (
                      <a href={module.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1" download>
                        <Button className="w-full flex items-center justify-center" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </a>
                    )}
                    {!module.openUrl && !module.downloadUrl && (
                      <div className="text-center text-sm text-gray-500 w-full">
                        Link placeholder — add URL in code.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default TrainingSection;
