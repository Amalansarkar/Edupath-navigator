/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ChevronRight, Info, Clock, BarChart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SkillNode as SkillNodeType } from '@/data/skillTrees';
import { motion } from 'motion/react';

interface SkillNodeProps {
  node: SkillNodeType;
  isCompleted: boolean;
  onToggle: (id: string) => void;
  onShowDetails: (node: SkillNodeType) => void;
  level: number;
}

export default function SkillNode({ node, isCompleted, onToggle, onShowDetails, level }: SkillNodeProps) {
  const isRoot = level === 0;
  const isCategory = node.isCategory;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "relative",
        level > 0 && "ml-8 pl-8 border-l border-dashed border-slate-200 dark:border-slate-800 pb-6 last:pb-0"
      )}
    >
      {/* Horizontal connector line */}
      {level > 0 && (
        <div className="absolute left-0 top-6 w-8 h-[1px] border-t border-dashed border-slate-200 dark:border-slate-800" />
      )}

      <div 
        className={cn(
          "flex items-center gap-4 group",
          isRoot ? "mb-8" : "mb-0"
        )}
      >
        <div 
          className={cn(
            "flex-1 p-4 rounded-2xl border transition-all duration-300",
            isRoot 
              ? "bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/20" 
              : isCategory
                ? "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/50"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {!isRoot && !isCategory && (
                <button 
                  onClick={() => onToggle(node.id)}
                  className={cn(
                    "w-6 h-6 rounded-lg flex items-center justify-center transition-all border",
                    isCompleted 
                      ? "bg-emerald-500 border-emerald-500 text-white" 
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-transparent"
                  )}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
              <div>
                <h4 className={cn(
                  "font-bold tracking-tight",
                  isRoot ? "text-xl" : "text-sm"
                )}>
                  {node.name}
                </h4>
                {!isRoot && !isCategory && (
                  <div className="flex items-center gap-3 mt-1.5 overflow-hidden">
                    <Badge variant="secondary" className={cn(
                      "text-[10px] uppercase font-bold tracking-wider px-2 py-0 border-none",
                      node.difficulty === 'Beginner' ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20" :
                      node.difficulty === 'Intermediate' ? "bg-amber-50 text-amber-600 dark:bg-amber-900/20" :
                      "bg-rose-50 text-rose-600 dark:bg-rose-900/20"
                    )}>
                      {node.difficulty}
                    </Badge>
                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {node.estimatedTime}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {!isCategory && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onShowDetails(node)}
                className={cn(
                  "rounded-xl transition-all",
                  isRoot ? "hover:bg-white/10 text-white" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-indigo-600"
                )}
              >
                <Info className="w-5 h-5" />
              </Button>
            )}
            
            {isCategory && (
              <ChevronRight className="w-4 h-4 text-slate-300" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
