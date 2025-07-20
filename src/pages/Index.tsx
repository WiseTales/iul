
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSamagraShiksha from '@/components/AboutSamagraShiksha';
import SocialAuditInfo from '@/components/SocialAuditInfo';
import StatsSection from '@/components/StatsSection';
import ProcessFlow from '@/components/ProcessFlow';
import TrainingSection from '@/components/TrainingSection';
import Dashboard from '@/components/Dashboard';
import ResourceCenter from '@/components/ResourceCenter';
import PostSAReports from '@/components/PostSAReports';
import WhosWho from '@/components/WhosWho';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <AboutSamagraShiksha />
      <SocialAuditInfo />
      <StatsSection />
      <ProcessFlow />
      <TrainingSection />
      <Dashboard />
      <ResourceCenter />
      <PostSAReports />
      <WhosWho />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Index;
