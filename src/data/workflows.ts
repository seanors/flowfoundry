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
    title: "Generate a Project Plan with AI",
    slug: "generate-a-project-plan-with-ai",
    description:
      "Turn a rough project brief into a structured project plan—phases, milestones, sequenced tasks, owners, and dependencies—in a fraction of the time it takes to build one from a blank page. This workflow converts what you already know about a project into a first draft you refine, so kickoff planning takes minutes instead of half a day.",
    category: "Project Management",
    difficulty: "Beginner",
    timeSaved: "Save 3-4 hours per kickoff",
    audience: ["Project managers", "Consultants", "Operations leaders", "Anyone standing up a new initiative"],
    problem:
      "Kicking off a project usually means staring at an empty planning doc. You know the goal, roughly the deadline, and who's involved—but translating that into a phased plan with sequenced tasks, realistic milestones, and dependencies is slow, and the first draft is always the hardest part. Most people either over-engineer it or copy an old plan that doesn't quite fit, then spend the first week reworking it.",
    solution:
      "AI is genuinely good at the first-draft structuring problem. Given your goal, constraints, and team, it proposes a phased breakdown, sequences the work, flags likely dependencies, and surfaces risks you might not have listed. You're not asking it to know your project—you're using it to convert what you already know into a structured starting point you then refine. The judgment stays yours; the blank-page tax disappears.",
    steps: [
      "Gather your inputs: the project goal, hard deadline, key constraints (budget, team size, fixed dates), and the people or roles involved. Two or three sentences each is enough.",
      "Paste your inputs into the prompt below and ask for phases, milestones, and a task breakdown with suggested owners and dependencies.",
      "Pressure-test the sequence—this is where AI guesses. Fix anything out of order or missing a hand-off.",
      "Add the real-world detail only you know: the stakeholder who needs early sign-off, the vendor lead time, the blackout week.",
      "Feed the refined task list back and ask it to lay milestones against your deadline, working backwards.",
      "Export the plan into your PM tool (Notion, Asana, a Gantt) and share it for input.",
    ],
    prompt: `You are helping me draft a project plan. Here is the context:
- Goal: [what the project must deliver]
- Hard deadline: [date]
- Constraints: [budget, team size, fixed dates, tools]
- Team / roles involved: [list]

Produce a structured project plan with:
1. A phased breakdown (name each phase and its objective)
2. Key milestones for each phase
3. A task list under each phase, with a suggested owner role and any dependencies noted
4. The top 5 risks or dependencies I should watch, and why

Sequence the tasks logically and flag anywhere you're making an assumption I should confirm. Keep it concise and scannable.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Getting Started with Projects and Tasks",
        type: "Guide",
        url: "https://www.notion.com/help/guides/getting-started-with-projects-and-tasks",
      },
      {
        title: "Notion for Project Management: Complete Guide + Template",
        type: "Article",
        url: "https://www.notioneverything.com/blog/notion-project-management",
      },
      {
        title: "How To Manage Your Projects in Notion (2025 Tutorial)",
        type: "Video",
        url: "https://www.youtube.com/watch?v=VsDF4yTD5jQ",
      },
    ],
  },
  {
    id: "3",
    title: "Create a Project Charter with AI",
    slug: "create-a-project-charter-with-ai",
    description:
      "Turn a loose idea into a crisp one-page charter—objectives, scope boundaries, stakeholders, and success criteria—that gets everyone aligned before work starts. This workflow drafts the scaffolding so you can focus on the judgment calls: what's actually in scope and which metrics matter.",
    category: "Project Management",
    difficulty: "Beginner",
    timeSaved: "Save 2-3 hours per project",
    audience: ["Project managers", "Consultants", "Operations leaders", "Program leads"],
    problem:
      "The charter is the document everyone agrees they should have and no one wants to write. Skip it and scope creep and stakeholder confusion show up by week three. Write it from scratch and you burn half a day wording objectives and boundaries you haven't fully thought through yet.",
    solution:
      "AI drafts the scaffolding—objective statements, in-scope and out-of-scope boundaries, stakeholder roles, success metrics—from a short brief. You supply the judgment about what's actually in scope and which metrics matter; it handles the phrasing and makes sure you didn't leave a standard section blank. The out-of-scope list, in particular, is the part that saves you later.",
    steps: [
      "Write a short brief: what the project is, why now, who's affected, and the rough timeline.",
      "Prompt the AI to draft a charter using the standard sections in the prompt below.",
      "Sharpen the scope boundaries—make the out-of-scope list explicit, because that's what prevents disputes later.",
      "Set real success criteria: replace any vague metric with something measurable.",
      "Confirm stakeholders and their decision rights.",
      "Circulate for sign-off before kickoff and store it where the team can find it.",
    ],
    prompt: `Draft a one-page project charter from this brief:
