import { Scenario } from '../types';

export const newAssessmentScenarios: Scenario[] = [
  // ============================================================
  // 场景1：产后抑郁评估（张女士）
  // ============================================================
  {
    id: 'postpartum-assessment',
    title: '产后抑郁评估',
    subtitle: '新手妈妈张女士情绪低落却不敢说',
    category: '妇幼健康',
    difficulty: 'intermediate',
    primaryStage: 'assessment',
    estimatedTime: '25-35分钟',
    coverColor: '#FDF2F8, #FCE7F3',
    icon: '🤱',
    clientProfile: {
      name: '张女士',
      age: 28,
      gender: '女',
      occupation: '产假中的白领',
      avatar: '👩‍🍼',
      background:
        '张女士产后三个月,情绪持续低落、失眠、对婴儿的哭声感到烦躁甚至有时出现"不想活了"的念头。丈夫觉得她"矫情"。社区医院产后访视时发现异常,转介到社工。',
      presentingProblem:
        '产后三个月持续情绪低落、失眠、对婴儿哭声烦躁,有"不想活了"的念头,丈夫不理解,缺乏家庭支持。',
      emotionalState: 'sad',
      keyTraits: ['产后情绪波动', '自我否定', '缺乏支持', '隐藏真实感受', '有自伤念头'],
    },
    description:
      '张女士是一位28岁的新手妈妈,产后三个月出现持续情绪低落、失眠、对婴儿哭声烦躁,甚至有"不想活了"的念头,但丈夫认为她"矫情"。社区医院产后访视发现异常后转介社工。本场景帮助学习者练习如何在安全的氛围中评估产后抑郁的严重程度,敏感地探索自杀意念,以及评估案主的支持系统。',
    learningObjectives: [
      '练习为情绪脆弱的案主营造安全的表达空间',
      '学习运用量表式提问评估抑郁严重程度',
      '掌握敏感而专业地探索自杀意念的方法',
      '评估案主的家庭支持系统及其局限性',
      '练习在产后抑郁评估中平衡温暖与专业性',
    ],
    dialogueNodes: [
      {
        id: 'pa-node-1',
        stage: 'assessment',
        clientMessage:
          '社工老师好...医院那边让我过来看看。其实我没什么大问题,就是...最近睡不太好。',
        clientEmotion: 'sad',
        clientAction: '(低着头,语气平淡,眼圈微红,双手不自觉地攥着纸巾)',
        hints: [
          '案主在最小化自己的问题——"没什么大问题"是产后妈妈常见的掩饰',
          '注意她的身体语言和真实情绪之间的矛盾',
          '先建立安全感,不要急于追问细节',
        ],
        requiredTechniques: ['empathy', 'attending'],
        responseOptions: [
          {
            id: 'pa-1a',
            text: '张女士你好,谢谢你愿意来这里。我注意到你说"没什么大问题",但我能看出来你现在并不轻松。带着小宝宝还专程过来,不容易。这里很安全,不管是大事小事,我们都可以慢慢聊。',
            techniques: ['empathy', 'attending', 'validation'],
            quality: 'excellent',
            feedback:
              '非常好的开场。你温和地指出了案主言语与情绪之间的不一致("没什么大问题"与实际的痛苦),同时肯定了她来的行为。"不管大事小事"解除了案主需要证明自己"够严重"才值得求助的压力,为后续的真实表达创造了空间。',
            nextNodeId: 'pa-node-2',
            emotionImpact: 1,
          },
          {
            id: 'pa-1b',
            text: '你好。睡不好确实很辛苦,特别是还要照顾小宝宝。你愿意跟我多说说最近的情况吗?',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '简洁温暖的回应,对"睡不好"进行了共情。不过可以更多地回应案主最小化问题的倾向,帮助她感到不需要隐藏真实感受。',
            nextNodeId: 'pa-node-2',
            emotionImpact: 0,
          },
          {
            id: 'pa-1c',
            text: '医院让你来是有原因的。你能具体说说睡不好是什么情况吗?多久了?',
            techniques: ['concretization'],
            quality: 'fair',
            feedback:
              '"医院让你来是有原因的"可能让案主感到被审视和评判。在关系尚未建立的阶段就追问具体症状,容易让案主更加退缩。产后妈妈常常害怕被贴上"有问题"的标签,需要先感到安全再逐步打开。',
            nextNodeId: 'pa-node-2',
            emotionImpact: -1,
          },
          {
            id: 'pa-1d',
            text: '新手妈妈睡不好很正常的,小孩子夜里要喂奶嘛。你是不是太累了?要注意休息啊。',
            techniques: [],
            quality: 'poor',
            feedback:
              '严重的问题最小化和正常化不当。虽然产后睡眠不好确实常见,但医院转介说明存在异常情况。这种回应等于告诉案主"你的问题不值一提",会让她更加隐藏真实感受。社工应该保持专业敏感度,不要轻率地将可能的产后抑郁症状归因于"太累了"。',
            nextNodeId: 'pa-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'pa-node-2',
        stage: 'assessment',
        clientMessage:
          '其实不只是睡不好...宝宝一哭我就特别烦躁,有时候甚至不想抱他。我知道当妈妈不应该这样想...我是不是很差劲?',
        clientEmotion: 'sad',
        clientAction: '(眼泪开始掉下来,声音哽咽)',
        hints: [
          '案主开始暴露真实感受,这是信任的信号——要温柔接住',
          '"不应该这样想"反映了强烈的自我否定和内疚',
          '用情感反映回应她的内疚和自我怀疑,而非急于评估',
        ],
        requiredTechniques: ['reflection_feelings', 'empathy'],
        responseOptions: [
          {
            id: 'pa-2a',
            text: '你能说出这些,需要很大的勇气。我听到你对宝宝的烦躁,也听到你对自己的自责——"不应该这样想""很差劲"。张女士,这不是你差劲,这恰恰说明你是一个很在乎宝宝的妈妈,只是你现在承受了太多。',
            techniques: ['reflection_feelings', 'empathy', 'validation'],
            quality: 'excellent',
            feedback:
              '非常出色。你同时做到了三件事:(1)肯定她说出真话的勇气,(2)准确反映了她的双重痛苦——对婴儿的烦躁和由此产生的自责,(3)温和地重新框架——将"差劲"转化为"在乎"。这种回应可以有效缓解产后妈妈的内疚感,让她继续安全地表达。',
            nextNodeId: 'pa-node-3',
            emotionImpact: 2,
          },
          {
            id: 'pa-2b',
            text: '很多新手妈妈都会有这种感觉,你不是一个人。对宝宝感到烦躁不代表你不爱他。你愿意多说说这种烦躁是什么时候开始的吗?',
            techniques: ['normalizing', 'open_questions'],
            quality: 'good',
            feedback:
              '正常化的运用在这里是适当的,帮助案主减轻"只有我这样"的孤独感。后续的开放式提问也很自然。不过可以更多地反映案主话语中"我是不是很差劲"背后的强烈自我否定。',
            nextNodeId: 'pa-node-3',
            emotionImpact: 1,
          },
          {
            id: 'pa-2c',
            text: '你对宝宝有烦躁感是可以理解的,照顾婴儿确实很辛苦。你老公有帮忙吗?',
            techniques: ['empathy'],
            quality: 'fair',
            feedback:
              '虽然回应了烦躁感,但过快地转向了外部因素(丈夫),没有充分处理案主正在经历的强烈的自我否定情绪。"我是不是很差劲"这个核心问题被跳过了。案主此刻最需要的是被告知她不差劲,然后才是探索支持系统。',
            nextNodeId: 'pa-node-3',
            emotionImpact: -1,
          },
          {
            id: 'pa-2d',
            text: '你不想抱宝宝?那宝宝哭的时候谁来照顾?你婆婆或者你妈妈能帮忙吗?',
            techniques: [],
            quality: 'poor',
            feedback:
              '这个回应完全忽略了案主的情感需求,直接跳到了问题解决层面。更严重的是,"那宝宝哭的时候谁来照顾"暗含了对案主母职的质疑,会加剧她本已严重的内疚感和自我否定。产后抑郁的妈妈最怕被评判为"不称职的母亲"。',
            nextNodeId: 'pa-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'pa-node-3',
        stage: 'assessment',
        clientMessage:
          '我老公根本不理解我...他说女人生孩子是天经地义的事,别人都没事就我事多。他上班很忙,回来就玩手机,孩子基本都是我一个人带。我妈住得远,婆婆身体也不好...有时候半夜喂奶的时候,我觉得全世界就剩我一个人了。',
        clientEmotion: 'distressed',
        clientAction: '(擦眼泪,语速加快,带着压抑的愤怒和委屈)',
        hints: [
          '案主的支持系统严重不足——丈夫不理解,母亲远,婆婆身体不好',
          '注意评估她的孤立程度和支持资源',
          '"全世界就剩我一个人"反映了深度的孤独感,需要被充分回应',
        ],
        requiredTechniques: ['empathy', 'open_questions'],
        responseOptions: [
          {
            id: 'pa-3a',
            text: '"全世界就剩我一个人"...这种感觉一定特别孤独和无助。你在几乎没有帮助的情况下,一个人扛了三个月,这真的很不容易。我想了解一下,除了你老公和家人,你身边还有其他可以说说话、帮帮忙的人吗?比如朋友、同事或者社区的邻居?',
            techniques: ['empathy', 'reflection_feelings', 'open_questions'],
            quality: 'excellent',
            feedback:
              '优秀的回应。先用案主自己的话("全世界就剩我一个人")进行情感反映,充分回应了孤独感。然后肯定了她独自坚持三个月的努力。最后用开放式提问系统地评估更广泛的支持网络。这种从情感到评估的过渡非常自然。',
            nextNodeId: 'pa-node-4',
            emotionImpact: 1,
          },
          {
            id: 'pa-3b',
            text: '一个人带孩子三个月,真的太辛苦了。你老公说的那些话让你很受伤吧?你有没有试过跟他好好谈谈你的感受?',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '共情了案主的辛苦,也关注到了丈夫的态度对她的伤害。不过"你有没有试过好好谈谈"有点暗示案主应该去沟通,而此刻她需要的是被理解,而不是被建议。可以先更充分地评估支持系统全貌。',
            nextNodeId: 'pa-node-4',
            emotionImpact: 0,
          },
          {
            id: 'pa-3c',
            text: '你老公可能工作压力也大,不太会表达关心。男人有时候比较粗心。你可以试试直接告诉他你需要帮忙。',
            techniques: [],
            quality: 'fair',
            feedback:
              '为丈夫辩解("工作压力大""男人粗心")严重偏离了社工的中立立场,而且否定了案主的真实感受。案主正在倾诉被忽视和不被理解的痛苦,此时为施加压力的另一方说话,会让案主觉得社工也不站在她这边。',
            nextNodeId: 'pa-node-4',
            emotionImpact: -1,
          },
          {
            id: 'pa-3d',
            text: '你老公这样确实不对。不过我们先不说他了,说说你自己吧——你最近胃口怎么样?体重有变化吗?',
            techniques: ['concretization'],
            quality: 'poor',
            feedback:
              '虽然转向症状评估在方向上没错,但转换方式过于生硬。"先不说他了"等于打断了案主正在倾诉的最痛苦的部分。而且对丈夫的评判("确实不对")虽然案主可能爱听,但社工不应该轻率地对家庭成员做出道德评价。情感未被充分处理就跳到症状核查,会让面谈变得像问卷调查。',
            nextNodeId: 'pa-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'pa-node-4',
        stage: 'assessment',
        clientMessage:
          '朋友...怀孕后就很少联系了。以前的同事偶尔发消息问问,但我也不好意思说这些。谁会理解呢?大家都觉得有了孩子应该很幸福才对...我觉得自己好像有什么毛病。',
        clientEmotion: 'sad',
        clientAction: '(苦笑了一下,语气变得很低沉)',
        hints: [
          '案主的社交支持几乎为零——高度孤立',
          '"好像有什么毛病"暗示她在自我病理化,需要温和地挑战',
          '为接下来探索更深层的情绪状态做铺垫',
        ],
        requiredTechniques: ['empathy', 'scaling_questions'],
        responseOptions: [
          {
            id: 'pa-4a',
            text: '你说"好像有什么毛病"——但其实你经历的这些感受,在产后是有科学解释的,不是你的错。张女士,我想更了解你现在的状态。如果1到10分,10分代表你感觉非常好,1分代表非常糟糕,你觉得你最近大部分时间是几分?',
            techniques: ['empathy', 'scaling_questions', 'psychoeducation'],
            quality: 'excellent',
            feedback:
              '出色的回应。先温和地挑战了案主的自我病理化——"不是你的错",引入了心理教育的视角。然后使用量表式提问(scaling questions)来系统评估抑郁严重程度。量表式提问既专业又不显得像问卷,容易被案主接受。',
            nextNodeId: 'pa-node-5',
            emotionImpact: 1,
          },
          {
            id: 'pa-4b',
            text: '觉得自己有毛病,这个想法本身一定让你更加难受。你不需要为自己的感受道歉。你最近的情绪大概是什么样的?低落的时候多还是好的时候多?',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '回应了案主的自我否定,并引导评估情绪状态的频率。不过可以运用更结构化的量表式提问来获得更清晰的评估信息。',
            nextNodeId: 'pa-node-5',
            emotionImpact: 1,
          },
          {
            id: 'pa-4c',
            text: '你可以试试加入一些妈妈群,或者社区的亲子活动,认识一些跟你情况类似的人。',
            techniques: [],
            quality: 'fair',
            feedback:
              '过早给出行动建议。案主正在表达深层的自我否定和孤立感,此刻需要的是情感回应而非社交建议。而且以案主目前的状态,她可能没有精力去社交。在评估阶段应该先充分了解问题,而非急于提供解决方案。',
            nextNodeId: 'pa-node-5',
            emotionImpact: -1,
          },
          {
            id: 'pa-4d',
            text: '产后情绪波动很多人都有,你不用太担心。等孩子大一点就好了,现在最辛苦的阶段。',
            techniques: [],
            quality: 'poor',
            feedback:
              '再次将可能的产后抑郁正常化为"情绪波动","等孩子大点就好了"是毫无根据的保证。产后抑郁如果不干预可能持续数月甚至数年。这种回应不仅不准确,还会让案主觉得自己在小题大做,可能延误她寻求专业帮助的时机。',
            nextNodeId: 'pa-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'pa-node-5',
        stage: 'assessment',
        clientMessage:
          '大部分时间...可能2分吧。有时候半夜醒过来,看着天花板,就会想...活着好累,如果我不在了,也许宝宝跟着奶奶或者外婆反而会被照顾得更好...',
        clientEmotion: 'distressed',
        clientAction: '(声音很轻,不敢看社工,双手紧紧绞在一起)',
        hints: [
          '【关键节点】案主透露了自杀意念——必须进行安全评估',
          '"如果我不在了"和"宝宝跟别人反而更好"是自杀意念的明确信号',
          '需要直接但温和地询问自杀想法的具体程度,不要回避这个话题',
        ],
        requiredTechniques: ['empathy', 'concretization'],
        responseOptions: [
          {
            id: 'pa-5a',
            text: '张女士,谢谢你告诉我这些,我知道说出来很不容易。你刚才说"如果我不在了"...我想直接问你,你有没有想过伤害自己或者结束自己的生命?我问这个不是要吓你,是因为你的安全对我来说很重要,我需要了解你现在的真实状态。',
            techniques: ['empathy', 'concretization', 'attending'],
            quality: 'excellent',
            feedback:
              '教科书级的自杀意念评估回应。你做到了:(1)肯定案主分享的勇气,(2)直接但温和地提出自杀评估问题——研究表明直接询问不会"种下"自杀念头,反而能让案主感到被认真对待,(3)解释了为什么要问,降低了案主的恐惧和防御。产后抑郁评估中,对自杀意念的直接评估是必须的专业行为。',
            nextNodeId: 'pa-node-6',
            emotionImpact: 1,
          },
          {
            id: 'pa-5b',
            text: '你说"如果我不在了"...我很担心你。你最近有过类似的想法吗?想要伤害自己或者觉得活着没有意义?',
            techniques: ['empathy', 'concretization'],
            quality: 'good',
            feedback:
              '正确地抓住了自杀意念的信号并进行了直接询问,这一点很好。不过"我很担心你"虽然真诚,但可以补充说明为什么要询问这个问题,让案主理解这是专业评估而非个人的紧张反应,避免增加案主的心理负担。',
            nextNodeId: 'pa-node-6',
            emotionImpact: 0,
          },
          {
            id: 'pa-5c',
            text: '你现在太累了,才会这样想。宝宝最需要的就是妈妈,谁都替代不了你。你要为宝宝坚强起来啊。',
            techniques: [],
            quality: 'fair',
            feedback:
              '严重的错误回应。当案主透露自杀意念时,用"为宝宝坚强"来回应是非常危险的——(1)没有进行安全评估,(2)用母职责任来"绑架"案主,加重她的负担,(3)否定了她的感受。自杀意念需要被直接、专业地评估,而不是被道德劝说"想开"。',
            nextNodeId: 'pa-node-6',
            emotionImpact: -1,
          },
          {
            id: 'pa-5d',
            text: '别这样想!你还这么年轻,宝宝还那么小,有什么过不去的坎呢?你要不要跟你老公聊聊?让他多帮帮你。',
            techniques: [],
            quality: 'poor',
            feedback:
              '极其危险的回应。"别这样想""有什么过不去的"是对自杀意念的否定和最小化,等于关上了案主唯一愿意打开的求助之门。研究表明,这种回应会增加自杀风险。让她去找"不理解她"的丈夫更是南辕北辙。面对自杀意念,社工必须直面、评估并制定安全计划,绝不能回避或轻视。',
            nextNodeId: 'pa-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'pa-node-6',
        stage: 'assessment',
        clientMessage:
          '想过...但没有具体想过怎么做。就是有时候那个念头会冒出来,然后我又会想到宝宝...我不想真的伤害自己,但那种感觉很可怕,我控制不了。我从来没跟任何人说过这些...',
        clientEmotion: 'distressed',
        clientAction: '(终于抬起头,眼泪流下来,神情既害怕又有一丝释然)',
        hints: [
          '案主有被动的自杀意念但没有具体计划——风险等级需要记录',
          '她第一次向人倾诉——这是重要的求助信号,要充分肯定',
          '需要在此收尾,安排后续的安全计划和转介精神科评估',
        ],
        requiredTechniques: ['empathy', 'attending'],
        responseOptions: [
          {
            id: 'pa-6a',
            text: '张女士,今天你告诉我这些,是非常勇敢的一步。你从来没跟人说过,但今天你说了——这说明你内心有一部分是在求助的。我听到你说有这样的念头但没有具体的想法,这让我稍微放心一些,但我仍然很重视。接下来我想帮你做两件事:一是安排一次精神科的专业评估,二是我们一起制定一个"困难时刻"的安全计划。你愿意吗?',
            techniques: ['empathy', 'attending', 'concretization'],
            quality: 'excellent',
            feedback:
              '完美的评估收尾。你做到了:(1)充分肯定案主求助的勇气,(2)对自杀风险进行了初步评级(有意念无计划),(3)没有过度反应也没有轻视,(4)提出了明确的下一步——精神科评估和安全计划。"你愿意吗"尊重了案主的自主权。这体现了社工在危机评估中的专业素养。',
            nextNodeId: 'pa-end',
            emotionImpact: 2,
          },
          {
            id: 'pa-6b',
            text: '谢谢你信任我,告诉我这些。你说的这种念头虽然可怕,但你能意识到它、说出来,这本身就是很重要的一步。我建议你去看一下精神科医生做个评估,我可以帮你预约。同时,如果夜里又出现那种念头,你可以拨打这个24小时心理热线。',
            techniques: ['empathy', 'attending'],
            quality: 'good',
            feedback:
              '提供了精神科转介和危机热线,方向正确。不过可以更系统地对风险进行评级,并且制定更完整的安全计划(不只是热线号码)。同时可以更多地强调案主求助行为本身的意义。',
            nextNodeId: 'pa-end',
            emotionImpact: 1,
          },
          {
            id: 'pa-6c',
            text: '你能告诉我这些,我很感动。不过你也说了没有具体的想法,所以应该还好。你回去之后多休息,心情不好的时候可以来找我聊聊。',
            techniques: ['empathy'],
            quality: 'fair',
            feedback:
              '"应该还好"对自杀意念的评估过于轻率。没有具体计划不代表没有风险——被动的自杀意念仍然需要专业评估和随访。缺少转介精神科的安排和安全计划。"多休息""来找我聊聊"对于有自杀意念的案主来说,支持力度远远不够。',
            nextNodeId: 'pa-end',
            emotionImpact: -1,
          },
          {
            id: 'pa-6d',
            text: '你千万不能有这种想法!宝宝还那么小,没有妈妈怎么行?你这种情况我需要通知你的家人,让他们多关注你。',
            techniques: [],
            quality: 'poor',
            feedback:
              '多重严重错误:(1)"千万不能有这种想法"是情绪压制,会让案主后悔告诉你,(2)用母职责任施压让案主更加内疚,(3)未经案主同意就要通知家人——而她的丈夫恰恰是不理解她的人,这会严重破坏信任关系,甚至可能增加风险。保密原则和知情同意在危机评估中仍然适用,需要与案主协商,而非单方面决定。',
            nextNodeId: 'pa-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景2：疑似老人受虐评估（刘奶奶）
  // ============================================================
  {
    id: 'elderly-abuse-assessment',
    title: '疑似老人受虐评估',
    subtitle: '刘奶奶身上有伤但否认被虐待',
    category: '老年保护',
    difficulty: 'advanced',
    primaryStage: 'assessment',
    estimatedTime: '30-40分钟',
    coverColor: '#F0FDF4, #DCFCE7',
    icon: '🏥',
    clientProfile: {
      name: '刘奶奶',
      age: 78,
      gender: '女',
      occupation: '退休教师',
      avatar: '👵',
      background:
        '刘奶奶独居,由儿媳每天来送饭照顾。社区工作者发现她手臂有淤伤,精神萎靡。上门后刘奶奶说是自己摔的,但邻居反映听到过争吵声。需要谨慎评估。',
      presentingProblem:
        '手臂发现淤伤且精神萎靡,自称摔倒所致,但邻居反映有争吵声,疑似遭受家庭暴力或虐待,需评估安全状况。',
      emotionalState: 'resistant',
      keyTraits: ['否认受虐', '维护家庭面子', '经济依赖', '孤立无援', '害怕报复'],
    },
    description:
      '刘奶奶是一位78岁的独居退休教师,由儿媳每天来送饭照顾。社区工作者发现她手臂有淤伤且精神萎靡,刘奶奶坚称是自己摔的,但邻居反映听到过争吵声。本场景帮助学习者练习如何在不直接对抗否认的情况下,谨慎评估老人是否遭受虐待,同时理解老年人否认受虐背后的复杂心理。',
    learningObjectives: [
      '学习在案主否认的情况下进行间接评估的技巧',
      '理解老年受虐者否认背后的多重心理因素',
      '练习敏感地观察和记录可疑伤痕',
      '掌握评估老年人安全状况和生活品质的方法',
      '学习在保护老人安全与尊重其自主权之间取得平衡',
    ],
    dialogueNodes: [
      {
        id: 'ea-node-1',
        stage: 'assessment',
        clientMessage:
          '哎呀,你们社区的人太客气了,还专门来看我。我好着呢,不用担心。就是老了,腿脚不利索,前两天自己摔了一跤。',
        clientEmotion: 'resistant',
        clientAction: '(笑着迎接,但笑容有些僵硬;下意识地把有淤伤的手臂往身后藏)',
        hints: [
          '注意案主的身体语言——藏手臂是重要的非语言线索',
          '不要直接质疑她的说辞,会让她更加防御',
          '先建立关系,用关心而非调查的姿态进入',
        ],
        requiredTechniques: ['attending', 'active_listening'],
        responseOptions: [
          {
            id: 'ea-1a',
            text: '刘奶奶好!我今天就是来串串门,看看您。最近天气忽冷忽热的,您身体还好吧?我看您脸色好像有点疲惫呢,最近休息得怎么样?',
            techniques: ['attending', 'active_listening', 'open_questions'],
            quality: 'excellent',
            feedback:
              '非常自然的开场。以"串门"的姿态降低了案主的防御。没有直接提伤,而是从整体健康状况切入。"脸色有点疲惫"是基于观察的温和表达,比直接问伤更让案主感到安全。在老年虐待评估中,建立信任和降低防御是第一步。',
            nextNodeId: 'ea-node-2',
            emotionImpact: 1,
          },
          {
            id: 'ea-1b',
            text: '刘奶奶好!摔了一跤啊?疼不疼?我看看您胳膊上那个伤。',
            techniques: ['attending'],
            quality: 'good',
            feedback:
              '表达了关心,但过快地把注意力引向伤痕。虽然出发点是好的,但案主正试图隐藏伤痕,直接要求"看看"可能让她更加紧张。在第一次接触时,可以更迂回一些。',
            nextNodeId: 'ea-node-2',
            emotionImpact: 0,
          },
          {
            id: 'ea-1c',
            text: '刘奶奶,我是社区的社工,我们接到反映说您这边可能有些情况,所以来了解一下。',
            techniques: [],
            quality: 'fair',
            feedback:
              '"接到反映"会让案主立刻警觉——她会想"谁在说我?"这种开场等于把访问变成了调查,案主的防御会立刻升到最高。老年虐待评估需要更柔和的方式进入,让案主感到是被关心而非被调查。',
            nextNodeId: 'ea-node-2',
            emotionImpact: -1,
          },
          {
            id: 'ea-1d',
            text: '刘奶奶,您手臂上那个淤伤看着不像是摔的啊。有人打您了吗?您不用怕,告诉我。',
            techniques: ['confrontation'],
            quality: 'poor',
            feedback:
              '开场就直接对抗案主的说辞并质问是否被打,这在老年虐待评估中是大忌。(1)直接质疑会让案主感到被审问,更加封闭,(2)案主有否认的心理需求(维护面子、害怕报复),过早揭露会适得其反,(3)"您不用怕"在关系尚未建立时毫无说服力。',
            nextNodeId: 'ea-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ea-node-2',
        stage: 'assessment',
        clientMessage:
          '休息...还行吧。就是晚上有时候睡不太好,年纪大了嘛。对了,我给你倒杯水——哎哟!',
        clientEmotion: 'anxious',
        clientAction: '(起身倒水时右臂用力,疼得缩了回去,表情痛苦了一瞬,然后赶紧恢复笑容)',
        hints: [
          '案主的疼痛反应是一个重要的观察窗口',
          '这是自然地关心伤情的好时机,但仍需要小心',
          '注意她的反应模式——疼痛→掩饰→恢复正常,暗示她习惯了隐藏',
        ],
        requiredTechniques: ['attending', 'empathy'],
        responseOptions: [
          {
            id: 'ea-2a',
            text: '刘奶奶,您别动,我自己来!您坐着。我看您刚才胳膊好像很疼的样子,这样疼着怎么行呢?有没有去医院看过?',
            techniques: ['attending', 'empathy', 'open_questions'],
            quality: 'excellent',
            feedback:
              '抓住了案主暴露疼痛的自然时机,以关心而非审问的口吻询问。"有没有去医院看过"既是合理的健康关怀,也在间接评估伤情的严重程度以及她是否被允许就医。这种不动声色的评估方式对老年人来说接受度很高。',
            nextNodeId: 'ea-node-3',
            emotionImpact: 1,
          },
          {
            id: 'ea-2b',
            text: '小心!您胳膊还疼呢,别使劲了。水我自己倒就行。您这个伤摔了有几天了?',
            techniques: ['attending', 'concretization'],
            quality: 'good',
            feedback:
              '自然地表达关心,并追问时间线。了解伤情发生的时间对评估很有帮助。但"摔了有几天了"直接延续了案主"自己摔的"说法,可能被案主用来强化否认的叙事。',
            nextNodeId: 'ea-node-3',
            emotionImpact: 0,
          },
          {
            id: 'ea-3c',
            text: '没事没事,我来帮您倒。刘奶奶您真客气。',
            techniques: ['attending'],
            quality: 'fair',
            feedback:
              '礼貌但浪费了一个重要的评估机会。案主刚刚不小心暴露了真实的疼痛程度,这是自然地关心伤情的好时机。"没事没事"反而配合了案主的掩饰行为。在评估阶段,社工需要敏锐地抓住这些窗口。',
            nextNodeId: 'ea-node-3',
            emotionImpact: -1,
          },
          {
            id: 'ea-2d',
            text: '刘奶奶,您这个伤不是摔的吧?摔跤一般不会伤到手臂上面这个位置的。',
            techniques: ['confrontation'],
            quality: 'poor',
            feedback:
              '过早的直接对质。虽然观察到伤痕位置不符合摔伤的特征,但在信任关系尚未建立时说出来,等于指控案主说谎,会严重破坏关系。案主可能会感到被攻击和不信任,从而完全封闭。这些观察应该在心里记录,等关系更深入后再适当使用。',
            nextNodeId: 'ea-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ea-node-3',
        stage: 'assessment',
        clientMessage:
          '没去医院,不值得跑那么远。而且...去医院也得有人带我去啊。我儿媳妇每天就来送个饭,她也忙。我不想给别人添麻烦。',
        clientEmotion: 'sad',
        clientAction: '(低下头,叹了口气,手无意识地摸着淤伤的位置)',
        hints: [
          '"不想添麻烦"是老年受虐者常见的说辞——背后可能是被迫的自我牺牲',
          '案主透露了日常生活的高度依赖和孤立',
          '不经意地提到"得有人带我去",暗示她行动受限',
        ],
        requiredTechniques: ['empathy', 'clarification'],
        responseOptions: [
          {
            id: 'ea-3a',
            text: '刘奶奶,您受伤了不去看医生,自己一个人忍着,我听了很心疼。您说不想添麻烦...但您值得被好好照顾啊。我想多了解一下您平时的生活——儿媳妇每天来送饭,那其他时间呢?比如买药、收拾家里这些事,都是您自己做?',
            techniques: ['empathy', 'clarification', 'open_questions'],
            quality: 'excellent',
            feedback:
              '先用情感回应温暖案主("我听了很心疼""您值得被好好照顾"),然后自然地过渡到评估日常生活状况。通过了解照料安排的细节——谁在照顾、频率、质量——可以间接评估案主是否得到了应有的照护,以及是否存在忽视或虐待的情况。',
            nextNodeId: 'ea-node-4',
            emotionImpact: 1,
          },
          {
            id: 'ea-3b',
            text: '儿媳妇来送饭,那平时她对您好吗?你们关系怎么样?',
            techniques: ['open_questions'],
            quality: 'good',
            feedback:
              '开始探索与儿媳的关系,方向正确。但"对您好吗"这个问题比较直接,案主很可能会习惯性地回答"好"以维护家庭面子。可以用更间接的方式来评估关系质量,比如先问日常互动的细节。',
            nextNodeId: 'ea-node-4',
            emotionImpact: 0,
          },
          {
            id: 'ea-3c',
            text: '您不去医院可不行,万一骨折了呢?我帮您约个社区医院的检查吧。',
            techniques: ['concretization'],
            quality: 'fair',
            feedback:
              '关心案主的健康是对的,但此刻急于安排就医忽略了更深层的评估需要。而且"我帮您约"可能被案主拒绝——如果她害怕被打的事暴露,可能更不愿意去医院。需要先了解更多家庭动态才能做出合适的安排。',
            nextNodeId: 'ea-node-4',
            emotionImpact: -1,
          },
          {
            id: 'ea-3d',
            text: '刘奶奶,您一个人住不方便,要不考虑住到儿子家去?有人照顾也放心些。',
            techniques: [],
            quality: 'poor',
            feedback:
              '在还不清楚家庭动态的情况下,建议案主住到可能施虐者的家中,这是潜在的危险建议。如果虐待确实存在,让案主与施虐者更密切地生活可能会加剧危险。在充分评估之前,不应该给出任何可能改变案主生活安排的建议。',
            nextNodeId: 'ea-node-4',
            emotionImpact: -1,
          },
        ],
      },
      {
        id: 'ea-node-4',
        stage: 'assessment',
        clientMessage:
          '儿媳妇...她也不容易,要上班还要照顾他们家孩子。有时候脾气是急了点,嫌我这不好那不好...不过年轻人嘛,都这样。我又不是多有用了,人家来照顾我已经是费心了。',
        clientEmotion: 'sad',
        clientAction: '(双手不停地搓着衣角,眼眶有点红)',
        hints: [
          '"脾气急了点""嫌我这不好那不好"可能是言语虐待的线索',
          '"我又不是多有用了"反映了被施虐者常见的自我价值贬低',
          '她在为儿媳找理由——这是受虐者保护施虐者的典型模式',
        ],
        requiredTechniques: ['active_listening', 'clarification'],
        responseOptions: [
          {
            id: 'ea-4a',
            text: '刘奶奶,您说儿媳妇"脾气急了点,嫌这不好那不好"...我能理解年轻人有时候确实着急,但您的感受也很重要。她发脾气的时候,一般会说些什么?您当时是什么感觉?',
            techniques: ['active_listening', 'clarification', 'open_questions'],
            quality: 'excellent',
            feedback:
              '巧妙的评估手法。先部分接纳了案主的解释("年轻人有时候确实着急"),没有否定她为儿媳辩护的需要,然后温和地将焦点转向具体的互动细节和案主的感受。通过了解"说些什么"可以评估言语虐待的性质和程度;通过问"什么感觉"可以让案主接触到被压抑的真实情感。',
            nextNodeId: 'ea-node-5',
            emotionImpact: 1,
          },
          {
            id: 'ea-4b',
            text: '您说自己"不是多有用了",这话让我有点难过。您当了一辈子教师,教了那么多学生,怎么能说没有用呢?',
            techniques: ['empathy', 'confrontation'],
            quality: 'good',
            feedback:
              '关注到了案主的自我价值贬低并试图温和地挑战。但这种方式可能让案主继续掩饰——她会顺着你的话说"是是是,我就是随便说说"。可以更多地探索"没有用"这个想法是从哪里来的,是不是经常被人这样说。',
            nextNodeId: 'ea-node-5',
            emotionImpact: 0,
          },
          {
            id: 'ea-4c',
            text: '儿媳妇对您发脾气?那也太不应该了,您是长辈啊。您儿子知道吗?',
            techniques: [],
            quality: 'fair',
            feedback:
              '对儿媳做出道德评判("太不应该了")虽然是出于对案主的维护,但会让案主更加紧张——她会担心社工要去"找麻烦",反而急于缩回否认。而且问"您儿子知道吗"可能是敏感话题——如果儿子和儿媳站在一起,这个问题会让案主更加无助。',
            nextNodeId: 'ea-node-5',
            emotionImpact: -1,
          },
          {
            id: 'ea-4d',
            text: '那您的胳膊上的伤,不会是儿媳妇弄的吧?',
            techniques: ['confrontation'],
            quality: 'poor',
            feedback:
              '过于直接和突然的质疑。虽然案主话语中确实有暗示,但在她仍处于否认阶段时直接提出这个推断,会让她感到被"审讯"。她几乎一定会否认并更加封闭。老年虐待评估需要耐心、迂回,让案主自己逐步揭示真相。',
            nextNodeId: 'ea-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ea-node-5',
        stage: 'assessment',
        clientMessage:
          '她...有时候送饭来,嫌我吃得慢,就会大声说"我还赶时间呢,你能不能快点"。有一次我不小心把碗打了,她就...就推了我一下。她可能是太着急了,不是故意的。',
        clientEmotion: 'anxious',
        clientAction: '(说到"推了我一下"时明显犹豫,声音变小,眼神闪躲)',
        hints: [
          '案主终于透露了身体接触的细节——"推了一下"可能是更严重暴力的最小化表述',
          '她仍在为儿媳找借口,但已经开始说出真相',
          '需要温和地了解更多细节,同时不能过度施压',
        ],
        requiredTechniques: ['empathy', 'clarification'],
        responseOptions: [
          {
            id: 'ea-5a',
            text: '刘奶奶,谢谢您告诉我这些。我知道说这些不容易,您很信任我。您说她推了您...那一次您有没有受伤?这种情况发生过几次了?我问这些不是要追究谁的责任,是因为您的安全和健康是最重要的。',
            techniques: ['empathy', 'clarification', 'concretization'],
            quality: 'excellent',
            feedback:
              '非常到位的评估。(1)感谢案主的信任,鼓励她继续表达,(2)温和地追问伤害的频率和严重程度——这是评估虐待等级的关键信息,(3)明确说明目的("不是追究责任""安全最重要"),减轻案主的顾虑。这种方式能帮助案主逐步说出更多,同时社工获得了评估所需的关键信息。',
            nextNodeId: 'ea-node-6',
            emotionImpact: 1,
          },
          {
            id: 'ea-5b',
            text: '推了您一下...那一定让您很害怕吧?不管她是不是着急,对长辈动手是不可以的。您有没有想过这个情况怎么解决?',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '回应了案主的恐惧,方向正确。但"对长辈动手不可以"的道德评判可能让案主重新关闭——她害怕的就是家丑外扬。"怎么解决"对案主来说太大了,她目前还没有力量去想解决方案。评估阶段应该先充分了解情况。',
            nextNodeId: 'ea-node-6',
            emotionImpact: 0,
          },
          {
            id: 'ea-5c',
            text: '她推您?那您手臂上的伤是不是她弄的?刘奶奶,您要说实话。',
            techniques: ['confrontation'],
            quality: 'fair',
            feedback:
              '虽然追问方向合理,但"您要说实话"的语气带有压迫感,暗示案主在说谎。被虐老人否认的背后是深层的恐惧和羞耻,需要温柔以待,而不是被要求"坦白"。这种方式可能让案主感到被审问,反而退回到完全否认。',
            nextNodeId: 'ea-node-6',
            emotionImpact: -1,
          },
          {
            id: 'ea-5d',
            text: '这种情况是家暴!您应该报警,法律会保护您的。您不能再忍了,忍只会让她变本加厉。',
            techniques: [],
            quality: 'poor',
            feedback:
              '严重的错误回应。(1)过早贴标签("家暴")会吓到案主,让她否认一切,(2)"报警"对于维护家庭面子的老人来说是无法接受的选项,(3)评估还没完成就下结论不专业,(4)"不能再忍了"忽视了案主经济依赖、害怕报复的现实处境。社工应该先完成评估,再与案主一起探讨安全的下一步。',
            nextNodeId: 'ea-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'ea-node-6',
        stage: 'assessment',
        clientMessage:
          '不止一次了...有时候她心情不好就会对我凶。我也不敢跟儿子说,怕他们两口子吵架...毕竟孙子还小,不能没有妈。我都这么老了,忍忍就算了。但是有时候晚上一个人的时候...真的觉得活得没意思。',
        clientEmotion: 'distressed',
        clientAction: '(开始流泪,不再掩饰,双手颤抖)',
        hints: [
          '案主终于承认了持续性的虐待并表露了消极情绪',
          '需要在此评估她的整体安全状况,并商议后续计划',
          '注意"活得没意思"也需要进行简要的安全评估',
        ],
        requiredTechniques: ['empathy', 'attending'],
        responseOptions: [
          {
            id: 'ea-6a',
            text: '刘奶奶,您今天告诉我这些,我知道对您来说有多难。您一直在为家人着想——怕儿子吵架,怕孙子受影响——可是谁来心疼您呢?您不应该一个人忍受这些。我尊重您不想闹大的想法,但我想和您一起想想,怎么在保护您的安全的同时,也照顾到您在意的家庭关系。我们下次可以细细谈,好吗?',
            techniques: ['empathy', 'attending', 'validation'],
            quality: 'excellent',
            feedback:
              '极其出色的评估收尾。(1)深刻地看到了案主为家人牺牲自己的模式,"谁来心疼您"触及了她被忽视的需求,(2)尊重了案主"不想闹大"的意愿,没有强迫她做出任何决定,(3)"一起想想"传递了不会抛下她的承诺,(4)安排了后续,保持了持续的关注。这体现了对老年受虐者的充分理解和专业素养。',
            nextNodeId: 'ea-end',
            emotionImpact: 2,
          },
          {
            id: 'ea-6b',
            text: '谢谢您信任我,刘奶奶。您的安全很重要。您说"活得没意思",是偶尔这么想还是经常这样?我问这个是因为关心您。我们会一起想办法改善这个情况,我不会让您一个人扛。',
            techniques: ['empathy', 'concretization'],
            quality: 'good',
            feedback:
              '注意到了"活得没意思"并进行了简要的安全评估,这是正确的。对案主的支持和承诺也很有力。可以再多一些对案主长期隐忍和牺牲的肯定,以及对后续具体安排的说明。',
            nextNodeId: 'ea-end',
            emotionImpact: 1,
          },
          {
            id: 'ea-6c',
            text: '刘奶奶,您的情况我了解了。我觉得有必要跟您儿子谈一谈,让他知道这些事情。毕竟您不能一直这样下去。',
            techniques: ['concretization'],
            quality: 'fair',
            feedback:
              '案主明确表示不想告诉儿子,社工却未经同意就要找儿子谈,这违反了案主的自主权。即使出发点是好的,也需要先与案主充分协商。在案主害怕报复、依赖照顾者的情况下,贸然介入家庭可能让案主面临更大的风险。',
            nextNodeId: 'ea-end',
            emotionImpact: -1,
          },
          {
            id: 'ea-6d',
            text: '刘奶奶,您现在的处境确实很困难。不过儿媳妇可能也有她的难处,你们双方都需要调整。我建议您自己也注意点,别总是打碎东西惹她生气。',
            techniques: [],
            quality: 'poor',
            feedback:
              '极其不当的回应。"别打碎东西惹她生气"将受虐的责任归咎于被害者,这是"受害者有罪论"的体现。任何情况下,身体暴力都不是被害者"惹"出来的。这种回应会让案主更加自责,认为被打是自己的错,严重损害案主的自我价值感并巩固施虐关系。',
            nextNodeId: 'ea-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景3：校园霸凌评估（小宇）
  // ============================================================
  {
    id: 'school-bully-assessment',
    title: '校园霸凌评估',
    subtitle: '成绩骤降的小宇背后有什么秘密',
    category: '青少年辅导',
    difficulty: 'beginner',
    primaryStage: 'assessment',
    estimatedTime: '20-30分钟',
    coverColor: '#FEF3C7, #FDE68A',
    icon: '🏫',
    clientProfile: {
      name: '小宇',
      age: 14,
      gender: '男',
      occupation: '初二学生',
      avatar: '👦',
      background:
        '小宇原本成绩中等偏上,最近两个月成绩骤降,上课走神,午饭经常不吃。班主任发现他手臂有掐痕,怀疑遭遇校园霸凌。小宇被叫来谈话时表现出防御和回避。',
      presentingProblem:
        '近两个月成绩骤降、上课走神、不吃午饭,手臂有掐痕,疑似遭受校园霸凌,表现出防御和回避。',
      emotionalState: 'anxious',
      keyTraits: ['回避问题', '害怕报复', '自尊心强', '不信任大人', '身体伤痕'],
    },
    description:
      '小宇是一名14岁的初二学生,原本成绩中等偏上,近两个月成绩骤降、上课走神、午饭不吃。班主任发现他手臂有掐痕,怀疑遭遇校园霸凌,但小宇表现出明显的防御和回避。本场景帮助学习者练习如何为防御性的青少年创建安全的表达环境,在避免过于直接的同时逐步了解霸凌的真实情况。',
    learningObjectives: [
      '练习为防御性青少年建立非威胁性的谈话环境',
      '学习用间接方式评估校园霸凌的存在和严重程度',
      '掌握与不信任成人的青少年建立初步信任的技巧',
      '练习在案主否认和回避时保持耐心和专业',
      '学习观察和记录青少年非语言线索的方法',
    ],
    dialogueNodes: [
      {
        id: 'sb-node-1',
        stage: 'assessment',
        clientMessage: '老师让我来的,我也不知道为什么。我没什么事。',
        clientEmotion: 'anxious',
        clientAction: '(缩在椅子里,双手插兜,不看社工,脚不停地抖)',
        hints: [
          '案主是被动来访,对青少年来说被叫谈话本身就有压力',
          '不要急于打破防御,先降低他的紧张感',
          '他的身体语言(缩、不看、抖)已经在传递很多信息',
        ],
        requiredTechniques: ['attending', 'normalizing'],
        responseOptions: [
          {
            id: 'sb-1a',
            text: '嗯,被老师叫来谈话,是不是有点烦?说实话,如果是我被突然叫去谈话,我也会觉得莫名其妙。你不用紧张,这不是批评你。我就是想认识认识你,随便聊聊。你可以叫我小王老师。',
            techniques: ['normalizing', 'attending', 'validation'],
            quality: 'excellent',
            feedback:
              '非常棒的青少年接触方式。(1)"有点烦"准确地说出了案主可能的感受,(2)自我暴露("如果是我也会觉得莫名其妙")拉近了距离,(3)"不是批评你"直接解除了青少年最大的恐惧,(4)"随便聊聊"降低了正式感。对于14岁的男生来说,这种轻松平等的姿态比严肃的"关怀"更容易让他放松。',
            nextNodeId: 'sb-node-2',
            emotionImpact: 1,
          },
          {
            id: 'sb-1b',
            text: '你好小宇。老师让你来可能有一些原因,但不管什么原因,你来了就好。你今天有没有什么想聊的?',
            techniques: ['attending', 'open_questions'],
            quality: 'good',
            feedback:
              '温和的开场,把选择权交给了案主。但"老师让你来可能有一些原因"可能让他警觉——他会想"老师说了什么?"。对青少年来说,可以更轻松一些。',
            nextNodeId: 'sb-node-2',
            emotionImpact: 0,
          },
          {
            id: 'sb-1c',
            text: '小宇,老师跟我说你最近成绩下降了不少,上课也不太专心。你自己觉得是什么原因呢?',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '开场就提到成绩下降和上课不专心,对14岁的男生来说这等于直接把他放在了"有问题的学生"的位置上。他的防御只会更强,很可能回答"没什么原因"就关闭了。应该先建立关系再逐步引入话题。',
            nextNodeId: 'sb-node-2',
            emotionImpact: -1,
          },
          {
            id: 'sb-1d',
            text: '小宇,你坐好。班主任让你来是因为关心你,你有什么困难要跟老师说,我们才能帮你啊。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"坐好"是教师式的命令语气,立刻建立了权力不对等的关系。"关心你""帮你"对于不信任大人的青少年来说是空洞的。"有什么困难要说"暗示他"有问题",会让他更加封闭。与青少年工作最忌讳的就是居高临下的说教姿态。',
            nextNodeId: 'sb-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sb-node-2',
        stage: 'assessment',
        clientMessage: '...随便聊什么?反正我真的没什么事,就是最近学习有点累。',
        clientEmotion: 'anxious',
        clientAction: '(稍微松了一点,但还是不太看社工)',
        hints: [
          '"学习累"是他给出的安全话题——可以先接住,慢慢展开',
          '他稍微放松了一点,说明开场有效',
          '不要急于戳穿,跟着他的节奏走',
        ],
        requiredTechniques: ['active_listening', 'empathy'],
        responseOptions: [
          {
            id: 'sb-2a',
            text: '学习累啊,初二确实功课开始多了。你觉得是哪方面比较累?是作业太多,还是上课跟不上,还是别的什么?',
            techniques: ['active_listening', 'empathy', 'open_questions'],
            quality: 'excellent',
            feedback:
              '跟着案主给出的话题走("学习累"),没有急于引导到霸凌话题。细分了"累"的类型,给了案主多个可以回应的方向,同时"还是别的什么"留了一个开口,让他自己决定要不要说更多。这种节奏对于防御性的青少年来说非常舒适。',
            nextNodeId: 'sb-node-3',
            emotionImpact: 1,
          },
          {
            id: 'sb-2b',
            text: '嗯,学习确实不容易。初二的课程难度比初一高不少吧?',
            techniques: ['active_listening', 'empathy'],
            quality: 'good',
            feedback:
              '顺着案主的话题展开,保持了轻松的氛围。不过这个回应比较浅,可以更进一步地探索"累"的具体内涵,看看有没有打开话题的机会。',
            nextNodeId: 'sb-node-3',
            emotionImpact: 0,
          },
          {
            id: 'sb-3c',
            text: '小宇,我觉得可能不只是学习累吧?你能跟我说说真正的原因吗?',
            techniques: ['confrontation'],
            quality: 'fair',
            feedback:
              '过早地暗示"你没说真话",这对刚开始松动防御的青少年来说太直接了。他可能因此重新关闭。即使你觉得学习不是真正原因,也应该先在他的话题上建立更多信任,让他自己逐渐展开。',
            nextNodeId: 'sb-node-3',
            emotionImpact: -1,
          },
          {
            id: 'sb-2d',
            text: '不只是学习累吧?老师说你手臂上有伤,你是不是在学校遇到什么事了?',
            techniques: ['confrontation'],
            quality: 'poor',
            feedback:
              '直接提到手臂上的伤痕和学校的事情,在关系尚未建立的第二轮对话就如此直接,基本等于审问。青少年的典型反应是立刻否认并关闭("没有!我说了没事!")。而且透露了班主任跟你说的细节,案主会觉得被出卖,对大人的不信任感加深。',
            nextNodeId: 'sb-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sb-node-3',
        stage: 'assessment',
        clientMessage:
          '就...哪方面都有吧。上课也不太想听。中午也不太想吃饭。就是什么都不太想做。',
        clientEmotion: 'sad',
        clientAction: '(声音变小,低头看地面,抖腿的频率变快)',
        hints: [
          '"什么都不太想做"可能不只是学习倦怠,要注意评估情绪状态',
          '中午不吃饭——要考虑是不吃还是不敢去食堂(可能与霸凌有关)',
          '他在慢慢放下防御,可以温和地多探索一些',
        ],
        requiredTechniques: ['empathy', 'open_questions'],
        responseOptions: [
          {
            id: 'sb-3a',
            text: '什么都不太想做...听起来好像不只是累,你好像对很多事情都提不起兴趣了。这种感觉是最近才开始的,还是已经有一段时间了?你还记得大概从什么时候开始的吗?',
            techniques: ['empathy', 'open_questions', 'concretization'],
            quality: 'excellent',
            feedback:
              '准确地捕捉到了"什么都不想做"背后可能的情绪低落信号。追问起始时间点非常重要——如果能定位到具体时间,往往能关联到触发事件(如霸凌开始的时间)。语气温和,不带评判,给了案主空间去回忆。',
            nextNodeId: 'sb-node-4',
            emotionImpact: 1,
          },
          {
            id: 'sb-3b',
            text: '嗯,听起来你最近过得挺不开心的。你说中午不太想吃饭,是胃口不好,还是不太想去食堂?',
            techniques: ['empathy', 'clarification'],
            quality: 'good',
            feedback:
              '关注到了"不吃午饭"这个细节并做了区分——"胃口不好"和"不想去食堂"指向完全不同的原因。如果是后者,可能与在学校的人际关系有关。提问方式自然,不带预设。',
            nextNodeId: 'sb-node-4',
            emotionImpact: 1,
          },
          {
            id: 'sb-3c',
            text: '初二是关键时期,你得振作起来啊。不吃饭身体怎么受得了?你妈妈知道你不吃午饭吗?',
            techniques: [],
            quality: 'fair',
            feedback:
              '"得振作起来"是说教。"你妈妈知道吗"对于青少年来说等于威胁"我要告诉你妈"。案主本就不信任大人,这种回应会让他觉得你跟那些只会管他、批评他的大人一样。评估阶段应该收集信息而非给建议。',
            nextNodeId: 'sb-node-4',
            emotionImpact: -1,
          },
          {
            id: 'sb-3d',
            text: '你是不是心情不好?是谁欺负你了?你跟我说,我帮你找老师解决。',
            techniques: [],
            quality: 'poor',
            feedback:
              '连续三个问题像连珠炮一样,而且"谁欺负你了"是预设性的封闭式提问,等于告诉案主"我已经知道你被欺负了"。"帮你找老师解决"是青少年最恐惧的——他们害怕告状导致报复。这种急切的"帮忙"恰恰会让案主彻底关闭。',
            nextNodeId: 'sb-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sb-node-4',
        stage: 'assessment',
        clientMessage:
          '大概...两个月前吧。之前还好的。就是后来...不想去学校了。每天早上起来就觉得很烦。',
        clientEmotion: 'sad',
        clientAction: '(把帽檐压低了一点,声音闷闷的)',
        hints: [
          '两个月的时间线与成绩骤降的时间吻合——可能有特定事件触发',
          '"不想去学校"是关键信号,需要了解原因',
          '他在慢慢打开,保持温和的好奇心继续探索',
        ],
        requiredTechniques: ['active_listening', 'open_questions'],
        responseOptions: [
          {
            id: 'sb-4a',
            text: '两个月前,就是这学期开学不久...你说之前还好,后来就不想去学校了。那两个月前有没有发生什么事情,让你对学校的感觉变了?不一定是什么大事,小事也算。',
            techniques: ['active_listening', 'open_questions', 'concretization'],
            quality: 'excellent',
            feedback:
              '精确地抓住了时间线并温和地引导案主回忆触发事件。"不一定是什么大事,小事也算"非常关键——降低了门槛,案主不需要承认发生了"严重"的事才能回答。这给了他一个安全的方式来开始谈论可能的霸凌经历。',
            nextNodeId: 'sb-node-5',
            emotionImpact: 1,
          },
          {
            id: 'sb-4b',
            text: '每天早上就觉得烦,不想去学校...这种感觉确实不好受。在学校里,有没有什么特别让你不舒服的?比如某些课,或者某些时间段?',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '共情了案主的感受,并从"学校生活"的角度展开探索。问"某些时间段"很巧妙——霸凌往往发生在特定场景(课间、午饭、放学),如果案主指出特定时间段,就是重要线索。',
            nextNodeId: 'sb-node-5',
            emotionImpact: 0,
          },
          {
            id: 'sb-4c',
            text: '不想去学校?那你是不是跟同学关系不好?',
            techniques: ['closed_questions'],
            quality: 'fair',
            feedback:
              '封闭式提问而且方向过于直接。"跟同学关系不好"等于直接指向了人际问题,案主很可能会条件反射地否认。应该用更开放、更间接的方式引导案主自己去描述学校的感受。',
            nextNodeId: 'sb-node-5',
            emotionImpact: -1,
          },
          {
            id: 'sb-4d',
            text: '那你得调整心态啊,学校是必须去的。你想想有没有什么办法让自己开心一点?',
            techniques: [],
            quality: 'poor',
            feedback:
              '完全无视了案主正在试图表达的困境。"学校是必须去的"是命令式回应,"让自己开心一点"是空洞的建议。一个正在遭受霸凌(但还不敢说)的孩子,听到这些话只会更加觉得"大人不会理解我的"。',
            nextNodeId: 'sb-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sb-node-5',
        stage: 'assessment',
        clientMessage:
          '...有几个同学,他们...算了,没什么。就是有些人比较烦。课间的时候...我一般就在座位上待着,哪儿也不去。',
        clientEmotion: 'anxious',
        clientAction: '(说到一半停住了,下意识摸了一下手臂,然后赶紧把手放下)',
        hints: [
          '他几乎要说出来了但又缩了回去——不要追问,让他自己决定节奏',
          '注意他摸手臂的动作——可能是下意识地碰到了伤痕',
          '"课间在座位上待着"暗示他在躲避某些人',
        ],
        requiredTechniques: ['active_listening', 'validation'],
        responseOptions: [
          {
            id: 'sb-5a',
            text: '我注意到你刚才想说什么又停住了。没关系,你不想说的可以不说,我不会逼你。不过我想让你知道,如果有人让你不舒服了,那不是你的错。而且,你跟我说的任何事,我都不会不经过你同意就告诉别人。',
            techniques: ['attending', 'validation', 'active_listening'],
            quality: 'excellent',
            feedback:
              '绝佳的回应。(1)指出了案主"欲言又止"的行为但没有施压,(2)"不想说可以不说"给了他安全感,(3)"不是你的错"先行植入了一个重要信念——被霸凌的孩子常常自责,(4)明确承诺保密——这是青少年最在意的,也是他愿意继续说的前提条件。',
            nextNodeId: 'sb-node-6',
            emotionImpact: 1,
          },
          {
            id: 'sb-5b',
            text: '有几个同学比较烦?课间你也不太出去?听起来学校里有些事情让你不太想面对。',
            techniques: ['active_listening', 'empathy'],
            quality: 'good',
            feedback:
              '用摘要的方式整理了案主的话,温和地点出了"学校有些事让你不想面对"。没有过度追问也没有预设。不过可以在此加入保密承诺,让案主更有安全感来决定是否继续说下去。',
            nextNodeId: 'sb-node-6',
            emotionImpact: 0,
          },
          {
            id: 'sb-5c',
            text: '你说的那几个同学是谁?他们做了什么?',
            techniques: ['concretization'],
            quality: 'fair',
            feedback:
              '案主刚刚主动收回了话("算了没什么"),此时追问具体是谁、做了什么,等于强行打开他还没准备好打开的话题。他可能会完全否认("我说了没什么,你怎么老问")。需要尊重他的节奏。',
            nextNodeId: 'sb-node-6',
            emotionImpact: -1,
          },
          {
            id: 'sb-5d',
            text: '小宇你得说出来!有些同学欺负你对不对?你不说老师怎么帮你?你手臂上那个伤是不是他们弄的?',
            techniques: [],
            quality: 'poor',
            feedback:
              '连续追问加施压,完全破坏了之前建立的安全感。(1)"你得说"是命令,(2)直接说出"欺负"是预设结论,(3)"不说怎么帮你"是变相威胁,(4)提到手臂的伤更是让案主知道你从一开始就"知道"——他会觉得自己被骗了,所有的信任瞬间崩塌。',
            nextNodeId: 'sb-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'sb-node-6',
        stage: 'assessment',
        clientMessage:
          '...你真的不会告诉别人?他们...他们总是拿我的东西,推我,还掐我。让我帮他们买东西,不买就打。我不敢跟任何人说,他们说要是我告状,就会更惨...',
        clientEmotion: 'distressed',
        clientAction: '(声音发抖,眼眶红了,但拼命忍着不哭)',
        hints: [
          '案主终于说出了霸凌的真相——这一刻要格外温柔地接住',
          '需要肯定他的勇气,同时简要评估霸凌的性质和严重程度',
          '他最怕"告状后更惨"——要让他知道后续步骤会跟他一起决定',
        ],
        requiredTechniques: ['empathy', 'validation'],
        responseOptions: [
          {
            id: 'sb-6a',
            text: '小宇,你能告诉我这些,真的特别勇敢。我知道你忍了很久,也一直很害怕。我要告诉你的是:这些事情不是你的错,没有人应该被这样对待。你说怕告状会更惨,我完全理解。所以,接下来怎么做,我们会一起商量,每一步都会问过你,我不会背着你做任何事。好吗?',
            techniques: ['empathy', 'validation', 'attending'],
            quality: 'excellent',
            feedback:
              '教科书式的回应。(1)充分肯定了他说出来的勇气,(2)"不是你的错"直接对抗了霸凌受害者常见的自责,(3)回应了他最大的恐惧(报复)并做了具体承诺——"每一步都会问过你",(4)"不会背着你做任何事"与之前的保密承诺一致,建立了言行一致的信任。这种回应让案主感到自己被尊重、被保护,而不是被"代替"做决定。',
            nextNodeId: 'sb-end',
            emotionImpact: 2,
          },
          {
            id: 'sb-6b',
            text: '谢谢你信任我,小宇。被他们这样对待,你一定每天都过得很辛苦。你不用一个人扛了,我会帮你的。我们先不急着做什么,今天你愿意的话,可以多跟我说说情况,也可以到此为止。你来决定。',
            techniques: ['empathy', 'validation'],
            quality: 'good',
            feedback:
              '温暖的支持性回应,给了案主选择权。可以更明确地表达"不是你的错"以及对后续行动保密性的具体承诺,这些对于害怕报复的青少年来说很重要。',
            nextNodeId: 'sb-end',
            emotionImpact: 1,
          },
          {
            id: 'sb-6c',
            text: '他们这样做是不对的。你别怕,我会跟学校反映,让老师来处理这个事情。',
            techniques: ['validation'],
            quality: 'fair',
            feedback:
              '出发点是好的,但"跟学校反映"恰恰是案主最恐惧的结果。他刚刚才说"告状会更惨",你立刻就要"反映",这打破了案主对你的信任。即使最终需要学校介入,也必须先与案主充分协商并得到他的同意。过程中案主的参与感和控制感至关重要。',
            nextNodeId: 'sb-end',
            emotionImpact: -1,
          },
          {
            id: 'sb-6d',
            text: '什么?!他们还打你?这也太过分了!是哪几个人?几班的?我必须去找你们班主任!',
            techniques: [],
            quality: 'poor',
            feedback:
              '情绪化反应和即刻行动是最危险的回应方式。(1)你的愤怒虽然出于正义感,但会吓到案主,(2)立刻追问"谁""哪班的"是调查模式,(3)"必须去找班主任"直接违背了你的保密承诺——案主以后再也不会信任任何大人了。社工需要管理自己的情绪反应,把关注点放在案主身上,而不是成为一个失控的"正义使者"。',
            nextNodeId: 'sb-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },
];
