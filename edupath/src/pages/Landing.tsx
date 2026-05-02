/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Map, BarChart3, Lightbulb, CheckCircle2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const features = [
  {
    icon: Map,
    title: 'AI-Generated Roadmaps',
    description: 'Personalized skill trees for any career goal, from Web Development to MLOps.'
  },
  {
    icon: BarChart3,
    title: 'Track Your Progress',
    description: 'Mark skills complete and watch your tree grow with intuitive visual feedback.'
  },
  {
    icon: Lightbulb,
    title: 'Skill Insights',
    description: 'Discover what you can build with what you know and get tailored project ideas.'
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-indigo-600 w-8 h-8" />
          <span className="font-bold text-xl tracking-tight">EduPath</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="rounded-full px-6 font-medium">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="rounded-full px-6 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 font-medium">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6 border border-indigo-100 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Learning Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-800">
            Navigate Your Learning <br /> Journey with AI
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            EduPath helps you discover what to learn, in what order, and why — powered by intelligent skill mapping and real-world career goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button className="h-14 px-8 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-lg font-bold shadow-xl shadow-indigo-500/30 group">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 text-lg font-semibold hover:bg-white transition-colors">
              See How It Works
            </Button>
          </div>
        </motion.div>

        {/* Abstract Hero Image */}
        <motion.div 
          className="mt-20 relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="w-full h-full bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center">
             <div className="text-slate-400 font-mono text-sm">[ Interactive Skill Tree Preview ]</div>
          </div>
          {/* Decorative Orbs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-400/20 blur-3xl rounded-full" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to master a skill</h2>
            <p className="text-slate-500">Built for modern learners who value clarity and efficiency.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Start your journey in 3 steps</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-slate-100 border-t border-dashed border-slate-300 -z-10" />
          {[
            { step: '1', title: 'Choose your goal', desc: 'Pick from our curated career domains or enter your own.' },
            { step: '2', title: 'Explore your path', desc: 'Navigate through a personalized, hierarchical skill tree.' },
            { step: '3', title: 'Learn and Grow', desc: 'Complete skills, build projects, and track your achievements.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-indigo-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10">Ready to start your path?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto relative z-10">Join thousands of learners building their future one skill at a time.</p>
          <Link to="/signup">
            <Button className="h-16 px-10 rounded-2xl bg-white text-indigo-600 hover:bg-slate-50 text-xl font-bold shadow-lg relative z-10">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-indigo-600 w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">EduPath</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          </div>
          <p className="text-sm text-slate-400 font-medium">© 2026 EduPath. Built with AI.</p>
        </div>
      </footer>
    </div>
  );
}
