
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Phone, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('phone');
  const [contact, setContact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!contact.trim()) {
      setError('Please enter your phone number');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact,
          type: contactMethod
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/verify-otp', { state: { contact, type: contactMethod, isLogin: false } });
      } else {
        setError(data.message || 'Failed to create account');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Create Account</CardTitle>
            <p className="text-gray-600 text-lg leading-relaxed">Join us to get started with your journey</p>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-8">
            {/* Contact Method Toggle */}
            <div className="flex rounded-xl border-2 border-gray-100 p-1 bg-gray-50">
              <button
                type="button"
                onClick={() => setContactMethod('email')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  contactMethod === 'email'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-white hover:shadow-sm'
                }`}
              >
                <Mail className="h-4 w-4" />
                Email
              </button>
              <button
                type="button"
                onClick={() => setContactMethod('phone')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  contactMethod === 'phone'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-white hover:shadow-sm'
                }`}
              >
                <Phone className="h-4 w-4" />
                Phone
              </button>
            </div>

            <div className="space-y-3">
              <Label htmlFor="contact" className="text-sm font-semibold text-gray-700">
                Phone Number
              </Label>
              <Input
                id="contact"
                type="tel"
                placeholder="Enter your phone number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-colors duration-200"
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                {error}
              </div>
            )}

            <Button
              onClick={handleSignup}
              disabled={isLoading}
              className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {isLoading ? 'Creating Account...' : 'Get OTP'}
            </Button>

            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-all duration-200">
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
