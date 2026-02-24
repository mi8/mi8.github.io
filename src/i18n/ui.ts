export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.useCases': 'Use cases',
    'nav.approach': 'Our approach',
    'nav.blog': 'Blog',
    'nav.cta': 'Book a discovery call',

    // Hero
    'hero.label': 'Managed AI Agents',
    'hero.title.before': 'We run ',
    'hero.title.accent': 'AI agents',
    'hero.title.after': " so you don't have to",
    'hero.description': 'We build, deploy, and operate AI agents for your business\u2014on sovereign infrastructure, powered by open-source models. Privacy-preserving by design. Your agents get smarter every month.',
    'hero.cta': 'Book a discovery call',
    'hero.secondary': 'See use cases',

    // Services
    'services.label': 'What we do',
    'services.title': 'Agents as a service, not a project',
    'services.subtitle': "We don't hand you code and walk away. We build agents, run them in production, and make sure they deliver results.",
    'services.build.title': 'We build your agents',
    'services.build.description': 'We identify the workflows where AI agents create the most value, then design and build production-grade agents tailored to your domain, data, and systems.',
    'services.run.title': 'We run them for you',
    'services.run.description': "Your agents run on sovereign infrastructure. We handle hosting, monitoring, guardrails, and incident response. Regulatory-compliant by design. You get a dashboard and an SLA, not a codebase to maintain.",
    'services.improve.title': 'They get better over time',
    'services.improve.description': 'We continuously evaluate agent performance, tune prompts, and upgrade to the best open-source models. Your agents improve every month\u2014without vendor lock-in.',

    // Use cases
    'useCases.label': 'Use cases',
    'useCases.title': 'Agents that do real work',
    'useCases.subtitle': 'Here are some of the workflows our agents handle every day.',
    'useCases.invoice.title': 'Invoice & expense processing',
    'useCases.invoice.description': 'Agents extract data from invoices, match them against POs, flag discrepancies, and route approvals. Finance teams go from days of manual work to minutes of oversight.',
    'useCases.onboarding.title': 'Customer onboarding',
    'useCases.onboarding.description': 'Agents collect documents, verify information, set up accounts, and guide new customers through each step\u2014escalating to a human only when needed.',
    'useCases.support.title': 'Support triage & resolution',
    'useCases.support.description': 'Agents classify incoming tickets, pull relevant context from your knowledge base, draft responses, and resolve common issues autonomously.',
    'useCases.compliance.title': 'Document review & compliance',
    'useCases.compliance.description': 'Agents read contracts, flag non-standard clauses, check against policy, and generate compliance summaries\u2014freeing your legal team for judgment calls.',
    'useCases.pipeline.title': 'Data pipeline monitoring',
    'useCases.pipeline.description': 'Agents watch your data pipelines, detect anomalies, diagnose root causes, and either fix issues automatically or alert the right person with full context.',
    'useCases.knowledge.title': 'Internal knowledge assistant',
    'useCases.knowledge.description': "Agents that actually know your company\u2014connected to your docs, wikis, and Slack\u2014so employees get accurate answers instead of searching for hours.",

    // Sovereignty / Our approach
    'sovereignty.label': 'Our approach',
    'sovereignty.title': 'AI that respects your data, your infrastructure, and your independence',
    'sovereignty.subtitle': "You shouldn't have to choose between cutting-edge AI and control over your own data. We built our stack so you don't have to.",
    'sovereignty.infra.title': 'Sovereign infrastructure',
    'sovereignty.infra.description': 'Your agents run on infrastructure you control. Data processing, model inference, vector storage\u2014nothing leaves your jurisdiction. You decide where your data lives, not your AI vendor.',
    'sovereignty.oss.title': 'Open-source models',
    'sovereignty.oss.description': "We build on open-weight LLMs\u2014Llama, Mistral, Qwen, and others. State-of-the-art performance, fully self-hosted. No black boxes, no vendor lock-in, no prompts routed through third-party APIs.",
    'sovereignty.privacy.title': 'Privacy by design',
    'sovereignty.privacy.description': "Regulatory compliance isn't a checkbox we tick at the end. Agent architectures are designed from day one with data minimization, purpose limitation, and audit trails built in.",

    // Process
    'process.label': 'How it works',
    'process.title': 'From first call to agents in production',
    'process.subtitle': "Most clients have agents running within weeks, not months. Here's how we get there.",
    'process.discover.title': 'Discover',
    'process.discover.description': 'We map your workflows and identify where agents will have the highest ROI. No generic pitches\u2014we go deep on your domain.',
    'process.build.title': 'Build',
    'process.build.description': 'We design and develop your agents, connected to your tools and data. You see working demos within the first two weeks.',
    'process.deploy.title': 'Deploy',
    'process.deploy.description': 'Agents go live on sovereign infrastructure with monitoring, guardrails, and human-in-the-loop escalation from day one.',
    'process.improve.title': 'Improve',
    'process.improve.description': 'We track performance, gather feedback, and ship improvements continuously. Your agents compound in value over time.',

    // About
    'about.label': 'About mi8',
    'about.title': 'Built on a decade of shipping enterprise software',
    'about.p1': 'mi8 started as a mobile consultancy, shipping mission-critical apps for major enterprise brands. We learned what it takes to build software that companies actually rely on: reliability, observability, clear communication, and zero tolerance for "it works on my machine."',
    'about.p2': "Now we apply that discipline to managed AI agents. We build on open-source models, deploy on sovereign infrastructure, and design every agent with privacy at the core. No vendor lock-in, no black boxes, no data leaving your control.",
    'about.p3': "We don't sell engineering hours or hand over prototypes. We run agents in production, take responsibility for their performance, and charge based on the value they deliver.",

    // Blog section (homepage)
    'blog.label': 'Blog',
    'blog.title': 'Latest thinking',
    'blog.subtitle': 'Notes on AI agents, architecture, and the evolving enterprise.',
    'blog.readMore': 'Read more \u2192',
    'blog.allPosts': 'All posts',
    'blog.backToBlog': '\u2190 Back to blog',

    // CTA / Contact form
    'cta.title': 'Tell us about your workflow',
    'cta.description': "A 30-minute discovery call is all it takes. We'll map your workflow, identify where an agent fits, and tell you honestly whether it makes sense.",
    'cta.button': 'Send message',
    'cta.name': 'Name',
    'cta.email': 'Email',
    'cta.company': 'Company',
    'cta.message': 'Tell us about your workflow\u2026',
    'cta.sending': 'Sending\u2026',
    'cta.success': 'Message sent! We\u2019ll be in touch shortly.',
    'cta.error': 'Something went wrong. Please email us at contact@mi8.be.',

    // Footer
    'footer.company': 'mi8 SRL',
    'footer.address': 'Chauss\u00e9e de Namur 31/5, 1457 Walhain, Belgium',
    'footer.vat': 'VAT BE 0535.711.105',
    'footer.copyright': '\u00a9 2026 mi8 SRL. All rights reserved.',

    // Blog listing page
    'blogPage.title': 'Blog \u2014 mi8',
    'blogPage.heading': 'Latest thinking',
    'blogPage.subtitle': 'Notes on AI agents, architecture, and the evolving enterprise.',

    // Assessment
    'assessment.title': 'AI Readiness Assessment \u2014 mi8',
    'assessment.heading': 'AI Readiness Assessment',
    'assessment.subtitle': 'Chat with our AI agent to discover where automation could transform your business.',
    'assessment.nav': 'Try our agent',
    'assessment.inputPlaceholder': 'Type your message\u2026',
    'assessment.send': 'Send',
    'assessment.typing': 'Agent is thinking\u2026',
    'assessment.lead.heading': 'Want us to email you this assessment?',
    'assessment.lead.name': 'Name',
    'assessment.lead.email': 'Email',
    'assessment.lead.submit': 'Send my assessment',
    'assessment.lead.sending': 'Sending\u2026',
    'assessment.lead.success': 'Sent! Check your inbox shortly.',
    'assessment.lead.error': 'Something went wrong. Please email us at contact@mi8.be.',
    'assessment.lead.consent': 'I agree to share this assessment and my contact details with mi8.',
    'assessment.disclaimer': 'Sovereign infrastructure \u00b7 Open-source models \u00b7 No conversation data stored \u00b7',
    'assessment.disclaimerLink': 'Privacy policy',

    // Privacy
    'privacy.title': 'Privacy Policy \u2014 mi8',
    'privacy.heading': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: February 2026',

    // Meta
    'meta.description': 'mi8 builds, deploys, and operates managed AI agents for European enterprises. Open-source models, EU infrastructure, privacy by design.',
    'meta.title': 'mi8 \u2014 Managed AI Agents for the Enterprise',
  },
  fr: {
    // Nav
    'nav.services': 'Services',
    'nav.useCases': 'Cas d\u2019usage',
    'nav.approach': 'Notre approche',
    'nav.blog': 'Blog',
    'nav.cta': 'R\u00e9server un appel',

    // Hero
    'hero.label': 'Agents IA manag\u00e9s',
    'hero.title.before': 'Nous g\u00e9rons vos ',
    'hero.title.accent': 'agents IA',
    'hero.title.after': ' pour que vous n\u2019ayez pas \u00e0 le faire',
    'hero.description': 'Nous concevons, d\u00e9ployons et op\u00e9rons des agents IA pour votre entreprise\u2014sur une infrastructure souveraine, propuls\u00e9s par des mod\u00e8les open source. Respect de la vie priv\u00e9e d\u00e8s la conception. Vos agents progressent chaque mois.',
    'hero.cta': 'R\u00e9server un appel d\u00e9couverte',
    'hero.secondary': 'Voir les cas d\u2019usage',

    // Services
    'services.label': 'Ce que nous faisons',
    'services.title': 'Des agents en tant que service, pas un projet',
    'services.subtitle': 'Nous ne vous livrons pas du code pour disparaitre ensuite. Nous construisons des agents, les exploitons en production et veillons \u00e0 ce qu\u2019ils d\u00e9livrent des r\u00e9sultats.',
    'services.build.title': 'Nous construisons vos agents',
    'services.build.description': 'Nous identifions les workflows o\u00f9 les agents IA cr\u00e9ent le plus de valeur, puis concevons et d\u00e9veloppons des agents de qualit\u00e9 production, adapt\u00e9s \u00e0 votre domaine, vos donn\u00e9es et vos syst\u00e8mes.',
    'services.run.title': 'Nous les exploitons pour vous',
    'services.run.description': 'Vos agents tournent sur une infrastructure souveraine. Nous g\u00e9rons l\u2019h\u00e9bergement, le monitoring, les garde-fous et la r\u00e9ponse aux incidents. Conformit\u00e9 r\u00e9glementaire d\u00e8s la conception. Vous recevez un tableau de bord et un SLA, pas une base de code \u00e0 maintenir.',
    'services.improve.title': 'Ils s\u2019am\u00e9liorent avec le temps',
    'services.improve.description': 'Nous \u00e9valuons en continu les performances des agents, ajustons les prompts et migrons vers les meilleurs mod\u00e8les open source. Vos agents progressent chaque mois\u2014sans d\u00e9pendance fournisseur.',

    // Use cases
    'useCases.label': 'Cas d\u2019usage',
    'useCases.title': 'Des agents qui font le vrai travail',
    'useCases.subtitle': 'Voici quelques-uns des workflows que nos agents g\u00e8rent au quotidien.',
    'useCases.invoice.title': 'Traitement des factures et notes de frais',
    'useCases.invoice.description': 'Les agents extraient les donn\u00e9es des factures, les rapprochent des bons de commande, signalent les \u00e9carts et dirigent les validations. Les \u00e9quipes finance passent de jours de travail manuel \u00e0 quelques minutes de supervision.',
    'useCases.onboarding.title': 'Onboarding client',
    'useCases.onboarding.description': 'Les agents collectent les documents, v\u00e9rifient les informations, cr\u00e9ent les comptes et guident les nouveaux clients \u00e0 chaque \u00e9tape\u2014en ne faisant appel \u00e0 un humain que lorsque c\u2019est n\u00e9cessaire.',
    'useCases.support.title': 'Triage et r\u00e9solution du support',
    'useCases.support.description': 'Les agents classifient les tickets entrants, r\u00e9cup\u00e8rent le contexte pertinent dans votre base de connaissances, r\u00e9digent des r\u00e9ponses et r\u00e9solvent les probl\u00e8mes courants de mani\u00e8re autonome.',
    'useCases.compliance.title': 'Revue de documents et conformit\u00e9',
    'useCases.compliance.description': 'Les agents lisent les contrats, signalent les clauses non standard, v\u00e9rifient la conformit\u00e9 aux politiques internes et g\u00e9n\u00e8rent des synth\u00e8ses de conformit\u00e9\u2014lib\u00e9rant votre \u00e9quipe juridique pour les d\u00e9cisions de fond.',
    'useCases.pipeline.title': 'Monitoring des pipelines de donn\u00e9es',
    'useCases.pipeline.description': 'Les agents surveillent vos pipelines de donn\u00e9es, d\u00e9tectent les anomalies, diagnostiquent les causes profondes et corrigent automatiquement les probl\u00e8mes ou alertent la bonne personne avec tout le contexte.',
    'useCases.knowledge.title': 'Assistant de connaissances interne',
    'useCases.knowledge.description': 'Des agents qui connaissent vraiment votre entreprise\u2014connect\u00e9s \u00e0 vos documents, wikis et Slack\u2014pour que vos collaborateurs obtiennent des r\u00e9ponses pr\u00e9cises au lieu de chercher pendant des heures.',

    // Sovereignty / Our approach
    'sovereignty.label': 'Notre approche',
    'sovereignty.title': 'Une IA qui respecte vos donn\u00e9es, votre infrastructure et votre ind\u00e9pendance',
    'sovereignty.subtitle': 'Vous ne devriez pas avoir \u00e0 choisir entre une IA de pointe et le contr\u00f4le de vos propres donn\u00e9es. Nous avons con\u00e7u notre stack pour que ce ne soit pas n\u00e9cessaire.',
    'sovereignty.infra.title': 'Infrastructure souveraine',
    'sovereignty.infra.description': 'Vos agents tournent sur une infrastructure que vous contr\u00f4lez. Traitement des donn\u00e9es, inf\u00e9rence des mod\u00e8les, stockage vectoriel\u2014rien ne quitte votre juridiction. C\u2019est vous qui d\u00e9cidez o\u00f9 vivent vos donn\u00e9es, pas votre fournisseur d\u2019IA.',
    'sovereignty.oss.title': 'Mod\u00e8les open source',
    'sovereignty.oss.description': 'Nous construisons sur des LLM \u00e0 poids ouverts\u2014Llama, Mistral, Qwen et autres. Des performances \u00e0 l\u2019\u00e9tat de l\u2019art, enti\u00e8rement auto-h\u00e9berg\u00e9es. Pas de bo\u00eetes noires, pas de d\u00e9pendance fournisseur, pas de prompts rout\u00e9s via des API tierces.',
    'sovereignty.privacy.title': 'Respect de la vie priv\u00e9e d\u00e8s la conception',
    'sovereignty.privacy.description': 'La conformit\u00e9 r\u00e9glementaire n\u2019est pas une case que nous cochons \u00e0 la fin. Les architectures d\u2019agents sont con\u00e7ues d\u00e8s le premier jour avec minimisation des donn\u00e9es, limitation des finalit\u00e9s et pistes d\u2019audit int\u00e9gr\u00e9es.',

    // Process
    'process.label': 'Comment \u00e7a marche',
    'process.title': 'Du premier appel aux agents en production',
    'process.subtitle': 'La plupart de nos clients ont des agents op\u00e9rationnels en quelques semaines, pas en mois. Voici comment nous y parvenons.',
    'process.discover.title': 'D\u00e9couvrir',
    'process.discover.description': 'Nous cartographions vos workflows et identifions o\u00f9 les agents auront le meilleur retour sur investissement. Pas de discours g\u00e9n\u00e9riques\u2014nous allons en profondeur dans votre domaine.',
    'process.build.title': 'Construire',
    'process.build.description': 'Nous concevons et d\u00e9veloppons vos agents, connect\u00e9s \u00e0 vos outils et donn\u00e9es. Vous voyez des d\u00e9mos fonctionnelles dans les deux premi\u00e8res semaines.',
    'process.deploy.title': 'D\u00e9ployer',
    'process.deploy.description': 'Les agents passent en production sur une infrastructure souveraine avec monitoring, garde-fous et escalade humaine d\u00e8s le premier jour.',
    'process.improve.title': 'Am\u00e9liorer',
    'process.improve.description': 'Nous suivons les performances, recueillons les retours et livrons des am\u00e9liorations en continu. La valeur de vos agents se compose avec le temps.',

    // About
    'about.label': '\u00c0 propos de mi8',
    'about.title': 'B\u00e2ti sur une d\u00e9cennie de livraison de logiciels d\u2019entreprise',
    'about.p1': 'mi8 a commenc\u00e9 en tant que cabinet de conseil en d\u00e9veloppement mobile, livrant des applications critiques pour de grandes marques entreprises. Nous avons appris ce qu\u2019il faut pour cr\u00e9er des logiciels sur lesquels les entreprises comptent vraiment\u00a0: fiabilit\u00e9, observabilit\u00e9, communication claire et z\u00e9ro tol\u00e9rance pour le \u00ab\u00a0\u00e7a marche sur ma machine\u00a0\u00bb.',
    'about.p2': 'Aujourd\u2019hui, nous appliquons cette rigueur aux agents IA manag\u00e9s. Nous construisons sur des mod\u00e8les open source, d\u00e9ployons sur une infrastructure souveraine et concevons chaque agent avec le respect de la vie priv\u00e9e au c\u0153ur. Pas de d\u00e9pendance fournisseur, pas de bo\u00eetes noires, pas de donn\u00e9es qui \u00e9chappent \u00e0 votre contr\u00f4le.',
    'about.p3': 'Nous ne vendons pas des heures d\u2019ing\u00e9nierie ni ne livrons des prototypes. Nous exploitons des agents en production, prenons la responsabilit\u00e9 de leurs performances et facturons en fonction de la valeur qu\u2019ils d\u00e9livrent.',

    // Blog section (homepage)
    'blog.label': 'Blog',
    'blog.title': 'Derni\u00e8res r\u00e9flexions',
    'blog.subtitle': 'Notes sur les agents IA, l\u2019architecture et l\u2019entreprise en \u00e9volution.',
    'blog.readMore': 'Lire la suite \u2192',
    'blog.allPosts': 'Tous les articles',
    'blog.backToBlog': '\u2190 Retour au blog',

    // CTA / Contact form
    'cta.title': 'Parlez-nous de votre workflow',
    'cta.description': 'Un appel d\u00e9couverte de 30 minutes suffit. Nous cartographierons votre workflow, identifierons o\u00f9 un agent s\u2019int\u00e8gre et vous dirons honn\u00eatement si cela a du sens.',
    'cta.button': 'Envoyer le message',
    'cta.name': 'Nom',
    'cta.email': 'Email',
    'cta.company': 'Entreprise',
    'cta.message': 'Parlez-nous de votre workflow\u2026',
    'cta.sending': 'Envoi en cours\u2026',
    'cta.success': 'Message envoy\u00e9\u00a0! Nous vous recontacterons rapidement.',
    'cta.error': 'Une erreur est survenue. Contactez-nous \u00e0 contact@mi8.be.',

    // Footer
    'footer.company': 'mi8 SRL',
    'footer.address': 'Chauss\u00e9e de Namur 31/5, 1457 Walhain, Belgique',
    'footer.vat': 'TVA BE 0535.711.105',
    'footer.copyright': '\u00a9 2026 mi8 SRL. Tous droits r\u00e9serv\u00e9s.',

    // Blog listing page
    'blogPage.title': 'Blog \u2014 mi8',
    'blogPage.heading': 'Derni\u00e8res r\u00e9flexions',
    'blogPage.subtitle': 'Notes sur les agents IA, l\u2019architecture et l\u2019entreprise en \u00e9volution.',

    // Assessment
    'assessment.title': '\u00c9valuation IA \u2014 mi8',
    'assessment.heading': '\u00c9valuation de maturit\u00e9 IA',
    'assessment.subtitle': 'Discutez avec notre agent IA pour d\u00e9couvrir o\u00f9 l\u2019automatisation pourrait transformer votre entreprise.',
    'assessment.nav': 'Essayer notre agent',
    'assessment.inputPlaceholder': '\u00c9crivez votre message\u2026',
    'assessment.send': 'Envoyer',
    'assessment.typing': 'L\u2019agent r\u00e9fl\u00e9chit\u2026',
    'assessment.lead.heading': 'Voulez-vous recevoir cette \u00e9valuation par email\u00a0?',
    'assessment.lead.name': 'Nom',
    'assessment.lead.email': 'Email',
    'assessment.lead.submit': 'Envoyer mon \u00e9valuation',
    'assessment.lead.sending': 'Envoi en cours\u2026',
    'assessment.lead.success': 'Envoy\u00e9\u00a0! Consultez votre bo\u00eete de r\u00e9ception.',
    'assessment.lead.error': 'Une erreur est survenue. Contactez-nous \u00e0 contact@mi8.be.',
    'assessment.lead.consent': 'J\u2019accepte de partager cette \u00e9valuation et mes coordonn\u00e9es avec mi8.',
    'assessment.disclaimer': 'Infrastructure souveraine \u00b7 Mod\u00e8les open source \u00b7 Aucune conversation stock\u00e9e \u00b7',
    'assessment.disclaimerLink': 'Politique de confidentialit\u00e9',

    // Privacy
    'privacy.title': 'Politique de confidentialit\u00e9 \u2014 mi8',
    'privacy.heading': 'Politique de confidentialit\u00e9',
    'privacy.lastUpdated': 'Derni\u00e8re mise \u00e0 jour\u00a0: f\u00e9vrier 2026',

    // Meta
    'meta.description': 'mi8 con\u00e7oit, d\u00e9ploie et op\u00e8re des agents IA manag\u00e9s pour les entreprises europ\u00e9ennes. Mod\u00e8les open source, infrastructure europ\u00e9enne, respect de la vie priv\u00e9e d\u00e8s la conception.',
    'meta.title': 'mi8 \u2014 Agents IA manag\u00e9s pour l\u2019entreprise',
  },
} as const;

type UiKeys = keyof typeof ui.en;

export function t(lang: Lang, key: UiKeys): string {
  return ui[lang][key] ?? ui.en[key];
}

export function localePath(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  // Ensure path starts with /
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/fr${normalized}`;
}

export function dateLocale(lang: Lang): string {
  return lang === 'fr' ? 'fr-FR' : 'en-US';
}
