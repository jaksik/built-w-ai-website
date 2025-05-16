export interface Tool {
  name: string
  category: string
  subcategory: string
  url: string
  description: string
}

export const categorySubcategories: Record<string, string[]> = {
  "Agent Builders": [
    "Workflow Automation",
    "Cloud Agents"
  ],
  "Chat Assistants": [
    "General Purpose",
    "Specialized",
    "Enterprise"
  ],
  "Business Tools": [
    "Analytics",
    "Hiring/Training",
    "Management"
  ],
  "Cloud Platforms": [
    "Hosting",
    "Development",
    "Storage",
    "Databases"
  ],
  "Coding Agents": [
    "Code Generation",
    "Code Review",
    "Development Tools",
    "IDE Integration"
  ],
  "Sales": [
    "Marketing",
    "Engagement",
    "Analysis"
  ],
  "Video Generators": [
    "Avatar-based",
    "Video Editing",
    "Text-to-Video"
  ],
  "Voice Generators": [
    "Text-to-Speech",
    "Voice Cloning",
    "Audio Processing",
    "Multilingual"
  ],
  "Website Builders": [
    "E-commerce",
    "Website Generators"
  ]
}

export const tools: Tool[] = [
  {
    name: "n8n",
    category: "Agent Builders",
    subcategory: "Workflow Automation",
    url: "https://n8n.io/",
    description: "Low/No-code workflow automation platform."
  },
  {
    name: "Make",
    category: "Agent Builders",
    subcategory: "Workflow Automation",
    url: "https://www.make.com/en/register?pc=sharpstartup",
    description: "Visual platform for connecting apps and automating workflows."
  },
  {
    name: "Zapier",
    category: "Agent Builders",
    subcategory: "Workflow Automation",
    url: "https://zapier.com/",
    description: "Automate tasks between different web apps."
  },
  {
    name: "MindStudio",
    category: "Agent Builders",
    subcategory: "Workflow Automation",
    url: "https://www.mindstudio.ai/",
    description: "Build AI agents with no-code."
  },
  {
    name: "RelevanceAI",
    category: "Agent Builders",
    subcategory: "Workflow Automation",
    url: "https://relevanceai.com/",
    description: "Platform for building and deploying AI applications."
  },
  {
    name: "Gemini",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://gemini.google.com/",
    description: "Google's multimodal AI model."
  },
  {
    name: "ChatGPT",
    category: "Chat Assistants",
    subcategory: "General Purpose",
    url: "https://chatgpt.com/",
    description: "Advanced AI chatbot developed by OpenAI."
  },
  {
    name: "Perplexity",
    category: "Chat Assistants",
    subcategory: "Specialized",
    url: "https://www.perplexity.ai/",
    description: "AI-powered answer engine."
  },
  {
    name: "Exploding Topics",
    category: "Business Tools",
    subcategory: "Analytics",
    url: "https://explodingtopics.com/?via=sharpstartup",
    description: "Tool for discovering emerging trends."
  },
  {
    name: "Fiver",
    category: "Business Tools",
    subcategory: "Hiring/Training",
    url: "https://www.fiverr.com/",
    description: "Platform to hire freelancers."
  },
  {
    name: "QuickBooks",
    category: "Business Tools",
    subcategory: "Management",
    url: "https://quickbooks.intuit.com/",
    description: "Accounting software for small business Toolses."
  },
  {
    name: "ZenBusiness Tools",
    category: "Business Tools",
    subcategory: "Management",
    url: "https://www.zenbusiness Tools.com/",
    description: "Online business Tools formation services."
  },
  {
    name: "LegalZoom",
    category: "Business Tools",
    subcategory: "Management",
    url: "https://www.legalzoom.com/",
    description: "Online legal services platform."
  },
  {
    name: "BrowseAI",
    category: "Business Tools",
    subcategory: "Analytics",
    url: "https://browse.ai/?via=sharpstartup",
    description: "Extract and monitor data from any website."
  },
  {
    name: "ChatNode",
    category: "Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.chatnode.ai/?via=sharpstartup",
    description: "Platform for creating AI chatbots."
  },
  {
    name: "ChatBase",
    category: "Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.chatbase.co/?via=Sharpstartup",
    description: "Build AI chatbots from your data."
  },
  {
    name: "HubSpot",
    category: "Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.hubspot.com/products/crm/chatbot-builder",
    description: "Chatbot builder within HubSpot's CRM platform."
  },
  {
    name: "DropChat",
    category: "Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://dropchat.co/?via=sharpstartup",
    description: "Provides AI chatbot solutions for business Toolses."
  },
  {
    name: "ChatbotBuilder",
    category: "Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.chatbotbuilder.ai/",
    description: "Tool for creating chatbots for various use cases."
  },
  {
    name: "Intercom",
    category: "Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://www.intercom.com/",
    description: "Offers customer communication solutions with AI chatbots."
  },
  {
    name: "Botpress",
    category: "Chatbot Builders",
    subcategory: "Custom Solutions",
    url: "https://botpress.com/",
    description: "Open-source platform for building AI-powered chatbots."
  },
  {
    name: "Cloudways",
    category: "Cloud Platforms",
    subcategory: "Hosting",
    url: "https://vrlps.co/kerj5lj/cp",
    description: "Cloud hosting great for WordPress."
  },
  {
    name: "Google Cloud",
    category: "Cloud Platforms",
    subcategory: "Development",
    url: "https://cloud.google.com/",
    description: "Cloud tools for building and deploying applications."
  },
  {
    name: "Airtable",
    category: "Cloud Platforms",
    subcategory: "Storage",
    url: "https://www.airtable.com/",
    description: "Collaborative spreadsheet-database tool."
  },
  {
    name: "Windsurf",
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://windsurf.com/",
    description: "Provides tools for developers to build and manage APIs."
  },
  {
    name: "Cursur",
    category: "Coding Agents",
    subcategory: "IDE Integration",
    url: "https://www.cursor.com/",
    description: "AI-powered code editor."
  },
  {
    name: "Lovable",
    category: "Coding Agents",
    subcategory: "Code Assistant",
    url: "https://lovable.dev/?via=sharpstartup",
    description: "AI code assistant."
  },
  {
    name: "Replit",
    category: "Coding Agents",
    subcategory: "Development Tools",
    url: "https://replit.com/",
    description: "Online IDE and collaborative coding environment."
  },
  {
    name: "vidIQ",
    category: "Business Tools",
    subcategory: "Analytics",
    url: "https://vidiq.com/sharpstartup",
    description: "AI-powered YouTube growth and analytics."
  },
  {
    name: "CoachVox",
    category: "Business Tools",
    subcategory: "Hiring/Training",
    url: "https://coachvox.ai/",
    description: "AI tool for coaching and training."
  },
  {
    name: "GoHighLevel",
    category: "Sales",
    subcategory: "Marketing",
    url: "https://www.gohighlevel.com/?fp_ref=connor96",
    description: "All-in-one marketing and sales platform."
  },
  {
    name: "LemonSqueezy",
    category: "Sales",
    subcategory: "Marketing",
    url: "https://www.lemonsqueezy.com/",
    description: "Payment platform for selling digital products."
  },
  {
    name: "Hubspot",
    category: "Sales",
    subcategory: "Marketing",
    url: "https://www.hubspot.com/",
    description: "CRM platform for marketing and sales."
  },
  {
    name: "Bland",
    category: "Sales",
    subcategory: "Engagement",
    url: "https://www.bland.ai/",
    description: "AI tool for sales prospecting."
  },
  {
    name: "Outreach",
    category: "Sales",
    subcategory: "Engagement",
    url: "https://www.outreach.io/",
    description: "Sales engagement platform."
  },
  {
    name: "SecondNature",
    category: "Sales",
    subcategory: "Analysis",
    url: "https://secondnature.ai/",
    description: "AI simulation for sales conversations."
  },
  {
    name: "Quantified",
    category: "Sales",
    subcategory: "Analysis",
    url: "https://quantified.ai/",
    description: "AI platform for communication analysis."
  },
  {
    name: "HeyGen",
    category: "Video Generators",
    subcategory: "Avatar-based",
    url: "https://app.heygen.com/guest?sid=rewardful\&via=sharpstartup",
    description: "AI video generation platform using avatars."
  },
  {
    name: "Synthesia",
    category: "Video Generators",
    subcategory: "Avatar-based",
    url: "https://www.synthesia.io/",
    description: "AI video creation platform."
  },
  {
    name: "KlingAI",
    category: "Video Generators",
    subcategory: "Text-to-Video",
    url: "https://klingai.com/global/",
    description: "AI video generation tool."
  },
  {
    name: "RunwayML",
    category: "Video Generators",
    subcategory: "Text-to-Video",
    url: "https://runwayml.com/",
    description: "Provides AI tools for video editing and creation."
  },
  {
    name: "Descript",
    category: "Video/Podcast Editing",
    subcategory: "Editing",
    url: "https://get.descript.com/sharpstartup",
    description: "Collaborative audio/video editor powered by AI."
  },
  {
    name: "Podcastle",
    category: "Video/Podcast Editing",
    subcategory: "Editing",
    url: "https://podcastle.ai/?ref=oda0mdr",
    description: "AI-powered podcast recording and editing platform."
  },
  {
    name: "OpusPro",
    category: "Video/Podcast Editing",
    subcategory: "Editing",
    url: "https://www.opus.pro/",
    description: "AI tool for repurposing long-form videos into clips."
  },
  {
    name: "Elevenlabs",
    category: "Voice Generators",
    subcategory: "Voice Cloning",
    url: "https://try.elevenlabs.io/l8axnydnppgi",
    description: "AI voice cloning and text-to-speech platform."
  },
  {
    name: "Play.ht",
    category: "Voice Generators",
    subcategory: "Text-to-Speech",
    url: "https://www.play.ht/?via=sharpstartup",
    description: "AI text-to-speech generator."
  },
  {
    name: "VoiceAI",
    category: "Voice Generators",
    subcategory: "Audio Processing",
    url: "https://link.xsolla.com/v6lL8fIS",
    description: "Provides AI voice changing software."
  },
  {
    name: "Vapi",
    category: "Voice Generators",
    subcategory: "Multilingual",
    url: "https://vapi.ai/",
    description: "AI voice API for building voice-enabled applications."
  },
  {
    name: "JustCall",
    category: "Voice Generators",
    subcategory: "Cloud Phone",
    url: "https://justcall.io/",
    description: "Cloud phone system with AI features."
  },
  {
    name: "Namecheap",
    category: "Website Builders",
    subcategory: "Domain Registration",
    url: "https://namecheap.pxf.io/sharpstartup",
    description: "Domain registar and hosting with free privacy protection."
  },
  {
    name: "10web",
    category: "Website Builders",
    subcategory: "Website Generators",
    url: "https://10web.io/?_from=sharpstartup",
    description: "AI-powered website builder and hosting for WordPress."
  },
  {
    name: "Shopify",
    category: "Website Builders",
    subcategory: "E-commerce",
    url: "https://www.shopify.com/",
    description: "AI-powered online storefront platform."
  }
]