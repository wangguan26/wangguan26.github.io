const publications = [
  {
    venue: "ACL 2026 · Main Conference",
    title: "More Thinking, Less Talking: Internalizing Deliberative Safety into LLM Parameters",
    summary:
      "提出 HIAR，将显式安全思维链分层内化到低秩 FFN 参数中，在单次前向传播中完成隐式安全推理；相较强基线，攻击成功率降低约 43%。",
    tag: "Safety Reasoning · Parameter Internalization",
    href: "https://aclanthology.org/2026.acl-long.1572/",
    featured: true,
  },
  {
    venue: "ACL 2026 · Main Conference",
    title: "Resolving the Security-Auditability Dilemma with Auditable Latent Chain-of-Thought Alignment",
    summary:
      "提出 ALCA，将安全推理迁移至连续潜空间，并通过受控 Self-Decoding 恢复可审计文本，在鲁棒性、审计能力与推理效率之间取得平衡。",
    tag: "Latent CoT · Robust Alignment",
    href: "https://aclanthology.org/2026.acl-long.1570/",
    featured: true,
  },
  {
    venue: "EMNLP 2026 · Under Review",
    title: "Pretending to Think: Unmasking and Eliminating Post-Hoc Rationalization in LLM Safety Chain-of-Thought",
    summary:
      "揭示安全思维链中的事后合理化现象，并通过反事实数据与时序一致性约束增强安全推理的因果性。",
    tag: "Causal Safety Reasoning",
  },
  {
    venue: "EMNLP 2026 · Under Review",
    title: "From Shallow Alignment to Source Correction: Robust Safety Alignment for LLMs",
    summary:
      "从安全梯度的层间分布解释浅层对齐脆弱性，引导安全能力向模型脆弱层迁移，同时控制通用能力损失。",
    tag: "Mechanistic Alignment",
  },
  {
    venue: "EMNLP 2026 · Under Review",
    title: "From Chain to Mesh: Evolving Robust Safety Alignment via Neuron-Circuit Topology",
    summary:
      "以神经元回路拓扑解释安全对齐的局部失效与整体能力崩溃，并探索从脆弱单链到鲁棒网状结构的对齐路径。",
    tag: "Neuron Circuit · Interpretability",
  },
  {
    venue: "USENIX Security · Pre-submission",
    title: "AgentVax: Turning Multi-Agent Communities from Safety Liabilities into Collective Defense",
    summary:
      "面向 Input、RAG、Memory、Agent-Message 与 Tool-Chain Worm 风险，将智能体安全扩展到社群级协同防御。",
    tag: "Agent Security · Collective Defense",
  },
];

