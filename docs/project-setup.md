# Project Setup

This document captures the high-level decisions made to scaffold and configure the project.

## Scaffold Project

This project was scaffolded using **Vite** with the **React + TypeScript** template.  
Vite was chosen for its fast dev server, minimal configuration, and alignment with modern React tooling.

- Tools: Vite, React, TypeScript
- Template: React + TypeScript
- Docs: [Vite](https://vite.dev/)

## Version Control

Git was initialised locally and the repository created on GitHub using the GitHub CLI.  
This project follows **Conventional Commits** to keep commit history readable and intentional.

- Tools: Git, GitHub, GitHub CLI
- Docs: [Git](https://git-scm.com/), [GitHub](https://github.com/), [GitHub CLI](https://cli.github.com/)

## Commit Discipline

To enforce consistent commit messages, **Husky** and **CommitLint** were added early in the project.

- A `commit-msg` hook validates messages against the Conventional Commits spec
- This ensures a clean, readable commit history throughout development

## Code Formatting

**Prettier** is used to ensure consistent formatting across the codebase.
Formatting was applied to the initial scaffold and will be enforced as the project grows.

- Tools: Prettier
- Docs: [Prettier](https://prettier.io/)

## ESLint Configuration

ESLint is configured using the flat config format (ESLint v9) and scoped to the needs of a modern Vite + React + TypeScript project.

The configuration prioritises:

- recommended rule sets over custom rules

- clear separation between application code and test code

- alignment with Vite and TypeScript module resolution

### Key Characteristics

Uses ESLint's flat config (`eslint.config.js`)

Extends recommended configs from:

- JavaScript (`@eslint/js`)

- TypeScript (`typescript-eslint`)

- React, Hooks, and Fast Refresh (`eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)

- Accessibility (`eslint-plugin-jsx-a11y`)

- Imports (`eslint-plugin-import`)

Test-specific rules (`Vitest`, `Testing Library`) are scoped to test files only

Formatting-related rules are disabled via `Prettier`, which is applied last

### Module Resolution

To avoid false positives in a Vite environment:

- ESLint is configured to resolve TypeScript and Node-style imports

- Vite-specific root imports (e.g. `/vite.svg`) are explicitly ignored by `import/no-unresolved`

This ensures ESLint remains strict without conflicting with Vite’s runtime module resolution.

### Rationale

The ESLint setup is intentionally **extends-heavy**, relying on community-maintained recommended configs rather than manually enabling individual rules.

This keeps the configuration **maintainable**, **predictable**, and **easier to evolve** over time.

## Testing Setup

Unit and component tests are written using **Vitest**, configured to work with React and the DOM.

- Tests run in a `jsdom` environment
- Test globals (`describe`, `it`, `expect`) are enabled
- A shared setup file is used for global test configuration

Testing Library is used for React component testing, with Jest-style DOM matchers enabled.

## Editor and Runtime Configuration

A small amount of editor and runtime configuration is included to improve consistency and reproducibility across environments.

### Editor Configuration

An .editorconfig file is used to normalise basic editor behaviour (indentation, line endings, final newlines) across different editors and IDEs.

This is intentionally minimal and complements, rather than replaces, Prettier.

### Node Version

A .nvmrc file is included to indicate the Node.js version used during development.

This helps ensure consistent behaviour across machines and provides a clear reference point if CI is added later.

## CI

GitHub Actions runs `npm run check` on pushes and pull requests, using `.nvmrc` for Node version consistency.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
