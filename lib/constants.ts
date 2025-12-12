import type {
  Analytics,
  NewsItem,
  TrendingTopic,
  Task,
  Permission,
  ScheduleEvent,
  QuickLink,
  Stat,
  FinanceStat,
} from "@/types";

export const ANALYTICS_DATA: Analytics[] = [
  {
    app: "Portfolio",
    visitors: "2.4k",
    change: "+12%",
    sessions: "890",
    bounce: "32%",
  },
  {
    app: "SaaS App",
    visitors: "8.1k",
    change: "+24%",
    sessions: "3.2k",
    bounce: "28%",
  },
  {
    app: "Blog",
    visitors: "1.2k",
    change: "+8%",
    sessions: "420",
    bounce: "45%",
  },
];

export const NEWS_DATA: NewsItem[] = [
  {
    title: "OpenAI releases GPT-5 with reasoning capabilities",
    source: "TechCrunch",
    time: "2h",
    category: "AI",
  },
  {
    title: "Apple Vision Pro 2 leaks suggest lighter design",
    source: "The Verge",
    time: "4h",
    category: "Tech",
  },
  {
    title: "Figma announces AI-powered design tools",
    source: "Designer News",
    time: "5h",
    category: "Design",
  },
  {
    title: "Next.js 15 introduces partial prerendering",
    source: "Vercel Blog",
    time: "6h",
    category: "Dev",
  },
  {
    title: "Stripe launches embedded finance platform",
    source: "Fintech Today",
    time: "8h",
    category: "Finance",
  },
];

export const TRENDING_DATA: TrendingTopic[] = [
  { topic: "#AIagents", posts: "124k", sentiment: "positive" },
  { topic: "React 19", posts: "89k", sentiment: "positive" },
  { topic: "#buildinpublic", posts: "56k", sentiment: "neutral" },
  { topic: "Startup layoffs", posts: "42k", sentiment: "negative" },
  { topic: "#indiehackers", posts: "38k", sentiment: "positive" },
];

export const TASKS_DATA: Task[] = [
  {
    id: "1",
    title: "Review PR #234",
    project: "SaaS App",
    priority: "high",
    due: "Today",
  },
  {
    id: "2",
    title: "Write blog post",
    project: "Content",
    priority: "medium",
    due: "Tomorrow",
  },
  {
    id: "3",
    title: "Client meeting prep",
    project: "Freelance",
    priority: "high",
    due: "2h",
  },
];

export const DEFAULT_PERMISSIONS: Permission[] = [
  { name: "Calendar access", enabled: true, desc: "Read & write events" },
  { name: "Task management", enabled: true, desc: "Create & complete tasks" },
  { name: "Email drafts", enabled: false, desc: "Compose emails" },
  {
    name: "Social posting",
    enabled: false,
    desc: "Post to connected accounts",
  },
  { name: "Code commits", enabled: false, desc: "Push to repositories" },
];

export const SCHEDULE_DATA: ScheduleEvent[] = [
  { time: "09:00", title: "DEEP WORK", duration: "2h", type: "focus" },
  { time: "11:30", title: "STANDUP", duration: "15m", type: "meeting" },
  { time: "14:00", title: "CLIENT CALL", duration: "45m", type: "meeting" },
  { time: "16:00", title: "LEARNING", duration: "1h", type: "focus" },
];

export const QUICK_LINKS: QuickLink[] = [
  { label: "NOTION", icon: "N" },
  { label: "FIGMA", icon: "F" },
  { label: "GITHUB", icon: "G" },
  { label: "LINEAR", icon: "L" },
  { label: "SLACK", icon: "S" },
  { label: "GMAIL", icon: "M" },
  { label: "CAL", icon: "C" },
  { label: "DRIVE", icon: "D" },
];

export const TODAY_STATS: Stat[] = [
  { label: "FOCUS", value: "4.2h", sub: "+1h" },
  { label: "TASKS", value: "8/12", sub: "67%" },
  { label: "CALLS", value: "2", sub: "1.5h" },
  { label: "COMMITS", value: "14", sub: "3PR" },
];

export const FINANCE_STATS: FinanceStat[] = [
  { label: "THIS MONTH", value: "$8.2k", sub: "+12%", highlight: true },
  { label: "PENDING", value: "$3.4k", sub: "2 INV", highlight: false },
  { label: "RUNWAY", value: "8.2mo", sub: "SAFE", highlight: true },
];

export const QUICK_ACTIONS = [
  { label: "New Post", icon: "✎", cmd: "nano" },
  { label: "Schedule", icon: "◷", cmd: "cron" },
  { label: "Analytics", icon: "◐", cmd: "htop" },
  { label: "Settings", icon: "⚙", cmd: "vim" },
];

export const INITIAL_AI_MESSAGE =
  "> SYSTEM READY. AI ASSISTANT ONLINE. TYPE 'help' FOR COMMANDS.";
