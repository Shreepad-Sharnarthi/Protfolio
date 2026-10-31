import { useEffect, useRef, useState } from 'react';

const email = 'sharnarthim@gmail.com';
const github = 'https://github.com/Shreepad-Sharnarthi';
const linkedin = 'https://www.linkedin.com/in/shreepadsharnarthi/';
const resumeUrl = '/resume.pdf';
const resumeFilename = 'Shreepad-Sharnarthi-Freelance-Resume.pdf';

const navigation = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

const services = [
  {
    number: '01',
    title: 'Website development',
    description: 'A thoughtful, responsive website that gives your business a clear and credible home online.',
    offerings: ['Business websites', 'Landing pages', 'Website redesigns', 'Responsive layouts'],
    icon: 'window',
  },
  {
    number: '02',
    title: 'Full-stack applications',
    description: 'Purpose-built web applications shaped around the way your team and customers work.',
    offerings: ['Admin dashboards', 'Management tools', 'Database integration', 'REST APIs'],
    icon: 'layers',
  },
  {
    number: '03',
    title: 'AI-powered features',
    description: 'Practical AI capabilities explored carefully and integrated around a real use case.',
    offerings: ['LLM API integration', 'Document assistants', 'RAG and semantic search', 'AI workflows'],
    icon: 'sparkles',
  },
  {
    number: '04',
    title: 'Python backend & automation',
    description: 'Reliable backend foundations and small automations that reduce repetitive work.',
    offerings: ['Python and Django', 'Backend APIs', 'Data processing', 'Workflow automation'],
    icon: 'terminal',
  },
];

