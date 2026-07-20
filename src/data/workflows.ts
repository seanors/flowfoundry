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
      "Turn a process that lives in someone's head into a clear, step-by-step standard operating procedure anyone on the team can follow. This workflow drafts a structured SOP from a walkthrough of how you actually do the task, so documenting tribal knowledge stops being the chore you keep postponing.",
    category: "Knowledge Management",
    difficulty: "Beginner",
    timeSaved: "Save 2-3 hours per SOP",
    audience: ["Operations leaders", "Team leads", "Consultants", "Anyone documenting a repeatable process"],
    problem:
      "Every team has processes that need to happen the same way every time, but they live in people's heads instead of on paper. When the person who knows the process is out—or leaves—you get inconsistency, mistakes, and single points of failure. Writing SOPs is the obvious fix and the thing nobody does, because turning a task you do on autopilot into clear written steps is slow and tedious.",
    solution:
      "AI is well suited to converting a rough walkthrough into a structured SOP. You describe how you actually do the task—messily, in whatever order it comes out—and AI organizes it into purpose, scope, prerequisites, numbered steps, and edge cases. The defining quality of a good SOP is specificity, so you review to make sure each step is exact enough that a new person could follow it and get the same result.",
    steps: [
      "Talk or type through how you actually perform the task, start to finish—don't worry about order or polish.",
      "Paste that into the prompt below and ask AI to structure it into a standard SOP format.",
      "Check that each step is specific: exact tools, exact order, what 'done' looks like at each stage.",
      "Add the edge cases and failure points—what to do when something goes wrong is what separates a real SOP from a happy-path checklist.",
      "Have someone unfamiliar with the task read it and flag anything ambiguous.",
      "Store it in your knowledge base with a version date and an owner responsible for keeping it current.",
    ],
    prompt: `Turn my rough walkthrough into a clear standard operating procedure (SOP).

Here's how I do the task:
"""
[DESCRIBE THE PROCESS IN WHATEVER ORDER IT COMES OUT]
"""

Structure it as:
1. Purpose (what this SOP achieves, one or two sentences)
2. Scope / when to use it
3. Prerequisites (tools, access, inputs needed)
4. Step-by-step procedure (numbered, specific enough that a new hire could follow it)
5. Common issues and what to do about them
6. Definition of done

Make each step concrete—name exact tools and expected outcomes. Where my walkthrough is vague or missing a step, mark it [NEEDS DETAIL] rather than inventing it.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "How to write a standard operating procedure (SOP): guide with examples",
        type: "Guide",
        url: "https://www.mintlify.com/library/how-to-write-standard-operating-procedure",
      },
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
    id: "12",
    title: "Create Durable Meeting Documentation with AI",
    slug: "create-durable-meeting-documentation-with-ai",
    description:
      "Turn recurring meetings into a maintained knowledge record—decisions, rationale, and context that stay useful months later—rather than notes that rot in someone's inbox. This workflow builds the institutional memory layer, distinct from a quick post-meeting recap.",
    category: "Knowledge Management",
    difficulty: "Intermediate",
    timeSaved: "Save 2 hours/week",
    audience: ["Operations leaders", "Program managers", "Team leads", "Knowledge managers"],
    problem:
      "Meeting notes usually capture what was said but not what matters later: why a decision was made, what was rejected and why, what context future readers will need. Six months on, no one can reconstruct the reasoning, so the same debates repeat. Notes scattered across tools and formats never become a searchable record.",
    solution:
      "This is about capture for the long term, not the quick recap. AI restructures raw meeting content into durable documentation: the decision, the reasoning behind it, alternatives considered, and links to related context—formatted consistently so it becomes part of a searchable knowledge base. You ensure the 'why' is preserved, which is the part that makes documentation valuable a year from now.",
    steps: [
      "Collect the raw material: transcript or notes, plus any decisions or documents referenced.",
      "Prompt AI to extract not just what was decided but why, and what alternatives were weighed.",
      "Confirm the reasoning is captured accurately—this is the part that's easy to lose and expensive to lose.",
      "Link the entry to related decisions and documents so it sits in context, not isolation.",
      "File it in your knowledge base using a consistent template so entries are comparable and searchable.",
      "Tag it so future readers can actually find it when the topic resurfaces.",
    ],
    prompt: `Turn this meeting content into durable documentation for our knowledge base—something useful to someone reading it six months from now, not just a recap.

Notes / transcript:
"""
[PASTE NOTES OR TRANSCRIPT]
"""

Produce:
1. Summary of what this meeting was about (2-3 sentences)
2. Decisions made, and for each: the reasoning behind it and any alternatives that were considered and rejected
3. Context a future reader would need to understand these decisions
4. Open questions and what would resolve them
5. Suggested tags/topics for filing

