import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  LayoutDashboard, 
  Map, 
  TrendingUp, 
  Lightbulb, 
  Settings, 
  LogOut, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Clock, 
  BarChart3, 
  Award, 
  Flame, 
  Search,
  ArrowLeft,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Smartphone,
  ShieldAlert,
  Cloud,
  Cpu,
  Gamepad,
  Figma as FigmaIcon,
  Code2,
  Terminal,
  Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data & Types ---
import { CAREER_PATHS, type CareerPath, type Topic } from './data';

// --- Shared UI Components (Mocking shadcn for inline use) ---
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' | 'secondary', size?: 'sm' | 'md' | 'lg' | 'icon' }>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'gradient-primary text-white hover:opacity-90 shadow-md',
      outline: 'border border-border bg-transparent hover:bg-slate-50 text-text-primary',
      ghost: 'bg-transparent hover:bg-slate-100 text-text-primary',
      secondary: 'bg-slate-100 text-text-primary hover:bg-slate-200',
    };
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5',
      lg: 'px-8 py-3.5 text-lg',
      icon: 'p-2',
    };
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-primary/20',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('bg-surface rounded-2xl border border-border shadow-xs overflow-hidden', className)} {...props}>
    {children}
  </div>
);

const Badge = ({ children, className, variant = 'default' }: { children: React.ReactNode; className?: string; variant?: 'default' | 'success' | 'warning' | 'info' }) => {
  const variants = {
    default: 'bg-slate-100 text-slate-600',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    info: 'bg-indigo-100 text-indigo-700',
  };
  return (
    <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider', variants[variant], className)}>
      {children}
    </span>
  );
};

const Progress = ({ value, className }: { value: number; className?: string }) => (
  <div className={cn('h-2 w-full bg-slate-100 rounded-full overflow-hidden', className)}>
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      className="h-full gradient-primary" 
    />
  </div>
);

// --- Navigation ---
const Navbar = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('landing')}
        >
          <div className="p-2 gradient-primary rounded-xl text-white">
            <BookOpen size={24} />
          </div>
          <span className="text-2xl font-extrabold font-display gradient-text tracking-tight">Edupath</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">Career Paths</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => onNavigate('login')}>Login</Button>
          <Button size="sm" onClick={() => onNavigate('signup')}>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

