import { Scenario } from '../types';

export const newIntakeScenarios: Scenario[] = [
  // ============================================================
  // 场景1：家暴受害者首次求助（王女士）
  // ============================================================
  {
    id: 'domestic-violence-intake',
    title: '家暴受害者首次求助',
    subtitle: '被丈夫家暴的王女士终于鼓起勇气求助',
    category: '妇女保护',
    difficulty: 'advanced',
    primaryStage: 'intake',
    estimatedTime: '30-40分钟',
    coverColor: '#FFF1F2, #FFE4E6',
    icon: '🛡️',
    clientProfile: {
      name: '王女士',
      age: 35,
      gender: '女',
      occupation: '工厂工人',
      avatar: '👩',
      background:
        '王女士结婚十年,丈夫因酗酒经常家暴,最近一次被打得住院。出院后社区妇联工作人员劝她来社工站。她很恐惧、犹豫,担心丈夫报复,也担心孩子。',
      presentingProblem:
        '长期遭受丈夫家暴,最近一次伤势严重住院,在社区妇联劝说下首次前来求助,充满恐惧与犹豫。',
      emotionalState: 'distressed',
      keyTraits: ['恐惧犹豫', '自我否定', '为孩子忍耐', '缺乏安全感', '首次求助'],
    },
    description:
      '王女士是一位35岁的工厂女工,结婚十年遭受丈夫长期家暴。最近一次被打得住院后,在社区妇联工作人员的劝说下首次来到社工站求助。她极度恐惧、犹豫,既害怕丈夫报复,又担心两个孩子。本场景帮助学习者练习如何在接案阶段建立安全信任的关系,运用接纳、同理心和正常化等技巧,帮助家暴受害者感受到被尊重和支持,同时评估安全状况并提供保护性资源信息。',
    learningObjectives: [
      '学习与家暴受害者建立安全信任的专业关系',
      '练习在接案阶段运用接纳、同理心和正常化技巧',
      '掌握评估案主安全状况的基本方法',
      '了解家暴受害者常见的心理特征和应对模式',
      '学习如何提供保护性资源信息而不施加压力',
    ],
    dialogueNodes: [
      {
        id: 'dv-node-1',
        stage: 'intake',
        clientMessage: '我...我不知道该不该来。妇联的张姐说让我来看看...其实也没什么大事...',
        clientEmotion: 'distressed',
        clientAction: '(低着头,不敢看社工,手紧紧攥着衣角,手臂上有淤青)',
        hints: [
          '案主将家暴最小化（"没什么大事"）是家暴受害者常见的应对方式',
          '注意她手臂上的淤青,但不要急于追问伤情',
          '首要任务是让案主感到安全和被接纳,降低她的恐惧感',
        ],
        requiredTechniques: ['attending', 'active_listening'],
        responseOptions: [
          {
            id: 'dv-1a',
            text: '王女士您好,谢谢您愿意过来。我能感觉到您现在很紧张。这里是一个安全的地方,我们说的一切都是保密的。您不需要急着说什么,先坐下来喝杯水,觉得准备好了再慢慢聊,好吗？',
            techniques: ['attending', 'active_listening', 'validation'],
            quality: 'excellent',
            feedback:
              '非常好的开场。你做到了几件关键的事：表达感谢和欢迎、确认案主的紧张情绪、明确告知保密原则、强调安全感、给予案主节奏的控制权。对家暴受害者来说,感到"安全"和"不被强迫"是开口的前提。',
            nextNodeId: 'dv-node-2',
            emotionImpact: 1,
          },
          {
            id: 'dv-1b',
            text: '您好,张姐跟我提过您的情况。这里可以放心说话,您愿意聊聊发生了什么吗？',
            techniques: ['attending', 'active_listening'],
            quality: 'good',
            feedback:
              '友善的开场,表示了解背景并邀请案主表达。但提到"张姐跟我说过"可能让案主警觉——她会担心自己的事被多少人知道了。与家暴案主工作时要特别注意保密感的营造。',
            nextNodeId: 'dv-node-2',
            emotionImpact: 0,
          },
          {
            id: 'dv-1c',
            text: '您说"没什么大事",但您手臂上的淤青看起来挺严重的。能告诉我这是怎么回事吗？',
            techniques: ['concretization'],
            quality: 'fair',
            feedback:
              '直接指出淤青虽然表达了关注,但在信任尚未建立时就追问伤情,会让案主感到被审视和暴露。家暴受害者通常对"被发现"感到羞耻,过早聚焦伤情会加剧她的防御。应先建立安全感。',
            nextNodeId: 'dv-node-2',
            emotionImpact: -1,
          },
          {
            id: 'dv-1d',
            text: '您来了就对了！家暴是违法的,您应该勇敢站出来保护自己。我们可以帮您报警。',
            techniques: [],
            quality: 'poor',
            feedback:
              '虽然出发点是好的,但这种回应犯了几个严重错误：在案主还没开口前就给建议、直接给行为贴标签（"家暴"）、替案主做决定（"报警"）。家暴受害者最需要的是自主权的恢复,直接推动行动会让她更加恐惧退缩。',
            nextNodeId: 'dv-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'dv-node-2',
        stage: 'intake',
        clientMessage: '...谢谢你。其实...我老公他喝了酒就会打我。已经好多年了。我一直觉得可能是我做得不好,惹他生气了...上个月他把我打得住了院。',
        clientEmotion: 'distressed',
        clientAction: '(声音很小,眼眶泛红,低头不敢看人)',
        hints: [
          '案主表现出典型的自我归因——"是我做得不好",这是长期家暴受害者常见的认知',
          '现在需要表达接纳和同理,不要急于纠正她的认知',
          '肯定她开口说出来的勇气,这对首次求助者非常重要',
        ],
        requiredTechniques: ['empathy', 'validation'],
        responseOptions: [
          {
            id: 'dv-2a',
            text: '谢谢您愿意告诉我这些,我知道说出来需要很大的勇气。这么多年,您承受了太多了。我想先告诉您一件很重要的事——被打,不是您的错。不管发生了什么,任何人都没有权利动手伤害您。',
            techniques: ['empathy', 'validation', 'normalizing'],
            quality: 'excellent',
            feedback:
              '这是一个非常有力量的回应。你先肯定了案主开口的勇气（赋能）,然后用"承受了太多"表达了深层同理,最后清晰地传递了"暴力不是你的错"这一核心信息。对于长期自我归因的家暴受害者,温和而明确地矫正归因是至关重要的。',
            nextNodeId: 'dv-node-3',
            emotionImpact: 2,
          },
          {
            id: 'dv-2b',
            text: '我听到了,这些年您一定很不容易。您愿意多说一些吗？比如他通常在什么情况下会动手？',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '表达了同理心并用开放式问题引导进一步探索。但案主提到"可能是我做得不好",这个自我归因信号很重要,值得回应——不一定要立刻纠正,但至少需要温和地对此做出反应。',
            nextNodeId: 'dv-node-3',
            emotionImpact: 0,
          },
          {
            id: 'dv-1c',
            text: '他打您打了好多年了？那您为什么之前没有来求助呢？',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '"为什么之前没来"虽然是探索性提问,但隐含了"你早该来"的评判。家暴受害者不离开施暴者有极其复杂的原因（经济依赖、恐惧、孩子、习得性无助等）,这种提问会让案主感到被指责,加剧她的自我否定。',
            nextNodeId: 'dv-node-3',
            emotionImpact: -1,
          },
          {
            id: 'dv-2d',
            text: '您老公这个行为太过分了。您不能再忍了,您得想办法离开他,不然下次可能会更严重。',
            techniques: [],
            quality: 'poor',
            feedback:
              '直接替案主做判断和决定,完全忽视了她的恐惧和现实处境。"不能再忍""得离开"这种指令式回应不仅无效,还可能让案主更加退缩——她来这里不是为了被另一个人告诉她该怎么做。社工应该陪伴和赋能,而不是替代决策。',
            nextNodeId: 'dv-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'dv-node-3',
        stage: 'intake',
        clientMessage: '你说不是我的错...但是他每次打完都会说是我逼他的。而且我要是做好了,让他满意了,他就不会打我...我是不是真的哪里做得不对？',
        clientEmotion: 'distressed',
        clientAction: '(抬起头,眼神里满是困惑和自我怀疑)',
        hints: [
          '案主深陷施暴者构建的"你逼我的"叙事中,这是典型的心理操控后果',
          '需要温和但坚定地回应这个归因问题',
          '不要激烈否定,也不要模糊回应,帮助她看到"暴力是施暴者的选择"',
        ],
        requiredTechniques: ['empathy', 'providing_information'],
        responseOptions: [
          {
            id: 'dv-3a',
            text: '我理解您一直是这样被告知的,被说了那么多年,很难不信。但是王女士,我想请您想一想：不管您做了什么或没做什么,他可以选择沟通、选择离开、选择冷静——但他选择了动手。动手是他的选择,不是您的错。很多像您一样处境的女性都有这种"是不是我的错"的想法,这非常常见,但这不是事实。',
            techniques: ['empathy', 'providing_information', 'normalizing'],
            quality: 'excellent',
            feedback:
              '极为出色的回应。你先理解了她"相信是自己的错"的心理过程（共情而非评判）,然后用清晰的逻辑帮她看到"暴力是施暴者的选择",最后用正常化减轻了她的羞耻感。整个回应温和而有力,没有说教,而是引导。',
            nextNodeId: 'dv-node-4',
            emotionImpact: 2,
          },
          {
            id: 'dv-3b',
            text: '您会这样想,说明他的话对您影响很深。但其实在很多家庭暴力的情况里,施暴者都会把责任推给对方。您愿意跟我多聊聊他平时是怎么跟您说的吗？',
            techniques: ['empathy', 'providing_information'],
            quality: 'good',
            feedback:
              '指出了施暴者推卸责任的模式,并引导案主进一步探索。但"他的话对您影响很深"这个表述可以更有力一些——可以更明确地告诉案主"这不是您的错",而不仅仅是暗示。',
            nextNodeId: 'dv-node-4',
            emotionImpact: 1,
          },
          {
            id: 'dv-3c',
            text: '他说是您逼他的？那他平时说您哪里做得不好呢？',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '这个提问不小心强化了施暴者的叙事框架——追问"哪里做得不好"暗示确实存在"做得不好导致被打"的逻辑。在家暴案例中,社工必须清晰地打破"受害者有责"的认知框架,而不是在其框架内继续探索。',
            nextNodeId: 'dv-node-4',
            emotionImpact: -1,
          },
          {
            id: 'dv-3d',
            text: '当然不是您的错！他就是在给自己找借口,您怎么还信他的话呢？清醒一点,他就是一个暴力狂。',
            techniques: [],
            quality: 'poor',
            feedback:
              '虽然观点正确,但表达方式极为不当。"您怎么还信"带有指责意味,"清醒一点"暗示案主糊涂,"暴力狂"是贴标签。案主十年的认知不是一句话能改变的,这种态度只会让她觉得社工不理解她的处境,甚至可能为丈夫辩护而关闭对话。',
            nextNodeId: 'dv-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'dv-node-4',
        stage: 'intake',
        clientMessage: '...可能你说得对。但是我走不了啊。我没有工作...不对,我有工作,但是挣得少。两个孩子还小,一个上小学一个上幼儿园。我离开了他们怎么办？而且他说过,如果我敢走,他就杀了我全家。',
        clientEmotion: 'distressed',
        clientAction: '(身体开始发抖,声音带着哭腔)',
        hints: [
          '案主提到了具体的威胁（"杀了全家"）,需要认真评估安全风险',
          '不要否认她的恐惧,而是认真对待并提供具体的安全资源信息',
          '同时注意她对孩子的关切,这既是她留下的原因,也可能成为她改变的动力',
        ],
        requiredTechniques: ['active_listening', 'providing_information'],
        responseOptions: [
          {
            id: 'dv-4a',
            text: '我听到了,您的担心是非常真实的——经济、孩子、安全,每一个都是真实的压力。我不会劝您现在就做任何决定。但我想让您知道,有一些专门帮助像您这样处境的机构和服务。比如妇女庇护所、法律援助,还有人身安全保护令。这些信息我都可以给您,什么时候用、用不用,完全由您决定。',
            techniques: ['active_listening', 'validation', 'providing_information'],
            quality: 'excellent',
            feedback:
              '非常专业的回应。你做到了：承认案主每个担忧的合理性（不最小化）、明确不施加行动压力、提供具体的保护性资源信息、把决定权交还案主。对家暴案主来说,恢复自主感和掌控感是恢复的起点。提供信息但不施压是黄金原则。',
            nextNodeId: 'dv-node-5',
            emotionImpact: 1,
          },
          {
            id: 'dv-4b',
            text: '他威胁要杀了全家,这让我非常担心您和孩子的安全。您现在住在哪里？他知道您今天来这里吗？我们需要先确认您现在是安全的。',
            techniques: ['active_listening', 'providing_information'],
            quality: 'good',
            feedback:
              '正确地识别了安全风险并进行评估,这在家暴案例中非常重要。但连续几个问题可能让案主感到被追问。可以在评估安全的同时,先充分回应她对孩子和经济的担忧。',
            nextNodeId: 'dv-node-5',
            emotionImpact: 0,
          },
          {
            id: 'dv-4c',
            text: '我理解您的顾虑。但是如果您一直不走,暴力只会越来越严重。为了孩子,您也得做个决定。',
            techniques: ['empathy'],
            quality: 'fair',
            feedback:
              '"为了孩子也得做个决定"用孩子来施压案主,这种方式虽然出于好意,但会增加案主的愧疚感和压力。家暴受害者已经承受了巨大的心理负担,社工不应该成为另一个施压的人。应提供信息和支持,由案主自己做决定。',
            nextNodeId: 'dv-node-5',
            emotionImpact: -1,
          },
          {
            id: 'dv-4d',
            text: '他说要杀了您全家？那您必须马上报警！不能再拖了,越拖越危险。我现在就帮您打电话。',
            techniques: [],
            quality: 'poor',
            feedback:
              '在没有充分评估的情况下采取紧急行动,可能反而把案主置于更大的危险中。贸然报警如果没有后续安全保障,施暴者可能变本加厉。案主需要的是在社工帮助下安全地规划,而不是被推入可能激怒施暴者的行动。',
            nextNodeId: 'dv-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'dv-node-5',
        stage: 'assessment',
        clientMessage: '...保护令？我听说过,但是不知道有没有用。他要是知道我去搞这些,会更生气的。而且...说实话我还是会想,如果他能改就好了。毕竟孩子需要一个完整的家。',
        clientEmotion: 'confused',
        clientAction: '(擦了擦眼泪,表情矛盾)',
        hints: [
          '案主表现出典型的矛盾心理——既害怕又抱有希望,这在家暴关系中非常常见',
          '不要否定她"希望他改"的想法,而是正常化这种矛盾心理',
          '可以温和地提供关于暴力循环的信息,帮助她做出更知情的判断',
        ],
        requiredTechniques: ['normalizing', 'empathy'],
        responseOptions: [
          {
            id: 'dv-5a',
            text: '您既害怕又希望他能改,这种矛盾的心情是非常正常的。很多经历相似处境的女性都有过一样的想法。这说明您是一个重视家庭的人。不过我也想跟您分享一个信息：研究发现,家庭暴力如果没有专业干预,通常会反复出现甚至加重。这并不是说没有希望,而是改变需要他自己真心愿意,并且接受专业帮助。您不需要现在做任何决定,我们可以一步一步来。',
            techniques: ['normalizing', 'empathy', 'providing_information'],
            quality: 'excellent',
            feedback:
              '非常成熟的回应。正常化了案主的矛盾心理（没有评判她"为什么还不走"）,肯定了她重视家庭的价值观,同时温和地提供了关于暴力循环的客观信息。最后"一步一步来"既不催促也不放弃,给了案主安全感。',
            nextNodeId: 'dv-node-6',
            emotionImpact: 1,
          },
          {
            id: 'dv-5b',
            text: '您想要一个完整的家,这个心愿我完全理解。能不能跟我说说,在他不喝酒的时候,你们的关系是什么样的？',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '回应了案主对家庭完整的渴望,并引导探索关系的全貌。但要注意,探索"好的时候"可能无意中强化了案主继续忍耐的想法。在这个节点可以加入一些关于暴力循环的心理教育信息。',
            nextNodeId: 'dv-node-6',
            emotionImpact: 0,
          },
          {
            id: 'dv-5c',
            text: '我理解您对家庭的看法。但说实话,一个动手打人的丈夫,很难真正改变。您要考虑清楚。',
            techniques: ['empathy'],
            quality: 'fair',
            feedback:
              '"很难真正改变"虽然是统计事实,但这种直白的表述会打击案主刚刚建立的信任——她可能觉得你在否定她的希望。社工应该提供信息让案主自己判断,而不是替她下结论。',
            nextNodeId: 'dv-node-6',
            emotionImpact: -1,
          },
          {
            id: 'dv-5d',
            text: '完整的家？他都把您打进医院了,这个家早就不完整了。您不为自己想,也得为孩子想想,让孩子在这种环境下长大好吗？',
            techniques: [],
            quality: 'poor',
            feedback:
              '多重伤害性回应：否定案主对家的定义、用孩子施加愧疚感、暗示案主不为孩子着想。这种"当头棒喝"式的回应不仅无效,还会严重损害信任关系。案主的矛盾心理需要被理解和陪伴,不是被否定和指责。',
            nextNodeId: 'dv-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'dv-node-6',
        stage: 'assessment',
        clientMessage: '...一步一步来...好。其实今天能跟你说这些,我心里好受了一点。以前我都不敢跟任何人说,觉得很丢人。你觉得...我下次还能来找你吗？',
        clientEmotion: 'hopeful',
        clientAction: '(眼神里有了一点光,但仍然带着不安)',
        hints: [
          '案主表达了继续来访的意愿,这是非常积极的信号',
          '需要肯定她今天的勇气,巩固关系,为后续工作打基础',
          '提供具体的下次安排和紧急联系方式,让她感到有依靠',
        ],
        requiredTechniques: ['validation', 'encouragement'],
        responseOptions: [
          {
            id: 'dv-6a',
            text: '当然可以,您随时都可以来。王女士,今天您做了一件非常勇敢的事——说出来,本身就是改变的开始。您一点都不丢人,能在这种处境下保护孩子、维持生活、还鼓起勇气求助,说明您是一个非常坚强的人。这是我的联系方式,如果遇到紧急情况,可以随时打电话。我们下周同一时间见,好吗？',
            techniques: ['validation', 'encouragement', 'providing_information'],
            quality: 'excellent',
            feedback:
              '完美的结束回应。肯定案主的勇气、矫正"丢人"的羞耻感、用积极赋义让她看到自己的力量、提供紧急联系方式（安全保障）、约定下次面谈（持续性）。让案主带着被尊重、被赋能和有希望的感觉离开。',
            nextNodeId: 'dv-end',
            emotionImpact: 2,
          },
          {
            id: 'dv-6b',
            text: '当然可以来。您今天能来,已经迈出了很重要的一步。我们下次可以继续聊。如果这段时间有什么情况,这是24小时的妇女求助热线,您可以打这个电话。',
            techniques: ['encouragement', 'providing_information'],
            quality: 'good',
            feedback:
              '肯定了案主的行动并提供了热线信息。但可以更具体地回应她关于"丢人"的感受——这种羞耻感是家暴受害者求助的最大障碍之一,需要被明确地回应和矫正。',
            nextNodeId: 'dv-end',
            emotionImpact: 1,
          },
          {
            id: 'dv-6c',
            text: '可以的,下周来吧。但是您自己要注意安全,不要激怒您老公。',
            techniques: ['attending'],
            quality: 'fair',
            feedback:
              '"不要激怒您老公"又回到了"受害者负责管理施暴者情绪"的框架。无论案主做什么,暴力的责任在施暴者。这种善意的"提醒"会强化案主的自我归因,与今天建立的"不是您的错"的信息矛盾。',
            nextNodeId: 'dv-end',
            emotionImpact: -1,
          },
          {
            id: 'dv-6d',
            text: '嗯,下次来的时候我们讨论一下离婚的事。您回去先想想。',
            techniques: [],
            quality: 'poor',
            feedback:
              '在案主刚刚建立初步信任的时候就抛出"离婚"这个词,完全忽视了她的矛盾心理和恐惧。替案主设定议程、推动她做没准备好的事情,可能导致她下次不再来。社工应该跟随案主的节奏,而不是推着她走。',
            nextNodeId: 'dv-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景2：流动儿童适应困难（小豪）
  // ============================================================
  {
    id: 'migrant-child-intake',
    title: '流动儿童适应困难',
    subtitle: '随父母进城的小豪在新学校格格不入',
    category: '儿童服务',
    difficulty: 'beginner',
    primaryStage: 'intake',
    estimatedTime: '20-30分钟',
    coverColor: '#EFF6FF, #DBEAFE',
    icon: '🎒',
    clientProfile: {
      name: '小豪',
      age: 11,
      gender: '男',
      occupation: '小学五年级',
      avatar: '👦',
      background:
        '小豪随父母从农村来到城市,在新学校被同学嘲笑口音和穿着,成绩下滑,不愿上学。班主任发现后转介到学校社工。小豪比较内向,对陌生人有戒备。',
      presentingProblem:
        '随迁到城市后在新学校遭受同伴歧视,成绩下滑、不愿上学,出现适应困难和社交退缩。',
      emotionalState: 'resistant',
      keyTraits: ['语言适应困难', '被歧视经历', '内向防御', '想家', '自尊心受损'],
    },
    description:
      '小豪是一名11岁的流动儿童,随父母从农村来到城市,在新学校因口音和穿着被同学嘲笑,成绩下滑,开始抗拒上学。班主任发现后转介到学校社工。本场景帮助学习者练习如何与儿童案主建立关系,使用适合儿童年龄的语言和方式,创造安全空间,逐步了解他的经历和感受。',
    learningObjectives: [
      '学习与儿童案主建立信任关系的方法',
      '练习使用适合儿童年龄的语言和沟通方式',
      '掌握创造安全空间帮助儿童表达感受的技巧',
      '了解流动儿童面临的适应困难和心理需求',
      '学习在接案阶段评估儿童社交和情绪状况',
    ],
    dialogueNodes: [
      {
        id: 'mi-node-1',
        stage: 'intake',
        clientMessage: '老师让我来的。我没做错什么事。',
        clientEmotion: 'resistant',
        clientAction: '(站在门口不肯进来,低头盯着自己的鞋)',
        hints: [
          '孩子以为自己犯了错被叫来,需要先消除误解',
          '不要急于让他坐下或开口,先用轻松的方式降低他的防御',
          '对儿童案主,非语言沟通和环境营造比言语更重要',
        ],
        requiredTechniques: ['attending', 'active_listening'],
        responseOptions: [
          {
            id: 'mi-1a',
            text: '嘿小豪,你没有做错任何事哦,放心。我不是那种会批评人的老师。我这里就是聊聊天的地方。你看,桌上有些零食和画笔,你随便坐,想吃点什么就拿。',
            techniques: ['attending', 'active_listening', 'normalizing'],
            quality: 'excellent',
            feedback:
              '非常好的儿童接待方式。你做到了：消除"被批评"的恐惧、用轻松的语气降低紧张感、提供零食和画笔等非语言的安全信号、给予选择权而不施压。这些都是与儿童建立关系的关键要素。',
            nextNodeId: 'mi-node-2',
            emotionImpact: 1,
          },
          {
            id: 'mi-1b',
            text: '你好小豪,你没有做错事。我是学校的社工老师,想跟你聊聊天。你进来坐吧。',
            techniques: ['attending', 'active_listening'],
            quality: 'good',
            feedback:
              '友善且澄清了来意。但"社工老师"这个称呼对孩子来说可能陌生,建议用更生活化的自我介绍。可以增加一些让孩子感到舒适的非语言元素（零食、玩具等）来降低环境压力。',
            nextNodeId: 'mi-node-2',
            emotionImpact: 0,
          },
          {
            id: 'mi-1c',
            text: '小豪同学,班主任跟我说你最近不太愿意上学？进来吧,我们聊聊怎么回事。',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '直接点出"不愿意上学"可能让孩子感到被审问。而且他会警惕"班主任说了什么？"与儿童工作时应该先建立舒适感,而不是开门见山谈问题。让孩子先放松下来比获取信息更重要。',
            nextNodeId: 'mi-node-2',
            emotionImpact: -1,
          },
          {
            id: 'mi-1d',
            text: '进来坐下,别站在门口。你不用紧张,我就问你几个问题。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"坐下""问你几个问题"的表述像审讯一样,会加剧孩子的紧张和防御。对已经有戒备心的儿童案主,指令性语言会强化"权力不平等"的感受。应该用邀请而非指令的方式与孩子互动。',
            nextNodeId: 'mi-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'mi-node-2',
        stage: 'intake',
        clientMessage: '...嗯。',
        clientEmotion: 'resistant',
        clientAction: '(慢慢走进来坐下,但身体缩着,不说话,偷偷看了看桌上的画笔)',
        hints: [
          '孩子虽然进来了但还没放松,注意他偷偷看画笔——这可能是切入点',
          '沉默是正常的,不要急于用问题填满空间',
          '可以通过画画、聊爱好等非直接方式打开话题',
        ],
        requiredTechniques: ['attending', 'encouragement'],
        responseOptions: [
          {
            id: 'mi-2a',
            text: '（注意到他看画笔）你喜欢画画吗？这些笔颜色挺多的,你可以随便用。我以前有个来这里的学生,画了一条特别厉害的龙。你平时喜欢画什么？',
            techniques: ['attending', 'encouragement', 'open_questions'],
            quality: 'excellent',
            feedback:
              '敏锐地捕捉到孩子看画笔的非语言信号,以此为切入点打开话题。提到其他学生来过这里（正常化）,用画画作为媒介降低直接对话的压力。对儿童来说,活动性媒介往往比纯语言更容易促进表达。',
            nextNodeId: 'mi-node-3',
            emotionImpact: 1,
          },
          {
            id: 'mi-2b',
            text: '不着急,慢慢来。你想安静坐一会儿也可以。对了,你平时课后喜欢做什么？',
            techniques: ['attending', 'open_questions'],
            quality: 'good',
            feedback:
              '给孩子空间不施压,这很好。用兴趣爱好作为切入话题也是正确的方向。但可以更多利用当下的环境元素（比如他看画笔这个动作）来自然地开启互动。',
            nextNodeId: 'mi-node-3',
            emotionImpact: 0,
          },
          {
            id: 'mi-3c',
            text: '小豪,我知道你可能不太想说话。那我先问你几个简单的问题好吗？你是从哪里转来的？',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '虽然试图降低难度,但"我先问你几个问题"仍然是一种结构化的信息收集方式,对抗拒的儿童来说依然有压力。而且"从哪里转来的"可能触及孩子敏感的身份认同。先建立舒适感再提问会更有效。',
            nextNodeId: 'mi-node-3',
            emotionImpact: -1,
          },
          {
            id: 'mi-2d',
            text: '你总是这么不爱说话吗？在学校也这样吗？',
            techniques: [],
            quality: 'poor',
            feedback:
              '"总是这么不爱说话"是一种标签化的表述,而且暗含了"不说话是不好的"价值判断。这会让内向的孩子觉得自己有问题,加深自我否定。每个孩子有自己的节奏,社工应该尊重而不是质疑。',
            nextNodeId: 'mi-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'mi-node-3',
        stage: 'intake',
        clientMessage: '我以前在老家画过。我们那边有条河,我经常画那条河...这里没有河。',
        clientEmotion: 'sad',
        clientAction: '(拿起画笔,在纸上慢慢画了几下,声音变得小小的)',
        hints: [
          '孩子开始表达了——"老家""河"代表着他的归属感和思念',
          '"这里没有河"是一个很有象征意味的表达,暗示了他的失落和不适应',
          '跟随他的表达节奏,围绕"老家"这个安全话题展开',
        ],
        requiredTechniques: ['active_listening', 'empathy'],
        responseOptions: [
          {
            id: 'mi-3a',
            text: '听起来那条河对你很特别。你一定很想念老家吧。从一个熟悉的地方来到一个全新的城市,什么都不一样了,那种感觉肯定不容易。你愿意跟我说说你的老家吗？在那边你最喜欢的是什么？',
            techniques: ['active_listening', 'empathy', 'open_questions'],
            quality: 'excellent',
            feedback:
              '完美地跟随了孩子的节奏。确认了河的重要意义、反映了思乡之情、命名了他"不适应"的感受、然后用开放式问题邀请他继续分享安全话题（老家的美好回忆）。让孩子在自己感到舒服的领域表达,是建立关系的有效途径。',
            nextNodeId: 'mi-node-4',
            emotionImpact: 2,
          },
          {
            id: 'mi-3b',
            text: '你画得挺好的。你是什么时候来这个城市的？来了多久了？',
            techniques: ['encouragement', 'open_questions'],
            quality: 'good',
            feedback:
              '肯定了孩子的画画能力,这很好。但紧接着的问题偏向信息收集,没有充分回应他话语中的情感（想家、失落）。孩子说"这里没有河"时,情感上的回应比事实性的提问更重要。',
            nextNodeId: 'mi-node-4',
            emotionImpact: 0,
          },
          {
            id: 'mi-3c',
            text: '城市虽然没有河,但是有很多其他好玩的地方啊,比如游乐场、图书馆。你去过吗？',
            techniques: ['normalizing'],
            quality: 'fair',
            feedback:
              '试图用城市的优点来安慰孩子,但这本质上是在否定他的失落感。他说的"这里没有河"不仅仅是关于一条河——是关于他失去的一切熟悉的东西。急于"让他看到好的一面"会让他觉得自己的难过不被理解。',
            nextNodeId: 'mi-node-4',
            emotionImpact: -1,
          },
          {
            id: 'mi-3d',
            text: '嗯,来到新地方是需要适应的。好了,我们先不说这些了,聊聊学校的情况吧。你在学校跟同学们相处得怎么样？',
            techniques: [],
            quality: 'poor',
            feedback:
              '生硬地转换话题,完全忽视了孩子刚刚打开的情感表达。好不容易通过画画和老家话题让他愿意说话了,突然转到"学校情况"这个可能让他痛苦的话题,会让孩子觉得你并不真正关心他的感受,只关心"问题"。',
            nextNodeId: 'mi-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'mi-node-4',
        stage: 'assessment',
        clientMessage: '老家好多朋友。我们天天一起去河边抓鱼。这里的同学...他们笑话我说话的声音,说我是"乡巴佬"。我又不是故意说话跟他们不一样的...',
        clientEmotion: 'sad',
        clientAction: '(停下画笔,声音变得委屈)',
        hints: [
          '孩子说出了被歧视的核心经历——被嘲笑口音',
          '"我又不是故意的"表达了委屈和无辜感',
          '需要充分确认他的感受,不要急于讲道理或给建议',
        ],
        requiredTechniques: ['empathy', 'normalizing'],
        responseOptions: [
          {
            id: 'mi-4a',
            text: '被同学笑话,那种感觉一定很难受。你说话的方式一点问题都没有——那是你家乡的声音,是你从小听着长大的,很珍贵。嘲笑别人说话不一样,是他们做得不对,不是你的错。你在老家有那么多好朋友,说明你是一个很好的伙伴。',
            techniques: ['empathy', 'normalizing', 'validation'],
            quality: 'excellent',
            feedback:
              '非常温暖有力的回应。你做了三件重要的事：确认他的受伤感受、赋予口音正面意义（"家乡的声音,很珍贵"）、明确指出"不是你的错"。最后提到老家的朋友来肯定他的社交能力。这种回应能修复孩子受损的自尊心。',
            nextNodeId: 'mi-node-5',
            emotionImpact: 2,
          },
          {
            id: 'mi-4b',
            text: '他们笑话你的口音,这让你很不开心是不是？你能跟我说说,他们具体是怎么说的吗？除了说话的声音,还有别的让你不舒服的事吗？',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '确认了感受并进一步探索具体情况。这有助于全面了解他在学校的遭遇。但孩子此刻更需要的是被肯定"你没有错",可以先充分回应他的委屈感再继续探索细节。',
            nextNodeId: 'mi-node-5',
            emotionImpact: 0,
          },
          {
            id: 'mi-4c',
            text: '小孩子都是这样的,他们不是真的坏,过段时间就好了。你试着跟他们多玩玩,慢慢就会接受你了。',
            techniques: ['normalizing'],
            quality: 'fair',
            feedback:
              '"过段时间就好了"最小化了孩子正在经历的痛苦。而且"试着跟他们多玩玩"是把适应的责任完全放在了被歧视的一方身上。孩子需要先被理解和支持,然后才有力量去面对社交困境。',
            nextNodeId: 'mi-node-5',
            emotionImpact: -1,
          },
          {
            id: 'mi-4d',
            text: '你应该去跟班主任说,让班主任管管那些同学。你怎么不告老师呢？',
            techniques: [],
            quality: 'poor',
            feedback:
              '给了一个过于简单的行为建议,而且"你怎么不告老师"暗含了"你自己也有责任"的意味。很多孩子不告诉老师是因为怕被报复或被贴"告状精"的标签。社工应该先理解孩子的处境和顾虑,而不是指导他该怎么做。',
            nextNodeId: 'mi-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'mi-node-5',
        stage: 'assessment',
        clientMessage: '...真的吗？我说话的方式没有问题吗？我妈也说让我学普通话,说话别那么"土"。我也想说得跟他们一样,但是我学不会...',
        clientEmotion: 'sad',
        clientAction: '(眼眶红了,用手背擦了一下眼睛)',
        hints: [
          '连妈妈也在否定他的口音,让他更加觉得"是自己的问题"',
          '孩子需要被再次确认"你没有问题",帮助他区分"适应"和"否定自我"',
          '可以用年龄适合的方式帮他理解"不同不等于不好"',
        ],
        requiredTechniques: ['encouragement', 'normalizing'],
        responseOptions: [
          {
            id: 'mi-5a',
            text: '小豪,你的口音真的一点问题都没有。你想想看,电视上的人说话也各种各样的呢——四川话、广东话、东北话,每种都很有特色。你妈妈让你学普通话,可能是希望你在城市里方便一些,这是她关心你。但你老家的话也不用丢掉,那是属于你的,特别的。慢慢学普通话就好了,不着急,你已经很棒了。',
            techniques: ['encouragement', 'normalizing', 'empathy'],
            quality: 'excellent',
            feedback:
              '非常到位的回应。用具体的例子（方言多样性）帮孩子建立"不同不等于不好"的认知,体谅了妈妈的出发点而非指责,同时再次肯定了孩子自身。"慢慢来""不着急"减轻了他的压力。整个回应温暖、具体,适合这个年龄的孩子理解。',
            nextNodeId: 'mi-node-6',
            emotionImpact: 2,
          },
          {
            id: 'mi-5b',
            text: '你妈妈可能也是担心你在学校不适应。不过你说话的方式没有对错之分。你愿意的话,我可以帮你想想怎么慢慢适应这里的生活,同时保持你自己的特点。',
            techniques: ['encouragement', 'normalizing'],
            quality: 'good',
            feedback:
              '体谅了妈妈的立场,确认了孩子口音的合理性,并提出了帮助。但可以用更具体的例子来帮助孩子理解"不同是好的",抽象的"没有对错之分"对11岁的孩子来说可能不够有说服力。',
            nextNodeId: 'mi-node-6',
            emotionImpact: 1,
          },
          {
            id: 'mi-5c',
            text: '你妈妈说得也对,学好普通话在城市里确实方便。你上课多跟着老师读课文,很快就能学会了。',
            techniques: [],
            quality: 'fair',
            feedback:
              '无意中站在了"你需要改变"的一方,强化了孩子"是我的问题"的认知。虽然学普通话本身没有问题,但在孩子正在为口音感到痛苦的时候,强调"学好普通话"等于认同了他需要改变自己才能被接受。应该先建立"你本身没有问题"的基础。',
            nextNodeId: 'mi-node-6',
            emotionImpact: -1,
          },
          {
            id: 'mi-5d',
            text: '学不会就多练呗,有什么难的。我小时候也换过学校,适应适应就好了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"有什么难的"彻底否定了孩子的困境。用自己的经历类比虽然想表达"我理解",但实际效果是最小化了孩子的痛苦。每个人的经历不同,不能简单类比。孩子会觉得"连这个老师也不理解我"。',
            nextNodeId: 'mi-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'mi-node-6',
        stage: 'assessment',
        clientMessage: '嗯...谢谢你。其实来这里之前我挺害怕的,以为你也会说我不好。你...你下次还在这里吗？我能不能再来画画？',
        clientEmotion: 'hopeful',
        clientAction: '(小心翼翼地看着社工,手里还拿着画笔)',
        hints: [
          '孩子主动表达了继续来的意愿,关系初步建立成功',
          '用画画作为他继续来的理由,说明活动媒介起了作用',
          '需要给他确定的肯定回答,巩固安全感和信任',
        ],
        requiredTechniques: ['encouragement', 'attending'],
        responseOptions: [
          {
            id: 'mi-6a',
            text: '当然可以！我每周二和周四下午都在这里,你随时可以来画画。今天你画的那条河很好看,下次你可以接着画,也可以画别的你想画的东西。小豪,谢谢你今天愿意跟我聊这些,你是一个很勇敢的小伙子。我们下次见,好不好？',
            techniques: ['encouragement', 'attending', 'validation'],
            quality: 'excellent',
            feedback:
              '完美的结束。给了确切的时间安排（减少不确定感）、通过画画延续了连接、肯定了他今天的勇气、用"小伙子"的称呼传递了温暖和认可。让孩子带着被接纳和期待的感觉离开,为后续工作打下了很好的基础。',
            nextNodeId: 'mi-end',
            emotionImpact: 2,
          },
          {
            id: 'mi-6b',
            text: '当然可以来。这里的画笔和纸随时给你用。你下次来的时候我们可以继续聊聊,好吗？',
            techniques: ['encouragement', 'attending'],
            quality: 'good',
            feedback:
              '给了肯定的回答和持续的邀请。但可以更具体地肯定他今天的表现（愿意开口说话、分享老家的事）,帮助他看到自己的进步和勇气。',
            nextNodeId: 'mi-end',
            emotionImpact: 1,
          },
          {
            id: 'mi-6c',
            text: '可以来,但是下次来之前你试着跟班上的同学说说话,交一个朋友,好不好？',
            techniques: [],
            quality: 'fair',
            feedback:
              '在孩子刚建立安全感的时候就布置了他可能做不到的"任务"。与正在被排斥的同学交朋友对他来说是很大的挑战,如果做不到,他可能会更挫败。应该先巩固他的安全感和自信,行为上的改变需要循序渐进。',
            nextNodeId: 'mi-end',
            emotionImpact: -1,
          },
          {
            id: 'mi-6d',
            text: '嗯,下次来吧。不过下次我们主要聊学习的事,你成绩下滑的问题也得解决。',
            techniques: [],
            quality: 'poor',
            feedback:
              '把焦点从关系建立转到了"问题"上,而且把下次定义为"解决成绩问题"会让孩子产生压力。他说"能不能来画画"是在寻找一个安全的空间,而你把这个空间变成了又一个要面对"表现不好"的地方。这可能让他不想再来。',
            nextNodeId: 'mi-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },

  // ============================================================
  // 场景3：大学退学危机（小杨）
  // ============================================================
  {
    id: 'college-dropout-intake',
    title: '大学退学危机',
    subtitle: '挂科后想退学的小杨不知如何面对父母',
    category: '学生辅导',
    difficulty: 'intermediate',
    primaryStage: 'intake',
    estimatedTime: '25-35分钟',
    coverColor: '#F5F3FF, #EDE9FE',
    icon: '🎓',
    clientProfile: {
      name: '小杨',
      age: 19,
      gender: '男',
      occupation: '大一学生',
      avatar: '🧑',
      background:
        '小杨是农村考来的大学生,父母省吃俭用供他读书。大一上学期挂了三门课,压力巨大,想退学打工但不敢告诉父母。辅导员推荐他来找社工聊聊。',
      presentingProblem:
        '大一挂科三门后产生强烈的羞耻感和挫败感,想退学打工但不敢面对父母,陷入迷茫和自我否定。',
      emotionalState: 'distressed',
      keyTraits: ['学业压力', '家庭期望', '经济困难', '自尊心强', '迷茫无助'],
    },
    description:
      '小杨是一名19岁的大一学生,从农村考上大学,父母省吃俭用供他读书。大一上学期挂了三门课,他感到巨大的羞耻和压力,想退学打工但不敢告诉父母。辅导员推荐他来找社工。本场景帮助学习者练习如何回应案主的羞耻和困惑,探索退学想法背后的真实原因,评估这是学业困难还是其他问题。',
    learningObjectives: [
      '学习回应案主强烈的羞耻感和自我否定',
      '练习探索表面诉求背后的深层原因',
      '掌握在不评判的前提下帮助案主厘清困境',
      '了解农村大学生面临的特殊压力和适应挑战',
      '学习评估案主的情绪状态和支持系统',
    ],
    dialogueNodes: [
      {
        id: 'cd-node-1',
        stage: 'intake',
        clientMessage: '辅导员说让我来。其实我觉得没什么用...我的问题聊也聊不好的。',
        clientEmotion: 'distressed',
        clientAction: '(驼着背坐着,眼圈有点红,不太看人)',
        hints: [
          '案主是被推荐来的,动机不明确,但情绪上看得出压力很大',
          '"聊也聊不好"可能反映了习得性无助感',
          '先接纳他的怀疑态度,不要急于证明"有用"',
        ],
        requiredTechniques: ['attending', 'empathy'],
        responseOptions: [
          {
            id: 'cd-1a',
            text: '嗯,你觉得聊也解决不了问题——听起来这段时间真的很不好过,让你觉得什么都没有用了。不过既然你来了,我们不急着"解决问题",就先坐一会儿,说说你的感受也行。这段时间你过得怎么样？',
            techniques: ['attending', 'empathy', 'reflection_feelings'],
            quality: 'excellent',
            feedback:
              '出色的开场。你做到了：接纳他的怀疑而不是辩解、反映了他的无力感、降低了"必须解决问题"的压力、用温和的方式邀请他表达。"既然你来了"尊重了他已经迈出的一步。',
            nextNodeId: 'cd-node-2',
            emotionImpact: 1,
          },
          {
            id: 'cd-1b',
            text: '你好小杨,你说"聊也聊不好",看来最近遇到了一些困难。我不一定能解决所有问题,但我可以听你说说,你觉得呢？',
            techniques: ['attending', 'empathy'],
            quality: 'good',
            feedback:
              '诚实地表达了"不一定能解决所有问题",这比空洞的保证更真诚。但可以多一些对他当下情绪状态的回应——他看起来很沮丧,这值得被看到和确认。',
            nextNodeId: 'cd-node-2',
            emotionImpact: 0,
          },
          {
            id: 'cd-1c',
            text: '辅导员跟我说了你的情况,挂了几门课是吧？我们一起想想办法。',
            techniques: ['open_questions'],
            quality: 'fair',
            feedback:
              '直接点出"挂科"可能让案主感到隐私被泄露和被评判。而且"想想办法"在他还没开口表达的时候就进入了问题解决模式。接案阶段应先建立关系和信任,了解案主自己的表述,而非依赖第三方信息。',
            nextNodeId: 'cd-node-2',
            emotionImpact: -1,
          },
          {
            id: 'cd-1d',
            text: '不试试怎么知道没用呢？你先别那么消极,把你的问题跟我说说。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"别那么消极"否定了案主的感受,"不试试怎么知道"是在说教。案主已经很痛苦了,他的"没用"不是消极,而是真实的无力感。这种回应会让他觉得社工也不理解他,可能直接关闭对话。',
            nextNodeId: 'cd-node-2',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cd-node-2',
        stage: 'intake',
        clientMessage: '...就是觉得什么都搞砸了。我挂了三门课,三门。我从小到大没挂过科,到了大学一下子挂三门...我就不是读大学的料。',
        clientEmotion: 'distressed',
        clientAction: '(双手搓着膝盖,嘴唇有些发抖)',
        hints: [
          '"不是读大学的料"是一个以偏概全的自我否定,但不要急于纠正',
          '从"从小到大没挂过科"到"挂三门"的落差是巨大的,要充分理解这个打击',
          '先共情再探索,了解挂科的具体原因',
        ],
        requiredTechniques: ['empathy', 'reflection_feelings'],
        responseOptions: [
          {
            id: 'cd-2a',
            text: '从小到大一直学习很好,到了大学突然挂了三门——这个落差一定让你特别难以接受。你说"什么都搞砸了""不是读大学的料",我能感受到你现在对自己非常失望。这种打击确实是很大的。',
            techniques: ['empathy', 'reflection_feelings', 'validation'],
            quality: 'excellent',
            feedback:
              '非常好的共情回应。你准确地抓住了核心——不是三门课本身,而是从"一直很好"到"突然挂科"的落差感。用他自己的话反映他的感受（"什么都搞砸了""不是读大学的料"）,让他感到被真正听见了。先充分确认痛苦,才有后续探索的基础。',
            nextNodeId: 'cd-node-3',
            emotionImpact: 1,
          },
          {
            id: 'cd-2b',
            text: '挂了三门课,这对你来说压力一定很大。你能跟我说说是怎么回事吗？是哪几门课？你觉得是什么原因挂的？',
            techniques: ['empathy', 'open_questions'],
            quality: 'good',
            feedback:
              '表达了理解并引导探索原因。但在他刚表达出强烈的自我否定时,直接转入问原因可能太快了一些。他说"不是读大学的料"时,那种挫败感值得被更多地回应和停留。',
            nextNodeId: 'cd-node-3',
            emotionImpact: 0,
          },
          {
            id: 'cd-2c',
            text: '挂科在大学很正常,很多人大一都会挂。你可以补考的,不用那么紧张。',
            techniques: ['normalizing'],
            quality: 'fair',
            feedback:
              '虽然试图正常化,但"很多人都挂"在此刻会让案主觉得你不理解他——他不是"很多人",他是一个从未挂过科的学生第一次面对三门挂科。过早的正常化会被体验为最小化和敷衍。',
            nextNodeId: 'cd-node-3',
            emotionImpact: -1,
          },
          {
            id: 'cd-2d',
            text: '挂三门说明你的学习方法可能有问题。大学跟高中不一样,你得找到适合大学的学习方法。',
            techniques: [],
            quality: 'poor',
            feedback:
              '案主正处于极度的自我否定中,这时候分析"学习方法有问题"等于在确认他"不够好"。而且你并不了解他挂科的原因就给出判断。社工应该先了解情况再做评估,更重要的是先处理情绪再处理问题。',
            nextNodeId: 'cd-node-3',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cd-node-3',
        stage: 'assessment',
        clientMessage: '其实上课我...很多时候听不懂。高中的底子跟人家城里的没法比,人家讲的那些我都没接触过。我又不好意思问,怕同学笑话。',
        clientEmotion: 'distressed',
        clientAction: '(头低得更深了,声音几乎听不见)',
        hints: [
          '核心原因浮现——教育资源差距导致的学业困难,加上害怕暴露弱点',
          '这涉及城乡教育差距的结构性问题,不是案主个人能力的问题',
          '需要帮助他看到这是环境因素而非个人缺陷',
        ],
        requiredTechniques: ['empathy', 'clarification'],
        responseOptions: [
          {
            id: 'cd-3a',
            text: '谢谢你愿意跟我说这些。小杨,你说"底子跟人家没法比"——我想请你想一想,你从农村考到这所大学,这本身就说明了你的能力。你现在遇到的困难,不是你笨或者不够好,而是城里的孩子从小接触的资源你没有。这是起点不同,不是能力不同。你能听到这个区别吗？',
            techniques: ['empathy', 'clarification', 'validation'],
            quality: 'excellent',
            feedback:
              '极为出色的回应。你精准地指出了问题的本质——教育资源差距而非个人能力不足,帮助案主区分"起点不同"和"能力不同"。先肯定他考上大学的能力,再温和地矫正他的自我归因。最后"你能听到这个区别吗"邀请他参与思考而非被动接受。',
            nextNodeId: 'cd-node-4',
            emotionImpact: 2,
          },
          {
            id: 'cd-3b',
            text: '上课听不懂还不好意思问,那确实会越来越跟不上。你觉得是所有科目都听不懂,还是某些特别难的课？有没有你觉得还可以的科目？',
            techniques: ['clarification', 'open_questions'],
            quality: 'good',
            feedback:
              '引导案主更具体地描述困难,避免笼统的自我否定。区分"所有课"和"某些课"是重要的,可以帮助他看到自己并非全面失败。但可以先更充分地回应他的羞耻感和不敢求助的心理。',
            nextNodeId: 'cd-node-4',
            emotionImpact: 0,
          },
          {
            id: 'cd-3c',
            text: '大学里有很多辅导资源,比如助教答疑、学习小组。你有没有试过去找这些帮助？',
            techniques: ['providing_information'],
            quality: 'fair',
            feedback:
              '提供资源信息本身没有错,但时机不对。案主刚刚向你袒露了自己最脆弱的部分——"不好意思问,怕同学笑话",你就告诉他"可以找助教",这等于忽视了他"害怕暴露弱点"的心理障碍。先处理"不敢求助"的心理,再谈求助渠道。',
            nextNodeId: 'cd-node-4',
            emotionImpact: -1,
          },
          {
            id: 'cd-3d',
            text: '既然底子跟不上,你有没有想过转一个容易点的专业？或者也确实可以考虑退学去工作。',
            techniques: [],
            quality: 'poor',
            feedback:
              '在没有充分了解和评估的情况下就提出"转专业"或"退学",是极不负责的回应。这等于认同了案主"我不行"的自我判断。案主此刻需要的是被帮助看到问题的真实面貌和可能性,而不是被顺着他的绝望走。',
            nextNodeId: 'cd-node-4',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cd-node-4',
        stage: 'assessment',
        clientMessage: '...起点不同？可能吧。但是结果还是一样的啊,挂科就是挂科。我爸妈要是知道了...他们砸锅卖铁供我上学,我妈在工厂加班到晚上十一点...我对不起他们。',
        clientEmotion: 'distressed',
        clientAction: '(用手捂住脸,眼泪掉下来)',
        hints: [
          '案主的核心痛苦从学业失败转向了对父母的愧疚——这可能才是最重的负担',
          '不要急于安慰"没关系",先充分理解和确认这份愧疚感的重量',
          '注意他描述的家庭经济状况——这是理解他压力的重要背景',
        ],
        requiredTechniques: ['reflection_feelings', 'empathy'],
        responseOptions: [
          {
            id: 'cd-4a',
            text: '（递纸巾）没关系,想哭就哭一会儿。你说"对不起他们"——我能听到你心里对爸妈有多深的感情。你妈在工厂加班到晚上十一点,你爸省吃俭用,他们做这些都是为了你。而你也拼命想做好来回报他们。所以挂科这件事才让你这么痛苦——不只是成绩,是你觉得自己辜负了他们的付出。这份心情,真的很重。',
            techniques: ['reflection_feelings', 'empathy', 'validation'],
            quality: 'excellent',
            feedback:
              '非常有深度的共情回应。你准确地触及了案主痛苦的核心——不是怕挂科本身,是怕辜负父母。用他描述的细节（妈妈加班到十一点）来反映他的感受,让他知道你真的在听。"这份心情很重"是一个有力量的确认,没有试图减轻或解决,只是承载。',
            nextNodeId: 'cd-node-5',
            emotionImpact: 2,
          },
          {
            id: 'cd-4b',
            text: '你爸妈对你付出了很多,你很在意不想让他们失望,对吧？你有没有想过,如果你跟爸妈说了,他们可能会怎么反应？',
            techniques: ['reflection_feelings', 'open_questions'],
            quality: 'good',
            feedback:
              '确认了他的感受并引导他思考与父母沟通的可能性。但在他正在哭泣的时刻就引入"跟父母说"这个话题可能太快了——这恰恰是他最恐惧的事情。可以先充分陪伴他的情绪,再慢慢探索。',
            nextNodeId: 'cd-node-5',
            emotionImpact: 0,
          },
          {
            id: 'cd-4c',
            text: '你爸妈供你上学是因为爱你,不只是为了成绩。他们知道了可能会难过,但不会不要你的。',
            techniques: ['normalizing'],
            quality: 'fair',
            feedback:
              '试图安慰案主他的父母会理解,但你并不了解他父母的实际态度。在有些家庭中,挂科确实可能引发很严重的反应。不应该假设父母一定会理解,而是应该帮助案主探索和准备如何应对这个困难的对话。',
            nextNodeId: 'cd-node-5',
            emotionImpact: -1,
          },
          {
            id: 'cd-4d',
            text: '你爸妈那么辛苦,你更应该好好学习啊。退学的话对得起他们吗？',
            techniques: [],
            quality: 'poor',
            feedback:
              '用他已经压在自己身上的愧疚来施压,这是火上浇油。案主已经被"对不起父母"的想法压得喘不过气来,你再强化这一点等于在他的伤口上撒盐。这种回应可能让他更加崩溃,甚至引发极端想法。社工绝不能用愧疚来激励案主。',
            nextNodeId: 'cd-node-5',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cd-node-5',
        stage: 'assessment',
        clientMessage: '...我已经想了很久了。退学打工起码能挣钱,不用再花家里的钱。我表哥没上大学,在工厂里也挣得不少。读书读出来也不一定找得到好工作...你说是不是？',
        clientEmotion: 'confused',
        clientAction: '(擦了擦眼泪,好像在寻求认同)',
        hints: [
          '案主在为退学寻找合理化理由——这是他应对痛苦的一种方式',
          '不要直接反对也不要认同,而是帮他看到这个决定背后的各种因素',
          '他说"你说是不是"是在寻求确认,注意不要被拉进去做判断',
        ],
        requiredTechniques: ['open_questions', 'clarification'],
        responseOptions: [
          {
            id: 'cd-5a',
            text: '我听到你在很认真地想这个问题。你提到了几个想法——退学可以省钱、表哥没上大学也过得不错、读书不一定有好结果。这些都是你的考虑。但我想跟你一起想深一点：你想退学,是真的觉得上大学没有价值,还是因为挂科的挫折太大了,你想逃离这种痛苦？这两个是不同的。',
            techniques: ['open_questions', 'clarification', 'reflection_feelings'],
            quality: 'excellent',
            feedback:
              '非常精妙的干预。你先不评判地列出了他的想法（让他感到被听见）,然后提出了一个关键的区分——"是真的不想读"还是"因为太痛苦想逃"。这帮助案主从情绪驱动的决定中退后一步,看到自己的真实动机。不做判断,只引导思考。',
            nextNodeId: 'cd-node-6',
            emotionImpact: 1,
          },
          {
            id: 'cd-5b',
            text: '你表哥的路也是一种选择,但每个人的情况不同。你愿意跟我聊聊,当初你为什么想考大学吗？你考上的时候是什么感觉？',
            techniques: ['open_questions', 'clarification'],
            quality: 'good',
            feedback:
              '引导案主回顾最初的动机和考上大学时的感受,帮助他重新连接那个曾经的自己。这是一种很好的探索方式。但可以更明确地区分"是不想读"还是"因为受挫想放弃"。',
            nextNodeId: 'cd-node-6',
            emotionImpact: 0,
          },
          {
            id: 'cd-5c',
            text: '你表哥在工厂挣得不少,但长远来看大学学历还是很重要的。你先不要冲动做决定。',
            techniques: [],
            quality: 'fair',
            feedback:
              '"大学学历很重要"是一种价值判断,而且"不要冲动做决定"暗示他现在的想法是冲动的。虽然你可能是对的,但直接告诉他不应该退学,并不能帮他真正想清楚。他需要的是被引导去思考,而不是被给出答案。',
            nextNodeId: 'cd-node-6',
            emotionImpact: -1,
          },
          {
            id: 'cd-5d',
            text: '你不能拿你表哥的情况来比啊,每个人不一样。现在社会没有学历很难混的,你退了学以后会后悔的。',
            techniques: [],
            quality: 'poor',
            feedback:
              '否定了案主的参照系（"不能比"）,然后用恐吓式的说教（"没学历很难混""会后悔"）来阻止退学。这种回应既不尊重案主的思考,也不帮助他做出真正知情的决定。社工的角色是帮助案主自己想清楚,而不是替他做判断。',
            nextNodeId: 'cd-node-6',
            emotionImpact: -2,
          },
        ],
      },
      {
        id: 'cd-node-6',
        stage: 'assessment',
        clientMessage: '...逃离痛苦。可能是吧。其实我以前挺喜欢学东西的。但是现在每天上课就像坐牢...你说我还有救吗？',
        clientEmotion: 'hopeful',
        clientAction: '(第一次正面看着社工,眼神里既有痛苦也有一丝期待)',
        hints: [
          '案主开始有了自我觉察——承认了"逃避"的动机,这是很大的进步',
          '"还有救吗"表明他内心还有希望,只是需要有人告诉他"有"',
          '需要在确认希望的同时提供实际可行的下一步方向',
        ],
        requiredTechniques: ['validation', 'encouragement'],
        responseOptions: [
          {
            id: 'cd-6a',
            text: '你刚才说了一句很重要的话——"以前挺喜欢学东西的"。这说明学习的热情还在你心里,只是被挫折埋住了。而且你今天能坐在这里,说出这些,还在问"有没有救"——小杨,一个真正放弃的人是不会问"有没有救"的。你没有放弃。挂科这件事确实需要面对,但我们可以一起来看看有什么办法——比如补考政策、学业辅导、怎么跟父母谈。你不用一个人扛,好吗？',
            techniques: ['validation', 'encouragement', 'providing_information'],
            quality: 'excellent',
            feedback:
              '堪称完美的结束回应。你抓住了他话语中的希望信号（"以前喜欢学东西"）并放大,用"问有没有救就说明没放弃"给了他有力的肯定。然后提供了具体的、可操作的下一步方向,让他看到不是无路可走。"不用一个人扛"传递了陪伴和支持。',
            nextNodeId: 'cd-end',
            emotionImpact: 2,
          },
          {
            id: 'cd-6b',
            text: '你能意识到自己是在"逃避",这已经是很大的进步了。很多事情不是没有办法的。我们下次可以一起看看怎么应对挂科这件事,包括补考和学业上的帮助。你觉得可以吗？',
            techniques: ['encouragement', 'validation'],
            quality: 'good',
            feedback:
              '肯定了案主的自我觉察,提供了继续工作的方向。但"还有救吗"这个问题值得更直接有力的回应——他在此刻需要听到明确的"有希望"的信息,不仅仅是"很多事情不是没有办法的"。',
            nextNodeId: 'cd-end',
            emotionImpact: 1,
          },
          {
            id: 'cd-6c',
            text: '当然有救了。你才大一,补考过了就行了。你先别想退学的事了,好好准备补考。',
            techniques: [],
            quality: 'fair',
            feedback:
              '给了简单化的保证和行为建议。"好好准备补考"是他已经知道但做不到的事情——如果能做到,他就不会来这里了。没有处理他的情绪问题、不敢求助的心理、以及面对父母的恐惧。表面的安慰无法解决深层的困境。',
            nextNodeId: 'cd-end',
            emotionImpact: -1,
          },
          {
            id: 'cd-6d',
            text: '你的情况不算严重,挂几门课而已。我见过更糟糕的学生都毕业了。你加加油就行了。',
            techniques: [],
            quality: 'poor',
            feedback:
              '"不算严重""我见过更糟的"是典型的比较式最小化——拿别人的"更糟"来否定他的痛苦。每个人的承受阈值不同,对他来说这就是天崩地裂的事。"加加油就行了"是空洞的鼓励,无视了他面临的实际困难。这种回应让案主觉得自己的痛苦不值一提。',
            nextNodeId: 'cd-end',
            emotionImpact: -2,
          },
        ],
      },
    ],
  },
];
