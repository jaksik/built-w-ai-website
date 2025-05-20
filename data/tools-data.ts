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
    logoUrl: "/logos/n8n.png", // Updated from GitHub avatar
    description: "Build with the precision of code or the speed of drag-n-drop. Host with on-prem control or in-the-cloud convenience. n8n gives you more freedom to implement multi-step AI agents and integrate apps than any other tool."
  },
  {
    id: "2",
    name: "Make",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://www.make.com/en/", // Original URL had register path
    logoUrl: "/logos/make.png", // From Brandfetch
    description: "Automation you can see, flex, and scale. Realize your business’s full potential with Make’s intuitive no-code development platform."
  },
  {
    id: "3",
    name: "Zapier",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://zapier.com/",
    logoUrl: "/logos/zapier.svg", // From Brandfetch
    description: "The most connected AI orchestration platform. Build and ship AI workflows in minutes—no IT bottlenecks, no complexity. Just results."
  },
  {
    id: "4",
    name: "MindStudio",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://www.mindstudio.ai/",
    logoUrl: "/logos/mindstudio.png", // From Brandfetch
    description: "Build Powerful AI Agents For yourself, your team, or your enterprise—no coding required"
  },
  {
    id: "5",
    name: "RelevanceAI",
    category: "Automation",
    subcategory: "Workflow Automation",
    url: "https://relevance.ai/", // Updated URL
    logoUrl: "/logos/relevance.png", // From Brandfetch (relevance.ai)
    description: "Build teams of AI agents that deliver human-quality work. Ops teams can build and manage an entire AI workforce in one powerful visual platform."
  },
  {
    id: "6",
    name: "Gemini",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://gemini.google.com/",
    logoUrl: "/logos/gemini.png",
    description: "Personal AI assistant by Google."
  },
  {
    id: "7",
    name: "Grok",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://x.ai/", // Corrected URL (Grok is from xAI)
    logoUrl: "/logos/x-ai.png",
    description: "Grok is your cosmic guide, now accessible on grok.com, iOS, and Android. Explore the universe with AI." // Corrected description
  },
  {
    id: "8",
    name: "Pefplexity", // Duplicate of ID 6, kept as per original list
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://www.perplexity.ai/",
    logoUrl: "/logos/perplexity.png", // From Brandfetch
    description: "Perplexity is a free AI-powered answer engine that provides accurate, trusted, and real-time answers to any question."
  },
  {
    id: "9",
    name: "ChatGPT",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://chatgpt.com/", // Corrected from chat.openai.com to common user-facing URL
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png", // Slightly different wikimedia link, more standard
    description: "Give the world's most popular AI assistant a try. Sign up for free & ask ChatGPT anything. Imagine it. Style it. Refine it. Whatever image you can think up, ChatGPT can generate."
  },
  {
    id: "10",
    name: "Claude (Anthropic)",
    category: "Chat Assistants",
    subcategory: "Specialized", // Claude models are general purpose too
    url: "https://www.anthropic.com/claude", // Corrected URL (was Perplexity)
    logoUrl: "/logos/anthropic.png",
    description: "Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, Claude is here to help." // Corrected description
  },
  {
    id: "14",
    name: "BrowseAI",
    category: "Automation",
    subcategory: "Analytics",
    url: "https://browse.ai/?via=sharpstartup",
    logoUrl: "/logos/browse-ai.png", // From their media kit
    description: "Extract Data from Any Website — Extract data from any website and turn it into a spreadsheet or an API with No-Code."
  },
  {
    id: "15",
    name: "ChatNode",
    category: "Custom Chatbots",
    subcategory: "Custom Solutions",
    url: "https://www.chatnode.ai/?via=sharpstartup",
    logoUrl: "/logos/chatnode.png", // From their media kit
    description: "Build Your Own LLM — Create advanced AI chatbots for your website with a deep understanding of your business!"
  },
  {
    id: "16",
    name: "ChatBase",
    category: "Custom Chatbots",
    subcategory: "Custom Solutions",
    url: "https://www.chatbase.co/?via=Sharpstartup",
    logoUrl: "/logos/chatbase.png", // From their media kit
    description: "The complete platform for AI support agents. Chatbase is designed for building AI support agents that solve your customers' hardest problems."
  },
  {
    id: "17",
    name: "HubSpot",
    category: "Custom Chatbots", // Also CRM, Marketing, Sales
    subcategory: "Custom Solutions",
    url: "https://www.hubspot.com/products/crm/chatbot-builder",
    logoUrl: "/logos/hubspot.png", // From their media kit
    description: "Create Chatbots in Minutes — Use chatbots to generate leads, route conversations, book meetings and triage tickets."
  },
  {
    id: "19",
    name: "ChatbotBuilder",
    category: "Custom Chatbots",
    subcategory: "Custom Solutions",
    url: "https://www.chatbotbuilder.ai/", // Site is chatbotbuilder.net
    logoUrl: "/logos/chatbotbuilder-ai.png", // From their media kit
    description: "Chatbot Builder AI is the fastest, easiest way to build custom chatbots and GPTs for your website, social media, e-mails, and phone calls."
  },
  {
    id: "20",
    name: "Intercom",
    category: "Custom Chatbots", // Also Customer Service Platform
    subcategory: "Custom Solutions",
    url: "https://www.intercom.com/",
    logoUrl: "/logos/intercom.png", // From their media kit
    description: "Build Your Own Chatbot — Use AI agents to instantly resolve customer questions or triage more complicated issues."
  },
  {
    id: "21",
    name: "Botpress",
    category: "Custom Chatbots",
    subcategory: "Custom Solutions",
    url: "https://botpress.com/",
    logoUrl: "/logos/botpress.png", // From their media kit
    description: "Botpress is an all-in-one platform for building AI agents powered by the latest LLMs. Get started for free."
  },
  {
    id: "23",
    name: "Google Cloud",
    category: "Cloud Platforms",
    subcategory: "Development",
    url: "https://cloud.google.com/products/ai",
    logoUrl: "/logos/googlecloud.png",
    description: "AI and machine learning products. Try Gemini 2.5 models, the latest and most advanced multimodal models in Vertex AI."
  },
   {
    id: "24",
    name: "Azure AI",
    category: "Cloud Platforms",
    subcategory: "Development",
    url: "https://azure.microsoft.com/en-us/solutions/ai", // Corrected URL
    logoUrl: "/logos/azure.png",
    description: "Build exceptional generative and agentic AI systems. Innovate with a curated selection of models for any modality or budget. Use built-in tools to measure and adjust." // Added Microsoft
  },
   {
    id: "25",
    name: "Groq",
    category: "Cloud Platforms", // More accurately AI Hardware / Inference Engine
    subcategory: "Development",
    url: "https://groq.com/", // Corrected URL (was cloud.google.com)
    logoUrl: "https://cdn.brandfetch.io/idxygbEPCQ/w/201/h/201/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1668515712972", // Existing one is good
    description: "Instant Intelligence. Fast AI inference for openly-available models like Llama, DeepSeek, Mixtral, Qwen, Whisper, & more." // Corrected description
  },
   {
    id: "26",
    name: "AWS",
    category: "Cloud Platforms",
    subcategory: "Development",
    url: "https://aws.amazon.com/ai/", // Corrected URL
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Build and scale the next wave of AI innovation. Reinvent customer experiences with the most comprehensive set of artificial intelligence and machine learning services." // Added Amazon
  },
  {
    id: "27",
    name: "Airtable",
    category: "Cloud Platforms", // More of a No-Code/Low-Code Database
    subcategory: "Storage",
    url: "https://www.airtable.com/",
    logoUrl: "/logos/airtable.png", // From their media kit
    description: "CDigital operations for the AI era. Create modern business apps to manage and automate critical processes."
  },
  {
    id: "28",
    name: "Windsurf", // Data Mismatch: windsurf.com is for the sport. Description is API tools.
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://windsurf.com/",
    logoUrl: "/logos/windsurf.png", // Left blank due to data mismatch
    description: "The Windsurf Editor is where the work of developers and AI truly flow together, allowing for a coding experience that feels like literal magic."
  },
    {
    id: "29",
    name: "Github Copilot",
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://github.com/features/copilot", // Corrected URL
    logoUrl: "/logos/copilot.png", // From GitHub
    description: "GitHub Copilot works alongside you directly in your editor, suggesting whole lines or entire functions for you." // Corrected description
  },
  {
    id: "30",
    name: "Cursor", // Corrected from "Cursur"
    category: "Coding Agents",
    subcategory: "IDE Integration",
    url: "https://www.cursor.com/", // Site is cursor.sh
    logoUrl: "/logos/cursor.png", // From their media kit
    description: "Build software faster · Frontier Intelligence. Powered by a mix of purpose-built and frontier models, Cursor is smart and fast."
  },
  {
    id: "31",
    name: "Lovable",
    category: "Coding Agents",
    subcategory: "Code Assistant",
    url: "https://lovable.dev/?via=sharpstartup",
    logoUrl: "/logos/lovable.png", // From their media kit
    description: "Build faster with AI that understands your needs. Get working code from natural language. Chat about your product idea in English."
  },
  {
    id: "32",
    name: "Replit",
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://replit.com/",
    logoUrl: "/logos/replit.png", // From their media kit
    description: "The safest place for vibe coding. Vibe coding makes software creation accessible to everyone, entirely through natural language."
  },
  {
    id: "33",
    name: "vidIQ",
    category: "Business Tools",
    subcategory: "Analytics",
    url: "https://vidiq.com/sharpstartup",
    logoUrl: "/logos/vidiq.png", // From their media kit
    description: "Turn ideas into videos instantly with our free AI content generator for YouTube. Generate transcripts, keywords, voiceovers and more."
  },
  {
    id: "34",
    name: "CoachVox",
    category: "Business Tools",
    subcategory: "Hiring/Training",
    url: "https://coachvox.ai/",
    logoUrl: "/logos/coachvox.png", // From their media kit
    description: "Attract more clients, grow your business, and deliver a world-class coaching experience with AI."
  },
  {
    id: "35",
    name: "Bland",
    category: "Sales/Marketing", // Also Voice AI
    subcategory: "Engagement",
    url: "https://www.bland.ai/",
    logoUrl: "/logos/bland.png", // From their media kit
    description: "Bland makes it simple to integrate the latest conversational AI technology into your business. Build the perfect employee to handle sales, scheduling, and all your customer support needs. Bland’s AI phone agents sound human, can speak any language, and work 24/7."
  },
  {
    id: "36",
    name: "Outreach",
    category: "Sales/Marketing",
    subcategory: "Engagement",
    url: "https://www.outreach.io/",
    logoUrl: "/logos/outreach.png", // From their media kit
    description: "Outreach's AI tools empower every member of your team to make data-driven decisions, assist them in taking the right actions, and drive winning outcomes."
  },
  {
    id: "37",
    name: "SecondNature",
    category: "Sales/Marketing",
    subcategory: "Analysis",
    url: "https://secondnature.ai/",
    logoUrl: "/logos/secondnature.png", // From their media kit
    description: "Use AI life-like sales training to role play any conversation. Boost sales, enhance training effectiveness, and increase productivity."
  },
  {
    id: "38",
    name: "Quantified",
    category: "Sales/Marketing",
    subcategory: "Analysis",
    url: "https://quantified.ai/",
    logoUrl: "/logos/quantified.png", // From their media kit
    description: "The Sales AI Simulation and Coaching Platform. Improve Sales Performance with AI-Powered Role Play and Coaching that Scales Across Teams"
  },
  {
    id: "39",
    name: "HeyGen",
    category: "Video Generators",
    subcategory: "Avatar-based",
    url: "https://app.heygen.com/guest?sid=rewardful&via=sharpstartup", // Main site heygen.com
    logoUrl: "/logos/heygen.png",
    description: "Unlimited AI Videos. No Camera Needed. HeyGen AI turns text to video in only a few minutes. It’s easy, and it’s the future."
  },
  {
    id: "40",
    name: "Synthesia",
    category: "Video Generators",
    subcategory: "Avatar-based",
    url: "https://www.synthesia.io/",
    logoUrl: "/logos/synthesia.png", // From their media kit
    description: "Turn text to video, in minutes. Create studio-quality videos with AI avatars and voiceovers in 140+ languages. It’s as easy as making a slide deck."
  },
  {
    id: "41",
    name: "KlingAI",
    category: "Video Generators",
    subcategory: "Text-to-Video",
    url: "https://kling.kuaishou.com/", // Updated URL
    logoUrl: "/logos/kling-ai.png", // From their media kit
    description: "Kling AI is a next-generation AI creative studio, highly praised by creators worldwide. Powered by Kling large model and Kolors large model, it enables video and image generation and editing."
  },
  {
    id: "42",
    name: "RunwayML",
    category: "Video Generators",
    subcategory: "Text-to-Video",
    url: "https://runwayml.com/",
    logoUrl: "/logos/runwayml.png", // From their media kit
    description: "Everything you need, to make anything you want. Dozens of creative tools to ideate, generate and edit content like never before."
  },
  {
    id: "43",
    name: "Descript",
    category: "Video Generators", // More Audio/Video Editing Suite
    subcategory: "Editing",
    url: "https://www.descript.com/", // Cleaned URL
    logoUrl: "/logos/descript.png", // From their media kit
    description: "Descript is a collaborative audio and video editor that transcribes audio to a text document for editing, and provides automated and manual transcribing solutions for voice audio files."
  },
  {
    id: "44",
    name: "Podcastle",
    category: "Voice Generators",
    subcategory: "Editing",
    url: "https://podcastle.ai/?ref=oda0mdr",
    logoUrl: "/logos/podcastle.png", // From their media kit
    description: "Create professional podcasts and videos with advanced speech technology that elevates every word."
  },
  {
    id: "45",
    name: "OpusPro", // Product name is OpusClip
    category: "Video Generators",
    subcategory: "Editing",
    url: "https://www.opus.pro/",
    logoUrl: "/logos/opuspro.png", // From their media kit
    description: "1 long video, 10 viral clips. Create 10x faster. OpusClip turns long videos into shorts, and publishes them to all social platforms in one click."  
    },
  {
    id: "46",
    name: "Elevenlabs",
    category: "Voice Generators",
    subcategory: "Voice Cloning",
    url: "https://elevenlabs.io/", // Cleaned URL
    logoUrl: "/logos/elevenlabs.png", // From their media kit
    description: "AI voice models and products powering millions of developers, creators, and enterprises. From low‑latency conversational agents to the leading AI voice generator for voiceovers and audiobooks."
  },
  {
    id: "47",
    name: "Play.ht",
    category: "Voice Generators",
    subcategory: "Text-to-Speech",
    url: "https://www.play.ht/?via=sharpstartup",
    logoUrl: "/logos/playht.png", // From their media kit
    description: "Real-time voice intelligence. Generate AI voices as real as Humans. Deploy everywhere – to web, to phone, to apps, and beyond."
  },
  {
    id: "48",
    name: "VoiceAI",
    category: "Voice Generators",
    subcategory: "Audio Processing",
    url: "https://voice.ai/", // Corrected URL
    logoUrl: "/logos/voice-ai.png",
    description: "Free Real Time Voice Changer. And the largest ecosystem of Free AI Voice tools"
  },
  {
    id: "49",
    name: "Vapi",
    category: "Voice Generators", // More Developer API for Voice AI
    subcategory: "Multilingual",
    url: "https://vapi.ai/",
    logoUrl: "/logos/vapi.png",
    description: "The most configurable API to build leading voice AI products and scale phone operations."
  },
  {
    id: "50",
    name: "JustCall",
    category: "Business Tools",
    subcategory: "Cloud Phone",
    url: "https://justcall.io/",
    logoUrl: "/logos/justcall.png",
    description: "Your AI voice agent answers every call, responds to every inquiry, schedules meetings, and routes calls to your human experts when needed."
  },
  {
    id: "52",
    name: "10web",
    category: "Website Builders",
    subcategory: "Website Generators",
    url: "https://10web.io/?_from=sharpstartup",
    logoUrl: "/logos/10web.png",
    description: "One AI platform to build, host and scale your website. Generate stunning websites, host them on the most reliable platform, and scale with one intelligent AI solution."
  },
  {
    id: "53",
    name: "Shopify Magic",
    category: "Website Builders",
    subcategory: "E-commerce",
    url: "https://www.shopify.com/magic",
    logoUrl: "/logos/shopify.svg", // From Shopify
    description: "AI designed for commerce. Shopify Magic makes it easier to start, run, and grow your business."
  }
];
