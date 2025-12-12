export function getAIResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("analytics") || lower.includes("stats")) {
    return "> ANALYTICS QUERY EXECUTED. SAAS APP: 8.1K VISITORS (+24%). PORTFOLIO: 2.4K. GENERATING DETAILED REPORT...";
  }

  if (lower.includes("task") || lower.includes("todo")) {
    return "> TASK SCAN COMPLETE. 3 PENDING. PRIORITY: PR #234 (TODAY), CLIENT PREP (2H). RESCHEDULE? [Y/N]";
  }

  if (lower.includes("post") || lower.includes("tweet") || lower.includes("social")) {
    return "> SOCIAL DRAFT MODE. TRENDING: #AIagents (124K), #buildinpublic (56K). AWAITING TOPIC INPUT...";
  }

  if (lower.includes("schedule") || lower.includes("calendar")) {
    return "> CALENDAR ACCESS GRANTED. NEXT EVENT: CLIENT SYNC 14:00. 2 DEEP WORK BLOCKS SCHEDULED. MODIFY? [Y/N]";
  }

  if (lower.includes("help")) {
    return "> AVAILABLE COMMANDS: analytics | tasks | schedule | post | permissions | status";
  }

  return "> COMMAND PROCESSED. AWAITING FURTHER INSTRUCTIONS. TYPE 'help' FOR AVAILABLE COMMANDS.";
}

