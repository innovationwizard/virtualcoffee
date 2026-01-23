'use client';

import { useState } from 'react';
import Image from 'next/image'; // Ensure you have an image at /public/images/login-hero.jpg or remove this
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Coffee, Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // PRINCIPAL NOTE: This is where we will eventually fetch('http://localhost:8000/api/auth/login')
    // For now, we simulate a network delay and redirect to dashboard.
    
    setTimeout(() => {
        if (email === 'fail@test.com') {
            setError('Invalid credentials. (Try any other email)');
            setLoading(false);
        } else {
            console.log("Mock Login Success -> Redirecting");
            // In real app: Store JWT token in HttpOnly cookie here
            router.push('/dashboard'); 
        }
    }, 500);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* LEFT: The "Vibe" (Visual Context) */}
      <div className="hidden md:flex flex-col justify-between bg-coffee-900 text-white p-12 relative overflow-hidden">
        {/* Background Pattern/Image Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/images/coffee-bg.jpg')] bg-cover bg-center"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-2xl font-serif font-bold">
            <Coffee className="w-8 h-8 text-brand-primary" />
            VirtualCoffee
          </div>
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-serif font-bold leading-tight">
            Ready to pull the <br/>
            <span className="text-brand-primary">perfect shot?</span>
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-300">
             <div className="flex -space-x-2">
                {/* Mock Avatar Stack */}
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-coffee-900"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-coffee-900"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-coffee-900"></div>
             </div>
             <p>Join 1,204 baristas currently brewing.</p>
          </div>
        </div>

        <div className="relative z-10 text-xs text-gray-500">
          © 2026 Virtual Coffee Academy.
        </div>
      </div>

      {/* RIGHT: The "Gate" (Form) */}
      <div className="flex items-center justify-center p-6 bg-brand-base">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-brand-dark font-serif">Welcome back</h1>
            <p className="text-gray-500 mt-2">Continue your journey to Barista Mastery.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Error Message */}
            {error && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                placeholder="barista@home.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-xs text-brand-primary font-bold hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition"
                  placeholder="••••••••"
                />
                <Lock className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg shadow-lg hover:bg-brand-accent hover:scale-[1.01] transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Brewing...' : (
                  <>
                    Sign In <ArrowRight className="w-4 h-4" />
                  </>
              )}
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/signup" className="text-brand-primary font-bold hover:underline">
              Start Free Trial
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}