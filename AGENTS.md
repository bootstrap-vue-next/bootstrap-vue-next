# AI Agents for BootstrapVueNext Monorepo

> Purpose: adapt generic Vue/Nuxt app rules to this repository's monorepo structure, where `packages/` contains publishable libraries and `apps/` contains local applications/documentation.

## 1) Repository Intent (Read First)

This repository is **not a single app**.
It is a monorepo with two different categories of code:

- `packages/` => publishable libraries/modules (public API stability, tree-shaking, SSR safety)
- `apps/` => local applications for docs/demo/testing (VitePress docs app + playground app)

Treat each area with different constraints.

## Skills

All skills are located in `.agents/skills/*` and are resolved by name.

Load these skills for Vue/Nuxt tasks:

- create-adaptable-composable
- vue-best-practices
- vue-debug-guides
- vue-router-best-practices
- vue-testing-best-practices
- vitepress

Load these skills for any Vue/Nuxt task:
- vue-best-practices (vuejs-ai/skills)

## 2) Directory Roles

### Library and module code (primary product)

- `packages/bootstrap-vue-next/`:
  - Main Vue 3 component library (core product)
  - Must preserve public API expectations
  - Must be SSR-safe
  - Must keep exports tree-shakable and structured
- `packages/nuxt/`:
  - Nuxt integration/module package
  - Must behave like a reusable package, not app-only code

### App code (supporting tooling and docs)

- `apps/docs/`:
  - VitePress docs site
  - Contains examples, docs data, rendering for documentation
  - Not the distribution artifact for library consumers
- `apps/playground/`:
  - Example/test app for real-world consumer-style usage
  - Used to validate integration scenarios

## 3) Global Coding Standards

Apply these unless a package-specific rule is stricter.

- Use Vue Composition API with `<script setup lang="ts">`
- Prefer `ref` over `reactive`
- Use `shallowRef` for large objects/arrays when deep tracking is unnecessary
- Use `computed` for derived state
- Use `async/await` in composables
- Keep one responsibility per component
- Use typed `defineProps`, typed `defineEmits`, and typed `defineSlots`
- Avoid destructuring reactive objects in ways that break reactivity outside safe compiler contexts
- TypeScript strict behavior expected; type props/emits/composable returns explicitly

## 4) Monorepo-Specific Rules (Critical)

### 4.1 For `packages/bootstrap-vue-next` (core library)

- Think like a **library maintainer**, not app developer.
- Avoid implementation choices that leak unstable internals into public API.
- Any public composable/component/directive/type export must follow existing export path conventions.
- Preserve tree-shakable import paths.
- For browser globals, use SSR-safe helpers (`getSafeWindow()`, `getSafeDocument()`) instead of direct `window`/`document` access. Always treating them as potentially unavailable.
- If adding/changing component props/events/slots, update docs data files in `apps/docs/src/data/components/*.data.ts`.

### 4.2 For `packages/nuxt` (Nuxt module)

- Treat as reusable package code.
- Keep runtime/module boundaries clean.
- Avoid app-local assumptions and app-only shortcuts.
- Ensure changes are compatible with consumer Nuxt projects.

### 4.3 For `apps/docs` (VitePress docs app)

- Docs examples should reflect correct consumer usage.
- Prefer specific package subpath imports for runtime code examples to model tree-shaking behavior.
- Use documented demo/fragment conventions for docs snippets (`DEMO`/`FRAGMENT`) where applicable.

### 4.4 For `apps/playground` (consumer simulation app)

- Use as integration validation surface.
- Keep changes focused on demonstrating/validating package behavior.
- Do not treat playground-specific patterns as library architecture decisions.

## 5) Data Fetching and Nuxt Guidance

- Use Nuxt auto-import conventions in Nuxt contexts.
- Keep feature boundaries modular (layer-friendly organization) when working on Nuxt-oriented code.

## 6) Testing and Validation Workflow

Before marking work complete, run relevant checks for touched areas.

Required for core library changes:

- `pnpm --filter bootstrap-vue-next run test:lint`
- `pnpm --filter bootstrap-vue-next run test:unit:ci`
- `pnpm --filter bootstrap-vue-next run build`

For type safety verification in Vue/Nuxt contexts, run workspace/package type checks (including `vue-tsc`) when applicable.

## 7) Package Manager and Tooling Constraints

- Use `pnpm` only.
- Follow workspace filters (`--filter`) for targeted tasks.
- Avoid docs production build assumptions when network-dependent tasks are known to fail.

## 8) AI Change Safety Checklist

When making any change, first identify target scope:

1. Is this in `packages/` (library/module) or `apps/` (docs/playground app)?
2. Is the change public API, internal implementation, docs content, or demo-only?
3. Does it require export map/index updates?
4. Does it require docs data (`*.data.ts`) updates?
5. Does it require SSR-safety handling?
6. Which filtered build/test/lint commands validate it?

If scope is mixed (for example, library + docs), validate both sides before completion.

## 9) Practical Decision Rule

If there is a conflict between "generic Nuxt app best practice" and "library packaging/public API constraints", prefer the library constraints for `packages/` and app conventions for `apps/`.

In short:

- `packages/*` => build for external consumers
- `apps/*` => build for documentation, demos, and local validation
