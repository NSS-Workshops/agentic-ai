import { nav } from "./nav.js";

import m1p1 from "./1_getting_started/page_one.md?raw";
import m1p2 from "./1_getting_started/page_two.md?raw";
import m1p3 from "./1_getting_started/page_three.md?raw";
import m1p4 from "./1_getting_started/page_four.md?raw";
import m1p5 from "./1_getting_started/page_five.md?raw";

import m2p1 from "./2_llms_and_agents/page_one.md?raw";
import m2p2 from "./2_llms_and_agents/page_two.md?raw";
import m2p3 from "./2_llms_and_agents/page_three.md?raw";
import m2p4 from "./2_llms_and_agents/page_four.md?raw";
import m2p5 from "./2_llms_and_agents/page_five.md?raw";
import m2p6 from "./2_llms_and_agents/page_six.md?raw";

import m3p1 from "./3_prompting_fundamentals/page_one.md?raw";
import m3p2 from "./3_prompting_fundamentals/page_two.md?raw";
import m3p3 from "./3_prompting_fundamentals/page_three.md?raw";
import m3p4 from "./3_prompting_fundamentals/page_four.md?raw";
import m3p5 from "./3_prompting_fundamentals/page_five.md?raw";

import m4p1 from "./4_exploring_unknown_codebase/page_one.md?raw";
import m4p2 from "./4_exploring_unknown_codebase/page_two.md?raw";
import m4p3 from "./4_exploring_unknown_codebase/page_three.md?raw";
import m4p4 from "./4_exploring_unknown_codebase/page_four.md?raw";

import m5p1 from "./5_claude_code_modes/page_one.md?raw";
import m5p2 from "./5_claude_code_modes/page_two.md?raw";
import m5p3 from "./5_claude_code_modes/page_three.md?raw";
import m5p4 from "./5_claude_code_modes/page_four.md?raw";
import m5p5 from "./5_claude_code_modes/page_five.md?raw";
import m5p6 from "./5_claude_code_modes/page_six.md?raw";

import m6p1 from "./6_context_and_memory/page_one.md?raw";
import m6p2 from "./6_context_and_memory/page_two.md?raw";
import m6p3 from "./6_context_and_memory/page_three.md?raw";
import m6p4 from "./6_context_and_memory/page_four.md?raw";
import m6p5 from "./6_context_and_memory/page_five.md?raw";
import m6p6 from "./6_context_and_memory/page_six.md?raw";

import m7p1 from "./7_implementing_features/page_one.md?raw";
import m7p2 from "./7_implementing_features/page_two.md?raw";
import m7p3 from "./7_implementing_features/page_three.md?raw";
import m7p4 from "./7_implementing_features/page_four.md?raw";

import m8p1 from "./8_workflows_and_tandem/page_one.md?raw";
import m8p2 from "./8_workflows_and_tandem/page_two.md?raw";
import m8p3 from "./8_workflows_and_tandem/page_three.md?raw";
import m8p4 from "./8_workflows_and_tandem/page_four.md?raw";
import m8p5 from "./8_workflows_and_tandem/page_five.md?raw";

import m9p1 from "./9_capstone/page_one.md?raw";
import m9p2 from "./9_capstone/page_two.md?raw";
import m9p3 from "./9_capstone/page_three.md?raw";

// Chapter entries are built module-by-module below. Within a module, each
// chapter's `previousChapterId` points at the preceding chapter so the "next /
// previous" buttons chain correctly.

const module1 = [
  { title: "What you'll need", content: m1p1 },
  { title: "Pro plan vs. API credits", content: m1p2 },
  { title: "Installing Claude Code", content: m1p3 },
  { title: "Rare repo setup", content: m1p4 },
  { title: "GitHub CLI", content: m1p5 },
];

const module2 = [
  { title: "The prediction robot", content: m2p1 },
  { title: "Tokens", content: m2p2 },
  { title: "The context window", content: m2p3 },
  { title: "Confidently wrong", content: m2p4 },
  { title: "From LLM to agent", content: m2p5 },
  { title: "Permission prompts", content: m2p6 },
];

const module3 = [
  { title: "Why prompting matters", content: m3p1 },
  { title: "Anatomy of a strong prompt", content: m3p2 },
  { title: "Kinds of context to provide", content: m3p3 },
  { title: "Good vs. bad prompts", content: m3p4 },
  { title: "Prompting is iterative", content: m3p5 },
];

const module4 = [
  { title: "The new-hire mindset", content: m4p1 },
  { title: "Questions to ask a new codebase", content: m4p2 },
  { title: "Turning exploration into artifacts", content: m4p3 },
  { title: "Verifying what Claude generates", content: m4p4 },
];

const module5 = [
  { title: "The loop: Understand → Plan → Break down → Build → Confirm", content: m5p1 },
  { title: "Why modes exist", content: m5p2 },
  { title: "Plan mode", content: m5p3 },
  { title: "Ask before edits", content: m5p4 },
  { title: "Edit automatically", content: m5p5 },
  { title: "Mode choice is deliberate", content: m5p6 },
];

const module6 = [
  { title: "The 50 First Dates coworker", content: m6p1 },
  { title: "CLAUDE.md as persistent context", content: m6p2 },
  { title: "What belongs in a CLAUDE.md", content: m6p3 },
  { title: "CLAUDE.md grows with your project", content: m6p4 },
  { title: "Managing context within a session", content: m6p5 },
  { title: "What not to persist", content: m6p6 },
];

const module7 = [
  { title: "The loop in practice", content: m7p1 },
  { title: "Avoiding vibe coding", content: m7p2 },
  { title: "Feature walkthroughs", content: m7p3 },
  { title: "Mid-feature pivots", content: m7p4 },
];

const module8 = [
  { title: "What you've learned, condensed", content: m8p1 },
  { title: "Why workflows matter", content: m8p2 },
  { title: "What is a Claude Code skill?", content: m8p3 },
  { title: "Introducing Tandem", content: m8p4 },
  { title: "Your user-level CLAUDE.md and Dev Profile", content: m8p5 },
];

const module9 = [
  { title: "Greenfield is different from brownfield", content: m9p1 },
  { title: "Working with an unfamiliar stack", content: m9p2 },
  { title: "Scope discipline", content: m9p3 },
];

const slug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const buildChapters = (sectionId, lessons) =>
  lessons.map((lesson, i) => ({
    id: `${sectionId}-${slug(lesson.title)}`,
    title: lesson.title,
    sectionId,
    previousChapterId:
      i === 0 ? null : `${sectionId}-${slug(lessons[i - 1].title)}`,
    content: lesson.content,
    exercise: null,
  }));

const moduleLessons = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
];

export const chapters = nav.flatMap((section, i) =>
  buildChapters(section.id, moduleLessons[i]),
);
