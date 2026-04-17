import { Technique } from './types';

export const techniques: Technique[] = [
  {
    id: 'active_listening',
    nameZh: '积极倾听',
    nameEn: 'Active Listening',
    category: 'supportive',
    description: '全神贯注地聆听案主表达，通过非语言行为和简短回应表达关注，让案主感受到被理解和重视。',
    example: '嗯，我听到了。你说在那个时候感到很无助，请继续说，我在认真听。',
    stage: ['intake', 'assessment'],
  },
  {
    id: 'empathy',
    nameZh: '同理心回应',
    nameEn: 'Empathy',
    category: 'supportive',
    description: '站在案主的角度感受和理解其处境，用语言传达这种理解，帮助案主感到被看见和接纳。',
    example: '听起来你那段时间承受了很大的压力，一个人扛着这些确实很不容易，我能理解你为什么会感到这么疲惫。',
    stage: ['intake', 'assessment', 'planning', 'intervention', 'evaluation', 'termination'],
  },
  {
    id: 'normalizing',
    nameZh: '正常化',
    nameEn: 'Normalizing',
    category: 'supportive',
    description: '帮助案主认识到自己的感受或反应在特定情境下是正常的、可以被理解的，减轻其自我否定感。',
    example: '面对这样的变化，感到焦虑和不安是很正常的。很多人在类似的情况下都会有这样的反应，这说明你很在意这件事。',
    stage: ['intake', 'intervention'],
  },
  {
    id: 'validation',
    nameZh: '情感确认',
    nameEn: 'Validation',
    category: 'supportive',
    description: '承认并肯定案主情绪的合理性，不评判、不否定，让案主感到自己的感受是被允许和接纳的。',
    example: '你觉得委屈和生气是完全可以理解的，任何人在被误解的时候都会有这样的感受，你的情绪是合理的。',
    stage: ['intake', 'assessment', 'planning', 'intervention', 'evaluation', 'termination'],
  },
  {
    id: 'encouragement',
    nameZh: '鼓励',
    nameEn: 'Encouragement',
    category: 'supportive',
    description: '发现并肯定案主的优势和努力，增强其自信心和改变动力，帮助案主看到自身的力量。',
    example: '你能主动来寻求帮助，这本身就需要很大的勇气。而且从你刚才的描述中，我看到你其实已经做了很多努力。',
    stage: ['intervention', 'evaluation'],
  },
  {
    id: 'paraphrasing',
    nameZh: '内容反映/释义',
    nameEn: 'Paraphrasing',
    category: 'exploratory',
    description: '用自己的语言重新表述案主所说的核心内容，确认理解的准确性，同时帮助案主整理思路。',
    example: '如果我理解得没错的话，你是说最近工作上的压力让你晚上很难入睡，白天又没精神，形成了一个恶性循环，对吗？',
    stage: ['assessment'],
  },
  {
    id: 'reflection_feelings',
    nameZh: '情感反映',
    nameEn: 'Reflection of Feelings',
    category: 'exploratory',
    description: '识别并反馈案主话语背后的情绪感受，帮助案主觉察和理解自己的情绪，促进情感表达。',
    example: '你在说这些的时候，我感受到你内心有很多委屈，好像一直在努力却得不到认可，这让你感到很失落。',
    stage: ['assessment', 'intervention'],
  },
  {
    id: 'open_questions',
    nameZh: '开放式提问',
    nameEn: 'Open Questions',
    category: 'exploratory',
    description: '使用无法用"是"或"否"回答的问题引导案主深入表达，拓展对话空间，获取更丰富的信息。',
    example: '你能跟我多说一些，当时发生了什么让你有这样的感受吗？在那个情境中，你是怎么想的？',
    stage: ['assessment'],
  },
  {
    id: 'concretization',
    nameZh: '具体化',
    nameEn: 'Concretization',
    category: 'exploratory',
    description: '引导案主将模糊、笼统的描述具体化，明确特定的事件、感受和想法，便于深入探索和分析。',
    example: '你提到"他们总是不理解你"，能不能给我举一个最近发生的具体例子？当时具体是什么情况？',
    stage: ['assessment'],
  },
  {
    id: 'socratic_questioning',
    nameZh: '苏格拉底式提问',
    nameEn: 'Socratic Questioning',
    category: 'cognitive',
    description: '通过一系列引导性问题帮助案主自主发现思维中的不合理之处，培养批判性思维能力。',
    example: '你说自己"什么都做不好"，那我想请你想一想，最近有没有哪件事是你做得还不错的，哪怕是一件小事？',
    stage: ['assessment', 'intervention'],
  },
  {
    id: 'cognitive_restructuring',
    nameZh: '认知重构',
    nameEn: 'Cognitive Restructuring',
    category: 'cognitive',
    description: '帮助案主识别和挑战不合理的自动化思维模式，用更平衡、更客观的想法来替代扭曲认知。',
    example: '你觉得迟到一次就会被开除，让我们一起来看看这个想法——公司有没有明确规定迟到一次就辞退？你的同事迟到过吗，结果怎样？',
    stage: ['intervention'],
  },
  {
    id: 'reality_testing',
    nameZh: '现实检验',
    nameEn: 'Reality Testing',
    category: 'cognitive',
    description: '引导案主将主观想象和客观事实进行对比，检验其负面预期或灾难化思维的现实依据。',
    example: '你担心领导会因此对你印象很差。那让我们来看看，除了这次迟到，领导之前对你的工作表现有什么评价吗？',
    stage: ['intervention'],
  },
  {
    id: 'positive_reframing',
    nameZh: '积极赋义',
    nameEn: 'Positive Reframing',
    category: 'cognitive',
    description: '从不同的角度重新诠释案主的经历或特质，帮助其发现困境中的积极面和成长机会。',
    example: '你说自己太敏感了，但换个角度看，敏感也意味着你对周围的人和事有很强的感受力，这其实是一种难得的特质。',
    stage: ['intervention'],
  },
  {
    id: 'alternative_thinking',
    nameZh: '替代思维训练',
    nameEn: 'Alternative Thinking',
    category: 'cognitive',
    description: '引导案主跳出固有思维模式，学习从多个角度看待同一件事，发展灵活的认知方式。',
    example: '除了"他是故意针对我"这个解释之外，你觉得还有没有其他可能的原因？比如他当时可能正面临什么压力？',
    stage: ['intervention'],
  },
  {
    id: 'externalization',
    nameZh: '外在化',
    nameEn: 'Externalization',
    category: 'cognitive',
    description: '将问题与案主本人分离，把问题"外在化"为一个独立的存在，减少自我否定，增强应对能力。',
    example: '如果把这个焦虑看成一个不速之客，它什么时候会来拜访你？它来的时候，你通常怎么跟它相处？',
    stage: ['intervention'],
  },
  {
    id: 'agenda_setting',
    nameZh: '议程设定',
    nameEn: 'Agenda Setting',
    category: 'structural',
    description: '在会谈开始时与案主协商确定本次面谈的目标和讨论议题，建立结构化的工作框架。',
    example: '今天是我们第一次面谈，我想先听听你目前遇到的情况，然后我们一起看看可以从哪些方面入手，你觉得可以吗？',
    stage: ['intake'],
  },
  {
    id: 'summarizing',
    nameZh: '摘要/总结',
    nameEn: 'Summarizing',
    category: 'structural',
    description: '在适当时机对案主所表达的内容进行归纳总结，梳理关键信息，帮助双方理清思路和方向。',
    example: '让我来整理一下我们今天谈到的内容：你目前面临工作压力和睡眠问题，核心困扰是觉得自己不够好。我们讨论了一些新的看待问题的方式，你觉得这个总结准确吗？',
    stage: ['intake', 'assessment', 'planning', 'intervention', 'evaluation', 'termination'],
  },
  {
    id: 'homework_assignment',
    nameZh: '家庭作业布置',
    nameEn: 'Homework Assignment',
    category: 'behavioral',
    description: '在面谈结束前布置具体可行的课后练习任务，帮助案主将会谈中的收获应用到日常生活中。',
    example: '在下次见面之前，我想请你做一件事：每天晚上记录三件当天让你感到还不错的小事，不管多小都可以，我们下次一起来看看。',
    stage: ['intervention', 'evaluation'],
  },
  {
    id: 'psychoeducation',
    nameZh: '心理教育',
    nameEn: 'Psychoeducation',
    category: 'behavioral',
    description: '向案主提供与其问题相关的心理学知识，帮助其理解自身状况的成因和机制，提升认知水平。',
    example: '你描述的这些反应，其实和我们所说的"战斗或逃跑"反应有关。当人感到威胁时，身体会自动进入警戒状态，心跳加速、肌肉紧张，这是正常的生理保护机制。',
    stage: ['intervention'],
  },
  {
    id: 'scaling_questions',
    nameZh: '评量问句',
    nameEn: 'Scaling Questions',
    category: 'exploratory',
    description: '使用数字量尺帮助案主评估自身状态或问题严重程度，使抽象感受具体化，便于追踪变化。',
    example: '如果用1到10来打分，10分代表最焦虑，1分代表完全放松，你觉得现在你的焦虑大概在几分？上周这个时候呢？',
    stage: ['assessment', 'evaluation'],
  },
];

// 按 ID 查找技巧的辅助函数
export function getTechniqueById(id: string): Technique | undefined {
  return techniques.find((t) => t.id === id);
}

// 按分类筛选技巧
export function getTechniquesByCategory(category: Technique['category']): Technique[] {
  return techniques.filter((t) => t.category === category);
}

// 按阶段筛选适用技巧
export function getTechniquesByStage(stage: Technique['stage'][number]): Technique[] {
  return techniques.filter((t) => t.stage.includes(stage));
}