const projects = [
  {
    id: 'hr-analytics-employee-management',
    name: 'HR Analytics & Employee Management System',
    kind: 'GitHub repository',
    status: 'GitHub',
    description: 'A Django employee management system with permission-controlled record workflows, a searchable analytics dashboard, CSV data exchange, and a REST API.',
    details: 'The application combines employee record management with workforce summaries, validated CSV import and export, and authenticated web and API access.',
    features: [
      'Create, edit, search, sort, and remove employee records with validated forms and permission checks',
      'View paginated employee records and dashboard totals for headcount, departments, and salary',
      'Explore department and employment-status charts',
      'Import and export employee data as CSV, with invalid import rows reported',
      'Use authenticated REST endpoints for employee CRUD, search, ordering, and aggregate statistics',
    ],
    technologies: ['Python', 'Django', 'Django REST Framework', 'Pandas', 'Bootstrap 5', 'Chart.js', 'SQLite'],
    githubUrl: 'https://github.com/Shreepad-Sharnarthi/HR-Analytics-Employee-Management-System',
    visual: 'employee',
  },
  {
    id: 'library-management-system',
    name: 'Library Management System',
    kind: 'GitHub repository',
    status: 'GitHub',
    description: 'A full-stack library operations app for managing books, members, and borrowings through a JWT-secured React interface and Django REST API.',
    details: 'The app brings together role-aware access, book and member records, borrowing workflows, dashboard summaries, and downloadable reports.',
    features: [
      'Authenticate users with JWT and apply role-aware access to library records',
      'Create, view, update, and delete book and member records',
      'Record and manage book borrowings and return dates',
      'Review dashboard summaries, including overdue borrowing counts',
      'Export book and borrowing reports as CSV files',
    ],
    technologies: ['React', 'Vite', 'Django REST Framework', 'PostgreSQL', 'Bootstrap 5', 'Axios', 'JWT'],
    githubUrl: 'https://github.com/Shreepad-Sharnarthi/Library-management-System',
    visual: 'employee',
  },
  {
    id: 'egret-precision-agriculture',
    name: 'Egret – AI-Powered Precision Agriculture Platform',
    kind: 'GitHub repository',
    status: 'GitHub',
    description: 'A precision-agriculture platform that combines Sentinel-2 imagery with farm, crop-health, and soil-report analysis to provide farm-specific insights.',
    details: 'The Flask backend connects farm records to satellite scene processing, crop-health analysis, and Gemini-assisted soil-report analysis, with saved results available through API routes.',
    features: [
      'Create and retrieve farm records',
      'Search and score Sentinel-2 scenes, then process or refresh imagery results',
      'Build farm insight responses from satellite, crop-health, and soil-analysis data',
      'Analyze crop-health images and retrieve saved analyses and history',
      'Extract text from soil-report PDFs with OCR fallback, request Gemini analysis, and retrieve saved reports and history',
    ],
    technologies: ['Python', 'Flask', 'NumPy', 'SQLAlchemy', 'Sentinel Hub', 'Gemini API'],
    githubUrl: 'https://github.com/Shreepad-Sharnarthi/AI-Powered-Precision-Agriculture-Platform-Egret-',
    visual: 'reporting',
  },
  {
    id: 'customer-shopping-behavior-analytics',
    name: 'Customer Shopping Behavior Analytics Dashboard',
    kind: 'GitHub repository',
    status: 'GitHub',
    description: 'An end-to-end retail analytics workflow that cleans customer transactions, examines purchase patterns with SQL and Python, and presents KPIs in Power BI.',
    details: 'The project prepares shopping data for analysis, explores customer segments and sales patterns with SQL, and packages the reporting in an interactive Power BI dashboard.',
    features: [
      'Inspect and clean transaction data, including filling missing review ratings with category medians',
      'Standardize columns, derive age groups, and load prepared data for SQL analysis',
      'Query revenue, discounts, product ratings, shipping, and subscription spending patterns',
      'Group customers into New, Returning, and Loyal segments using previous-purchase counts',
      'Present KPIs and shopping trends in an interactive Power BI dashboard',
    ],
    technologies: ['Python', 'Pandas', 'SQL', 'SQLAlchemy', 'Power BI'],
    githubUrl: 'https://github.com/Shreepad-Sharnarthi/Customer-Shopping-Behavior-Analytics-Dashboard',
    visual: 'reporting',
  },
  {
    id: 'ai-document-assistant',
    name: 'AI Document Assistant',
    kind: 'AI application concept',
    status: 'In Development',
    statusTone: 'planned',
    description: 'An AI-powered document assistant designed to help users upload documents, ask questions in natural language, and retrieve relevant information using Large Language Models.',
    details: 'This project is in development. The capabilities below are planned; no application features are represented as implemented.',
    plannedFeatures: ['Document upload and processing', 'Text extraction', 'Embeddings generation', 'Vector search', 'Retrieval-Augmented Generation (RAG)', 'LLM-powered question answering'],
    implementedFeatures: [],
    technologies: ['Python', 'React', 'LLM APIs', 'Embeddings', 'Vector Database', 'RAG'],
    visual: 'assistant-plan',
  },
  {
    id: 'agentic-ai-workflow',
    name: 'Agentic AI Workflow',
    kind: 'Experimental AI concept',
    status: 'In Development',
    statusTone: 'planned',
    description: 'An experimental AI application exploring how AI agents can use tools, execute multi-step tasks, and automate repetitive workflows.',
    details: 'This project is in development. The capabilities below are planned; no application features are represented as implemented.',
    plannedFeatures: ['LLM integration', 'Tool calling', 'Task planning', 'Multi-step execution', 'Workflow automation', 'Human approval mechanisms'],
    implementedFeatures: [],
    technologies: ['Python', 'LLM APIs', 'Agentic AI', 'Tool Calling', 'React'],
    visual: 'agentic-plan',
  },
];

const processSteps = [
  ['01', 'Discovery', 'Understand your goals, audience, constraints, and the problem the project needs to solve.'],
  ['02', 'Planning', 'Agree on scope, the essential features, a suitable approach, and delivery milestones.'],
  ['03', 'Design & development', 'Build the interface, backend, data model, and integrations in clear steps.'],
  ['04', 'Testing', 'Review core flows, usability, responsiveness, and relevant security considerations.'],
  ['05', 'Delivery & support', 'Prepare the agreed handover, deployment, and follow-up support.'],
];

