import { Scenario } from '../types';

export const newEvaluationScenarios: Scenario[] = [
  // ============================================================
  // 场景1：丧亲辅导进展评估（黄女士）
  // ============================================================
  {
    id: 'grief-progress-eval',
    title: '丧亲辅导进展评估',
    subtitle: '丧偶半年的黄女士是否走出阴影',
    category: '哀伤辅导',
    difficulty: 'intermediate',
    primaryStage: 'evaluation',
    estimatedTime: '25-35分钟',
    coverColor: '#F5F3FF, #EDE9FE',
    icon: '🕊️',
    clientProfile: {
      name: '黄女士',
      age: 50,
      gender: '女',
      occupation: '中学语文教师',
      avatar: '👩‍🏫',
      background:
        '黄女士的丈夫半年前因心脏病突发去世。她经历了严重的哀伤反应,接受了8次个案辅导。最近情况有所好转,能正常上班了,但偶尔仍会在特定场景下触发悲伤。今天是第九次面谈,进行阶段性评估。',
      presentingProblem:
        '丧偶后的哀伤反应，经过8次辅导有所好转，但特定场景仍会触发悲伤，需要进行阶段性评估。',
      emotionalState: 'calm',
      keyTraits: ['哀伤处理中', '有进步', '特定触发场景', '社会功能恢复', '偶尔退回'],
    },
    description:
      '黄女士的丈夫半年前突然去世，她经历了严重的哀伤反应。经过8次个案辅导，她的情况有明显好转，已经能正常上班。本次面谈是第九次，重点进行阶段性评估，回顾辅导成效，评估案主的哀伤处理进展，并讨论下一步计划。学习者将练习运用成效评估、量表提问、鼓励等技巧来系统回顾案主的进步与仍需关注的方面。',
    learningObjectives: [
      '练习运用成效评估技巧系统回顾辅导进展',
      '学习使用量表提问评估案主的主观改善程度',
      '掌握在评估阶段肯定案主进步的同时关注仍存在的困难',
      '练习运用情感反映回应案主在评估过程中可能出现的复杂情绪',
      '学习在评估基础上进行阶段性总结和计划调整',
    ],
    dialogueNodes: [
      {
        id: 'gp-node-1',
        stage: 'evaluation',
        clientMessage:
          '老师好。今天来之前我还在想，这段时间好像确实好了一些，但又说不上来具体好在哪里。',
        clientEmotion: 'calm',
        clientAction: '(轻轻坐下，表情平和但略显疲惫)',
        hints: [
          '案主感受到了进步但难以具体化，可以用量表提问帮助她量化',
          '这是一个很好的评估起点，可以引导案主回顾变化',
          '注意使用成效评估的结构化方法来开启面谈',
        ],
        requiredTechniques: ['outcome_evaluation', 'scaling_questions'],
        responseOptions: [
          {
            id: 'gp-1a',
            text: '黄女士，你说感觉好了一些，这很重要。我们今天正好来一起回顾一下这段时间的变化。如果用0到10分来表示，0分是最开始来的时候最难受的状态，10分是你觉得完全调整好了，你现在会给自己打几分？',
            techniques: ['outcome_evaluation', 'scaling_questions', 'encouragement'],
            quality: 'excellent',
            feedback:
              '非常好的评估开场。首先肯定了案主"好了一些"的感受，然后自然引入量表提问，帮助案主将模糊的感受具体化。0-10分的量表提问是评估阶段最实用的工具之一，能够直观呈现案主的主观改善程度，也为后续讨论提供了具体的参照点。',
            nextNodeId: 'gp-node-2',
            emotionImpact: 1,
          },
          {
            id: 'gp-1b',
            text: '嗯，能感觉到好了一些就是进步。你觉得跟刚开始来的时候比，最大的变化是什么？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '用开放式提问引导案主回顾变化，方向正确。但缺少结构化的评估框架，案主可能因为"说不上来"而难以回答这个开放性问题。在评估阶段，适当使用量表提问等结构化工具会更有效。',
            nextNodeId: 'gp-node-2',
            emotionImpact: 0,
          },
          {
            id: 'gp-1c',
            text: '好了一些就好。那你现在还会经常想起你先生吗？',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '直接追问是否想起逝者，虽然与主题相关，但方式过于突然，没有先建立评估的框架。而且"经常想起"这个问题暗含着"不想起才是好的"的预设，但哀伤辅导的目标不是遗忘，而是学会与丧失共处。在评估阶段，应先整体回顾，再深入具体议题。',
            nextNodeId: 'gp-node-2',
            emotionImpact: -1,
          },
          {
            id: 'gp-1d',
            text: '半年了，时间确实会慢慢冲淡一切的。你现在能上班就说明已经走出来了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"时间冲淡一切"和"走出来了"都是对哀伤过程的简单化理解。首先，哀伤不是被时间"冲淡"的，而是通过主动的心理加工来适应的；其次，能上班不等于"走出来"，社会功能恢复和内心的哀伤处理是不同层面的。这种回应否定了案主仍存在的困难，也不符合评估阶段需要全面了解的要求。',
            nextNodeId: 'gp-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'gp-node-2',
        stage: 'evaluation',
        clientMessage:
          '嗯...我觉得大概6分吧。以前可能只有2分。现在大部分时间是正常的，上课也能投入。但是有时候，比如看到他以前坐的那把椅子，或者做饭的时候习惯性做两个人的量...就会突然很难受。',
        clientEmotion: 'sad',
        clientAction: '(眼眶微红，声音略微发颤)',
        hints: [
          '案主从2分进步到6分，这是非常显著的改善，需要充分肯定',
          '特定场景触发悲伤是哀伤过程中的正常现象，需要正常化',
          '注意案主提到的具体触发场景，这些细节很有临床意义',
        ],
        requiredTechniques: ['encouragement', 'reflection_feelings'],
        responseOptions: [
          {
            id: 'gp-2a',
            text: '从2分到6分，黄女士，这是非常大的进步。我想让你知道，你为此付出了很多努力。至于那些特定的时刻——看到他的椅子、做饭时的习惯——这些触发是很自然的。它们说明你和先生之间的情感联结很深，这些记忆不需要被消除，重要的是你在这些时刻能够承受和度过。',
            techniques: ['encouragement', 'reflection_feelings', 'normalizing', 'empathy'],
            quality: 'excellent',
            feedback:
              '出色的评估回应。首先用具体数据（2分到6分）肯定了案主的进步，让她看到自己的努力。然后对触发场景进行了正常化处理，并赋予了积极的意义——这些记忆不是"没走出来"的标志，而是情感联结的体现。最后提出了关键的哀伤辅导观点：目标不是消除悲伤，而是增强承受力。',
            nextNodeId: 'gp-node-3',
            emotionImpact: 2,
          },
          {
            id: 'gp-2b',
            text: '从2分到6分，进步很大。那些让你难受的时刻，你现在通常是怎么度过的？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了进步并引导案主反思自己的应对方式，这对评估来说是有价值的信息。但对案主当下微红的眼眶和发颤的声音缺少情感层面的回应。评估不仅是信息收集，也要关注案主在评估过程中的即时情绪。',
            nextNodeId: 'gp-node-3',
            emotionImpact: 1,
          },
          {
            id: 'gp-2c',
            text: '那些场景确实会让人难受。你有没有试过把那把椅子收起来，或者刻意只做一个人的饭？',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '给出了实际建议，但方向有问题。在哀伤辅导中，建议案主移除与逝者相关的物品或改变日常习惯，本质上是在建议"回避"和"切断联结"。这不符合现代哀伤理论——健康的哀伤适应是学会与这些记忆共处，而不是消除它们。而且评估阶段的重点是了解现状，不是急于给建议。',
            nextNodeId: 'gp-node-3',
            emotionImpact: -1,
          },
          {
            id: 'gp-2d',
            text: '6分已经不错了。你先生去世半年了，这些反应说明你还没有完全放下，可能需要更长时间。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"还没完全放下"暗示着"应该放下"，这是对哀伤的错误理解。丧偶不是一个需要"放下"的事情，而是需要学会在新的生活状态中重新建立意义。用"放下"来衡量案主的进展会给她施加不必要的压力，也否定了她与先生之间正常的情感联结。',
            nextNodeId: 'gp-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'gp-node-3',
        stage: 'evaluation',
        clientMessage:
          '谢谢你这样说。其实我自己也在想，我是不是应该更坚强一点？我的同事说我比以前好多了，学生们也说黄老师又开始笑了。但我总觉得...我好像在假装，表面上恢复了，但心里还是有一块空的。',
        clientEmotion: 'sad',
        clientAction: '(双手交握，低声说)',
        hints: [
          '案主出现了"假装"的感觉，这涉及到外在恢复和内在感受的不一致',
          '社会功能的恢复和情感的完全整合是不同的过程，需要帮助案主理解这一点',
          '案主的自我怀疑（是不是应该更坚强）需要被温和地回应',
        ],
        requiredTechniques: ['empathy', 'normalizing'],
        responseOptions: [
          {
            id: 'gp-3a',
            text: '你说的"假装"和"心里空了一块"，我听到了。其实你描述的是哀伤过程中一个很常见的阶段——外在的生活功能开始恢复了，但内心的整合还需要时间。这不是假装，也不是不够坚强。你在工作中能笑、能投入，说明你有很好的心理弹性；同时内心还有一块空的地方，那是因为那段感情很真实。这两者并不矛盾。',
            techniques: ['empathy', 'normalizing', 'psychoeducation', 'validation'],
            quality: 'excellent',
            feedback:
              '极好的回应，准确捕捉了案主的核心困惑并给予了专业的心理教育。将"假装"重新框架为哀伤过程中外在恢复和内在整合的不同步，既正常化了案主的体验，又帮助她理解了自己的状态。"这两者并不矛盾"这句话非常有力，解除了案主非此即彼的焦虑。',
            nextNodeId: 'gp-node-4',
            emotionImpact: 2,
          },
          {
            id: 'gp-3b',
            text: '你不需要更坚强。同事和学生看到你的变化是真实的进步，而你心里那块空的地方也是真实的。你觉得那个"空"的感觉，是什么样的？',
            techniques: ['validation', 'empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '首先否定了"应该更坚强"的自我要求，然后确认了外在进步和内在空虚都是真实的。用开放式提问进一步探索"空"的感觉，方向正确。但可以加入更多关于哀伤过程的正常化解释，帮助案主理解这种不一致感是正常的阶段性现象。',
            nextNodeId: 'gp-node-4',
            emotionImpact: 1,
          },
          {
            id: 'gp-3c',
            text: '你的同事和学生都说你好多了，这说明你确实在进步啊。不要总是往消极的方面想。',
            techniques: ['encouragement'],
            quality: 'fair',
            feedback:
              '用外部反馈来证明进步，但忽略了案主内在感受的真实性。"不要往消极方面想"是对案主自我怀疑的否定。案主说的"心里空了一块"不是消极思维，而是对自己真实状态的准确描述。评估阶段需要全面了解案主的内外状态，不能只看外在指标而忽视内在体验。',
            nextNodeId: 'gp-node-4',
            emotionImpact: -1,
          },
          {
            id: 'gp-3d',
            text: '假装也是一种保护自己的方式。你先假装着，慢慢就变成真的了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '这个回应将"假装"合理化为一种策略，完全偏离了专业方向。哀伤辅导的目标是帮助案主真实地面对和处理丧失，而不是鼓励回避或压抑真实感受。"慢慢变成真的"是一种误导——被压抑的哀伤不会自动消失，反而可能在日后以更复杂的方式爆发（如延迟哀伤、身体症状等）。',
            nextNodeId: 'gp-node-4',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'gp-node-4',
        stage: 'evaluation',
        clientMessage:
          '嗯，这样说我心里舒服多了。其实还有一件事...上个周末是我们的结婚纪念日。我一个人去了我们以前常去的公园，坐了一个下午。那天哭了很久，但哭完之后反而觉得轻松了一些。不知道这样做对不对。',
        clientEmotion: 'calm',
        clientAction: '(微微抬头，眼中有泪光但表情平静)',
        hints: [
          '案主独自去纪念性场所并允许自己哭泣，这是非常积极的哀伤处理行为',
          '她问"对不对"说明需要被肯定这种做法是健康的',
          '这是评估中发现的重要积极指标——案主已经学会了主动面对而非回避',
        ],
        requiredTechniques: ['encouragement', 'positive_reframing'],
        responseOptions: [
          {
            id: 'gp-4a',
            text: '黄女士，你做的这件事，在我看来是非常有勇气的。你没有回避结婚纪念日，而是选择去面对——去那个有意义的地方，允许自己悲伤，允许自己哭。而且你注意到了，哭完之后反而觉得轻松。这说明你已经在学习如何面对和处理这些情感了。和最开始相比，这是非常大的改变。',
            techniques: ['encouragement', 'positive_reframing', 'outcome_evaluation'],
            quality: 'excellent',
            feedback:
              '完美的积极重构和成效评估。将案主的行为诠释为"勇气"和"面对"，而非被动的悲伤反应。特别指出了案主自己觉察到的变化（"哭完反而轻松"），并将其与初始状态对比，让案主看到自己的成长。这种回应既确认了行为的健康性，又帮助案主建立了自我效能感。',
            nextNodeId: 'gp-node-5',
            emotionImpact: 2,
          },
          {
            id: 'gp-4b',
            text: '当然是对的。你去纪念日相关的地方，允许自己表达情感，这是一种很健康的方式。你以前也会这样做吗？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '直接肯定了行为的正确性，并通过提问了解案主以前的应对方式，有助于评估变化。但"当然是对的"这种简单肯定缺少具体的解释，案主可能不完全理解为什么这是好的。可以更详细地解释这种主动面对而非回避的意义。',
            nextNodeId: 'gp-node-5',
            emotionImpact: 1,
          },
          {
            id: 'gp-4c',
            text: '一个人坐了一个下午，会不会太辛苦了？下次可以叫朋友陪你一起去。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '关心案主的感受是好的，但建议"叫朋友陪"暗示独自面对是不好的。实际上，案主选择独自去、独自哭、然后感到轻松，这整个过程展现了她的内在力量和自主处理哀伤的能力。评估阶段应识别和肯定案主的优势和进步，而不是急于提出替代方案。',
            nextNodeId: 'gp-node-5',
            emotionImpact: -1,
          },
          {
            id: 'gp-4d',
            text: '哭了一下午确实可以释放情绪。不过你要注意不能总是沉浸在过去，也要向前看。',
            techniques: [],
            quality: 'poor',
            feedback:
              '前半句虽然承认了哭泣的释放作用，但后半句"不能总是沉浸在过去""要向前看"立刻否定了案主行为的价值。这是一种典型的"正确但有害"的建议——在社会文化层面好像说得对，但在哀伤辅导层面，它暗示案主"在一个不该去的地方待了太久"。一个结婚纪念日去有意义的地方追思，不是"沉浸在过去"，而是健康的哀悼仪式。',
            nextNodeId: 'gp-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'gp-node-5',
        stage: 'evaluation',
        clientMessage:
          '我以前肯定不敢去那个公园的。刚开始那几个月，我连他的照片都不敢看。现在虽然还是会难受，但不会像以前那样完全崩溃了。不过我有点担心...万一以后又退回去了怎么办？',
        clientEmotion: 'anxious',
        clientAction: '(微微皱眉，双手不安地搓着)',
        hints: [
          '案主主动对比了前后变化，这是自我评估能力的体现',
          '她担心"退回去"，这是一个需要正常化的合理担忧',
          '可以用成效评估的方式帮她看到，偶尔的退回不等于全面退步',
        ],
        requiredTechniques: ['summarizing', 'empathy'],
        responseOptions: [
          {
            id: 'gp-5a',
            text: '你自己刚才做了一个非常好的对比——从不敢看照片，到能够独自去公园面对回忆。这个变化不是偶然的，是你一步步走出来的。至于你担心的"退回去"，我想说，哀伤的过程不是一条直线往前走的，有时候会有波动，某些日子会比较难，但这不等于退回原点。你已经建立起来的力量不会消失。',
            techniques: ['summarizing', 'empathy', 'encouragement', 'psychoeducation'],
            quality: 'excellent',
            feedback:
              '出色的总结和心理教育。先帮案主回顾了自身的具体变化（从不敢看照片到独自去公园），这是基于事实的成效评估。然后对"退回去"的担忧做了非常重要的正常化——哀伤是波动的而非线性的。最后"你已经建立起来的力量不会消失"这句话给予了深层的安全感和信心。',
            nextNodeId: 'gp-node-6',
            emotionImpact: 2,
          },
          {
            id: 'gp-5b',
            text: '你的担心很正常。不过从你说的来看，你已经有了很大的进步。我们可以一起想想，如果碰到特别难的时候，你可以怎么应对？',
            techniques: ['normalizing', 'encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '正常化了案主的担忧，肯定了进步，并引导讨论应对策略。方向正确且实用。但缺少对哀伤波动性的解释——案主需要理解偶尔的难受不等于退步，这个认知比具体策略更重要。可以先建立这个认知框架，再讨论具体应对方法。',
            nextNodeId: 'gp-node-6',
            emotionImpact: 1,
          },
          {
            id: 'gp-5c',
            text: '你现在做得已经很好了，不要给自己太大压力。退不退回去不是你能控制的。',
            techniques: ['encouragement'],
            quality: 'fair',
            feedback:
              '"不是你能控制的"虽然有一定道理，但对一个正在寻求确定感的案主来说，这个回应反而增加了无力感。案主需要的是理解哀伤过程的波动性是正常的，同时知道自己已经拥有了应对的能力和资源。评估阶段应帮助案主看到自己的力量，而不是强调不可控性。',
            nextNodeId: 'gp-node-6',
            emotionImpact: -1,
          },
          {
            id: 'gp-5d',
            text: '不会的，你都已经好这么多了，不会退回去的。放心吧。',
            techniques: [],
            quality: 'poor',
            feedback:
              '空洞的保证。社工不能保证案主"不会退回去"——哀伤过程中的波动是正常且常见的。给出不切实际的保证短期内可能让案主安心，但一旦出现波动（这几乎是必然的），案主会因为"被保证过不会退步"而更加恐慌和自责。诚实且有教育意义的回应比虚假的安慰更有帮助。',
            nextNodeId: 'gp-node-6',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'gp-node-6',
        stage: 'evaluation',
        clientMessage:
          '嗯，你说的对，不是一条直线。我好像确实太追求"完全好了"了。那老师你觉得，我们接下来应该怎么安排？我还需要继续来吗？',
        clientEmotion: 'hopeful',
        clientAction: '(表情放松了一些，看着社工)',
        hints: [
          '案主问是否需要继续来，需要基于评估给出专业建议',
          '这是评估收尾的关键节点，需要总结今天的评估发现',
          '应该与案主协商下一步计划，而非单方面决定',
        ],
        requiredTechniques: ['summarizing', 'outcome_evaluation'],
        responseOptions: [
          {
            id: 'gp-6a',
            text: '今天回顾下来，你从2分到6分，从不敢看照片到主动面对回忆，这些进步都是实实在在的。目前你的日常功能恢复得很好，也在学习面对触发情绪的时刻。我的建议是，我们可以把面谈的频率调整为两周一次，重点关注那些特定的触发场景和你提到的"心里的那块空"。同时，如果遇到特别难的日子，你随时可以联系我。你觉得这样安排可以吗？',
            techniques: ['summarizing', 'outcome_evaluation', 'suggestion'],
            quality: 'excellent',
            feedback:
              '完美的评估收尾。用具体的数据和行为变化做了简明的总结，然后给出了清晰的下一步建议——调整频率而非终止，并说明了新阶段的关注重点。特别好的是"你觉得这样安排可以吗"这个征询，体现了对案主自主性的尊重。同时保留了"随时联系"的安全网。整个回应结构清晰、专业、温暖。',
            nextNodeId: 'gp-node-6-end',
            emotionImpact: 2,
          },
          {
            id: 'gp-6b',
            text: '从今天的评估来看，你的进步很明显。我觉得我们可以继续，但可以减少频率。你觉得多长时间见一次比较合适？',
            techniques: ['outcome_evaluation', 'open_questions'],
            quality: 'good',
            feedback:
              '给出了继续辅导但调整频率的建议，并征询案主意见，体现了合作精神。但缺少对今天评估发现的具体总结——案主应该带着一个清晰的"我的状况是什么、接下来的方向是什么"的图景离开。另外，频率的选择可以由社工先提出专业建议，再征询案主意见。',
            nextNodeId: 'gp-node-6-end',
            emotionImpact: 1,
          },
          {
            id: 'gp-6c',
            text: '你现在做得不错了，其实也可以考虑暂时不来了，有需要再联系。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '建议暂停辅导过于草率。虽然案主有明显进步，但她今天提到了仍然存在的触发场景、"心里的空"、对退步的担忧——这些都表明还有工作需要继续。评估阶段的目的不是尽快结案，而是基于全面的评估做出合理的计划调整。在案主还有明确困扰的情况下建议暂停，可能让她觉得自己的困难不被重视。',
            nextNodeId: 'gp-node-6-end',
            emotionImpact: -1,
          },
          {
            id: 'gp-6d',
            text: '当然需要继续来。你虽然有进步，但还没有完全好，还有很多问题需要处理。我们保持每周一次。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"还没有完全好""还有很多问题"这种表述否定了案主的进步，传递了"你还有很多毛病"的信息。而且坚持每周一次的频率没有回应案主的实际改善情况，显得刻板。更重要的是，"当然需要"的语气过于确定和单方面，没有给案主任何参与决策的空间。评估后的计划调整应该是社工和案主合作协商的过程。',
            nextNodeId: 'gp-node-6-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景2：儿童行为改善评估（小明）
  // ============================================================
  {
    id: 'child-behavior-eval',
    title: '儿童行为改善评估',
    subtitle: '课堂多动的小明干预后有什么变化',
    category: '儿童服务',
    difficulty: 'beginner',
    primaryStage: 'evaluation',
    estimatedTime: '20-30分钟',
    coverColor: '#FEF3C7, #FDE68A',
    icon: '📋',
    clientProfile: {
      name: '小明',
      age: 9,
      gender: '男',
      occupation: '小学三年级',
      avatar: '👦',
      background:
        '小明因课堂多动、注意力不集中、与同学频繁冲突被转介。经过两个月的行为干预(包括奖励机制、情绪管理训练)，老师反映有明显改善。今天是阶段评估面谈,需要与小明一起回顾进步。注意:与儿童面谈需要用简单、具体、有趣的方式。',
      presentingProblem:
        '课堂多动、注意力不集中、与同学频繁冲突，经两个月行为干预后有改善，需进行阶段评估。',
      emotionalState: 'hopeful',
      keyTraits: ['活泼好动', '注意力改善中', '喜欢被表扬', '自控力提升', '偶尔冲动'],
    },
    description:
      '小明是一名9岁的小学三年级男孩，因课堂多动和同学冲突被转介。经过两个月的行为干预，老师反馈有明显改善。本次面谈是阶段评估，需要用儿童友好的方式帮助小明回顾自己的进步，增强他的自信和内在动力。学习者将练习与儿童进行评估面谈的技巧，包括使用具体、简单、有趣的沟通方式。',
    learningObjectives: [
      '练习与儿童进行评估面谈的专门技巧',
      '学习使用儿童友好的量表工具进行主观评估',
      '掌握用具体行为描述而非抽象标签来给予儿童反馈',
      '练习在评估中增强儿童的自我效能感和内在动力',
      '学习在评估中布置适合儿童的具体任务',
    ],
    dialogueNodes: [
      {
        id: 'cb-node-1',
        stage: 'evaluation',
        clientMessage: '老师！我来啦！今天妈妈说来了之后可以吃冰淇淋！',
        clientEmotion: 'hopeful',
        clientAction: '(蹦蹦跳跳跑进来，书包还没放好就开始到处看)',
        hints: [
          '小明精力充沛，需要用他感兴趣的方式引入评估话题',
          '与儿童面谈应避免直接进入"评估"这样的成人化话题',
          '可以从他感兴趣的事情入手，自然地过渡到回顾',
        ],
        requiredTechniques: ['encouragement', 'scaling_questions'],
        responseOptions: [
          {
            id: 'cb-1a',
            text: '小明你好呀！看你今天精神很好嘛。来，先把书包放好，我们坐下来聊聊天。老师想跟你玩一个游戏——如果给自己在学校的表现打星星，5颗星是超级棒，1颗星是不太好，你觉得最近你能得几颗星？',
            techniques: ['encouragement', 'scaling_questions'],
            quality: 'excellent',
            feedback:
              '非常好的儿童面谈开场。先回应了小明的热情，然后自然地引导他坐下来（建立面谈秩序）。用"打星星"代替0-10分量表，是非常聪明的儿童化改编——具体、形象、有游戏感。5颗星的设置对9岁儿童来说更容易理解和操作。',
            nextNodeId: 'cb-node-2',
            emotionImpact: 1,
          },
          {
            id: 'cb-1b',
            text: '小明你好！今天我们来聊聊你最近在学校怎么样，好不好？先坐下来吧。',
            techniques: ['open_questions'],
            quality: 'good',
            feedback:
              '友善的开场，也引导小明坐下来了。但"聊聊你在学校怎么样"对9岁孩子来说太笼统，他可能不知道从何说起。与儿童面谈需要更具体、更有引导性的问题。可以考虑使用量表工具或具体的活动来帮助他表达。',
            nextNodeId: 'cb-node-2',
            emotionImpact: 0,
          },
          {
            id: 'cb-1c',
            text: '小明，先安静下来。我们今天要做一个很重要的评估，看看你这两个月表现怎么样。',
            techniques: ['agenda_setting'],
            quality: 'fair',
            feedback:
              '"先安静下来"的语气像老师在管纪律，会让孩子产生防御心理。"很重要的评估"是成人化的表述，9岁孩子不理解也不感兴趣。与儿童面谈的开场应该是温暖、有趣、降低紧张感的，而不是强调"重要"和"评估"。需要把专业目的转化为儿童能理解和接受的形式。',
            nextNodeId: 'cb-node-2',
            emotionImpact: -1,
          },
          {
            id: 'cb-1d',
            text: '你妈妈用冰淇淋让你来的啊？那我们快点开始快点结束，这样你就可以早点吃冰淇淋了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"快点开始快点结束"将面谈定位为一个需要"赶快完成的任务"，暗示这件事是无趣的、孩子不会喜欢的。这不仅贬低了面谈本身的价值，也没有利用好这个建立关系的机会。社工应该让孩子感到这里是有趣的、安全的，而不是"完成任务就可以走"的地方。',
            nextNodeId: 'cb-node-2',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'cb-node-2',
        stage: 'evaluation',
        clientMessage:
          '嗯...我觉得...4颗星！因为我上课举手举得多了，王老师还表扬我了！但是有一次我还是跟张伟吵架了...那次应该扣一颗星。',
        clientEmotion: 'hopeful',
        clientAction: '(伸出四个手指，说到吵架时缩了一下)',
        hints: [
          '小明给自己4星，能看到进步也能看到不足，说明自我觉察在发展',
          '他主动提到了被表扬和一次冲突，可以分别回应',
          '先肯定进步，再温和地探讨那次冲突',
        ],
        requiredTechniques: ['encouragement', 'outcome_evaluation'],
        responseOptions: [
          {
            id: 'cb-2a',
            text: '哇，4颗星呢！而且你注意到了——你上课举手多了，王老师也表扬了你。这说明你真的在努力，而且努力有了效果！你刚才说跟张伟吵架扣了一颗星，你能记住这件事，还知道给自己扣星，说明你已经学会了反思自己的行为，这本身就是进步哦。能跟老师说说那次是怎么回事吗？',
            techniques: ['encouragement', 'outcome_evaluation', 'positive_reframing', 'open_questions'],
            quality: 'excellent',
            feedback:
              '出色的儿童评估回应。首先热情肯定了4星和具体的进步（举手、被表扬），让孩子感受到被认可。然后非常巧妙地把"扣一颗星"重新框架为"学会反思"的积极表现——这种积极重构既不回避问题，又增强了孩子的自我效能感。最后用开放式提问自然引导探讨冲突事件。',
            nextNodeId: 'cb-node-3',
            emotionImpact: 2,
          },
          {
            id: 'cb-2b',
            text: '4颗星很不错啊！你跟张伟吵架那次是怎么回事？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了4颗星并追问冲突细节，方向正确。但转向冲突事件的速度有点快，对进步的部分（举手增多、被表扬）肯定得不够充分。与儿童面谈中，充分强化积极行为比探究问题行为更重要——先让孩子感受到"我被认可"，再讨论"那次不太好的地方"。',
            nextNodeId: 'cb-node-3',
            emotionImpact: 1,
          },
          {
            id: 'cb-2c',
            text: '只有4颗星吗？如果不跟张伟吵架就可以得5颗了，下次要忍住啊。',
            techniques: [],
            quality: 'fair',
            feedback:
              '"只有4颗星吗"立刻将关注点放在了不足上，忽视了从之前可能1-2颗星到4颗星的巨大进步。"要忍住"是成人式的训诫，对9岁孩子来说，"忍住"不是有效的情绪管理策略。评估面谈应以肯定进步为主，建立孩子的内在动力，而不是指出"还差一颗星"让孩子感到不够好。',
            nextNodeId: 'cb-node-3',
            emotionImpact: -1,
          },
          {
            id: 'cb-2d',
            text: '怎么又跟同学吵架了？我们不是说好了不能打架吗？',
            techniques: [],
            quality: 'poor',
            feedback:
              '"又跟同学吵架了""不是说好了吗"是指责性的回应，完全忽视了孩子从多次冲突减少到只有一次的显著进步。"又"这个字暗示了"你总是这样"的标签化判断。这种回应会让孩子感到无论怎么努力都不够好，严重打击积极性和对面谈的信任感。而且孩子说的是"吵架"不是"打架"，社工连信息都没听准。',
            nextNodeId: 'cb-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cb-node-3',
        stage: 'evaluation',
        clientMessage:
          '那次是...张伟抢了我的橡皮，我就骂他了。但是！但是我没有打他！以前我肯定会打他的，但是这次我记住了老师教我的，先深呼吸，然后用嘴巴说。虽然说的话不太好听就是了...',
        clientEmotion: 'hopeful',
        clientAction: '(有些不好意思，但又有点自豪地挺了挺胸)',
        hints: [
          '小明展示了行为改善的具体证据——从打人变成用语言表达',
          '他记住并运用了学到的技巧（深呼吸、用语言代替行为），这是非常关键的进步',
          '需要充分肯定这个改变，同时温和地讨论可以说什么样的话',
        ],
        requiredTechniques: ['encouragement', 'positive_reframing'],
        responseOptions: [
          {
            id: 'cb-3a',
            text: '小明！你刚才说了一件特别棒的事——以前你会打人，但这次你停下来了！你还记得深呼吸，然后选择了用嘴巴说而不是用手打。这说明你的"自控力超能力"变强了！虽然说的话还可以更好一点，但是从"打"变成"说"，这个进步太大了。你是怎么做到在那么生气的时候还能停下来深呼吸的？',
            techniques: ['encouragement', 'positive_reframing', 'scaling_questions'],
            quality: 'excellent',
            feedback:
              '极好的儿童面谈回应。用"自控力超能力"这个孩子喜欢的概念将进步具象化，增强了孩子的自我效能感。清晰地指出了行为改变的具体内容（从打到说），给予了充分的肯定。"虽然说的话还可以更好一点"轻描淡写地提到了改进空间，但不让它成为焦点。最后的提问让孩子自己说出成功策略，强化了内在归因。',
            nextNodeId: 'cb-node-4',
            emotionImpact: 2,
          },
          {
            id: 'cb-3b',
            text: '你没有打他，这很好！你记住了深呼吸的方法。那下次如果张伟再惹你，你可以怎么做呢？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了"没有打"的进步和技巧的运用。引导思考下次的应对策略也有建设性。但对这个重要进步的肯定力度不够——从打人到不打人，对一个9岁、曾经频繁冲突的孩子来说是非常显著的改变，值得更热情、更具体的认可。',
            nextNodeId: 'cb-node-4',
            emotionImpact: 1,
          },
          {
            id: 'cb-3c',
            text: '嗯，没打是好的，但骂人也不对哦。下次你应该直接告诉老师，不要自己骂回去。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '将注意力放在了"骂人也不对"上，虽然事实上没错，但忽视了从"打人"到"骂人"的巨大进步。在儿童行为改善的评估中，应该先充分强化已经发生的积极改变，再逐步引导更好的替代行为。如果孩子感到"不打也要被批评"，他的改变动力会受到打击。"直接告诉老师"的建议也过于简单，忽视了孩子独自应对的能力培养。',
            nextNodeId: 'cb-node-4',
            emotionImpact: -1,
          },
          {
            id: 'cb-3d',
            text: '你骂他说了什么？说不好听的话也是一种攻击行为哦。',
            techniques: ['concretization'],
            quality: 'poor',
            feedback:
              '把关注点完全放在了"说了什么不好听的话"上，将语言表达定义为"攻击行为"。这对一个正在努力改变的9岁孩子来说，是极其打击信心的。他刚才自豪地分享自己如何忍住不打人，社工却在追究他骂了什么——这会让孩子感到"不管怎么做都是错的"，严重损害面谈关系和改变动力。',
            nextNodeId: 'cb-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cb-node-4',
        stage: 'evaluation',
        clientMessage:
          '嘿嘿...我就是想起来你说的，生气的时候心里那个小怪兽要出来了，先深呼吸把它关住。我那天呼了三次才关住它！不过有时候上课的时候我还是会走神，就是会想一些好玩的事情...然后就忘了听课了。',
        clientEmotion: 'calm',
        clientAction: '(模仿深呼吸的动作，然后有点不好意思地笑笑)',
        hints: [
          '小明很好地内化了"小怪兽"的比喻，这是辅导成效的体现',
          '他主动提出了注意力问题，说明对自己有一定的觉察',
          '走神是一个可以继续关注的方面，但不要让评估变成批评',
        ],
        requiredTechniques: ['encouragement', 'homework_assignment'],
        responseOptions: [
          {
            id: 'cb-4a',
            text: '呼了三次才关住那个小怪兽！你知道这说明什么吗？说明你特别有耐心，没有放弃。很多人呼一次没用就放弃了，但你坚持呼了三次。这个耐心本身就是一种超级厉害的能力。你说上课有时候会走神，想好玩的事情——嗯，老师告诉你一个秘密，其实大人有时候也会走神的。不过我们可以想想办法，让你走神的时候更快地把自己拉回来。',
            techniques: ['encouragement', 'positive_reframing', 'normalizing'],
            quality: 'excellent',
            feedback:
              '精彩的儿童化回应。将"呼了三次"重构为"耐心和不放弃"，这种积极归因非常有力。"大人也会走神"的自我暴露恰到好处地正常化了走神行为，减少孩子的羞耻感。最后"更快拉回来"是一个建设性的目标设定——不是要求不走神（不现实），而是走神后更快回来（可操作）。',
            nextNodeId: 'cb-node-5',
            emotionImpact: 1,
          },
          {
            id: 'cb-4b',
            text: '你记住了小怪兽的方法，很棒！走神这件事我们可以继续练习。你一般什么时候最容易走神？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了小怪兽方法的运用，并引导探索走神的具体模式。了解什么时候容易走神有助于制定针对性的策略。但对"呼了三次"这个细节的回应不够——孩子特地告诉你呼了三次，这说明他在分享一个自豪的经历，值得更充分的回应。',
            nextNodeId: 'cb-node-5',
            emotionImpact: 0,
          },
          {
            id: 'cb-4c',
            text: '小怪兽的方法你用得不错。上课走神的问题你也要注意啊，老师讲课你不听，成绩会下降的。',
            techniques: ['encouragement'],
            quality: 'fair',
            feedback:
              '前半句的肯定不错，但后半句"成绩会下降"是恐吓式的说教。对9岁的孩子来说，"成绩下降"不是有效的动机来源——它引发的是焦虑而非积极的改变意愿。评估面谈中讨论待改进的方面时，应保持鼓励的基调，帮助孩子看到"可以变得更好"而非"会出问题"。',
            nextNodeId: 'cb-node-5',
            emotionImpact: -1,
          },
          {
            id: 'cb-4d',
            text: '呼了三次才管住，说明你的自制力还不够强。上课走神也是注意力的问题，你需要更加努力。',
            techniques: [],
            quality: 'poor',
            feedback:
              '将"三次才管住"解读为"不够强"，完全颠倒了事实——对一个过去根本无法自控的孩子来说，能在愤怒中坚持深呼吸三次是了不起的成就。"自制力不够强""需要更加努力"是否定性的评判，会让孩子觉得自己的努力和进步不被看到。这种回应会严重损害孩子的自信心和改变动力。',
            nextNodeId: 'cb-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cb-node-5',
        stage: 'evaluation',
        clientMessage:
          '嗯！数学课最容易走神，因为数学太无聊了！但是语文课我现在能听进去了，因为王老师讲的故事很好听。对了老师，你下次还会来我们学校吗？上次你在班上教我们做的那个"情绪红绿灯"，好多同学都在用呢！',
        clientEmotion: 'hopeful',
        clientAction: '(眼睛亮亮的，说到"情绪红绿灯"时很兴奋)',
        hints: [
          '小明区分了不同科目的注意力差异，这是有价值的信息',
          '"情绪红绿灯"在班级中的传播效应值得记录',
          '需要对整体进步做一个儿童化的总结，为结尾做铺垫',
        ],
        requiredTechniques: ['summarizing', 'encouragement'],
        responseOptions: [
          {
            id: 'cb-5a',
            text: '哇，"情绪红绿灯"好多同学都在用？那你等于是班级里的小小老师了，因为是你先学会的嘛！我来数一数你今天告诉我的好消息哦：第一，你上课举手变多了；第二，你生气的时候能深呼吸、用嘴巴说而不是动手；第三，语文课能认真听了；第四，你还把学到的方法传给了同学。小明，你进步了好多好多！',
            techniques: ['encouragement', 'summarizing', 'positive_reframing'],
            quality: 'excellent',
            feedback:
              '完美的儿童化总结。将"情绪红绿灯的传播"重构为孩子是"小小老师"，让他为自己的影响力感到自豪。用"数一数好消息"的方式进行结构化总结，既清晰又有趣。四条具体的进步条目让孩子清楚地看到自己的成长。"好多好多"的表达符合与9岁孩子沟通的语言风格。',
            nextNodeId: 'cb-node-6',
            emotionImpact: 2,
          },
          {
            id: 'cb-5b',
            text: '情绪红绿灯受欢迎，那说明你们班同学都觉得有用。你在语文课能听进去了，那我们可以想想怎么让数学课也更有趣一些。',
            techniques: ['encouragement', 'suggestion'],
            quality: 'good',
            feedback:
              '回应了情绪红绿灯的传播效应，并关联到了数学课的走神问题，有建设性。但缺少一个整体性的总结——评估面谈临近结尾时，应该帮助孩子全面回顾进步，而不仅仅聚焦在最新的话题上。一个结构化的总结能让孩子带着更完整的成就感离开。',
            nextNodeId: 'cb-node-6',
            emotionImpact: 1,
          },
          {
            id: 'cb-5c',
            text: '语文好但数学走神，可能是因为你不喜欢数学。不过数学也很重要，你得想办法集中注意力。',
            techniques: ['providing_information'],
            quality: 'fair',
            feedback:
              '将走神归因为"不喜欢"过于简单，对数学"很重要"的说教对孩子缺乏吸引力。整个回应忽略了小明兴奋分享的"情绪红绿灯"在班级传播的好消息——当孩子充满热情地分享正面信息时，社工没有给予回应，这会让孩子感到不被关注。评估阶段应充分利用积极信息来强化孩子的改变动力。',
            nextNodeId: 'cb-node-6',
            emotionImpact: -1,
          },
          {
            id: 'cb-5d',
            text: '上课走神说明你还需要更多训练。下次我再教你一些集中注意力的方法。',
            techniques: ['suggestion'],
            quality: 'poor',
            feedback:
              '完全忽略了小明分享的多个积极进步，只聚焦在"走神"这一个问题上。"还需要更多训练"让面谈变成了一个"纠错"过程。更糟糕的是，对孩子兴奋提到的"情绪红绿灯被同学广泛使用"这个了不起的成效毫无回应。一个9岁的孩子在热情地分享好消息，社工却只关注问题——这种模式会让孩子以后不愿意再分享积极的体验。',
            nextNodeId: 'cb-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cb-node-6',
        stage: 'evaluation',
        clientMessage:
          '嘿嘿，我进步了这么多嘛！那老师，我以后可以不用来了吗？我觉得我已经变好了！',
        clientEmotion: 'hopeful',
        clientAction: '(自信地仰着头，笑得很开心)',
        hints: [
          '小明的自信增长了，但需要温和地说明仍有可以改进的地方',
          '不宜立刻终止辅导，但要让孩子感到不是因为"还有问题"才继续',
          '可以用正面的方式布置一个简单的家庭作业作为衔接',
        ],
        requiredTechniques: ['encouragement', 'homework_assignment'],
        responseOptions: [
          {
            id: 'cb-6a',
            text: '小明进步了真的很多！你应该为自己骄傲。不过你知道吗，就算是超级英雄也要持续训练才能变得更厉害。我们的"自控力超能力"也需要继续升级。这样吧，我给你一个特别任务——下次我们见面之前，你试试在数学课用"深呼吸回来法"，就是每次走神发现了之后，深呼吸一次，把注意力拉回来。你在本子上画个"正"字记一记，下次告诉我你拉回来了几次，好不好？',
            techniques: ['encouragement', 'homework_assignment', 'positive_reframing'],
            quality: 'excellent',
            feedback:
              '完美的儿童化评估收尾。用"超级英雄也需要训练"的类比让继续辅导变成一件积极的事，而非"你还有问题"。家庭作业的设计非常精彩——"深呼吸回来法"简单具体，画"正"字记录既好玩又有功能（自我监控）。任务聚焦在"数学课走神"这一个具体目标上，不贪多，适合儿童的认知水平。',
            nextNodeId: 'cb-node-6-end',
            emotionImpact: 2,
          },
          {
            id: 'cb-6b',
            text: '你进步很大！不过我们还可以继续变得更好。下周我们再见一次面，到时候你告诉我数学课有没有走神更少，好不好？',
            techniques: ['encouragement', 'homework_assignment'],
            quality: 'good',
            feedback:
              '肯定了进步并安排了下次面谈。布置了观察数学课走神的任务，方向正确。但任务描述不够具体——"走神更少"对孩子来说难以量化和自我评估。可以给一个更具体的操作方法（如画正字记录），让孩子知道具体做什么。另外，没有解释"为什么还要来"，对一个"觉得自己变好了"的孩子来说，需要一个积极的理由。',
            nextNodeId: 'cb-node-6-end',
            emotionImpact: 1,
          },
          {
            id: 'cb-6c',
            text: '你进步了，但上课走神的问题还没解决呢。我们还需要继续练习，不能半途而废哦。',
            techniques: ['encouragement'],
            quality: 'fair',
            feedback:
              '"但上课走神还没解决"在孩子充满成就感的时刻泼了冷水。"不能半途而废"的说教语气会让孩子觉得继续辅导是一种惩罚。收尾阶段的基调应该是积极的——让孩子带着自信和期待离开，而不是带着"我还有问题没解决"的遗憾。可以将继续的理由框架为"升级"而非"修补"。',
            nextNodeId: 'cb-node-6-end',
            emotionImpact: -1,
          },
          {
            id: 'cb-6d',
            text: '你觉得你变好了吗？可是你上次还跟张伟吵架了，还有数学课走神，这些都还需要改。你还是要继续来的。',
            techniques: [],
            quality: 'poor',
            feedback:
              '当孩子自信满满地说"我变好了"时，社工列举了两个"没做好的事"来反驳他的感受——这是对孩子自我评价的直接否定，严重打击自信心。"这些都还需要改""还是要继续来的"让辅导变成了改造任务和强制安排。评估面谈的收尾应该让案主（尤其是儿童）感受到被肯定和被尊重，而不是被列出问题清单。',
            nextNodeId: 'cb-node-6-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景3：夫妻关系改善评估（周先生）
  // ============================================================
  {
    id: 'couple-therapy-eval',
    title: '夫妻关系改善评估',
    subtitle: '四次面谈后周先生夫妇关系有何变化',
    category: '婚姻家庭',
    difficulty: 'intermediate',
    primaryStage: 'evaluation',
    estimatedTime: '25-35分钟',
    coverColor: '#FDF2F8, #FCE7F3',
    icon: '💑',
    clientProfile: {
      name: '周先生',
      age: 42,
      gender: '男',
      occupation: '公务员',
      avatar: '👨',
      background:
        '周先生和妻子因沟通方式问题(冷暴力、指责)频繁冲突。经过4次面谈学习了非暴力沟通技巧。妻子这次没有一起来,周先生独自来进行评估面谈。他反映关系有改善但还不稳定。',
      presentingProblem:
        '夫妻因沟通方式问题频繁冲突，学习非暴力沟通技巧后有改善但不稳定，妻子未到场，需独自评估。',
      emotionalState: 'calm',
      keyTraits: ['有改善意愿', '沟通模式改变中', '妻子未到场', '进步不稳定', '期待肯定'],
    },
    description:
      '周先生与妻子因冷暴力和指责式沟通频繁冲突，经过4次面谈学习了非暴力沟通技巧。本次妻子未到场，周先生独自来进行评估面谈。他反映关系有改善但不稳定。学习者将练习在伴侣一方缺席的情况下进行婚姻关系评估，如何平衡肯定进步和面对仍存在的问题，以及如何处理"不稳定改善"的评估复杂性。',
    learningObjectives: [
      '练习在伴侣一方缺席情况下进行婚姻关系评估',
      '学习运用量表提问评估关系满意度变化',
      '掌握评估"不稳定改善"时如何平衡肯定与现实',
      '练习在评估中识别沟通模式的具体改变',
      '学习在单方面评估中保持中立和全面性',
    ],
    dialogueNodes: [
      {
        id: 'ce-node-1',
        stage: 'evaluation',
        clientMessage:
          '老师好。今天我一个人来了，我太太说她周末要加班。其实...我也不确定她是不是真的加班。',
        clientEmotion: 'calm',
        clientAction: '(坐下来，有些拘谨地搓了搓手)',
        hints: [
          '周先生暗示妻子可能不是真的加班，这涉及他对妻子意愿的不确定',
          '不要急于追问妻子是否在找借口，先关注周先生自己的状态',
          '需要说明单方面评估的安排和意义',
        ],
        requiredTechniques: ['open_questions', 'outcome_evaluation'],
        responseOptions: [
          {
            id: 'ce-1a',
            text: '周先生你好。你太太今天没来，你提到不确定她是不是真的加班——听起来这让你有些在意。没关系，今天我们先从你的角度来回顾一下这段时间的变化。你的观察和感受同样非常重要。如果用0到10分来评价现在你们的夫妻关系，10分是非常满意，你会打几分？跟刚来的时候比呢？',
            techniques: ['empathy', 'outcome_evaluation', 'scaling_questions'],
            quality: 'excellent',
            feedback:
              '出色的开场。首先温和地回应了周先生对妻子动机的不确定感，既没有忽略也没有过度追问。然后自然地引入了单方面评估的框架——"你的观察和感受同样重要"让他知道今天的面谈是有意义的。最后使用量表提问建立了评估的起点。整个过程流畅、专业、让案主安心。',
            nextNodeId: 'ce-node-2',
            emotionImpact: 1,
          },
          {
            id: 'ce-1b',
            text: '没关系，你一个人来也可以。你觉得这四次面谈下来，你们之间有什么变化吗？',
            techniques: ['open_questions', 'outcome_evaluation'],
            quality: 'good',
            feedback:
              '安抚了周先生的歉意并引入了评估话题，方向正确。但对他提到的"不确定她是不是真的加班"没有回应——这个信息包含了重要的关系动态线索。另外，直接问"有什么变化"对于一个"进步不稳定"的案主来说范围太大，用量表提问可以提供更结构化的起点。',
            nextNodeId: 'ce-node-2',
            emotionImpact: 0,
          },
          {
            id: 'ce-1c',
            text: '你太太不来，是不是说明她觉得没有用？你有没有问过她的想法？',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '直接猜测妻子不来是因为"觉得没有用"，这是一个没有依据的负面假设。周先生自己也不确定原因，社工如果先入为主地给出负面解释，会增加周先生的焦虑。而且"你有没有问过她"的语气暗含一种"你应该问她"的指责。评估面谈的开始阶段应该先安稳案主的情绪，而不是加深他的不确定感。',
            nextNodeId: 'ce-node-2',
            emotionImpact: -1,
          },
          {
            id: 'ce-1d',
            text: '她不来也行。不过夫妻关系评估最好两个人都在场，这样比较全面。下次一定要让她一起来。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"她不来也行"语气随意，"不过最好都在"又立刻否定了"也行"。"一定要让她一起来"给周先生施加了压力——他可能正为此感到愧疚和无力。更重要的是，这个开场把注意力放在了"谁没来"而不是"来了的人需要什么"上，让周先生感到自己一个人的面谈是不够的、不完整的，这会降低他的参与意愿和信任感。',
            nextNodeId: 'ce-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ce-node-2',
        stage: 'evaluation',
        clientMessage:
          '嗯...我觉得现在大概5分吧。刚来的时候也就2分。有几次我确实忍住了没有冷暴力，用了你教的"我觉得...是因为...我希望..."的句式跟她说话。她当时反应还不错。但是上周有一次我加班回来很累，她说了我两句家务做少了，我又没控制住，一整晚没跟她说话。',
        clientEmotion: 'calm',
        clientAction: '(说到进步时微微点头，提到"没控制住"时低下头)',
        hints: [
          '从2分到5分，有明显改善但确实不稳定',
          '案主能具体说出运用了哪些技巧以及成功和失败的场景',
          '需要肯定进步的同时，帮助他理解不稳定的正常性',
        ],
        requiredTechniques: ['encouragement', 'scaling_questions'],
        responseOptions: [
          {
            id: 'ce-2a',
            text: '从2分到5分，这是很明显的进步。而且你刚才说的特别有价值——你能清楚地说出哪些时候成功运用了新的沟通方式，哪些时候没能做到。那次加班回来很累被说了之后没控制住，这种情况其实很常见。改变沟通模式就像学一项新技能，在压力大、精力不足的时候特别容易退回到旧习惯。这不是失败，是学习过程中正常的起伏。',
            techniques: ['encouragement', 'scaling_questions', 'normalizing', 'psychoeducation'],
            quality: 'excellent',
            feedback:
              '全面而专业的评估回应。首先肯定了2分到5分的量化进步，然后指出案主的自我觉察能力（能区分成功和失败的场景）本身就是成长。对冷暴力复发的解释非常到位——将其归因为"压力大精力不足时退回旧习惯"，这个框架既正常化了退步，又提供了理解和预防的方向（识别高风险情境）。',
            nextNodeId: 'ce-node-3',
            emotionImpact: 2,
          },
          {
            id: 'ce-2b',
            text: '从2分到5分，有进步。你能用"我觉得"句式跟太太说话，说明你学到了新技巧。那次冷暴力之后，你们后来怎么处理的？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '简洁地肯定了进步并追问了冷暴力之后的处理方式，这个信息对评估很有价值。但对"退步"的部分缺少正常化的解释——周先生低下头说"没控制住"，显然为此感到内疚。如果不帮他理解这种波动的正常性，他可能会因为一次"失败"而否定整体的进步。',
            nextNodeId: 'ce-node-3',
            emotionImpact: 1,
          },
          {
            id: 'ce-2c',
            text: '你太太说你家务做少了，那你觉得她说的有道理吗？也许你可以多分担一些。',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '将焦点转移到了"家务分工"这个内容层面，偏离了评估的目标。今天评估的重点是沟通模式的改变，而不是家务应该谁做。而且"也许你可以多分担一些"暗示社工站在妻子一边，这在伴侣一方缺席的评估中尤其需要避免。单方面评估要保持中立，不对未到场一方的行为做判断。',
            nextNodeId: 'ce-node-3',
            emotionImpact: -1,
          },
          {
            id: 'ce-2d',
            text: '这就是我担心的。你说有改善，但一累就退回去了，说明改变还不够深入。你要更加注意控制自己。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"这就是我担心的"将社工放在了一个居高临下的评判位置。"改变还不够深入"否定了从2分到5分的实质进步。"要更加注意控制自己"是一种要求而非支持——对一个正在学习新沟通模式的人来说，"更加注意"本身就是一种压力。评估阶段的态度应是理解和支持，而非评判和施压。',
            nextNodeId: 'ce-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ce-node-3',
        stage: 'evaluation',
        clientMessage:
          '你这样一说我心里好受一些。其实那次冷暴力之后我也觉得很后悔。第二天我主动跟她道了歉，跟她说"昨晚是我不对，我太累了，不应该用不说话来惩罚你。"她愣了一下，然后说...她说这是我第一次主动道歉。',
        clientEmotion: 'hopeful',
        clientAction: '(说到妻子的反应时，嘴角微微上扬)',
        hints: [
          '主动道歉是一个重大的行为改变，妻子的"愣住"反映了这一改变的不寻常',
          '"第一次主动道歉"说明改变的深度——不仅仅是技巧层面，态度也在转变',
          '需要充分肯定这个改变的意义',
        ],
        requiredTechniques: ['encouragement', 'reflection_feelings'],
        responseOptions: [
          {
            id: 'ce-3a',
            text: '周先生，你刚才分享的这件事非常重要。你不仅在冷暴力之后感到了后悔——这本身说明你的自我觉察在增强；更重要的是，你把后悔转化成了行动——主动道歉，而且你用了很诚恳的方式，承认了自己的错误，解释了原因，也表达了对她的歉意。你太太说这是你"第一次主动道歉"，你听到这句话时是什么感受？',
            techniques: ['encouragement', 'reflection_feelings', 'outcome_evaluation', 'open_questions'],
            quality: 'excellent',
            feedback:
              '出色的回应。层层递进地分析了这个改变的多个维度：从后悔（觉察）到道歉（行动）到道歉的方式（技巧运用）。特别好的是最后的提问——"听到第一次主动道歉是什么感受"——这引导案主去体会这个改变对自己和关系的意义，深化了评估的深度。',
            nextNodeId: 'ce-node-4',
            emotionImpact: 2,
          },
          {
            id: 'ce-3b',
            text: '你主动道歉了，这是很大的进步。你太太说是第一次——那说明以前你们吵架后通常是怎么解决的？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了主动道歉的进步，并引导回顾过去的模式以作对比。了解以往的冲突解决方式有助于评估变化的幅度。但对"第一次主动道歉"这件事的肯定力度可以更强——这不只是一个进步，对婚姻关系来说可能是一个转折点。',
            nextNodeId: 'ce-node-4',
            emotionImpact: 1,
          },
          {
            id: 'ce-3c',
            text: '道歉是好的。不过你说"用不说话来惩罚"，你以前意识到冷暴力是一种惩罚吗？',
            techniques: ['open_questions', 'concretization'],
            quality: 'fair',
            feedback:
              '对冷暴力作为"惩罚"的追问从专业角度是有价值的，但此刻的时机不太合适。案主正处于分享一个积极体验的状态，他的微笑和语气都表达了自豪和期待被肯定。在这个时刻转向对冷暴力本质的深入探讨，会打断案主的正面情感体验。评估面谈中，对进步的充分肯定应优先于问题的深入分析。',
            nextNodeId: 'ce-node-4',
            emotionImpact: -1,
          },
          {
            id: 'ce-3d',
            text: '你以前从来不道歉？那你太太忍了这么多年也是不容易的。',
            techniques: [],
            quality: 'poor',
            feedback:
              '将焦点从周先生的进步转移到了"你太太忍你这么多年不容易"，这是一种隐性的指责——暗示周先生过去的行为让妻子受苦了。虽然这在事实上可能没有错，但在单方面的评估面谈中这样说，会让到场的案主感到被评判和指责。更重要的是，他刚刚分享了一个困难但重要的改变（主动道歉），需要的是肯定而不是对过去的清算。',
            nextNodeId: 'ce-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ce-node-4',
        stage: 'evaluation',
        clientMessage:
          '听到她说"第一次"的时候，我心里其实很复杂。一方面觉得自己确实在改了，另一方面也有点...愧疚，觉得以前对她太差了。结婚十几年了，连主动道歉都没有过...我有时候会想，她会不会已经对我失望透了？',
        clientEmotion: 'sad',
        clientAction: '(沉默了几秒，低声说)',
        hints: [
          '案主出现了愧疚情绪和对妻子看法的不确定',
          '愧疚可以是改变的动力，但过度愧疚会变成自我否定',
          '需要承认愧疚的合理性，同时引导案主看到改变的积极意义',
        ],
        requiredTechniques: ['empathy', 'positive_reframing'],
        responseOptions: [
          {
            id: 'ce-4a',
            text: '你的愧疚说明你现在能够站在妻子的角度看问题了——这本身就是很大的改变。过去的事情确实已经发生了，我们没办法回去重来。但重要的是，你现在开始改变了。你太太说那句话的时候"愣了一下"，这个反应其实说明，她虽然可能积累了很多失望，但她还是被你的道歉触动了。一个真正对关系失望透的人，是不会有那种反应的。改变可能来得晚了一些，但不是没有意义的。',
            techniques: ['empathy', 'positive_reframing', 'encouragement'],
            quality: 'excellent',
            feedback:
              '极其出色的回应。首先将愧疚重构为"能站在妻子角度看"的积极变化。然后诚实地承认过去无法重来，避免了空洞的安慰。最关键的是对妻子"愣了一下"这个反应的解读——"失望透的人不会有那种反应"——既基于事实又给了案主希望。最后"来得晚但不是没有意义"给出了恰当的定位。',
            nextNodeId: 'ce-node-5',
            emotionImpact: 2,
          },
          {
            id: 'ce-4b',
            text: '你有这种愧疚是可以理解的。你觉得你太太现在对你们的关系是什么态度？',
            techniques: ['validation', 'open_questions'],
            quality: 'good',
            feedback:
              '确认了愧疚的合理性并引导案主思考妻子的态度，方向正确。但对案主此刻的复杂情绪回应不够深入。他同时体验着进步感和愧疚感，这种矛盾需要被更充分地看到和整合。另外，在妻子缺席时询问案主对妻子态度的判断，需要注意这只是一方的视角。',
            nextNodeId: 'ce-node-5',
            emotionImpact: 0,
          },
          {
            id: 'ce-4c',
            text: '过去的事情就不要想太多了。重要的是你现在在改变，以后对她好就行了。',
            techniques: ['encouragement'],
            quality: 'fair',
            feedback:
              '"不要想太多"和"以后对她好就行"是典型的宽慰式回应，虽然出发点是好的，但缺乏深度。案主的愧疚不是"想太多"，而是一种有意义的情感体验——它反映了共情能力的增长和对关系的真正重视。简单地告诉他"不要想"和"以后好就行"，回避了他需要面对的复杂情绪，也没有帮助他整合过去和现在。',
            nextNodeId: 'ce-node-5',
            emotionImpact: -1,
          },
          {
            id: 'ce-4d',
            text: '十几年都没道歉过确实挺过分的。不过好在你现在认识到了，亡羊补牢为时不晚。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"挺过分的"是直接的道德评判，虽然案主自己在反思，但社工用"过分"来定性他的过去行为，本质上是在道德层面批判案主。"亡羊补牢为时不晚"是一个陈词滥调，对于一段十几年积累了很多失望的婚姻关系来说，这种简单化的安慰不仅空洞，甚至可能不真实——没有人能保证"为时不晚"。评估面谈中应该保持客观和支持的立场。',
            nextNodeId: 'ce-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ce-node-5',
        stage: 'evaluation',
        clientMessage:
          '嗯...你分析得有道理。其实她如果真的完全不在乎了，可能早就提离婚了。她还愿意来这里（虽然今天没来），说明她还是在乎的。我就是怕...怕我又退回去了。压力大的时候、心情不好的时候，冷暴力好像是我的"自动反应"，改了四十几年的习惯真的很难。',
        clientEmotion: 'anxious',
        clientAction: '(皱着眉头，双手抱在胸前)',
        hints: [
          '案主认识到了冷暴力是一种"自动反应"，这种元认知很有价值',
          '对"退回去"的恐惧需要被理解和回应',
          '可以帮助他识别高风险情境和预防策略',
        ],
        requiredTechniques: ['summarizing', 'suggestion'],
        responseOptions: [
          {
            id: 'ce-5a',
            text: '你说到一个非常关键的点——冷暴力是你在压力下的"自动反应"。四十几年的模式确实不容易改变，你能有这个认识，说明你对自己有很清楚的了解了。我们来梳理一下：你知道什么情况下容易触发（累、压力大），你也知道新的方式是什么（"我觉得"句式、主动道歉），现在最需要的是在那些高风险时刻提醒自己。比如，下班回家之前给自己五分钟的缓冲时间，提醒自己"今晚可能会有压力，我准备好用新方式回应"。你觉得这样的方法对你有没有可能？',
            techniques: ['summarizing', 'suggestion', 'encouragement', 'psychoeducation'],
            quality: 'excellent',
            feedback:
              '极好的回应。首先肯定了案主的元认知能力（对自动反应的觉察）。然后做了一个精准的总结——把案主已知的三个要素（触发情境、新技巧、成功和失败的经历）整合在一起。最后提出了一个具体可操作的预防策略（下班前的缓冲时间），这个建议直接对应了案主提到的触发情境。"你觉得对你有没有可能"尊重了案主的自主性。',
            nextNodeId: 'ce-node-6',
            emotionImpact: 1,
          },
          {
            id: 'ce-5b',
            text: '改变确实需要时间。你已经知道自己的触发点了，这就是进步。下次感觉要冷暴力的时候，有没有什么方法可以提醒自己停下来？',
            techniques: ['normalizing', 'open_questions'],
            quality: 'good',
            feedback:
              '正常化了改变的困难，肯定了案主的自我觉察，并用开放式提问引导他思考具体的预防策略。方向正确且尊重案主的主体性。但缺少对案主已有资源的总结——他已经学会了"我觉得"句式和主动道歉，可以帮他更清楚地看到这些已有的工具，增强信心。',
            nextNodeId: 'ce-node-6',
            emotionImpact: 1,
          },
          {
            id: 'ce-5c',
            text: '所以说你太太在的时候效果会更好，你们可以互相提醒。你回去跟她说下次一定要一起来。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '将重点转移到了"妻子应该到场"这个议题上，虽然夫妻共同参与确实有益，但此刻案主正在表达对自己"退回去"的恐惧，他需要的是对自身改变能力的信心和具体的自我管理策略。而且"你回去跟她说一定要来"可能给案主制造新的压力——如果妻子不愿意来怎么办？评估面谈应聚焦于到场者的改变和赋能。',
            nextNodeId: 'ce-node-6',
            emotionImpact: -1,
          },
          {
            id: 'ce-5d',
            text: '四十几年的习惯确实难改。如果实在改不了，也可以考虑你太太也来学学怎么应对你的冷暴力。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"实在改不了"暗示了案主可能无法改变，这是对案主改变能力的否定。"让太太来学怎么应对你的冷暴力"更是将问题的解决方案从"改变自己的行为"转移到了"让对方适应你的问题行为"，这在伦理上是有问题的。冷暴力是一种有害的沟通方式，目标应该是减少和消除它，而不是教对方"怎么应对"。这种回应可能会让案主找到不改变的借口。',
            nextNodeId: 'ce-node-6',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'ce-node-6',
        stage: 'evaluation',
        clientMessage:
          '嗯，下班前给自己几分钟缓冲...这个我可以试试。老师，你觉得我们的关系还有希望吗？说实话，我有时候真的不知道。',
        clientEmotion: 'confused',
        clientAction: '(认真地看着社工，眼里有期待也有不安)',
        hints: [
          '案主在寻求对关系前景的判断，需要诚实但有支持性地回应',
          '社工不能替案主判断关系"有没有希望"，但可以基于评估总结积极因素',
          '这是评估收尾的关键节点，需要做总结并安排下一步',
        ],
        requiredTechniques: ['summarizing', 'outcome_evaluation'],
        responseOptions: [
          {
            id: 'ce-6a',
            text: '周先生，我不能替你们判断关系的未来，但我可以告诉你我今天从评估中看到的：你们的关系从2分变成了5分；你学会了用"我觉得"句式表达需求；你做到了结婚十几年来第一次主动道歉，而你太太被触动了；你能清楚地识别自己的触发模式并且想要改变。这些都是实实在在的进步。关系的改善需要时间，也需要双方的投入。我建议下次面谈请你太太一起来，我们从她的角度也了解一下变化，这样可以更全面地评估，也可以一起讨论下一步怎么走。你觉得呢？',
            techniques: ['summarizing', 'outcome_evaluation', 'suggestion', 'encouragement'],
            quality: 'excellent',
            feedback:
              '完美的评估收尾。首先诚实地声明了社工的边界（不能替他判断），然后用具体的评估证据（从分数、到技巧运用、到第一次道歉）呈现了积极的事实——让案主自己从事实中获得信心。最后的建议（请妻子下次来）自然且合理，既是评估的需要，也表达了对双方视角的重视。"你觉得呢"保留了案主的选择权。',
            nextNodeId: 'ce-node-6-end',
            emotionImpact: 2,
          },
          {
            id: 'ce-6b',
            text: '从今天的评估来看，你有进步，你太太也还在关注这段关系。我觉得你们是有机会的。下次争取让太太也一起来，我们一起聊聊。',
            techniques: ['outcome_evaluation', 'encouragement', 'suggestion'],
            quality: 'good',
            feedback:
              '给出了积极的评估意见和下一步建议。但总结不够具体——"有进步""有机会"比较笼统，案主需要的是具体的证据来支撑信心。另外"我觉得你们是有机会的"这个判断虽然出于好意，但超出了社工基于单方面评估能做出的结论范围。',
            nextNodeId: 'ce-node-6-end',
            emotionImpact: 1,
          },
          {
            id: 'ce-6c',
            text: '有没有希望主要看你们两个的努力。你在改变，也要看你太太愿不愿意配合。',
            techniques: ['providing_information'],
            quality: 'fair',
            feedback:
              '"看你太太愿不愿意配合"虽然客观上没错，但在妻子缺席的情况下暗示问题在于"她愿不愿意"，可能引发案主对妻子的负面判断或焦虑。评估面谈的收尾应该聚焦于案主可以做的事情和已经取得的进步，给出建设性的方向，而不是将责任指向未到场的另一方。',
            nextNodeId: 'ce-node-6-end',
            emotionImpact: -1,
          },
          {
            id: 'ce-6d',
            text: '当然有希望了！你现在不是在改了吗？只要你坚持改下去，你太太肯定会感受到的。相信我。',
            techniques: [],
            quality: 'poor',
            feedback:
              '过于乐观和简单化的保证。婚姻关系的改善不是一方"坚持改"就能成功的——它涉及双方的互动模式、期望和投入。"你太太肯定会感受到""相信我"是不负责任的承诺——社工不能保证妻子的反应。如果现实不如承诺，案主会失去对社工的信任。评估收尾应该基于事实，给出诚实且有支持性的反馈，而不是过度承诺。',
            nextNodeId: 'ce-node-6-end',
            emotionImpact: -1,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景4：就业辅导效果评估（小田）
  // ============================================================
  {
    id: 'employment-progress-eval',
    title: '就业辅导效果评估',
    subtitle: '求职三个月后小田的变化与困惑',
    category: '职业辅导',
    difficulty: 'beginner',
    primaryStage: 'evaluation',
    estimatedTime: '20-30分钟',
    coverColor: '#ECFDF5, #D1FAE5',
    icon: '💼',
    clientProfile: {
      name: '小田',
      age: 25,
      gender: '男',
      occupation: '待业青年',
      avatar: '🧑',
      background:
        '小田大学毕业后找不到满意的工作,在家啃老一年后被父母带来社工站。经过三个月的就业辅导(简历修改、面试技巧、职业认知调整),他已经参加了多次面试,获得了一个offer但犹豫要不要接受。今天进行阶段评估。',
      presentingProblem:
        '大学毕业后长期待业，经三个月就业辅导后有进展但面临offer选择困惑，需要阶段评估。',
      emotionalState: 'confused',
      keyTraits: ['求职进步', '期望落差', '选择困难', '自信提升', '比较心理'],
    },
    description:
      '小田大学毕业后在家待业一年，经父母带来社工站。三个月的就业辅导后，他参加了多次面试，获得了一个offer但犹豫是否接受。本次面谈进行阶段评估，需要帮助小田回顾三个月的进步，同时处理他对offer的纠结。学习者将练习如何在评估中平衡肯定进步和面对现实期望落差，以及如何帮助案主做出选择而非替他决定。',
    learningObjectives: [
      '练习运用成效评估技巧回顾就业辅导进展',
      '学习在评估中处理案主的期望与现实落差',
      '掌握帮助案主进行决策但不替代决策的专业边界',
      '练习在评估中运用积极重构增强案主自信',
      '学习评估中面对"比较心理"的处理方式',
    ],
    dialogueNodes: [
      {
        id: 'ep-node-1',
        stage: 'evaluation',
        clientMessage:
          '老师...我来了。我有点纠结的事情想跟你说。那个offer的事...我还没决定。',
        clientEmotion: 'confused',
        clientAction: '(坐下来，一只手不停地摸手机壳)',
        hints: [
          '小田带着具体的决策困惑来的，但今天的主要任务是评估',
          '可以先回应他的困惑，然后引导进入评估框架',
          '把offer的讨论放在评估的背景下处理会更有帮助',
        ],
        requiredTechniques: ['outcome_evaluation', 'open_questions'],
        responseOptions: [
          {
            id: 'ep-1a',
            text: '小田你好。我听到你说还在纠结那个offer。我们一会儿一定会好好聊这个。不过在这之前，我想和你先一起回顾一下这三个月的整体变化——因为把你的进步和现在的位置看清楚了，可能更容易做这个决定。你觉得呢？如果三个月前刚来的时候是起点，现在你觉得自己走到哪里了？',
            techniques: ['outcome_evaluation', 'open_questions', 'empathy'],
            quality: 'excellent',
            feedback:
              '非常好的评估开场。首先回应了小田的紧迫关切（offer决定），让他知道会被讨论，避免了他的焦虑。然后巧妙地将评估引入——解释了为什么先回顾再做决定更好，这个逻辑让案主理解了评估的意义。最后的提问形象具体，用"起点"和"走到哪里了"的比喻替代了抽象的评估术语。',
            nextNodeId: 'ep-node-2',
            emotionImpact: 1,
          },
          {
            id: 'ep-1b',
            text: '嗯，那个offer你具体在纠结什么？是不太满意还是有其他考虑？',
            techniques: ['open_questions', 'concretization'],
            quality: 'good',
            feedback:
              '直接回应了小田最关心的话题，展现了关注。但直接进入offer的讨论跳过了评估的框架——三个月的辅导整体回顾可以为offer决定提供更宽广的视角。如果不先评估进步和变化，offer的讨论可能陷入一个狭隘的选择困境中，缺少成长的背景。',
            nextNodeId: 'ep-node-2',
            emotionImpact: 0,
          },
          {
            id: 'ep-1c',
            text: '有offer了还纠结什么呢？三个月前你可是一个面试都没有参加过。现在有人愿意要你，应该高兴才对。',
            techniques: [],
            quality: 'fair',
            feedback:
              '"有人愿意要你应该高兴"虽然在指出进步，但语气中带有轻微的否定——否定了案主纠结的合理性。"有人愿意要你"的措辞还暗示案主处于被选择的弱势地位，这对一个刚建立起一些自信的年轻人来说是不利的。评估面谈应认真对待案主的困惑，而不是用"你应该怎样"来评判他的感受。',
            nextNodeId: 'ep-node-2',
            emotionImpact: -1,
          },
          {
            id: 'ep-1d',
            text: '先别急着说offer的事。我们今天的主要任务是做阶段评估，按照流程来。',
            techniques: ['agenda_setting'],
            quality: 'poor',
            feedback:
              '生硬地拒绝了案主最关心的话题，用"按照流程来"让面谈变成了公事公办。案主带着纠结和困惑来到这里，被告知"先别说这个"会让他觉得自己的需求不被尊重。正确的做法是回应他的关切，然后说明为什么先评估会更有帮助——让案主理解评估的意义，而不是因为"流程"而被迫接受。',
            nextNodeId: 'ep-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ep-node-2',
        stage: 'evaluation',
        clientMessage:
          '嗯，好吧。三个月前嘛...我就是在家躺着，什么都不想做。现在至少出来面试了，拿到offer了，但是...这个offer是一家小公司的行政岗，月薪四千多，我总觉得...我是大学毕业的，我的同学们都在大公司...我怕接了之后别人笑话我。',
        clientEmotion: 'confused',
        clientAction: '(低头看着地面，声音越来越小)',
        hints: [
          '小田的核心困惑是期望落差和比较心理，不是offer本身的问题',
          '需要先肯定从"在家躺着"到"拿到offer"的巨大变化',
          '比较心理需要被温和地回应，而不是批评',
        ],
        requiredTechniques: ['positive_reframing', 'scaling_questions'],
        responseOptions: [
          {
            id: 'ep-2a',
            text: '小田，我想请你暂停一下，看看你刚才说了什么——三个月前"什么都不想做，在家躺着"，现在"出来面试了、拿到offer了"。你有没有意识到，这中间你跨过了多大的距离？这不是一小步，这是从零到一的突破。至于你担心的"别人怎么看"...如果用0到10分来评价你现在对自己的信心，0分是三个月前完全没信心，10分是充满自信，你给自己打几分？',
            techniques: ['positive_reframing', 'scaling_questions', 'encouragement'],
            quality: 'excellent',
            feedback:
              '精准的积极重构。用"暂停一下"打断了案主的负面思维循环，让他回看自己描述的客观事实。"从零到一的突破"准确定义了这个变化的性质——不是"进步不大"，而是质的飞跃。然后用量表提问将话题从"别人怎么看"转向"我对自己的信心"，引导案主从外部评价转向内部评估。',
            nextNodeId: 'ep-node-3',
            emotionImpact: 2,
          },
          {
            id: 'ep-2b',
            text: '从在家躺着到拿到offer，你进步很大。你觉得这个offer和你的期望差在哪里？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了进步并引导具体分析offer与期望的差距，有助于理清纠结的原因。但对案主提到的"比较心理"（"同学在大公司""怕被笑话"）没有回应。这些关于社会比较和面子的担忧可能是决策困难的深层原因，在评估中值得关注和探讨。',
            nextNodeId: 'ep-node-3',
            emotionImpact: 1,
          },
          {
            id: 'ep-2c',
            text: '四千多的工资确实不算高，但你要考虑你已经一年没工作了。先做着，积累点经验再跳槽也不迟。',
            techniques: ['providing_information'],
            quality: 'fair',
            feedback:
              '给出了实用主义的建议，在某些情况下有道理。但在评估面谈中直接给出就业建议超出了社工的角色——社工的任务是帮助案主理清自己的想法和做出自己的决定，而不是替他分析市场。而且"你已经一年没工作了"虽然是事实，但说出来带有压力感，暗示"你没资格挑"。',
            nextNodeId: 'ep-node-3',
            emotionImpact: -1,
          },
          {
            id: 'ep-2d',
            text: '跟同学比不是不好，但每个人情况不一样。你在家待了一年，跟人家没法比。你应该对自己有个准确的定位。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"你在家待了一年跟人家没法比"虽然说的是事实，但这是在比较框架内给案主一个"你不如别人"的定位，会严重打击他刚建立起来的自信。"对自己有准确定位"的潜台词是"你现在定位太高了"，这是一种隐性的贬低。评估阶段的目的是帮助案主看到进步和可能性，而不是让他接受一个消极的自我定位。',
            nextNodeId: 'ep-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ep-node-3',
        stage: 'evaluation',
        clientMessage:
          '嗯...信心的话，可能5分吧。以前是0分。面试了几次之后，发现我也不是什么都不行。有两家虽然没过，但面试官说我表达还可以，简历也比以前好看多了。但是一想到我同学小李，人家月薪一万多，在互联网大厂...我就觉得自己好差。',
        clientEmotion: 'sad',
        clientAction: '(叹了口气，眼眶有点红)',
        hints: [
          '从0分到5分是很大的自信提升，需要充分肯定',
          '面试中获得的正面反馈（表达好、简历好）是客观的进步证据',
          '比较心理是核心议题，需要帮助案主建立自己的参照系',
        ],
        requiredTechniques: ['encouragement', 'open_questions'],
        responseOptions: [
          {
            id: 'ep-3a',
            text: '从0分到5分，这是你这三个月最重要的收获之一——你开始相信自己了。面试官说你表达好、简历好看，这些都是真实的反馈，说明你确实有能力。至于和小李的比较...我理解这种感受，看到同龄人走得更快，心里会不舒服。但我想问你一个问题：三个月前在家的那个你，和今天坐在这里的你，你觉得谁进步更大——是小李这三个月，还是你这三个月？',
            techniques: ['encouragement', 'empathy', 'open_questions', 'positive_reframing'],
            quality: 'excellent',
            feedback:
              '出色的回应。用具体的数据和反馈肯定了进步，然后用"我理解这种感受"共情了比较带来的不舒服。最精彩的是最后的反问——将比较的参照系从"我和小李的绝对差距"转换为"我和过去的我的进步幅度"。这个重构保留了"比较"的框架（因为案主确实需要比较来评估自己），但改变了比较的对象和维度。',
            nextNodeId: 'ep-node-4',
            emotionImpact: 2,
          },
          {
            id: 'ep-3b',
            text: '你从0分到5分了，说明你在进步。不过你提到的小李，你了解他的具体工作内容和压力吗？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了进步并试图引导案主更全面地看待小李的情况，方向是好的。但"你了解他的具体工作内容和压力吗"这个问题可能让案主觉得社工在替大厂工作"辩护"。更好的策略是帮助案主建立内在的评价标准，而不是通过贬低别人的光环来安慰自己。',
            nextNodeId: 'ep-node-4',
            emotionImpact: 0,
          },
          {
            id: 'ep-3c',
            text: '人家是人家，你是你。每个人有每个人的路，不要老跟别人比。',
            techniques: ['providing_information'],
            quality: 'fair',
            feedback:
              '虽然"不要跟别人比"是一个常见的建议，但它对于一个正在经历比较焦虑的人来说几乎没有帮助。告诉人"不要比"就像告诉焦虑的人"不要焦虑"一样——知道该怎么做和能做到之间有很大的鸟差距。案主需要的是理解自己为什么会比较、建立自己的评价标准，而不是一个"不要"的指令。',
            nextNodeId: 'ep-node-4',
            emotionImpact: -1,
          },
          {
            id: 'ep-3d',
            text: '你同学在互联网大厂月薪上万，那说明人家确实能力强。你现在要做的是提升自己的能力，而不是抱怨差距。',
            techniques: [],
            quality: 'poor',
            feedback:
              '这段话几乎是在用案主最害怕的比较结果来打击他。"人家确实能力强"暗示"你能力不强"；"提升能力而不是抱怨"更是双重打击——先否定了案主的感受（他不是在抱怨，而是在分享痛苦），又给出了一个空泛的要求。对于一个自信才从0分爬到5分的年轻人来说，这种回应可能让他回到怀疑自己的起点。',
            nextNodeId: 'ep-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ep-node-4',
        stage: 'evaluation',
        clientMessage:
          '嗯...这样一想，好像确实是我变化更大。三个月前的我连出门都不想...现在至少敢去面试了。而且面试的时候我也不像以前那样紧张得说不出话了。但是...这个offer我到底接不接啊？我妈天天催我，说"有个工作先做着"，我爸说"随你"但语气明显不满意...我自己也拿不定主意。',
        clientEmotion: 'confused',
        clientAction: '(来回搓手，焦虑地看着社工)',
        hints: [
          '案主面临来自自己和家庭的多重压力',
          '社工不能替案主做决定，但可以帮助他理清自己的想法',
          '可以引导案主思考接受和不接受各自的可能性和感受',
        ],
        requiredTechniques: ['open_questions', 'suggestion'],
        responseOptions: [
          {
            id: 'ep-4a',
            text: '先不急着现在就做决定。我想帮你理清一下自己的想法。你妈妈说先做着，你爸的态度不太明确，这些都是他们的看法。最重要的是你自己怎么想。我问你两个问题：第一，如果你接了这个offer，半年后你觉得自己会是什么状态？第二，如果你不接，继续找，半年后你觉得会怎样？',
            techniques: ['open_questions', 'suggestion', 'focusing'],
            quality: 'excellent',
            feedback:
              '精准的决策辅助。首先降低了"必须现在决定"的压力。然后巧妙地区分了家人的看法和案主自己的想法，将决策权还给案主。两个假设性提问（接了怎样/不接怎样）是帮助犹豫者理清思路的经典技巧——不是让他"选对的"，而是让他想象两种可能的未来，从自己的感受中找到答案。',
            nextNodeId: 'ep-node-5',
            emotionImpact: 1,
          },
          {
            id: 'ep-4b',
            text: '你妈妈和爸爸的意见你都听到了。那你自己内心是怎么想的？你最大的顾虑是什么？',
            techniques: ['open_questions', 'focusing'],
            quality: 'good',
            feedback:
              '引导案主关注自己的内心想法和核心顾虑，方向正确。但对家庭压力的回应可以更充分——案主不仅在面对职业选择，还在承受家庭期望的压力，这两个层面可以分别处理。单纯问"你怎么想"可能让他更焦虑，因为"不知道怎么想"正是他的困境。',
            nextNodeId: 'ep-node-5',
            emotionImpact: 0,
          },
          {
            id: 'ep-4c',
            text: '你妈说得也对，先有个工作做着，总比在家待着强。这个offer可以先接，不喜欢再换。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '直接站在了妈妈的立场上给出了"先接着"的建议。虽然这在实用角度可能有道理，但社工替案主做了决定，违背了自决原则。而且"总比在家待着强"的比较暗示"你的选择只有这个offer或继续在家"，否定了继续寻找更合适工作的可能性。评估面谈中，社工应帮助案主思考和选择，而不是告诉他该怎么做。',
            nextNodeId: 'ep-node-5',
            emotionImpact: -1,
          },
          {
            id: 'ep-4d',
            text: '你都25了，不能再挑了。你看你同学都在工作了，你还在犹豫什么呢？',
            techniques: [],
            quality: 'poor',
            feedback:
              '年龄焦虑+社会比较的双重压力施加。"不能再挑了"否定了案主做选择的权利，"还在犹豫什么"否定了他的决策困难。这种回应本质上是在用社会压力逼案主做决定，而不是帮助他理清思路。对一个刚刚建立起一些自信、正在学习做决定的年轻人来说，这种催促式的回应只会增加焦虑和无力感。',
            nextNodeId: 'ep-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ep-node-5',
        stage: 'evaluation',
        clientMessage:
          '嗯...如果接了的话，虽然工资不高，但至少有事做，可以学一些东西。如果不接...说实话我有点怕，怕又回到那个状态，每天在家什么都不想做...那真的太难受了。其实我心里可能是想接的，但就是觉得...丢人。',
        clientEmotion: 'sad',
        clientAction: '(说到"丢人"时声音很小，不敢看社工)',
        hints: [
          '案主其实已经有了倾向（想接），障碍是"丢人"的感觉',
          '"丢人"背后是社会比较和面子文化的影响',
          '需要帮助他重新定义"第一份工作"的意义',
        ],
        requiredTechniques: ['positive_reframing', 'encouragement'],
        responseOptions: [
          {
            id: 'ep-5a',
            text: '小田，你刚才说了一句很关键的话——"心里可能是想接的"。你对自己的内心是有感觉的。你怕的不是这份工作本身，而是"别人怎么看"。我想帮你换一个角度来看：在家一年后，靠自己的努力拿到了offer，做出了选择，开始了工作——这件事本身，丢人吗？还是说，其实需要很大的勇气？第一份工作不是终点，它是一个起点。你同学小李在大厂的第一份工作也不是他的最后一份。',
            techniques: ['positive_reframing', 'encouragement', 'open_questions'],
            quality: 'excellent',
            feedback:
              '极其出色的积极重构。首先准确地识别了案主的内心倾向和真正的障碍（不是工作不好，是怕丢人）。然后通过反问"这件事丢人吗"让案主自己去重新审视。"第一份工作不是终点而是起点"重新定义了这个选择的意义。最后用小李的例子——不是用来比较，而是用来说明"每个人都有起点"——非常巧妙地化解了比较心理。',
            nextNodeId: 'ep-node-6',
            emotionImpact: 2,
          },
          {
            id: 'ep-5b',
            text: '你心里想接，那说明你对这份工作不是完全排斥的。"丢人"这个感觉...你是怕谁觉得丢人呢？',
            techniques: ['reflection_feelings', 'open_questions'],
            quality: 'good',
            feedback:
              '捕捉了案主的内心倾向和"丢人"的核心感受，引导探索"怕谁觉得丢人"有助于理清是自我评价还是外部压力。但对"丢人"这种感受缺少重构——仅仅探索还不够，案主需要被帮助看到另一种理解自己选择的方式。',
            nextNodeId: 'ep-node-6',
            emotionImpact: 1,
          },
          {
            id: 'ep-5c',
            text: '丢什么人呢，有工作就好了。现在大学生找工作都不容易，你不用觉得丢人。',
            techniques: ['normalizing'],
            quality: 'fair',
            feedback:
              '"丢什么人呢"虽然意在安慰，但直接否定了案主的感受。对一个25岁、在同龄人比较中感到自卑的年轻人来说，"丢人"的感受是真实而强烈的，不会因为一句"不用觉得丢人"就消失。"大学生找工作都不容易"虽然是正常化的尝试，但过于泛泛。案主需要的是帮他重新理解自己的选择，而不是被告诉"不要这样想"。',
            nextNodeId: 'ep-node-6',
            emotionImpact: -1,
          },
          {
            id: 'ep-5d',
            text: '其实你这份offer虽然不是大公司，但小公司也有小公司的好处——学的东西多、晋升快。你应该知足。',
            techniques: ['providing_information'],
            quality: 'poor',
            feedback:
              '替案主分析小公司的优势并要求"知足"，暗含双重问题：一是社工在推销这个offer，替案主做了判断；二是"知足"是一种道德要求，暗示案主"不满足就是贪心"。社工的角色不是推销任何一个选择，而是帮助案主基于自己的价值观和优先级做出自主决定。',
            nextNodeId: 'ep-node-6',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'ep-node-6',
        stage: 'evaluation',
        clientMessage:
          '嗯...确实，从零开始到现在，好像也不是一件容易的事情。我想了想，我应该是想接的。虽然不完美，但至少是一个开始。不过老师，接了之后我们还能继续聊吗？我怕工作了之后遇到问题不知道怎么办。',
        clientEmotion: 'hopeful',
        clientAction: '(微微抬头，表情比来时轻松了许多)',
        hints: [
          '小田做出了初步决定，需要被肯定和支持',
          '他对新环境有担忧，这是正常的',
          '需要做阶段总结并安排后续的跟进计划',
        ],
        requiredTechniques: ['summarizing', 'encouragement'],
        responseOptions: [
          {
            id: 'ep-6a',
            text: '小田，你今天做出了一个重要的决定——这个决定是你自己思考之后做出的，不是因为谁催你、谁逼你。你刚来的时候，在家待了一年，不敢出门面试，觉得自己什么都不行。三个月后的今天，你修好了简历、参加了面试、拿到了offer，现在准备开始工作了。这是你自己一步步走过来的。当然可以继续来找我。我建议你入职后的第一个月，我们每两周见一次面，聊聊你工作中的情况。如果碰到急的问题，也可以随时给我发消息。你看这样安排行吗？',
            techniques: ['summarizing', 'encouragement', 'outcome_evaluation', 'suggestion'],
            quality: 'excellent',
            feedback:
              '完美的评估收尾。首先肯定了案主自主做出决定的过程和能力（"你自己思考之后"）。然后用三个月的时间线做了一个完整的进步总结，让案主清晰地看到自己的成长轨迹。最后对后续跟进给出了具体的安排——频率、时长、特殊情况的处理——结构清晰、让人安心。整个回应温暖而专业，让案主带着信心和安全感离开。',
            nextNodeId: 'ep-node-6-end',
            emotionImpact: 2,
          },
          {
            id: 'ep-6b',
            text: '你想接就接吧，挺好的。当然可以继续来，有什么问题随时聊。',
            techniques: ['encouragement'],
            quality: 'good',
            feedback:
              '简洁地支持了案主的决定并表达了持续的可用性。但收尾过于简略——三个月的辅导过程和今天的评估面谈值得一个更完整的总结。案主带着怎样的自我认知离开、下一步的具体安排是什么、什么情况下来找社工——这些在收尾时都应该明确。一个好的总结可以让案主的进步被"固定"下来。',
            nextNodeId: 'ep-node-6-end',
            emotionImpact: 1,
          },
          {
            id: 'ep-6c',
            text: '嗯，那你就接了吧。工作之后应该就不需要来了，有问题可以自己想办法。年轻人要学会独立。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '"有问题自己想办法""学会独立"对一个刚从长期待业中走出来的案主来说过于冷淡。他主动表达了对新环境的担忧和对持续支持的需求，这是信任的表现，也是合理的需要。在他即将进入一个新环境的关键时刻切断支持，可能增加他的不安全感。评估后的跟进计划应基于案主的实际需要来制定。',
            nextNodeId: 'ep-node-6-end',
            emotionImpact: -1,
          },
          {
            id: 'ep-6d',
            text: '接了之后好好干，别老想着跟别人比。你要对得起这个机会，人家愿意录用你就说明你行。加油！',
            techniques: [],
            quality: 'poor',
            feedback:
              '充满说教意味的结尾。"别老想着比""对得起机会""人家愿意录用你"每一句都在施加压力而非给予支持。"人家愿意录用你就说明你行"的潜台词是"你本来不行，人家给了你机会"。整个回应把案主放在了一个感恩戴德的位置上，没有帮他看到自己的主体性和力量。评估的收尾应该让案主带着对自己能力的信心离开，而不是带着对外界的感恩和对失败的恐惧。',
            nextNodeId: 'ep-node-6-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },
];
