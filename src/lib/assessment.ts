import type { CaseStage, ResponseQuality, AssessmentScore } from '@/data/types';

interface ResponseRecord {
  nodeId: string;
  quality: ResponseQuality;
  techniques: string[];
  stage: CaseStage;
}

const qualityScoreMap: Record<ResponseQuality, number> = {
  excellent: 100,
  good: 75,
  fair: 50,
  poor: 25,
};

// Exploration-related technique IDs
const explorationTechniques = [
  'open_questions',
  'concretization',
  'paraphrasing',
  'reflection_feelings',
  'scaling_questions',
  'socratic_questioning',
];

// Cognitive/behavioral intervention technique IDs
const interventionTechniques = [
  'cognitive_restructuring',
  'reality_testing',
  'positive_reframing',
  'alternative_thinking',
  'externalization',
  'psychoeducation',
  'homework_assignment',
];

// Structural technique IDs
const structuralTechniques = ['agenda_setting', 'summarizing'];

/**
 * Calculate a comprehensive assessment score based on user responses
 * during a practice session.
 */
export function calculateAssessment(responses: ResponseRecord[]): AssessmentScore {
  if (responses.length === 0) {
    return {
      empathy: 0,
      questioning: 0,
      intervention: 0,
      structure: 0,
      ethics: 0,
      overall: 0,
      techniquesUsed: [],
      feedback: ['未检测到任何回应记录。'],
      strengths: [],
      improvements: ['请完成至少一次完整的对话练习。'],
    };
  }

  // ---- 1. Empathy (共情能力) ----
  // Based on response quality during intake and assessment stages
  const empathyStages: CaseStage[] = ['intake', 'assessment'];
  const empathyResponses = responses.filter((r) => empathyStages.includes(r.stage));
  let empathy: number;
  if (empathyResponses.length > 0) {
    const empathySum = empathyResponses.reduce(
      (sum, r) => sum + qualityScoreMap[r.quality],
      0
    );
    empathy = Math.round(empathySum / empathyResponses.length);
  } else {
    // Fall back to all responses if no intake/assessment stages
    const fallbackSum = responses.reduce(
      (sum, r) => sum + qualityScoreMap[r.quality],
      0
    );
    empathy = Math.round(fallbackSum / responses.length);
  }

  // ---- 2. Questioning (提问探索) ----
  // Based on number of exploration techniques used + assessment stage quality
  const allTechniques = responses.flatMap((r) => r.techniques);
  const usedExplorationTechniques = new Set(
    allTechniques.filter((t) => explorationTechniques.includes(t))
  );
  const explorationCount = usedExplorationTechniques.size;
  // Technique diversity score: up to 60 points for using varied exploration techniques
  const techniqueDiversityScore = Math.min(explorationCount * 12, 60);

  const assessmentStageResponses = responses.filter((r) => r.stage === 'assessment');
  let assessmentQualityScore = 50; // default
  if (assessmentStageResponses.length > 0) {
    const assessSum = assessmentStageResponses.reduce(
      (sum, r) => sum + qualityScoreMap[r.quality],
      0
    );
    assessmentQualityScore = Math.round(assessSum / assessmentStageResponses.length);
  }
  // Combine: 60% technique diversity + 40% assessment quality
  const questioning = Math.round(techniqueDiversityScore * 0.6 + assessmentQualityScore * 0.4);

  // ---- 3. Intervention (干预技巧) ----
  // Based on intervention stage quality + cognitive/behavioral techniques used
  const interventionStageResponses = responses.filter((r) => r.stage === 'intervention');
  let interventionQuality = 50;
  if (interventionStageResponses.length > 0) {
    const intSum = interventionStageResponses.reduce(
      (sum, r) => sum + qualityScoreMap[r.quality],
      0
    );
    interventionQuality = Math.round(intSum / interventionStageResponses.length);
  }
  const usedInterventionTechniques = new Set(
    allTechniques.filter((t) => interventionTechniques.includes(t))
  );
  const intTechScore = Math.min(usedInterventionTechniques.size * 15, 60);
  // 50% quality + 50% technique usage
  const intervention = Math.round(interventionQuality * 0.5 + intTechScore * 0.5);

  // ---- 4. Structure (会谈结构) ----
  // Based on: good opening at intake + good closing at later stages + use of structural techniques
  const intakeResponses = responses.filter((r) => r.stage === 'intake');
  const laterResponses = responses.filter((r) =>
    (['evaluation', 'termination'] as CaseStage[]).includes(r.stage)
  );

  let structureScore = 50; // baseline

  // Good opening: at least one intake response with good+ quality
  if (intakeResponses.some((r) => r.quality === 'excellent' || r.quality === 'good')) {
    structureScore += 15;
  }
  // Good closing: at least one evaluation/termination response with good+ quality
  if (laterResponses.some((r) => r.quality === 'excellent' || r.quality === 'good')) {
    structureScore += 15;
  }
  // Structural techniques used
  const usedStructuralTechniques = new Set(
    allTechniques.filter((t) => structuralTechniques.includes(t))
  );
  structureScore += Math.min(usedStructuralTechniques.size * 10, 20);

  const structure = Math.min(structureScore, 100);

  // ---- 5. Ethics (伦理边界) ----
  // Starts at 100, deducted for each poor quality response
  const poorCount = responses.filter((r) => r.quality === 'poor').length;
  const ethics = Math.max(100 - poorCount * 20, 0);

  // ---- 6. Overall (加权平均) ----
  const overall = Math.round(
    empathy * 0.3 +
    questioning * 0.2 +
    intervention * 0.25 +
    structure * 0.15 +
    ethics * 0.1
  );

  // ---- Collect all unique techniques ----
  const techniquesUsed = [...new Set(allTechniques)];

  // ---- Strengths (>=75) ----
  const strengths: string[] = [];
  if (empathy >= 75) {
    strengths.push('共情能力表现优秀，能够很好地理解和回应案主的情绪需求。');
  }
  if (questioning >= 75) {
    strengths.push('探索性提问技巧丰富，善于引导案主深入表达。');
  }
  if (intervention >= 75) {
    strengths.push('干预技巧运用得当，能有效帮助案主转变认知和行为。');
  }
  if (structure >= 75) {
    strengths.push('会谈结构清晰，开场和收尾处理得体。');
  }
  if (ethics >= 75) {
    strengths.push('专业伦理意识强，始终保持良好的专业边界。');
  }

  // ---- Improvements (<60) ----
  const improvements: string[] = [];
  if (empathy < 60) {
    improvements.push('建议加强共情练习：尝试在回应前先确认案主的感受，使用"我能理解..."等句式。');
  }
  if (questioning < 60) {
    improvements.push('建议多使用开放式提问和具体化技巧，帮助案主深入探索问题。');
  }
  if (intervention < 60) {
    improvements.push('建议学习并练习认知重构、积极赋义等干预技巧，增强帮助案主改变的能力。');
  }
  if (structure < 60) {
    improvements.push('建议注意会谈的结构化：开场时设定议程，结束前进行摘要总结。');
  }
  if (ethics < 60) {
    improvements.push('请特别注意专业伦理边界，避免给出评判性或不当的回应。');
  }

  // ---- Feedback (综合性反馈) ----
  const feedback: string[] = [];

  if (overall >= 80) {
    feedback.push('整体表现优秀！你展现了良好的专业素养和临床技能。');
    feedback.push(
      `本次练习中你使用了 ${techniquesUsed.length} 种不同的干预技巧，技巧运用多样化是专业成熟的表现。`
    );
  } else if (overall >= 60) {
    feedback.push('表现良好，具备基本的专业能力，继续练习可以进一步提升。');
    feedback.push(
      `本次练习使用了 ${techniquesUsed.length} 种技巧，建议尝试更多元化的干预方法。`
    );
  } else {
    feedback.push('本次练习暴露了一些需要改进的地方，不要气馁，专业技能需要持续磨练。');
    feedback.push('建议先阅读技巧手册中的基础技巧说明，然后重新尝试该场景。');
  }

  if (strengths.length > 0 && improvements.length > 0) {
    feedback.push(
      `你在${strengths.length > 1 ? '多个' : '某个'}维度表现突出，同时在${improvements.length}个维度还有提升空间，建议有针对性地加强练习。`
    );
  }

  return {
    empathy,
    questioning,
    intervention,
    structure,
    ethics,
    overall,
    techniquesUsed,
    feedback,
    strengths,
    improvements,
  };
}

/**
 * Convert a numeric score (0-100) to a letter grade.
 */
export function getGrade(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'E';
}

/**
 * Get a Tailwind-friendly color token for a given grade.
 */
export function getGradeColor(grade: string): string {
  switch (grade) {
    case 'A':
      return 'text-emerald-600';
    case 'B':
      return 'text-blue-600';
    case 'C':
      return 'text-yellow-600';
    case 'D':
      return 'text-orange-600';
    case 'E':
      return 'text-red-600';
    default:
      return 'text-slate-600';
  }
}

/**
 * Get a background color class for a given grade.
 */
export function getGradeBgColor(grade: string): string {
  switch (grade) {
    case 'A':
      return 'bg-emerald-50';
    case 'B':
      return 'bg-blue-50';
    case 'C':
      return 'bg-yellow-50';
    case 'D':
      return 'bg-orange-50';
    case 'E':
      return 'bg-red-50';
    default:
      return 'bg-slate-50';
  }
}