const technologyGroups = [
  { name: 'Backend', items: ['Python', 'Django', 'REST APIs', 'SQL'] },
  { name: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server'] },
  { name: 'Tools', items: ['Git', 'GitLab', 'GitHub', 'Docker'] },
];

const reasons = [
  ['Direct communication', 'Talk directly with the developer building your solution.'],
  ['Business-minded choices', 'Keep the project focused on useful outcomes and the people using it.'],
  ['Maintainable foundations', 'Build with readable code and an approach that can grow with the project.'],
  ['Clear progress', 'Stay informed with practical updates and visible next steps.'],
  ['Remote collaboration', 'Work together across locations with an agreed communication rhythm.'],
  ['Practical problem solving', 'Choose tools and features to fit the need instead of adding complexity for its own sake.'],
];

const faqs = [
  ['What types of projects do you work on?', 'I work on business websites, custom web applications, Python and Django backends, APIs, automation, and practical AI integrations.'],
  ['Do you work with international clients?', 'Yes. I am based in Pune, India and work remotely with clients worldwide.'],
  ['Can you build a website from scratch?', 'Yes. We can begin with the goals and content, then shape the design and build around your business.'],
  ['Can you work on an existing application?', 'Yes. Share the current setup and the changes you need, and we can discuss a suitable scope.'],
  ['Do you provide backend and API development?', 'Yes. Backend services, database integration, and REST API development are part of my work.'],
  ['Can you integrate AI features into an application?', 'I can discuss practical integrations such as LLM APIs, document assistants, and retrieval-based features. We will agree on scope and feasibility first.'],
  ['How does project pricing work?', 'Pricing depends on the project scope, features, complexity, and timeline. After understanding the requirements, I can discuss an appropriate estimate.'],
  ['How can I start a project with you?', 'Send a short note about your goals, requirements, and timeline using the contact form or email. I will review it and get back to you.'],
];

const iconArt = {
  arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
  right: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
  down: <><path d="M12 5v14M19 12l-7 7-7-7" /></>,
  window: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 6.5h.01M11 6.5h.01" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
  sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5S17.5 1.5 15 3a13.4 13.4 0 0 0-7 0C5.5 1.5 4.3 2 4.3 2A4.7 4.7 0 0 0 4.2 5 5.1 5.1 0 0 0 2.8 8.5c0 5.1 3.1 6.6 6.1 6.6A3.4 3.4 0 0 0 8 17.7V22" /></>,
  linkedin: <><path d="M4 9v11M4 4.5v.1M10 20v-6.3a4 4 0 0 1 8 0V20M10 10v10" /><rect x="2" y="2" width="20" height="20" rx="4" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
};

function Icon({ name, size = 20, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconArt[name] || iconArt.arrow}
    </svg>
  );
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function ProjectPreview({ type }) {
  const isPlan = type === 'assistant-plan' || type === 'agentic-plan';

  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      <div className="preview-window-bar"><span /><span /><span /><b>{isPlan ? 'DEVELOPMENT PLAN' : 'INTERFACE PREVIEW'}</b></div>
      {type === 'employee' && (
        <div className="employee-preview">
          <div className="preview-sidebar"><i /><i /><i /><i /></div>
          <div className="preview-content">
            <div className="preview-heading"><span /><i /></div>
            <div className="preview-stat-grid"><span /><span /><span /></div>
            <div className="preview-table"><i /><i /><i /><i /></div>
          </div>
        </div>
      )}
      {type === 'reporting' && (
        <div className="report-preview">
          <div className="report-copy"><span /><span /><span /></div>
          <div className="report-chart"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="report-footer"><span /><span /></div>
        </div>
      )}
      {type === 'assistant' && (
        <div className="assistant-preview">
          <div className="assistant-mark"><Icon name="sparkles" size={18} /></div>
          <span className="assistant-line line-long" /><span className="assistant-line line-short" />
          <div className="assistant-answer"><i /><i /><i /></div>
          <div className="assistant-input"><span>Ask a question about your files…</span><b>↑</b></div>
        </div>
      )}
      {type === 'agentic' && (
        <div className="agent-preview">
          <div className="agent-node node-main"><Icon name="sparkles" size={16} /><span>Plan task</span></div>
          <div className="agent-connector" />
          <div className="agent-branches"><div className="agent-node"><Icon name="terminal" size={15} /><span>Use tool</span></div><div className="agent-node"><Icon name="check" size={15} /><span>Review</span></div></div>
          <div className="agent-note">Human approval where needed</div>
        </div>
      )}
      {type === 'assistant-plan' && (
        <div className="planned-concept-preview document-plan">
          <div className="concept-heading"><span className="concept-icon"><Icon name="sparkles" size={17} /></span><div><strong>Document question flow</strong><small>Planned concept</small></div></div>
          <div className="concept-flow"><div><small>01 · SOURCE</small><b>Documents</b></div><span>→</span><div><small>02 · RETRIEVAL</small><b>Search + RAG</b></div><span>→</span><div><small>03 · RESPONSE</small><b>LLM answer</b></div></div>
          <p>Planned workflow · not a product screenshot</p>
        </div>
      )}
      {type === 'agentic-plan' && (
        <div className="planned-concept-preview agent-plan">
          <div className="concept-heading"><span className="concept-icon"><Icon name="layers" size={17} /></span><div><strong>Multi-step task flow</strong><small>Planned concept</small></div></div>
          <div className="agent-plan-flow"><div className="plan-step plan-start"><Icon name="sparkles" size={14} /><span>Plan task</span></div><i /><div className="plan-branches"><div className="plan-step"><Icon name="terminal" size={14} /><span>Call tool</span></div><div className="plan-step"><Icon name="check" size={14} /><span>Human review</span></div></div></div>
          <p>Planned workflow · not a product screenshot</p>
        </div>
      )}
      <span className="preview-caption">{isPlan ? 'Project concept · no screenshot' : 'Illustrative project visual'}</span>
    </div>
  );
}

