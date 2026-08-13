import { nav } from "./nav.js";

import automatedSetup from "./1_getting_started/1_automated_setup.md?raw";

import thePredictionRobot from "./2_llms_and_prompting/1_the_prediction_robot.md?raw";
import tokensAndContextWindow from "./2_llms_and_prompting/2_tokens_and_the_context_window.md?raw";
import fromLlmToAgent from "./2_llms_and_prompting/3_from_llm_to_agent.md?raw";
import anatomyOfAStrongPrompt from "./2_llms_and_prompting/4_anatomy_of_a_strong_prompt.md?raw";
import goodPromptsInPractice from "./2_llms_and_prompting/5_good_prompts_in_practice.md?raw";

import theNewHireMindset from "./3_exploring_unknown_codebase/1_the_new_hire_mindset.md?raw";
import verifyingWhatClaudeGenerates from "./3_exploring_unknown_codebase/2_verifying_what_claude_generates.md?raw";

import theLoop from "./4_claude_code_modes/1_the_loop.md?raw";
import whyModesExist from "./4_claude_code_modes/2_why_modes_exist.md?raw";
import planMode from "./4_claude_code_modes/3_plan_mode.md?raw";
import askBeforeEdits from "./4_claude_code_modes/4_ask_before_edits.md?raw";
import editAutomatically from "./4_claude_code_modes/5_edit_automatically.md?raw";
import modeChoiceIsDeliberate from "./4_claude_code_modes/6_mode_choice_is_deliberate.md?raw";

import the50FirstDatesCoworker from "./5_context_and_memory/1_the_50_first_dates_coworker.md?raw";
import claudeMdAsPersistentContext from "./5_context_and_memory/2_claude_md_as_persistent_context.md?raw";
import claudeMdGrowsWithYourProject from "./5_context_and_memory/3_claude_md_grows_with_your_project.md?raw";

import shipWithOwnership from "./6_implementing_features/1_ship_with_ownership.md?raw";

import fromHabitsToWorkflow from "./7_workflows_and_tandem/1_from_habits_to_workflow.md?raw";
import whatsNext from "./7_workflows_and_tandem/2_whats_next.md?raw";

import greenfieldIsDifferent from "./8_capstone/1_greenfield_is_different.md?raw";
import pickYourProject from "./8_capstone/2_pick_your_project.md?raw";
import buildIt from "./8_capstone/3_build_it.md?raw";

// Chapter entries are built module-by-module below. Within a module, each
// chapter's `previousChapterId` points at the preceding chapter so the "next /
// previous" buttons chain correctly.

const module1 = [{ title: "Class Setup", content: automatedSetup }];

const module2 = [
  { title: "The prediction robot", content: thePredictionRobot },
  { title: "Tokens and the context window", content: tokensAndContextWindow },
  { title: "From LLM to agent", content: fromLlmToAgent },
  { title: "Anatomy of a strong prompt", content: anatomyOfAStrongPrompt },
  { title: "Good prompts in practice", content: goodPromptsInPractice },
];

const module3 = [
  { title: "The new-hire mindset", content: theNewHireMindset },
  {
    title: "Verifying what Claude generates",
    content: verifyingWhatClaudeGenerates,
  },
];

const module4 = [
  {
    title: "The loop: Understand → Plan → Break down → Build → Confirm",
    content: theLoop,
  },
  { title: "Why modes exist", content: whyModesExist },
  { title: "Plan mode", content: planMode },
  { title: "Ask before edits", content: askBeforeEdits },
  { title: "Edit automatically", content: editAutomatically },
  { title: "Mode choice is deliberate", content: modeChoiceIsDeliberate },
];

const module5 = [
  { title: "The 50 First Dates coworker", content: the50FirstDatesCoworker },
  {
    title: "CLAUDE.md as persistent context",
    content: claudeMdAsPersistentContext,
  },
  {
    title: "CLAUDE.md grows with your project",
    content: claudeMdGrowsWithYourProject,
  },
];

const module6 = [{ title: "Ship with ownership", content: shipWithOwnership }];

const module7 = [
  { title: "From habits to workflow", content: fromHabitsToWorkflow },
  { title: "What's next", content: whatsNext },
];

const module8 = [
  { title: "Greenfield is different", content: greenfieldIsDifferent },
  { title: "Pick your project", content: pickYourProject },
  { title: "Build it", content: buildIt },
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
];

export const chapters = nav.flatMap((section, i) =>
  buildChapters(section.id, moduleLessons[i]),
);
