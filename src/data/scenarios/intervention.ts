import { Scenario } from '../types';

export const newInterventionScenarios: Scenario[] = [
  // ============================================================
  // 场景1：社交恐惧干预（小何）
  // ============================================================
  {
    id: 'social-anxiety-intervention',
    title: '社交恐惧干预',
    subtitle: '无法在课堂发言的小何如何迈出第一步',
    category: '心理健康',
    difficulty: 'intermediate',
    primaryStage: 'intervention',
    estimatedTime: '25-35分钟',
    coverColor: '#EFF6FF, #DBEAFE',
    icon: '💭',
    clientProfile: {
      name: '小何',
      age: 23,
      gender: '女',
      occupation: '研二研究生',
      avatar: '👩‍🎓',
      background:
        '小何从小内向,研究生阶段社交恐惧加剧,无法在课堂发言、汇报,甚至不敢去食堂。已接案评估并制定计划,目前进入第四次面谈的干预阶段。前三次建立了良好的工作关系,今天开始进行认知行为干预。',
      presentingProblem: '社交恐惧严重影响学业与日常生活,无法在课堂上发言和汇报,回避社交场合。',
      emotionalState: 'anxious',
      keyTraits: ['社交回避', '灾难化想象', '自我否定', '有觉察力', '渴望改变'],
    },
    description:
      '小何是一名研二学生,社交恐惧严重影响其学业和日常生活。经过前三次面谈建立了良好的工作关系后,今天进入认知行为干预阶段。本场景帮助学习者练习认知重构、苏格拉底式提问、现实检验等干预技巧,引导案主识别和挑战社交焦虑中的灾难化思维,并布置行为作业帮助案主逐步暴露。',
    learningObjectives: [
      '练习运用认知重构技术挑战案主的灾难化想象',
      '掌握苏格拉底式提问引导案主自我发现',
      '学习现实检验技术帮助案主区分想象与事实',
      '练习心理教育帮助案主理解焦虑机制',
      '学习设计渐进式行为作业促进案主改变',
    ],
    dialogueNodes: [
      {
        id: 'sa-node-1',
        stage: 'intervention',
        clientMessage:
          '老师,上周说好的那个课堂发言的事...我还是没做到。导师让我们每个人汇报论文进度,轮到我的时候我就...脑子一片空白,心跳得特别快,最后说了句"我还在整理",就坐下了。',
        clientEmotion: 'anxious',
        clientAction: '(低头看着地面,双手攥着衣角)',
        hints: [
          '案主因为没有完成上次约定的任务而感到愧疚和焦虑',
          '先肯定她愿意尝试的勇气,避免强化"失败"的感觉',
          '可以用心理教育解释焦虑的生理反应机制',
        ],
        requiredTechniques: ['psychoeducation', 'encouragement'],
        responseOptions: [
          {
            id: 'sa-1a',
            text: '小何,谢谢你愿意把这件事告诉我。我注意到你说"没做到",但其实你并没有完全回避——你坐在那里,轮到你的时候你开口说话了,虽然只有一句。我想先问问你:当时脑子一片空白、心跳加速,你知道这是什么在起作用吗？',
            techniques: ['encouragement', 'psychoeducation', 'socratic_questioning'],
            quality: 'excellent',
            feedback:
              '出色的回应。首先肯定了案主"没有完全回避"这个事实,将"失败"重新定义为"部分成功",避免强化习得性无助。然后用苏格拉底式提问引入心理教育,让案主主动思考焦虑的生理机制,而非被动接受知识。这种引导方式能增强案主的自我觉察和掌控感。',
            nextNodeId: 'sa-node-2',
            emotionImpact: 2,
          },
          {
            id: 'sa-1b',
            text: '嗯,听起来那个场景确实让你很紧张。脑子空白和心跳加速,其实是我们身体的"战或逃"反应,面对压力时身体自动启动的。这不是你的错,是大脑在保护你。',
            techniques: ['psychoeducation', 'normalizing'],
            quality: 'good',
            feedback:
              '提供了有价值的心理教育内容,帮助案主理解焦虑的生理基础。正常化了她的反应。但直接讲解知识的方式偏被动,如果能先用提问引导案主自己思考,效果会更好。同时也可以先肯定她"到场并开口"这一步。',
            nextNodeId: 'sa-node-2',
            emotionImpact: 1,
          },
          {
            id: 'sa-1c',
            text: '那当时是什么让你觉得说不出来？是对内容不熟悉,还是害怕被别人评价？',
            techniques: ['concretization'],
            quality: 'fair',
            feedback:
              '直接进入原因分析,忽略了案主因"没做到"而产生的愧疚和自责情绪。在干预阶段,虽然问题探索很重要,但案主目前的情绪状态更需要先被接住。过早追问原因可能让案主觉得被审视,加重她的焦虑。',
            nextNodeId: 'sa-node-2',
            emotionImpact: -1,
          },
          {
            id: 'sa-1d',
            text: '其实课堂发言也没那么可怕啊,大家都很忙,根本不会注意你说了什么。下次你就大胆说就好了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"没那么可怕"和"大胆说就好了"是典型的问题最小化和空洞建议。对社交恐惧的案主来说,这种回应会让她觉得自己的恐惧是"不合理的""不应该的",反而加重自我否定。社交恐惧不是"想开了就好"的问题,它需要系统的认知和行为干预。',
            nextNodeId: 'sa-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sa-node-2',
        stage: 'intervention',
        clientMessage:
          '嗯...我其实知道一点,就是那种应激反应。但我控制不了啊。每次一想到要在那么多人面前说话,我脑子里就自动冒出来那些画面——他们觉得我说得很烂,然后互相交换眼神,觉得我不配读研。',
        clientEmotion: 'anxious',
        clientAction: '(握紧拳头,呼吸变快)',
        hints: [
          '案主描述了典型的灾难化想象——将未发生的事情当成必然结果',
          '可以用苏格拉底式提问帮助她检验这些想象的真实性',
          '注意区分"事实"和"想象",这是认知重构的核心',
        ],
        requiredTechniques: ['socratic_questioning', 'cognitive_restructuring'],
        responseOptions: [
          {
            id: 'sa-2a',
            text: '你描述得很清楚。我注意到你说的是"他们觉得我说得很烂""互相交换眼神"——小何,我想请你仔细想一下,这些是你亲眼看到的,还是你脑子里想象出来的画面？上次课堂上,有没有人真的这样做过？',
            techniques: ['socratic_questioning', 'cognitive_restructuring', 'reality_testing'],
            quality: 'excellent',
            feedback:
              '精准地运用了苏格拉底式提问和现实检验。通过"亲眼看到的还是想象出来的"这个关键问题,温和但有力地帮助案主区分事实与想象。没有直接否定她的感受,而是引导她自己去检验,这比社工说"你想多了"有效得多。案主自己发现的真相才最有说服力。',
            nextNodeId: 'sa-node-3',
            emotionImpact: 1,
          },
          {
            id: 'sa-2b',
            text: '这种脑子里自动冒出来的画面,在心理学上叫做"自动化思维"。它们来得很快,感觉很真实,但不一定是真的。你愿意和我一起检验一下这些想法吗？',
            techniques: ['psychoeducation', 'cognitive_restructuring'],
            quality: 'good',
            feedback:
              '引入了"自动化思维"的概念进行心理教育,帮助案主给自己的体验命名,这本身就有赋权作用。"不一定是真的"也是认知重构的起点。但如果能进一步用具体的提问引导案主自己去检验,效果会更好。',
            nextNodeId: 'sa-node-3',
            emotionImpact: 1,
          },
          {
            id: 'sa-2c',
            text: '你有没有试过深呼吸或者放松训练？在紧张的时候可以用这些方法来缓解一下。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '放松训练确实是焦虑管理的有效方法,但此刻案主正在描述认知层面的核心问题——灾难化想象。如果跳过认知工作直接给行为建议,是"治标不治本"。应该先帮助案主看到她的想象并非事实,再配合行为技巧。干预的顺序和时机很重要。',
            nextNodeId: 'sa-node-3',
            emotionImpact: -1,
          },
          {
            id: 'sa-2d',
            text: '研究生阶段大家都很忙,说实话没人有空去评价你。你太在意别人的看法了,其实别人根本没那么关注你。',
            techniques: [],
            quality: 'poor',
            feedback:
              '虽然"别人没那么关注你"可能是事实,但这种直接告知的方式既否定了案主的感受,也无法产生真正的认知改变。案主的恐惧是主观真实的,被人说"你想多了"只会让她觉得不被理解。认知重构应该通过引导式提问让案主自己发现,而不是由社工直接"纠正"。',
            nextNodeId: 'sa-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sa-node-3',
        stage: 'intervention',
        clientMessage:
          '好像...确实没有人真的那样看过我。但是我就是觉得他们心里在想啊...你说的"想象出来的",我好像能分辨,但当时在那个场景里我就是分不清楚了,就是觉得每个人都在盯着我。',
        clientEmotion: 'confused',
        clientAction: '(皱眉思索,语速放慢)',
        hints: [
          '案主开始有认知松动,承认"没有人真的那样做过"',
          '但仍然觉得"在场景中分不清",这是正常的——认知和情绪处理的时间差',
          '可以用心理教育解释"聚光灯效应",帮她理解这是常见的认知偏差',
        ],
        requiredTechniques: ['psychoeducation', 'reality_testing'],
        responseOptions: [
          {
            id: 'sa-3a',
            text: '你刚才的发现非常重要——"没有人真的那样做过"。你看,现在冷静下来你能分辨,但在当时分不清,这其实是很正常的。心理学上有一个概念叫"聚光灯效应":当我们紧张的时候,会觉得所有人都在关注自己,就好像舞台上的聚光灯只照在自己身上。但实际上,每个人都忙着准备自己的内容呢。',
            techniques: ['encouragement', 'psychoeducation', 'reality_testing'],
            quality: 'excellent',
            feedback:
              '多层次的出色回应。首先肯定了案主的发现,强化了她的觉察力。然后用"聚光灯效应"这个生动的比喻进行心理教育,帮助案主理解自己的认知偏差不是个人缺陷,而是人类共有的心理现象。最后用"每个人都忙着准备自己的内容"进行现实检验,非常具体且有说服力。',
            nextNodeId: 'sa-node-4',
            emotionImpact: 2,
          },
          {
            id: 'sa-3b',
            text: '对,在紧张的时候确实很难区分想象和现实。但你现在能看到"没有人真的那样做过",这就是很大的进步。我们可以练习一种方法,帮助你在紧张的时候也能做这个区分。',
            techniques: ['encouragement', 'reality_testing'],
            quality: 'good',
            feedback:
              '肯定了案主的进步,也正常化了"在场景中分不清"的体验。提出"可以练习一种方法"给了案主希望。但可以更具体地解释为什么在场景中会分不清(如聚光灯效应),帮助案主建立更系统的理解。',
            nextNodeId: 'sa-node-4',
            emotionImpact: 1,
          },
          {
            id: 'sa-3c',
            text: '那你觉得他们心里在想什么呢？你能具体说说吗？',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '虽然探索案主的具体想法在某些时候是有价值的,但此刻案主已经初步承认"没有人真的那样做过",认知松动正在发生。继续追问"他们心里在想什么"反而可能让案主重新沉浸在灾难化想象中,错失巩固认知改变的时机。应该趁热打铁,帮助她理解这种现象。',
            nextNodeId: 'sa-node-4',
            emotionImpact: -1,
          },
          {
            id: 'sa-3d',
            text: '所以你也知道那些都是你想象出来的对吧？既然知道了,下次就提醒自己"这是我的想象,不是真的"就好了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"既然知道了就提醒自己就好了"严重低估了认知改变的难度。案主刚说了"当时分不清",你就让她"提醒自己",这等于忽略了她的核心困难。认知行为干预不是"知道了就能做到",它需要系统的练习和逐步的行为暴露。这种过度简化的回应会让案主觉得"原来这么简单的事我都做不到",反而加深自我否定。',
            nextNodeId: 'sa-node-4',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'sa-node-4',
        stage: 'intervention',
        clientMessage:
          '聚光灯效应...我好像在哪里听过。确实是这样,我总觉得全世界都在看我。但是老师,就算别人没有在看我,我还是很怕啊。一想到要开口说话,我就会想到万一说错了怎么办、万一卡壳了怎么办...',
        clientEmotion: 'anxious',
        clientAction: '(双手交叉抱胸,身体微微后缩)',
        hints: [
          '案主接受了聚光灯效应的概念,但焦虑并未完全消除',
          '她的核心恐惧从"别人怎么看我"转向"万一说错了/卡壳了"',
          '可以用苏格拉底式提问探索"说错了/卡壳了"的后果,进行灾难化解构',
        ],
        requiredTechniques: ['socratic_questioning', 'cognitive_restructuring'],
        responseOptions: [
          {
            id: 'sa-4a',
            text: '你提到了两个担心:说错了,和卡壳了。我们一个一个来看。假设真的说错了——你觉得最糟糕的情况是什么？然后我想请你再想想,最可能发生的情况是什么？这两个一样吗？',
            techniques: ['socratic_questioning', 'cognitive_restructuring'],
            quality: 'excellent',
            feedback:
              '经典的认知重构技术——"最坏情况vs最可能情况"。通过将两个担心拆开处理("一个一个来"),降低了案主的认知负荷。引导案主自己去比较最坏情况和最可能情况,让她发现自己一直在用最坏情况来预测,而最可能情况往往没那么可怕。这种方法比直接说"不会那么糟"有效得多。',
            nextNodeId: 'sa-node-5',
            emotionImpact: 1,
          },
          {
            id: 'sa-4b',
            text: '你说"万一说错了""万一卡壳了",我听到了很多"万一"。你觉得这些"万一"真的发生的概率有多大呢？如果用0到100分来打分的话。',
            techniques: ['socratic_questioning', 'scaling_questions'],
            quality: 'good',
            feedback:
              '用量表问题和苏格拉底式提问相结合,帮助案主将模糊的恐惧量化。当案主用数字来评估概率时,往往会发现自己高估了风险。这是认知重构的有效起点。不过可以进一步引导她思考"即使发生了,后果真的不可承受吗"。',
            nextNodeId: 'sa-node-5',
            emotionImpact: 1,
          },
          {
            id: 'sa-4c',
            text: '说错了也没关系的,大家都会说错,这很正常。卡壳也是,你看那些演讲高手有时候也会卡壳。',
            techniques: ['normalizing'],
            quality: 'fair',
            feedback:
              '正常化的方向是对的,但方式过于泛泛。案主的恐惧是具体的、个人化的,用"大家都会""很正常"这样概括性的安慰很难触及她的核心担忧。应该通过提问引导她自己去思考"说错了会怎样",让她自己得出"没那么可怕"的结论,而不是由社工告诉她。',
            nextNodeId: 'sa-node-5',
            emotionImpact: -1,
          },
          {
            id: 'sa-4d',
            text: '那你可以提前把要说的话写下来,背熟了再说。这样就不怕说错或者卡壳了。',
            techniques: ['suggestion'],
            quality: 'poor',
            feedback:
              '给出了看似实用的建议,但实际上是在帮案主回避核心问题。"写下来背熟"是一种安全行为,虽然短期内可能减轻焦虑,但长期来看会强化"我必须完美准备才能开口"的信念,维持甚至加重社交恐惧。认知行为干预应该挑战不合理信念,而不是用安全行为来绕过它。',
            nextNodeId: 'sa-node-5',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'sa-node-5',
        stage: 'intervention',
        clientMessage:
          '最糟糕的...就是被笑话,然后导师觉得我不行,让我延毕。最可能的...好像就是说得不太流利,然后导师让我继续加油。嗯,好像确实不一样。其实我上次组会说得磕磕巴巴的,导师也只是说"下次准备充分一些",根本没有那么严重。',
        clientEmotion: 'hopeful',
        clientAction: '(放松了一些,若有所思地点头)',
        hints: [
          '案主通过自己的思考产生了重要领悟,这个转变要充分肯定',
          '案主提供了真实的反例证据(导师的实际反应),可以帮助她巩固这个发现',
          '可以开始引导她思考下一步的行为作业',
        ],
        requiredTechniques: ['encouragement', 'homework_assignment'],
        responseOptions: [
          {
            id: 'sa-5a',
            text: '你看,你自己就找到了最好的证据——导师实际的反应是"下次准备充分一些",而不是你想象中的嘲笑和延毕。当我们焦虑的时候,大脑会自动跳到最坏情况,但现实往往没有那么可怕。小何,既然你已经看到了这一点,我们能不能一起设计一个小小的"实验",下周试一试？',
            techniques: ['encouragement', 'cognitive_restructuring', 'homework_assignment'],
            quality: 'excellent',
            feedback:
              '完美的过渡回应。首先用案主自己的证据巩固认知重构的成果,强化"想象vs现实"的对比。然后用"小小的实验"来引入行为作业,将其框架为"验证新发现"而非"完成任务",降低了案主的压力和抗拒感。"一起设计"体现了合作精神,让案主感到被尊重和赋权。',
            nextNodeId: 'sa-node-6',
            emotionImpact: 2,
          },
          {
            id: 'sa-5b',
            text: '对,导师的实际反应和你想象的完全不同。这就是我们说的"灾难化思维"——总是预测最坏的结果,但最坏的结果很少真的发生。接下来我们可以想想,下周你可以做些什么来继续验证这个发现。',
            techniques: ['encouragement', 'psychoeducation', 'homework_assignment'],
            quality: 'good',
            feedback:
              '回应了案主的发现,并进行了心理教育(灾难化思维的定义)。提出了行为作业的方向。但"总是预测最坏结果"的表述可能让案主觉得被贴标签。可以用更温和、更具体的方式来命名这个模式,比如引用她自己的例子。',
            nextNodeId: 'sa-node-6',
            emotionImpact: 1,
          },
          {
            id: 'sa-5c',
            text: '嗯,所以你现在知道了,其实没有你想的那么严重。以后要发言的时候你就想想导师上次怎么回应你的。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '方向正确,但过于简单化。"以后想想导师的回应"确实是一种认知策略,但没有结构化地转化为具体的行为作业。案主需要的是渐进式的实践计划,而不是一个笼统的建议。同时错过了充分肯定案主自我发现的机会。',
            nextNodeId: 'sa-node-6',
            emotionImpact: -1,
          },
          {
            id: 'sa-5d',
            text: '很好,那你下周组会就主动举手发言吧,不要再逃避了。你已经知道不会有什么可怕的后果了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"主动举手发言"对于一个社交恐惧的案主来说是巨大的跳跃,这种作业目标设置得太高,极可能导致失败,反而强化案主的"我做不到"信念。行为作业应该遵循渐进原则,从案主能够完成的小步骤开始。"不要再逃避了"也带有批评意味,会损害工作关系。',
            nextNodeId: 'sa-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sa-node-6',
        stage: 'intervention',
        clientMessage:
          '小小的实验...听起来还可以。但我怕自己又做不到,像上次一样。老师你觉得我可以从哪里开始？我是不是太胆小了...',
        clientEmotion: 'anxious',
        clientAction: '(抬头看着社工,眼神中有期待也有不确定)',
        hints: [
          '案主表达了愿意尝试但又担心失败,需要帮助她设计可行的渐进目标',
          '她问"是不是太胆小了"是自我否定,需要正面回应',
          '行为作业要具体、可行、渐进,确保成功体验',
        ],
        requiredTechniques: ['encouragement', 'homework_assignment'],
        responseOptions: [
          {
            id: 'sa-6a',
            text: '你不是胆小,你是在面对一个真实的困难,而你现在愿意面对它,这本身就需要很大的勇气。我们从最小的一步开始:这周你可以试试在课堂上——不用发言——只是在心里默默说一句"他们没有在看我,我是安全的"。然后下课后,把当时的感受记下来。我们下次见面的时候一起看看。你觉得这个可以做到吗？',
            techniques: ['encouragement', 'homework_assignment', 'cognitive_restructuring'],
            quality: 'excellent',
            feedback:
              '全方位的优秀回应。首先重新定义了"胆小"——面对困难而不是性格缺陷,有效回应了案主的自我否定。行为作业的设计遵循了渐进原则:从内心独白开始而非外显行为,大大降低了失败风险;要求记录感受增加了觉察和反思;用"你觉得可以做到吗"确认了案主的自主权和能力评估。这种作业设计能帮助案主积累成功体验,建立信心。',
            nextNodeId: 'sa-node-6-end',
            emotionImpact: 2,
          },
          {
            id: 'sa-6b',
            text: '你愿意尝试就已经很好了。我们可以从小事开始,比如下周找一个你比较熟悉的同学,私下讨论一个论文相关的问题,不用在大教室里,就一对一聊。完成后告诉我你的感受。',
            techniques: ['encouragement', 'homework_assignment'],
            quality: 'good',
            feedback:
              '行为作业的设计合理:从安全的一对一环境开始,对象是熟悉的同学,内容是专业话题(案主有能力的领域)。但没有直接回应"是不是太胆小了"这个自我否定,错过了一个重要的认知重构机会。可以更明确地帮助案主重新定义这个标签。',
            nextNodeId: 'sa-node-6-end',
            emotionImpact: 1,
          },
          {
            id: 'sa-6c',
            text: '你不胆小。那我们就定个目标,下周你在组会上至少说一句话,哪怕只是"我同意"或者"我也这么觉得"。可以吗？',
            techniques: ['homework_assignment'],
            quality: 'fair',
            feedback:
              '肯定了案主不胆小,但没有展开。行为作业的方向对(渐进式暴露),但"在组会上说话"对目前阶段的案主来说可能仍然太难。此外,"至少说一句话"虽然门槛不高,但组会的公开场合仍是案主最恐惧的情境,如果失败会重复"又没做到"的挫败感。应该先在更安全的环境中练习。',
            nextNodeId: 'sa-node-6-end',
            emotionImpact: -1,
          },
          {
            id: 'sa-6d',
            text: '你不要总给自己贴"胆小"的标签。很多人都害怕公开发言,这是最常见的恐惧之一。回去好好想想我们今天聊的内容,下次告诉我你的感受。',
            techniques: ['normalizing'],
            quality: 'poor',
            feedback:
              '"不要总给自己贴标签"虽然意图好,但"不要"的表述本身是一种否定。没有帮助案主理解为什么这不是胆小,也没有提供替代性的自我评价。行为作业太模糊——"好好想想今天聊的内容"缺乏具体的操作指引,案主不知道该想什么、怎么想、想到什么程度。有效的行为作业需要清晰、具体、可操作、可评估。',
            nextNodeId: 'sa-node-6-end',
            emotionImpact: -1,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景2：家庭角色冲突干预（陈先生）
  // ============================================================
  {
    id: 'family-role-intervention',
    title: '家庭角色冲突干预',
    subtitle: '在事业与家庭间挣扎的陈先生',
    category: '婚姻家庭',
    difficulty: 'advanced',
    primaryStage: 'intervention',
    estimatedTime: '30-40分钟',
    coverColor: '#FEF9C3, #FDE68A',
    icon: '⚖️',
    clientProfile: {
      name: '陈先生',
      age: 38,
      gender: '男',
      occupation: 'IT公司项目经理',
      avatar: '👨‍💼',
      background:
        '陈先生工作繁忙,妻子抱怨他不顾家,两个孩子也跟他不亲近。上周妻子提出如果他不改变就离婚。他感到矛盾:工作不能放,家庭也不能丢。已完成评估和计划,目前是第五次面谈。',
      presentingProblem: '工作与家庭角色严重冲突,面临妻子离婚威胁,亲子关系疏远。',
      emotionalState: 'confused',
      keyTraits: ['工作至上', '情感表达困难', '责任感重', '缺乏平衡', '有改变压力'],
    },
    description:
      '陈先生是一名IT项目经理,长期处于工作与家庭角色的冲突中。妻子的离婚威胁使他不得不正视问题。本场景帮助学习者练习替代性思维、认知重构、适度自我披露等高级干预技巧,引导案主重新审视"工作至上"的核心信念,探索更平衡的角色定位。',
    learningObjectives: [
      '练习运用替代性思维帮助案主跳出二元对立思维',
      '掌握认知重构技术挑战案主的核心信念',
      '学习适度的自我披露增强工作联盟',
      '练习运用面质技术温和但有力地指出矛盾',
      '学习设计针对家庭关系的行为作业',
    ],
    dialogueNodes: [
      {
        id: 'fr-node-1',
        stage: 'intervention',
        clientMessage:
          '老师,这周情况更糟了。我老婆开始跟我分房睡了。我其实也想改,但公司项目正在关键期,我不可能现在撂挑子。你说我是不是只能先顾好工作,等项目结束了再说？',
        clientEmotion: 'confused',
        clientAction: '(揉太阳穴,表情疲惫)',
        hints: [
          '案主陷入了"非此即彼"的二元思维:要么工作,要么家庭',
          '他在寻求社工的认可来维持现状("你说是不是"),需要注意不要被卷入',
          '可以用替代性思维帮助他看到"工作和家庭不是二选一"',
        ],
        requiredTechniques: ['alternative_thinking', 'cognitive_restructuring'],
        responseOptions: [
          {
            id: 'fr-1a',
            text: '陈先生,我听到你说"先顾工作,等项目结束再说"——我很想理解你的处境。但我想和你一起想一个问题:你觉得项目结束之后,是不是就不会有下一个项目了？你提到的"等一等",在过去几年里有没有真的等到过那个时机？',
            techniques: ['socratic_questioning', 'cognitive_restructuring', 'confrontation'],
            quality: 'excellent',
            feedback:
              '非常精准的干预。用苏格拉底式提问温和地揭示了案主"等项目结束再说"这个想法的逻辑漏洞——项目是不会结束的,总会有下一个。这不是对抗性的面质,而是引导案主自己发现自己一直在用"等一等"来回避改变。同时没有直接否定他的工作压力,保持了尊重。',
            nextNodeId: 'fr-node-2',
            emotionImpact: 1,
          },
          {
            id: 'fr-1b',
            text: '我能理解你的压力,工作和家庭都很重要。不过我注意到你把这件事当成了一个"要么A要么B"的选择题。你觉得有没有可能,不是"先工作后家庭",而是同时做一些小的调整呢？',
            techniques: ['alternative_thinking', 'empathy'],
            quality: 'good',
            feedback:
              '指出了案主的二元思维,并提出了替代性的可能。共情了他的压力。但"同时做一些小的调整"比较抽象,如果能像excellent回应那样用提问引导案主自己发现"等一等"的模式,效果会更深入。',
            nextNodeId: 'fr-node-2',
            emotionImpact: 1,
          },
          {
            id: 'fr-1c',
            text: '你老婆分房睡了,说明她的底线已经很近了。你确定还能"等项目结束再说"吗？',
            techniques: ['confrontation'],
            quality: 'fair',
            feedback:
              '虽然指出了问题的紧迫性,但这种面质方式过于直接和对抗,可能激发案主的防御反应。特别是用了"你确定吗"这种反问语气,听起来像是在质疑案主的判断,而不是帮助他思考。面质应该温和但有力,要让案主觉得"被看见"而不是"被审判"。',
            nextNodeId: 'fr-node-2',
            emotionImpact: -1,
          },
          {
            id: 'fr-1d',
            text: '确实,工作是很重要。项目关键期你不能分心,等忙完这阵子再好好陪陪家人。我觉得你老婆应该能理解你的。',
            techniques: [],
            quality: 'poor',
            feedback:
              '完全顺从了案主"先工作再家庭"的思维模式,甚至帮他合理化。社工不是来认可案主现有模式的,特别是当这个模式正在造成严重后果时。"你老婆应该能理解"更是在为案主的行为辩护,忽视了妻子已经提出离婚的事实。这样做等于帮案主维持了导致问题的行为模式。',
            nextNodeId: 'fr-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'fr-node-2',
        stage: 'intervention',
        clientMessage:
          '你说得对...确实没有真正等到过。每次忙完一个项目,马上就有下一个。但是你不知道我们公司的竞争有多激烈,我要是表现不好,随时可能被裁。到时候连养家的能力都没了。',
        clientEmotion: 'anxious',
        clientAction: '(身体前倾,语气急促)',
        hints: [
          '案主的核心信念浮现:"如果我不全力工作,就会被裁,就养不了家"',
          '这是一种灾难化思维,可以用认知重构来挑战',
          '注意:案主把"养家"当作唯一的价值,忽略了情感陪伴的价值',
        ],
        requiredTechniques: ['cognitive_restructuring', 'self_disclosure'],
        responseOptions: [
          {
            id: 'fr-2a',
            text: '我听到了你内心很深的一个恐惧——怕失去养家的能力。这份责任感说明你非常在乎这个家。但我想和你一起看看:你现在全力以赴地工作,是为了养家;可是你的妻子说要离婚——也就是说,你正在用失去这个家的代价来养这个家。你怎么看这个矛盾？',
            techniques: ['cognitive_restructuring', 'confrontation', 'reflection_feelings'],
            quality: 'excellent',
            feedback:
              '极其有力的认知重构。通过揭示案主行为中的内在矛盾——"用失去家的代价来养家",让他看到当前模式的自我矛盾性。先肯定了他的责任感,再温和地指出矛盾,不是批判而是引导思考。这种面质既有力度又有温度,能促使案主产生深层的认知转变。',
            nextNodeId: 'fr-node-3',
            emotionImpact: 1,
          },
          {
            id: 'fr-2b',
            text: '你对被裁的担心我能理解。说实话,我以前也有过一段时间,觉得如果不比别人多付出就会被落下。后来我发现,其实效率比时长更重要。你觉得在你的工作中,加班和产出一定是成正比的吗？',
            techniques: ['self_disclosure', 'socratic_questioning'],
            quality: 'good',
            feedback:
              '适度的自我披露拉近了与案主的距离,让他感到"被理解而不是被教育"。提出的问题也有价值——引导案主反思"加班=好表现"这个隐含假设。但自我披露的内容要谨慎控制,避免过度,同时可以更直接地揭示"用失去家来养家"的矛盾。',
            nextNodeId: 'fr-node-3',
            emotionImpact: 0,
          },
          {
            id: 'fr-2c',
            text: '但你现在面临的现实是,工作保住了,家可能保不住了。你觉得哪个对你更重要？',
            techniques: ['confrontation'],
            quality: 'fair',
            feedback:
              '"哪个更重要"的提问把案主拉回了二元对立,这恰恰是他现在的困境。干预的目标应该是帮助他看到"不是二选一",而不是逼他做选择。而且这个问题的潜台词是"你应该选家庭",这属于社工将自己的价值观强加给案主。',
            nextNodeId: 'fr-node-3',
            emotionImpact: -1,
          },
          {
            id: 'fr-2d',
            text: '你的能力应该不至于被裁吧？你做到项目经理了,说明公司是认可你的。不要把事情想得那么严重。',
            techniques: [],
            quality: 'poor',
            feedback:
              '试图用逻辑来安慰案主,但"应该不至于"只是社工的猜测,缺乏说服力。"不要想得那么严重"是对案主情绪的否定。更重要的是,这种回应完全没有触及核心问题——案主将全部自我价值绑定在工作上,导致家庭关系崩溃。表面的安慰无法推动真正的改变。',
            nextNodeId: 'fr-node-3',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'fr-node-3',
        stage: 'intervention',
        clientMessage:
          '用失去家的代价来养家...这句话太扎心了。我从来没有这么想过。我一直以为我是在为这个家好,我所有的加班、出差,不都是为了给他们更好的生活吗？难道我错了？',
        clientEmotion: 'confused',
        clientAction: '(愣住了,靠在椅背上,眼眶微红)',
        hints: [
          '案主的核心信念受到了冲击,出现了认知松动',
          '他问"难道我错了"——要避免做对错评判,转而引导他理解"不是对错,而是方式"',
          '可以引导他思考"更好的生活"到底是什么,妻子和孩子真正需要的是什么',
        ],
        requiredTechniques: ['cognitive_restructuring', 'alternative_thinking'],
        responseOptions: [
          {
            id: 'fr-3a',
            text: '你的出发点一点都没有错——你确实是在为这个家努力。但"更好的生活"可能不只是物质上的。我想请你想一个问题:如果你去问你的孩子,"你想要爸爸给你买更好的玩具,还是想要爸爸周末陪你去公园？"你觉得他们会怎么选？',
            techniques: ['cognitive_restructuring', 'alternative_thinking', 'socratic_questioning'],
            quality: 'excellent',
            feedback:
              '非常巧妙的干预。首先肯定了案主的出发点,避免了他觉得"一切都否定了"的挫败感。然后通过孩子的视角来拓展"更好的生活"的定义,从物质转向情感陪伴。用孩子的选择来提问特别有效,因为答案几乎是不言自明的,案主不需要被告知,自己就能得出结论。',
            nextNodeId: 'fr-node-4',
            emotionImpact: 2,
          },
          {
            id: 'fr-3b',
            text: '不是对错的问题,陈先生。你为家庭付出了很多,这是事实。但你的妻子和孩子需要的"好",可能和你以为的不太一样。你有没有直接问过他们,他们最想要什么？',
            techniques: ['alternative_thinking', 'open_questions'],
            quality: 'good',
            feedback:
              '明确表达了"不是对错"的立场,避免了道德评判。引导案主关注家人的实际需求,提出了一个有价值的问题。但可以更具体地帮助案主理解"更好的生活"的多元含义,用更生动的例子来触发他的情感共鸣。',
            nextNodeId: 'fr-node-4',
            emotionImpact: 1,
          },
          {
            id: 'fr-3c',
            text: '不能说你错了,但你可能需要反思一下,你的加班真的都是必须的吗？有没有一些是可以减少的？',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '提出了反思加班必要性的建议,方向不错。但"你可能需要反思"的表述带有说教意味。而且这个建议停留在行为层面(减少加班),没有触及认知层面的核心信念(何为"更好的生活")。真正的改变需要从信念层面开始,行为改变才能持续。',
            nextNodeId: 'fr-node-4',
            emotionImpact: -1,
          },
          {
            id: 'fr-3d',
            text: '你当然没有错,为家庭挣钱是男人的责任。但现在时代不同了,光挣钱不陪伴是不行的。你要学会平衡。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"为家庭挣钱是男人的责任"强化了性别刻板印象,这恰恰是案主问题的根源之一。"时代不同了"和"你要学会平衡"是居高临下的说教,没有帮助案主理解为什么要改变、怎么改变。社工应该引导案主自己发现,而不是以"过来人"的姿态教训他。',
            nextNodeId: 'fr-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'fr-node-4',
        stage: 'intervention',
        clientMessage:
          '他们肯定选陪他们去公园...我女儿上次跟她妈说"爸爸是不是不喜欢我们了,为什么总不回家"。我听到这话的时候其实特别难受,但我不知道怎么表达,就假装没听见。我就是...不太会说那些温暖的话。',
        clientEmotion: 'sad',
        clientAction: '(声音低沉,避开了社工的目光)',
        hints: [
          '案主表露了深层的痛苦——女儿的话刺痛了他但他不知道如何回应',
          '他承认了情感表达的困难,这是很重要的自我觉察',
          '可以用适度自我披露来正常化"不会表达感情"的困境',
        ],
        requiredTechniques: ['self_disclosure', 'encouragement'],
        responseOptions: [
          {
            id: 'fr-4a',
            text: '听到女儿那句话你特别难受——这说明你心里是非常在乎孩子们的。你说不会说温暖的话,其实我想告诉你,很多爸爸都有这个困难,包括我自己,有时候也会觉得"我知道我爱他们,但就是说不出口"。但你知道吗,孩子不需要你说得多好,他们需要的只是你在。哪怕只是安静地坐在旁边看她写作业,对孩子来说就是"爸爸喜欢我"。',
            techniques: ['self_disclosure', 'encouragement', 'psychoeducation'],
            quality: 'excellent',
            feedback:
              '多层次的深入回应。先反映了案主的真实感受(在乎孩子),再用自我披露正常化了"不会表达"的困难,最后给出了具体的、低门槛的行动指引("安静地坐在旁边看她写作业")。自我披露的运用恰到好处:内容是共通的情感困难,不涉及过多个人隐私,且服务于案主的改变而非社工的自我表达。',
            nextNodeId: 'fr-node-5',
            emotionImpact: 2,
          },
          {
            id: 'fr-4b',
            text: '你听到女儿那句话的时候,心里是什么感受？你说"特别难受",能不能再具体一些？是内疚、心疼,还是其他什么？',
            techniques: ['reflection_feelings', 'concretization'],
            quality: 'good',
            feedback:
              '引导案主细化和命名自己的情绪,这对于"情感表达困难"的案主来说是重要的练习。帮助案主识别和区分不同的情绪,是改善情感表达的第一步。但此刻案主已经展现了脆弱的一面,可以多给一些支持和鼓励,再进行深入探索。',
            nextNodeId: 'fr-node-5',
            emotionImpact: 0,
          },
          {
            id: 'fr-4c',
            text: '你应该当时就抱抱女儿,告诉她"爸爸当然喜欢你"。孩子需要的就是这种简单的回应。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '"你应该"的表述是事后诸葛亮式的建议,案主已经错过了那个时刻,这种回应只会增加他的内疚感。而且对于情感表达困难的案主来说,"抱抱她,告诉她"说起来容易做起来难。应该先理解他为什么"假装没听见",而不是告诉他应该怎么做。',
            nextNodeId: 'fr-node-5',
            emotionImpact: -1,
          },
          {
            id: 'fr-4d',
            text: '孩子说这种话是很正常的,小孩子说话不过脑子的。你不要往心里去,她不是真的觉得你不喜欢她。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"小孩子说话不过脑子"严重低估了孩子的真实感受。6岁的孩子说"爸爸是不是不喜欢我们了"恰恰反映了她真实的情感体验,这不是"不过脑子",而是她对父亲缺席的真实反应。这种回应不仅否定了孩子的感受,也阻断了案主刚刚出现的情感觉察和自我反思。',
            nextNodeId: 'fr-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'fr-node-5',
        stage: 'intervention',
        clientMessage:
          '安静地坐在旁边看她写作业...这个我确实可以做到。但是说实话,我回到家经常已经很晚了,孩子都睡了。就算是周末,我也经常带着电脑在客厅加班。我老婆就是因为这个跟我吵。她说"你人在家心不在家,还不如不回来"。',
        clientEmotion: 'sad',
        clientAction: '(叹了口气,搓了搓脸)',
        hints: [
          '案主认可了"陪伴"的可行性,但指出了现实障碍——回家太晚、周末也在加班',
          '妻子的话"人在家心不在家"揭示了问题的核心不只是时间,更是质量',
          '可以用面质帮助他看到"带电脑回家加班"这个行为本身传递的信息',
        ],
        requiredTechniques: ['confrontation', 'homework_assignment'],
        responseOptions: [
          {
            id: 'fr-5a',
            text: '你老婆说的那句话其实信息量很大。她不是说你回家太晚,而是说你"人在家心不在家"——她在乎的不是你在不在家,而是你在家的时候有没有真正"在场"。陈先生,我想请你想一下:如果这个周末,你能不能选两个小时,把电脑关掉、手机放在一边,完完全全地和家人待在一起？不需要做什么特别的事,就只是"在场"。你觉得两个小时可以做到吗？',
            techniques: ['confrontation', 'homework_assignment', 'cognitive_restructuring'],
            quality: 'excellent',
            feedback:
              '堪称完美的干预回应。先通过解读妻子的话,帮助案主理解问题的本质不是时间量而是陪伴质量。然后设计了具体、可行的行为作业:时间明确(两个小时)、行为明确(关电脑、放手机)、要求明确("在场"而非"做什么特别的事")。用"你觉得可以做到吗"确认了可行性。作业难度适中,既有挑战又不会让案主觉得不可能。',
            nextNodeId: 'fr-node-6',
            emotionImpact: 2,
          },
          {
            id: 'fr-5b',
            text: '你觉得你周末在客厅加班的时候,你的妻子和孩子看到的是什么？她们看到一个忙碌的爸爸——你觉得这跟"不回家"相比,对她们来说有区别吗？',
            techniques: ['confrontation', 'socratic_questioning'],
            quality: 'good',
            feedback:
              '用角色转换的提问帮助案主从家人的视角看自己的行为。"在客厅加班vs不回家"的比较很有冲击力,能让案主意识到"人在心不在"可能比"不在家"更让家人失望。但缺少了具体的行为作业,干预停留在认知层面,没有推向行动。',
            nextNodeId: 'fr-node-6',
            emotionImpact: 1,
          },
          {
            id: 'fr-5c',
            text: '那你有没有想过跟领导谈一谈,减少一些不必要的加班？或者把一些工作分配给下属？',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '建议的方向有道理,但这属于"解决方案导向"的回应,跳过了案主需要的认知转变过程。案主的问题不只是"加班太多",而是他把全部自我价值绑定在工作上。即使减少了加班,如果这个核心信念不改变,他在家里也可能"人在心不在"。应该先处理信念,再讨论行为。',
            nextNodeId: 'fr-node-6',
            emotionImpact: -1,
          },
          {
            id: 'fr-5d',
            text: '那你回家晚也没办法啊,工作就是这样。周末你可以少加一点班,带孩子出去玩一玩。你老婆看到你的改变应该会满意的。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"没办法"等于帮案主合理化了现状,放弃了改变的可能。"少加一点班"太笼统,缺乏具体操作。"你老婆看到应该会满意的"是社工的主观猜测,而且将案主的改变动机定位在"让妻子满意"而非自身的内在需要,这种外在动机很难持久。改变应该源于案主自己的觉察和选择。',
            nextNodeId: 'fr-node-6',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'fr-node-6',
        stage: 'intervention',
        clientMessage:
          '两个小时...应该可以。但我怕到时候又控制不住自己去看手机。而且就算我做了,我老婆现在气头上,估计也不会理我。你说我这样做真的有用吗？',
        clientEmotion: 'confused',
        clientAction: '(犹豫地点点头,但语气仍有怀疑)',
        hints: [
          '案主有两层顾虑:一是自控力,二是效果不确定',
          '对于自控力的担心,可以帮他设计具体的策略(如把手机放到另一个房间)',
          '对于"有没有用"的怀疑,需要管理预期——改变是一个过程,不是一次作业就能逆转的',
        ],
        requiredTechniques: ['suggestion', 'homework_assignment'],
        responseOptions: [
          {
            id: 'fr-6a',
            text: '你担心控制不住看手机——这个很正常,习惯的力量是很强的。你可以试试一个小方法:那两个小时,把手机调成静音,放在卧室的抽屉里。不在你面前,诱惑就小很多。至于你老婆会不会理你,说实话,一次两个小时可能不会马上修复一切。但请记住:你做这件事的意义不是为了让她"满意",而是为了你自己——你在用行动告诉自己:"我可以做一个不一样的选择。"我们下次见面时一起看看这两个小时发生了什么。',
            techniques: ['suggestion', 'homework_assignment', 'cognitive_restructuring', 'encouragement'],
            quality: 'excellent',
            feedback:
              '全面而深思熟虑的收尾。针对自控力问题给出了具体可操作的策略(手机放抽屉),而非空洞的"坚持一下"。对效果预期的管理非常到位:不回避"可能不会马上有效",同时将改变的意义从"取悦妻子"重新定义为"为自己做不同的选择",这种内在动机比外在压力更持久。最后约定了回顾时间,增强了责任感。',
            nextNodeId: 'fr-node-6-end',
            emotionImpact: 2,
          },
          {
            id: 'fr-6b',
            text: '你可以提前跟你老婆说一下,这个周末你想专门陪陪孩子和她。就算她一开始态度冷淡,你的行动她是能感受到的。改变不是一天两天的事,但第一步总要迈出去。',
            techniques: ['suggestion', 'homework_assignment', 'encouragement'],
            quality: 'good',
            feedback:
              '建议提前沟通和预期管理都是对的。"你的行动她能感受到"和"第一步总要迈出去"有鼓励作用。但没有针对"控制不住看手机"给出具体策略,也没有将改变的动力从"让妻子满意"转向内在动机。实操性可以更强一些。',
            nextNodeId: 'fr-node-6-end',
            emotionImpact: 1,
          },
          {
            id: 'fr-6c',
            text: '有没有用你试了才知道嘛。总比什么都不做强吧。你先做了再说,我们下次再看情况。',
            techniques: ['homework_assignment'],
            quality: 'fair',
            feedback:
              '"试了才知道"虽然不假,但语气过于随意,显得对案主的顾虑不够重视。"总比什么都不做强"是一种勉强的鼓励,缺乏力量。案主需要的是帮助他理解这样做的深层意义,以及应对可能困难的具体策略,而不是"先做了再说"这种粗略的推动。',
            nextNodeId: 'fr-node-6-end',
            emotionImpact: -1,
          },
          {
            id: 'fr-6d',
            text: '你老婆现在是气话,等她消了气就好了。你这周试着早点回家,给她买束花,女人嘛,哄一哄就没事了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"气话""哄一哄就没事了"严重低估了婚姻危机的严重性,也带有明显的性别偏见。案主的问题不是"老婆生气了需要哄",而是长期的角色失衡导致了关系破裂。买花是表面功夫,不解决根本问题。社工不应该强化"搞定老婆"的思维,而应该帮助案主理解关系修复需要持续的、实质性的改变。',
            nextNodeId: 'fr-node-6-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景3：自伤行为干预（小薇）
  // ============================================================
  {
    id: 'self-harm-intervention',
    title: '自伤行为干预',
    subtitle: '用划手臂缓解压力的小薇',
    category: '危机干预',
    difficulty: 'advanced',
    primaryStage: 'intervention',
    estimatedTime: '30-40分钟',
    coverColor: '#FFF7ED, #FFEDD5',
    icon: '🆘',
    clientProfile: {
      name: '小薇',
      age: 18,
      gender: '女',
      occupation: '高三学生',
      avatar: '👧',
      background:
        '小薇成绩优秀但压力巨大,从高二开始用刀划手臂来"让自己冷静下来"。被同学发现后告诉了心理老师,转介到社工。已接案评估,确认非自杀性自伤(NSSI)。已建立信任关系,今天是第六次面谈,进入核心干预。',
      presentingProblem: '非自杀性自伤行为(NSSI),以划手臂作为情绪调节方式,已持续一年余。',
      emotionalState: 'calm',
      keyTraits: ['情绪调节困难', '高成就压力', '述情障碍', '自伤作为应对', '有治疗动机'],
    },
    description:
      '小薇是一名成绩优秀的高三学生,长期以划手臂的方式来应对压力和情绪。经过前五次面谈的评估和关系建立,今天进入核心干预阶段。本场景帮助学习者练习外化技术、心理教育、替代性思维等干预技巧,引导案主理解自伤行为的功能、探索替代性的情绪调节方式,并建立安全计划。',
    learningObjectives: [
      '练习运用外化技术将问题与人分离',
      '掌握针对自伤行为的心理教育(功能分析)',
      '学习引导案主探索替代性的情绪调节方式',
      '练习在敏感话题上运用确认和共情',
      '学习设计安全计划作为行为作业',
    ],
    dialogueNodes: [
      {
        id: 'sh-node-1',
        stage: 'intervention',
        clientMessage:
          '老师,上周又划了一次。其实那几天情绪都还好,但是周四晚上模拟考分数出来,年级排名掉了十名,我就突然觉得特别烦躁,然后...就又划了。划完之后倒是冷静下来了。',
        clientEmotion: 'calm',
        clientAction: '(平静地描述,拉了拉袖子遮住手臂)',
        hints: [
          '案主以平静的语气叙述自伤行为,说明她已经习惯化了这种应对方式',
          '注意她描述了清晰的触发-行为-结果链:排名下降→烦躁→划手→冷静',
          '不要急于制止或批评,先用确认来接住她,然后引导她理解自伤的"功能"',
        ],
        requiredTechniques: ['validation', 'psychoeducation'],
        responseOptions: [
          {
            id: 'sh-1a',
            text: '谢谢你愿意告诉我这件事,小薇。我知道说出来不容易。你刚才描述了一个很清楚的过程:排名掉了→特别烦躁→划了之后冷静了。我想和你一起来看看这个过程——划手这件事,对你来说起到了一个什么样的作用？',
            techniques: ['validation', 'psychoeducation', 'open_questions'],
            quality: 'excellent',
            feedback:
              '出色的回应。首先肯定了案主的坦诚("说出来不容易"),建立了安全感。然后将案主的经历梳理成清晰的触发-行为-结果链条,这本身就是一种心理教育(功能分析)。最后用开放式提问邀请案主一起探索自伤行为的"功能",而不是直接告诉她"你不应该这样做"。这种不评判、探索性的态度对于自伤议题至关重要。',
            nextNodeId: 'sh-node-2',
            emotionImpact: 1,
          },
          {
            id: 'sh-1b',
            text: '嗯,听你这么说,划手对你来说像是一种让自己冷静下来的方式。我不会评判你,但我很想了解更多:那个"特别烦躁"的感觉,是什么样的？身体上有什么感觉吗？',
            techniques: ['validation', 'empathy', 'concretization'],
            quality: 'good',
            feedback:
              '表达了不评判的态度,初步命名了自伤的功能(让自己冷静)。引导案主探索烦躁的具体体验,特别是身体感觉,这对于述情障碍的案主来说是有价值的练习。但可以更系统地帮助案主看到触发-行为-结果的完整链条,为后续干预奠定基础。',
            nextNodeId: 'sh-node-2',
            emotionImpact: 1,
          },
          {
            id: 'sh-1c',
            text: '掉了十名就划自己,这样的反应是不是有点过了？你的成绩已经很好了,不至于因为这个伤害自己吧。',
            techniques: [],
            quality: 'fair',
            feedback:
              '"有点过了"和"不至于"是对案主行为的评判和感受的否定。对于自伤行为,最忌讳的就是评判——这会让案主觉得自己"不正常""反应过度",反而可能加重羞耻感,导致她隐藏行为不再求助。社工的首要任务是理解自伤对案主的功能和意义,而不是评判它是否"合理"。',
            nextNodeId: 'sh-node-2',
            emotionImpact: -1,
          },
          {
            id: 'sh-1d',
            text: '小薇,你一定要停止划自己!这样下去会留下疤痕,而且可能会越来越深,很危险。你要答应我以后不再这样了,好吗？',
            techniques: [],
            quality: 'poor',
            feedback:
              '虽然出于关心,但"你一定要停止""答应我不再这样"是在用权威和道德压力要求案主立即改变,完全忽视了自伤行为对案主的心理功能。在案主没有学会替代性应对方式之前,强行要求停止自伤反而可能让她失去唯一的情绪调节手段,导致更危险的后果。专业干预应该"先增加替代方式,再减少自伤行为"。',
            nextNodeId: 'sh-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sh-node-2',
        stage: 'intervention',
        clientMessage:
          '它的作用...就是让我能感觉到疼,然后脑子里那些乱七八糟的想法就停下来了。就好像你在一个很吵的房间里,突然有人关掉了所有噪音,世界安静了。我知道这样不好,但我真的不知道还有什么别的方法。',
        clientEmotion: 'calm',
        clientAction: '(语气平静但认真,手指无意识地摸着手腕)',
        hints: [
          '案主用了一个生动的比喻:"关掉噪音",可以运用外化技术来工作',
          '她说"我知道这样不好但不知道别的方法",说明她有改变的动机但缺乏替代策略',
          '这是引入心理教育(情绪调节的概念)和外化技术的好时机',
        ],
        requiredTechniques: ['externalization', 'psychoeducation'],
        responseOptions: [
          {
            id: 'sh-2a',
            text: '你用了一个很好的比喻——"关掉噪音"。我想借用你的这个说法:划手对你来说就像是一个"紧急静音键",在脑子里太吵的时候按一下,世界就安静了。但问题是,这个"静音键"是有副作用的。所以我们今天要做的,不是夺走你的"静音键",而是一起找到其他几个不伤害你身体的"静音键"。你觉得这个想法怎么样？',
            techniques: ['externalization', 'psychoeducation', 'alternative_thinking'],
            quality: 'excellent',
            feedback:
              '教科书级别的外化技术运用。将自伤行为外化为"紧急静音键",实现了三个目标:1)承认了自伤行为的功能(它确实有用),避免了道德评判;2)温和地指出了副作用,建立改变的必要性;3)"不是夺走,而是找到替代"传递了核心信息——我们不会剥夺你的应对方式,而是帮你扩展。这种框架能最大程度降低案主的抗拒,建立合作。',
            nextNodeId: 'sh-node-3',
            emotionImpact: 2,
          },
          {
            id: 'sh-2b',
            text: '你说的"脑子里乱七八糟的想法停下来",在心理学上叫做"情绪调节"。划手帮你实现了情绪调节,但代价是伤害了自己的身体。其实情绪调节有很多方式,我们可以一起探索一些对你身体没有伤害的方式。',
            techniques: ['psychoeducation', 'alternative_thinking'],
            quality: 'good',
            feedback:
              '引入了"情绪调节"的专业概念,帮助案主理解自伤行为的本质。也明确了干预方向(寻找替代方式)。但比起excellent回应,少了外化技术的运用,没有借用案主自己的比喻来构建理解框架。案主自己的语言往往比专业术语更有共鸣和说服力。',
            nextNodeId: 'sh-node-3',
            emotionImpact: 1,
          },
          {
            id: 'sh-2c',
            text: '我理解,划手确实能让你暂时冷静下来。但这是一种自我伤害的行为,长期来看对你的身心都不好。你有没有试过其他方法,比如跑步、听音乐之类的？',
            techniques: ['empathy', 'suggestion'],
            quality: 'fair',
            feedback:
              '表达了理解,但"这是自我伤害""长期不好"的表述偏向说教。"你有没有试过跑步、听音乐"这种随意列举替代方式的做法过于简单化——如果这些方法对案主有效,她早就用了。替代方式的探索应该基于对案主自伤功能的深入理解,而不是泛泛的建议。',
            nextNodeId: 'sh-node-3',
            emotionImpact: -1,
          },
          {
            id: 'sh-2d',
            text: '那些乱七八糟的想法是什么？考试排名掉了有那么严重吗？高考前成绩波动很正常,不用那么紧张。',
            techniques: [],
            quality: 'poor',
            feedback:
              '完全忽视了案主正在描述的自伤行为的功能,转而去追问和否定她的学业压力。"有那么严重吗"是对感受的否定,"很正常"是不恰当的正常化——对这个案主来说,压力确实到了需要自伤来调节的程度,这不是"正常"能打发的。这种回应会让案主觉得"你根本不懂我",严重损害信任关系。',
            nextNodeId: 'sh-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sh-node-3',
        stage: 'intervention',
        clientMessage:
          '"不是夺走,而是找到替代"...这个说法我能接受。其实我也不想划,每次看到手臂上的痕迹我也很讨厌自己。但就是到了那个时刻,除了这个我什么都想不到。就好像脑子被那个情绪完全占据了,什么理智都没有了。',
        clientEmotion: 'sad',
        clientAction: '(低头看着自己的手腕,声音变小)',
        hints: [
          '案主表达了对自伤的矛盾情感——既依赖又讨厌,这是常见的',
          '她描述了"脑子被情绪占据"的体验,可以用心理教育解释情绪淹没的机制',
          '要接住她"讨厌自己"的自我否定,用确认来回应,避免她陷入更深的羞耻',
        ],
        requiredTechniques: ['validation', 'psychoeducation'],
        responseOptions: [
          {
            id: 'sh-3a',
            text: '你说"讨厌自己"——小薇,我想让你知道,划手这件事不等于你这个人。你在承受很大的压力,你在用你当时唯一知道的方式来应对,这不是你的错。至于你说的"脑子被情绪占据",这在心理学上有一个说法叫做"情绪淹没":当压力超过我们的承受阈值时,大脑的理性思考功能会暂时关闭,只剩下求助和应对——你的"划手"就是大脑在那个时刻唯一能找到的"出口"。所以我们要做的,是在你还没被淹没之前,多准备几个"出口"。',
            techniques: ['validation', 'psychoeducation', 'externalization'],
            quality: 'excellent',
            feedback:
              '层次分明的专业回应。首先将行为与人分离("划手不等于你"),直接回应了案主的自我否定。然后用"情绪淹没"的概念进行心理教育,帮助案主理解自己的体验不是"疯了"或"软弱",而是有科学解释的心理机制。最后用"在被淹没之前准备出口"自然地过渡到替代策略的探索。整个回应既有温度又有专业深度。',
            nextNodeId: 'sh-node-4',
            emotionImpact: 2,
          },
          {
            id: 'sh-3b',
            text: '你不需要讨厌自己。很多人在面对巨大压力时都会用一些方式来应对,只是方式不同。你能意识到这个问题,并且愿意来这里谈,说明你在努力照顾自己。我们来一起了解一下,为什么在那个时刻你"什么都想不到"。',
            techniques: ['validation', 'normalizing', 'encouragement'],
            quality: 'good',
            feedback:
              '对案主的自我否定做了温暖的回应,正常化了"用方式应对压力"这一点,也肯定了案主的求助行为。"一起了解"展现了合作态度。但在解释"什么都想不到"的机制上可以更具体,引入情绪淹没等心理教育内容会更有帮助。',
            nextNodeId: 'sh-node-4',
            emotionImpact: 1,
          },
          {
            id: 'sh-3c',
            text: '你说到了那个时刻什么理智都没有了——那我们可以试着在你还有理智的时候做好准备。比如写一个"冷静卡片",上面列上你可以做的其他事情。',
            techniques: ['suggestion', 'homework_assignment'],
            quality: 'fair',
            feedback:
              '"冷静卡片"的方向是对的,这是安全计划的一部分。但跳得太快——案主刚说了"讨厌自己",你没有接住这个情感,直接跳到了技术层面。对于一个正在体验羞耻和自我否定的案主,先处理情绪再给建议是基本原则。而且"还有理智的时候做好准备"的措辞可能让案主觉得自己"失去理智",加重负面感受。',
            nextNodeId: 'sh-node-4',
            emotionImpact: -1,
          },
          {
            id: 'sh-3d',
            text: '你讨厌自己是因为你知道这样做不对。所以你更要下决心改掉这个习惯。你可以找一根橡皮筋戴在手腕上,烦躁的时候弹一下,替代划手。',
            techniques: [],
            quality: 'poor',
            feedback:
              '多处专业错误。1)"你知道这样做不对"强化了道德评判,加重羞耻感;2)"改掉这个习惯"将复杂的心理行为简化为"习惯",忽视了其深层的心理功能;3)橡皮筋替代法虽然在某些文献中提及,但因为它本质上仍是以"疼痛"来调节情绪,并不被推荐为首选替代策略——它可能维持"需要疼痛才能冷静"的模式。应该探索非疼痛类的调节方式。',
            nextNodeId: 'sh-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sh-node-4',
        stage: 'intervention',
        clientMessage:
          '情绪淹没...这个词很准确。就是被淹没的感觉。那老师,你说在被淹没之前准备"出口"——但我不知道什么东西能替代划手。因为划手的效果是最快的,几秒钟就能让我冷静。别的方法都太慢了,根本来不及。',
        clientEmotion: 'confused',
        clientAction: '(认真思考,但有些无奈)',
        hints: [
          '案主的核心顾虑是"速度"——她需要的是即时有效的替代方式',
          '可以引入一些快速起效的感官调节方法(如握冰块、冷水洗脸)',
          '也可以引导她思考"预警信号",在情绪淹没之前就启动应对',
        ],
        requiredTechniques: ['alternative_thinking', 'empathy'],
        responseOptions: [
          {
            id: 'sh-4a',
            text: '你说的对,划手之所以"有效",一个很重要的原因是它很快——强烈的身体感觉可以在几秒钟内打断情绪。所以我们找替代方式的时候,也要找能快速产生强烈感觉但不伤害你的方法。比如:从冰箱里拿一块冰,握在手里——冰的刺痛感同样能快速把你从情绪中"拉"出来,但不会留下伤口。或者用冷水拍脸,也能很快让大脑"重启"。你觉得这些方法,在那个时刻你愿意试试吗？',
            techniques: ['alternative_thinking', 'empathy', 'psychoeducation'],
            quality: 'excellent',
            feedback:
              '回应了案主最核心的需求——速度和效果。解释了划手"有效"的原理(强烈身体感觉打断情绪),然后基于同样的原理推荐了替代方式(握冰块、冷水拍脸),这些方法有研究证据支持,速度快且不伤害身体。用"你愿意试试吗"而非"你要这样做"尊重了案主的自主权。这种基于功能分析的替代策略比随意列举"听音乐、跑步"专业得多。',
            nextNodeId: 'sh-node-5',
            emotionImpact: 2,
          },
          {
            id: 'sh-4b',
            text: '我理解你对速度的在意,毕竟在那个时刻你需要的是立刻有效的东西。其实除了划手,还有一些方式也能在短时间内带来强烈的感觉:比如含一颗很辣的糖、闻很刺激的气味。我们可以一起列一个清单,找出你愿意尝试的方法。',
            techniques: ['empathy', 'alternative_thinking'],
            quality: 'good',
            feedback:
              '理解了案主对"即时性"的需求,提出的替代方式(辣糖、刺激性气味)也符合感官替代的原理。提议一起列清单体现了合作精神。但可以更详细地解释为什么这些方法能起作用(和划手一样都是通过强烈感觉打断情绪),帮助案主理解背后的逻辑,增加她对新方法的信心。',
            nextNodeId: 'sh-node-5',
            emotionImpact: 1,
          },
          {
            id: 'sh-4c',
            text: '其实你不一定要找跟划手一样快的方法。你可以试着在情绪来的时候先忍一下,给自己十分钟,然后看看情绪是不是会慢慢过去。',
            techniques: ['suggestion'],
            quality: 'fair',
            feedback:
              '"先忍一下"的建议忽视了案主的现实——她已经明确说过"什么理智都没有了",在情绪淹没的状态下,"忍一下"是做不到的。这种建议建立在"案主有能力自控但选择不自控"的错误假设上。有效的替代方式应该与自伤行为在速度和强度上相当,而不是要求案主"忍耐"。',
            nextNodeId: 'sh-node-5',
            emotionImpact: -1,
          },
          {
            id: 'sh-4d',
            text: '你试过深呼吸吗？4-7-8呼吸法:吸气4秒,屏气7秒,呼气8秒。很多人觉得有效。你可以在紧张的时候用。',
            techniques: ['suggestion'],
            quality: 'poor',
            feedback:
              '深呼吸对于轻度焦虑可能有效,但对于案主描述的"情绪淹没"状态,深呼吸的效果太慢、太弱,无法替代自伤行为的即时效果。而且4-7-8呼吸法需要在冷静状态下学习和练习,在情绪淹没时根本无法执行。这种不考虑案主实际情况的建议会让她觉得"你不懂我的痛苦"。替代方式必须匹配自伤行为的速度和强度。',
            nextNodeId: 'sh-node-5',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'sh-node-5',
        stage: 'intervention',
        clientMessage:
          '握冰块...我可以试试。其实我家冰箱里一直有冰,之前从来没想到可以这样用。但老师,我还有一个问题——我每次都是到了很严重的时候才去划,中间有没有办法提前让自己不要到那个地步？',
        clientEmotion: 'hopeful',
        clientAction: '(坐直了一些,眼睛亮了)',
        hints: [
          '案主自己提出了"提前干预"的想法——这是非常成熟的觉察,要充分肯定',
          '可以引导她识别情绪的"预警信号",在淹没之前就采取行动',
          '这是引入情绪温度计/情绪等级的好时机',
        ],
        requiredTechniques: ['encouragement', 'psychoeducation'],
        responseOptions: [
          {
            id: 'sh-5a',
            text: '小薇,你这个问题问得特别好——你在自己思考"如何提前干预",这是非常了不起的。确实有办法。我们可以把你的情绪想象成一个温度计:0度是完全平静,10度是情绪淹没、想要划手。你以前都是到了9、10度才行动。但如果你能学会在5、6度的时候就察觉到"我在升温了",然后用一些方法让自己降温,就不需要等到被淹没的时候才紧急处理。我们来想想,5、6度的时候你的身体有什么信号？',
            techniques: ['encouragement', 'psychoeducation', 'scaling_questions'],
            quality: 'excellent',
            feedback:
              '多层次的出色回应。首先充分肯定了案主的自主思考("非常了不起"),强化了她的能动性。然后用"情绪温度计"这个形象的比喻进行心理教育,让案主理解情绪是有等级的,不是"0或10"。最后引导她识别中等强度时的身体信号,为早期干预打下基础。这种教案主"钓鱼"而非"给鱼"的方式,能帮助她建立长期的自我调节能力。',
            nextNodeId: 'sh-node-6',
            emotionImpact: 2,
          },
          {
            id: 'sh-5b',
            text: '你能想到"提前"这个概念,说明你的觉察力很强。其实每次情绪爆发之前,通常都有一些早期信号——比如注意力不集中、肩膀紧绷、开始反复想某件事。如果你能学会捕捉这些信号,就能更早地使用应对方法。',
            techniques: ['encouragement', 'psychoeducation'],
            quality: 'good',
            feedback:
              '肯定了案主的觉察力,也给出了有价值的心理教育(早期信号的例子)。但这些例子是泛泛的,没有引导案主识别属于她自己的信号。可以用提问的方式("你的信号是什么")来帮助她个性化地建立早期预警系统,这样更有针对性。',
            nextNodeId: 'sh-node-6',
            emotionImpact: 1,
          },
          {
            id: 'sh-5c',
            text: '你可以在每天的固定时间记录一下自己的情绪状态,比如用1到10分打分。这样时间长了你就能发现自己情绪变化的规律。',
            techniques: ['homework_assignment'],
            quality: 'fair',
            feedback:
              '情绪记录确实是有价值的工具,但此刻的回应没有回应案主的核心问题——"如何提前干预"。案主问的是"怎么做",你给的是"先记录",这对于一个渴望立即获得帮助的案主来说可能会感到被推迟。应该先回应她的问题(如何识别预警信号),再将情绪记录作为辅助工具引入。',
            nextNodeId: 'sh-node-6',
            emotionImpact: -1,
          },
          {
            id: 'sh-5d',
            text: '那你每次考试之前就提前做好心理准备,告诉自己"不管考多少分我都能接受"。这样心态好了,情绪就不会那么剧烈了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"告诉自己不管多少分都能接受"是一种认知层面的自我暗示,对于高成就压力的案主来说几乎不可能做到——她的成就焦虑是深层的、长期的,不是一句自我安慰能解决的。更重要的是,这种回应将问题归因为"心态不好",暗含了"你之所以自伤是因为你心态差",这对案主是不公平的,也是不准确的。自伤行为的机制远比"心态"复杂得多。',
            nextNodeId: 'sh-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sh-node-6',
        stage: 'intervention',
        clientMessage:
          '5、6度的时候...我好像会开始咬嘴唇,然后看书看不进去,会一直翻来覆去地看同一页。还有就是手会不自觉地去摸手腕上的疤。这些可以当做信号吗？',
        clientEmotion: 'hopeful',
        clientAction: '(认真回忆,手指不自觉地碰了一下手腕)',
        hints: [
          '案主识别出了三个清晰的预警信号,要充分肯定',
          '可以将这些信号整合到一个"安全计划"中,作为行为作业',
          '结束时要给予鼓励和希望,但也要强调这是一个逐步的过程',
        ],
        requiredTechniques: ['encouragement', 'homework_assignment'],
        responseOptions: [
          {
            id: 'sh-6a',
            text: '太好了,小薇!你刚才说了三个信号:咬嘴唇、看不进书反复翻同一页、手去摸手腕。这些就是你的"早期预警系统"。现在我们来做一个"安全计划":当你发现这三个信号中的任何一个出现时,第一步,离开书桌,去接一杯冷水喝;第二步,如果还是觉得在升温,拿一块冰握在手里。你觉得我们可以把这个写下来,贴在你的书桌旁边吗？下周我们见面的时候,告诉我这个计划用了几次,效果怎么样。不管结果如何,你今天做到的事情已经非常棒了——你在学会照顾自己。',
            techniques: ['encouragement', 'homework_assignment', 'validation'],
            quality: 'excellent',
            feedback:
              '完美的收尾回应。将案主识别的预警信号整合成了结构化的"安全计划":信号识别→第一步行动→升级行动。计划具体、可操作、分阶梯式。"写下来贴在书桌旁"将计划可视化,增加执行可能。约定了下周回顾,但用"不管结果如何"降低了表现压力。最后的"你在学会照顾自己"将整个干预过程框架为自我关怀而非外在要求,非常有力量。',
            nextNodeId: 'sh-node-6-end',
            emotionImpact: 2,
          },
          {
            id: 'sh-6b',
            text: '这些完全可以当做信号!你的自我观察能力很强。我建议你这周可以试试:当你发现自己在咬嘴唇或者摸手腕的时候,就暂停一下手上的事情,起来走动走动或者洗把脸。我们下周一起看看效果。',
            techniques: ['encouragement', 'homework_assignment'],
            quality: 'good',
            feedback:
              '肯定了案主的信号识别,并给出了行为作业。建议的替代行为(走动、洗脸)是合理的。但可以更结构化——列出具体的步骤和应对方案,形成书面的安全计划。另外"走动走动"比较模糊,案主在情绪升级时可能不知道具体该怎么做,需要更明确的指导。',
            nextNodeId: 'sh-node-6-end',
            emotionImpact: 1,
          },
          {
            id: 'sh-6c',
            text: '对,这些都是信号。你这周注意观察一下,看看每次出现这些信号之后多久会到达情绪淹没的程度。把时间记下来,我们下次分析。',
            techniques: ['homework_assignment'],
            quality: 'fair',
            feedback:
              '要求案主记录从预警信号到情绪淹没的时间,虽然对理解情绪模式有帮助,但这个作业的问题在于:它只是观察和记录,没有介入行动。案主可能在观察和记录的过程中经历情绪淹没,然后仍然用自伤来应对。行为作业应该包含"观察到信号后做什么",而不只是观察本身。缺少了安全计划的核心内容。',
            nextNodeId: 'sh-node-6-end',
            emotionImpact: -1,
          },
          {
            id: 'sh-6d',
            text: '嗯,不错。那你以后就注意这些信号,感觉不对就赶紧想办法。如果实在控制不住,就打电话给我。好吗？',
            techniques: [],
            quality: 'poor',
            feedback:
              '"赶紧想办法"太模糊,案主在情绪升级时根本想不出办法,这正是她的核心困难。"打电话给我"虽然出于好意,但将案主的安全完全系在社工身上是不专业的——社工不可能24小时待命,这也不利于案主建立独立的应对能力。安全计划的核心是帮助案主自己掌握具体的、可执行的应对步骤,而不是依赖社工的即时救援。',
            nextNodeId: 'sh-node-6-end',
            emotionImpact: -1,
          },
        ],
      },
    ],
  },
];
