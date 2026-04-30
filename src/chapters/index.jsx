import { nav } from "./nav.js";

import whatYoullNeed from "./1_getting_started/1_what_youll_need.md?raw";
import installingClaudeCode from "./1_getting_started/2_installing_claude_code.md?raw";
import rareRepoSetup from "./1_getting_started/3_rare_repo_setup.md?raw";
import githubCli from "./1_getting_started/4_github_cli.md?raw";

import thePredictionRobot from "./2_llms_and_prompting/1_the_prediction_robot.md?raw";
import tokensAndContextWindow from "./2_llms_and_prompting/2_tokens_and_the_context_window.md?raw";
import fromLlmToAgent from "./2_llms_and_prompting/3_from_llm_to_agent.md?raw";
import anatomyOfAStrongPrompt from "./2_llms_and_prompting/4_anatomy_of_a_strong_prompt.md?raw";
import goodPromptsInPractice from "./2_llms_and_prompting/5_good_prompts_in_practice.md?raw";

import theNewHireMindset from "./3_exploring_unknown_codebase/1_the_new_hire_mindset.md?raw";
import questionsToAskANewCodebase from "./3_exploring_unknown_codebase/2_questions_to_ask_a_new_codebase.md?raw";
import turningExplorationIntoArtifacts from "./3_exploring_unknown_codebase/3_turning_exploration_into_artifacts.md?raw";
import verifyingWhatClaudeGenerates from "./3_exploring_unknown_codebase/4_verifying_what_claude_generates.md?raw";

import theLoop from "./4_claude_code_modes/1_the_loop.md?raw";
import whyModesExist from "./4_claude_code_modes/2_why_modes_exist.md?raw";
import planMode from "./4_claude_code_modes/3_plan_mode.md?raw";
import askBeforeEdits from "./4_claude_code_modes/4_ask_before_edits.md?raw";
import editAutomatically from "./4_claude_code_modes/5_edit_automatically.md?raw";
import modeChoiceIsDeliberate from "./4_claude_code_modes/6_mode_choice_is_deliberate.md?raw";

import the50FirstDatesCoworker from "./5_context_and_memory/1_the_50_first_dates_coworker.md?raw";
import claudeMdAsPersistentContext from "./5_context_and_memory/2_claude_md_as_persistent_context.md?raw";
import seeTheDifference from "./5_context_and_memory/3_see_the_difference.md?raw";
import claudeMdGrowsWithYourProject from "./5_context_and_memory/4_claude_md_grows_with_your_project.md?raw";

import theLoopInPractice from "./6_implementing_features/1_the_loop_in_practice.md?raw";
import avoidingVibeCoding from "./6_implementing_features/2_avoiding_vibe_coding.md?raw";
import featureWalkthroughs from "./6_implementing_features/3_feature_walkthroughs.md?raw";
import midFeaturePivots from "./6_implementing_features/4_mid_feature_pivots.md?raw";

import whatYouveLearnedCondensed from "./7_workflows_and_tandem/1_what_youve_learned_condensed.md?raw";
import whyWorkflowsMatter from "./7_workflows_and_tandem/2_why_workflows_matter.md?raw";
import whatIsAClaudeCodeSkill from "./7_workflows_and_tandem/3_what_is_a_claude_code_skill.md?raw";
import introducingTandem from "./7_workflows_and_tandem/4_introducing_tandem.md?raw";
import userLevelClaudeMdAndDevProfile from "./7_workflows_and_tandem/5_user_level_claude_md_and_dev_profile.md?raw";

import greenfieldIsDifferentFromBrownfield from "./8_capstone/1_greenfield_is_different_from_brownfield.md?raw";
import workingWithAnUnfamiliarStack from "./8_capstone/2_working_with_an_unfamiliar_stack.md?raw";
import scopeDiscipline from "./8_capstone/3_scope_discipline.md?raw";

// Chapter entries are built module-by-module below. Within a module, each
// chapter's `previousChapterId` points at the preceding chapter so the "next /
// previous" buttons chain correctly.

const module1 = [
  { title: "What you'll need", content: whatYoullNeed },
  { title: "Installing Claude Code", content: installingClaudeCode },
  { title: "Rare repo setup", content: rareRepoSetup },
  { title: "GitHub CLI", content: githubCli },
];

const module2 = [
  { title: "The prediction robot", content: thePredictionRobot },
  { title: "Tokens and the context window", content: tokensAndContextWindow },
  { title: "From LLM to agent", content: fromLlmToAgent },
  { title: "Anatomy of a strong prompt", content: anatomyOfAStrongPrompt },
  { title: "Good prompts in practice", content: goodPromptsInPractice },
];

const module3 = [
  { title: "The new-hire mindset", content: theNewHireMindset },
  { title: "Questions to ask a new codebase", content: questionsToAskANewCodebase },
  { title: "Turning exploration into artifacts", content: turningExplorationIntoArtifacts },
  { title: "Verifying what Claude generates", content: verifyingWhatClaudeGenerates },
];

const module4 = [
  { title: "The loop: Understand → Plan → Break down → Build → Confirm", content: theLoop },
  { title: "Why modes exist", content: whyModesExist },
  { title: "Plan mode", content: planMode },
  { title: "Ask before edits", content: askBeforeEdits },
  { title: "Edit automatically", content: editAutomatically },
  { title: "Mode choice is deliberate", content: modeChoiceIsDeliberate },
];

const module5 = [
  { title: "The 50 First Dates coworker", content: the50FirstDatesCoworker },
  { title: "CLAUDE.md as persistent context", content: claudeMdAsPersistentContext },
  { title: "See the difference", content: seeTheDifference },
  { title: "CLAUDE.md grows with your project", content: claudeMdGrowsWithYourProject },
];

const module6 = [
  { title: "The loop in practice", content: theLoopInPractice },
  { title: "Avoiding vibe coding", content: avoidingVibeCoding },
  { title: "Feature walkthroughs", content: featureWalkthroughs },
  { title: "Mid-feature pivots", content: midFeaturePivots },
];

const module7 = [
  { title: "What you've learned, condensed", content: whatYouveLearnedCondensed },
  { title: "Why workflows matter", content: whyWorkflowsMatter },
  { title: "What is a Claude Code skill?", content: whatIsAClaudeCodeSkill },
  { title: "Introducing Tandem", content: introducingTandem },
  { title: "Your user-level CLAUDE.md and Dev Profile", content: userLevelClaudeMdAndDevProfile },
];

const module8 = [
  { title: "Greenfield is different from brownfield", content: greenfieldIsDifferentFromBrownfield },
  { title: "Working with an unfamiliar stack", content: workingWithAnUnfamiliarStack },
  { title: "Scope discipline", content: scopeDiscipline },
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
