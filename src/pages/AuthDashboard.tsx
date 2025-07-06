
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, LogOut, FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserSession {
  contact: string;
  name: string;
  type: 'email' | 'phone';
  authenticated: boolean;
}

const AuthDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserSession | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('userSession');
    if (session) {
      const userData = JSON.parse(session);
      if (userData.authenticated) {
        setUser(userData);
      } else {
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userSession');
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const recentDocuments = [
    { name: "Guidelines for Social Audit", date: "2024-07-06", type: "PDF" },
    { name: "Shahjahanpur Audit Plan", date: "2024-07-05", type: "Document" },
    { name: "Training Manual", date: "2024-07-04", type: "PDF" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white rounded-full p-2">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Welcome, {user.name}</h1>
                <p className="text-gray-600 text-sm">Social Audit Portal Dashboard</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm">Name:</span>
                  <span className="font-medium">{user.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {user.type === 'email' ? (
                    <Mail className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Phone className="h-4 w-4 text-gray-500" />
                  )}
                  <span className="text-gray-600 text-sm">Contact:</span>
                  <span className="font-medium">{user.contact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm">Status:</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Verified
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  className="h-24 flex-col gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://drive.google.com/file/d/1GlrHrMf5mx2a-v7ot1DV4vQrZ-QYLQMb/view?usp=sharing', '_blank')}
                >
                  <FileText className="h-6 w-6" />
                  View Guidelines
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col gap-2"
                  onClick={() => navigate('/')}
                >
                  <Download className="h-6 w-6" />
                  Download Resources
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col gap-2"
                  onClick={() => navigate('/#training')}
                >
                  <User className="h-6 w-6" />
                  Training Materials
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col gap-2"
                  onClick={() => navigate('/#dashboard')}
                >
                  <FileText className="h-6 w-6" />
                  Audit Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Documents */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-600">{doc.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{doc.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthDashboard;