function ProfilePhoto() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="profile-photo-frame">
      {imageFailed ? (
        <div className="profile-photo-fallback" role="img" aria-label="Shreepad Sharnarthi's profile photo is temporarily unavailable">
          <Icon name="user" size={44} />
          <span>Portrait temporarily unavailable</span>
        </div>
      ) : (
        <img
          className="profile-photo"
          src="/images/profile.jpg"
          alt="Professional portrait of Shreepad Sharnarthi in a formal suit"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);
  useReveal();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    navigation.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [selectedProject]);

  const openProject = (project) => {
    previousFocusRef.current = document.activeElement;
    setSelectedProject(project);
  };
  const makeEmailDraft = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = [
      ['Name', formData.get('name')],
      ['Email', formData.get('replyEmail')],
      ['Company / business', formData.get('company') || 'Not provided'],
      ['Project type', formData.get('projectType')],
      ['Estimated budget', formData.get('budget') || 'Not provided'],
      ['Project description', formData.get('description')],
    ];
    const subject = `Project enquiry from ${formData.get('name')}`;
    const body = fields.map(([label, value]) => `${label}: ${value}`).join('\n\n');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="SHREEPAD home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">S<span>.</span></span><span className="brand-name">SHREEPAD</span>
          </a>
          <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span />
          </button>
          <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
            {navigation.map(([label, id]) => <a key={id} className={activeSection === id ? 'nav-link active' : 'nav-link'} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="View Shreepad Sharnarthi’s resume PDF in a new tab" onClick={() => setMenuOpen(false)}>View resume <Icon name="arrow" size={14} /></a>
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Icon name="arrow" size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-anchor" id="home">
          <div className="hero-glow glow-left" /><div className="hero-glow glow-right" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="availability"><span className="availability-dot" /> Available for freelance projects <span className="availability-divider">/</span> Remote worldwide</div>
              <p className="eyebrow hero-location"><Icon name="pin" size={14} /> Pune, Maharashtra, India</p>
              <h1>Building digital experiences that <span>move businesses forward.</span></h1>
              <p className="hero-description">I build modern websites, custom web applications, and AI-powered solutions that help businesses simplify operations, improve customer experiences, and grow online.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Start a project <Icon name="arrow" size={17} /></a>
                <a className="button button-secondary" href="#projects">Explore my work <Icon name="down" size={17} /></a>
                <a className="button button-resume" href={resumeUrl} download={resumeFilename} aria-label="Download Shreepad Sharnarthi’s freelance developer resume PDF"><Icon name="down" size={16} /> Download resume</a>
              </div>
              <div className="hero-note"><span className="note-rule" /> Thoughtful engineering. Clear communication. Useful outcomes.</div>
            </div>

            <div className="hero-art" data-reveal>
              <div className="hero-art-grid" />
              <div className="code-window">
                <div className="code-window-top"><div className="window-controls"><i /><i /><i /></div><span>building-with-purpose.py</span><Icon name="arrow" size={15} /></div>
                <div className="code-content">
                  <div className="code-line"><span className="code-number">01</span><span><em>class</em> <b>UsefulSoftware</b>:</span></div>
                  <div className="code-line"><span className="code-number">02</span><span className="code-indent"><em>def</em> <b>solve</b>(problem):</span></div>
                  <div className="code-line"><span className="code-number">03</span><span className="code-indent code-indent-more"><i>understand</i>(problem)</span></div>
                  <div className="code-line"><span className="code-number">04</span><span className="code-indent code-indent-more"><i>build</i>(<strong>thoughtfully</strong>)</span></div>
                  <div className="code-line"><span className="code-number">05</span><span className="code-indent code-indent-more"><i>deliver</i>(<strong>with care</strong>)</span></div>
                  <div className="code-line code-empty"><span className="code-number">06</span><span /></div>
                  <div className="code-line"><span className="code-number">07</span><span><small># ready for what’s next</small></span></div>
                </div>
                <div className="code-window-foot"><span><i /> All systems thoughtful</span><span>REMOTE · WORLDWIDE</span></div>
              </div>
              <div className="hero-profile-chip"><div className="mini-avatar"><Icon name="user" size={20} /></div><div><strong>Shreepad Sharnarthi</strong><span>Full-Stack & AI Application Developer</span></div><span className="chip-sparkle"><Icon name="sparkles" size={15} /></span></div>
              <div className="hero-floating-tag"><span className="floating-tag-icon"><Icon name="layers" size={16} /></span><span>From idea<br /><b>to application</b></span></div>
              <div className="hero-art-caption"><span className="caption-line" /> Independent developer <span className="caption-separator">·</span> Pune, India</div>
            </div>
          </div>
          <div className="container hero-bottom" aria-label="Core services"><span>What I build</span><div><i /> Web experiences</div><div><i /> Custom applications</div><div><i /> Python backends</div><div><i /> Practical AI</div></div>
        </section>

        <section className="technology-strip" aria-label="Core technologies and areas of exploration">
          <div className="container strip-inner"><span className="strip-label">TOOLS & TECHNOLOGIES</span><div className="strip-tools"><span>Python</span><span>Django</span><span>React</span><span>JavaScript</span><span>PostgreSQL</span><span>MySQL</span><span>REST APIs</span><span>Git</span><span>Docker</span></div></div>
          <div className="container strip-ai"><span className="ai-label"><Icon name="sparkles" size={14} /> Exploring AI</span><span>LLMs</span><span>Embeddings</span><span>RAG</span><span>Agentic AI</span><small>Learning and building in progress</small></div>
        </section>

        <section className="section services-section section-anchor" id="services">
          <div className="container">
            <div className="section-heading" data-reveal><div><p className="eyebrow"><span className="eyebrow-line" /> SERVICES</p><h2>How I can help<br /><span>your business.</span></h2></div><p className="section-intro">From your first website to a custom application, get focused development shaped around the problem you need to solve.</p></div>
            <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number} data-reveal><div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-icon"><Icon name={service.icon} size={21} /></span></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.offerings.map((item) => <li key={item}><span className="list-check"><Icon name="check" size={12} /></span>{item}</li>)}</ul><a className="text-link" href="#contact">Discuss a project <Icon name="arrow" size={15} /></a></article>)}</div>
          </div>
        </section>

        <section className="section projects-section section-anchor" id="projects">
          <div className="container">
            <div className="section-heading project-heading" data-reveal><div><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p><h2>Thoughtful work.<br /><span>Real progress.</span></h2></div><div className="project-heading-right"><p>Projects and development work across web applications, backend systems, and emerging AI ideas.</p><div className="honesty-note"><span className="note-dot" /> Project details are shared only where they can be described accurately.</div></div></div>
            <div className="projects-grid">{projects.map((project, index) => <article className={`project-card project-card-${index + 1}`} key={project.id} data-reveal>
              <button className="project-visual-button" type="button" onClick={() => openProject(project)} aria-label={`View details for ${project.name}`}><ProjectPreview type={project.visual} /></button>
              <div className="project-info">
                <div className="project-meta"><span>{project.kind}</span><span className={`project-status ${project.statusTone === 'planned' ? 'status-planned' : project.status === 'In development' ? 'status-progress' : ''}`}><i />{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.plannedFeatures && <p className="planned-scope-note">Planned scope · no features listed as implemented</p>}
                {project.githubUrl && <span className="project-tech-label">TECH STACK</span>}
                {project.plannedFeatures && <span className="project-tech-label">PLANNED TECHNOLOGIES</span>}
                {project.technologies.length > 0 && <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
                <div className="project-card-actions">
                  <button className="project-detail-link" type="button" onClick={() => openProject(project)}>View details <Icon name="arrow" size={15} /></button>
                  {project.githubUrl && <a className="project-github-link" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>GitHub <Icon name="github" size={14} /></a>}
                </div>
              </div>
            </article>)}</div>
            <p className="projects-footnote">The first four project repository links are available on GitHub. The AI projects are still in development; no live demos are listed.</p>
          </div>
        </section>

        <section className="process-section section-anchor" id="process">
          <div className="container process-container"><div className="section-heading process-heading" data-reveal><div><p className="eyebrow"><span className="eyebrow-line" /> HOW I WORK</p><h2>From idea<br /><span>to launch.</span></h2></div><p className="section-intro">A clear, collaborative process keeps the work grounded in your goals and moving with purpose.</p></div>
            <div className="process-grid">{processSteps.map(([number, title, description], index) => <article className="process-step" key={number} data-reveal><div className="process-marker"><span>{number}</span>{index < processSteps.length - 1 && <i />}</div><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="section about-section section-anchor" id="about">
          <div className="container about-grid"><div className="about-photo-wrap" data-reveal><ProfilePhoto /><div className="photo-side-note"><span /> Professional portrait · Pune, India</div></div><div className="about-copy" data-reveal><p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p><h2>A developer who enjoys <span>solving real problems.</span></h2><p>I’m a Computer Science engineering graduate and software developer based in Pune, India. My work includes Python, Django, databases, backend development, and web applications.</p><p>I have worked with software development workflows, backend systems, debugging, and application improvements. I’m also building my knowledge of LLMs, embeddings, retrieval-augmented generation, and agentic AI workflows.</p><p>My goal is straightforward: build useful, reliable software with care, and collaborate clearly from the first conversation to delivery.</p><div className="about-values"><span><Icon name="globe" size={16} /> Remote collaboration worldwide</span><span><Icon name="sparkles" size={16} /> Always learning, always practical</span></div><a className="text-link about-cta" href="#contact">Let’s talk about your project <Icon name="arrow" size={15} /></a></div></div>
        </section>

        <section className="stack-section">
          <div className="container"><div className="stack-head" data-reveal><p className="eyebrow"><span className="eyebrow-line" /> THE TOOLKIT</p><h2>Tools for the <span>right reasons.</span></h2><p>Technologies are chosen to fit the project. AI and agentic workflows are areas I’m actively exploring.</p></div><div className="stack-groups">{technologyGroups.map((group) => <div className="stack-group" key={group.name} data-reveal><h3>{group.name}</h3><div>{group.items.map((item) => <span className="stack-tag" key={item}>{item}</span>)}</div></div>)}<div className="stack-group stack-group-ai" data-reveal><h3><Icon name="sparkles" size={16} /> AI & emerging areas <small>Learning and development in progress</small></h3><div>{['LLMs', 'Embeddings', 'RAG', 'Agentic AI', 'Tool calling'].map((item) => <span className="stack-tag" key={item}>{item}</span>)}</div></div></div></div>
        </section>

        <section className="why-section">
          <div className="container why-grid"><div className="why-intro" data-reveal><p className="eyebrow"><span className="eyebrow-line" /> WORKING TOGETHER</p><h2>Good work starts<br />with <span>a good partnership.</span></h2><p>Expect a practical, collaborative approach shaped around your business and the people who use what we build.</p><a href="#contact" className="button button-secondary">Tell me what you’re building <Icon name="arrow" size={16} /></a></div><div className="reasons-grid">{reasons.map(([title, description], index) => <article className="reason" key={title} data-reveal><span className="reason-number">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout"><div className="faq-intro" data-reveal><p className="eyebrow"><span className="eyebrow-line" /> FAQ</p><h2>A few things<br /><span>you may be wondering.</span></h2><p>Have another question? Send me a note and we can talk it through.</p><a className="text-link" href={`mailto:${email}`}>Ask me directly <Icon name="arrow" size={15} /></a></div><div className="faq-list" data-reveal>{faqs.map(([question, answer], index) => <details className="faq-item" key={question} open={index === 0}><summary><span>{question}</span><span className="faq-toggle"><Icon name="plus" size={16} /></span></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="contact-section section-anchor" id="contact">
          <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
          <div className="container contact-container"><div className="contact-heading" data-reveal><p className="eyebrow"><span className="eyebrow-line" /> GET IN TOUCH</p><h2>Have an idea?<br /><span>Let’s build something useful.</span></h2><p>Tell me about your business, the challenge you’re facing, or the application you want to build. Let’s discuss how I can help.</p></div>
            <div className="contact-grid"><div className="contact-details" data-reveal><div className="contact-card-label">START A CONVERSATION</div><a className="contact-email" href={`mailto:${email}`}><span className="contact-icon"><Icon name="mail" size={19} /></span><span><small>Email me</small><strong>{email}</strong></span><Icon name="arrow" size={16} /></a><div className="contact-location"><span className="contact-icon"><Icon name="pin" size={19} /></span><span><small>Based in</small><strong>Pune, Maharashtra, India</strong></span></div><div className="contact-location"><span className="contact-icon"><Icon name="globe" size={19} /></span><span><small>Working remotely</small><strong>Available worldwide</strong></span></div><div className="contact-socials"><a href={github} target="_blank" rel="noreferrer"><Icon name="github" size={18} /> GitHub <Icon name="arrow" size={13} /></a><a href={linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} /> LinkedIn <Icon name="arrow" size={13} /></a></div><div className="contact-resume-actions"><a className="button button-primary" href={resumeUrl} download={resumeFilename} aria-label="Download Shreepad Sharnarthi’s freelance developer resume PDF"><Icon name="down" size={16} /> Download resume</a><a className="contact-resume-preview" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="View Shreepad Sharnarthi’s resume PDF in a new tab">View resume <Icon name="arrow" size={14} /></a></div><div className="contact-response-note"><span className="availability-dot" /> I’ll review your note and reply by email.</div></div>
              <form className="contact-form" onSubmit={makeEmailDraft} data-reveal><div className="form-header"><div><h3>Tell me about your project</h3><p>A few details will help us start with the right conversation.</p></div><span className="form-required">* Required</span></div><div className="form-grid"><label className="form-field"><span>Name <b>*</b></span><input name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength="100" /></label><label className="form-field"><span>Email <b>*</b></span><input name="replyEmail" type="email" autoComplete="email" placeholder="you@company.com" required maxLength="254" /></label><label className="form-field"><span>Company / business <small>Optional</small></span><input name="company" type="text" autoComplete="organization" placeholder="Your company" maxLength="120" /></label><label className="form-field"><span>Project type <b>*</b></span><select name="projectType" required defaultValue=""><option value="" disabled>Select a project type</option><option>Website development</option><option>Web application</option><option>Python / Django backend</option><option>AI integration</option><option>Automation</option><option>Other</option></select></label><label className="form-field"><span>Estimated budget <small>Optional</small></span><input name="budget" type="text" placeholder="Optional range or not sure yet" maxLength="80" /></label><label className="form-field form-field-wide"><span>Project description <b>*</b></span><textarea name="description" rows="4" placeholder="What would you like to build or improve?" required maxLength="3000" /></label></div><button className="button button-primary form-submit" type="submit">Create email draft <Icon name="arrow" size={16} /></button><p className="form-disclosure">This opens a prefilled email in your email app. The website does not send or store your message.</p></form></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand-block"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SHREEPAD</span></a><p>Building useful digital experiences,<br />one solution at a time.</p><span className="footer-location"><Icon name="pin" size={14} /> Pune, India · Remote worldwide</span></div><div className="footer-nav-group"><h2>Explore</h2><div>{navigation.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div></div><div className="footer-nav-group"><h2>Services</h2><div><a href="#services">Websites</a><a href="#services">Web applications</a><a href="#services">AI integrations</a><a href="#services">Python backends</a></div></div><div className="footer-nav-group footer-connect"><h2>Connect</h2><div><a href={`mailto:${email}`}>Email <Icon name="arrow" size={13} /></a><a href={github} target="_blank" rel="noreferrer">GitHub <Icon name="arrow" size={13} /></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow" size={13} /></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SHREEPAD. All rights reserved.</span><a href="#home">Back to top <Icon name="down" size={14} /></a><span>Made with care in Pune, India.</span></div></div></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" ref={dialogRef}><button className="modal-close" type="button" aria-label="Close project details" ref={closeButtonRef} onClick={() => setSelectedProject(null)}>×</button><ProjectPreview type={selectedProject.visual} /><div className="modal-body"><div className="project-meta"><span>{selectedProject.kind}</span><span className={`project-status ${selectedProject.statusTone === 'planned' ? 'status-planned' : selectedProject.status === 'In development' ? 'status-progress' : ''}`}><i />{selectedProject.status}</span></div><h2 id="project-modal-title">{selectedProject.name}</h2><p>{selectedProject.details}</p>{selectedProject.plannedFeatures ? <><h3>Planned features</h3><ul className="modal-feature-list">{selectedProject.plannedFeatures.map((feature) => <li key={feature}><Icon name="check" size={14} />{feature}</li>)}</ul><h3>Implemented features</h3>{selectedProject.implementedFeatures.length ? <ul className="modal-feature-list">{selectedProject.implementedFeatures.map((feature) => <li key={feature}><Icon name="check" size={14} />{feature}</li>)}</ul> : <p className="planned-empty-state">None listed yet. The project is in development.</p>}</> : selectedProject.features?.length > 0 && <><h3>{selectedProject.githubUrl ? 'Implemented features' : 'Project details'}</h3><ul className="modal-feature-list">{selectedProject.features.map((feature) => <li key={feature}><Icon name="check" size={14} />{feature}</li>)}</ul></>}{selectedProject.technologies.length > 0 && <><h3>{selectedProject.plannedFeatures ? 'Planned technologies' : 'Technologies'}</h3><div className="tag-list">{selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></>}{selectedProject.githubUrl ? <a className="modal-github-link" href={selectedProject.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${selectedProject.name} GitHub repository in a new tab`}><Icon name="github" size={16} /> View GitHub repository <Icon name="arrow" size={14} /></a> : <p className="modal-link-note">This project is in development; no GitHub or live demo link is available yet.</p>}</div></section></div>}
    </>
  );
}

export default App;
