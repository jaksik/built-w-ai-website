export interface Tool {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  url: string;
  logoUrl: string;
  description: string;
}

export const tools: Tool[] = [
  {
    id: "1",
    name: "n8n",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://n8n.io/",
    logoUrl: "/logos/n8n.png",
    description: "Automate complex workflows with AI-enhanced visual building or code, deployable anywhere."
  },
  {
    id: "2",
    name: "Make",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://www.make.com/en/",
    logoUrl: "/logos/make.png",
    description: "Visually design and scale AI-powered automated workflows on an intuitive no-code platform."
  },
  {
    id: "3",
    name: "Zapier",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://zapier.com/",
    logoUrl: "/logos/zapier.svg",
    description: "Orchestrate and ship AI-driven workflows in minutes on the most connected automation platform."
  },
  {
    id: "4",
    name: "MindStudio",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://www.mindstudio.ai/",
    logoUrl: "/logos/mindstudio.png",
    description: "Build powerful custom AI agents for any task, no coding required."
  },
  {
    id: "5",
    name: "RelevanceAI",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://relevance.ai/",
    logoUrl: "/logos/relevance.png",
    description: "Build and manage teams of AI agents for human-quality work on a powerful visual platform."
  },
  {
    id: "6",
    name: "Gemini",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://gemini.google.com/",
    logoUrl: "/logos/gemini.png",
    description: "Access Google's personal AI assistant for multimodal understanding and generation."
  },
  {
    id: "7",
    name: "Grok",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://x.ai/",
    logoUrl: "/logos/x-ai.png",
    description: "Explore the universe with Grok, your AI cosmic guide, accessible on multiple platforms."
  },
  {
    id: "8",
    name: "Perplexity", // Corrected from "Pefplexity"
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://www.perplexity.ai/",
    logoUrl: "/logos/perplexity.png",
    description: "Get accurate, trusted, real-time answers to any question with this free AI-powered answer engine."
  },
  {
    id: "9",
    name: "ChatGPT",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://chatgpt.com/",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
    description: "Engage with the world's most popular AI assistant to ask anything or generate images."
  },
  {
    id: "10",
    name: "Claude",
    category: "Chat Assistants",
    subcategory: "Specialized",
    url: "https://www.anthropic.com/claude",
    logoUrl: "/logos/anthropic.png",
    description: "Collaborate with Claude (by Anthropic), an AI assistant for brainstorming and building, designed for everyone."
  },
  {
    id: "14",
    name: "BrowseAI",
    category: "Automation",
    subcategory: "Analytics",
    url: "https://browse.ai/?via=sharpstartup",
    logoUrl: "/logos/browse-ai.png",
    description: "Extract data from any website into spreadsheets or APIs using this no-code AI tool."
  },
  {
    id: "15",
    name: "ChatNode",
    category: "AI Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.chatnode.ai/?via=sharpstartup",
    logoUrl: "/logos/chatnode.png",
    description: "Create advanced AI chatbots with deep business understanding using your own LLM."
  },
  {
    id: "16",
    name: "ChatBase",
    category: "AI Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.chatbase.co/?via=Sharpstartup",
    logoUrl: "/logos/chatbase.png",
    description: "Build AI support agents on a complete platform designed to solve your customers' hardest problems."
  },
  {
    id: "17",
    name: "HubSpot",
    category: "AI Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.hubspot.com/products/crm/chatbot-builder",
    logoUrl: "/logos/hubspot.png",
    description: "Quickly create AI chatbots to generate leads, route conversations, book meetings, and triage tickets."
  },
  {
    id: "19",
    name: "ChatbotBuilder",
    category: "AI Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.chatbotbuilder.ai/",
    logoUrl: "/logos/chatbotbuilder-ai.png",
    description: "Easily build custom AI chatbots and GPTs for websites, social media, email, and phone."
  },
  {
    id: "20",
    name: "Intercom",
    category: "AI Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.intercom.com/",
    logoUrl: "/logos/intercom.png",
    description: "Deploy AI agents to instantly resolve customer questions or triage complex issues."
  },
  {
    id: "21",
    name: "Botpress",
    category: "AI Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://botpress.com/",
    logoUrl: "/logos/botpress.png",
    description: "Build AI agents powered by the latest LLMs on an all-in-one, free-to-start platform."
  },
  {
    id: "23",
    name: "Google Cloud",
    category: "AI Cloud Services",
    subcategory: "Development",
    url: "https://cloud.google.com/products/ai",
    logoUrl: "/logos/googlecloud.png",
    description: "Access Google's AI and machine learning products, including advanced Gemini models in Vertex AI."
  },
   {
    id: "24",
    name: "Azure AI",
    category: "AI Cloud Services",
    subcategory: "Development",
    url: "https://azure.microsoft.com/en-us/solutions/ai",
    logoUrl: "/logos/azure.png",
    description: "Build exceptional generative and agentic AI systems with curated models and built-in measurement tools."
  },
   {
    id: "25",
    name: "Groq",
    category: "AI Cloud Services",
    subcategory: "Development",
    url: "https://groq.com/",
    logoUrl: "https://cdn.brandfetch.io/idxygbEPCQ/w/201/h/201/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1668515712972",
    description: "Achieve instant intelligence with fast AI inference for openly-available large language models."
  },
   {
    id: "26",
    name: "AWS",
    category: "AI Cloud Services",
    subcategory: "Development",
    url: "https://aws.amazon.com/ai/",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Build and scale AI innovations, reinventing customer experiences with comprehensive AI/ML services."
  },
  {
    id: "27",
    name: "Airtable",
    category: "AI Cloud Services",
    subcategory: "Storage",
    url: "https://www.airtable.com/",
    logoUrl: "/logos/airtable.png",
    description: "Power your digital operations in the AI era by creating modern apps to manage and automate processes."
  },
  {
    id: "28",
    name: "Windsurf",
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://windsurf.com/",
    logoUrl: "/logos/windsurf.png",
    description: "Experience magical coding where developer and AI workflows merge seamlessly in the Windsurf Editor."
  },
  {
    id: "29",
    name: "Github Copilot",
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://github.com/features/copilot",
    logoUrl: "/logos/copilot.png",
    description: "Code faster with GitHub Copilot, your AI pair programmer suggesting lines or entire functions in your editor."
  },
  {
    id: "30",
    name: "Cursor",
    category: "Coding Agents",
    subcategory: "IDE Integration",
    url: "https://www.cursor.com/",
    logoUrl: "/logos/cursor.png",
    description: "Build software faster with Cursor, an intelligent and speedy AI code editor powered by frontier models."
  },
  {
    id: "31",
    name: "Lovable",
    category: "Coding Agents",
    subcategory: "Code Assistant",
    url: "https://lovable.dev/?via=sharpstartup",
    logoUrl: "/logos/lovable.png",
    description: "Get working code from natural language and build faster with an AI that understands your product needs."
  },
  {
    id: "32",
    name: "Replit",
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://replit.com/",
    logoUrl: "/logos/replit.png",
    description: "Make software creation accessible to everyone with 'vibe coding' using natural language on Replit's AI platform."
  },
  {
    id: "33",
    name: "vidIQ",
    category: "Business Tools",
    subcategory: "Analytics",
    url: "https://vidiq.com/sharpstartup",
    logoUrl: "/logos/vidiq.png",
    description: "Instantly turn ideas into YouTube videos with a free AI content generator for transcripts, keywords, and voiceovers."
  },
  {
    id: "34",
    name: "CoachVox",
    category: "Business Tools",
    subcategory: "Hiring/Training",
    url: "https://coachvox.ai/",
    logoUrl: "/logos/coachvox.png",
    description: "Attract clients and grow your business by delivering world-class coaching experiences with AI."
  },
  {
    id: "35",
    name: "Bland",
    category: "Sales/Marketing",
    subcategory: "Engagement",
    url: "https://www.bland.ai/",
    logoUrl: "/logos/bland.png",
    description: "Integrate human-sounding, multilingual AI phone agents for 24/7 sales, scheduling, and customer support."
  },
  {
    id: "36",
    name: "Outreach",
    category: "Sales/Marketing",
    subcategory: "Engagement",
    url: "https://www.outreach.io/",
    logoUrl: "/logos/outreach.png",
    description: "Empower your sales team with AI tools for data-driven decisions and winning outcomes."
  },
  {
    id: "37",
    name: "SecondNature",
    category: "Sales/Marketing",
    subcategory: "Analysis",
    url: "https://secondnature.ai/",
    logoUrl: "/logos/secondnature.png",
    description: "Boost sales and productivity with AI-powered, life-like sales training and conversation role-playing."
  },
  {
    id: "38",
    name: "Quantified",
    category: "Sales/Marketing",
    subcategory: "Analysis",
    url: "https://quantified.ai/",
    logoUrl: "/logos/quantified.png",
    description: "Improve sales performance with a scalable AI simulation and coaching platform for role-playing."
  },
  {
    id: "39",
    name: "HeyGen",
    category: "Video Generators",
    subcategory: "Avatar-based",
    url: "https://app.heygen.com/guest?sid=rewardful&via=sharpstartup",
    logoUrl: "/logos/heygen.png",
    description: "Create unlimited AI videos from text in minutes, no camera needed, with HeyGen."
  },
  {
    id: "40",
    name: "Synthesia",
    category: "Video Generators",
    subcategory: "Avatar-based",
    url: "https://www.synthesia.io/",
    logoUrl: "/logos/synthesia.png",
    description: "Create studio-quality videos from text with AI avatars and voiceovers in 140+ languages, as easily as a slide deck."
  },
  {
    id: "41",
    name: "KlingAI",
    category: "Video Generators",
    subcategory: "Text-to-Video",
    url: "https://kling.kuaishou.com/",
    logoUrl: "/logos/kling-ai.png",
    description: "Generate and edit videos and images with Kling AI, a next-gen creative studio powered by large AI models."
  },
  {
    id: "42",
    name: "RunwayML",
    category: "Video Generators",
    subcategory: "Text-to-Video",
    url: "https://runwayml.com/",
    logoUrl: "/logos/runwayml.png",
    description: "Ideate, generate, and edit content with dozens of AI-powered creative tools on RunwayML."
  },
  {
    id: "43",
    name: "Descript",
    category: "Video Generators",
    subcategory: "Editing",
    url: "https://www.descript.com/",
    logoUrl: "/logos/descript.png",
    description: "Edit audio and video as easily as text with Descript's AI-powered transcription and collaborative tools."
  },
  {
    id: "44",
    name: "Podcastle",
    category: "Voice Generators",
    subcategory: "Editing",
    url: "https://podcastle.ai/?ref=oda0mdr",
    logoUrl: "/logos/podcastle.png",
    description: "Create professional podcasts and videos using advanced AI speech technology to elevate every word."
  },
  {
    id: "45",
    name: "OpusPro",
    category: "Video Generators",
    subcategory: "Editing",
    url: "https://www.opus.pro/",
    logoUrl: "/logos/opuspro.png",
    description: "Turn long videos into 10 viral clips 10x faster and publish to socials in one click with AI."
  },
  {
    id: "46",
    name: "Elevenlabs",
    category: "Voice Generators",
    subcategory: "Voice Cloning",
    url: "https://elevenlabs.io/",
    logoUrl: "/logos/elevenlabs.png",
    description: "Access leading AI voice models for low-latency conversational agents, voiceovers, and audiobooks."
  },
  {
    id: "47",
    name: "Play.ht",
    category: "Voice Generators",
    subcategory: "Text-to-Speech",
    url: "https://www.play.ht/?via=sharpstartup",
    logoUrl: "/logos/playht.png",
    description: "Generate human-like AI voices with real-time intelligence and deploy them anywhere."
  },
  {
    id: "48",
    name: "VoiceAI",
    category: "Voice Generators",
    subcategory: "Audio Processing",
    url: "https://voice.ai/",
    logoUrl: "/logos/voice-ai.png",
    description: "Access a free real-time AI voice changer and a large ecosystem of free AI voice tools."
  },
  {
    id: "49",
    name: "Vapi",
    category: "Voice Generators",
    subcategory: "Multilingual",
    url: "https://vapi.ai/",
    logoUrl: "/logos/vapi.png",
    description: "Build leading voice AI products and scale phone operations with a highly configurable API."
  },
  {
    id: "50",
    name: "JustCall",
    category: "Business Tools",
    subcategory: "Cloud Phone",
    url: "https://justcall.io/",
    logoUrl: "/logos/justcall.png",
    description: "Employ an AI voice agent to answer calls, schedule meetings, and route to human experts."
  },
  {
    id: "52",
    name: "10web",
    category: "Website Builders",
    subcategory: "Website Generators",
    url: "https://10web.io/?_from=sharpstartup",
    logoUrl: "/logos/10web.png",
    description: "Generate, host, and scale stunning websites with one intelligent AI platform."
  },
  {
    id: "53",
    name: "Shopify Magic",
    category: "Website Builders",
    subcategory: "E-commerce",
    url: "https://www.shopify.com/magic",
    logoUrl: "/logos/shopify.svg",
    description: "Start, run, and grow your e-commerce business easier with Shopify Magic's AI tools."
  }
];
