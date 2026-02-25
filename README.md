# Multi-Step Form

A multi-step subscription form built as a portfolio project to demonstrate component design, state management, validation UX, and accessibility in React.

Based on the [Frontend Mentor Multi-step Form challenge](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

## Live Demo

[Multi-Step Form](https://multi-step-form-uk.vercel.app/)

## What It Demonstrates

- **Wizard flow** — linear step progression with one deliberate non-linear escape (changing a plan from the summary screen)
- **Validation UX** — errors surface only on first "Next" attempt, then revalidate live (debounced) so users aren't interrupted while typing
- **Accessibility** — semantic HTML, `aria-invalid`, `aria-describedby` on error fields, keyboard navigation, and focus management on step transitions
- **Design-before-code** — the component hierarchy, state ownership, data flow, and validation behaviour were all specified in `[docs/thinking-in-react.md](docs/thinking-in-react.md)` before a line of implementation was written

## Tech Stack

| Tool                              | Why                                                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **React 19**                      | Component model maps naturally to a wizard — each step is a self-contained unit with clearly bounded props and callbacks                    |
| **TypeScript**                    | Catches shape mismatches at the seams between components (e.g. `FormData`, `Plan`, `AddOn` types are the contract between wizard and steps) |
| **Vite**                          | Fast dev server and build tooling with minimal config                                                                                       |
| **CSS Modules**                   | Scoped styles without a runtime — keeps each component's styles co-located and avoids class name collisions                                 |
| **clsx**                          | Lightweight conditional className utility                                                                                                   |
| **Vitest + Testing Library**      | Unit and integration tests for validation logic and step interactions; co-located with the source they test                                 |
| **ESLint + Prettier + Stylelint** | Consistent code style enforced at the tool level, not by convention                                                                         |
| **Husky + commitlint**            | Conventional commits enforced pre-push; keeps the git log readable                                                                          |

## Running Locally

```bash
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
npm install
npm run dev
```

Other useful commands:

```bash
npm test             # run tests in watch mode
npm run check        # format check + lint + typecheck + tests (CI equivalent)
npm run build        # production build
npm run preview      # preview the production build locally
```

## Architecture & Design Decisions

The implementation follows decisions made upfront in `[docs/thinking-in-react.md](docs/thinking-in-react.md)`. Key choices:

- `**MultiStepForm` owns all wizard state — `currentStep`, `personalInfo`, `planId`, `billingCycle`, and `addOnIds`. Step components receive slices of this state as props and communicate back via callbacks (`onNext`, `onBack`, `onPersonalInfoChange`, etc.). No Context, no external store — prop drilling is appropriate at this scale.
- **Derived values are computed, not stored** — total cost, summary rows, and per-step validity are pure functions called at render time, avoiding sync bugs.
- **Validation is centralised** — `validateStep()` runs in `MultiStepForm` when `onNext()` is invoked. Steps don't decide whether they're valid; they only display error state passed to them.
- **Submission is a callback** — `onSubmit(formData)` is provided by the parent. The form is agnostic to what happens next (API call, routing, analytics), making it portable and easily testable.

See `[docs/thinking-in-react.md](docs/thinking-in-react.md)` for the full component hierarchy, data model, and reasoning.
