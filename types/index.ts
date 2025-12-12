export interface Analytics {
  app: string;
  visitors: string;
  change: string;
  sessions: string;
  bounce: string;
}

export interface NewsItem {
  title: string;
  source: string;
  time: string;
  category: "AI" | "Tech" | "Design" | "Dev" | "Finance";
}

export interface TrendingTopic {
  topic: string;
  posts: string;
  sentiment: "positive" | "negative" | "neutral";
}

export interface Task {
  id: string;
  title: string;
  project: string;
  priority: "high" | "medium" | "low";
  due: string;
}

export interface Permission {
  name: string;
  enabled: boolean;
  desc: string;
}

export interface ChatMessage {
  role: "ai" | "user";
  content: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  duration: string;
  type: "focus" | "meeting";
}

export interface QuickLink {
  label: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
}

export interface FinanceStat {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}