// --- View 1: Landing Page ---
const LandingPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const features = [
    { icon: <Map className="text-indigo-500" />, title: "Personalized Roadmaps", description: "AI-curated learning paths tailored to your specific goals and background." },
    { icon: <TrendingUp className="text-violet-500" />, title: "Progress Tracking", description: "Visual dashboards to monitor your learning journey and celebrate milestones." },
    { icon: <LayoutDashboard className="text-emerald-500" />, title: "Career-Focused", description: "Paths aligned with real job market demands and industry standards." },
    { icon: <Lightbulb className="text-amber-500" />, title: "AI Suggestions", description: "Smart skill-based recommendations to help you bridge knowledge gaps." },
    { icon: <Award className="text-rose-500" />, title: "Milestone Badges", description: "Earn certified badges as you complete learning nodes and master skills." },
    { icon: <Smartphone className="text-sky-500" />, title: "Mobile Friendly", description: "Learn on any device, anytime. Seamless sync across all your platforms." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="info" className="mb-6 px-4 py-1"> ✨ AI-Powered Learning Navigation</Badge>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 font-display text-text-primary">
              Navigate Your Learning Journey <span className="gradient-text">with AI</span>
            </h1>
            <p className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
              Edupath helps you discover exactly what to learn, in the right order, to become the developer or engineer you want to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('signup')}>Get Started Free</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => {
                const el = document.getElementById('careers');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}>Explore Paths</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Visual Tree Art */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
              <div className="w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[100px] animate-pulse delay-700" />
            </div>
            
            <div className="relative w-full h-full flex items-center justify-center">
               <svg viewBox="0 0 200 200" className="w-[90%] h-[90%] drop-shadow-2xl">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M100,180 L100,120 L60,80 M100,120 L140,80 M60,80 L40,40 M60,80 L80,40 M140,80 L120,40 M140,80 L160,40"
                  fill="none" 
                  stroke="url(#grad1)" 
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {[
                  { x: 100, y: 180 }, { x: 100, y: 120 },
                  { x: 60, y: 80 }, { x: 140, y: 80 },
                  { x: 40, y: 40 }, { x: 80, y: 40 },
                  { x: 120, y: 40 }, { x: 160, y: 40 }
                ].map((node, i) => (
                  <motion.circle
                    key={i}
                    cx={node.x}
                    cy={node.y}
                    r="6"
                    className="fill-white stroke-primary stroke-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * i + 1 }}
                  />
                ))}
              </svg>
              {/* Overlay elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 glass-card p-4 rounded-2xl shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 gradient-primary rounded-lg text-white"><LayoutDashboard size={20}/></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Next Stop</div>
                    <div className="text-sm font-bold">React components</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 right-1/4 glass-card p-4 rounded-2xl shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500 rounded-lg text-white"><Award size={20}/></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Unlocked</div>
                    <div className="text-sm font-bold">CSS Master</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Why Choose Edupath?</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Our platform combines machine learning with education science to provide the most effective learning experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-border bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Explore Career Paths</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Choose your destination and let us handle the route planning.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.values(CAREER_PATHS).map((path) => (
              <Card key={path.id} className="cursor-pointer group hover:shadow-xl transition-all hover:border-primary/30" onClick={() => onNavigate('signup')}>
                <div className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{path.emoji}</div>
                  <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">{path.title}</h3>
                  <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">{path.description}</p>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-border flex items-center justify-between">
                  <div className="text-xs font-semibold text-text-muted flex items-center gap-1">
                    <Clock size={12} /> {path.duration}
                  </div>
                  <div className="text-primary font-bold text-sm tracking-tight flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Start Path <ChevronRight size={16} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">What Our Learners Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Rivera", role: "Junior Frontend Dev", quote: "Edupath saved me months of confusion. The roadmap made total sense and kept me motivated.", initial: "AR", color: "bg-indigo-500" },
              { name: "Sarah Chen", role: "Data Scientist", quote: "The AI suggestions pointed out gaps I didn't even know I had. I felt fully prepared for my interviews.", initial: "SC", color: "bg-emerald-500" },
              { name: "James Wilson", role: "App Developer", quote: "Finally, a learning platform that follows a logical progression instead of just throwing courses at you.", initial: "JW", color: "bg-violet-500" },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border relative">
                <div className="text-slate-100 absolute top-4 right-8 text-8xl font-serif">{"\""}</div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold", t.color)}>{t.initial}</div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-text-muted uppercase font-bold tracking-wider">{t.role}</div>
                  </div>
                </div>
                <p className="text-text-muted italic leading-relaxed relative z-10">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-slate-400">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 gradient-primary rounded-xl text-white">
                  <BookOpen size={20} />
                </div>
                <span className="text-2xl font-extrabold font-display text-white">Edupath</span>
              </div>
              <p className="max-w-xs leading-relaxed">
                Empowering the next generation of engineers through AI-guided education. 
                Start your journey today and reach your career destination faster.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Paths</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skill Logic</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"><Github size={20}/></a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"><Twitter size={20}/></a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"><Linkedin size={20}/></a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-6">
             <div className="text-xs font-medium uppercase tracking-widest">© 2025 Edupath. All rights reserved.</div>
             <div className="flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- View 4: Dashboard Page Content ---
const DashboardContent = ({ user, enrolledPaths, onNavigate, stats, completedSkills }: { user: any, enrolledPaths: string[], onNavigate: (v: string, id?: string) => void, stats: any, completedSkills: Record<string, string[]> }) => {
  const activities = useMemo(() => {
    const list: { text: string; time: string; icon: React.ReactNode; timestamp: number }[] = [];
    
    enrolledPaths.forEach(pathId => {
      const path = CAREER_PATHS[pathId];
      if (path) {
        list.push({
          text: `Enrolled in: ${path.title}`,
          time: 'Recently',
          icon: <Map size={16} className="text-indigo-500"/>,
          timestamp: 0 
        });
        
        const completed = completedSkills[pathId] || [];
        completed.forEach(skillId => {
           // We don't have real timestamps for skills yet, but we can find the title
           let skillTitle = 'Skill';
           path.phases.forEach(p => {
             const t = p.topics.find(topic => topic.id === skillId);
             if (t) skillTitle = t.title;
           });
           
           list.push({
             text: `Completed: ${skillTitle}`,
             time: 'Recently',
             icon: <CheckCircle2 size={16} className="text-emerald-500"/>,
             timestamp: 1
           });
        });
      }
    });

    return list.sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
  }, [enrolledPaths, completedSkills]);

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold font-display text-text-primary tracking-tight">Welcome back, {user?.name}! 👋</h1>
          <p className="text-text-muted mt-1 text-lg">You{"'"}re making great progress. {stats.totalCompleted} skills completed so far.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="gap-2" onClick={() => onNavigate('progress')}><BarChart3 size={18}/> My Analytics</Button>
           <Button className="gap-2" onClick={() => onNavigate('careerPaths')}>New Path <ChevronRight size={18}/></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Paths Enrolled', value: stats.enrolledCount, icon: <Map className="text-indigo-500"/>, change: stats.enrolledCount > 0 ? 'Active learning' : 'Getting started' },
          { label: 'Skills Completed', value: stats.totalCompleted, icon: <CheckCircle2 className="text-emerald-500"/>, change: stats.totalCompleted > 0 ? `${stats.overallProgress}% mastery` : 'Starting journey' },
          { label: 'Badges Earned', value: stats.badgesCount, icon: <Award className="text-amber-500"/>, change: stats.badgesCount > 0 ? 'Skill milestones' : 'None yet' },
          { label: 'Study Streak', value: `${stats.streak} days`, icon: <Flame className="text-rose-500"/>, change: stats.streak > 0 ? 'Keep it going!' : 'Start today' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 bg-white border-slate-200/60 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 transform group-hover:scale-175 transition-transform">
                {stat.icon}
             </div>
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">{React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}</div>
                <div>
                   <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none mb-1">{stat.label}</div>
                   <div className="text-2xl font-bold">{stat.value}</div>
                </div>
             </div>
             <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md inline-block uppercase tracking-wider">{stat.change}</div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <section>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                 <div className="w-1.5 h-8 gradient-primary rounded-full" />
                 Continue Learning
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                 {enrolledPaths.length > 0 ? enrolledPaths.slice(0, 2).map(pathId => {
                    const path = CAREER_PATHS[pathId];
                    if (!path) return null;
                    const pathTopicsCount = path.phases.reduce((acc, p) => acc + p.topics.length, 0);
                    const pathCompletedCount = completedSkills[pathId]?.length || 0;
                    const progress = Math.round((pathCompletedCount / pathTopicsCount) * 100);
                    
                    return (
                       <Card key={pathId} className="group hover:border-primary/50 transition-all">
                          <div className="p-6">
                             <div className="flex items-center justify-between mb-4">
                                <div className="text-3xl">{path.emoji}</div>
                                <Badge variant={progress > 50 ? 'success' : progress > 0 ? 'info' : 'warning'}>{progress}% Done</Badge>
                             </div>
                             <h3 className="text-xl font-bold font-display mb-1">{path.title}</h3>
                             <p className="text-xs text-text-muted mb-6 uppercase font-bold tracking-wider">
                                {pathCompletedCount} of {pathTopicsCount} Topics Mastered
                             </p>
                             <Progress value={progress} className="mb-6" />
                             <Button className="w-full gap-2" onClick={() => onNavigate('learningTree', pathId)}>
                                Continue <ChevronRight size={18}/>
                             </Button>
                          </div>
                       </Card>
                    );
                 }) : (
                   <div className="col-span-2 p-12 text-center border-2 border-dashed border-slate-200 rounded-3xl">
                      <p className="text-text-muted mb-6">You haven{"'"}t enrolled in any paths yet.</p>
                      <Button onClick={() => onNavigate('careerPaths')}>Explore Paths</Button>
                   </div>
                 )}
              </div>
           </section>

           <section>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                 <div className="w-1.5 h-8 bg-emerald-500 rounded-full" />
                 Explore New Paths
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                 {Object.values(CAREER_PATHS).filter(p => !enrolledPaths.includes(p.id)).slice(0, 4).map(path => (
                    <Card key={path.id} className="p-5 flex items-center gap-4 cursor-pointer hover:bg-slate-50 transition-colors border-slate-200/50" onClick={() => onNavigate('careerPath', path.id)}>
                       <div className="text-3xl">{path.emoji}</div>
                       <div className="flex-1">
                          <h4 className="font-bold text-sm">{path.title}</h4>
                          <div className="flex items-center gap-2 mt-0.5">
                             <Badge className="text-[9px] px-1.5 py-0">{path.difficulty}</Badge>
                             <span className="text-[10px] text-text-muted font-bold tracking-tight uppercase"><Clock size={10} className="inline mr-1"/> {path.duration}</span>
                          </div>
                       </div>
                       <ChevronRight size={16} className="text-slate-300" />
                    </Card>
                 ))}
              </div>
              <Button variant="ghost" className="mt-4 w-full text-primary font-bold" onClick={() => onNavigate('careerPaths')}>View All Paths</Button>
           </section>
        </div>

        <div className="space-y-8">
           <section>
              <h2 className="text-2xl font-bold font-display mb-6">Recent Activity</h2>
              <Card className="divide-y divide-border">
                 {activities.length > 0 ? activities.map((act, i) => (
                   <div key={i} className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                      <div className="mt-1">{act.icon}</div>
                      <div>
                         <p className="text-sm font-semibold text-text-primary">{act.text}</p>
                         <p className="text-xs text-text-muted mt-0.5 font-medium">{act.time}</p>
                      </div>
                   </div>
                 )) : (
                   <div className="p-12 text-center text-text-muted italic text-sm">
                      No recent activity. Start learning to see your progress here!
                   </div>
                 )}
              </Card>
           </section>
           
           <Card className="gradient-primary p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                 <h3 className="font-display font-bold text-xl mb-2 flex items-center gap-2"><Lightbulb size={20}/> Skill Scan</h3>
                 <p className="text-indigo-100 text-sm mb-6 leading-relaxed">Let AI scan your current profile and suggest the next best skill to learn based on job market trends.</p>
                 <Button variant="secondary" className="w-full text-primary font-bold" onClick={() => onNavigate('skillSuggestion')}>Start Scan</Button>
              </div>
              <div className="absolute -bottom-4 -right-4 text-white opacity-10 rotate-12 scale-150">
                 <Lightbulb size={120} />
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

// --- View 5: Career Path Overview ---
const CareerPathPage = ({ pathId, onNavigate, enrolledPaths, onEnroll }: { pathId: string, onNavigate: (v: string, id?: string) => void, enrolledPaths: string[], onEnroll: (id: string) => void }) => {
  const path = CAREER_PATHS[pathId];
  const isEnrolled = enrolledPaths.includes(pathId);

  if (!path) return null;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm font-bold text-text-muted uppercase tracking-widest mb-4">
        <button onClick={() => onNavigate('dashboard')} className="hover:text-primary transition-colors">Dashboard</button>
        <ChevronRight size={14} />
        <button onClick={() => onNavigate('careerPaths')} className="hover:text-primary transition-colors">Career Paths</button>
        <ChevronRight size={14} />
        <span className="text-text-primary underline decoration-primary decoration-2 underline-offset-4">{path.title}</span>
      </div>

      <Card className="relative overflow-hidden border-2 border-slate-200">
        <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 rotate-6 pointer-events-none text-9xl">{path.emoji}</div>
        <div className="p-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="space-y-6 max-w-2xl">
               <div className="flex flex-wrap items-center gap-3">
                  <div className="text-6xl">{path.emoji}</div>
                  <div>
                    <h1 className="text-5xl font-extrabold font-display tracking-tight text-text-primary">{path.title}</h1>
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                      <Badge variant="info" className="px-3 py-1 font-bold">{path.difficulty}</Badge>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-text-muted uppercase tracking-wider">
                         <Clock size={14}/> {path.duration}
                      </div>
                      {isEnrolled && <Badge variant="success" className="px-3 py-1 font-bold">✓ Enrolled</Badge>}
                    </div>
                  </div>
               </div>
               <p className="text-xl text-text-muted leading-relaxed font-medium">{path.description}</p>
               <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="px-10 py-5 text-xl" onClick={() => {
                    if (!isEnrolled) onEnroll(pathId);
                    onNavigate('learningTree', pathId);
                  }}>
                    {isEnrolled ? 'Continue Path' : 'Start This Path'}
                  </Button>
                  <Button size="lg" variant="outline" className="px-10 py-5 text-xl bg-white">Save for Later</Button>
               </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-12 pt-8">
        <section>
          <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
             <div className="w-1.5 h-8 gradient-primary rounded-full" />
             What You{"'"}ll Learn
          </h2>
          <div className="flex flex-wrap gap-3">
            {path.skills.map(skill => (
              <div key={skill} className="px-5 py-3 rounded-2xl bg-white border border-slate-200 font-bold text-slate-700 shadow-sm hover:border-primary/50 cursor-default transition-all">
                {skill}
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
               <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
               Career Outcomes
            </h2>
            <div className="space-y-4">
               {path.outcomes.map((outcome, i) => (
                 <Card key={i} className="p-6 bg-white/50 border-slate-200 hover:bg-white transition-colors">
                    <div className="flex items-center justify-between">
                       <div>
                          <h4 className="text-xl font-bold font-display">{outcome.title}</h4>
                          <div className="text-sm font-bold text-emerald-600 mt-1">{outcome.salary} avg. salary</div>
                       </div>
                       <Badge variant={outcome.demand === 'Very High' ? 'success' : 'default'} className="font-bold underline decoration-2 underline-offset-2 decoration-emerald-400">
                          {outcome.demand} Demand
                       </Badge>
                    </div>
                 </Card>
               ))}
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
               <div className="w-1.5 h-8 bg-indigo-400 rounded-full" />
               Roadmap Overview
            </h2>
            <Card className="divide-y divide-border">
              {path.phases.map((phase, i) => (
                <div key={i} className="p-5 flex items-center gap-6 group hover:bg-slate-50 transition-colors">
                   <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center font-bold text-slate-400 group-hover:border-primary group-hover:text-primary transition-all">
                      {i + 1}
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">{phase.title}</h4>
                      <p className="text-sm text-text-muted uppercase font-bold tracking-wider">{phase.topics.length} topics • Unlocked</p>
                   </div>
                </div>
              ))}
            </Card>
          </div>

          <div>
             <h2 className="text-2xl font-bold font-display mb-6">Prerequisites</h2>
             <div className="space-y-3">
                {[
                  'Basic computer literacy',
                  'Familiarity with English terms',
                  'Stable internet connection',
                  'Desire to learn and practice daily'
                ].map((pre, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-100 rounded-xl font-semibold text-slate-700 italic border-l-4 border-indigo-400">
                     <CheckCircle2 size={18} className="text-indigo-400"/> {pre}
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};
// --- View 6: Learning Tree (Roadmap) ---
const LearningTreePage = ({ pathId, onNavigate, completedSkills, onToggleSkill }: { pathId: string, onNavigate: (v: string, id?: string) => void, completedSkills: string[], onToggleSkill: (pathId: string, skillId: string) => void }) => {
  const path = CAREER_PATHS[pathId];
  const [activePhase, setActivePhase] = useState(0);

  if (!path) return null;

  const totalTopics = path.phases.reduce((acc, p) => acc + p.topics.length, 0);
  const completedCount = completedSkills.length;
  const progressPercent = Math.round((completedCount / totalTopics) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 text-sm font-bold text-text-muted uppercase tracking-widest mb-2">
             <button onClick={() => onNavigate('dashboard')} className="hover:text-primary transition-colors">Dashboard</button>
             <ChevronRight size={14}/>
             <span>Learning Roadmap</span>
           </div>
           <h1 className="text-4xl font-extrabold font-display flex items-center gap-4">
              <span className="text-5xl">{path.emoji}</span>
              {path.title} Roadmap
           </h1>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-border shadow-sm flex items-center gap-6 min-w-[240px]">
           <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-bold text-text-muted uppercase">Overall Progress</span>
                 <span className="text-sm font-bold text-primary">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} />
           </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
        {path.phases.map((phase, i) => {
          const phaseCompletedCount = phase.topics.filter(t => completedSkills.includes(t.id)).length;
          const isFull = phaseCompletedCount === phase.topics.length;
          return (
            <button
              key={phase.id}
              onClick={() => setActivePhase(i)}
              className={cn(
                "flex-1 min-w-[140px] px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2",
                activePhase === i ? "bg-white text-primary shadow-sm" : "text-text-muted hover:text-text-primary"
              )}
            >
              {isFull ? <CheckCircle2 size={16} className="text-emerald-500"/> : <span className="w-5 h-5 rounded-full border-2 border-current opacity-30 flex items-center justify-center text-[10px]">{i+1}</span>}
              {phase.title.split('—')[1] || phase.title}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={activePhase}
           initial={{ opacity: 0, x: 10 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -10 }}
           className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-display">{path.phases[activePhase].title}</h2>
            {path.phases[activePhase].topics.every(t => completedSkills.includes(t.id)) && (
               <Badge variant="success" className="animate-bounce">Phase Complete! 🎉</Badge>
            )}
          </div>
          
          <div className="space-y-4 relative">
             <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-200 z-0" />
             
             {path.phases[activePhase].topics.map((topic, i) => {
                const isCompleted = completedSkills.includes(topic.id);
                return (
                  <Card key={topic.id} className={cn(
                    "relative z-10 transition-all border-2",
                    isCompleted ? "border-emerald-200 bg-emerald-50/30" : "border-slate-100 bg-white"
                  )}>
                    <div className="p-5 flex items-center gap-6">
                       <button 
                         onClick={() => onToggleSkill(pathId, topic.id)}
                         className={cn(
                           "w-14 h-14 rounded-full flex items-center justify-center transition-all",
                           isCompleted ? "bg-emerald-500 text-white shadow-lg" : "bg-slate-50 text-slate-300 border-2 border-slate-100 hover:border-primary/50"
                         )}
                       >
                         {isCompleted ? <CheckCircle2 size={32} /> : <Circle size={32} />}
                       </button>
                       <div className="flex-1">
                          <h3 className={cn("text-xl font-bold font-display mb-1", isCompleted ? "text-emerald-900" : "text-slate-900")}>{topic.title}</h3>
                          <p className="text-sm text-text-muted leading-relaxed">{topic.description}</p>
                       </div>
                       <div className="flex items-center gap-4 text-right">
                          <Badge variant={isCompleted ? 'success' : 'default'} className="mb-2 block">{isCompleted ? 'Completed' : 'Not Started'}</Badge>
                          <input 
                            type="checkbox" 
                            checked={isCompleted} 
                            onChange={() => onToggleSkill(pathId, topic.id)}
                            className="w-5 h-5 rounded accent-emerald-500 cursor-pointer"
                          />
                       </div>
                    </div>
                  </Card>
                );
             })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- View 7: Progress Page ---
const ProgressPage = ({ enrolledPaths, completedSkills }: { enrolledPaths: string[], completedSkills: Record<string, string[]> }) => {
  const stats = useMemo(() => {
    let totalSkillsAcrossEnrolled = 0;
    let totalCompletedAcrossEnrolled = 0;

    enrolledPaths.forEach(pathId => {
      const path = CAREER_PATHS[pathId];
      if (path) {
        const pathTotal = path.phases.reduce((acc, p) => acc + p.topics.length, 0);
        const pathCompleted = completedSkills[pathId]?.length || 0;
        totalSkillsAcrossEnrolled += pathTotal;
        totalCompletedAcrossEnrolled += pathCompleted;
      }
    });

    const overallProgress = totalSkillsAcrossEnrolled > 0 
      ? Math.round((totalCompletedAcrossEnrolled / totalSkillsAcrossEnrolled) * 100) 
      : 0;

    return {
      totalCompleted: totalCompletedAcrossEnrolled,
      totalSkills: totalSkillsAcrossEnrolled,
      overallProgress
    };
  }, [enrolledPaths, completedSkills]);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-extrabold font-display">My Progress Dashboard</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="p-8 flex flex-col items-center justify-center text-center bg-white lg:col-span-1">
           <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-6">Overall Mastery</h3>
           <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                 <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                 <motion.circle 
                    cx="96" 
                    cy="96" 
                    r="88" 
                    stroke="currentColor" 
                    strokeWidth="12" 
                    fill="transparent" 
                    strokeDasharray={552.92} 
                    initial={{ strokeDashoffset: 552.92 }} 
                    animate={{ strokeDashoffset: 552.92 - (552.92 * stats.overallProgress) / 100 }} 
                    transition={{ duration: 1 }} 
                    className="text-primary" 
                 />
              </svg>
              <div className="absolute flex flex-col items-center">
                 <span className="text-5xl font-black font-display tracking-tight">{stats.overallProgress}%</span>
                 <span className="text-[10px] font-bold text-text-muted uppercase mt-1 tracking-wider">Completed</span>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-8 w-full border-t border-slate-100 pt-8 mt-4">
              <div><div className="text-2xl font-bold">{stats.totalCompleted}</div><div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Skills Done</div></div>
              <div><div className="text-2xl font-bold">{enrolledPaths.length}</div><div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Active Paths</div></div>
           </div>
        </Card>

        <div className="lg:col-span-2 space-y-8">
           <h2 className="text-2xl font-bold font-display">Path Breakdown</h2>
           <div className="space-y-4">
              {enrolledPaths.map(id => {
                 const path = CAREER_PATHS[id];
                 if (!path) return null;
                 const pathTopicsCount = path.phases.reduce((acc, p) => acc + p.topics.length, 0);
                 const count = completedSkills[id]?.length || 0;
                 const percent = Math.round((count / pathTopicsCount) * 100);
                 return (
                   <Card key={id} className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                         <span className="text-4xl">{path.emoji}</span>
                         <div className="flex-1">
                            <h4 className="font-bold text-lg">{path.title}</h4>
                            <div className="text-xs font-bold text-text-muted uppercase tracking-wider">{count} / {pathTopicsCount} Skills Completed</div>
                         </div>
                         <div className="text-2xl font-bold text-primary">{percent}%</div>
                      </div>
                      <Progress value={percent} />
                   </Card>
                 );
              })}
           </div>
        </div>
      </div>

      <section>
         <h2 className="text-2xl font-bold font-display mb-8">Achievements & Badges</h2>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: 'First Step', desc: 'Enrolled in first path', icon: <Smartphone className="text-blue-500"/>, earned: enrolledPaths.length > 0 },
              { title: 'Quick Learner', desc: 'Complete 5 skills', icon: <Flame className="text-orange-500"/>, earned: stats.totalCompleted >= 5 },
              { title: 'Phase Master', desc: 'Complete a full phase', icon: <Award className="text-amber-500"/>, earned: Object.values(completedSkills).some(l => l.length >= 4) },
              { title: 'Path Champion', desc: 'Complete a full path', icon: <CheckCircle2 className="text-emerald-500"/>, earned: Object.values(completedSkills).some(l => l.length >= 16) },
              { title: '7-Day Streak', desc: 'Study 7 days in row', icon: <TrendingUp className="text-rose-500"/>, earned: stats.streak >= 7 },
              { title: 'Seeker', desc: 'Enrolled in 3 paths', icon: <Map className="text-indigo-500"/>, earned: enrolledPaths.length >= 3 },
            ].map((badge, i) => (
              <Card key={i} className={cn("p-6 text-center space-y-3 transition-opacity", badge.earned ? "opacity-100" : "opacity-40 grayscale")}>
                 <div className="w-16 h-16 rounded-full border-2 border-slate-100 bg-white mx-auto flex items-center justify-center shadow-xs">
                    {React.cloneElement(badge.icon as React.ReactElement, { size: 28 })}
                 </div>
                 <h4 className="font-bold text-sm leading-tight">{badge.title}</h4>
                 <p className="text-[10px] text-text-muted font-medium">{badge.desc}</p>
                 {badge.earned && <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">UNLOCKED</div>}
              </Card>
            ))}
         </div>
      </section>
    </div>
  );
};

// --- View 8: Skill Suggestion ---
const SkillSuggestionPage = ({ onNavigate }: { onNavigate: (v: string, id?: string) => void }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const categories = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Python', 'SQL', 'PostgreSQL'],
    Other: ['Figma', 'Git', 'Docker', 'AWS']
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  const results = useMemo(() => {
    const builds = [];
    const jobs = [];
    if (selectedSkills.includes('HTML') && selectedSkills.includes('CSS')) {
      builds.push({ title: 'Responsive Landing Page', desc: 'Use semantic HTML and modern CSS layouts.' });
      jobs.push({ title: 'Junior Frontend Dev', match: 70 });
    }
    if (selectedSkills.includes('React.js')) {
      builds.push({ title: 'SaaS Dashboard', desc: 'Build a complex state-managed UI.' });
      jobs.push({ title: 'React Developer', match: 95 });
    }
    return { builds, jobs };
  }, [selectedSkills]);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-extrabold font-display leading-tight">What Can I Build?</h1>
        <p className="text-text-muted mt-2 text-lg">Select what you know, we{"'"}ll show you the possibilities.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
           <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest">Skill Selector</h3>
           <Card className="p-6 bg-white space-y-8">
              {Object.entries(categories).map(([cat, skills]) => (
                <div key={cat}>
                  <h4 className="text-xs font-black uppercase text-slate-400 mb-3 tracking-widest">{cat}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(s => (
                      <button key={s} onClick={() => toggleSkill(s)} className={cn("px-4 py-2 rounded-xl text-xs font-bold transition-all border-2", selectedSkills.includes(s) ? "bg-primary border-primary text-white" : "bg-white border-slate-100 italic text-slate-500 hover:border-slate-300")}>{s}</button>
                    ))}
                  </div>
                </div>
              ))}
           </Card>
        </div>

        <div className="lg:col-span-2 space-y-12">
           <section>
              <h2 className="text-2xl font-bold font-display mb-6">🏗️ Build Ideas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                 {results.builds.map((b, i) => (
                   <Card key={i} className="p-6 border-l-4 border-l-indigo-500">
                      <h4 className="font-bold text-lg mb-1">{b.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{b.desc}</p>
                   </Card>
                 ))}
                 {results.builds.length === 0 && <p className="text-text-muted italic">Select skills to see project ideas!</p>}
              </div>
           </section>
           
           <section>
              <h2 className="text-2xl font-bold font-display mb-6">💼 Jobs Match</h2>
              <div className="space-y-4">
                 {results.jobs.map((j, i) => (
                   <Card key={i} className="p-6 flex items-center justify-between">
                      <div>
                         <h4 className="text-xl font-bold font-display">{j.title}</h4>
                         <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">Ready for application</p>
                      </div>
                      <div className="text-right">
                         <div className="text-3xl font-black gradient-text">{j.match}%</div>
                         <div className="text-[10px] font-bold text-text-muted uppercase mt-0.5">Match Score</div>
                      </div>
                   </Card>
                 ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};

// --- View 9: Career Path List ---
const CareerPathsListPage = ({ onNavigate }: { onNavigate: (v: string, id: string) => void }) => {
   return (
      <div className="max-w-7xl mx-auto space-y-12">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
               <h1 className="text-4xl font-extrabold font-display tracking-tight">All Career Paths</h1>
               <p className="text-text-muted mt-1 text-lg">Detailed roadmaps for the most in-demand tech roles.</p>
            </div>
            <div className="relative w-full md:w-80">
               <input type="text" placeholder="Search paths..." className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border focus:outline-hidden" />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            </div>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.values(CAREER_PATHS).map(path => (
               <Card key={path.id} className="cursor-pointer group hover:shadow-xl transition-all hover:-translate-y-1" onClick={() => onNavigate('careerPath', path.id)}>
                  <div className="p-8">
                     <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{path.emoji}</div>
                     <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{path.title}</h3>
                     <p className="text-sm text-text-muted line-clamp-3 leading-relaxed">{path.description}</p>
                  </div>
                  <div className="px-8 py-5 bg-slate-50 border-t border-border flex items-center justify-between">
                     <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-tight"><Clock size={14}/> {path.duration}</div>
                     <div className="text-primary font-bold text-sm tracking-tight flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore <ChevronRight size={16}/></div>
                  </div>
               </Card>
            ))}
         </div>
      </div>
   )
}

const SignUpPage = ({ onNavigate, onSignUp }: { onNavigate: (view: string) => void, onSignUp: (name: string, email: string) => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password === formData.confirmPassword) {
      onSignUp(formData.name, formData.email);
    } else if (formData.password !== formData.confirmPassword) {
       alert("Passwords don't match");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="absolute top-8 left-8">
         <Button variant="ghost" onClick={() => onNavigate('landing')} className="gap-2">
            <ArrowLeft size={18} /> Back to home
         </Button>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-display mb-2">Create your account</h2>
            <p className="text-text-muted">Start your learning journey today</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold ml-1">Full Name</label>
              <input 
                type="text" required 
                className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold ml-1">Email</label>
              <input 
                type="email" required 
                className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden transition-all"
                placeholder="name@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold ml-1">Password</label>
              <input 
                type="password" required 
                className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold ml-1">Confirm Password</label>
              <input 
                type="password" required 
                className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden transition-all"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full py-4 text-lg mt-4">Sign Up</Button>
          </form>
          <div className="mt-8 text-center text-sm text-text-muted">
            Already have an account? <button onClick={() => onNavigate('login')} className="text-primary font-bold hover:underline">Login</button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

// --- View 3: Login Page ---
const LoginPage = ({ onNavigate, onLogin }: { onNavigate: (view: string) => void, onLogin: (email: string) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="absolute top-8 left-8">
         <Button variant="ghost" onClick={() => onNavigate('landing')} className="gap-2">
            <ArrowLeft size={18} /> Back to home
         </Button>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-display mb-2">Welcome back</h2>
            <p className="text-text-muted">Login to continue your journey</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold ml-1">Email</label>
              <input 
                type="email" required 
                className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden transition-all"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold ml-1">Password</label>
              <input 
                type="password" required 
                className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-hidden transition-all"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full py-4 text-lg mt-4">Login</Button>
          </form>
          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
             <p className="text-xs text-text-muted text-center italic">Hint: Use any email and password to enter</p>
          </div>
          <div className="mt-8 text-center text-sm text-text-muted">
            Don{"'"}t have an account? <button onClick={() => onNavigate('signup')} className="text-primary font-bold hover:underline">Sign Up</button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

// --- Dashboard Layout Sidebar ---
const Sidebar = ({ currentView, onNavigate, user, onLogout, overallProgress }: { currentView: string, onNavigate: (v: string) => void, user: any, onLogout: () => void, overallProgress: number }) => {
  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20}/>, label: 'Dashboard' },
    { id: 'careerPaths', icon: <Map size={20}/>, label: 'Career Paths' },
    { id: 'progress', icon: <TrendingUp size={20}/>, label: 'My Progress' },
    { id: 'skillSuggestion', icon: <Lightbulb size={20}/>, label: 'Skill Suggestions' },
    { id: 'settings', icon: <Settings size={20}/>, label: 'Settings' },
  ];

  return (
    <div className="w-72 h-screen bg-white border-r border-border flex flex-col sticky top-0 overflow-hidden">
      <div className="p-8 border-b border-border">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
          <div className="p-2 gradient-primary rounded-xl text-white">
            <BookOpen size={24} />
          </div>
          <span className="text-2xl font-extrabold font-display gradient-text tracking-tight">Edupath</span>
        </div>
      </div>
      
      <div className="p-6 border-b border-border bg-slate-50/50">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-primary font-bold shadow-sm border-2 border-white">
            {user?.name?.[0] || 'U'}
          </div>
          <div className="overflow-hidden">
            <div className="font-bold text-sm truncate">{user?.name || 'User'}</div>
            <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold truncate">{user?.email || 'user@example.com'}</div>
          </div>
        </div>
        <Progress value={overallProgress} />
        <div className="text-[10px] items-center justify-between flex mt-2 font-bold text-text-muted uppercase">
           <span>Total Mastery</span>
           <span>{overallProgress}%</span>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-1">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all group",
              currentView === item.id 
                ? "bg-indigo-50 text-primary" 
                : "text-text-muted hover:bg-slate-50 hover:text-text-primary"
            )}
          >
            <div className={cn("transition-colors", currentView === item.id ? "text-primary" : "text-slate-400 group-hover:text-primary")}>
              {item.icon}
            </div>
            {item.label}
            {currentView === item.id && (
              <motion.div layoutId="activeNav" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-border">
         <button 
           onClick={onLogout}
           className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-500 hover:bg-rose-50 transition-all"
         >
           <LogOut size={20} /> Logout
         </button>
      </div>
    </div>
  );
};
export default function App() {
  const [currentView, setCurrentView] = useState<string>('landing');
  const [currentUser, setCurrentUser] = useState<{name: string, email: string} | null>(() => {
    const saved = localStorage.getItem('edupath_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
  const [enrolledPaths, setEnrolledPaths] = useState<string[]>(() => {
    const saved = localStorage.getItem('edupath_enrolled');
    return saved ? JSON.parse(saved) : [];
  });
  const [completedSkills, setCompletedSkills] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem('edupath_progress');
    return saved ? JSON.parse(saved) : {};
  });

  // Persistence Effects
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('edupath_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('edupath_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('edupath_enrolled', JSON.stringify(enrolledPaths));
  }, [enrolledPaths]);

  useEffect(() => {
    localStorage.setItem('edupath_progress', JSON.stringify(completedSkills));
  }, [completedSkills]);

  // If user exists, go to dashboard directly on load if on landing
  useEffect(() => {
    if (currentUser && currentView === 'landing') {
      setCurrentView('dashboard');
    }
  }, []);

  // Global Derived Stats
  const stats = useMemo(() => {
    let totalSkillsAcrossEnrolled = 0;
    let totalCompletedAcrossEnrolled = 0;

    enrolledPaths.forEach(pathId => {
      const path = CAREER_PATHS[pathId];
      if (path) {
        const pathTotal = path.phases.reduce((acc, p) => acc + p.topics.length, 0);
        const pathCompleted = completedSkills[pathId]?.length || 0;
        totalSkillsAcrossEnrolled += pathTotal;
        totalCompletedAcrossEnrolled += pathCompleted;
      }
    });

    const overallProgress = totalSkillsAcrossEnrolled > 0 
      ? Math.round((totalCompletedAcrossEnrolled / totalSkillsAcrossEnrolled) * 100) 
      : 0;

    return {
      totalCompleted: totalCompletedAcrossEnrolled,
      totalSkills: totalSkillsAcrossEnrolled,
      overallProgress,
      enrolledCount: enrolledPaths.length,
      badgesCount: Math.floor(totalCompletedAcrossEnrolled / 4), // Example logic: 1 badge every 4 skills
      streak: totalCompletedAcrossEnrolled > 0 ? 1 : 0 // Set to 0 if no progress made, otherwise start at 1
    };
  }, [enrolledPaths, completedSkills]);

  const handleSignUp = (name: string, email: string) => {
    setCurrentUser({ name, email });
    setCurrentView('dashboard');
  };

  const handleLogin = (email: string) => {
    const name = email.split('@')[0];
    setCurrentUser({ name: name.charAt(0).toUpperCase() + name.slice(1), email });
    setCurrentView('dashboard');
  };

  const handleEnroll = (id: string) => {
    if (!enrolledPaths.includes(id)) {
      setEnrolledPaths([...enrolledPaths, id]);
    }
  };

  const toggleSkill = (pathId: string, skillId: string) => {
    const current = completedSkills[pathId] || [];
    if (current.includes(skillId)) {
      setCompletedSkills({ ...completedSkills, [pathId]: current.filter(id => id !== skillId) });
    } else {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#8B5CF6', '#10B981']
      });
      setCompletedSkills({ ...completedSkills, [pathId]: [...current, skillId] });
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('landing');
  };

  const navigateToPath = (view: string, id?: string) => {
    if (id) setSelectedPathId(id);
    setCurrentView(view);
  };

  const renderDashboardView = (content: React.ReactNode) => (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView} 
        onNavigate={navigateToPath} 
        user={currentUser} 
        onLogout={handleLogout}
        overallProgress={stats.overallProgress}
      />
      <main className="flex-1 p-8 lg:p-12 overflow-auto h-screen bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pb-20"
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );

  return (
    <div className="antialiased">
      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LandingPage onNavigate={navigateToPath} />
          </motion.div>
        )}
        {currentView === 'signup' && (
          <motion.div key="signup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SignUpPage onNavigate={navigateToPath} onSignUp={handleSignUp} />
          </motion.div>
        )}
        {currentView === 'login' && (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LoginPage onNavigate={navigateToPath} onLogin={handleLogin} />
          </motion.div>
        )}
        
        {currentView === 'dashboard' && renderDashboardView(<DashboardContent user={currentUser} enrolledPaths={enrolledPaths} onNavigate={navigateToPath} stats={stats} completedSkills={completedSkills} />)}
        {currentView === 'careerPath' && selectedPathId && renderDashboardView(<CareerPathPage pathId={selectedPathId} onNavigate={navigateToPath} enrolledPaths={enrolledPaths} onEnroll={handleEnroll} />)}
        {currentView === 'learningTree' && selectedPathId && renderDashboardView(<LearningTreePage pathId={selectedPathId} onNavigate={navigateToPath} completedSkills={completedSkills[selectedPathId] || []} onToggleSkill={toggleSkill} />)}
        {currentView === 'careerPaths' && renderDashboardView(<CareerPathsListPage onNavigate={navigateToPath} />)}
        {currentView === 'progress' && renderDashboardView(<ProgressPage enrolledPaths={enrolledPaths} completedSkills={completedSkills} />)}
        {currentView === 'skillSuggestion' && renderDashboardView(<SkillSuggestionPage onNavigate={navigateToPath} />)}
        
        {/* Placeholder for settings */}
        {currentView === 'settings' && 
          renderDashboardView(
            <div className="max-w-7xl mx-auto space-y-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
               <div className="p-6 bg-slate-200/50 rounded-full mb-4 animate-pulse"><Settings size={48} className="text-slate-400"/></div>
               <h1 className="text-3xl font-bold font-display">Account Settings</h1>
               <p className="text-text-muted mt-2 max-w-md">Customize your learning experience and profile settings.</p>
               <Button className="mt-8" onClick={() => setCurrentView('dashboard')}>Back to Dashboard</Button>
            </div>
          )
        }
      </AnimatePresence>
    </div>
  );
}
