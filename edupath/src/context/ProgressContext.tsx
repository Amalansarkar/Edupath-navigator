/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ProgressData {
  completedSkills: string[];
  activePathId: string | null;
}

interface ProgressContextType {
  completedSkills: string[];
  activePathId: string | null;
  toggleSkill: (skillId: string) => void;
  setActivePath: (pathId: string) => void;
  resetProgress: () => void;
  getProgressForDomain: (domainId: string, totalNodes: number) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('edupath_progress');
    return saved ? JSON.parse(saved) : { completedSkills: [], activePathId: 'web-dev' };
  });

  useEffect(() => {
    localStorage.setItem('edupath_progress', JSON.stringify(data));
  }, [data]);

  const toggleSkill = (skillId: string) => {
    setData(prev => {
      const isCompleted = prev.completedSkills.includes(skillId);
      const newSkills = isCompleted
        ? prev.completedSkills.filter(id => id !== skillId)
        : [...prev.completedSkills, skillId];
      return { ...prev, completedSkills: newSkills };
    });
  };

  const setActivePath = (pathId: string) => {
    setData(prev => ({ ...prev, activePathId: pathId }));
  };

  const resetProgress = () => {
    setData({ completedSkills: [], activePathId: null });
  };

  const getProgressForDomain = (domainId: string, totalNodes: number) => {
    // This is a simplified check, in a real app you'd filter by domain-specific skill IDs
    return (data.completedSkills.length / totalNodes) * 100;
  };

  return (
    <ProgressContext.Provider value={{ 
      completedSkills: data.completedSkills, 
      activePathId: data.activePathId, 
      toggleSkill, 
      setActivePath, 
      resetProgress,
      getProgressForDomain
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
