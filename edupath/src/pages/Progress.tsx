/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useProgress } from '@/context/ProgressContext';
import { skillTrees, DomainPath } from '@/data/skillTrees';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell 
} from 'recharts';
import { Trophy, Award, Target, Star, Zap, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const achievements = [
  { id: 'first-step', title: 'First Step', desc: 'Complete your first skill', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 'getting-started', title: 'Getting Started', desc: 'Complete 5 skills', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'on-your-way', title: 'On Your Way', desc: 'Complete 10 skills', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 'halfway', title: 'Halfway There', desc: 'Complete 50% of a path', icon: Award, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 'master', title: 'Path Master', desc: 'Complete an entire domain', icon: Trophy, color: 'text-rose-500', bg: 'bg-rose-50' },
];

const weeklyData = [
  { day: 'Mon', count: 2 },
  { day: 'Tue', count: 5 },
  { day: 'Wed', count: 3 },
  { day: 'Thu', count: 7 },
  { day: 'Fri', count: 2 },
  { day: 'Sat', count: 4 },
  { day: 'Sun', count: 1 },
];

export default function ProgressPage() {
  const { completedSkills } = useProgress();
  const totalSkillsPossible = Object.values(skillTrees).reduce((acc, domain) => acc + (domain as DomainPath).nodes.length, 0);
  const completionPercentage = Math.round((completedSkills.length / totalSkillsPossible) * 100) || 0;

  const radialData = [
    { name: 'Progress', value: completionPercentage, fill: '#4f46e5' }
  ];

  const domains = Object.values(skillTrees).map((domain: DomainPath) => {
    const total = domain.nodes.length;
    const completed = domain.nodes.filter(n => completedSkills.includes(n.id)).length;
    const percent = Math.round((completed / total) * 100);
    return { ...domain, total, completed, percent };
  });

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Progress Ring */}
        <Card className="lg:col-span-1 border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
          <CardHeader className="text-center p-8">
            <CardTitle className="text-2xl font-bold">Overall Progress</CardTitle>
            <CardDescription>You've completed {completedSkills.length} of {totalSkillsPossible} total skills</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center pb-12">
            <div className="h-64 w-64 relative">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" barSize={20} data={radialData} startAngle={90} endAngle={90 + (360 * (completionPercentage / 100))}>
                  <RadialBar background dataKey="value" cornerRadius={10} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-slate-900 dark:text-white">{completionPercentage}%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Mastery</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
               <div className="text-center">
                  <p className="text-2xl font-bold">{completedSkills.length}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Completed</p>
               </div>
               <div className="w-[1px] h-8 bg-slate-100 mx-4" />
               <div className="text-center">
                  <p className="text-2xl font-bold">{totalSkillsPossible - completedSkills.length}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Remaining</p>
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] bg-white dark:bg-slate-900">
          <CardHeader className="p-8">
            <div className="flex items-center justify-between">
               <div>
                  <CardTitle className="text-2xl font-bold">Weekly Activity</CardTitle>
                  <CardDescription>Skills completed per day (Last 7 days)</CardDescription>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 px-4 py-2 rounded-xl text-xs font-bold">
                  Keep it up!
               </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" radius={[10, 10, 10, 10]} barSize={40}>
                    {weeklyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#4f46e5' : '#e2e8f0'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Domain Breakdown */}
      <h3 className="text-2xl font-bold tracking-tight mt-12 mb-6 px-2 text-slate-800 dark:text-slate-100 flex items-center gap-3">
        <GraduationCap className="text-indigo-600" />
        Domain Insights
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, i) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-sm hover:shadow-lg transition-all rounded-3xl overflow-hidden group">
              <div className="h-2 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <motion.div 
                  className="h-full bg-indigo-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${domain.percent}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">{domain.title}</CardTitle>
                  <span className="text-xs font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-md">{domain.percent}%</span>
                </div>
                <CardDescription className="mt-1">{domain.completed} of {domain.total} skills</CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <div className="grid grid-cols-5 gap-1 mt-4">
                   {domain.nodes.slice(0, 10).map((node, j) => (
                     <div 
                        key={j} 
                        className={cn(
                          "h-2 rounded-full transition-all duration-500",
                          completedSkills.includes(node.id) ? "bg-emerald-500" : "bg-slate-100 dark:bg-slate-800"
                        )}
                      />
                   ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Badges Section */}
      <h3 className="text-2xl font-bold tracking-tight mt-12 mb-6 px-2 text-slate-800 dark:text-slate-100 flex items-center gap-3">
        <Award className="text-amber-500" />
        Milestones & Achievements
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {achievements.map((badge, i) => {
          const isUnlocked = (badge.id === 'first-step' && completedSkills.length >= 1) ||
                            (badge.id === 'getting-started' && completedSkills.length >= 5) ||
                            (badge.id === 'on-your-way' && completedSkills.length >= 10) ||
                            (badge.id === 'halfway' && completionPercentage >= 50) ||
                            (badge.id === 'master' && completionPercentage === 100);

          return (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.05 }}
              className="group cursor-default"
            >
              <Card className={cn(
                "border-none shadow-sm rounded-3xl p-6 text-center transition-all h-full flex flex-col items-center justify-center",
                isUnlocked ? "bg-white dark:bg-slate-900" : "bg-slate-100/50 dark:bg-slate-800/50 grayscale opacity-40"
              )}>
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-12",
                  badge.bg, badge.color
                )}>
                  <badge.icon className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-sm mb-1">{badge.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase tracking-tighter">{badge.desc}</p>
                {isUnlocked && (
                  <div className="mt-3 text-emerald-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Unlocked
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
