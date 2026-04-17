import { Scenario } from '../types';
import { existingScenarios } from './existing';
import { newIntakeScenarios } from './intake';
import { newAssessmentScenarios } from './assessment';
import { newPlanningScenarios } from './planning';
import { newInterventionScenarios } from './intervention';
import { newEvaluationScenarios } from './evaluation';
import { newTerminationScenarios } from './termination';

export const scenarios: Scenario[] = [
  ...existingScenarios,
  ...newIntakeScenarios,
  ...newAssessmentScenarios,
  ...newPlanningScenarios,
  ...newInterventionScenarios,
  ...newEvaluationScenarios,
  ...newTerminationScenarios,
];

// 按 ID 查找场景
export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}

// 按难度筛选场景
export function getScenariosByDifficulty(difficulty: Scenario['difficulty']): Scenario[] {
  return scenarios.filter((s) => s.difficulty === difficulty);
}

// 获取所有场景分类
export function getCategories(): string[] {
  return Array.from(new Set(scenarios.map((s) => s.category)));
}
