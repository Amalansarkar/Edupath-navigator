/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    // Mimic API call
    setTimeout(() => {
      login(email);
      setIsLoading(false);
      toast.success('Welcome back to EduPath!');
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-8 h-8" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-800">EduPath</span>
          </Link>
          <h2 className="text-xl font-medium text-slate-500">Navigate your learning journey.</h2>
        </div>

        <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden">
          <CardHeader className="space-y-1 p-8 pb-4">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your email to access your personalized path.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl border-slate-200 focus:ring-indigo-600 transition-all"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">Forgot password?</a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl border-slate-200 focus:ring-indigo-600 transition-all"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-500/20 group"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                  <>
                    Login
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="p-8 border-t border-slate-50 bg-slate-50/50 justify-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-600 font-bold hover:underline">Sign Up</Link>
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center text-xs text-slate-400">
          <p>Demo: Use any credentials to sign in.</p>
        </div>
      </div>
    </div>
  );
}