- Project: [what it is]
- Business reason / why now: [context]
- Rough timeline: [dates]
- Who's affected: [teams, stakeholders]

Use these sections: Objective (2-3 sentences), In Scope, Out of Scope, Key Stakeholders (with role and decision rights), Success Criteria (measurable), Key Milestones, and Assumptions.

For anything I haven't given you, mark it [NEEDS INPUT] rather than guessing. Keep it to one page and easy to scan.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Getting Started with Projects and Tasks",
        type: "Guide",
        url: "https://www.notion.com/help/guides/getting-started-with-projects-and-tasks",
      },
      {
        title: "Project Management Guides (Category)",
        type: "Guide",
        url: "https://www.notion.com/help/guides/category/project-management",
      },
    ],
  },
  {
    id: "4",
    title: "Summarize Project Meetings with AI",
    slug: "summarize-project-meetings-with-ai",
    description:
      "Turn a messy meeting transcript or your rough notes into a clean summary with decisions, action items, and owners—so nothing gets lost and everyone leaves aligned. This workflow makes the write-up that usually never happens actually happen, in under ten minutes.",
    category: "Project Management",
    difficulty: "Beginner",
    timeSaved: "Save 2-3 hours/week",
    audience: ["Project managers", "Program leads", "Consultants", "Anyone who runs recurring meetings"],
    problem:
      "The meeting ends, everyone scatters, and the decisions live only in people's memories. The follow-up summary is the thing you always mean to write and rarely do—so action items slip, owners are fuzzy, and the same topics resurface next week. Writing it up properly from raw notes takes real time you don't have between back-to-back calls.",
    solution:
      "AI turns a transcript or your rough notes into a structured summary: what was decided, what's outstanding, who owns each action, and what's still open. You review it for accuracy—AI can misattribute a decision—and send. The discipline of a consistent post-meeting summary is what keeps a project's memory intact, and AI removes the friction that stops you doing it.",
    steps: [
      "Capture the raw material: a transcript (from your meeting tool) or your own bullet notes taken during the call.",
      "Paste it into the prompt below, noting who was present so the AI can attribute actions correctly.",
      "Review the draft carefully—check that decisions and owners are attributed to the right people.",
      "Confirm every action item has an owner and, where possible, a due date.",
      "Send the summary to attendees and drop the action items into your task tracker.",
      "Save the format as a template so every meeting gets summarized the same way.",
    ],
    prompt: `Summarize this project meeting for the attendees. People present: [list names/roles].

Structure the summary as:
1. Decisions made (one line each)
2. Action items (each with an owner and a due date if mentioned)
3. Open questions / items still to resolve
4. Key discussion points (brief, only what matters for follow-up)

Attribute decisions and actions to the correct person based on the notes. If an owner or due date is unclear, mark it [TBD] rather than guessing. Keep it concise.

Meeting notes / transcript:
"""
[PASTE TRANSCRIPT OR NOTES HERE]
"""`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Everything You Can Do with Notion AI",
        type: "Guide",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
    ],
  },
  {
    id: "5",
    title: "Analyze Project Risks with AI",
    slug: "analyze-project-risks-with-ai",
    description:
      "Surface the risks you haven't thought of yet, then rank them by likelihood and impact—turning a vague sense of unease into a structured risk register. This workflow uses AI as a brainstorming partner that isn't anchored to your assumptions, so your blind spots become visible.",
    category: "Project Management",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours per project",
    audience: ["Project managers", "Operations leaders", "Consultants", "Risk owners"],
    problem:
      "Risk planning tends to capture the obvious threats and miss the ones that actually derail projects. Under deadline pressure it gets skipped entirely, or reduced to a list of five risks everyone already knew about. The blind spots are, by definition, the ones you won't list on your own.",
    solution:
      "AI is a strong brainstorming partner for the 'what could go wrong' question precisely because it isn't anchored to your assumptions. Given your project's shape, it proposes risks across categories you might not scan—dependencies, resourcing, external factors, technical, adoption—then helps you score and prioritize. You decide what's real and what to mitigate; it widens the net first.",
    steps: [
      "Give the AI your project context: goal, timeline, team, and key dependencies.",
      "Ask for risks grouped by category, so gaps in your own thinking become visible.",
      "Cut the ones that don't apply—over-generation is fine, you're filtering down.",
      "Score each remaining risk on likelihood and impact.",
      "For the top risks, ask for mitigation and contingency options.",
      "Load the result into a RAID log or risk register you review on a regular cadence.",
    ],
    prompt: `Help me build a risk register for this project:
- Goal: [what it delivers]
- Timeline: [dates]
- Team & resources: [who / what]
- Key dependencies: [systems, vendors, other teams]

List potential risks grouped by category (schedule, resourcing, dependencies, technical, external, adoption). For each, give: a one-line description, a likelihood (H/M/L), an impact (H/M/L), and a suggested mitigation.

Push beyond the obvious—include risks I'm likely to overlook. Flag any that depend on assumptions I should verify.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "RAID Log: Track Risks, Assumptions, Issues & Decisions",
        type: "Article",
        url: "https://asana.com/resources/raid-log",
      },
      {
        title: "Project Management Guides (Category)",
        type: "Guide",
        url: "https://www.notion.com/help/guides/category/project-management",
      },
    ],
  },
  {
    id: "6",
    title: "Create a RAID Log with AI",
    slug: "create-a-raid-log-with-ai",
    description:
      "Stand up a complete RAID log—Risks, Assumptions, Issues, and Dependencies—from your project context, with owners, impact levels, and action plans already scaffolded. This workflow gets the single most useful project-governance document started in minutes instead of an afternoon.",
    category: "Project Management",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours per project",
    audience: ["Project managers", "Program leads", "PMO analysts", "Operations leaders"],
    problem:
      "A RAID log is one of the most useful tools a project manager has, but it's tedious to populate from scratch—four categories, each needing descriptions, impact, owners, and action plans. Because the blank version is so much work, teams either skip it or start one and never maintain it, losing the governance visibility it's meant to provide.",
    solution:
      "AI scaffolds all four RAID categories from your project context, giving you a populated first draft: candidate risks, the assumptions you're implicitly making, issues already surfacing, and dependencies across teams and systems. You edit for accuracy and assign real owners. The log doesn't need to be exhaustive on day one—it needs to be started and then maintained, and AI removes the friction of starting.",
    steps: [
      "Provide your project context: goal, timeline, team, dependencies, and anything already going sideways.",
      "Prompt the AI to generate entries across all four RAID categories using the prompt below.",
      "Review each entry for accuracy—remove anything that doesn't apply and add anything obvious it missed.",
      "Assign a specific owner to every item; unowned items fall through the cracks.",
      "Set impact levels and target review dates.",
      "Move it into a spreadsheet or PM tool and schedule a recurring RAID review.",
    ],
    prompt: `Help me create a RAID log for this project:
- Goal: [what it delivers]
- Timeline: [dates]
- Team & stakeholders: [list]
- Known dependencies: [systems, vendors, other teams]
- Anything already going wrong: [issues, if any]

Produce entries in four sections:
- Risks: potential problems that could affect the project (with likelihood + impact)
- Assumptions: things being taken as true that, if wrong, would change the plan
- Issues: things already happening that need managing
- Dependencies: what this project relies on from others

For each entry give a short description, a suggested owner role, and a suggested action or mitigation. Flag assumptions I should validate. Keep entries concise enough to drop into a spreadsheet.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "RAID Log: Track Risks, Assumptions, Issues & Decisions",
        type: "Article",
        url: "https://asana.com/resources/raid-log",
      },
      {
        title: "How to Create and Use a RAID Log for Project Success",
        type: "Guide",
        url: "https://www.smartsheet.com/content/raid-logs",
      },
    ],
  },
  {
    id: "7",
    title: "Prepare Stakeholder Updates with AI",
    slug: "prepare-stakeholder-updates-with-ai",
    description:
      "Tailor the same project update to different audiences—executives, clients, the working team—so each group gets the right altitude and detail without you rewriting from scratch three times. This workflow turns one set of facts into audience-appropriate communications in minutes.",
    category: "Project Management",
    difficulty: "Beginner",
    timeSaved: "Save 2 hours/week",
    audience: ["Project managers", "Consultants", "Client-facing leads", "Program leads"],
    problem:
      "Different stakeholders need the same project news at different altitudes. Executives want the headline and the ask; the client wants progress against commitments; the team wants specifics. Writing three versions of one update is repetitive work, so most people send one generic update that serves no audience well.",
    solution:
      "AI is well suited to re-pitching the same underlying facts for different readers. You give it the raw update once and the audiences you're writing for, and it produces tailored versions—adjusting detail, tone, and emphasis for each. You keep control of the facts and the framing; it handles the re-voicing that would otherwise eat your afternoon.",
    steps: [
      "Write the raw update once: progress, blockers, decisions needed, next steps.",
      "List the audiences you're writing for and what each cares about most.",
      "Prompt the AI to produce a tailored version per audience using the prompt below.",
      "Check each version for anything confidential that shouldn't reach that particular audience.",
      "Adjust tone where needed—especially for client-facing versions.",
      "Send each version through the right channel and log what you communicated.",
    ],
    prompt: `I need to send a project update to multiple audiences. Here are the raw facts:
"""
[PASTE YOUR RAW UPDATE: progress, blockers, decisions needed, next steps]
"""

Produce a tailored version for each of these audiences:
- Executives: headline status, key metrics, risks, and any decision/ask. Short.
- Client: progress against commitments, timeline confidence, next steps. Professional and reassuring but honest.
- Working team: specifics, action items, and owners.

Keep the facts consistent across all versions—only the altitude, detail, and tone should change. Flag anything that looks like it might be sensitive for a given audience.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Notion Project Management Guide: Techniques to Optimize Workflow",
        type: "Article",
        url: "https://everhour.com/blog/notion-project-management/",
      },
      {
        title: "Project Management Guides (Category)",
        type: "Guide",
        url: "https://www.notion.com/help/guides/category/project-management",
      },
    ],
  },
  {
    id: "8",
    title: "Create Project Timelines with AI",
    slug: "create-project-timelines-with-ai",
    description:
      "Convert a task list into a realistic timeline—milestones laid out against your deadline, dependencies respected, and the critical path visible. This workflow works backwards from your target date so you can see immediately whether the plan is achievable.",
    category: "Project Management",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours per project",
    audience: ["Project managers", "Operations leaders", "Consultants", "Delivery leads"],
    problem:
      "Turning a list of tasks into a credible timeline is fiddly. You have to sequence dependencies, estimate durations, work around fixed dates, and figure out whether the whole thing actually fits before the deadline. Done by hand it's slow, and the first version usually turns out to be impossible once you map it against the real calendar.",
    solution:
      "AI can sequence tasks, apply dependencies, and lay them against a deadline working backwards—showing you fast whether the target is realistic and where the critical path runs. You provide the durations and constraints it can't know; it handles the sequencing logic and surfaces the crunch points. Treat its estimates as a starting draft you calibrate with your team's real velocity.",
    steps: [
      "Start with your task list (the plan from your project-plan workflow works well as input).",
      "Add durations and any fixed dates or constraints you know.",
      "Prompt the AI to sequence tasks and lay them against your deadline, working backwards.",
      "Review the critical path—the tasks that, if they slip, move the end date.",
      "Adjust durations with your team's real velocity, not optimistic guesses.",
      "Move the timeline into a Gantt or timeline view in your PM tool and validate with owners.",
    ],
    prompt: `Help me build a project timeline. Here is my task list with durations:
"""
[PASTE TASKS, EACH WITH AN ESTIMATED DURATION AND ANY KNOWN DEPENDENCIES]
"""

- Target end date: [date]
- Fixed dates / constraints: [holidays, blackout periods, hard deadlines]

Produce:
1. A sequenced timeline showing start and end for each task, working backwards from the target date
2. Milestones grouped by phase
3. The critical path (the tasks that directly determine the end date)
4. A clear flag if the work does not fit before the target date, and where the crunch is

State any assumptions you're making about sequencing or duration so I can correct them.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Notion Project Management Guide: Techniques to Optimize Workflow",
        type: "Article",
        url: "https://everhour.com/blog/notion-project-management/",
      },
      {
        title: "Getting Started with Projects and Tasks",
        type: "Guide",
        url: "https://www.notion.com/help/guides/getting-started-with-projects-and-tasks",
      },
    ],
  },
  {
    id: "9",
    title: "Prioritize a Project Backlog with AI",
    slug: "prioritize-a-project-backlog-with-ai",
    description:
      "Take a sprawling, unranked backlog and get a defensible prioritization—by value, effort, and urgency—with the reasoning made explicit so you can defend the order to stakeholders. This workflow turns 'everything is important' into a ranked, actionable list.",
    category: "Project Management",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours per planning cycle",
    audience: ["Project managers", "Product owners", "Operations leaders", "Team leads"],
    problem:
      "A backlog left unranked becomes a wish list where everything is labeled important. Prioritizing it means weighing value against effort against urgency across dozens of items—cognitively heavy work that's easy to keep deferring. The result is teams working on whatever's loudest rather than what matters most.",
    solution:
      "AI can apply a consistent prioritization framework (value vs. effort, MoSCoW, RICE) across every backlog item at once and, crucially, explain its reasoning—so you get a ranked list you can defend rather than a black-box order. You bring the strategic context about what 'value' means for your project; it does the consistent scoring and surfaces trade-offs you can then adjust.",
    steps: [
      "Paste your backlog items into the AI, with any value or effort context you already have.",
      "Choose a prioritization framework and ask the AI to apply it consistently across all items.",
      "Ask it to show its reasoning per item, not just a rank—this is what makes the order defensible.",
      "Override where your strategic context differs from its scoring; the framework serves you, not the reverse.",
      "Sanity-check the top of the list against your actual capacity for the cycle.",
      "Load the prioritized order into your backlog tool and use the reasoning notes when stakeholders push back.",
    ],
    prompt: `Help me prioritize this project backlog. Here are the items:
"""
[PASTE BACKLOG ITEMS, WITH ANY VALUE / EFFORT NOTES YOU HAVE]
"""

Context on what "value" means for this project: [strategic goals, who benefits, deadlines].

Apply a [RICE / value-vs-effort / MoSCoW] framework consistently across every item. For each item give: the score or category, and a one-line reason. Then produce a ranked list from highest to lowest priority.

Call out any trade-offs or close calls where two items are hard to separate, and flag where you had to assume something about value or effort.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "The Minimalist Approach to a Complete PM System in Notion",
        type: "Article",
        url: "https://medium.com/@LearnChangeDo/the-minimalist-approach-to-creating-a-complete-project-management-system-in-notion-that-actually-2165bdf29daf",
      },
      {
        title: "Project Management Guides (Category)",
        type: "Guide",
        url: "https://www.notion.com/help/guides/category/project-management",
      },
    ],
  },
  {
    id: "10",
    title: "Run Project Retrospectives with AI",
    slug: "run-project-retrospectives-with-ai",
    description:
      "Turn raw retro input—what went well, what didn't, scattered team comments—into themed insights and concrete, owned action items that actually change how the next project runs. This workflow makes retrospectives produce change instead of just venting.",
    category: "Project Management",
    difficulty: "Beginner",
    timeSaved: "Save 2 hours per retro",
    audience: ["Project managers", "Scrum masters", "Team leads", "Operations leaders"],
    problem:
      "Retrospectives often generate a lot of comments and very little change. The raw input is messy and repetitive, themes are hard to spot in the moment, and the meeting ends without concrete, owned actions—so the same problems recur next project. Synthesizing it all into something actionable is real work that usually gets skipped.",
    solution:
      "AI clusters scattered retro input into themes, separates signal from one-off gripes, and helps convert insights into specific action items with owners. You facilitate the human conversation and make the calls on what to change; AI handles the synthesis that turns a wall of sticky notes into a short list of things the team will actually do differently.",
    steps: [
      "Collect the raw retro input: went-well, didn't-go-well, and any open comments from the team.",
      "Paste it into the prompt below and ask the AI to cluster it into themes.",
      "Review the themes with the team—confirm which are real patterns versus one-offs.",
      "Ask the AI to turn the top themes into specific, owned action items.",
      "Assign each action an owner and a check-in point so it doesn't evaporate.",
      "Carry the actions into the next project's kickoff so the retro actually closes the loop.",
    ],
    prompt: `Help me synthesize this project retrospective. Here is the raw input from the team:
"""
[PASTE WENT-WELL / DIDN'T-GO-WELL / COMMENTS]
"""

Do the following:
1. Cluster the input into themes, separating recurring patterns from one-off comments
2. For each major theme, summarize what the team is really saying in one or two lines
3. Propose 3-5 specific, actionable improvements for the next project, each phrased as something a person could own
4. Note where feedback conflicts or where you'd want more input before acting

Keep it constructive and concrete—avoid vague advice like "communicate better."`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "Notion for Project Management: Complete Guide + Template",
        type: "Article",
        url: "https://www.notioneverything.com/blog/notion-project-management",
      },
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
    ],
  },
{
    id: "11",
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
    id: "12",
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
  }
];

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((workflow) => workflow.slug === slug);
}
