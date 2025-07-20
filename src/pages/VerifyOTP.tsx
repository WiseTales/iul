
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Shield, Clock } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOTP] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const { contact, type, isLogin } = location.state || {};

  useEffect(() => {
    if (!contact) {
      navigate('/login');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [contact, navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      setError('Please enter the OTP');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact,
          otp,
          type,
          isLogin
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Verification successful! Redirecting...');
        
        localStorage.setItem('userSession', JSON.stringify({
          contact,
          name: data.name || 'User',
          type,
          authenticated: true
        }));

        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact,
          type,
          isLogin
        }),
      });

      if (response.ok) {
        setTimeLeft(300);
        setSuccess('OTP sent successfully!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError('Failed to resend OTP');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!contact) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to={isLogin ? "/login" : "/signup"} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back
          </Link>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Verify Your Account</CardTitle>
            <p className="text-gray-600 text-lg leading-relaxed">
              We've sent a verification code to{' '}
              <span className="font-semibold text-blue-600">{contact}</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-8 px-8 pb-8">
            <div className="space-y-3">
              <Label htmlFor="otp" className="text-sm font-semibold text-gray-700">Enter Verification Code</Label>
              <Input
                id="otp"
                type="text"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOTP(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="h-16 text-center text-2xl font-bold tracking-widest border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-colors duration-200"
                maxLength={6}
              />
            </div>

            <div className="text-center bg-blue-50 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 text-blue-700">
                <Clock className="h-4 w-4" />
                <p className="text-sm font-medium">
                  Code expires in: <span className="font-bold text-lg">{formatTime(timeLeft)}</span>
                </p>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                {success}
              </div>
            )}

            <Button
              onClick={handleVerifyOTP}
              disabled={isLoading || !!success}
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none"
            >
              {isLoading ? 'Verifying...' : 'Verify Code'}
            </Button>

            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm mb-3">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResendOTP}
                disabled={timeLeft > 0 || isLoading}
                className="text-blue-600 hover:text-blue-800 font-semibold disabled:text-gray-400 disabled:cursor-not-allowed hover:underline transition-all duration-200"
              >
                {timeLeft > 0 ? `Resend in ${formatTime(timeLeft)}` : 'Resend Code'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyOTP;