const projects = [
  {
    years: "2023 — 2026",
    index: "01",
    title: "大模型自动化安全后训练与鲁棒对齐平台",
    label: "POST-TRAINING",
    description:
      "贯通红队 badcase、安全数据与训练 recipe、SFT / DPO / RLHF / RLAIF / GRPO、checkpoint 回归及失败样本回流，持续分析 ASR、过拒率、通用能力保持与 alignment tax。",
    facts: ["多种后训练范式", "闭环回归评测", "Qwen / Llama / Mistral / Vicuna"],
  },
  {
    years: "2023 — 2026",
    index: "02",
    title: "大模型内容安全攻防靶场与红队评测平台",
    label: "RED TEAMING",
    description:
      "参与风险体系、攻击样本与红队模型、自动判定与人工复核流程建设；覆盖越狱、多轮诱导、编码绕过、协同攻击、CoT 诱导和自适应攻击。",
    facts: ["万级评测数据", "40+ 模型评测", "20+ 攻击方式"],
  },
  {
    years: "2024 — 2026",
    index: "03",
    title: "Agent 安全靶场",
    label: "AGENT SECURITY",
    description:
      "构建 Agent 与代码安全评测框架，覆盖 RAG 注入、工具越权、长期记忆污染、敏感信息泄露、沙箱逃逸、多 Agent 协作绕过及蠕虫传播。",
    facts: ["Tool-call 轨迹", "真实沙箱验证", "多智能体协同防御"],
  },
  {
    years: "2026",
    index: "04",
    title: "大模型漏洞挖掘能力评测",
    label: "CODE SECURITY",
    description:
      "从 0day、CVE 转化、harness 优化与真实环境验证构建代码安全 benchmark，覆盖漏洞定位、PoC 生成、利用链构建和训练轨迹沉淀。",
    facts: ["1,000+ 任务", "10,000+ 轨迹", "500,000 标注步骤"],
  },
  {
    years: "2023 — 2026",
    index: "05",
    title: "国家级大模型安全评测与生产级 Pipeline",
    label: "EVALUATION",
    description:
      "承担风险维度设计、红队样本构造、Judge 校准、人工复核、结果归因与报告交付，并建立支持 checkpoint 对比与策略缺陷定位的批量推理流程。",
    facts: ["LLM-as-Judge 校准", "能力保持分析", "多轮报告交付"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "安全对齐与后训练",
    en: "Safety Alignment & Post-training",
    text: "SFT、DPO、RLHF、RLAIF、GRPO，偏好数据设计，安全与有用性边界校准，checkpoint ablation。",
  },
  {
    number: "02",
    title: "红队与自动化评测",
    en: "Red Teaming & Evaluation",
    text: "越狱与自适应攻击、风险体系、LLM-as-Judge rubric、多模型交叉判定、误判归因与安全回归。",
  },
  {
    number: "03",
    title: "Agent 与代码安全",
    en: "Agent & Code Security",
    text: "RAG / Prompt 注入、工具越权、Memory 污染、sandbox 逃逸、漏洞挖掘、PoC 与利用链验证。",
  },
  {
    number: "04",
    title: "机制分析与可解释性",
    en: "Mechanistic Interpretability",
    text: "FFN 参数内化、latent CoT、表示分析、probe、activation intervention 与神经元回路机制。",
  },
];

const tools = [
  "Python",
  "PyTorch",
  "Transformers",
  "Hugging Face",
  "CUDA",
  "FSDP",
  "vLLM",
  "SGLang",
  "Ray",
  "OpenRLHF",
  "verl",
  "Docker",
  "Linux",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回页面顶部">
          <span className="brand-mark">WG</span>
          <span className="brand-copy">
            <strong>王冠</strong>
            <small>WANG GUAN</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#research">研究</a>
          <a href="#publications">论文</a>
          <a href="#projects">项目</a>
          <a href="#experience">经历</a>
        </nav>
        <a className="header-cta" href="mailto:wangguan@iie.ac.cn">
          联系我 <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-main">
          <p className="eyebrow"><span /> LLM SAFETY · ALIGNMENT · POST-TRAINING</p>
          <h1>
            让大模型的安全能力
            <span>可训练、可评测、可解释。</span>
          </h1>
          <p className="hero-intro">
            中国科学院大学 · 中国科学院信息工程研究所直博生，聚焦大语言模型安全对齐、
            后训练、红队评测、Agent 与代码安全，以及模型安全机制分析。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#publications">
              查看研究成果 <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="/Wang_Guan_LLM_Safety_Resume_CN.pdf"
              target="_blank"
              rel="noreferrer"
            >
              中文简历 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="availability">
            <span className="status-dot" />
            <span>OPEN TO OPPORTUNITIES</span>
            <strong>2026.07 起可实习 6 个月以上</strong>
          </div>
        </div>

        <aside className="hero-panel" aria-label="研究概览">
          <div className="signal-map" aria-hidden="true">
            <span className="node node-a" />
            <span className="node node-b" />
            <span className="node node-c" />
            <span className="node node-d" />
            <span className="trace trace-a" />
            <span className="trace trace-b" />
            <span className="trace trace-c" />
            <div className="signal-core">SAFETY<br />ALIGNMENT</div>
          </div>
          <div className="panel-caption">
            <span>RESEARCH PROFILE / 2026</span>
            <span>BEIJING · CHINA</span>
          </div>
        </aside>
      </section>

      <section className="metrics" aria-label="研究成果数字">
        <div><strong>02</strong><span>ACL 2026<br />MAIN PAPERS</span></div>
        <div><strong>08</strong><span>LEAD-AUTHOR<br />LLM SAFETY WORKS</span></div>
        <div><strong>40+</strong><span>MODELS<br />EVALUATED</span></div>
        <div><strong>500K</strong><span>ANNOTATED<br />REASONING STEPS</span></div>
      </section>

      <section className="section research" id="research">
        <div className="section-heading">
          <p className="section-kicker">01 / RESEARCH FOCUS</p>
          <h2>从攻击暴露问题，<br />到训练解决问题。</h2>
        </div>
        <div className="research-body">
          <p className="lead">
            我的工作横跨<span>数据、训练、评测与机制解释</span>：从构造对抗样本与风险体系出发，
            通过后训练塑造模型行为，再以自动化评测和因果分析验证能力是否真正进入模型。
          </p>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability" key={item.number}>
                <span className="capability-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="capability-en">{item.en}</p>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section publications" id="publications">
        <div className="section-heading inline-heading">
          <div>
            <p className="section-kicker">02 / SELECTED PUBLICATIONS</p>
            <h2>代表论文</h2>
          </div>
          <p>聚焦安全推理、鲁棒对齐、因果机制与多智能体防御。</p>
        </div>
        <div className="publication-list">
          {publications.map((paper, index) => {
            const content = (
              <>
                <div className="paper-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{paper.venue}</span>
                </div>
                <div className="paper-content">
                  <h3>{paper.title}</h3>
                  <p>{paper.summary}</p>
                  <span className="paper-tag">{paper.tag}</span>
                </div>
                <span className="paper-link" aria-hidden="true">
                  {paper.href ? "↗" : "—"}
                </span>
              </>
            );

            return paper.href ? (
              <a
                className={`paper ${paper.featured ? "paper-featured" : ""}`}
                href={paper.href}
                target="_blank"
                rel="noreferrer"
                key={paper.title}
              >
                {content}
              </a>
            ) : (
              <article className="paper" key={paper.title}>{content}</article>
            );
          })}
        </div>
        <p className="publication-note">
          * 在审与预投稿工作按当前阶段标注；正式版本以会议或论文主页为准。
        </p>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading inline-heading light-heading">
          <div>
            <p className="section-kicker">03 / SELECTED PROJECTS</p>
            <h2>项目经历</h2>
          </div>
          <p>研究问题与真实系统闭环：数据沉淀、训练优化、评测回归、可信交付。</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.index}>
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <div className="project-topline">
                  <span>{project.label}</span>
                  <span>{project.years}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-facts">
                  {project.facts.map((fact) => <span key={fact}>{fact}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading">
          <p className="section-kicker">04 / EXPERIENCE & TOOLKIT</p>
          <h2>教育、荣誉<br />与技术栈</h2>
        </div>
        <div className="experience-body">
          <div className="timeline">
            <article>
              <span className="timeline-year">2022.09 — 2027.07</span>
              <h3>中国科学院大学 · 中国科学院信息工程研究所</h3>
              <p>直博生 · 大语言模型安全对齐、后训练、越狱攻防与安全评测</p>
              <small>导师：虎嵩林 研究员、韩冀中 正高级工程师</small>
            </article>
            <article>
              <span className="timeline-year">2018.09 — 2022.06</span>
              <h3>北京工业大学</h3>
              <p>本科</p>
            </article>
          </div>

          <div className="honors">
            <h3>SELECTED HONORS</h3>
            <ul>
              <li><span>2024</span> 生成式人工智能安全大赛：越狱攻击赛道前三名、安全对齐赛道前三名</li>
              <li><span>6 YEARS</span> 连续获得优秀学生 / 一等奖学金与三好学生</li>
              <li><span>5 PATENTS</span> 大模型对齐训练与交易社群异常风险识别相关专利公示</li>
              <li><span>SERVICE</span> 参与 ACL、AAAI 等 CCF A 类会议审稿</li>
            </ul>
          </div>

          <div className="toolkit">
            <h3>ENGINEERING TOOLKIT</h3>
            <div className="tool-cloud">
              {tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-kicker">05 / LET&apos;S CONNECT</p>
          <h2>一起构建更可靠、<br />更可解释的大模型。</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:wangguan@iie.ac.cn">
            <span>EMAIL</span>
            <strong>wangguan@iie.ac.cn</strong>
            <b aria-hidden="true">↗</b>
          </a>
          <a href="https://github.com/wangguan26" target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <strong>github.com/wangguan26</strong>
            <b aria-hidden="true">↗</b>
          </a>
          <a
            href="/Wang_Guan_LLM_PostTraining_Resume_CN.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>RESUME</span>
            <strong>后训练 / 基模算法版简历</strong>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 WANG GUAN</span>
        <span>LLM SAFETY · ALIGNMENT · POST-TRAINING</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
