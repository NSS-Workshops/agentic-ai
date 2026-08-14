You've explored the Rare codebase. You can name the major pieces, trace a request flow, and you've committed documentation artifacts. Module III was about using Claude Code to build understanding. This module is about using Claude Code to change things.

Before you change anything, you need a process. A lightweight loop that keeps you in the driver's seat while Claude Code does the heavy lifting.

## The five steps

Every non-trivial task follows the same pattern:

**1. Understand.** Before touching anything, ask Claude Code to explain the relevant code. What's already there? How does the current flow work? What assumptions are you about to make?

It's tempting to skip this step. "I already know what I want to build, just let me build it." But the five minutes you spend understanding the existing code saves you from backing out of the wrong approach thirty minutes in. You practiced this kind of exploration in Module III. Now it becomes load-bearing.

**2. Plan.** Propose an approach before writing code. What files will change? What's the smallest diff that solves the problem? Are there edge cases?

Not every plan needs to be formal. For a one-line fix, the plan might be one sentence. For a migration that touches a dozen files, you want a real list.

**3. Break down.** Split the plan into small sub-steps you can verify one at a time. "Migrate from CRA to Vite" is not something you can verify in one shot. "Replace the dev script in package.json" is checkable.

**4. Build.** Implement one sub-step at a time. Not the whole plan at once. One piece, verified, then the next.

**5. Confirm.** Run it. Run the tests (if they exist). Read the diff. Be able to explain what changed and why. This is where you catch the prediction robot being confidently wrong (hallucinations). If you can't explain a change, you don't own it yet.

## Why a loop?

The temptation with AI-powered development is to hand over the wheel. Give Claude the full task, let it run, and accept whatever comes back. That works for small things. It also produces code you can't debug, changes you can't explain, and bugs you don't notice until they're in production.

The loop is how you use an AI tool to get *faster* and *smarter* at the same time, instead of just faster. Each Understand step builds your knowledge of the codebase. Each Confirm step forces you to verify what actually happened. Over time, the loop gets faster because your understanding compounds.

Every chapter in this module, and every exercise for the rest of the course, maps back to these five steps. When you're stuck, come back here.

## Quick self-check

1. Why does the Understand step come before Plan, not after?
2. What's the risk of skipping the Confirm step when the Build step went smoothly?
3. How does the exploration habit from Module III (ask questions, verify answers) relate to this loop?
