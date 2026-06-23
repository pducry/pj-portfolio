"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";

type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    ref?: string;
    ref_type?: string;
    pull_request?: { title: string };
  };
};

type ActivityItem = {
  id: string;
  date: string;
  repo: string;
  description: string;
};

function parseEvent(event: GitHubEvent): ActivityItem | null {
  const date = new Date(event.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const repo = event.repo.name.replace("pducry/", "");

  switch (event.type) {
    case "PushEvent": {
      const branch = event.payload.ref?.replace("refs/heads/", "") ?? "main";
      return { id: event.id, date, repo, description: branch };
    }
    case "CreateEvent":
      return {
        id: event.id,
        date,
        repo,
        description: event.payload.ref_type === "repository" ? "new repo" : `branch: ${event.payload.ref ?? "—"}`,
      };
    case "PullRequestEvent":
      return { id: event.id, date, repo, description: event.payload.pull_request?.title ?? "pull request" };
    default:
      return null;
  }
}

export function GitHubActivity() {
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/pducry/events/public?per_page=30")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((events: GitHubEvent[]) => {
        const seenRepos = new Set<string>();
        const items: ActivityItem[] = [];
        for (const event of events) {
          const parsed = parseEvent(event);
          if (!parsed) continue;
          if (seenRepos.has(parsed.repo)) continue;
          seenRepos.add(parsed.repo);
          items.push(parsed);
          if (items.length >= 8) break;
        }
        setActivity(items);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded || !activity.length) return null;

  return (
    <div id="github" className="mt-16 lg:mt-20">
      <Reveal>
        <div className="flex items-center justify-between px-6 py-3 border-t border-b border-border">
          <span className="text-sm text-foreground/30">GitHub</span>
          <a
            href="https://github.com/pducry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/30 hover:text-foreground transition-colors"
          >
            pducry →
          </a>
        </div>
      </Reveal>
      {activity.map((item) => (
        <Reveal key={item.id}>
          <div className="grid items-baseline gap-x-6 border-b border-border px-6 py-5 grid-cols-[120px_1fr] lg:grid-cols-[120px_180px_1fr]">
            <span className="text-sm text-muted tabular-nums whitespace-nowrap">{item.date}</span>
            <span className="hidden lg:block text-sm text-muted whitespace-nowrap truncate">{item.repo}</span>
            <div className="min-w-0">
              <p className="text-base text-foreground/70 truncate">{item.description}</p>
              <p className="text-xs text-muted mt-0.5 lg:hidden">{item.repo}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