Prioritize capturing the "why" behind decisions. If the reasoning isn't clear from the notes, flag it as [REASONING NOT CAPTURED] so I can add it.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Building a Second Brain in Notion (PARA + Forgetting Curve)",
        type: "Article",
        url: "https://medium.com/design-bootcamp/building-a-second-brain-in-notion-5cd5da59da01",
      },
    ],
  },
{
    id: "13",
    title: "Organize Messy Notes with AI",
    slug: "organize-messy-notes-with-ai",
    description:
      "Turn a pile of scattered, half-finished notes into a structured, categorized, and findable set of knowledge—without spending a weekend on it. This workflow uses AI to impose structure on the chaos so your notes become an asset instead of a graveyard.",
    category: "Knowledge Management",
    difficulty: "Beginner",
    timeSaved: "Save 2-3 hours",
    audience: ["Knowledge workers", "Consultants", "Students", "Anyone with a notes backlog"],
    problem:
      "Notes accumulate faster than anyone organizes them: fragments in different apps, half-thoughts, meeting scraps, links with no context. The pile grows until it's easier to search the web again than to find what you already wrote down. The organizing work is boring and open-ended, so it never happens.",
    solution:
      "AI can read a dump of unstructured notes and impose order: clustering by theme, suggesting categories, flagging duplicates, and surfacing the notes that are actually actionable versus reference. You keep the judgment about what matters; AI does the sorting pass that turns a graveyard back into a usable system, following a structure like PARA if you want one.",
    steps: [
      "Gather your scattered notes into one place—paste them in, however messy.",
      "Ask AI to cluster them by theme and suggest a category structure.",
      "Review the categories; adjust to match how you actually think about your work.",
      "Have it flag duplicates, outdated notes, and anything that's actually an action item hiding in reference notes.",
      "Pull the action items into your task system; file the rest under the agreed structure.",
      "Set a light recurring habit (weekly or monthly) to run the same pass so the backlog doesn't rebuild.",
    ],
    prompt: `Help me organize these messy, unstructured notes.

Notes:
"""
[PASTE ALL YOUR SCATTERED NOTES]
"""

Do the following:
1. Cluster them into themes and propose a clear category structure
2. Within each category, list the notes that belong there (summarize long ones)
3. Flag duplicates and notes that look outdated
4. Separately, pull out anything that's actually an action item disguised as a note
5. Note anything too fragmentary to categorize, so I can decide whether to keep it

Keep the structure simple and practical—no more categories than I actually need.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "How to Build a Second Brain in Notion",
        type: "Guide",
        url: "https://fortelabs.com/blog/how-to-build-a-second-brain-in-notion/",
      },
      {
        title: "Second Brain / PKM Templates (Category)",
        type: "Template",
        url: "https://www.notion.com/templates/category/second-brain",
      },
    ],
  },
{
    id: "14",
    title: "Summarize Long Documents with AI",
    slug: "summarize-long-documents-with-ai",
    description:
      "Get the substance of a long report, contract, or research paper in minutes—with the key points, decisions required, and details that matter to you specifically, not a generic abstract. This workflow makes AI summarize for your purpose, not just compress the text.",
    category: "Knowledge Management",
    difficulty: "Beginner",
    timeSaved: "Save 1-2 hours per document",
    audience: ["Consultants", "Operations leaders", "Analysts", "Anyone drowning in reading"],
    problem:
      "The reading pile is endless: reports, contracts, decks, research, long email threads. Reading every word to find the handful of points relevant to you is a poor use of time, but skimming means missing the thing that mattered. A generic summary often smooths over exactly the detail you needed.",
    solution:
      "AI summarizes well when you tell it what you're reading for. Instead of a generic abstract, you specify your role and the decision you're trying to make, and it surfaces the points that matter to you, flags what needs your action, and preserves the specifics (numbers, dates, obligations) that generic summaries drop. You still read the critical sections in full—AI tells you which ones those are.",
    steps: [
      "Paste the document (or the key sections) into your AI tool.",
      "Tell it who you are and what decision or question you're reading for—this is what makes the summary useful.",
      "Ask for a layered summary: headline, key points, and anything requiring your action.",
      "Check the specifics it surfaced—numbers, dates, obligations—against the source before acting on them.",
      "Read in full only the sections it flags as critical or ambiguous.",
      "Save the summary alongside the document so you don't re-read it next time.",
    ],
    prompt: `Summarize this document for my purpose.

My role: [e.g. ops manager reviewing a vendor contract]
What I'm reading for: [the decision or question you need answered]

Document:
"""
[PASTE DOCUMENT OR KEY SECTIONS]
"""

Give me:
1. A one-paragraph headline summary
2. The key points that matter for my purpose specifically
3. Anything that requires a decision or action from me
4. Important specifics (numbers, dates, obligations, deadlines) stated exactly
5. Which sections I should read in full myself, and why

If anything is ambiguous or seems important but unclear, flag it rather than smoothing over it.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Everything You Can Do with Notion AI",
        type: "Guide",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
    ],
  },
{
    id: "15",
    title: "Build an Internal Knowledge Base with AI",
    slug: "build-an-internal-knowledge-base-with-ai",
    description:
      "Design and populate a knowledge base that people actually use—the right structure, the articles that matter most, and a consistent format—instead of an empty wiki that everyone ignores. This workflow uses AI to plan the architecture and draft the first articles from what your team already knows.",
    category: "Knowledge Management",
    difficulty: "Intermediate",
    timeSaved: "Save 4-6 hours of setup",
    audience: ["Operations leaders", "Knowledge managers", "Team leads", "Founders scaling a team"],
    problem:
      "Most internal wikis fail the same way: someone sets up an empty structure, a few people add scattered pages, nothing is consistent, search returns nothing useful, and everyone goes back to asking in Slack. The hard parts—deciding the architecture and writing the first critical articles—are exactly where momentum dies.",
    solution:
      "AI helps with both hard parts. It can propose a knowledge-base architecture based on what your team actually needs to look up, then draft initial articles from rough input so the base launches with real content instead of empty shells. You bring the knowledge of what your team asks about most; AI structures it and does the drafting, so the base is useful on day one.",
    steps: [
      "List the questions your team asks repeatedly and the topics people always need to look up.",
      "Ask AI to propose a knowledge-base structure organized around those needs.",
      "Prioritize the handful of articles that would deflect the most repeat questions.",
      "For each, give AI rough input and have it draft a consistent, well-structured article.",
      "Review for accuracy and add the specifics only your team knows.",
      "Launch with those core articles, assign owners, and add new articles as questions recur.",
    ],
    prompt: `Help me design and start an internal knowledge base.

What my team asks about / needs to look up most:
"""
[LIST RECURRING QUESTIONS AND TOPICS]
"""

First, propose a knowledge-base structure (categories and the key articles under each), organized around what people actually need to find—not an org chart.

Then, identify the 5 articles that would deflect the most repeat questions, and for the first one, draft a clear article from this rough input:
"""
[ROUGH INPUT FOR THE FIRST ARTICLE]
"""

Use a consistent article format (purpose, steps/answer, related links). Flag where you'd need more detail from me.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "The Ultimate Notion Guide: From Beginner to Pro",
        type: "Article",
        url: "https://www.morgen.so/blog-posts/notion-tips-and-tricks",
      },
    ],
  },
{
    id: "16",
    title: "Create FAQs with AI",
    slug: "create-faqs-with-ai",
    description:
      "Turn the questions your team or customers keep asking into a clear, well-organized FAQ that actually answers them—drafted from your support threads, docs, and Slack history. This workflow deflects repeat questions by capturing the answers once, properly.",
    category: "Knowledge Management",
    difficulty: "Beginner",
    timeSaved: "Save 2-3 hours",
    audience: ["Operations leaders", "Support leads", "Product managers", "Founders"],
    problem:
      "The same questions come in over and over—from customers, from new hires, from other teams—and answering them individually eats hours every week. Writing a good FAQ would stop the churn, but pulling together the real questions and wording clear answers is work that keeps sliding down the list.",
    solution:
      "AI can mine your existing support threads, docs, and chat history for the questions that actually recur, cluster near-duplicates, and draft clear answers you refine. It's fast at the tedious parts—grouping variations of the same question, keeping tone consistent—so you get a real FAQ from material you already have, rather than inventing questions from scratch.",
    steps: [
      "Gather raw sources: support tickets, recurring Slack questions, onboarding questions, existing scattered answers.",
      "Ask AI to identify the genuinely recurring questions and cluster variants of the same one.",
      "Review the list—confirm these are the real repeat questions, add any obvious ones it missed.",
      "Have it draft clear, consistent answers; supply the correct details where it can't know them.",
      "Organize the FAQ by topic so people can scan to their question.",
      "Publish it where people actually ask, and update it whenever a new question starts recurring.",
    ],
    prompt: `Help me build an FAQ from real questions.

Here are raw sources (support threads, repeat questions, existing answers):
"""
[PASTE TICKETS, SLACK QUESTIONS, ETC.]
"""

Do the following:
1. Identify the questions that genuinely recur, and group variants of the same question together
2. For each, draft a clear, concise answer in a consistent tone
3. Organize the questions into logical topic groups
4. Flag any question where you don't have enough information to answer accurately, so I can fill it in

Keep answers practical and jargon-free. Don't invent answers—mark gaps as [NEEDS ANSWER].`,
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
    id: "17",
    title: "Create Onboarding Documentation with AI",
    slug: "create-onboarding-documentation-with-ai",
    description:
      "Build a structured onboarding guide that gets new hires productive fast—covering what they need, in what order, without you rewriting it for every new person. This workflow turns scattered onboarding knowledge into a repeatable first-weeks plan.",
    category: "Knowledge Management",
    difficulty: "Beginner",
    timeSaved: "Save 3-4 hours per role",
    audience: ["Operations leaders", "Team leads", "HR / people teams", "Managers hiring their first reports"],
    problem:
      "Onboarding usually happens ad hoc: the new hire gets a firehose of Slack messages, a few links, and whatever the busy manager remembers to mention. Nothing is sequenced, key context is missed, and the new person spends their first weeks unsure what to do. Writing proper onboarding docs takes time that hiring managers rarely have in the moment.",
    solution:
      "AI can structure onboarding knowledge into a sequenced plan: what the new hire needs in week one versus later, which systems and people to know, and the context that usually only comes up by accident. You provide the role's realities; AI organizes them into a first-30-days structure a new person can actually follow, and that you reuse for the next hire.",
    steps: [
      "Brain-dump everything a new person in this role needs to know, access, and do—unordered is fine.",
      "Ask AI to sequence it into a logical onboarding plan (day one, week one, first 30 days).",
      "Check the sequencing—make sure prerequisites come before the things that depend on them.",
      "Add the tacit context: who to ask about what, the unwritten norms, the things that trip new people up.",
      "Format it as a checklist the new hire can work through independently.",
      "Reuse and refine it with each new hire so it gets sharper over time.",
    ],
    prompt: `Help me create onboarding documentation for a new hire.

Role: [title and what they'll do]
Everything they need to know / access / do (unordered):
"""
[BRAIN-DUMP: systems, people, tasks, context, norms]
"""

Structure this into an onboarding plan:
1. Before day one / day one essentials (access, accounts, key intros)
2. Week one priorities
3. First 30 days (ramp goals and key tasks)
4. Key people to know and what to go to each for
5. A simple checklist the new hire can follow independently

Sequence things so prerequisites come first. Flag anything that looks missing for a role like this so I can add it.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Getting Started with Projects and Tasks",
        type: "Guide",
        url: "https://www.notion.com/help/guides/getting-started-with-projects-and-tasks",
      },
    ],
  },
{
    id: "18",
    title: "Extract Insights from PDFs with AI",
    slug: "extract-insights-from-pdfs-with-ai",
    description:
      "Pull the specific data, findings, or answers you need out of dense PDFs—reports, research, financial statements—without reading all fifty pages. This workflow turns static documents into something you can interrogate directly.",
    category: "Knowledge Management",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours per document",
    audience: ["Analysts", "Consultants", "Operations leaders", "Researchers"],
    problem:
      "Critical information is often locked in long PDFs: a figure buried on page 40, a clause in a contract, a finding in a research report. Finding it means scrolling, Ctrl-F guessing at keywords, and hoping you didn't miss a relevant mention elsewhere. It's slow, and it's easy to miss context that changes what a number means.",
    solution:
      "AI turns a static PDF into something you can question directly. You ask for the specific data or answer you need, and it locates it, pulls the surrounding context, and can compare figures across sections. You verify anything you'll act on against the source—AI can misread a table—but the search-and-extract time collapses from an hour to minutes.",
    steps: [
      "Load the PDF into an AI tool that accepts document uploads (Claude and ChatGPT both do).",
      "Ask specific questions rather than 'summarize'—name the data point, clause, or finding you need.",
      "Ask it to quote the exact source text and location for anything you'll rely on.",
      "Verify critical figures against the original—especially anything from tables, which AI can misread.",
      "Ask follow-ups to compare or cross-reference across sections.",
      "Save the extracted answers with their source locations so the work is reusable and auditable.",
    ],
    prompt: `I've attached a PDF. Help me extract what I need from it.

What I'm looking for:
"""
[NAME THE SPECIFIC DATA, FINDINGS, CLAUSES, OR ANSWERS YOU NEED]
"""

For each item:
1. Give me the answer
2. Quote the exact supporting text and note where in the document it appears (page/section)
3. Add any surrounding context that changes how I should interpret it

If a figure comes from a table, flag it so I know to double-check it. If something I asked for isn't in the document, say so clearly rather than guessing.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "Everything You Can Do with Notion AI",
        type: "Guide",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
    ],
  },
{
    id: "19",
    title: "Build Decision Logs with AI",
    slug: "build-decision-logs-with-ai",
    description:
      "Capture the decisions your team makes—what was decided, why, and by whom—in a consistent, searchable log so you stop relitigating settled questions. This workflow makes decision-recording fast enough that it actually happens.",
    category: "Knowledge Management",
    difficulty: "Beginner",
    timeSaved: "Save 1-2 hours/week",
    audience: ["Operations leaders", "Program managers", "Team leads", "Founders"],
    problem:
      "Teams make dozens of decisions and record almost none of them. Months later no one remembers why a choice was made, so the same debate reopens, or a settled decision quietly gets reversed by someone who wasn't there. The reasoning—the most valuable part—evaporates because logging it in the moment feels like overhead.",
    solution:
      "AI makes decision-logging low-effort enough to actually sustain. From a short description or a meeting excerpt, it produces a clean, consistent decision-log entry: the decision, the context, the reasoning, alternatives considered, and the owner. Because it's fast and consistent, the log gets kept—and a kept decision log is one of the highest-leverage knowledge assets a team can have.",
    steps: [
      "When a decision is made, capture it however you can—a few sentences or the relevant meeting excerpt.",
      "Feed it to AI with the prompt below to produce a structured decision-log entry.",
      "Confirm the reasoning and alternatives are captured accurately—that's the part worth preserving.",
      "Record the owner and the date, and link any supporting documents.",
      "File it in a consistent decision-log format so entries are searchable and comparable.",
      "When an old decision resurfaces, check the log first before reopening the debate.",
    ],
    prompt: `Turn this into a clean decision-log entry.

What happened / what was decided:
"""
[DESCRIBE THE DECISION, OR PASTE THE RELEVANT MEETING EXCERPT]
"""

Produce a structured entry with:
1. Decision (stated clearly in one or two sentences)
2. Date and decision owner (mark [TBD] if not given)
3. Context (why this came up)
4. Reasoning (why this option was chosen)
5. Alternatives considered and why they were rejected
6. Any conditions or review date attached to the decision

Keep it concise and consistent. If the reasoning or alternatives aren't clear from what I gave you, flag that rather than inventing them.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Building a Second Brain in Notion (PARA + Forgetting Curve)",
        type: "Article",
        url: "https://medium.com/design-bootcamp/building-a-second-brain-in-notion-5cd5da59da01",
      },
    ],
  },
{
    id: "20",
    title: "Run Structured Research with AI",
    slug: "run-structured-research-with-ai",
    description:
      "Go from a research question to an organized, synthesized brief—key findings, sources, and open questions—instead of a pile of open tabs. This workflow is about synthesis and structure, not just asking AI a question and taking the first answer.",
    category: "Knowledge Management",
    difficulty: "Intermediate",
    timeSaved: "Save 3-4 hours per topic",
    audience: ["Consultants", "Analysts", "Researchers", "Anyone who briefs others"],
    problem:
      "Researching a topic properly means gathering from many sources, weighing them, and synthesizing—not just reading the first few results. Done ad hoc it turns into thirty open tabs and a vague sense of the answer, with no structured output and no record of what you found or where. And AI answers taken at face value can be confidently wrong.",
    solution:
      "Used well, AI is a research accelerator: it can structure your inquiry, synthesize across sources, organize findings, and surface what you still don't know. The discipline is treating it as a synthesis partner, not an oracle—asking for sources, cross-checking claims you'll rely on, and keeping the open questions visible. The output is a real brief you can act on or hand off, not a chat log.",
    steps: [
      "Frame the research question precisely and note what decision it serves.",
      "Ask AI to map the sub-questions worth answering before diving in.",
      "Gather findings—using AI with web search, or feeding it sources you've collected.",
      "Have it synthesize into themes with sources noted, and keep an explicit 'what we still don't know' section.",
      "Verify any claim you'll actually rely on against a primary source—don't take confident answers on trust.",
      "Format the result as a structured brief with findings, sources, and open questions.",
    ],
    prompt: `Help me research this topic in a structured way.

Research question: [your question]
What decision or output this serves: [context]

First, break the question into the sub-questions worth answering.

Then synthesize what you know (or what's in the sources below) into:
1. Key findings, organized by theme, with sources noted for each
2. Points where sources disagree or evidence is weak
3. What I still don't know / what needs primary verification
4. A short bottom-line answer to my original question, with confidence noted

Sources (if I'm providing them):
"""
[PASTE SOURCES, OR SAY "USE WEB SEARCH"]
"""

Flag any claim I should verify before relying on it. Don't present uncertain things as settled.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "How to Build a Second Brain in Notion",
        type: "Guide",
        url: "https://fortelabs.com/blog/how-to-build-a-second-brain-in-notion/",
      },
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
    ],
  },
{
    id: "21",
    title: "Manage Your Email with AI",
    slug: "manage-your-email-with-ai",
    description:
      "Cut the time your inbox eats each day—triage what matters, draft replies in your voice, and turn long threads into clear next actions. This workflow keeps you in control of what gets sent while AI handles the reading and first-draft writing.",
    category: "Productivity",
    difficulty: "Beginner",
    timeSaved: "Save 3-5 hours/week",
    audience: ["Knowledge workers", "Managers", "Consultants", "Anyone with a heavy inbox"],
    problem:
      "Email is where the workday quietly disappears. Reading long threads to find the one thing that needs a decision, re-writing the same kinds of replies, and figuring out what actually needs action all add up to hours a week. The volume makes it hard to tell the urgent from the noise, so important messages get buried.",
    solution:
      "AI is well suited to the reading-and-drafting parts of email. It can summarize a long thread down to the decision it's asking for, draft a reply in your tone that you edit before sending, and pull action items out of a crowded inbox. You stay the sender—AI never sends on its own—so you keep judgment and control while offloading the slow parts.",
    steps: [
      "Pick your highest-friction email task: triaging, replying, or extracting actions from threads.",
      "For long threads, ask AI to summarize what's being asked and what a good response would address.",
      "Have it draft a reply in your voice; give it a sample of your writing so the tone matches.",
      "Edit every draft before sending—AI gets facts and commitments wrong, and those are on you.",
      "For inbox triage, paste subject lines and ask it to group by urgency and surface what needs action.",
      "Turn recurring reply types into saved prompts so common emails take seconds.",
    ],
    prompt: `Help me handle this email efficiently.

Here's the thread:
"""
[PASTE THE EMAIL OR THREAD]
"""

Do the following:
1. Summarize what this thread is actually asking me for, in 1-2 sentences
2. List any action items or decisions it needs from me
3. Draft a reply in a [professional but warm / concise / formal] tone that addresses the key points

Keep the draft tight. Flag anything where you're unsure of a fact or commitment so I can correct it before I send. Do not invent details I haven't given you.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "8 Notion Tips and Tricks for a More Powerful Workspace",
        type: "Article",
        url: "https://zapier.com/blog/notion-tips/",
      },
      {
        title: "Everything You Can Do with Notion AI",
        type: "Guide",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
    ],
  },
{
    id: "22",
    title: "Create Daily Plans with AI",
    slug: "create-daily-plans-with-ai",
    description:
      "Turn a chaotic to-do list and a full calendar into a realistic plan for the day—time-blocked, prioritized, and honest about what actually fits. This workflow helps you start the day with a plan instead of a pile.",
    category: "Productivity",
    difficulty: "Beginner",
    timeSaved: "Save 30-45 minutes/day",
    audience: ["Knowledge workers", "Managers", "Consultants", "Anyone juggling many demands"],
    problem:
      "Most people start the day facing a long task list and a calendar full of meetings, with no clear sense of what's realistic. The result is an over-ambitious plan that collapses by mid-morning, or no plan at all and a reactive day. Figuring out what actually fits around your commitments takes mental energy you'd rather spend on the work.",
    solution:
      "AI can take your tasks, your meetings, and your priorities and produce a realistic time-blocked day—one that respects how many hours you actually have between meetings and flags when you've planned more than fits. You bring the knowledge of what matters and your energy patterns; it does the fitting and sequencing so you begin the day with a plan you can trust.",
    steps: [
      "Dump your task list and today's meetings into the AI, with rough time estimates if you have them.",
      "Tell it your priorities and any hard deadlines for today.",
      "Ask for a realistic time-blocked plan that works around your meetings.",
      "Have it flag honestly if you've got more than fits—better to cut now than fail at 3pm.",
      "Adjust for your energy: hard work in your peak hours, admin in the troughs.",
      "At day's end, roll unfinished items into tomorrow's plan with the same prompt.",
    ],
    prompt: `Help me plan my day realistically.

My tasks (with rough time estimates where I have them):
"""
[PASTE TASKS]
"""

My meetings/commitments today:
"""
[PASTE CALENDAR / FIXED BLOCKS]
"""

Top priorities / hard deadlines for today: [list]
My peak focus hours: [e.g. 9-11am]

Produce a realistic time-blocked plan that works around my meetings. Put demanding work in my peak hours. If I've listed more than realistically fits, tell me clearly and suggest what to cut or move—don't just cram it all in.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "Personal Productivity System (Template)",
        type: "Template",
        url: "https://www.notion.com/templates/personal-productivity-system-143",
      },
      {
        title: "How to Setup Notion: What Should You Do First?",
        type: "Guide",
        url: "https://kalynbrooke.com/digital/notion/how-to-setup-notion/",
      },
    ],
  },
{
    id: "23",
    title: "Run Weekly Reviews with AI",
    slug: "run-weekly-reviews-with-ai",
    description:
      "Do a proper weekly review in fifteen minutes—reflect on what got done, surface what slipped, and set focused priorities for the week ahead. This workflow makes the habit sustainable by removing the friction that usually kills it.",
    category: "Productivity",
    difficulty: "Beginner",
    timeSaved: "Save 1 hour/week",
    audience: ["Knowledge workers", "Managers", "Consultants", "Anyone trying to stay intentional"],
    problem:
      "The weekly review is the habit everyone knows works and almost no one sustains. Facing a blank page on a Friday afternoon to reconstruct the week, notice what slipped, and plan ahead takes energy that's usually gone by then. So it gets skipped, and weeks blur together with no course-correction.",
    solution:
      "AI lowers the activation energy. You dump the raw material of your week—what you did, what's still open, what's coming—and it structures the reflection: wins, what slipped and why, patterns worth noticing, and a focused set of priorities for next week. You bring the honesty; it does the organizing that makes a fifteen-minute review actually happen.",
    steps: [
      "Brain-dump your week: what you finished, what stalled, what's still open, what's coming up.",
      "Ask AI to structure it into wins, slips, and patterns worth noticing.",
      "Reflect on the 'why' behind what slipped—AI can prompt you, but the insight is yours.",
      "Have it propose a focused set of priorities for next week, not an endless list.",
      "Narrow to the two or three things that would make next week a success.",
      "Save the review so you can spot patterns across weeks over time.",
    ],
    prompt: `Help me run my weekly review.

Here's my raw brain-dump of the week:
"""
[WHAT YOU DID, WHAT STALLED, WHAT'S OPEN, WHAT'S COMING UP]
"""

Structure this into:
1. Wins and progress (what actually moved)
2. What slipped, and prompt me on why (patterns, not just a list)
3. Anything recurring worth noticing across the week
4. A focused set of 3-5 priorities for next week
5. The 2-3 things that would make next week feel successful

Keep it honest and concise. Push me gently on anything I seem to be avoiding, but don't lecture.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "Personal Productivity System (Template)",
        type: "Template",
        url: "https://www.notion.com/templates/personal-productivity-system-143",
      },
      {
        title: "The Ultimate Notion Guide: From Beginner to Pro",
        type: "Article",
        url: "https://www.morgen.so/blog-posts/notion-tips-and-tricks",
      },
    ],
  },
{
    id: "24",
    title: "Prioritize Your Tasks with AI",
    slug: "prioritize-your-tasks-with-ai",
    description:
      "Cut through an overwhelming personal task list to the few things that actually matter today—weighing urgency, importance, effort, and your real energy. This workflow is about personal daily prioritization under real constraints, not project planning.",
    category: "Productivity",
    difficulty: "Beginner",
    timeSaved: "Save 30 minutes/day",
    audience: ["Knowledge workers", "Managers", "Consultants", "Anyone with too much on"],
    problem:
      "When everything on your list feels urgent, you either freeze or work on whatever's loudest rather than what matters. Deciding what to actually do—balancing deadlines, importance, how much energy each thing takes, and how much you've got—is genuinely hard to do clearly when you're already overwhelmed.",
    solution:
      "AI can apply a clear prioritization lens to your personal list and, importantly, explain its reasoning so you can push back. Given your tasks plus context on deadlines and your available energy, it separates the genuinely urgent-and-important from the merely noisy, and suggests what to defer or drop. You make the final call; it breaks the overwhelm that stops you deciding.",
    steps: [
      "List everything on your mind—the full messy task list, not a curated one.",
      "Add context: real deadlines, what's high-stakes, and how much energy you have today.",
      "Ask AI to sort by urgency and importance, and to flag what can be deferred or dropped.",
      "Push back where its call doesn't match your gut—you know the stakes it can't see.",
      "Pick the two or three 'must happen today' items and start there.",
      "Move the rest to a later list so it's off your mind without being lost.",
    ],
    prompt: `Help me prioritize my personal task list. I'm feeling overwhelmed, so be clear and decisive.

My tasks:
"""
[DUMP EVERYTHING ON YOUR MIND]
"""

Context:
- Hard deadlines: [any]
- What's high-stakes right now: [context]
- My energy/capacity today: [high / medium / low]

Sort these by urgency and importance. Then tell me:
1. The 2-3 things that genuinely must happen today
2. What can wait until later this week
3. What I could defer indefinitely or drop entirely
4. Anything that looks urgent but actually isn't

Explain your reasoning briefly so I can overrule you where you're missing context.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "Personal Productivity System (Template)",
        type: "Template",
        url: "https://www.notion.com/templates/personal-productivity-system-143",
      },
      {
        title: "How to Use Notion: 2026 Guide to Setup & Productivity",
        type: "Article",
        url: "https://everhour.com/blog/how-to-use-notion/",
      },
    ],
  },
{
    id: "25",
    title: "Improve Your Writing with AI",
    slug: "improve-your-writing-with-ai",
    description:
      "Sharpen anything you write—emails, docs, posts—for clarity, tone, and concision, while keeping it unmistakably in your own voice. This workflow uses AI as an editor that improves your draft rather than a ghostwriter that replaces it.",
    category: "Productivity",
    difficulty: "Beginner",
    timeSaved: "Save 1-2 hours/week",
    audience: ["Knowledge workers", "Managers", "Consultants", "Anyone who writes to get work done"],
    problem:
      "Writing clearly is hard and slow. You know what you mean but the draft is bloated, the tone is slightly off, or it buries the point. Polishing it yourself takes multiple passes, and getting a colleague to review isn't always practical. So a lot of mediocre writing goes out that could have landed better.",
    solution:
      "AI is an excellent editor when you direct it. Rather than asking it to write for you—which flattens your voice into generic AI prose—you give it your draft and ask for specific improvements: tighten this, fix the tone, clarify the ask, cut the fluff. You keep your voice and judgment; it does the editing passes a good editor would, instantly.",
    steps: [
      "Write your draft in your own words first—don't outsource the thinking.",
      "Give AI the draft plus the goal: who's reading it and what you want them to do.",
      "Ask for specific edits (tighten, clarify the ask, fix tone) rather than a rewrite.",
      "Compare its version to yours and keep only the changes that improve it without losing your voice.",
      "For important pieces, ask what a skeptical reader might misread or object to.",
      "Build a sense over time of which of its suggestions you trust and which you routinely reject.",
    ],
    prompt: `Act as my editor, not my ghostwriter. Improve this draft while keeping my voice.

My draft:
"""
[PASTE YOUR DRAFT]
"""

Who's reading it and what I want them to do: [context]

Do the following:
1. Tighten it—cut fluff and redundancy without losing meaning
2. Flag anything unclear or where the main point is buried
3. Check the tone matches [professional / warm / direct] and fix where it's off
4. Point out what a skeptical reader might misread or push back on

Show your edited version, but preserve my voice and phrasing where it's working. Don't make it sound generic or corporate.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "The Ultimate Notion Guide: From Beginner to Pro",
        type: "Article",
        url: "https://www.morgen.so/blog-posts/notion-tips-and-tricks",
      },
      {
        title: "Everything You Can Do with Notion AI",
        type: "Guide",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
    ],
  },
{
    id: "26",
    title: "Keep Up With Your Reading Using AI",
    slug: "keep-up-with-your-reading-using-ai",
    description:
      "Stay current in your field without drowning—turn the newsletters, articles, and saved links you never get to into quick, personalized digests. This workflow is about your ongoing reading habit, not one-off work documents.",
    category: "Productivity",
    difficulty: "Beginner",
    timeSaved: "Save 2-3 hours/week",
    audience: ["Knowledge workers", "Consultants", "Anyone staying current in a field"],
    problem:
      "Staying informed is part of the job, but the reading pile only grows: newsletters you skim and archive, articles you save and never open, threads you mean to get to. The guilt accumulates with the backlog, and you end up either spending hours reading or falling behind on what's happening in your field.",
    solution:
      "AI helps you keep up rather than catch up. It can distill articles and newsletters into the few points relevant to you, tell you whether something's worth reading in full, and pull the through-lines across several pieces. You decide what deserves deep reading; AI handles the triage so the backlog becomes a fast weekly digest instead of a source of guilt.",
    steps: [
      "Collect the week's reading you haven't gotten to—articles, newsletters, saved links.",
      "Ask AI to distill each into a few key points and a read-in-full-or-skip verdict.",
      "For a batch on one topic, ask it to synthesize the common threads and what's new.",
      "Read in full only the pieces it flags as genuinely worth your time.",
      "Save the digests so your reading turns into a searchable personal knowledge trail.",
      "Make it a standing weekly habit so the backlog never rebuilds.",
    ],
    prompt: `Help me get through my reading backlog efficiently.

Here are the articles/newsletters (paste text or key excerpts):
"""
[PASTE CONTENT]
"""

My field / what I care about staying current on: [context]

For each piece:
1. Give me 3-5 key points, focused on what's relevant to my field
2. Tell me: read in full, skim, or skip—and why

Then, across all of them, note any common themes or genuinely new developments I should know about. Be honest when something isn't worth my time.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "How to Build a Second Brain in Notion",
        type: "Guide",
        url: "https://fortelabs.com/blog/how-to-build-a-second-brain-in-notion/",
      },
      {
        title: "8 Notion Tips and Tricks for a More Powerful Workspace",
        type: "Article",
        url: "https://zapier.com/blog/notion-tips/",
      },
    ],
  },
{
    id: "27",
    title: "Build a Learning Plan with AI",
    slug: "build-a-learning-plan-with-ai",
    description:
      "Turn 'I want to learn X' into a structured, realistic learning path—sequenced topics, good resources, and milestones that fit the time you actually have. This workflow replaces aimless tutorial-hopping with a plan you can follow.",
    category: "Productivity",
    difficulty: "Intermediate",
    timeSaved: "Save 3-4 hours of planning",
    audience: ["Knowledge workers", "Career changers", "Anyone upskilling", "Lifelong learners"],
    problem:
      "Learning something new usually starts with enthusiasm and ends in a mess of half-watched tutorials and bookmarked courses with no coherent path. Without a sequence, you don't know what to learn first, whether you're making progress, or how it fits the few hours a week you actually have. So it stalls.",
    solution:
      "AI can build a structured learning path: breaking the subject into a sensible sequence, suggesting what to learn in what order, setting milestones, and scaling it to your real available time. You bring the goal and the honesty about your schedule; it produces a plan with checkpoints so learning becomes a path you follow rather than a pile you wander through. Verify specific resource recommendations, since AI can suggest ones that don't exist.",
    steps: [
      "Define what you want to learn and why—the concrete thing you want to be able to do.",
      "Tell AI your starting level and how much time you realistically have each week.",
      "Ask for a sequenced learning path with milestones, scaled to that time.",
      "Have it suggest resource types and topics; verify specific courses/books actually exist before relying on them.",
      "Set checkpoints so you can tell if you're progressing.",
      "Revisit and adjust the plan as you learn what's working for you.",
    ],
    prompt: `Help me build a realistic learning plan.

- What I want to learn: [subject]
- Why / what I want to be able to do: [concrete goal]
- My current level: [beginner / some experience / etc.]
- Time I realistically have: [hours per week]

Produce:
1. A sequenced learning path broken into stages, in a sensible order
2. Milestones so I can tell I'm progressing
3. The types of resources and specific topics to cover at each stage
4. A realistic timeline given my available hours
5. A first-week starting point so I can begin today

For any specific course, book, or resource you name, tell me to verify it exists—don't present unconfirmed recommendations as certain.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "The Ultimate Notion Guide: From Beginner to Pro",
        type: "Article",
        url: "https://www.morgen.so/blog-posts/notion-tips-and-tricks",
      },
      {
        title: "How to Build a Second Brain in Notion",
        type: "Guide",
        url: "https://fortelabs.com/blog/how-to-build-a-second-brain-in-notion/",
      },
    ],
  },
{
    id: "28",
    title: "Design Personal Workflows with AI",
    slug: "design-personal-workflows-with-ai",
    description:
      "Turn the repetitive things you do every week into repeatable personal systems—checklists, templates, and routines—so you stop reinventing them each time. This workflow helps you build the personal operating procedures that quietly save hours.",
    category: "Productivity",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours/week",
    audience: ["Knowledge workers", "Managers", "Consultants", "Freelancers"],
    problem:
      "You do the same things repeatedly—prepping for a certain kind of meeting, producing a recurring deliverable, handling a type of request—but each time you rebuild the approach from memory. It's slower than it needs to be, quality varies, and the mental overhead of remembering all the steps is a low-grade tax on every week.",
    solution:
      "AI helps you turn repeated tasks into personal workflows: it can take a task you do often and design a reusable checklist, template, or routine around it, including the steps you tend to forget. You identify what's worth systematizing; AI does the design work of turning a fuzzy habit into a clean, repeatable system you can run on autopilot.",
    steps: [
      "Notice a task you do repeatedly and rebuild from scratch each time.",
      "Describe how you currently do it, including the parts you sometimes forget.",
      "Ask AI to design a reusable workflow: a checklist, template, or routine.",
      "Refine it against a real instance of the task to make sure it actually fits.",
      "Store it where you'll use it—your notes app, a template, a saved prompt.",
      "Improve it each time you run it, so your personal systems compound over time.",
    ],
    prompt: `Help me turn a repetitive task into a reusable personal workflow.

The task I do often: [name it]
How I currently do it (including steps I sometimes forget):
"""
[DESCRIBE YOUR CURRENT APPROACH]
"""

Design a reusable system for it:
1. A clear checklist or step-by-step routine
2. A template I can reuse each time, if relevant
3. The easy-to-forget steps, called out
4. Where in the process I could save the most time

Keep it lightweight and practical—something I'll actually use, not an elaborate system I'll abandon.`,
    tools: ["ChatGPT", "Claude", "Notion AI"],
    resources: [
      {
        title: "Personal Productivity System (Template)",
        type: "Template",
        url: "https://www.notion.com/templates/personal-productivity-system-143",
      },
      {
        title: "The Ultimate Notion Guide: From Beginner to Pro",
        type: "Article",
        url: "https://www.morgen.so/blog-posts/notion-tips-and-tricks",
      },
    ],
  },
{
    id: "29",
    title: "Build a Personal Knowledge System with AI",
    slug: "build-a-personal-knowledge-system-with-ai",
    description:
      "Set up a durable second brain—a personal system where notes, ideas, and references are captured and organized so you can actually find and use them later. This workflow is about building and maintaining an ongoing system, not a one-time notes cleanup.",
    category: "Productivity",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours/week ongoing",
    audience: ["Knowledge workers", "Consultants", "Researchers", "Lifelong learners"],
    problem:
      "Ideas and useful information flow past constantly, but without a system to capture and organize them, they're gone by the time you need them. Ad hoc notes scatter across apps and become a graveyard. The result is re-researching things you already knew and losing your best ideas because there was nowhere to put them.",
    solution:
      "AI helps you design and run a personal knowledge system—a second brain—using an established method like PARA or a setup that fits how you think. It can propose the structure, define simple capture and review habits, and help process what you capture into something retrievable. You maintain the system; AI reduces the friction of setting it up and keeping it tidy, which is what makes it stick.",
    steps: [
      "Decide what you want your system to do: capture ideas, organize references, support projects.",
      "Ask AI to propose a structure (PARA is a solid default) matched to how you actually work.",
      "Set up simple capture habits—one easy place to put things as they occur.",
      "Use AI to periodically process captures into the right place, so the inbox doesn't pile up.",
      "Build a light weekly tidy-up so the system stays trustworthy.",
      "Adjust the structure as you learn what you actually reach for.",
    ],
    prompt: `Help me design a personal knowledge system (a second brain).

- What I want it to do: [capture ideas / organize references / support my projects / all]
- How I tend to think and work: [context]
- Tools I already use: [e.g. Notion, Apple Notes]

Produce:
1. A simple structure (consider PARA or similar) matched to how I work—not overly complex
2. A capture habit: where I put things as they occur, with minimal friction
3. A short weekly review routine to keep it organized and trustworthy
4. How to process captured items into the right place

Favor something sustainable over something elaborate. If PARA isn't the best fit for how I described myself, suggest an alternative and say why.`,
    tools: ["Claude", "ChatGPT", "Notion AI"],
    resources: [
      {
        title: "Building a Second Brain in Notion (PARA + Forgetting Curve)",
        type: "Article",
        url: "https://medium.com/design-bootcamp/building-a-second-brain-in-notion-5cd5da59da01",
      },
      {
        title: "The OFFICIAL Notion Second Brain Setup",
        type: "Video",
        url: "https://www.youtube.com/watch?v=9QDu6wpR59o",
      },
    ],
  },
{
    id: "30",
    title: "Improve Your Communication with AI",
    slug: "improve-your-communication-with-ai",
    description:
      "Handle the tricky conversations better—difficult feedback, a delicate message, a high-stakes ask—by pressure-testing your approach and wording before you hit send or walk into the room. This workflow is a rehearsal partner for the messages that matter.",
    category: "Productivity",
    difficulty: "Intermediate",
    timeSaved: "Save 1-2 hours/week",
    audience: ["Managers", "Knowledge workers", "Consultants", "Anyone navigating tricky conversations"],
    problem:
      "The highest-stakes communication is the hardest to get right: delivering difficult feedback, pushing back on a senior stakeholder, declining a request without burning a bridge, raising a sensitive issue. Get the framing or tone wrong and it costs you. But there's often no one to sanity-check the approach before you commit to it.",
    solution:
      "AI is a useful rehearsal partner for high-stakes messages. You describe the situation and your goal, and it can pressure-test your framing, suggest wording, anticipate how the other person might react, and flag where your tone might land wrong. You keep authorship and judgment; it gives you the second perspective that stops you sending the version you'd regret.",
    steps: [
      "Describe the situation, the relationship, and what you're trying to achieve.",
      "Share your draft message or your intended approach.",
      "Ask AI to pressure-test it: how might this land, where could it go wrong?",
      "Have it suggest alternative framings for the trickiest parts.",
      "Anticipate the other person's likely reaction and plan your response.",
      "Send the version you judge best—informed by the rehearsal, but yours.",
    ],
    prompt: `Be my communication rehearsal partner for a tricky message. Give me honest pushback, not just reassurance.

The situation: [context, the relationship, the stakes]
What I'm trying to achieve: [goal]
My draft or intended approach:
"""
[PASTE YOUR DRAFT OR DESCRIBE YOUR APPROACH]
"""

Do the following:
1. Tell me honestly how this is likely to land for the recipient
2. Flag anything in the tone or framing that could backfire
3. Suggest a stronger framing for the hardest part
4. Anticipate how they might react, and how I could respond

Don't just soften everything—if I'm being unclear, unfair, or avoiding the real point, tell me.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "The Ultimate Notion Guide: From Beginner to Pro",
        type: "Article",
        url: "https://www.morgen.so/blog-posts/notion-tips-and-tricks",
      },
      {
        title: "Everything You Can Do with Notion AI",
        type: "Guide",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
    ],
  },
{
    id: "31",
    title: "Map Business Processes with AI",
    slug: "map-business-processes-with-ai",
    description:
      "Turn a process that only exists in people's heads into a clear, visual map of every step, handoff, and decision point—so you can see how work actually flows before you try to improve it. This workflow gets the as-is picture on paper fast.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 3-4 hours per process",
    audience: ["Operations leaders", "Process owners", "Consultants", "Team leads"],
    problem:
      "You can't improve a process you can't see, and most processes are never mapped—they live as scattered knowledge across the people who happen to do them. Reconstructing the real flow, with all its handoffs and exceptions, is slow and easy to get wrong when you're working from memory and half-remembered steps.",
    solution:
      "AI can turn a rough description of how work gets done into a structured process map: steps in sequence, who owns each, where handoffs happen, and where decisions branch. You describe the process as you understand it; AI organizes it into a clear flow and, crucially, asks about the gaps and exceptions you'd otherwise skip. The result is an accurate as-is map you can then analyze.",
    steps: [
      "Describe the process end to end as you understand it—roughly is fine.",
      "Ask AI to structure it into sequential steps with owners and handoff points.",
      "Have it flag decision points, branches, and the exceptions you didn't mention.",
      "Fill the gaps it surfaces—the exceptions are usually where the real problems hide.",
      "Validate the map with the people who actually do the work.",
      "Use the confirmed map as the baseline for any improvement work.",
    ],
    prompt: `Help me map this business process clearly.

How the process works, as I understand it:
"""
[DESCRIBE THE PROCESS END TO END]
"""

Produce:
1. The process as sequential steps, each with the role/owner responsible
2. Handoff points (where work passes between people or teams)
3. Decision points and where the process branches
4. Questions about gaps, exceptions, or edge cases I didn't mention

Where the flow is unclear or a step seems to be missing, ask me rather than guessing. The goal is an accurate picture of how it actually works today, not how it should work.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Notion Database Automations: Complete 2026 Guide (12 Examples)",
        type: "Article",
        url: "https://sync2sheets.com/blog/notion-database-automations/",
      },
    ],
  },
{
    id: "32",
    title: "Automate Recurring Reports with AI",
    slug: "automate-recurring-reports-with-ai",
    description:
      "Build a repeatable reporting pipeline—define the structure once, then regenerate the report each period from fresh data in minutes instead of rebuilding it by hand. This workflow is about the reusable system, not a one-off write-up.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 2-4 hours per reporting cycle",
    audience: ["Operations leaders", "Analysts", "Team leads", "Anyone who owns a recurring report"],
    problem:
      "Recurring reports—weekly ops, monthly metrics, quarterly summaries—eat the same hours every cycle. You rebuild the same structure, re-pull the same numbers, and re-write the same kind of narrative from scratch, even though only the data changed. The repetition is pure overhead, and rushing it under deadline means inconsistency period to period.",
    solution:
      "AI lets you define the report once and regenerate it each cycle. You build a reusable template and prompt that specify the structure, the sections, and the narrative style; then each period you feed in fresh data and get a consistent draft you refine. You own the analysis and the judgment calls; AI removes the rebuild-from-scratch tax and keeps every edition consistent.",
    steps: [
      "Define the report's fixed structure: sections, metrics, and the narrative style you want each time.",
      "Build a reusable prompt/template that encodes that structure.",
      "Each cycle, feed in the period's data and generate a consistent draft.",
      "Review the numbers and add the analysis only you can provide—the 'so what' behind the data.",
      "Keep the template versioned so improvements carry forward each period.",
      "Pair it with a light automation (Zapier/Make) if the data pull can be automated too.",
    ],
    prompt: `Help me build a reusable template for a recurring report so I can regenerate it each period.

The report: [what it is, how often, who reads it]
The data I have each cycle:
"""
[PASTE A SAMPLE PERIOD'S DATA]
"""

Do two things:
1. Design a fixed report structure (sections, which metrics go where, narrative style) that I'll reuse every period
2. Using this period's data, produce a first draft in that structure

Keep the structure consistent and reusable. Flag where I'll need to add human analysis (the "why" behind the numbers) versus what can be generated from data each time.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "The Ultimate Guide to Notion Automations & the API",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-automations/",
      },
      {
        title: "Zapier – Notion Integrations",
        type: "Tool",
        url: "https://zapier.com/apps/notion/integrations",
      },
    ],
  },
{
    id: "33",
    title: "Analyze Customer Feedback with AI",
    slug: "analyze-customer-feedback-with-ai",
    description:
      "Turn hundreds of reviews, survey responses, and support tickets into clear themes, sentiment, and prioritized actions—instead of a spreadsheet no one has time to read. This workflow finds the signal in feedback at a scale humans can't manually process.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 4-6 hours per analysis",
    audience: ["Operations leaders", "Product managers", "Customer experience teams", "Founders"],
    problem:
      "Customer feedback piles up faster than anyone can read it: reviews, NPS comments, survey responses, support tickets. The insight is in there, but manually reading and coding hundreds of responses is a job nobody has time for, so feedback goes uanalyzed and decisions get made on gut feel or the loudest complaint.",
    solution:
      "AI is genuinely strong at reading large volumes of open-text feedback and surfacing structure: recurring themes, sentiment, and which issues show up most. You give it the raw responses and it clusters them, quantifies roughly how common each theme is, and pulls representative examples. You bring the business judgment about what to act on; AI does the reading-and-coding that doesn't scale by hand.",
    steps: [
      "Gather the raw feedback into one place—reviews, survey text, ticket summaries.",
      "Ask AI to identify recurring themes and roughly how common each is.",
      "Have it assess sentiment and pull representative quotes for each theme.",
      "Separate signal from noise—one angry outlier isn't a trend; a quiet recurring theme might be.",
      "Prioritize themes by frequency and business impact.",
      "Turn the top themes into specific, owned actions and track whether they move the feedback.",
    ],
    prompt: `Analyze this customer feedback and find the signal.

Raw feedback (reviews / survey responses / ticket summaries):
"""
[PASTE FEEDBACK]
"""

Produce:
1. The main recurring themes, ordered by roughly how frequently they appear
2. Overall sentiment, and sentiment per theme
3. A representative quote or two for each theme
4. Which themes look like genuine patterns versus one-off outliers
5. The 3 issues that, if fixed, would likely matter most

Base themes on what's actually in the feedback—don't invent issues that aren't there. Note if the sample is too small to draw firm conclusions.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
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
    id: "34",
    title: "Write Decision Proposals with AI",
    slug: "write-decision-proposals-with-ai",
    description:
      "Turn a recommendation into a clear decision document that drives action—options weighed, tradeoffs explicit, and a recommendation stakeholders can actually say yes to. This workflow is forward-looking: it helps make a decision, not just record one.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours per proposal",
    audience: ["Operations leaders", "Managers", "Consultants", "Anyone proposing a change"],
    problem:
      "Getting a decision made often requires a document: here's the problem, here are the options, here's what I recommend and why. Writing one that's genuinely clear—fair to each option, explicit about tradeoffs, easy for a busy decision-maker to act on—is real work, and a weak version stalls the decision or invites endless back-and-forth.",
    solution:
      "AI helps structure a persuasive, balanced decision proposal. From your problem and options, it drafts a document that lays out the context, weighs each option's tradeoffs fairly, and frames a clear recommendation with reasoning. You supply the judgment about what to recommend; AI ensures the case is well-organized, the tradeoffs are explicit, and the ask is unambiguous—so the decision actually gets made.",
    steps: [
      "Define the decision that needs making and who needs to make it.",
      "Lay out the options you're considering and what you currently favor.",
      "Ask AI to draft a decision document: context, options with tradeoffs, recommendation.",
      "Make sure each option is represented fairly—a proposal that strawmans alternatives loses trust.",
      "Sharpen the recommendation and the specific ask so the decision-maker knows exactly what to approve.",
      "Circulate, and keep the reasoning so the decision can be revisited later if needed.",
    ],
    prompt: `Help me write a decision proposal that will actually drive a decision.

The decision to be made: [what needs deciding, and by whom]
The options I'm considering:
"""
[LIST THE OPTIONS]
"""
What I currently lean toward and why: [your view]

Draft a decision document with:
1. Context / the problem this decision addresses
2. Each option, with its pros, cons, and key tradeoffs presented fairly
3. A clear recommendation with the reasoning behind it
4. The specific ask (what you need the decision-maker to approve)
5. Risks or open questions

Represent every option fairly, including the ones I'm not recommending. Keep it concise enough that a busy stakeholder will actually read it.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Notion for Project Management: Complete Guide + Template",
        type: "Article",
        url: "https://www.notioneverything.com/blog/notion-project-management",
      },
    ],
  },
{
    id: "35",
    title: "Improve Workflows with AI",
    slug: "improve-workflows-with-ai",
    description:
      "Take a process that works but drags—too many steps, too much waiting, too much rework—and find where the time actually goes and what to streamline. This workflow uses AI to spot the bottlenecks and redundancies you've stopped noticing.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 3-4 hours of analysis",
    audience: ["Operations leaders", "Process owners", "Team leads", "Consultants"],
    problem:
      "Processes accrete cruft over time: steps added for a reason that no longer applies, approvals that slow everything without adding safety, handoffs that create waiting. The people inside the process stop seeing the waste because it's just 'how we do it.' Finding what to cut or streamline takes fresh, structured analysis that's hard to do from the inside.",
    solution:
      "AI brings an outside, structured eye to a process you're too close to. Given the current flow, it can flag likely bottlenecks, redundant steps, unnecessary handoffs, and places automation would help—asking the 'why does this step exist' questions that surface waste. You decide what's actually safe to change; AI does the systematic critique that's hard to run on your own process.",
    steps: [
      "Describe the current process, including roughly how long each part takes.",
      "Ask AI to identify bottlenecks, redundant steps, and unnecessary handoffs.",
      "Have it question why each slow or manual step exists—some will have reasons, some won't.",
      "Separate the safe-to-cut from the there-for-a-reason (compliance, risk, quality).",
      "Prioritize changes by effort versus time saved.",
      "Pilot the streamlined version on a small scale before rolling it out.",
    ],
    prompt: `Help me improve this process. Be a critical outside eye—I'm too close to it.

Current process (with rough timing per step):
"""
[DESCRIBE THE PROCESS AND HOW LONG EACH PART TAKES]
"""

Analyze it for:
1. Bottlenecks—where does work pile up or wait?
2. Redundant or low-value steps—what could be cut?
3. Unnecessary handoffs or approvals
4. Steps that could be automated
5. For each slow/manual step, ask why it exists

Then suggest a streamlined version, ranked by effort vs. time saved. Flag where a step might exist for a real reason (compliance, quality, risk) that I should confirm before removing.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Notion Database Automations: Complete 2026 Guide (12 Examples)",
        type: "Article",
        url: "https://sync2sheets.com/blog/notion-database-automations/",
      },
      {
        title: "The Ultimate Guide to Notion Automations & the API",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-automations/",
      },
    ],
  },
{
    id: "36",
    title: "Build Dashboards with AI",
    slug: "build-dashboards-with-ai",
    description:
      "Figure out what to actually put on an operational dashboard—the metrics that drive decisions, not vanity numbers—and how to structure it so people use it. This workflow helps you design the dashboard before you build it.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 3-4 hours of design",
    audience: ["Operations leaders", "Analysts", "Team leads", "Founders"],
    problem:
      "Most dashboards fail by showing everything measurable rather than what matters. They become wallpaper—full of numbers no one acts on—because no one thought hard about which metrics actually drive decisions and how to lay them out for the people using them. The design thinking gets skipped in the rush to build.",
    solution:
      "AI helps with the design thinking before you touch a BI tool. Given what the dashboard is for and who uses it, it can propose the handful of metrics that genuinely support decisions, how to group them, and what to leave off. It can also help translate those into the right chart types and even draft formulas or queries. You provide the business context; AI structures a dashboard people will actually use.",
    steps: [
      "Define the dashboard's purpose: what decisions should it support, and for whom?",
      "Ask AI to propose the key metrics that serve those decisions—and what to exclude.",
      "Have it group the metrics logically and suggest chart types for each.",
      "Pressure-test against vanity metrics: does each number change a decision? If not, cut it.",
      "Get help drafting the formulas, queries, or setup for your specific tool.",
      "Build it, then check after a few weeks whether people actually use it—and prune what they don't.",
    ],
    prompt: `Help me design an operational dashboard before I build it.

Purpose: [what decisions it should support]
Who uses it: [audience and how often]
Data available: [what you can measure]

Produce:
1. The key metrics that genuinely support these decisions (and why each earns a place)
2. Metrics to deliberately leave OFF (vanity or distracting numbers)
3. A logical grouping/layout for the dashboard
4. Suggested chart type for each metric
5. Any derived metrics or calculations worth adding

Bias toward fewer, decision-driving metrics over comprehensiveness. For each metric, be able to answer "what would someone do differently based on this?"`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Notion Database Automations: The Complete Guide",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-database-automations-the-complete-guide/",
      },
      {
        title: "How to Use Notion: 2026 Guide to Setup & Productivity",
        type: "Article",
        url: "https://everhour.com/blog/how-to-use-notion/",
      },
    ],
  },
{
    id: "37",
    title: "Run Operational Reviews with AI",
    slug: "run-operational-reviews-with-ai",
    description:
      "Prepare and structure a recurring operational review—pull the story out of the metrics, surface what needs attention, and frame the discussion so the meeting drives decisions. This workflow turns a data dump into a focused review.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours per review",
    audience: ["Operations leaders", "Team leads", "Managers", "Founders"],
    problem:
      "Operational reviews often devolve into reading numbers aloud. Prep means assembling metrics from everywhere, and without a clear narrative the meeting becomes a status recital instead of a decision forum. The work of turning raw data into 'here's what's happening and what needs a decision' is exactly what gets shortchanged under time pressure.",
    solution:
      "AI helps you prep a review that drives decisions. Given the period's metrics and context, it can surface what changed and why it matters, flag what's off-track, and structure an agenda around the things that actually need discussion—not a walk through every number. You bring the operational judgment; AI turns the data into a narrative and a focused agenda so the meeting is about decisions, not recitation.",
    steps: [
      "Gather the period's metrics and any relevant context or events.",
      "Ask AI to surface what changed, what's off-track, and what looks like it needs attention.",
      "Have it draft a review structure that leads with what needs discussion, not every metric.",
      "Add your operational context—the story behind the numbers that data alone won't show.",
      "Frame the specific decisions or discussions the review should produce.",
      "After the review, capture decisions and actions (your decision-log workflow fits here).",
    ],
    prompt: `Help me prepare an operational review that drives decisions, not just recites numbers.

This period's metrics and context:
"""
[PASTE METRICS AND ANY RELEVANT EVENTS/CONTEXT]
"""

Produce:
1. What meaningfully changed this period, and why it matters
2. What's off-track or needs attention
3. A review agenda that leads with what needs discussion/decisions—not a walk through every metric
4. The specific decisions or discussions this review should produce
5. Questions worth raising with the team

Focus the agenda on exceptions and decisions. Flag where you'd want more context from me to interpret a number correctly.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "Notion Project Management Guide: Techniques to Optimize Workflow",
        type: "Article",
        url: "https://everhour.com/blog/notion-project-management/",
      },
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
    ],
  },
{
    id: "38",
    title: "Document and Analyze Processes with AI",
    slug: "document-and-analyze-processes-with-ai",
    description:
      "Capture how a process actually works and analyze it for problems in one pass—the as-is flow, the pain points, and where it breaks down. This workflow pairs documentation with diagnosis, distinct from writing step-by-step SOPs for execution.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 3-4 hours per process",
    audience: ["Operations leaders", "Process analysts", "Consultants", "Team leads"],
    problem:
      "There's a gap between knowing a process exists and understanding how it really works—including where it fails. Documentation efforts often capture the idealized version, missing the workarounds, the exceptions, and the friction that people have quietly normalized. Without that honest picture, you can't diagnose what's actually wrong.",
    solution:
      "AI helps you both document the real process and analyze it in the same pass. It structures your description into a clear record of how work actually flows, then probes for pain points, exceptions, and breakdowns—the honest as-is, not the org-chart fiction. This is diagnostic documentation: the goal isn't execution instructions (that's an SOP) but an accurate, analyzed picture you can improve from.",
    steps: [
      "Describe the process honestly, including the workarounds and the parts that annoy people.",
      "Ask AI to document the real flow and simultaneously probe for pain points and exceptions.",
      "Answer its questions about where things break down or get worked around.",
      "Get a clear as-is record plus a list of the friction points and their likely causes.",
      "Validate with the people in the process—they'll confirm or correct the pain points.",
      "Use the analysis to decide what to fix (pairs with the improve-workflows workflow).",
    ],
    prompt: `Help me document AND analyze this process—the honest version, including where it breaks.

How the process really works (include workarounds and annoyances):
"""
[DESCRIBE THE PROCESS HONESTLY]
"""

Do two things:
1. Document the actual as-is flow clearly (steps, owners, handoffs)
2. Analyze it: where are the pain points, exceptions, breakdowns, and workarounds? What's the likely cause of each?

Probe me with questions about where things go wrong or get worked around—those are the parts I'm most likely to under-report. The goal is an accurate, diagnostic picture, not polished execution instructions.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "How to write a standard operating procedure (SOP): guide with examples",
        type: "Guide",
        url: "https://www.mintlify.com/library/how-to-write-standard-operating-procedure",
      },
      {
        title: "Notion Database Automations: Complete 2026 Guide (12 Examples)",
        type: "Article",
        url: "https://sync2sheets.com/blog/notion-database-automations/",
      },
    ],
  },
{
    id: "39",
    title: "Improve Team Communication Systems with AI",
    slug: "improve-team-communication-systems-with-ai",
    description:
      "Fix the team-level communication that's not working—unclear channels, meetings that could be updates, information that doesn't reach the right people—by designing better cadences and structures. This workflow is about team systems, not individual conversations.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours/week across the team",
    audience: ["Operations leaders", "Managers", "Team leads", "Founders"],
    problem:
      "As teams grow, communication that used to just happen stops working: people don't know where to post what, meetings multiply, updates get lost, and the same questions circulate. It's not any one person's fault—it's a missing system. But designing communication cadences and channel norms is a task that rarely gets deliberate attention.",
    solution:
      "AI can help design team communication systems: which channels for what, what cadence of updates and meetings actually serves the team, and how to make sure information reaches the right people without drowning everyone. You describe your team's current friction; AI proposes structures and norms—async updates, meeting rhythms, channel conventions—that you adapt. This is about the system, distinct from coaching an individual tricky conversation.",
    steps: [
      "Describe your team's current communication friction: what's unclear, redundant, or getting lost.",
      "Ask AI to diagnose the likely structural causes, not just symptoms.",
      "Have it propose channel norms, meeting cadences, and update rhythms suited to your team.",
      "Adapt the proposals to your team's culture and tools—no system survives if it fights the culture.",
      "Roll out a few changes at a time and communicate the 'why' so people adopt them.",
      "Review after a month and keep what's working, drop what isn't.",
    ],
    prompt: `Help me improve my team's communication system (the structure, not individual conversations).

Team context: [size, remote/hybrid, tools used]
Current communication friction:
"""
[WHAT'S UNCLEAR, REDUNDANT, GETTING LOST, OR TAKING TOO MANY MEETINGS]
"""

Produce:
1. A diagnosis of the likely structural causes (not just symptoms)
2. Proposed channel norms—what goes where (chat vs. email vs. docs vs. meetings)
3. A meeting and update cadence that would serve this team
4. How to make sure information reaches the right people without overwhelming everyone
5. A phased way to roll changes out

Adapt to a team of my size and setup. Favor fewer, well-defined norms over an elaborate system nobody follows.`,
    tools: ["ChatGPT", "Claude", "Copilot"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "8 Notion Tips and Tricks for a More Powerful Workspace",
        type: "Article",
        url: "https://zapier.com/blog/notion-tips/",
      },
    ],
  },
{
    id: "40",
    title: "Analyze Business Problems with AI",
    slug: "analyze-business-problems-with-ai",
    description:
      "Break a messy, ambiguous business problem into its parts—root causes, contributing factors, and a structured path to a solution—instead of jumping to the first fix. This workflow brings analytical structure to problems that feel too tangled to start on.",
    category: "Operations",
    difficulty: "Intermediate",
    timeSaved: "Save 2-4 hours per problem",
    audience: ["Operations leaders", "Managers", "Consultants", "Founders"],
    problem:
      "Real business problems arrive tangled: symptoms, causes, and constraints all knotted together, and it's not obvious where to even start. The temptation is to grab the first plausible fix, which often treats a symptom while the root cause festers. Structured problem analysis is a skill, and it's hard to apply to your own situation under pressure.",
    solution:
      "AI can apply problem-solving structure to a messy situation: separating symptoms from root causes, mapping contributing factors, and framing the problem clearly before jumping to solutions. Using approaches like root-cause analysis or issue trees, it helps you think it through systematically. You bring the real-world context and the final judgment; AI provides the analytical scaffolding that keeps you from solving the wrong problem.",
    steps: [
      "Describe the problem as you see it—symptoms, context, what you've tried.",
      "Ask AI to help separate symptoms from likely root causes.",
      "Have it map contributing factors and frame the actual problem clearly.",
      "Pressure-test the framing—solving a well-framed problem beats fixing a symptom fast.",
      "Ask for a structured set of possible solutions tied to the root causes.",
      "Choose an approach with your real-world judgment and define how you'll know it worked.",
    ],
    prompt: `Help me analyze this business problem systematically, before jumping to solutions.

The problem as I see it (symptoms, context, what I've tried):
"""
[DESCRIBE THE PROBLEM]
"""

Work through it structurally:
1. Separate symptoms from likely root causes
2. Map the contributing factors (consider using an issue tree or root-cause approach)
3. Reframe the actual core problem clearly—it may not be what it first appears
4. Only then, propose possible solutions tied to the root causes, not the symptoms
5. Suggest how I'd know whether a solution actually worked

Challenge my framing if the problem I've described looks like a symptom of something deeper. Ask for context where you need it rather than assuming.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "The Ultimate Notion Guide: From Beginner to Pro",
        type: "Article",
        url: "https://www.morgen.so/blog-posts/notion-tips-and-tricks",
      },
    ],
  },
{
    id: "41",
    title: "Build a Research Agent",
    slug: "build-a-research-agent",
    description:
      "Set up an AI agent that runs multi-step research on a topic—searching, gathering, and synthesizing across sources—so you get a structured brief instead of doing the digging yourself. This workflow covers designing the agent's task, sources, and guardrails.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 4-6 hours per research task",
    audience: ["Consultants", "Analysts", "Researchers", "Knowledge workers"],
    problem:
      "Deep research is high-value but time-consuming: framing the question, searching across sources, gathering findings, and synthesizing. Doing it manually every time doesn't scale, but naive AI answers taken at face value can be confidently wrong—so you need something that gathers and synthesizes with sources you can verify, not a black box that asserts.",
    solution:
      "A research agent chains the steps—decompose the question, search, gather, synthesize—into a repeatable process that produces a sourced brief. The key design work is defining what 'good' looks like: which sources to trust, requiring citations, and keeping a 'what we couldn't verify' section. You review the output as you would a junior researcher's: useful, fast, but checked before you rely on it.",
    steps: [
      "Define the research task precisely: the question, the scope, and what the output should look like.",
      "Choose your platform—a tool with agent/web-search capabilities (Claude, ChatGPT with search, or a purpose-built agent).",
      "Write clear instructions: decompose the question, search, cite every claim, flag uncertainty.",
      "Set guardrails: which sources to prioritize, and a required 'unverified / low-confidence' section.",
      "Test on a topic you already know well, so you can catch where it goes wrong.",
      "Review outputs and verify key claims against primary sources before acting—treat it as a fast first pass, not final truth.",
    ],
    prompt: `You are a research agent. Research this topic and produce a sourced brief.

Research question: [the question]
Scope: [what to include/exclude]
Output needed: [brief / comparison / summary]

Follow this process:
1. Break the question into sub-questions
2. Search for and gather relevant information for each
3. Synthesize findings into themes, citing a source for every claim
4. Maintain a clear "low-confidence / could not verify" section
5. End with a bottom-line answer and your confidence level

Cite sources for every factual claim. Never present something you couldn't verify as certain. If sources conflict, say so rather than picking one silently.`,
    tools: ["Claude", "ChatGPT", "Perplexity"],
    resources: [
      {
        title: "How to Build Notion AI Agents: Real Examples + 5-Step Guide",
        type: "Article",
        url: "https://buildtolaunch.substack.com/p/notion-ai-agents-examples-guide",
      },
      {
        title: "Build Your First Custom Agent",
        type: "Guide",
        url: "https://www.notion.com/help/guides/build-your-first-custom-agent",
      },
    ],
  },
{
    id: "42",
    title: "Build a Meeting Assistant Agent",
    slug: "build-a-meeting-assistant-agent",
    description:
      "Set up an agent that handles the meeting lifecycle—capturing notes, extracting decisions and action items, and routing follow-ups—so the admin around meetings runs itself. This workflow covers designing it with the right human checkpoints.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 3-4 hours/week",
    audience: ["Managers", "Project managers", "Operations leaders", "Anyone in many meetings"],
    problem:
      "Meetings generate a tail of admin: notes to write up, decisions to record, action items to assign and chase. Done manually it's hours a week and often gets dropped, so decisions and tasks slip through. The work is repetitive and rule-based—exactly the kind of thing that shouldn't need a human doing it from scratch each time.",
    solution:
      "A meeting assistant agent can take a transcript and produce the summary, extract decisions and action items with owners, and stage follow-ups—consistently, every time. The design question is where humans stay in the loop: the agent drafts and routes, but you approve anything it sends externally and verify owners before actions go out. That keeps the speed while preventing the agent from confidently misattributing or over-sending.",
    steps: [
      "Decide the agent's scope: summarize only, or also extract actions and stage follow-ups.",
      "Choose a platform—meeting tools with AI, or an agent connected to your transcript source.",
      "Instruct it to summarize, extract decisions/actions with owners, and flag anything ambiguous.",
      "Set the human checkpoint: it drafts follow-ups, you approve before anything is sent externally.",
      "Test on real transcripts and check attribution accuracy—agents misassign owners.",
      "Roll out gradually, keeping approval on any outbound message until you trust the accuracy.",
    ],
    prompt: `You are a meeting assistant. Process this meeting and prepare the follow-up.

Attendees: [names/roles]
Transcript / notes:
"""
[PASTE TRANSCRIPT]
"""

Produce:
1. A concise summary
2. Decisions made, each attributed to who made it
3. Action items, each with an owner and due date (mark [TBD] if unclear)
4. Draft follow-up messages for each owner (for my review before sending)
5. Anything ambiguous that I should clarify

Do NOT treat follow-ups as sent—present them for my approval. Flag any owner or decision you're inferring rather than certain of.`,
    tools: ["Claude", "ChatGPT", "Notion AI"],
    resources: [
      {
        title: "Notion AI Agents Tutorial: Automate Your Work in 2026",
        type: "Video",
        url: "https://www.youtube.com/watch?v=-notA59M_-M",
      },
      {
        title: "Get Started with Your Notion Agent",
        type: "Guide",
        url: "https://www.notion.com/help/guides/get-started-with-your-personal-agent-in-notion",
      },
    ],
  },
{
    id: "43",
    title: "Build an Executive Assistant Agent",
    slug: "build-an-executive-assistant-agent",
    description:
      "Set up an agent that helps run your day—triaging inputs, drafting responses, prepping for what's ahead, and surfacing what needs your attention—as a personal chief of staff. This workflow covers scoping it safely, starting with low-risk tasks.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 4-5 hours/week",
    audience: ["Executives", "Managers", "Founders", "Busy professionals"],
    problem:
      "The coordination overhead of a busy role—triaging inputs, drafting routine responses, prepping for meetings, tracking what needs attention—consumes time that should go to actual work. Most people can't justify a human assistant, so it all falls on them, fragmenting focus across dozens of small administrative decisions a day.",
    solution:
      "An executive assistant agent can take on the low-risk, high-frequency coordination: summarizing your inputs, drafting responses you approve, prepping briefs for upcoming meetings, and flagging what needs you. The critical design principle is scope discipline—start it on read-and-draft tasks where mistakes are cheap, keep approval on anything that acts externally, and expand its remit only as it earns trust. Never let it send or commit on your behalf unsupervised early on.",
    steps: [
      "List your recurring admin tasks and rank them by how costly a mistake would be.",
      "Start the agent on the lowest-risk ones: summarizing, drafting, prepping—never sending.",
      "Give it context about your priorities, preferences, and voice so its drafts fit.",
      "Keep a hard rule: it proposes, you approve anything that leaves your hands.",
      "Review its work daily at first; note where it's reliable and where it isn't.",
      "Expand its scope only into areas it's proven trustworthy—slowly.",
    ],
    prompt: `You are my executive assistant. Help me handle my day. Start by helping me triage and prepare—do not send or commit to anything on my behalf.

Here's what's on my plate:
"""
[PASTE INPUTS: emails to triage, meetings coming up, tasks, decisions pending]
"""

My priorities right now: [context]
My communication style: [brief description]

Do the following:
1. Triage: what needs my attention today vs. what can wait
2. Draft responses to routine items (for my approval)
3. Prep: brief me on anything I have coming up
4. Flag anything that needs a decision only I can make

Present everything for my review. Never treat a draft as sent or a decision as made.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "Notion Custom Agents: Full Tutorial, Use Cases & Pricing",
        type: "Guide",
        url: "https://matthiasfrank.de/en/notion-custom-agents-full-tutorial-use-cases-pricing-changes/",
      },
      {
        title: "Build Your First Custom Agent",
        type: "Guide",
        url: "https://www.notion.com/help/guides/build-your-first-custom-agent",
      },
    ],
  },
{
    id: "44",
    title: "Build a Customer Support Agent",
    slug: "build-a-customer-support-agent",
    description:
      "Set up an agent that drafts accurate support responses from your knowledge base and past tickets—handling common questions fast while keeping a human on anything sensitive. This workflow covers grounding it in real answers and setting escalation rules.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 5-8 hours/week",
    audience: ["Support leads", "Operations leaders", "Founders", "Customer experience teams"],
    problem:
      "Support volume is dominated by repetitive questions that have known answers, but each still needs someone to write a response. It's slow, it doesn't scale, and response times suffer. Yet naive automation risks confidently wrong answers to customers—which is worse than slow—so support automation has to be grounded and carefully bounded.",
    solution:
      "A support agent grounded in your actual knowledge base and past resolved tickets can draft accurate responses to common questions, with a human approving before send early on and clear rules for escalating anything sensitive, uncertain, or high-stakes. The design priority is accuracy over coverage: it should answer what it knows well and hand off everything else, never guess. Done right it deflects volume without risking trust.",
    steps: [
      "Assemble the ground truth: your knowledge base, docs, and past resolved tickets.",
      "Instruct the agent to answer ONLY from that material and to escalate when unsure.",
      "Define escalation rules: sensitive topics, angry customers, anything not clearly covered.",
      "Start with the agent drafting responses for human approval, not auto-sending.",
      "Test against real past tickets and measure accuracy before expanding.",
      "Keep humans on escalations permanently, and monitor for drift as your product changes.",
    ],
    prompt: `You are a customer support agent. Draft a response to this ticket, grounded only in the reference material provided.

Reference material (knowledge base / past resolutions):
"""
[PASTE YOUR KB / DOCS / RESOLVED TICKETS]
"""

Customer ticket:
"""
[PASTE THE TICKET]
"""

Instructions:
1. Answer ONLY using the reference material—do not invent policies or facts
2. If the answer isn't clearly in the material, say so and recommend escalation to a human
3. Escalate anyway if the customer seems upset, or the issue is sensitive/high-stakes
4. Match a helpful, professional tone

Draft for my approval. When in doubt, escalate rather than guess—a wrong answer is worse than a handoff.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "How to Build Notion AI Agents: Real Examples + 5-Step Guide",
        type: "Article",
        url: "https://buildtolaunch.substack.com/p/notion-ai-agents-examples-guide",
      },
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
    ],
  },
{
    id: "45",
    title: "Build a Sales Research Agent",
    slug: "build-a-sales-research-agent",
    description:
      "Set up an agent that researches prospects and accounts before calls—pulling company context, recent news, and relevant talking points into a prep brief—so you walk in informed without an hour of manual digging. This workflow covers designing accurate, verifiable prep.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 3-5 hours/week",
    audience: ["Sales professionals", "Account executives", "Founders selling", "Business development"],
    problem:
      "Good sales prep means researching each prospect—their company, recent developments, likely needs, relevant hooks—but done manually it's an hour per account that reps rarely have. So calls happen under-prepared, or prep gets skipped and the pitch lands generic. The research is patterned enough to systematize but too time-consuming to do by hand at volume.",
    solution:
      "A sales research agent can gather and structure account prep: company overview, recent news, potential pain points, and conversation hooks—into a brief you skim before the call. Because it will surface facts you'll repeat to a prospect, the design must require sources and flag anything unverified, so you don't walk in citing something that's wrong. You bring the selling judgment; the agent removes the manual digging.",
    steps: [
      "Define what your ideal prep brief contains—the fields that actually help you sell.",
      "Use an agent with web-search capability so it can pull current company info.",
      "Instruct it to research the account and produce a structured brief with sourced facts.",
      "Require citations for anything you might repeat to the prospect, and flag the unverified.",
      "Verify key claims before the call—especially recent news and named facts.",
      "Turn it into a repeatable template you run before every meeting.",
    ],
    prompt: `You are a sales research agent. Prepare a prospect brief for an upcoming call.

Prospect / account: [company and/or person]
What I sell: [your product/service]
Call goal: [discovery / demo / etc.]

Produce a prep brief with:
1. Company overview (what they do, size, market)
2. Recent news or developments relevant to my outreach, with sources
3. Likely pain points my offering could address
4. Conversation hooks and smart questions to ask
5. Anything I should verify before citing it to them

Cite sources for factual claims. Clearly flag anything you couldn't verify—I don't want to repeat something wrong to a prospect.`,
    tools: ["Claude", "ChatGPT", "Perplexity"],
    resources: [
      {
        title: "Build Your First Custom Agent",
        type: "Guide",
        url: "https://www.notion.com/help/guides/build-your-first-custom-agent",
      },
      {
        title: "Zapier – Notion Integrations",
        type: "Tool",
        url: "https://zapier.com/apps/notion/integrations",
      },
    ],
  },
{
    id: "46",
    title: "Build a Competitive Intelligence Agent",
    slug: "build-a-competitive-intelligence-agent",
    description:
      "Set up an agent that tracks competitors—monitoring their announcements, changes, and positioning—and digests it into periodic updates, so you stay informed without manually checking a dozen sources. This workflow covers scoping accurate, sourced monitoring.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 2-4 hours/week",
    audience: ["Product managers", "Founders", "Marketing leaders", "Strategy teams"],
    problem:
      "Keeping tabs on competitors is important and perpetually deprioritized. Manually checking competitor sites, news, and channels is tedious, so it happens sporadically and you find out about a major move late. The monitoring is repetitive and rule-based, but stitching it together across sources by hand doesn't scale.",
    solution:
      "A competitive intelligence agent can monitor the sources you specify, gather what's changed, and digest it into a periodic sourced update—so you learn about competitor moves promptly without the manual checking. The design emphasis is on accuracy and sourcing: it should report what it can verify with links, distinguish confirmed news from speculation, and avoid inventing developments. You interpret the strategic implications; it handles the watching.",
    steps: [
      "List the competitors and the specific sources worth monitoring (sites, blogs, news, channels).",
      "Define what matters: product launches, pricing changes, positioning shifts, hires.",
      "Use a web-search-capable agent to gather and digest changes into a sourced update.",
      "Require links for every claimed development and separate confirmed from rumored.",
      "Set a cadence (weekly/monthly) and review the digests for the strategic 'so what.'",
      "Verify anything significant before acting on it—competitive moves get misreported.",
    ],
    prompt: `You are a competitive intelligence agent. Produce a competitor update.

Competitors to track: [list]
What I care about: [launches, pricing, positioning, hiring, etc.]
Sources to prioritize: [their sites, blogs, reputable news]

Produce:
1. Notable developments per competitor, each with a source link
2. A clear split between confirmed news and speculation/rumor
3. What each development might mean for us (brief)
4. Anything that needs verification before I rely on it

Only report developments you can source. Do not invent or infer changes that aren't supported. Flag when something is unconfirmed.`,
    tools: ["Claude", "ChatGPT", "Perplexity"],
    resources: [
      {
        title: "How to Build Notion AI Agents: Real Examples + 5-Step Guide",
        type: "Article",
        url: "https://buildtolaunch.substack.com/p/notion-ai-agents-examples-guide",
      },
      {
        title: "n8n – AI Automation Workflows (with Notion)",
        type: "Tool",
        url: "https://n8n.io/workflows/categories/ai/",
      },
    ],
  },
{
    id: "47",
    title: "Build a Data Analysis Agent",
    slug: "build-a-data-analysis-agent",
    description:
      "Set up an agent that explores a dataset, runs the analysis, and explains what it found in plain language—so you can ask questions of your data without writing every query yourself. This workflow covers verifying its work so you don't act on wrong numbers.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 3-5 hours per analysis",
    audience: ["Analysts", "Operations leaders", "Founders", "Data-literate managers"],
    problem:
      "Getting answers from data usually means someone who can write queries or formulas—a bottleneck when the people with the questions can't do the analysis themselves. Even for the analytically capable, exploratory analysis is time-consuming. But AI-run analysis carries a real risk: a confident, wrong number is worse than no number, so verification is non-negotiable.",
    solution:
      "A data analysis agent can take a dataset and a question, explore it, run the analysis, and explain the findings in plain language—letting non-analysts interrogate data directly. The essential design discipline is verifiability: it should show its work (the logic, the calculations), state its assumptions, and flag data-quality issues, so you can check the reasoning before trusting the result. Treat it as a fast analyst whose work you spot-check, not an oracle.",
    steps: [
      "Prepare the dataset and be clear about the question you're asking.",
      "Use a tool with code/data-analysis capability (Claude, ChatGPT with data analysis).",
      "Ask it to explore the data, answer your question, and show its working and assumptions.",
      "Have it flag data-quality issues—missing values, outliers, small samples—that affect the answer.",
      "Verify the logic and spot-check key numbers before acting; agents make calculation and interpretation errors.",
      "For recurring analyses, save the approach as a repeatable template.",
    ],
    prompt: `You are a data analysis agent. Analyze this data and explain what you find—showing your work.

The data:
"""
[PASTE OR DESCRIBE/ATTACH THE DATASET]
"""

My question: [what you want to know]

Do the following:
1. Explore the data and note its shape and any quality issues (missing values, outliers, small sample)
2. Answer my question, showing the calculations and logic you used
3. State any assumptions you made
4. Give the plain-language takeaway
5. Flag anything I should verify or be cautious about

Show your reasoning so I can check it. Don't present an uncertain result as definitive—call out where the data doesn't fully support a conclusion.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "Notion Database Automations: The Complete Guide",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-database-automations-the-complete-guide/",
      },
      {
        title: "Everything You Can Do with Notion AI",
        type: "Guide",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
    ],
  },
{
    id: "48",
    title: "Build a Content Workflow Agent",
    slug: "build-a-content-workflow-agent",
    description:
      "Set up an agent that moves content through its stages—from brief to draft to formatted, platform-ready output—so your publishing pipeline runs with less manual handoff. This workflow covers keeping editorial judgment and brand voice in human hands.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 4-6 hours/week",
    audience: ["Content marketers", "Founders", "Marketing teams", "Creators"],
    problem:
      "Content production is a multi-stage pipeline—brief, draft, edit, format, adapt per platform—with manual handoffs at every step. It's slow and repetitive, and the mechanical parts (formatting, reformatting for each channel) eat time that should go to ideas and quality. But fully automated content tends to be generic and off-brand, so the human has to stay where it matters.",
    solution:
      "A content workflow agent can handle the mechanical stages—turning a brief into a structured draft, formatting, adapting one piece for multiple platforms—while you keep control of the editorial judgment and brand voice. The design principle is human-owns-quality: the agent accelerates the pipeline's repetitive parts, but a person shapes the ideas, approves the voice, and does the final edit before anything publishes. That keeps speed without the generic-AI-slop problem.",
    steps: [
      "Map your content pipeline stages and identify which are mechanical vs. judgment-based.",
      "Give the agent your brand voice guidelines and examples so drafts start closer to right.",
      "Have it take a brief to a structured first draft—which you then edit for substance and voice.",
      "Use it for the mechanical work: formatting, and adapting one piece across platforms.",
      "Keep a human approval gate before anything publishes—voice and accuracy are yours to own.",
      "Refine the voice guidance over time as you see where its drafts drift generic.",
    ],
    prompt: `You are a content workflow agent. Help move this content through its stages. I own the editorial judgment and voice—you handle structure and mechanics.

Brand voice guidelines: [describe, with examples]
The brief:
"""
[PASTE THE CONTENT BRIEF]
"""
Stage I need: [first draft / format / adapt for platforms]

For a first draft: produce a structured draft in my brand voice that I'll edit.
For formatting/adapting: reformat the provided content for [platforms].

Stay close to my brand voice—flag where you're unsure of tone. Don't publish or treat anything as final; everything comes back to me for approval. Avoid generic filler.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "Zapier – Notion Integrations",
        type: "Tool",
        url: "https://zapier.com/apps/notion/integrations",
      },
      {
        title: "Make – Notion Integration",
        type: "Tool",
        url: "https://www.make.com/en/integrations/notion",
      },
    ],
  },
{
    id: "49",
    title: "Build a Document Review Agent",
    slug: "build-a-document-review-agent",
    description:
      "Set up an agent that reviews documents against a checklist or standard—flagging issues, gaps, and risks for a human to confirm—so first-pass review scales without a person reading every line. This workflow covers using it as a flagging aid, never the final word.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 3-5 hours/week",
    audience: ["Operations leaders", "Consultants", "Legal-adjacent roles", "Quality reviewers"],
    problem:
      "Reviewing documents—contracts, submissions, reports—against a standard is careful, tiring work that doesn't scale. A human has to read every line to catch the missing clause, the inconsistency, the risk. Volume forces a choice between slow, thorough review and fast, error-prone skimming. The first-pass flagging is patterned enough to assist, but the stakes demand human confirmation.",
    solution:
      "A document review agent can do a structured first pass: checking a document against a checklist or standard you provide, flagging potential issues, gaps, and inconsistencies for a human to confirm. It's a flagging aid that makes human review faster and more consistent—it catches candidates, you make the calls. The design rule is absolute: it never gives the final sign-off on anything consequential, especially anything legal or compliance-related. It surfaces; humans decide.",
    steps: [
      "Define the standard: the checklist, criteria, or requirements to review against.",
      "Provide a document and ask the agent to check it against that standard.",
      "Have it flag issues, gaps, and inconsistencies—with the specific location of each.",
      "Treat every flag as a candidate for human review, not a verdict.",
      "Confirm each flag yourself; the agent will both miss things and raise false positives.",
      "Never let it be the final approver on legal, compliance, or high-stakes documents.",
    ],
    prompt: `You are a document review agent doing a FIRST-PASS review for a human to confirm. You flag; I decide.

Review standard / checklist:
"""
[PASTE YOUR CHECKLIST OR CRITERIA]
"""

Document to review:
"""
[PASTE THE DOCUMENT]
"""

Do the following:
1. Check the document against each item in the standard
2. Flag issues, gaps, and inconsistencies—quote the relevant text and its location
3. Note anything that looks like a risk or omission
4. Separate high-confidence flags from things I should look at just in case

These are candidates for my review, not conclusions. You may miss things and raise false positives—I will confirm every flag. Do not give final approval on anything.`,
    tools: ["Claude", "ChatGPT", "Copilot"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Notion Custom Agents: Full Tutorial, Use Cases & Pricing",
        type: "Guide",
        url: "https://matthiasfrank.de/en/notion-custom-agents-full-tutorial-use-cases-pricing-changes/",
      },
    ],
  },
{
    id: "50",
    title: "Build a Knowledge Assistant Agent",
    slug: "build-a-knowledge-assistant-agent",
    description:
      "Set up an agent that answers questions from your team's own documents and knowledge base—so people get accurate, sourced answers instantly instead of searching or asking around. This workflow covers grounding it in your content and citing sources.",
    category: "AI Agents",
    difficulty: "Advanced",
    timeSaved: "Save 3-5 hours/week across the team",
    audience: ["Operations leaders", "Knowledge managers", "Team leads", "Founders scaling a team"],
    problem:
      "The knowledge exists—in docs, wikis, past decisions—but finding it means searching a system that doesn't surface answers well, or interrupting the one person who knows. As teams grow, the same questions get asked repeatedly and answered inconsistently. The knowledge is there; the retrieval is broken.",
    solution:
      "A knowledge assistant agent grounded in your team's actual documents can answer questions directly, with citations back to the source—turning a static knowledge base into something you can just ask. The design essential is grounding: it must answer only from your content, cite where each answer comes from, and say 'not found' rather than invent. That's what makes it trustworthy enough to reduce the repeat-question load instead of adding a new source of wrong answers.",
    steps: [
      "Assemble and organize the source content: docs, wiki, past decisions, FAQs.",
      "Set up an agent that can reference that content (a tool that connects to your knowledge base).",
      "Instruct it to answer ONLY from the sources and to cite where each answer comes from.",
      "Require it to say 'not found in our docs' rather than guess when something isn't covered.",
      "Test with real questions your team asks; check answers and citations for accuracy.",
      "Keep the source content current—the assistant is only as good as what it's grounded in.",
    ],
    prompt: `You are a knowledge assistant grounded in our team's documents. Answer only from the provided sources, and cite them.

Our knowledge sources:
"""
[PASTE OR CONNECT YOUR DOCS / WIKI / FAQS]
"""

Question:
"""
[THE QUESTION]
"""

Instructions:
1. Answer using ONLY the provided sources
2. Cite which document/section each part of your answer comes from
3. If the answer isn't in the sources, say "not found in our docs"—do not guess or use outside knowledge
4. If sources conflict or are outdated, point that out

Accuracy and honesty matter more than completeness. A cited "I don't know" is better than a confident wrong answer.`,
    tools: ["Claude", "ChatGPT", "Notion AI"],
    resources: [
      {
        title: "How to build a knowledge management system (Notion)",
        type: "Article",
        url: "https://www.notion.com/blog/how-to-build-a-knowledge-management-system",
      },
      {
        title: "Build Your First Custom Agent",
        type: "Guide",
        url: "https://www.notion.com/help/guides/build-your-first-custom-agent",
      },
    ],
  },
{
    id: "51",
    title: "Automate Data Entry Between Apps",
    slug: "automate-data-entry-between-apps",
    description:
      "Stop copying the same information from one tool into another by hand—set up a no-code automation that moves data between your apps automatically whenever something happens. This workflow covers designing a reliable trigger-and-action flow and testing it before it goes live.",
    category: "Automation",
    difficulty: "Beginner",
    timeSaved: "Save 2-4 hours/week",
    audience: ["Operations leaders", "Team leads", "Freelancers", "Anyone doing repetitive data entry"],
    problem:
      "So much time disappears into manually copying data between tools: a form submission into a spreadsheet, a new contact into the CRM, an order into a tracking sheet. It's tedious, error-prone, and exactly the kind of mechanical work that shouldn't need a human—but wiring apps together sounds technical, so it never gets done.",
    solution:
      "No-code automation platforms like Zapier and Make connect your apps with a simple 'when this happens, do that' model—no coding required. You define a trigger (a new form response) and an action (add a row to a sheet), and the data moves itself. The key discipline is testing thoroughly before switching it on and starting with one simple flow, since a misconfigured automation can quietly copy wrong data at scale.",
    steps: [
      "Identify one repetitive copy-paste task that follows a clear 'when X, do Y' pattern.",
      "Pick a platform (Zapier is the most beginner-friendly; Make offers more control).",
      "Set the trigger (the event that starts it) and the action (what should happen).",
      "Map the fields carefully—which piece of source data goes into which destination field.",
      "Test with real sample data and check the destination before turning it on live.",
      "Turn it on, then monitor the first day's runs to confirm it's behaving as expected.",
    ],
    prompt: `I want to automate a repetitive data-entry task between two apps. Help me design the automation before I build it.

The task I do manually: [describe what you copy, from where, to where]
Apps involved: [e.g. Google Forms -> Google Sheets, or Typeform -> HubSpot]
How often: [frequency]

Help me:
1. Define the exact trigger (what event should start the automation)
2. Define the action (what should happen when it triggers)
3. Map which source fields go to which destination fields
4. List what I should test before turning it on
5. Flag anything that could go wrong (duplicate entries, missing data) and how to guard against it

Keep it simple—one clean flow I can build and trust. Note where I'd use Zapier vs. Make for this.`,
    tools: ["Zapier", "Make", "n8n"],
    resources: [
      {
        title: "Zapier – Notion Integrations",
        type: "Tool",
        url: "https://zapier.com/apps/notion/integrations",
      },
      {
        title: "Make – Notion Integration",
        type: "Tool",
        url: "https://www.make.com/en/integrations/notion",
      },
      {
        title: "The Ultimate Guide to Notion Automations & the API",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-automations/",
      },
    ],
  },
{
    id: "52",
    title: "Build a Lead Capture Automation",
    slug: "build-a-lead-capture-automation",
    description:
      "Make sure no lead ever falls through the cracks—automatically route new inquiries from forms, email, or ads into your CRM, notify the right person, and kick off follow-up. This workflow covers designing the routing and the guardrails so leads are handled fast and consistently.",
    category: "Automation",
    difficulty: "Intermediate",
    timeSaved: "Save 3-5 hours/week",
    audience: ["Sales teams", "Founders", "Operations leaders", "Marketing teams"],
    problem:
      "Leads arrive from everywhere—website forms, email, social, ads—and manually capturing each one, logging it, and making sure someone follows up is slow and leaky. A lead that sits unnoticed for a day is often a lost one. The routing is patterned and rule-based, but doing it by hand means speed and consistency suffer exactly when they matter most.",
    solution:
      "An automation can catch each new lead the moment it arrives, add it to your CRM with the right details, alert the owner, and even trigger a first response—consistently, within seconds. You design the routing rules and the guardrails (deduplication, required fields); the automation handles the speed and reliability. Start with one lead source and expand once it's proven, so you're not debugging five channels at once.",
    steps: [
      "Map where leads currently come from and where they need to end up.",
      "Start with your highest-volume source and build one reliable capture flow.",
      "Set the trigger (new form entry) and actions (add to CRM, notify owner).",
      "Add guardrails: deduplicate against existing contacts, require key fields.",
      "Test with real submissions and confirm nothing is lost or duplicated.",
      "Once solid, add the next lead source to the same system.",
    ],
    prompt: `Help me design a lead-capture automation so no inquiry gets missed.

Lead sources: [website form, email, ads, etc.]
Where leads should go: [CRM name]
Who should be notified: [role/person]
Any follow-up that should auto-trigger: [e.g. confirmation email]

Design the automation:
1. The trigger for each lead source
2. The actions (add to CRM with which fields, notify whom, any auto-response)
3. Deduplication logic so the same lead isn't added twice
4. What to test before going live
5. What could break and how I'd know

Recommend starting with one source. Tell me where Zapier vs. Make fits, and flag anything that needs error handling.`,
    tools: ["Zapier", "Make", "n8n"],
    resources: [
      {
        title: "Zapier – Notion Integrations",
        type: "Tool",
        url: "https://zapier.com/apps/notion/integrations",
      },
      {
        title: "n8n – AI Automation Workflows (with Notion)",
        type: "Tool",
        url: "https://n8n.io/workflows/categories/ai/",
      },
    ],
  },
{
    id: "53",
    title: "Automate Notifications and Alerts",
    slug: "automate-notifications-and-alerts",
    description:
      "Get told the moment something important happens—a big deal closes, a metric crosses a threshold, a task goes overdue—instead of finding out when you next check. This workflow covers designing alerts that inform without becoming noise you learn to ignore.",
    category: "Automation",
    difficulty: "Beginner",
    timeSaved: "Save 1-3 hours/week",
    audience: ["Managers", "Operations leaders", "Team leads", "Founders"],
    problem:
      "The things you most need to know about often happen quietly: a payment fails, a high-value lead comes in, a project slips past its deadline. Without alerts you find out late, by manually checking dashboards and inboxes. But naive alerting swings the other way—so many notifications that you tune them all out, missing the one that mattered.",
    solution:
      "Automations can watch your systems and notify you—via Slack, email, or text—only when something genuinely warrants attention. The whole craft here is signal-to-noise: defining thresholds tight enough that every alert is worth reading. You decide what actually merits interrupting you; the automation watches tirelessly so you don't have to. Done well, you check dashboards less and trust that you'll be told what matters.",
    steps: [
      "List the events that genuinely warrant an interruption—be strict; not everything qualifies.",
      "For each, define the precise condition that should trigger an alert.",
      "Set the channel (Slack for team, text for urgent, email for FYI) to match urgency.",
      "Build the automation and test that alerts fire correctly—and don't fire when they shouldn't.",
      "Live with it a week and prune anything that turned out to be noise.",
      "Tune thresholds so every remaining alert is one you'd want.",
    ],
    prompt: `Help me design useful alerts—enough to keep me informed, not so many I tune them out.

Things I want to be alerted about:
"""
[LIST THE EVENTS: e.g. deal over $X closes, payment fails, task overdue, metric crosses threshold]
"""
Where each should go: [Slack / email / text, by urgency]

For each alert:
1. Define the precise trigger condition (be specific to avoid false alarms)
2. Recommend the right channel based on urgency
3. Note the risk of it becoming noise, and how to keep it meaningful

Then tell me which of these are genuinely alert-worthy vs. better as a periodic digest. Push back if I'm asking for too many real-time alerts—I'd rather not create notification fatigue.`,
    tools: ["Zapier", "Make", "n8n"],
    resources: [
      {
        title: "Zapier – Notion Integrations",
        type: "Tool",
        url: "https://zapier.com/apps/notion/integrations",
      },
      {
        title: "Notion Database Automations: Complete 2026 Guide (12 Examples)",
        type: "Article",
        url: "https://sync2sheets.com/blog/notion-database-automations/",
      },
    ],
  },
{
    id: "54",
    title: "Sync Data Across Your Tools",
    slug: "sync-data-across-your-tools",
    description:
      "Keep the same information consistent everywhere it lives—so updating a record in one tool updates it in the others, and your systems stop disagreeing with each other. This workflow covers designing a reliable sync and avoiding the loops and conflicts that trip people up.",
    category: "Automation",
    difficulty: "Advanced",
    timeSaved: "Save 2-4 hours/week",
    audience: ["Operations leaders", "RevOps / systems admins", "Founders", "Data-minded managers"],
    problem:
      "When the same information lives in multiple tools—CRM, spreadsheet, billing, project tracker—they drift out of sync. Someone updates a contact in one place and now three systems disagree. Manually keeping them aligned is endless, and the inconsistencies cause real mistakes: wrong emails, wrong totals, duplicated effort.",
    solution:
      "A sync automation keeps records consistent across tools: change something in one, and the others update to match. This is more advanced than a one-way flow because you have to handle direction, conflicts, and loops carefully—a naive two-way sync can ping-pong updates endlessly. Done right, with clear rules about which system is the source of truth, it eliminates a whole category of drift. Start one-directional and add complexity only as needed.",
    steps: [
      "Decide which tool is the source of truth for each field—this prevents conflicts.",
      "Start with a one-way sync (source -> others) before attempting two-way.",
      "Build the automation to push changes from the source to the destinations.",
      "Add safeguards against infinite loops if you later make it two-way.",
      "Test extensively with edge cases—simultaneous edits, deletions, missing fields.",
      "Monitor closely at first; sync errors compound quietly if unwatched.",
    ],
    prompt: `Help me design a data sync between my tools—carefully, since syncs can create loops and conflicts.

Tools and the data to keep in sync:
"""
[e.g. keep contact info consistent between HubSpot and a Google Sheet]
"""
Which tool should be the source of truth: [if you know]

Help me:
1. Decide the source of truth for each field
2. Design a one-way sync first (I'll consider two-way only if needed)
3. Identify conflict and loop risks, and how to prevent them
4. List edge cases to test (simultaneous edits, deletions, empty fields)
5. Recommend Make or n8n over Zapier if the logic is complex, and say why

Steer me toward the simplest reliable design. Warn me clearly about anything that could cause a runaway loop.`,
    tools: ["Make", "n8n", "Zapier"],
    resources: [
      {
        title: "Make – Notion Integration",
        type: "Tool",
        url: "https://www.make.com/en/integrations/notion",
      },
      {
        title: "Notion Database Automations: The Complete Guide",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-database-automations-the-complete-guide/",
      },
    ],
  },
{
    id: "55",
    title: "Automate Recurring Task Creation",
    slug: "automate-recurring-task-creation",
    description:
      "Stop manually recreating the same tasks every week, month, or project kickoff—have them generated automatically on a schedule or trigger, fully assigned and ready. This workflow covers setting up recurring and templated task automation that stays reliable.",
    category: "Automation",
    difficulty: "Beginner",
    timeSaved: "Save 1-2 hours/week",
    audience: ["Project managers", "Operations leaders", "Team leads", "Freelancers"],
    problem:
      "Lots of work is predictable: the same onboarding checklist for every new hire, the same month-end close tasks, the same weekly report prep. Recreating these by hand each time is pure overhead, and doing it manually means steps get forgotten and timing slips. It's the definition of work a machine should do.",
    solution:
      "Automations can generate tasks on a schedule or in response to a trigger—spinning up a full templated checklist, assigned and dated, the moment a project starts or a date arrives. You define the template and the trigger once; the automation reproduces it perfectly every time. This pairs naturally with the SOPs and templates you've built, turning documented processes into ones that kick off on their own.",
    steps: [
      "Identify a set of tasks you recreate on a schedule or at a predictable trigger.",
      "Build the task template: the steps, owners, and relative due dates.",
      "Set the trigger—a schedule (every Monday, month-end) or an event (new project created).",
      "Configure the automation to generate the tasks in your PM tool, assigned and dated.",
      "Test one cycle end to end and confirm tasks appear correctly.",
      "Refine the template over time as the process improves.",
    ],
    prompt: `Help me automate creating a recurring set of tasks so I stop rebuilding them by hand.

The tasks I recreate repeatedly:
"""
[LIST THE TASKS, WITH OWNERS AND ROUGH TIMING]
"""
What should trigger them: [a schedule like month-end, or an event like "new client added"]
My PM tool: [e.g. Notion, Asana, ClickUp]

Help me:
1. Turn these into a clean reusable task template (steps, owners, relative due dates)
2. Define the trigger (schedule or event)
3. Design the automation to generate them assigned and dated
4. List what to test in the first cycle
5. Note how to handle changes (e.g. if the template needs updating later)

Keep it simple and reliable. Tell me if my PM tool's native recurring features would be simpler than a Zapier/Make automation here.`,
    tools: ["Zapier", "Make", "Notion AI"],
    resources: [
      {
        title: "Database Automations (Official Guide)",
        type: "Guide",
        url: "https://www.notion.com/help/database-automations",
      },
      {
        title: "Notion Database Automations: Complete 2026 Guide (12 Examples)",
        type: "Article",
        url: "https://sync2sheets.com/blog/notion-database-automations/",
      },
    ],
  },
{
    id: "56",
    title: "Automate File Organization and Backups",
    slug: "automate-file-organization-and-backups",
    description:
      "Keep files sorted and backed up without thinking about it—automatically route new documents to the right folders, rename them consistently, and copy important ones to backup. This workflow covers setting up file automations that run quietly in the background.",
    category: "Automation",
    difficulty: "Beginner",
    timeSaved: "Save 1-2 hours/week",
    audience: ["Operations leaders", "Freelancers", "Consultants", "Anyone managing lots of files"],
    problem:
      "Files pile up in a mess: downloads folder chaos, attachments never saved properly, important documents with no backup. Organizing them manually is a chore nobody keeps up with, and the lack of consistent backups is a risk that stays invisible until something is lost.",
    solution:
      "Automations can watch a folder or inbox and act on new files: sort them into the right place by type or name, apply consistent naming, and copy critical files to a backup location. You set the rules once; the tidying happens automatically. It's a low-stakes, high-satisfaction place to start with automation—mistakes are easy to catch and the payoff is immediate.",
    steps: [
      "Pick one file pain point: messy downloads, unsaved attachments, or missing backups.",
      "Define the rule: when a file matching X appears, move/rename/copy it to Y.",
      "Build the automation on your file platform (Google Drive, Dropbox, OneDrive via Zapier/Make).",
      "Test with sample files and confirm they land in the right place, correctly named.",
      "For backups, verify the copy actually appears in the backup location.",
      "Expand to other file types once the first rule runs reliably.",
    ],
    prompt: `Help me automate file organization and backups so I stop doing it by hand.

My file problem:
"""
[e.g. email attachments never get saved; downloads folder is chaos; no backup of client files]
"""
Where files live: [Google Drive, Dropbox, OneDrive, etc.]

Help me:
1. Define the rule (when a file like X appears, do Y — move, rename, copy)
2. Design a consistent naming convention if useful
3. Set up the backup copy for critical files
4. List what to test before trusting it
5. Note any risk (e.g. overwriting, wrong-folder routing) and how to avoid it

Keep it simple—this is a good first automation. Tell me the Zapier or Make setup for my file platform.`,
    tools: ["Zapier", "Make", "n8n"],
    resources: [
      {
        title: "The Ultimate Guide to Notion Automations & the API",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-automations/",
      },
      {
        title: "Make – Notion Integration",
        type: "Tool",
        url: "https://www.make.com/en/integrations/notion",
      },
    ],
  },
{
    id: "57",
    title: "Build an Approval Workflow Automation",
    slug: "build-an-approval-workflow-automation",
    description:
      "Turn a messy approval chain—expense requests, content sign-offs, time off—into an automated flow that routes each request to the right approver, tracks status, and nudges when it stalls. This workflow covers designing the routing and keeping a human decision at each gate.",
    category: "Automation",
    difficulty: "Intermediate",
    timeSaved: "Save 2-3 hours/week",
    audience: ["Operations leaders", "Managers", "Team leads", "Founders"],
    problem:
      "Approvals get stuck in inboxes. A request goes out, the approver misses it, the requester doesn't know the status, and days pass. Chasing approvals manually and tracking who's approved what is tedious coordination work, and the delays hold up real business.",
    solution:
      "An automation can route each request to the right approver, track its status, send reminders when it stalls, and notify the requester on a decision—while keeping the actual approve/reject decision firmly with a human. The automation handles the routing and chasing, not the judgment. You design who approves what and the escalation rules; the flow removes the coordination overhead that causes delays.",
    steps: [
      "Map the approval: what's being approved, who approves it, and any thresholds (e.g. amounts over $X need a second approver).",
      "Design the routing—which request goes to which approver.",
      "Build the flow: request submitted -> routed to approver -> decision recorded -> requester notified.",
      "Add reminders for stalled approvals and an escalation path.",
      "Keep the approve/reject decision human—the automation routes and tracks, it doesn't decide.",
      "Test each path (approve, reject, escalate) before rolling out.",
    ],
    prompt: `Help me design an approval workflow automation. The routing should be automated but the actual approval decision stays with a human.

What needs approving: [e.g. expenses, content, time off]
Who approves what (including any thresholds):
"""
[e.g. expenses under $500 -> manager; over $500 -> manager then finance]
"""

Design the flow:
1. How a request gets submitted and routed to the right approver
2. How status is tracked and the requester is kept informed
3. Reminders for stalled approvals and an escalation path
4. Confirmation that the approve/reject decision remains a human action
5. Each path to test (approved, rejected, escalated)

Keep humans in control of decisions. Recommend the right tool and flag where it could get stuck.`,
    tools: ["Make", "Zapier", "n8n"],
    resources: [
      {
        title: "Automations (Notion Help Center Guides)",
        type: "Guide",
        url: "https://www.notion.com/help/guides/category/automations",
      },
      {
        title: "Notion Database Automations: The Complete Guide",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-database-automations-the-complete-guide/",
      },
    ],
  },
{
    id: "58",
    title: "Automate Social Media Posting",
    slug: "automate-social-media-posting",
    description:
      "Keep a consistent posting schedule without living in each platform—queue content once and have it publish across channels automatically, on schedule. This workflow covers automating the mechanics of publishing while keeping a human eye on what actually goes out.",
    category: "Automation",
    difficulty: "Beginner",
    timeSaved: "Save 2-3 hours/week",
    audience: ["Marketers", "Founders", "Creators", "Small business owners"],
    problem:
      "Consistent social presence means logging into each platform, at the right time, to post the right thing—repetitive work that's easy to let slide. Manually posting across channels is a time sink, and inconsistency (going quiet for weeks) undercuts the whole effort.",
    solution:
      "Automation handles the publishing mechanics: you prepare content in one place, and it posts to your channels on schedule. The important boundary is that a human still approves what goes out—automating distribution is smart, but auto-generating and auto-posting unreviewed content risks embarrassing or off-brand posts. So automate the scheduling and cross-posting; keep the sign-off human. That gives you consistency without ceding editorial control.",
    steps: [
      "Decide your channels and a realistic posting cadence.",
      "Prepare content in a single source (a sheet, a content calendar, or a scheduler).",
      "Set up the automation to publish to each channel on schedule.",
      "Keep a human approval step before anything publishes—review the queue.",
      "Test with a low-stakes post per channel to confirm formatting survives.",
      "Monitor the first week; each platform mangles formatting differently.",
    ],
    prompt: `Help me automate social media posting so I stay consistent—but keep a human approval step before anything publishes.

My channels: [list]
How I want to prepare content: [e.g. a Google Sheet, a content calendar]
Posting cadence: [e.g. 3x/week]

Help me:
1. Design a flow: content queued in one place -> scheduled -> posted to each channel
2. Build in a review/approval step before publishing
3. Note how each platform may mangle formatting (character limits, images, links)
4. List what to test per channel
5. Recommend whether a dedicated scheduler or a Zapier/Make flow fits better

Do NOT design anything that auto-generates and auto-posts unreviewed content—I want to approve what goes out. Flag brand-risk points.`,
    tools: ["Zapier", "Make", "n8n"],
    resources: [
      {
        title: "Zapier – Notion Integrations",
        type: "Tool",
        url: "https://zapier.com/apps/notion/integrations",
      },
      {
        title: "n8n – AI Automation Workflows (with Notion)",
        type: "Tool",
        url: "https://n8n.io/workflows/categories/ai/",
      },
    ],
  },
{
    id: "59",
    title: "Connect AI to Your Automations",
    slug: "connect-ai-to-your-automations",
    description:
      "Add an AI step inside a no-code automation—so a flow can summarize, categorize, extract, or draft as it runs, not just move data. This workflow covers combining automation platforms with AI while keeping the reliability an automation needs.",
    category: "Automation",
    difficulty: "Advanced",
    timeSaved: "Save 3-5 hours/week",
    audience: ["Operations leaders", "RevOps", "Technical marketers", "Automation builders"],
    problem:
      "Plain automations move data but can't think—they can copy a support email to a sheet, but not categorize it, gauge its sentiment, or draft a reply. That leaves a gap where a human still has to step in to do the judgment part, breaking the flow. The pieces exist separately; the value is in connecting them.",
    solution:
      "Modern automation platforms (Make, n8n, Zapier) can call an AI model as a step in a flow—so an automation can summarize, classify, extract, or draft mid-pipeline. A support email arrives, AI categorizes and drafts a response, the automation routes it for human approval. The design challenge is reliability: AI steps are less predictable than deterministic ones, so you validate outputs, handle errors, and keep humans on anything consequential. This is where automation and AI combine into something genuinely powerful.",
    steps: [
      "Find a flow where a human currently does a 'thinking' step (categorize, summarize, draft).",
      "Choose a platform with a solid AI integration (Make and n8n are strong here).",
      "Insert an AI step: pass it the data, with a clear, constrained prompt.",
      "Validate the AI's output before the next step acts on it—handle the cases where it's wrong.",
      "Keep a human approval gate on anything that sends externally or makes a decision.",
      "Test with many real examples; AI steps fail in ways deterministic ones don't.",
    ],
    prompt: `Help me add an AI step inside a no-code automation—reliably.

The flow today: [what the automation does or would do]
The 'thinking' step I want AI to handle: [e.g. categorize incoming emails, summarize form responses, draft a reply]
Platform: [Make / n8n / Zapier]

Help me:
1. Design where the AI step fits in the flow
2. Write a clear, constrained prompt for that step so outputs are consistent
3. Add validation—how to check the AI output before the next step uses it
4. Add error handling for when the AI returns something unexpected
5. Identify where a human must stay in the loop

Prioritize reliability. Warn me where an AI step introduces unpredictability, and keep humans on anything consequential.`,
    tools: ["Make", "n8n", "Zapier"],
    resources: [
      {
        title: "n8n – AI Automation Workflows (with Notion)",
        type: "Tool",
        url: "https://n8n.io/workflows/categories/ai/",
      },
      {
        title: "The Ultimate Guide to Notion Automations & the API",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-automations/",
      },
    ],
  },
{
    id: "60",
    title: "Automate Report Generation and Delivery",
    slug: "automate-report-generation-and-delivery",
    description:
      "Have recurring reports build and send themselves—pull the data, assemble the report, and deliver it to the right people on schedule, without you touching it each period. This workflow covers automating the full pipeline while keeping accuracy checks in place.",
    category: "Automation",
    difficulty: "Advanced",
    timeSaved: "Save 3-5 hours per cycle",
    audience: ["Operations leaders", "Analysts", "Managers", "Founders"],
    problem:
      "Recurring reports are a full manual pipeline every cycle: pull data from several sources, assemble it into a report, and send it to stakeholders. Even when the structure is fixed, the fetching and distributing eats hours, and doing it under deadline invites errors and missed recipients.",
    solution:
      "An automation can run the whole pipeline: gather data from your sources on schedule, populate a report template, and deliver it to the right people—hands-off each period. This is advanced because it chains several steps that each must be reliable, so the design emphasis is on data validation and a sanity check before delivery. Many teams keep a human 'approve before send' gate on external reports. You build the pipeline once; it runs every cycle with you reviewing rather than assembling.",
    steps: [
      "Confirm the report structure is stable enough to templatize (pairs with the recurring-report workflow).",
      "Identify the data sources and whether each can be pulled automatically.",
      "Build the pipeline: fetch data -> populate template -> format -> deliver.",
      "Add a validation step that checks the data looks sane before the report goes out.",
      "Keep an approval gate on externally-sent reports until you fully trust it.",
      "Test several full cycles before relying on it unattended.",
    ],
    prompt: `Help me automate a recurring report end to end—data pull, assembly, and delivery—reliably.

The report: [what it is, how often, who receives it]
Data sources: [where the data lives and whether it can be pulled automatically]
Delivery: [email, Slack, shared doc]

Help me:
1. Design the pipeline (fetch -> populate template -> format -> deliver)
2. Add a data-validation/sanity-check step before it sends
3. Decide where a human approval gate belongs (especially for external reports)
4. List the full-cycle tests to run before trusting it unattended
5. Flag the steps most likely to break and how I'd be alerted

Prioritize accuracy over full automation—I'd rather approve before send than deliver a wrong report. Recommend the right platform for chaining these steps.`,
    tools: ["Make", "n8n", "Zapier"],
    resources: [
      {
        title: "The Ultimate Guide to Notion Automations & the API",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-automations/",
      },
      {
        title: "Notion Database Automations: The Complete Guide",
        type: "Guide",
        url: "https://thomasjfrank.com/notion-database-automations-the-complete-guide/",
      },
    ],
  },
];

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((workflow) => workflow.slug === slug);
}




