# Self Introduction / 自己紹介資料

The Japanese version is provided later in this document as Part 2.

日本語版は、本資料の後半「Part 2」に掲載しています。

---

## GitHub Pages Website / GitHub Pages公開用HP

This repository includes a React + Vite self-introduction website for GitHub Pages.

このリポジトリには、GitHub Pagesで公開するためのReact + Vite構成の自己紹介HPを含めています。

- Entry point / エントリーポイント: `index.html`
- App source / アプリ本体: `src/`
- Components / コンポーネント: `src/components/`
- Content data / 掲載内容データ: `src/data/siteContent.js`
- Styles / スタイル: `src/styles.css`
- Source images / 元画像: `assets/source/`
- Optimized public images / 配信用の最適化画像: `public/assets/hero/`
- GitHub Pages workflow / GitHub Pagesデプロイ: `.github/workflows/deploy.yml`

### Local development / ローカル開発

```bash
npm install
npm run dev
```

Image optimization / 画像最適化:

```bash
npm run optimize-images
```

Production build / 本番ビルド:

```bash
npm run build
```

`npm run dev` and `npm run build` automatically generate optimized AVIF / WebP / JPEG assets from `assets/source/`.

`npm run dev` と `npm run build` は、`assets/source/` からAVIF / WebP / JPEGの最適化画像を自動生成します。

### GitHub Pages GUI setup / GitHub PagesのGUI設定

After pushing these files to GitHub, open the repository page and configure:

GitHubへpushしたあと、リポジトリ画面で以下を設定してください。

1. `Settings` → `Pages`
2. `Build and deployment` → `Source`: `GitHub Actions`
3. Push to `main`, or run `Deploy GitHub Pages` from the `Actions` tab

日本語:

1. `Settings` → `Pages`
2. `Build and deployment` → `Source`: `GitHub Actions`
3. `main`へpushするか、`Actions`タブから`Deploy GitHub Pages`を実行してください

The public website intentionally lists email contacts only. Phone numbers in this README should be reviewed before external publication.

公開HPではメール連絡先のみを掲載しています。本README内の電話番号は、外部公開前に掲載範囲を確認してください。

---

## Part 1: English Version

### Masayuki Honda

I have worked on internal AI services and proof-of-concept development using ML / LLMs at SoftBank Corp. Going forward, I will focus on sovereign AI and the development of a next-generation domestic AI cloud platform.

This document first introduces my profile and career, then highlights my new mission and future focus, followed by a summary of my previous work and activities.

---

### 1. Profile

| Item | Details |
| --- | --- |
| Name | Masayuki Honda |
| Organization | SoftBank Corp., AI Agent Development Section, Next-Generation Cloud Infrastructure Development Division |
| Concurrent Role | Lecturer and Visiting Researcher, Kyoto Sangyo University |
| Degree | Doctoral degree, Tokyo University of Agriculture and Technology |

---

### 2. Career

| Year | Role / Organization |
| --- | --- |
| 2023 | Joined SoftBank Corp. / Received doctoral degree from Tokyo University of Agriculture and Technology |
| 2023- | NLP System Development Section, AI System Development Department, AI Strategy Office |
| 2025- | AI Solution Development Section, AI Technology Division |
| 2026- | AI Agent Development Section, Next-Generation Cloud Infrastructure Development Division |

---

### 3. New Mission / Future Focus

#### Sovereign AI: Building a Next-Generation Domestic AI Cloud Platform

Sovereign AI and sovereign cloud are among SoftBank's key focus areas going forward.

On June 30, 2026, Noetra, a domestic AI company formed by SoftBank, NEC, Honda, and Sony, began building foundation models and a next-generation domestic AI cloud platform based on a national project budget.

SoftBank Corp. is looking for engineers and researchers on the infrastructure and application sides to bring these outcomes into society.

