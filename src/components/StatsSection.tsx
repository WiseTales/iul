import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Progress Tracking - 20% schools of each District</h2>
        </div>

        {/* Schools Covered Section */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5 text-blue-600" />
                Schools Covered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6,436</div>
                  <div className="text-sm text-gray-600">Total Schools Allotted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">14</div>
                  <div className="text-sm text-gray-600">Allotted Districts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">192</div>
                  <div className="text-sm text-gray-600">Total Blocks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">6,436</div>
                  <div className="text-sm text-gray-600">Total Schools Covered (100%)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
