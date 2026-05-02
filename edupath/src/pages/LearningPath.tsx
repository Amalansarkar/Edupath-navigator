/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { useProgress } from '@/context/ProgressContext';
import { skillTrees, SkillNode as SkillNodeType } from '@/data/skillTrees';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Search, Sparkles, Loader2, Clock, Target, Rocket, GraduationCap, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import SkillNode from '@/components/tree/SkillNode';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

export default function LearningPath() {
  const { completedSkills, toggleSkill, activePathId, setActivePath } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillNodeType | null>(null);

  const currentPath = useMemo(() => {
    return skillTrees[activePathId || 'web-dev'];
  }, [activePathId]);

  const handleGenerate = () => {
    if (!searchQuery) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // For demo, just set it to web-dev if they type web, otherwise keep current
      if (searchQuery.toLowerCase().includes('web')) setActivePath('web-dev');
      else if (searchQuery.toLowerCase().includes('machine')) setActivePath('ml');
      else if (searchQuery.toLowerCase().includes('data')) setActivePath('data-science');
      else if (searchQuery.toLowerCase().includes('software')) setActivePath('software-eng');
      else if (searchQuery.toLowerCase().includes('devops')) setActivePath('devops');
      
      toast.success('Your personalized roadmap is ready!');
    }, 1500);
  };

  const domainTabs = [
    { id: 'web-dev', name: 'Web Development' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'software-eng', name: 'Software Engineering' },
    { id: 'devops', name: 'DevOps' },
  ];

  const renderTreeNodes = (parentId?: string, level = 0) => {
    const nodes = currentPath.nodes.filter(n => n.parentId === parentId);
    return nodes.map(node => (
      <div key={node.id}>
        <SkillNode 
          node={node}
          level={level}
          isCompleted={completedSkills.includes(node.id)}
          onToggle={toggleSkill}
          onShowDetails={setSelectedSkill}
        />
        {renderTreeNodes(node.id, level + 1)}
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Search / Generation Section */}
      <section className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold tracking-tight">What do you want to become?</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Enter your career goal and we'll generate your personalized learning roadmap.</p>
        </div>
        
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-indigo-500/10 blur-2xl rounded-3xl group-focus-within:bg-indigo-500/20 transition-all" />
          <div className="relative flex items-center gap-2 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none">
            <Search className="w-5 h-5 ml-3 text-slate-400" />
            <Input 
              placeholder="e.g., Frontend Developer, Data Scientist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none focus-visible:ring-0 text-lg h-12 bg-transparent"
            />
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 h-12 font-bold shadow-lg shadow-indigo-500/20"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
           {['Frontend Developer', 'Data Scientist', 'DevOps Engineer'].map(tag => (
             <Button 
                key={tag} 
                variant="outline" 
                size="sm" 
                onClick={() => { setSearchQuery(tag); handleGenerate(); }}
                className="rounded-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-500 hover:text-indigo-600 hover:border-indigo-200"
             >
               {tag}
             </Button>
           ))}
        </div>
      </section>

      {/* Tabs */}
      <Tabs value={activePathId || 'web-dev'} onValueChange={setActivePath} className="w-full">
        <TabsList className="w-full h-auto flex flex-wrap justify-center bg-transparent gap-2">
          {domainTabs.map(tab => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className="rounded-full px-6 py-2 border border-slate-200 dark:border-slate-800 data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:border-indigo-600 font-bold transition-all"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Roadmap Tree */}
      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePathId}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="p-8 bg-slate-50/50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800"
          >
            {renderTreeNodes()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Skill Detail Dialog */}
      <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
        <DialogContent className="max-w-2xl rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
          {selectedSkill && (
            <div className="relative">
              <div className="h-32 bg-gradient-to-br from-indigo-600 to-violet-700" />
              <div className="p-8 -mt-12 bg-white dark:bg-slate-900 rounded-t-[2rem] relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                       <GraduationCap className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold">{selectedSkill.name}</DialogTitle>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge className="bg-indigo-50 text-indigo-600 border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
                          {selectedSkill.difficulty}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                          <Clock className="w-3 h-3 text-slate-300" />
                          ~{selectedSkill.estimatedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => toggleSkill(selectedSkill.id)}
                    className={cn(
                      "rounded-xl font-bold px-6 h-11",
                      completedSkills.includes(selectedSkill.id) 
                        ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100" 
                        : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                    )}
                  >
                    {completedSkills.includes(selectedSkill.id) ? (
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    {completedSkills.includes(selectedSkill.id) ? 'Completed' : 'Mark Complete'}
                  </Button>
                </div>

                <div className="space-y-8">
                  <DialogDescription className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    {selectedSkill.description}
                  </DialogDescription>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h5 className="font-bold text-sm flex items-center gap-2">
                        <Target className="w-4 h-4 text-emerald-500" />
                        What you'll learn
                      </h5>
                      <ul className="space-y-2">
                        {selectedSkill.learningOutcomes.map((item, i) => (
                          <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                             <div className="w-1 h-1 rounded-full bg-slate-300 mt-2" />
                             {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                       <h5 className="font-bold text-sm flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-indigo-500" />
                        Projects to build
                      </h5>
                      <ul className="space-y-2">
                        {selectedSkill.projects.map((item, i) => (
                          <li key={i} className="text-sm text-slate-500 flex items-start gap-2 text-indigo-400 font-medium">
                             # {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <h5 className="font-bold text-sm mb-4">Top Free Resources</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.resources.map((res, i) => (
                        <a key={i} href={res.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-600 dark:text-slate-400 hover:text-indigo-600 rounded-xl text-xs font-bold transition-all border border-slate-100 dark:border-slate-700">
                          {res.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
