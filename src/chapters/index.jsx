import { nav } from "./nav.js";

import whatYoullNeed from "./1_getting_started/what_youll_need.md?raw";
import proPlanVsApiCredits from "./1_getting_started/pro_plan_vs_api_credits.md?raw";
import installingClaudeCode from "./1_getting_started/installing_claude_code.md?raw";
import rareRepoSetup from "./1_getting_started/rare_repo_setup.md?raw";
import githubCli from "./1_getting_started/github_cli.md?raw";

import thePredictionRobot from "./2_llms_and_agents/the_prediction_robot.md?raw";
import tokens from "./2_llms_and_agents/tokens.md?raw";
import theContextWindow from "./2_llms_and_agents/the_context_window.md?raw";
import confidentlyWrong from "./2_llms_and_agents/confidently_wrong.md?raw";
import fromLlmToAgent from "./2_llms_and_agents/from_llm_to_agent.md?raw";
import permissionPrompts from "./2_llms_and_agents/permission_prompts.md?raw";

import whyPromptingMatters from "./3_prompting_fundamentals/why_prompting_matters.md?raw";
import anatomyOfAStrongPrompt from "./3_prompting_fundamentals/anatomy_of_a_strong_prompt.md?raw";
import kindsOfContextToProvide from "./3_prompting_fundamentals/kinds_of_context_to_provide.md?raw";
import goodVsBadPrompts from "./3_prompting_fundamentals/good_vs_bad_prompts.md?raw";
import promptingIsIterative from "./3_prompting_fundamentals/prompting_is_iterative.md?raw";

import theNewHireMindset from "./4_exploring_unknown_codebase/the_new_hire_mindset.md?raw";
import questionsToAskANewCodebase from "./4_exploring_unknown_codebase/questions_to_ask_a_new_codebase.md?raw";
import turningExplorationIntoArtifacts from "./4_exploring_unknown_codebase/turning_exploration_into_artifacts.md?raw";
import verifyingWhatClaudeGenerates from "./4_exploring_unknown_codebase/verifying_what_claude_generates.md?raw";

import theLoop from "./5_claude_code_modes/the_loop.md?raw";
import whyModesExist from "./5_claude_code_modes/why_modes_exist.md?raw";
import planMode from "./5_claude_code_modes/plan_mode.md?raw";
import askBeforeEdits from "./5_claude_code_modes/ask_before_edits.md?raw";
import editAutomatically from "./5_claude_code_modes/edit_automatically.md?raw";
import modeChoiceIsDeliberate from "./5_claude_code_modes/mode_choice_is_deliberate.md?raw";

import the50FirstDatesCoworker from "./6_context_and_memory/the_50_first_dates_coworker.md?raw";
import claudeMdAsPersistentContext from "./6_context_and_memory/claude_md_as_persistent_context.md?raw";
import whatBelongsInAClaudeMd from "./6_context_and_memory/what_belongs_in_a_claude_md.md?raw";
import claudeMdGrowsWithYourProject from "./6_context_and_memory/claude_md_grows_with_your_project.md?raw";
import managingContextWithinASession from "./6_context_and_memory/managing_context_within_a_session.md?raw";
import whatNotToPersist from "./6_context_and_memory/what_not_to_persist.md?raw";

import theLoopInPractice from "./7_implementing_features/the_loop_in_practice.md?raw";
import avoidingVibeCoding from "./7_implementing_features/avoiding_vibe_coding.md?raw";
import featureWalkthroughs from "./7_implementing_features/feature_walkthroughs.md?raw";
import midFeaturePivots from "./7_implementing_features/mid_feature_pivots.md?raw";

import whatYouveLearnedCondensed from "./8_workflows_and_tandem/what_youve_learned_condensed.md?raw";
import whyWorkflowsMatter from "./8_workflows_and_tandem/why_workflows_matter.md?raw";
import whatIsAClaudeCodeSkill from "./8_workflows_and_tandem/what_is_a_claude_code_skill.md?raw";
import introducingTandem from "./8_workflows_and_tandem/introducing_tandem.md?raw";
import userLevelClaudeMdAndDevProfile from "./8_workflows_and_tandem/user_level_claude_md_and_dev_profile.md?raw";

