// 案主情绪状态
export type EmotionState = 'calm' | 'anxious' | 'sad' | 'angry' | 'resistant' | 'hopeful' | 'confused' | 'distressed';

// 难度等级
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

// 个案工作阶段
export type CaseStage = 'intake' | 'assessment' | 'planning' | 'intervention' | 'evaluation' | 'termination';

// 回应质量
export type ResponseQuality = 'excellent' | 'good' | 'fair' | 'poor';

// 干预技巧分类
export type TechniqueCategory = 'supportive' | 'exploratory' | 'cognitive' | 'behavioral' | 'structural' | 'leading' | 'influencing';

// 干预技巧
export interface Technique {
  id: string;
  nameZh: string;
  nameEn: string;
  category: TechniqueCategory;
  description: string;
  example: string;
  stage: CaseStage[];
}

// 案主档案
export interface ClientProfile {
  name: string;
  age: number;
  gender: string;
  occupation: string;
  avatar: string; // emoji character
  background: string;
  presentingProblem: string;
  emotionalState: EmotionState;
  keyTraits: string[];
}

// 回应选项
export interface ResponseOption {
  id: string;
  text: string;
  techniques: string[]; // technique IDs
  quality: ResponseQuality;
  feedback: string;
  nextNodeId: string;
  emotionImpact: number; // -2 to +2, how it affects client emotion
}

// 对话节点
export interface DialogueNode {
  id: string;
  stage: CaseStage;
  clientMessage: string;
  clientEmotion: EmotionState;
  clientAction?: string; // e.g., "(低头搓手)", "(沉默)"
  responseOptions: ResponseOption[];
  hints: string[];
  requiredTechniques?: string[]; // techniques that should be used
}

// 场景定义
export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  difficulty: DifficultyLevel;
  primaryStage: CaseStage; // 场景重点训练的个案工作阶段
  estimatedTime: string;
  coverColor: string;
  icon: string;
  clientProfile: ClientProfile;
  description: string;
  learningObjectives: string[];
  dialogueNodes: DialogueNode[];
}

// 会话记录
export interface SessionRecord {
  scenarioId: string;
  startTime: Date;
  responses: {
    nodeId: string;
    selectedOptionId: string;
    timestamp: Date;
  }[];
  score: AssessmentScore;
}

// 评估分数
export interface AssessmentScore {
  empathy: number; // 0-100
  questioning: number;
  intervention: number;
  structure: number;
  ethics: number;
  overall: number;
  techniquesUsed: string[];
  feedback: string[];
  strengths: string[];
  improvements: string[];
}
