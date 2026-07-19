import type { Workflow } from "@/types/workflow";

export const workflows: Workflow[] = [
  {
    id: "1",
    title: "Create Executive Status Reports with AI",
    slug: "create-executive-status-reports-with-ai",
    description:
      "Turn scattered project updates into a clear, executive-ready status report in minutes. This workflow helps you pull highlights, risks, and next steps from notes, tickets, and Slack threads into a polished narrative your leadership team can scan in under five minutes.",
    category: "Project Management",
    difficulty: "Beginner",
    timeSaved: "Save 2 hours/week",
    audience: [
      "Project managers",
      "Program leads",
      "Engineering managers",
      "Ops leads who report weekly to executives",
    ],
    problem:
      "Weekly status reporting often means copying updates from Jira, Notion, Slack, and email into a slide deck or doc. The result is inconsistent, late, and hard for executives to skim. You spend hours rewriting the same facts instead of focusing on decisions and blockers.",
    solution:
      "Use AI to synthesize raw updates into a fixed executive template: headline progress, key metrics, risks, asks, and next week priorities. You stay the editor—AI does the first draft and formatting so you can ship a consistent report every week.",
    steps: [
      "Collect source material for the week: open tickets, meeting notes, Slack highlights, and any metric snapshots in one folder or doc.",
      "Paste the raw notes into your AI tool with the example prompt below, including your audience and reporting cadence.",
      "Review the draft for accuracy—correct names, dates, numbers, and anything confidential that should not go to leadership.",
      "Tighten the narrative: keep one clear status per workstream, flag risks with owners, and list explicit asks.",
      "Paste the final copy into your status template (Notion, Google Doc, or slides) and share before your standing leadership meeting.",
      "Save the prompt and template as a reusable SOP so the process takes under 20 minutes next week.",
    ],
    prompt: `You are an executive communications assistant. Using the raw project updates below, write a weekly status report for senior leadership.

Structure the report with these sections:
1. Executive summary (3–4 sentences)
2. Progress highlights (bullets, one line each)
3. Metrics / outcomes (only if present in the notes)
4. Risks & blockers (include owner and mitigation if mentioned)
5. Decisions / asks needed this week
6. Priorities for next week

Tone: clear, concise, neutral. No jargon. Flag anything that looks incomplete or contradictory.

Raw updates:
"""
[PASTE YOUR NOTES, TICKET SUMMARIES, AND METRICS HERE]
"""`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "How to write status reports executives actually read",
        type: "Article",
        url: "https://www.atlassian.com/work-management/project-management/status-report",
      },
      {
        title: "RACI and escalation basics for program leads",
        type: "Guide",
        url: "https://www.pmi.org/learning/library/raci-matrix-responsibilities-assignment-chart-8147",
      },
      {
        title: "Claude projects for recurring report drafts",
        type: "Tool",
        url: "https://claude.ai",
      },
    ],
  },
  {
    id: "2",
    title: "Build SOPs with AI",
    slug: "build-sops-with-ai",
    description:
      "Document how work actually gets done—without spending a full afternoon writing process docs from scratch. This workflow turns a rough brain dump or screen recording outline into a clear, reusable standard operating procedure your team can follow and improve.",
    category: "Operations",
    difficulty: "Beginner",
    timeSaved: "Save 4 hours/week",
    audience: [
      "Operations managers",
      "Team leads onboarding new hires",
      "Founders documenting early processes",
      "Anyone who repeats the same task weekly",
    ],
    problem:
      "Critical processes live in one person's head or a messy Google Doc. When that person is out, work stalls. Writing a proper SOP feels heavy, so it never gets done—and every new hire learns by interrupting someone else.",
    solution:
      "Capture the process once as bullet notes or a voice-to-text dump, then use AI to structure it into a consistent SOP format: purpose, owners, steps, tools, edge cases, and success criteria. You review and publish; AI handles the scaffolding.",
    steps: [
      "Pick one high-friction process (e.g. invoice approval, customer onboarding, content publish) and list every step you take from start to finish.",
      "Note tools, inputs, decision points, and what 'done' looks like—including common failure modes.",
      "Feed your notes into the example prompt and ask for an SOP with numbered steps and checklists.",
      "Edit for accuracy: add screenshots placeholders, link real tools, and assign a process owner.",
      "Publish in Notion (or your wiki) with a last-reviewed date and a short 'how to suggest changes' note.",
      "Run the SOP with a teammate once and revise anything that was unclear in practice.",
    ],
    prompt: `You are an operations documentation specialist. Turn the rough process notes below into a clear Standard Operating Procedure (SOP).

Use this structure:
- Title
- Purpose (why this exists)
- Owner / roles involved
- When to use this SOP
- Prerequisites & tools
- Step-by-step procedure (numbered, actionable)
- Decision points / edge cases
- Definition of done
- Related links (placeholders if unknown)

Write for a new teammate who has never done this before. Be specific and concise.

Process notes:
"""
[PASTE YOUR BRAIN DUMP OR OUTLINE HERE]
"""`,
    tools: ["Claude", "Notion"],
    resources: [
      {
        title: "SOP writing checklist for operations teams",
        type: "Guide",
        url: "https://www.process.st/checklist/sop/",
      },
      {
        title: "Notion wiki patterns for process docs",
        type: "Article",
        url: "https://www.notion.com/help/guides/build-a-company-wiki",
      },
      {
        title: "Claude for structured writing",
        type: "Tool",
        url: "https://claude.ai",
      },
    ],
  },
  {
    id: "3",
    title: "Summarize Meetings Automatically",
    slug: "summarize-meetings-automatically",
    description:
      "Walk out of every meeting with decisions, owners, and follow-ups already written down. This workflow converts transcripts or rough notes into a structured summary you can drop into Notion, Slack, or email within minutes.",
    category: "Knowledge Management",
    difficulty: "Beginner",
    timeSaved: "Save 3 hours/week",
    audience: [
      "Product managers",
      "Team leads running standups and syncs",
      "Consultants and agency account managers",
      "Anyone drowning in meeting notes",
    ],
    problem:
      "Meetings end and the only record is a half-finished notes doc. Decisions get forgotten, action items lack owners, and people who missed the call have to re-ask the same questions. Writing a good summary by hand after every call is exhausting.",
    solution:
      "Record or paste the transcript (or detailed notes), then use a fixed AI prompt to extract decisions, action items with owners and due dates, open questions, and a short narrative summary. Share the result in your team channel or wiki as the single source of truth.",
    steps: [
      "Enable transcription in your meeting tool (Zoom, Meet, Teams) or paste notes into a doc immediately after the call.",
      "Copy the transcript into your AI assistant with the example prompt, naming the meeting and attendees if known.",
      "Review action items: confirm owners, dates, and anything that should stay private.",
      "Post the summary to Notion (or your project page) and link it in Slack with a one-line TL;DR.",
      "Forward only the action-item section to assignees if the full transcript is too long.",
      "Reuse the same prompt template so every meeting summary follows the same format.",
    ],
    prompt: `You are a meeting notes assistant. Summarize the transcript below for people who could not attend.

Produce:
1. TL;DR (2–3 sentences)
2. Key discussion points (bullets)
3. Decisions made (bullets; if none, say "None recorded")
4. Action items as a table-style list: Action | Owner | Due date (use "TBD" if missing)
5. Open questions / parking lot
6. Suggested follow-up meeting topics (optional)

Be faithful to the source. Do not invent decisions or owners.

Meeting: [MEETING TITLE]
Attendees: [NAMES]
Transcript:
"""
[PASTE TRANSCRIPT OR NOTES HERE]
"""`,
    tools: ["Notion AI", "ChatGPT"],
    resources: [
      {
        title: "Meeting hygiene: agendas, notes, and follow-through",
        type: "Article",
        url: "https://www.notion.com/blog/meeting-notes",
      },
      {
        title: "Zoom AI Companion & transcript tips",
        type: "Guide",
        url: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057999",
      },
      {
        title: "ChatGPT for recurring note templates",
        type: "Tool",
        url: "https://chatgpt.com",
      },
    ],
  },
];

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((workflow) => workflow.slug === slug);
}