import greenfieldIsDifferentFromBrownfield from "./9_capstone/greenfield_is_different_from_brownfield.md?raw";
import workingWithAnUnfamiliarStack from "./9_capstone/working_with_an_unfamiliar_stack.md?raw";
import scopeDiscipline from "./9_capstone/scope_discipline.md?raw";

// Chapter entries are built module-by-module below. Within a module, each
// chapter's `previousChapterId` points at the preceding chapter so the "next /
// previous" buttons chain correctly.

const module1 = [
  { title: "What you'll need", content: whatYoullNeed },
  { title: "Pro plan vs. API credits", content: proPlanVsApiCredits },
  { title: "Installing Claude Code", content: installingClaudeCode },
  { title: "Rare repo setup", content: rareRepoSetup },
  { title: "GitHub CLI", content: githubCli },
];

const module2 = [
  { title: "The prediction robot", content: thePredictionRobot },
  { title: "Tokens", content: tokens },
  { title: "The context window", content: theContextWindow },
  { title: "Confidently wrong", content: confidentlyWrong },
  { title: "From LLM to agent", content: fromLlmToAgent },
  { title: "Permission prompts", content: permissionPrompts },
];

const module3 = [
  { title: "Why prompting matters", content: whyPromptingMatters },
  { title: "Anatomy of a strong prompt", content: anatomyOfAStrongPrompt },
  { title: "Kinds of context to provide", content: kindsOfContextToProvide },
  { title: "Good vs. bad prompts", content: goodVsBadPrompts },
  { title: "Prompting is iterative", content: promptingIsIterative },
];

const module4 = [
  { title: "The new-hire mindset", content: theNewHireMindset },
  { title: "Questions to ask a new codebase", content: questionsToAskANewCodebase },
  { title: "Turning exploration into artifacts", content: turningExplorationIntoArtifacts },
  { title: "Verifying what Claude generates", content: verifyingWhatClaudeGenerates },
];

const module5 = [
  { title: "The loop: Understand → Plan → Break down → Build → Confirm", content: theLoop },
  { title: "Why modes exist", content: whyModesExist },
  { title: "Plan mode", content: planMode },
  { title: "Ask before edits", content: askBeforeEdits },
  { title: "Edit automatically", content: editAutomatically },
  { title: "Mode choice is deliberate", content: modeChoiceIsDeliberate },
];

const module6 = [
  { title: "The 50 First Dates coworker", content: the50FirstDatesCoworker },
  { title: "CLAUDE.md as persistent context", content: claudeMdAsPersistentContext },
  { title: "What belongs in a CLAUDE.md", content: whatBelongsInAClaudeMd },
  { title: "CLAUDE.md grows with your project", content: claudeMdGrowsWithYourProject },
  { title: "Managing context within a session", content: managingContextWithinASession },
  { title: "What not to persist", content: whatNotToPersist },
];

const module7 = [
  { title: "The loop in practice", content: theLoopInPractice },
  { title: "Avoiding vibe coding", content: avoidingVibeCoding },
  { title: "Feature walkthroughs", content: featureWalkthroughs },
  { title: "Mid-feature pivots", content: midFeaturePivots },
];

const module8 = [
  { title: "What you've learned, condensed", content: whatYouveLearnedCondensed },
  { title: "Why workflows matter", content: whyWorkflowsMatter },
  { title: "What is a Claude Code skill?", content: whatIsAClaudeCodeSkill },
  { title: "Introducing Tandem", content: introducingTandem },
  { title: "Your user-level CLAUDE.md and Dev Profile", content: userLevelClaudeMdAndDevProfile },
];

const module9 = [
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
  module9,
];

export const chapters = nav.flatMap((section, i) =>
  buildChapters(section.id, moduleLessons[i]),
);
