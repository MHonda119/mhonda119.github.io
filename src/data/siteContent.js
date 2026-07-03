export const languageOptions = [
  { code: "ja", label: "JP" },
  { code: "en", label: "EN" },
];

export const commonContent = {
  brand: "Masayuki Honda",
  brandMark: "MH",
  keywords: [
    "Generative AI",
    "LLM",
    "AI Agent",
    "RAG / Search",
    "Multimodal AI",
    "Sovereign AI",
  ],
  businessEmail: "masayuki.honda02@g.softbank.co.jp",
  personalEmail: "msykhnd1109@gmail.com",
  missionArticleUrl: "https://www.sbbit.jp/article/cont1/185958",
};

export const siteContent = {
  ja: {
    nav: [
      { href: "#mission", label: "注力領域" },
      { href: "#work", label: "実績" },
      { href: "#activities", label: "活動" },
      { href: "#education", label: "教育" },
      { href: "#academic-research", label: "研究" },
      { href: "#personal", label: "趣味" },
      { href: "#contact", label: "連絡先" },
    ],
    hero: {
      eyebrow: "Sovereign AI / AI Agent",
      title: "本多 誠之",
      body: "大学院ではパターン認識を中心に農学・生命科学・化学工学といった複数のドメインでの応用研究に取り組みました。その後、ソフトバンク株式会社に入社し、ML / LLMを活用したAIサービスやPoC開発を行いました。今年度よりソブリンAIおよび国産次世代AIクラウド基盤の開発に注力していきます。",
      primaryAction: "ソフトバンク注力領域を見る",
      secondaryAction: "連絡先を見る",
    },
    profile: {
      kicker: "Profile",
      title: "プロフィール",
      items: [
        ["氏名", "本多 誠之（Masayuki Honda）"],
        [
          "所属",
          "ソフトバンク株式会社 次世代クラウド基盤開発本部AI&データサイエンス統括部 AI基盤開発部 AIエージェント基盤開発課",
        ],
        ["兼務", "京都産業大学 講師・客員研究員"],
        ["学位", "博士（工学）"],
      ],
    },
    mission: {
      kicker: "New Mission",
      title: "ソブリンAI：国産次世代AIクラウド基盤の構築",
      body: "これからのソフトバンクの注力領域として、ソブリンAI / ソブリンクラウドがあります。これは社会の中核をなすAIとその活動領域であるクラウド基盤を国内で構築することを目的としています。2026年6月30日、ソフトバンク・NEC・ホンダ・ソニーによる国産AI企業「Noetra」が、国家プロジェクト予算(NEDO)をもとに、基盤モデルおよび国産次世代AIクラウド基盤の構築に着手しました。事業会社であるソフトバンクは、NoetraやSBIntuisionsが構築する基盤モデルを活用し、個別企業や組織、あるいは社会課題解決ためにAIの社会実装を推進していきます。",
      articleLabel: "ビジネス+ITの解説記事を読む",
      highlights: [
        { value: "3,873億円", label: "経済産業省より拠出" },
        { value: "Physical AI", label: "を見据えた基盤モデル開発" },
        { value: "Infra + App", label: "社会実装へつなぐ開発領域" },
      ],
    },
    career: {
      kicker: "Career",
      title: "キャリア・略歴",
      items: [
        ["2026年〜", "次世代クラウド基盤開発本部 AIエージェント開発課"],
        ["2025年〜", "AIテクノロジー本部 AIソリューション開発課"],
        ["2023年〜", "AI戦略室 AIシステム開発部 NLPシステム開発課"],
        ["2023年", "ソフトバンク株式会社 入社 / 東京農工大学にて博士号取得"],
      ],
    },
    work: {
      kicker: "Previous Work",
      title: "これまでの参画プロジェクト",
      projectPreviewLabel: "詳細を表示",
      projectNoImageLabel: "画像なし",
      responsibilities: [
        "社内向けAIサービスの開発・保守",
        "ML / LLMを利用するPoC開発",
        "ソブリンクラウドプラットフォーム開発の初期検討・開発",
      ],
      projects: [
        {
          title: "SNS分析基盤",
          imageId: "prj-sns-analysis",
          imageComment:
            "AIAgentによる自動的なクエリ探索機能による分析業務や、LLMによるラベリング、Botやノイズ除外といった下流タスク処理を実現しています。",
          body: "SNS（X）を分析する社内向けプラットフォームを提供。顧客の感情分類、地理情報の抽出、ノイズ検出、AI Agentによる分析・レポート出力などの機能を実現。カスタマー対応部門が利用。",
        },
        {
          title: "RAG基盤システム",
          imageId: "prj-intra-rag",
          imageComment:
            "正確にはRAGデータのチャンキングシステムやOpenAI連携は社内別プロダクトが担当しており、バックグラウンドで走るDB構成管理や検索アルゴリズムの開発を担当しています。",
          body: "社内ChatGPT Enterpriseへの外部知識連携、また商用RAGシステムのバックグラウンド処理を開発",
        },
        {
          title: "株主総会での回答補助",
          imageId: "prj-kabuso",
          imageComment:
            "Webや当日会場にてリアルタイムで投函される株主からの質問の一次回答を生成したり、社長答弁に利用できる社内知識検索システムを開発しています。画像は総会舞台袖で控えるエンジニアです。",
          body: "社内横断知識を活用し、株主向け回答生成と会場リアルタイムでの情報レコメンドを支援。",
        },
        {
          title: "キャリア店舗向け画像認識",
          body: "店舗運営における要注意顧客への注意喚起を支援する顔画像認識システムの保守運用を担当。",
        },
      ],
    },
    activities: {
      kicker: "Activities",
      title: "活動",
      demoShowcase: {
        title: "学会・企業ブースでのデモ展示",
        body: "主に人工知能学会(JSAI)、画像の認識・理解シンポジウム(MIRU)、自然言語処理学会(NLP)に出展しています。",
        images: [
          { imageId: "prj-miru-2025", label: "画像理解のシンポジウム" },
          { imageId: "prj-jsai-2025", label: "人工知能学会" },
          { imageId: "prj-jsai-2026", label: "人工知能学会" },
          { imageId: "prj-nlp-2026", label: "言語処理学会" },
        ],
      },
    },
    education: {
      kicker: "Education",
      title: "教育",
      items: [
        {
          title: "京都産業大学での講義",
          imageId: "ksu-lecture-room",
          body: "京都産業大学でシステム開発演習の講義を担当しています。CodingAgentが一般的になりつつある世界で、情報系の学生は何を学び、何を作るべきかを考えています。今のところ正解はないですね。",
        },
        {
          title: "東京農工大学での研究メンター",
          imageId: "tuat-ai-salon",
          body: "東京農工大学にて博士学生の研究メンターや講演をしています。\n農工大の未来価値創造特区(JST/SPRING・BOOST事業)のOBとして協力させて頂いています。皆さんクセが強いです。",
        },
      ],
    },
    research: {
      kicker: "Academic Research",
      title: "大学院での研究や参加プロジェクト",
      panelTitle: "研究テーマ",
      items: [
        [
          "情報工学",
          "SSL手法を用いたロバストな手書き文字認識 / 歴史文書認識 / 自動採点",
        ],
        ["農業情報", "光合成モデリング / ドローンによる植生指数抽出"],
        ["生命工学", "ナノポアを用いた疾患早期診断支援"],
        ["化学工学", "化学プラントでの製品成分推定"],
      ],
    },
    personal: {
      kicker: "Interests",
      title: "趣味",
      closeLabel: "閉じる",
      items: [
        {
          title: "ボードゲーム",
          imageId: "interest-board-game",
          comment: "マーズはいいぞ",
        },
        {
          title: "登山",
          imageId: "interest-climbing",
          comment: "山はいいぞ",
        },
        {
          title: "釣り",
          imageId: "interest-sakana",
          comment: "魚はいいぞ",
        },
        {
          title: "お酒",
          imageId: "interest-sake",
          comment: "お酒はいいぞ",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "連絡先",
      body: "公開サイトではメール連絡先のみを掲載しています。\nお気軽にご連絡ください。",
      businessLabel: "会社メール",
      personalLabel: "個人メール",
    },
    footer: {
      backToTop: "ページ上部へ",
    },
  },
  en: {
    nav: [
      { href: "#mission", label: "Mission" },
      { href: "#work", label: "Work" },
      { href: "#activities", label: "Activities" },
      { href: "#education", label: "Education" },
      { href: "#academic-research", label: "Research" },
      { href: "#personal", label: "Interests" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Sovereign AI / AI Agent",
      title: "Masayuki Honda",
      body: "In graduate school, I worked on applied research centered on pattern recognition across multiple domains, including agriculture, life sciences, and chemical engineering. I then joined SoftBank Corp., where I developed AI services and proof-of-concepts using ML / LLMs. Starting this fiscal year, I will focus on sovereign AI and the development of a next-generation domestic AI cloud platform.",
      primaryAction: "See SoftBank Focus Area",
      secondaryAction: "View Contact",
    },
    profile: {
      kicker: "Profile",
      title: "Profile",
      items: [
        ["Name", "Masayuki Honda"],
        [
          "Organization",
          "SoftBank Corp., AI Agent Platform Development Section, AI Platform Development Department, AI & Data Science Division, Next-Generation Cloud Infrastructure Development Unit",
        ],
        [
          "Concurrent Role",
          "Lecturer and Visiting Researcher, Kyoto Sangyo University",
        ],
        ["Degree", "Ph.D. in Engineering"],
      ],
    },
    mission: {
      kicker: "New Mission",
      title:
        "Sovereign AI: Building a Next-Generation Domestic AI Cloud Platform",
      body: "Sovereign AI and sovereign cloud are among SoftBank's key focus areas going forward. The goal is to build AI, which will form part of society's core infrastructure, and the cloud platform where it operates, within Japan. On June 30, 2026, Noetra, a domestic AI company formed by SoftBank, NEC, Honda, and Sony, began building foundation models and a next-generation domestic AI cloud platform based on a national project budget from NEDO. As an operating company, SoftBank will use foundation models developed by Noetra and SB Intuitions to promote the social implementation of AI for individual companies, organizations, and the resolution of social issues.",
      articleLabel: "Read the SB Bit article",
      highlights: [
        { value: "387.3B JPY", label: "in funding from METI" },
        { value: "Physical AI", label: "oriented foundation models" },
        {
          value: "Infra + App",
          label: "development for real-world deployment",
        },
      ],
    },
    career: {
      kicker: "Career",
      title: "Career",
      items: [
        [
          "2026-",
          "AI Agent Development Section, Next-Generation Cloud Infrastructure Development Division",
        ],
        ["2025-", "AI Solution Development Section, AI Technology Division"],
        [
          "2023-",
          "NLP System Development Section, AI System Development Department, AI Strategy Office",
        ],
        [
          "2023",
          "Joined SoftBank Corp. / Received doctoral degree from Tokyo University of Agriculture and Technology",
        ],
      ],
    },
    work: {
      kicker: "Previous Work",
      title: "Projects I Have Contributed To",
      projectPreviewLabel: "View details",
      projectNoImageLabel: "No image",
      responsibilities: [
        "Development and maintenance of internal AI services",
        "Proof-of-concept development using ML / LLMs",
        "Early-stage research and development for sovereign cloud platforms",
      ],
      projects: [
        {
          title: "SNS Analytics Platform",
          imageId: "prj-sns-analysis",
          imageComment:
            "AI Agent-based automatic query exploration supports analysis workflows, while LLM labeling, bot filtering, and noise removal handle downstream task processing.",
          body: "Provided an internal platform for analyzing SNS data, mainly X. It supports customer sentiment classification, geographic information extraction, noise detection, and AI Agent-based analysis and report generation. It is used by customer support departments.",
        },
        {
          title: "RAG Platform System",
          imageId: "prj-intra-rag",
          imageComment:
            "More precisely, another internal product handles RAG data chunking and OpenAI integration; my work focuses on the background database architecture and search algorithms.",
          body: "Developed external knowledge integration for the internal ChatGPT Enterprise environment, as well as background processing for a commercial RAG system.",
        },
        {
          title: "Shareholders' Meeting Q&A Support System",
          imageId: "prj-kabuso",
          imageComment:
            "This system generates draft first responses to shareholder questions submitted online or in real time at the venue, and provides internal knowledge search for executive answers. The photo shows engineers waiting in the wing of the general meeting stage.",
          body: "Supported answer generation using cross-organizational knowledge and provided real-time information recommendations at the meeting venue.",
        },
        {
          title: "Image Recognition System for Carrier Stores",
          body: "Maintained and operated a face image recognition system that supports alerts for high-risk customers in store operations.",
        },
      ],
    },
    activities: {
      kicker: "Activities",
      title: "Activities",
      demoShowcase: {
        title: "Demonstrations at Academic Conferences and Corporate Booths",
        body: "I mainly exhibit at JSAI, MIRU, and NLP conferences.",
        images: [
          {
            imageId: "prj-miru-2025",
            label: "Meeting on Image Recognition and Understanding",
          },
          {
            imageId: "prj-jsai-2025",
            label: "The Japanese Society for Artificial Intelligence",
          },
          {
            imageId: "prj-jsai-2026",
            label: "The Japanese Society for Artificial Intelligence",
          },
          {
            imageId: "prj-nlp-2026",
            label: "The Association for Natural Language Processing",
          },
        ],
      },
    },
    education: {
      kicker: "Education",
      title: "Education",
      items: [
        {
          title: "Lectures at Kyoto Sangyo University",
          imageId: "ksu-lecture-room",
          body: "I teach system development exercises at Kyoto Sangyo University. In a world where coding agents are becoming commonplace, I think about what computer science students should learn and what they should build. There is no clear answer yet.",
        },
        {
          title:
            "Research Mentoring at Tokyo University of Agriculture and Technology",
          imageId: "tuat-ai-salon",
          body: "I mentor doctoral students and give research talks at Tokyo University of Agriculture and Technology. I also support the Future Value Creation District (JST / SPRING and BOOST programs) as an alumnus of the university and its predecessor organization. Everyone there has a strong personality.",
        },
      ],
    },
    research: {
      kicker: "Academic Research",
      title: "Graduate Research and Participating Projects",
      panelTitle: "Research Topics",
      items: [
        [
          "Computer Science",
          "Robust handwritten character recognition using SSL methods / Historical document recognition / Automated grading",
        ],
        [
          "Agricultural Informatics",
          "Photosynthesis modeling / Vegetation index extraction using drones",
        ],
        ["Biotechnology", "Early disease diagnosis support using nanopores"],
        [
          "Chemical Engineering",
          "Product component estimation in chemical plants",
        ],
      ],
    },
    personal: {
      kicker: "Interests",
      title: "Hobbies",
      closeLabel: "Close",
      items: [
        {
          title: "Board games",
          imageId: "interest-board-game",
          comment: "Mars is good.",
        },
        {
          title: "Mountain climbing",
          imageId: "interest-climbing",
          comment: "Mountains are good.",
        },
        {
          title: "Fishing",
          imageId: "interest-sakana",
          comment: "Fish are good.",
        },
        {
          title: "Sake and other alcoholic drinks",
          imageId: "interest-sake",
          comment: "Sake is good.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Contact",
      body: "Only email contacts are listed on this public website.\nPlease feel free to reach out.",
      businessLabel: "Business email",
      personalLabel: "Personal email",
    },
    footer: {
      backToTop: "Back to top",
    },
  },
};
