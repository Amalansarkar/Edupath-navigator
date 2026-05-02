/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/context/ProgressContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Flame, 
  Map as MapIcon, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles,
  BookOpen,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { educationalQuotes } from '@/data/quotes';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { user } = useAuth();
  const { completedSkills, activePathId } = useProgress();
  const [quote, setQuote] = useState(educationalQuotes[0]);

  useEffect(() => {
    const randomQuote = educationalQuotes[Math.floor(Math.random() * educationalQuotes.length)];
    setQuote(randomQuote);
  }, []);

  const stats = [
    { label: 'Skills Learned', value: completedSkills.length, icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Current Streak', value: '4 days', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Active Path', value: activePathId === 'web-dev' ? 'Web Dev' : 'None', icon: MapIcon, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { label: 'Progress', value: '24%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  const quickActions = [
    { title: 'Resume Learning Path', desc: 'Continue where you left off in Web Development.', icon: MapIcon, link: '/learning-path' },
    { title: 'View Progress', desc: 'See your achievements and detailed breakdowns.', icon: PieChart, link: '/progress' },
    { title: 'Explore Domains', desc: 'Discover new fields and career paths.', icon: BookOpen, link: '/learning-path' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome back, {user?.name} 👋
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Here's your learning overview for today.</p>
        </div>
        <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20">
          <Sparkles className="w-4 h-4 mr-2" />
          AI Chat Support
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className={stat.bg + " p-3 rounded-xl " + stat.color}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight">Quick Access</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickActions.map((action, i) => (
              <Link key={i} to={action.link}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 rounded-2xl cursor-pointer">
                  <CardHeader className="p-6">
                    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                      <action.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-base font-bold">{action.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed mt-2">{action.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* Activity Section */}
          <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader className="p-6 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
                <CardDescription>Your last 5 completed skills</CardDescription>
              </div>
              <Button variant="ghost" className="text-indigo-600 font-bold hover:bg-indigo-50 text-xs">View All</Button>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              {completedSkills.length > 0 ? (
                 completedSkills.slice(-5).reverse().map((skillId, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 p-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{skillId.replace(/-/g, ' ').toUpperCase()}</p>
                        <p className="text-xs text-slate-500">Completed 2 hours ago</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300" />
                  </div>
                 ))
              ) : (
                <div className="text-center py-12">
                   <div className="bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-slate-300" />
                   </div>
                   <p className="text-slate-400 text-sm">No activity yet. Start your first skill!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Motivational Sidebar */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-10 -translate-y-10" />
            <CardHeader className="p-8 pb-4 relative z-10">
              <Sparkles className="w-8 h-8 mb-4 text-indigo-200" />
              <CardTitle className="text-2xl font-bold leading-tight">Expert Tip</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-lg font-medium italic text-indigo-100 leading-relaxed mb-8">
                  "{quote.text}"
                </p>
                <p className="text-sm font-bold text-indigo-200">— {quote.author}</p>
              </div>
              <Button variant="secondary" className="w-full mt-12 rounded-xl font-bold text-indigo-600">
                Refresh Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
