import { Header, StatusBar, Footer, Background } from "@/components/layout";
import {
  AIAssistant,
  AnalyticsCard,
  TrendingCard,
  TasksCard,
  StatsCard,
  NewsCard,
  PostsCard,
  ScheduleCard,
  FinanceCard,
  QuickLinksCard,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen">
      <Background />

      <main className="relative z-10 mx-auto max-w-[1400px] px-4 py-6 lg:px-6">
        <Header />
        <StatusBar />

        {/* Bento Grid */}
        <div className="grid auto-rows-[minmax(100px,auto)] grid-cols-12 gap-3">
          {/* Row 1: AI Assistant + Analytics */}
          <AIAssistant />
          <AnalyticsCard />

          {/* Row 2: Trending + Tasks + Stats */}
          <TrendingCard />
          <TasksCard />
          <StatsCard />

          {/* Row 3: News + Posts + Schedule */}
          <NewsCard />
          <PostsCard />
          <ScheduleCard />

          {/* Row 4: Finance + Quick Links */}
          <FinanceCard />
          <QuickLinksCard />
        </div>

        <Footer />
      </main>
    </div>
  );
}
