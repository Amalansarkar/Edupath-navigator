/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SkillInsight {
  skillsRequired: string[];
  projectIdeas: string[];
  nextSteps: string[];
  jobs: string[];
}

export const skillInsights: SkillInsight[] = [
  {
    skillsRequired: ['html5', 'css3', 'js-basics'],
    projectIdeas: ['Personal Portfolio', 'Business Landing Page', 'Simple To-Do App'],
    nextSteps: ['flexbox', 'grid', 'dom'],
    jobs: ['Junior Web Developer', 'Email Developer']
  },
  {
    skillsRequired: ['html5', 'css3', 'js-basics', 'dom', 'react-basics'],
    projectIdeas: ['Task Management System', 'Weather App', 'Recipe Finder'],
    nextSteps: ['hooks', 'router', 'state-management'],
    jobs: ['Junior Frontend Developer', 'React Developer']
  }
];

export function getInsightsForSkills(completedSkillIds: string[]): SkillInsight | null {
  // Find the highest level insight that matches
  const matching = skillInsights.filter(insight => 
    insight.skillsRequired.every(skillId => completedSkillIds.includes(skillId))
  );
  
  if (matching.length === 0) return null;
  return matching[matching.length - 1]; // Return the most advanced match
}
