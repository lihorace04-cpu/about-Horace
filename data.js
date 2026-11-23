/* Shared by the stage and every archive page. No real personal contact details. */
window.VEIL_DATA = {
  person: { name:['Horace','Horace'], role:['网页开发学习者','An aspiring web developer'], intro:['在代码、设计与协作中，寻找自己的表达。这里以英文名 Horace 介绍自己，分享课程、项目与成长经历。','Finding my voice through code, design and collaboration. I’m Horace, sharing my coursework, projects and growing experience.'], email:'horace.portfolio@example.com' },
  courses:[
    {id:'math',name:['数学思维','Mathematical Thinking'],grade:'A',desc:['把问题拆开，让不同想法相遇。','Breaking a problem down and bringing different ideas together.']},
    {id:'robotics',name:['人工智能与 STEM 机器人','AI and STEM Robotics'],grade:'A',desc:['探索智能系统与机器人基础。','Exploring the foundations of intelligent systems and robotics.']},
    {id:'algebra',name:['离散数学与线性代数','Discrete Mathematics and Linear Algebra'],grade:'A−',desc:['用结构、逻辑与矩阵描述问题。','Describing problems through structure, logic and matrices.']},
    {id:'statistics',name:['统计与数据分析','Statistics and Data Analysis'],grade:'A−',desc:['从数据中寻找证据与规律。','Looking for evidence and patterns in data.']},
    {id:'story',name:['数字叙事','Digital Storytelling'],grade:'A−',desc:['让画面、节奏与故事一起表达。','Bringing imagery, rhythm and storytelling together.']}
  ],
  identities:[
    {id:'student',symbol:'moon',title:['学习者','The Learner'],body:['就读圣方济各大学人工智能及信息与通信科技高级文凭，2025–2027，GPA 3.3 / 4.0。','Higher Diploma in Artificial Intelligence and Information and Communication Technology, Saint Francis University, 2025–2027. GPA 3.3 / 4.0.'],href:'education.html'},
    {id:'maker',symbol:'diamond',title:['创作者','The Builder'],body:['完成两个 Java 课程项目，以及《元素战争》浏览器游戏。把编程基础延伸到三维场景和实时交互。','Built two Java coursework projects and the Element War browser game, extending programming foundations into 3D scenes and real-time interaction.'],href:'projects.html'},
    {id:'teammate',symbol:'star',title:['协作者','The Teammate'],body:['在萨莉亚的多岗位兼职与大学 Info Day 协助中，练习沟通、配合与现场应变。','Practised communication, teamwork and on-site support through part-time restaurant work and university Info Day volunteering.'],href:'experience.html'}
  ],
  skills:[
    {id:'java',name:'Java',label:['有项目佐证','Project evidence'],body:['类与对象、ArrayList、控制流程、输入检查；两个可下载的控制台项目。','Classes, objects, ArrayList, control flow and input checks, supported by two downloadable console projects.']},
    {id:'python',name:'Python',label:['基础学习','Foundational study'],body:['CV 所列技能；尚未提供独立项目样例。','Listed in the supplied CV; an independent project sample has not yet been provided.']},
    {id:'html',name:'HTML',label:['网页方向','Web direction'],body:['CV 所列技能；本作品集展示信息组织与网页交互的学习方向。','Listed in the supplied CV; this portfolio explores information structure and web interaction.']}
  ],
  projects:[
    {id:'cashier',title:['超市收银系统','Supermarket Checkout'],file:'SuperMarket.java',image:'cashier-run.webp',desc:['从选购到收款，完成一段可验证的结账流程。','A verifiable checkout flow, from product selection to payment.'],features:[['五种预设商品、购物车与库存检查','Five preset products, cart and stock checks'],['数量与商品编号检查、空购物车提示','Quantity / product ID checks and empty-cart feedback'],['金额汇总、付款重试、找零与收据','Totals, payment retries, change and receipts']],proof:['实际运行：Water × 2 + Milk × 1，总额 13；支付 20，找零 7，钱箱余额 3013。','Actual run: Water × 2 + Milk × 1 totals 13; payment 20, change 7, final cashbox 3013.'],limit:['数据仅在内存中；入购物车时即扣库存；非数字输入仍需改善。','Data is in memory only; stock decreases when added to the cart; non-numeric input still needs handling.']},
    {id:'grades',title:['学生成绩计算器','Student Grade Calculator'],file:'scratch_3.java',image:'grades-run.webp',desc:['把评分规则写成清晰、可复查的 Java 类。','Turning grading rules into a clear, inspectable Java class.'],features:[['Student 类封装姓名、测验与实验成绩','Student class encapsulates name, test and lab marks'],['总分 = 测验 70% + 实验 30%','Total = 70% test + 30% lab'],['A ≥ 80、B ≥ 70、C ≥ 60、D ≥ 50，其余 F','A ≥ 80, B ≥ 70, C ≥ 60, D ≥ 50; otherwise F']],proof:['四位预设学生实际输出等级为 B、C、D、A。','The four preset students produce grades B, C, D and A.'],limit:['目前读取四位预设学生并输出；尚未实现交互录入或数据库。','Currently prints four preset students; interactive entry and a database are not implemented.']},
    {"id":"element-war","kind":"game","title":["元素战争 · 蒙德城","Element War · Mondstadt"],"file":"element-war-full.zip","image":"element-war-battle.webp","imageAlt":"元素战争蒙德城版实机首领战斗 / Element War Mondstadt boss encounter","desc":["把城市探索、元素反应与射击战斗放进同一个浏览器世界。","City exploration, elemental reactions and shooting combat in one browser world."],"features":[["四名可选角色，七种元素武器；支持第一人称与肩后视角切换。","Four playable characters and seven elemental weapons, with first-person and over-the-shoulder views."],["通过冻结、蒸发等反应组合攻击；每种武器独立管理弹匣与射击参数。","Combine attacks with reactions such as Freeze and Vaporize; each weapon has its own magazine and firing parameters."],["在蒙德城移动、跳跃与攀爬，迎战敌人波次、巡弋无人机和首领。","Move, jump and climb through Mondstadt while facing enemy waves, patrol drones and bosses."]],"proof":["展示画面来自已有游戏实机记录；2026-11-15 完整版包含游戏源码、模型、音效与本地启动器。","Images come from existing in-game captures. The 15 November 2026 release includes source code, models, audio and a local launcher."],"limit":["电脑键鼠单人游戏。需通过本地服务器启动，不能直接双击游戏 HTML；作品集可在手机查看，游戏未提供触屏操作。","Single-player desktop game with keyboard and mouse. Requires a local server; opening the game HTML directly will not work. The portfolio supports phones, but the game has no touch controls."]}
  ],
  experience:[
    {title:['萨莉亚 · 兼职','Saizeriya · Part-time'],date:['日期未提供','Dates not supplied'],body:['做过点餐、传菜、收银、厨房等岗位；在忙碌的服务现场配合同事，处理不同任务。','Worked across ordering, serving, cashier and kitchen duties, coordinating with colleagues in a busy service environment.'],image:'saizeriya.webp',caption:['用户提供的餐厅配图，不作为本人身份照片。','Supplied restaurant illustration; not presented as an identity photograph.']},
    {title:['大学 Info Day · Helper','University Info Day · Helper'],date:['2026 年 10 月 30–31 日','30–31 October 2026'],body:['协助接待、指引、课程介绍和场地准备，为到访者提供现场支持。','Supported reception, visitor guidance, course information and venue preparation.'],image:'infoday.webp',caption:['用户提供的 Info Day 活动照片。','Info Day activity photograph supplied by the user.']},
    {title:['ROV 工作坊','ROV Mini / Basic Workshop'],date:['2025 年 8 月 · 已完成','August 2025 · Completed'],body:['参与 IEEE 香港 CT/OES 联合分会工作坊，学习遥控潜水器原理及操作，并取得证书。','Completed the IEEE Hong Kong CT/OES Joint Chapter workshop on remotely operated vehicle principles and operation, with a certificate.']},
    {title:['AI 与空间数据工作坊','AI and Spatial-data Workshop'],date:['2026 年 12 月 · 已报名，待参加','December 2026 · Registered, upcoming'],body:['作为接下来的学习计划记录，不计作已完成经历。','Recorded as a forthcoming learning activity, rather than a completed experience.']}
  ],
  research:[
    {title:'4.0 官方版本介绍 · PlayStation Blog',url:'https://blog.zh-hant.playstation.com/?p=28233',note:['参考以面具入场、幻月游戏、都市娱乐空间与二维／三维转换的主题。','Reference for mask admission, the Phantasmoon Games, entertainment spaces and 2D / 3D transitions.']},
    {title:'花火角色 PV · 独角戏',url:'https://www.youtube.com/watch?v=RC6wQ-75uQU',note:['参考戏剧、表演与多重身份；本站故事为原创。','Reference for performance and multiple identities; this site tells an original story.']},
    {title:'火花角色 PV · 痴人说梦',url:'https://sr.mihoyo.com/news/162978?nav=news',note:['独立于花火的官方角色发布，参考数字娱乐与直播视觉。','A separate official character release from Sparkle; reference for digital entertainment and streaming aesthetics.']},
    {title:'《崩坏：星穹铁道》官方网站',url:'https://hsr.hoyoverse.com/zh-cn/',note:['参考 4.7「此刻，将群星付之一笑」与舞台、欢愉主题。不复刻官方角色或剧情。','Reference for version 4.7 and themes of theater and elation, without reproducing official characters or plot.']}
  ]
};
