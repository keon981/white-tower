# Description

1. All responses must be in Traditional Chinese unless specific terms or tool names require their original language.
2. Code comments must be in English.
3. If the user provides input in another language, translate the response into Traditional Chinese unless explicitly asked otherwise.
4. Always follow the user's requested tools and development environment.

## Tech Stack 
- React
- Vite
- VItest
- TypeScript
- Tailwind CSS
- Shadcn UI

# General Code Style & Formatting
- Follow the Airbnb Style Guide for code formatting.
- Use English for all code and documentation.
- One export per file.

## TypeScript Best Practices
- Use TypeScript for all code; prefer `interfaces` over `types`.
- Avoid `any`; use explicit types and maps instead.
- Use functional components with TypeScript interfaces.
- Enable strict mode in TypeScript for better type safety.
- Always declare the type of each variable and function (parameters and return value).

## Naming Conventions
- Use UpperCamelCase for classes.
- Use lowerCamelCase for variables, functions, and methods.
- Use kebab-case for file and directory names.
  - Use UpperCamelCase for React component file names (e.g., UserCard.tsx, not user-card.tsx).
  - Use lowerCamelCase for React custom hooks file names (e.g., useFetch.ts, not use-fetch.tsx).
- Use UPPERCASE for environment variables.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- You are an HTML author that cares about accessibility and semantics. Always opt for semantic HTML over divs and spans whenever possible. For example use <ul> for lists, <article> and <section> for sectioning pages and content, and <b>, <i>, <strong>, and <em> for emphasizing words.

## Project Structure & Architecture
- Structure files: exported component, libs, utils, pages, hooks, routers, types.

```
src
├── components          # Shared React components
├── hooks               # Custom React hooks
├── layouts
├── pages
├── router
├── styles
├── types               # TypeScript types
├── utils               # Helper functions
└── lib                 # Shared libraries
```

## Functions & Logic
- Keep functions short and single-purpose (<20 lines).
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Avoid deeply nested blocks by:
    - Using early returns.
    - Extracting logic into utility functions.
    - Use higher-order functions (map, filter, reduce) to simplify logic.
- Use default parameter values instead of null/undefined checks.
- Use "function" keyword for pure functions

# Data Handling
- Avoid excessive use of primitive types; encapsulate data in composite types.
- Avoid placing validation inside functions—use classes with internal validation instead.
- Prefer immutability for data:
    - Use readonly for immutable properties.
    - Use as const for literals that never change.

## Data Fetching & Forms
- Use TanStack Query (react-query) for frontend data fetching.
- Use React Hook Form for form handling.
- Use Zod for validation.

# Styling & UI
- Use Tailwind CSS for styling.
- Use Shadcn UI for components.

# State Management & Logic
- Use React Context for global state when needed
- Implement proper cleanup in useEffect hooks

# Testing
- For unit tests, use Vitest without explaining setup steps. Provide at least 3 test cases, including edge cases.
- Write unit tests for utilities and components

# Git
- When responding with a PR, the description must be concise and adhere to the Angular Team Commit Specification, **keeping the subject under 35 characters** . All PR descriptions must be in English, and comments on the PR should explain code refactoring for cleaner code when necessary.
- Requiring the following format: <type>: <subject> where the subject must be under 35 characters. 
- If asked to 'Clean Code' or refactor, rewrite the code in a simpler, more maintainable way and explain the reasons for the refactor in the PR message.

## The <type> descriptor options are:

1. feat: A new feature
2. fix: A bug fix
3. docs: Documentation only changes
4. style: Changes that do not affect code meaning (formatting, white-space)
5. refactor: Code changes that are neither bug fixes nor features
6. perf: Code improvements for performance
7. test: Adding or correcting tests
8. chore: Build process or auxiliary tools changes

Branch naming conventions must follow: '<type>/<component_name>/<feature_name>' format. If there's no specific component, omit the middle section. 

Type prefixes include:
1. feat or feature: New feature development
2. bugfix or bug: Fix a bug
3. hotfix: Immediate fixes to production
4. test or experimental: Experimental or test branches
5. release: Version release branch
6. merge: Temporary branch for conflict resolution
7. modify: Adjustments or optimizations
8. refactor: Code refactoring

# Documentation
- Maintain clear README with setup instruction
    - Document API interactions and data flows in README
- Keep manifest.json well-documented
- Document permission requirements
