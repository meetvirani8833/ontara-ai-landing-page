export const blogPosts = [
  {
    number: '01',
    tag: 'GRAPH DATABASES & ORCHESTRATION',
    date: 'March 2026',
    title: 'Why Neo4j outperforms vector databases for LLM SQL Schema mapping.',
    excerpt: "Building a Text-to-SQL system that translates natural language into database operations is easy. Building one that doesn't hallucinate foreign-key relationships on a 400-table enterprise schema is incredibly difficult. Here is why you must calculate shortest path joins deterministically.",
    readTime: '12 min read',
    glow: 'from-[#e06c75] to-[#c678dd]',
  },
  {
    number: '02',
    tag: 'AI ARCHITECTURE',
    date: 'February 2026',
    title: 'Agents THINK, Tools DO: Safe architecture for decision intelligence.',
    excerpt: "You should never give an LLM direct WRITE access to your database. In this article, we map out the exact LangGraph state machine we use to strictly isolate reasoning nodes from deterministic execution layers.",
    readTime: '8 min read',
    glow: 'from-[#e5c07b] to-[#d19a66]',
  },
  {
    number: '03',
    tag: 'LLM APPLICATIONS',
    date: 'January 2026',
    title: 'The difference between a chatbot and an AI agent (and why it matters).',
    excerpt: "Businesses keep buying chatbots when they actually need agents. The distinction isn't semantic, it's functional, architectural, and strategic. Chatbots retrieve; Agents execute. Let's break it down.",
    readTime: '6 min read',
    glow: 'from-[#98c379] to-[#61afef]',
  },
  {
    number: '04',
    tag: 'PRODUCT LAUNCH',
    date: 'August 2026',
    title: 'Introducing Ontara Connect: the AI agent that never lets a WhatsApp lead go cold.',
    excerpt: "Most WhatsApp inquiries from Meta ads die in a queue nobody is watching. We built a multi-tenant AI agent that replies from a business's own catalog and knowledge base in seconds, then knows exactly when to step aside for a human. Here's how Ontara Connect is architected, and why it's our fourth product.",
    readTime: '7 min read',
    glow: 'from-[#56b6c2] to-[#25d366]',
    slug: 'ontara-connect-whatsapp-automation',
    subtitle: 'A multi-tenant WhatsApp CRM and AI chatbot built for businesses that can\'t afford to miss a lead.',
    body: [
      { type: 'p', text: "Every business running ads on Instagram or Facebook eventually hits the same wall: the ad works, the message comes in on WhatsApp, and then... nothing. No one's watching the inbox at 11pm. No one replies fast enough to beat the competitor who does. By the time a human gets to it, the lead has already messaged three other sellers and bought from whoever answered first." },
      { type: 'p', text: "We kept seeing this pattern across small businesses and e-commerce brands, so we built Ontara Connect: a WhatsApp Business CRM with an AI agent that never sleeps, never forgets a lead, and always knows the business's actual catalog, pricing, and policies well enough to answer without guessing." },

      { type: 'h2', text: 'The problem: WhatsApp is where leads go to die' },
      { type: 'p', text: "WhatsApp is the highest-intent channel most small businesses have. Someone clicked an ad, opened WhatsApp, and typed a question, that's about as close to \"ready to buy\" as a lead gets. But it's also the least instrumented channel in most businesses' stack. There's no CRM tracking it, no automation answering it, and no dashboard showing how many of those conversations quietly went cold." },
      { type: 'p', text: "Generic broadcast tools don't fix this either. Blast an unsegmented list with plain text and WhatsApp will rate-limit or ban the number before it converts a single sale." },

      { type: 'h2', text: 'What we built' },
      { type: 'list', items: [
        'A multi-tenant CRM so one platform (and one team) can run WhatsApp for many client businesses independently.',
        "An AI agent, grounded in each business's own product catalog and knowledge base, that replies instantly instead of retrieving generic answers.",
        'Automatic human escalation: the moment the AI detects frustration or a request it shouldn\'t handle alone, it pauses itself and hands the thread to a live agent.',
        'A campaign engine for sending rich, trackable WhatsApp templates, image carousels and buttons, not plain-text blasts, with per-message analytics.',
        "Onboarding through Meta's official Embedded Signup, so every number runs on sanctioned infrastructure from day one.",
      ] },

      { type: 'h2', text: "How it's architected" },
      { type: 'p', text: "The backend is FastAPI on MongoDB, talking directly to the WhatsApp Cloud API. Each client business is a tenant: its own catalog, its own knowledge base, its own conversation history, all isolated, all served from the same platform." },
      { type: 'p', text: "Inbound messages route through an OpenAI-powered agent (GPT-4o-mini) that answers strictly from what the business has told it, its catalog, its FAQs, its policies, rather than improvising. That constraint matters more than it sounds: a wrong answer about stock or pricing costs a sale and a customer's trust in one message. The same agent tracks conversation state well enough to know when it's out of its depth, at which point it pauses auto-replies and surfaces the thread in a live team inbox for a human to take over." },
      { type: 'p', text: "On the outbound side, a template builder lets a business assemble rich WhatsApp campaigns, product carousels, images, call-to-action buttons, and a live preview shows exactly what the customer will see before it sends. Every campaign reports back who opened it, who clicked, and what they did next." },

      { type: 'quote', text: "The AI never guesses. It only ever answers from what the business itself has told it, and it knows exactly when to get out of the way for a human." },

      { type: 'h2', text: "Who it's for" },
      { type: 'p', text: "Ontara Connect is built for small businesses and e-commerce brands running Meta ads, and for agencies managing WhatsApp for several client businesses at once through a single multi-tenant workspace. If a business's growth is already bottlenecked by how fast a human can reply to WhatsApp, this is built for exactly that moment." },

      { type: 'p', text: "It's our fourth product, and the first one built entirely around a single channel most businesses already have open, they just haven't automated it yet." },
    ],
  },
];