- 387.3 billion yen in funding from the Ministry of Economy, Trade and Industry
- Development of multimodal foundation models with physical AI in mind
- Details: [SB Bit article](https://www.sbbit.jp/article/cont1/185958)

---

### 4. Previous Work

#### Main Responsibilities

- Development and maintenance of internal AI services
- Proof-of-concept development using ML / LLMs
- Early-stage research and development for sovereign cloud platforms

#### Keywords

- Generative AI
- LLM
- AI Agent
- RAG / Search
- Multimodal AI
- Sovereign AI / Sovereign Cloud

---

### 5. Major Past Projects

#### SNS Analytics Platform

- Provided an internal platform for analyzing SNS data, mainly X
- Implemented sentiment classification, bot detection, and noise detection
- Enabled automated analysis, interactive analysis, and report generation using AI Agents

#### ChatGPT Internal Knowledge Integration System

- Developed a system to connect external knowledge from internal domains to ChatGPT Enterprise
- Implemented reference separation by department and permission level as a feature of the CtoC product "Tasuk"
- Built vector search and hybrid search for large-scale data

#### Shareholders' Meeting Q&A Support System

- Supported answer generation for shareholders using cross-organizational internal knowledge
- Provided real-time information recommendations at the meeting venue

#### Image Recognition System for Carrier Stores

- Maintained and operated a face image recognition system that supports in-store alerts and operations

---

### 6. External Activities and Education

#### Demonstrations at Academic Conferences and Corporate Booths

I have developed and presented PoCs / demos for domestic academic conferences and corporate exhibition booths.

Main events:

- The Japanese Society for Artificial Intelligence 2026
- Meeting on Image Recognition and Understanding
- The Association for Natural Language Processing 2026

#### University Lecture

I have taught a system development exercise course at Kyoto Sangyo University.

Theme:

- What system development means in the Coding Agent era
- Practical system development exercises with students

#### Research Mentor

At the Tokyo University of Agriculture and Technology's Special Zone for Future Value Creation Research and Education, I occasionally mentor doctoral students and give talks.

- [Tokyo University of Agriculture and Technology Special Zone for Future Value Creation Research and Education: AI Salon Activity Report](https://www.tuat-flourish.jp/topics/%E6%B4%BB%E5%8B%95%E5%A0%B1%E5%91%8Aai-%E3%82%B5%E3%83%AD%E3%83%B3/3715/)

---

### Appendix 1. Research Topics as a Student

| Field | Topic / Achievement |
| --- | --- |
| Computer Science | Robust handwritten character recognition using SSL methods (presented at ICDAR 2023) / Automated grading of historical documents |
| Agricultural Informatics | Photosynthesis modeling / Vegetation index extraction using drones |
| Biotechnology | Early disease diagnosis support using nanopores (presented at GTIE 2022) |
| Chemical Engineering | Product component estimation in chemical plants (presented at APCChE 2019) |

---

### Appendix 2. Hobbies and Interests

I am always happy to talk about:

- Board games
- Mountain climbing
- Fishing
- Sake and other alcoholic drinks

---

### Contact

| Type | Contact |
| --- | --- |
| E-mail | masayuki.honda02@g.softbank.co.jp |
| E-mail (personal) | msykhnd1109@gmail.com |
| Phone (081) | 070-3324-1139 |
| Phone (personal) | 090-9967-4599 |

<!-- Please confirm the appropriate publication scope before sharing personal contact information externally. -->

---

## Part 2: 日本語版

### 本多 誠之 / Masayuki Honda

ソフトバンク株式会社で、社内向けAIサービスやML / LLMを活用したPoC開発に取り組んできました。今後はソブリンAIおよび国産次世代AIクラウド基盤の開発に注力していきます。

本資料では、プロフィール・キャリアに続いて、これから注力するNew Missionを先に紹介し、その後にこれまでの業務・活動をまとめます。

---

### 1. プロフィール

| 項目 | 内容 |
| --- | --- |
| 氏名 | 本多 誠之（Masayuki Honda） |
| 所属 | ソフトバンク株式会社 次世代クラウド基盤開発本部 AIエージェント開発課 |
| 兼務 | 京都産業大学 講師・客員研究員 |
| 学位 | 博士号（東京農工大学） |

---

### 2. キャリア・略歴

| 年 | 所属・役割 |
| --- | --- |
| 2023年 | ソフトバンク株式会社 入社 / 東京農工大学にて博士号取得 |
| 2023年〜 | AI戦略室 AIシステム開発部 NLPシステム開発課 |
| 2025年〜 | AIテクノロジー本部 AIソリューション開発課 |
| 2026年〜 | 次世代クラウド基盤開発本部 AIエージェント開発課 |

---

### 3. New Mission / これから注力する領域

#### ソブリンAI：国産次世代AIクラウド基盤の構築

これからのソフトバンクの注力領域として、ソブリンAI / ソブリンクラウドがあります。

2026年6月30日、ソフトバンク・NEC・ホンダ・ソニーによる国産AI企業「Noetra」が、国家プロジェクト予算をもとに、基盤モデルおよび国産次世代AIクラウド基盤の構築に着手しました。

ソフトバンク株式会社では、この成果を社会実装するインフラ / アプリケーションサイドのエンジニア、研究者を求めています。

- 経済産業省より3,873億円の拠出
- フィジカルAIを見据えたマルチモーダル基盤モデル開発を推進
- 詳細: [SBビットの解説記事](https://www.sbbit.jp/article/cont1/185958)

---

### 4. これまでの業務内容

#### 主な担当領域

- 社内向けAIサービスの開発・保守
- ML / LLM（大規模言語モデル）を利用するPoC開発
- ソブリンクラウドプラットフォーム開発の初期検討・開発

#### キーワード

- 生成AI
- LLM
- AI Agent
- RAG / 検索
- マルチモーダルAI
- ソブリンAI / ソブリンクラウド

---

### 5. これまでの主要プロジェクト実績

#### SNS分析基盤

- SNS（X）を分析する社内向けプラットフォームを提供
- 投稿のSentiment分類、Bot・ノイズ検出を実装
- AI Agentによる自動分析、対話分析、レポート出力を実現

#### ChatGPT 社内知識連携システム

- 社内ChatGPT Enterpriseへの外部知識（社内ドメイン）連携システムを開発
- 部門や権限レベルでの参照切り分けを実現（CtoC製品「Tasuk」の機能として実現）
- 大規模データにおけるベクトル検索・ハイブリッド検索を構築

#### 株主総会 質問回答補助システム

- 社内横断知識を活用した株主向け回答生成を支援
- 会場リアルタイムでの情報レコメンドを実現

#### キャリア店舗向け画像認識システム

- 店舗運営における注意喚起を支援する顔画像認識システムの保守運用

---

### 6. これまでの対外活動・教育活動

#### 学会・企業ブースでのデモ展示

国内学会や企業展示ブース向けのPoC / デモ開発および展示活動に従事してきました。

主な参加学会:

- 人工知能学会2026
- 画像の認識・理解シンポジウム
- 自然言語処理学会2026

#### 大学講義

京都産業大学でシステム開発演習の講義を担当してきました。

テーマ:

- Coding Agent時代のシステム開発とは
- 学生との演習を通じた実践的なシステム開発

#### 研究メンター

東京農工大学 未来価値創造研究教育特区にて、不定期に博士学生の研究メンターや講演を行っています。

- [東京農工大学 未来価値創造研究教育特区 活動報告 AIサロン](https://www.tuat-flourish.jp/topics/%E6%B4%BB%E5%8B%95%E5%A0%B1%E5%91%8Aai-%E3%82%B5%E3%83%AD%E3%83%B3/3715/)

---

### Appendix 1. 学生時代の研究テーマ

| 分野 | 研究テーマ・実績 |
| --- | --- |
| 情報工学 | SSL手法を用いたロバストな手書き文字認識（ICDAR2023発表） / 歴史文書の自動採点 |
| 農業情報 | 光合成モデリング / ドローンによる植生指数抽出 |
| 生命工学 | ナノポアを用いた疾患早期診断支援（GTIE 2022発表） |
| 化学工学 | 化学プラントでの製品成分推定（APCChE2019発表） |

---

### Appendix 2. 趣味・特技

以下の話題を振ってくれると喜びます。

- ボードゲーム
- 登山
- 釣り
- お酒

---

### Contact

| 種別 | 連絡先 |
| --- | --- |
| E-mail | masayuki.honda02@g.softbank.co.jp |
| E-mail (personal) | msykhnd1109@gmail.com |
| Phone (081) | 070-3324-1139 |
| Phone (personal) | 090-9967-4599 |

<!-- 外部公開する場合は、個人連絡先の掲載範囲を確認してください。 -->
