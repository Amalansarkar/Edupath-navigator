/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/context/ProgressContext';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Moon, 
  Sun, 
  Trash2, 
  AlertCircle, 
  Palette, 
  Bell, 
  Shield,
  Save,
  RotateCcw
} from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';

const accentColors: { id: 'indigo' | 'violet' | 'emerald' | 'rose', color: string }[] = [
  { id: 'indigo', color: 'bg-indigo-600' },
  { id: 'violet', color: 'bg-violet-600' },
  { id: 'emerald', color: 'bg-emerald-600' },
  { id: 'rose', color: 'bg-rose-600' },
];

export default function Settings() {
  const { user, signup } = useAuth();
  const { resetProgress } = useProgress();
  const { theme, toggleTheme, accentColor, setAccentColor } = useTheme();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSaveProfile = () => {
    signup(email, name);
    toast.success('Settings updated successfully!');
  };

  const handleReset = () => {
    resetProgress();
    toast.success('Your learning progress has been reset.');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      {/* Profile Section */}
      <h3 className="text-2xl font-bold tracking-tight px-2 flex items-center gap-3">
        <User className="text-indigo-600" />
        Account Settings
      </h3>
      <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem]">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative group">
              <Avatar className="w-24 h-24 border-4 border-white dark:border-slate-800 shadow-xl">
                <AvatarFallback className="bg-indigo-600 text-white text-3xl font-black">
                  {user?.name?.[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-white text-slate-800 hover:bg-slate-50 shadow-md">
                 <Palette className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</Label>
                  <Input 
                    id="email" 
                    value={email}
                    disabled
                    className="h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 border-none opacity-60 cursor-not-allowed"
                  />
                </div>
              </div>
              <Button 
                onClick={handleSaveProfile}
                className="rounded-2xl h-12 px-8 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 font-bold"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appearance Section */}
      <h3 className="text-2xl font-bold tracking-tight pt-8 px-2 flex items-center gap-3">
        <Sun className="text-amber-500" />
        Appearance
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-none shadow-md rounded-[2.5rem]">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-lg font-bold">Theme Mode</CardTitle>
            <CardDescription>Switch between light and dark visual interfaces.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? <Moon className="text-slate-400" /> : <Sun className="text-amber-500" />}
              <span className="font-semibold text-sm capitalize">{theme} Mode</span>
            </div>
            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-indigo-600" />
          </CardContent>
        </Card>

        <Card className="border-none shadow-md rounded-[2.5rem]">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-lg font-bold">Accent Color</CardTitle>
            <CardDescription>Choose your preferred primary highlight color.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 flex gap-4">
             {accentColors.map(c => (
               <button 
                  key={c.id} 
                  onClick={() => setAccentColor(c.id)}
                  className={cn(
                    "w-10 h-10 rounded-full transition-all flex items-center justify-center p-1",
                    accentColor === c.id ? "ring-2 ring-offset-2 ring-indigo-500" : "hover:scale-110",
                    c.color
                  )}
               >
                 {accentColor === c.id && <div className="w-2 h-2 bg-white rounded-full" />}
               </button>
             ))}
          </CardContent>
        </Card>
      </div>

      {/* Notifications & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-none shadow-md rounded-[2.5rem]">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center gap-3">
               <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-xl text-indigo-600">
                  <Bell className="w-5 h-5" />
               </div>
               <CardTitle className="text-lg font-bold">Notifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-4">
             <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Daily Reminders</span>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-600" />
             </div>
             <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Weekly Progress Reports</span>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-600" />
             </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md rounded-[2.5rem]">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center gap-3">
               <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-xl text-slate-600">
                  <Shield className="w-5 h-5" />
               </div>
               <CardTitle className="text-lg font-bold">Privacy & Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-4">
             <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Public Profile</span>
                <Switch className="data-[state=checked]:bg-indigo-600" />
             </div>
             <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Show Progress to Friends</span>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-600" />
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <h3 className="text-2xl font-bold tracking-tight pt-8 px-2 text-rose-500 flex items-center gap-3">
        <Trash2 />
        Danger Zone
      </h3>
      <Card className="border-2 border-rose-100 dark:border-rose-900/30 bg-rose-50/30 dark:bg-rose-900/10 shadow-none rounded-[2.5rem]">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 dark:bg-rose-900/50 p-3 rounded-2xl text-rose-600 mt-1">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-rose-600">Reset All Progress</p>
                <p className="text-sm text-slate-500 mt-1">This will permanently delete your completed skills and achievements. This action cannot be undone.</p>
              </div>
            </div>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="rounded-2xl px-8 h-12 font-bold shadow-lg shadow-rose-500/20">
                  Reset Progress
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="rounded-[2.5rem] p-8 border-none shadow-2xl">
                <AlertDialogHeader>
                  <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mx-auto mb-6">
                     <AlertCircle className="w-8 h-8" />
                  </div>
                  <AlertDialogTitle className="text-2xl font-bold text-center">Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription className="text-center text-slate-500 text-base py-4">
                    This will reset all your skills, milestones, and learning streaks. You will have to start your journey from the beginning.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-row gap-3">
                  <AlertDialogCancel className="rounded-xl h-12 flex-1" variant="outline" size="default">Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleReset} className="rounded-xl h-12 flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold">
                    Yes, Reset Everything
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
